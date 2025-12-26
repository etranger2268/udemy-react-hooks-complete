import { useEffect, useState } from 'react';
import type { User } from '../Lesson2_3';

export const useFetchUser = (userId: number) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;
    const fetchUser = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 3000));
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if (!res.ok) {
          throw new Error('データの取得に失敗しました');
        }

        const userData: User = await res.json();

        if (isMounted) {
          setUser(userData);
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchUser();

    return () => {
      isMounted = false;
    };
  }, [userId]);

  return { user, loading };
};
