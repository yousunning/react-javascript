import React from "react";
import { Fetch } from "./Fetch";
import { UserReponsitories } from "./UserRepositories";
function UserDetails({ data }) {
  return (
    //상세정보
    <div>
      <img src={data.avatar_url} alt={data.login} style={{ width: 200 }} />
      <div>
        <h1>{data.login}</h1>
        {data.name && <p>{data.name}</p>}
        {data.location && <p>{data.location}</p>}
      </div>
      <UserReponsitories
        login={data.login}
        onSelect={(repoName) => console.log(`${repoName}select`)}
      />
    </div>
  );
}

function GithubUser({ login }) {
  return (
    <Fetch
      uri={`https://api.github.com/users/${login}`}
      renderSuccess={UserDetails}
    />
  );
}
export default function App() {
  return <GithubUser login="yousunning" />;
}
