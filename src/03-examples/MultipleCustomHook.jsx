import React from "react";
import { useFetch } from "../hook/useFetch";

export const MultipleCustomHook = () => {
  useFetch();

  return <div>MultipleCustomHook</div>;
};
