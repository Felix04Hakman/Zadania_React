import React from "react";
import Pet from "./Pet";

export function Result({ pets }) {
  return (
    <div className="search">
      {!pets.length ? (
        <h2>No pets found</h2>
      ) : (
        pets.map(({ name, id, breed, animal, city, state, images }) => (
          <Pet
            name={name}
            animal={animal}
            breed={breed}
            key={id}
            images={images}
            city={city}
            state={state}
            id={id}
          />
        ))
      )}
    </div>
  );
}
