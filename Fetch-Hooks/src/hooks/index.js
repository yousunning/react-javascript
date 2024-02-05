//npm i react-markdown 설치

import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
//useEffect, useCallback,useMemo Dependency Array(의존성 배열)
export function useFetch(uri) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoding] = useState(true);

  useEffect(() => {
    if (!uri) return;
    fetch(uri)
      .then((data) => data.json())
      .then(setData)
      .then(() => setLoding(false))
      .catch(setError);
  }, [uri]); //종속배열

  return {
    loading,
    data,
    error,
  };
}
export const useIterator = (items = [], initialValue = 0) => {
  const [i, setIndex] = useState(initialValue);

  const prev = useCallback(() => {
    if (i === 0) return setIndex(items.length - 1);
    setIndex(i - 1);
  }, [i]); //  React Hook에서 Dependency Array(의존성 배열)
  const next = useCallback(() => {
    if (i === items.length - 1) return setIndex(0);
    setIndex(i + 1);
  }, [i]); //useEffect, useCallback,useMemo Dependency Array(의존성 배열)
  return [items[i], prev, next];
};
