import React, { useEffect, useState } from "react";

function GitHubUser({ login }) {
  //정상, 진행중, 에러
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loding, setLoding] = useState(false);
  //비동기 통신으로 렌더링해서 가져올거다.
  useEffect(() => {
    // useEffecr(콜백함수, 인덱스)
    if (!login) return;
    setLoding(true);
    fetch(`https://api.github.com/users/${login}`)
      .then((data) => data.json())
      .then(setData)
      .then(() => setLoding(false))
      .catch(setError);
  }, [login]);

  if (loding) return <h1>loding....</h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>; //에러있을 시 이렇게 출력
  if (!data) return null;

  return (
    <div className="githubUser">
      <img src={data.avatar_url} alt={data.login} style={{ width: 200 }} />
      <div>
        <h1>{data.login}</h1>
        {data.name && <p>{data.name}</p>}
        {data.location && <p>{data.location}</p>}
      </div>
    </div>
  );
}

export default function App() {
  return <GitHubUser login="yousunning" />;
}
