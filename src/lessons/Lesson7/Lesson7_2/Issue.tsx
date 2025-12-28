import type { GithubIssue } from './Issues';

type Props = {
  issue: GithubIssue;
};

export default function Issue({ issue }: Props) {
  return (
    <div className="border py-0.5 px-2 rounded">
      <a href={issue.html_url} className="text-blue-600">
        {issue.title}
      </a>
    </div>
  );
}
