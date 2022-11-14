import { createContext, ReactNode } from 'react';

interface UserProps {
  name: string;
  avatarUrl: string;
}

export interface AuthContextDataProps {
  user: UserProps;
  signIn: () => Promise<void>;
}

interface AuthProviderprops {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextDataProps)

export function AuthContextProvider({ children }: AuthProviderprops) {

  async function signIn() {
    console.log('Vamos logar!');
    
  }
  return (
    <AuthContext.Provider value={{
      signIn,
      user: {
        name: 'Rodrigo Emanuel',
        avatarUrl: 'https://github.com/drigosantos81.png'
      }
    }}>
      {children}
    </AuthContext.Provider>
  )
}