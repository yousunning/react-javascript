import { useCallback, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
export default function RepositoryReadme({ repo, login }) {
  const [loading, setLoding] = useState(false);
  const [error, setError] = useState();
  const [markdown, setMarkdown] = useState();

  const loadReadme = useCallback(async (login, repo) => {
    setLoding(true);
    const uri = "https://api.github.com/repo/${login}/${repo}/readme";
    const { download_url } = await fetch(uri).then((res) => res.json());
    const markdown = await fetch(download_url).then((res) => res.text());
    setMarkdown(markdown);
    setLoding(false);
  }, []);
  useEffect(() => {
    if (!repo || !login) return;
    loadReadme(login, repo).catch(setError);
  }, [repo]);
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if (loading) return <p>Loding...</p>;
  return <ReactMarkdown children={markdown} />;
}
