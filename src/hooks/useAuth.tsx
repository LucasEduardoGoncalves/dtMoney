import { createContext, useEffect, useState, ReactNode, useContext } from 'react';
import { api } from '../services/api';

interface AuthProviderProps {
    children: ReactNode,
};

interface UserProps {
    name: string,
    email: string,
    senha: string,
    id: string
}

interface AuthContextData {
    user: UserProps;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({children}: AuthProviderProps) {
    const [user, setUser] = useState<UserProps>({} as UserProps);

    useEffect(() => {
        api.get('profile').then(response => setUser(response.data));
    },[])

    return (
        <AuthContext.Provider value={{user}}>
            {children}
        </AuthContext.Provider>
    )
};

export function useAuth () {
    const context = useContext(AuthContext);
    return context;
}  