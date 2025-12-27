import { createContext, useContext, useState } from 'react';

type UserInfo = {
  username: string;
  email: string;
};

type AuthContextType = {
  user: UserInfo | null;
  login: (userInfo: UserInfo) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserInfo | null>(null);

  const login = (userInfo: UserInfo) => {
    if (userInfo.username === 'textUser' && userInfo.email === 'test@gmail.com') {
      setUser(userInfo);
    } else {
      console.log(`Can't logged in`);
    }
  };
  const logout = () => setUser(null);

  const contextValue = {
    user,
    login,
    logout,
  };

  return <AuthContext value={contextValue}>{children}</AuthContext>;
}
