import { useFetchUser } from './hooks/useFetchUser';

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    city: string;
  };
};

export default function Lesson2_3() {
  const { user, loading } = useFetchUser(2);

  if (loading) {
    return <p>Loading...</p>;
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
