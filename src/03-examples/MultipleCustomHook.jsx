/* eslint-disable no-unused-vars */
import { useFetch } from "../hook/useFetch";
import { useCounter } from "../hook/useCounter";
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCard } from "./PokemonCard";

export const MultipleCustomHook = () => {
  const { counter, decrement, increment } = useCounter(1);

  const { data, hasError, isLoading } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${counter}`
  );

  return (
    <>
      <h1>Informacion de pokemon</h1>
      <hr />

      {isLoading ? (
        <LoadingMessage />
      ) : (
        <PokemonCard
          id={counter}
          name={data.name}
          sprites={[
            data.sprites.front_default,
            data.sprites.front_shiny,
            data.sprites.back_default,
            data.sprites.back_shiny,
          ]}
        />
      )}

      <button
        onClick={() => (counter > 1 ? decrement() : null)}
        className="btn btn-primary mt-2"
      >
        Anterior
      </button>

      <button onClick={() => increment()} className="btn btn-primary mt-2">
        Siguiente
      </button>

      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </>
  );
};
