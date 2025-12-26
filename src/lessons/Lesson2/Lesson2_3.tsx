// import { useFetchUser } from './hooks/useFetchUser';
import useSWR from 'swr';

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    city: string;
  };
};

const fetcher = <T,>(...args: [RequestInfo, RequestInit?]): Promise<T> =>
  fetch(...args).then((res) => res.json());

export default function Lesson2_3() {
  // const { user, loading } = useFetchUser(2);
  const {
    data: user,
    error,
    isLoading: loading,
  } = useSWR<User>('https://jsonplaceholder.typicode.com/users/1', fetcher);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    <p>エラーが発生しました</p>;
  }

  if (!user) {
    return (
      <div>
        <h1>Error</h1>
        <p>ユーザーの情報が見つかりません。</p>
      </div>
    );
  }

  return (
    <div>
      <h1>ユーザー情報</h1>
      <p>
        <strong>名前:</strong> {user.name}
      </p>
      <p>
        <strong>ユーザー名:</strong> {user.username}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>都市:</strong> {user.address.city}
      </p>
    </div>
  );
}
