import React from "react";
import { useFetch } from "./hooks";

export function Fetch({
  uri,
  renderSuccess,
  lodingFallback = <p>loding...</p>,
  renderError = (error) => <pre>{JSON.stringify(error, null, 2)}</pre>,
}) {
  const { loding, data, error } = useFetch(uri);
  if (loding) return lodingFallback;
  if (error) return renderError(error);
  if (data) return renderSuccess({ data });
}
//https://chamdom.blog/what-is-dependency-array/
