import React, { createContext, useContext, useState, useEffect } from 'react'
import { authApi } from '@/services/api'
import type { User } from '@/types'

interface AuthContextType {
  user: User | null
  token: string | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('admin_user')
    return saved ? JSON.parse(saved) : null
  })
  const [token, setToken] = useState<string | null>(() => {
    return localStorage.getItem('admin_token')
  })
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    if (token) {
      authApi
        .me()
        .then(userData => {
          setUser(userData)
          localStorage.setItem('admin_user', JSON.stringify(userData))
        })
        .catch(() => {
          // Token expired or invalid
          setUser(null)
          setToken(null)
          localStorage.removeItem('admin_token')
          localStorage.removeItem('admin_user')
        })
        .finally(() => {
          setIsLoading(false)
        })
    } else {
      setIsLoading(false)
    }
  }, [token])

  const login = async (email: string, password: string) => {
    const data = await authApi.login(email, password)
    setUser(data.user)
    setToken(data.token)
    localStorage.setItem('admin_token', data.token)
    localStorage.setItem('admin_user', JSON.stringify(data.user))
  }

  const logout = async () => {
    try {
      if (token) {
        await authApi.logout()
      }
    } catch {
      // ignore network errors on logout
    } finally {
      setUser(null)
      setToken(null)
      localStorage.removeItem('admin_token')
      localStorage.removeItem('admin_user')
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: !!token && !!user,
        isLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
