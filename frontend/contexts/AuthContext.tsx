import { createContext, useContext, useEffect, useState } from 'react';
import { authAPI } from '@/lib/api';
import type { AuthContextType, User, LoginCredentials, RegisterCredentials } from '@/types/auth';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
            fetchUser();
        } else {
            setIsLoading(false);
        }
    }, []);

    const fetchUser = async () => {
        try {
            const userData = await authAPI.getProfile();
            setUser(userData);
        } catch (error) {
            localStorage.removeItem('token');
            setToken(null);
            setUser(null);
        } finally {
            setIsLoading(false);
        }
    };

    const login = async (credentials: LoginCredentials) => {
        try {
            const { token, ...userData } = await authAPI.login(credentials.email, credentials.password);
            localStorage.setItem('token', token);
            setToken(token);
            setUser(userData);
        } catch (error) {
            throw error;
        }
    };

    const register = async (credentials: RegisterCredentials) => {
        try {
            const { token, ...userData } = await authAPI.register(
                credentials.name,
                credentials.email,
                credentials.password
            );
            localStorage.setItem('token', token);
            setToken(token);
            setUser(userData);
        } catch (error) {
            throw error;
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
        setUser(null);
    };

    const updateProfile = async (data: Partial<User>) => {
        try {
            const updatedUser = await authAPI.updateProfile(data);
            setUser(updatedUser);
        } catch (error) {
            throw error;
        }
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                token,
                isAuthenticated: !!token,
                isLoading,
                login,
                register,
                logout,
                updateProfile,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
} 