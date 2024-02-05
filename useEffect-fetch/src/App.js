import React, { useEffect, useState } from "react";

const loadJSON = (key) => key && JSON.parse(localStorage.getItem(key)); // &&존재한다면 로컬 저장소에서 제이슨으로 돌려줘
const saveJSON = (key, data) => localStorage.setItem(key, JSON.stringify(data));

function GithubUser({ login }) {
  const [data, setData] = useState(loadJSON(`user:${login}`));

  useEffect(() => {
    if (!data) return; //로긴 데이터 없으면 리턴
    if (data.login === login) return; //데이터 같으면 리턴
    //비동기 통신 정보 조회 -로컬스토리지 정보 없을 때
    const { name, avatar_url, location } = data;
    //로컬 스토리지 저장하는 파트
    saveJSON(`user:${login}`, {
      name,
      login,
      avatar_url,
      location,
    });
  }, [data]);
  useEffect(() => {
    //비동기 통신
    if (!login) return;
    if (data && data.login === login) return;
    //data 스테이트 변수 값 생성 : 최초 비동기 통신
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData)
      .catch(console.error);
  }, [login]);

  if (data) return <pre>{JSON.stringify(data, null, 2)}</pre>;
  return null;
}
export default function App() {
  return <GithubUser login="moonhighway" />;
}
