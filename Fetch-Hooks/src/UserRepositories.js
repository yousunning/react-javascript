import React from "react";

import { Fetch } from "./Fetch";
import RepoMenu from "./RepoMenu";

export function UserReponsitories({ login, seleteRepo, onSelect = (f) => f }) {
  return (
    <Fetch
      uri={`https://api.github.com/users/${login}/repos`}
      renderSuccess={({ data }) => (
        <RepoMenu
          repositories={data}
          seleteRepo={seleteRepo}
          onSelect={onSelect}
          login={login}
        />
      )}
    />
  );
}
