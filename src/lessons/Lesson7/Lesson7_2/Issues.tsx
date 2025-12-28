import useSWR from 'swr';
import Issue from './Issue';

export type GithubIssue = {
  id: number;
  html_url: string;
  title: string;
};

type Props = {
  page: number;
};

const fetcher = <T,>(...args: Parameters<typeof fetch>): Promise<T> =>
  fetch(...args).then((res) => res.json());

export default function Issues({ page }: Props) {
  const { data: issues } = useSWR<GithubIssue[]>(
    `https://api.github.com/repos/facebook/react/issues?per_page=10&state=all&page=${page}`,
    fetcher,
  );
  return (
    <div className="mt-2 space-y-1">
      {Array.isArray(issues) ? (
        issues.map((issue) => <Issue key={issue.id} issue={issue} />)
      ) : (
        <p>No Data</p>
      )}
    </div>
  );
}
