import React from "react";
import { useFetch } from "../hook/useFetch";

export const MultipleCustomHook = () => {
  const { data, hasError, isLoading } = useFetch(
    "https://pokeapi.co/api/v2/pokemon/3"
  );

  return (
    <>
      <h1>Informacion de pokemon</h1>
      <hr />

      {isLoading && <p>Cargando...</p>}

      <h2> {data?.name}</h2>

      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </>
  );
};
