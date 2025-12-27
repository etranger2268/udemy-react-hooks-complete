import { createContext, useCallback, useContext, useMemo, useState } from 'react';

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
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default function Auth({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserInfo | null>(null);

  const login = useCallback((userInfo: UserInfo) => {
    if (userInfo.username === 'textUser' && userInfo.email === 'test@gmail.com') {
      setUser(userInfo);
    } else {
      console.log(`Can't logged in`);
    }
  }, []);

  const logout = useCallback(() => setUser(null), []);

  const contextValue = useMemo(() => ({ user, login, logout }), [user, login, logout]);

  return <AuthContext value={contextValue}>{children}</AuthContext>;
}
