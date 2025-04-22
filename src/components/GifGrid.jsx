import { useEffect, useState } from "react";
import { GridItem } from "./GridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

  const{gifs, isLoading} = useFetchGifs(category)

  return (
    <>
      <h3>{category}</h3>
      {/* {
        isLoading
        ? ( <h2>Loading...</h2> ): null
      } */}
      {
         isLoading
         && ( <h2>Loading...</h2> )
      }
      <div className="card-grid">
        {gifs.map((gif) => (
            <GridItem key={gif.id} {...gif}/>
        ))}
      </div>
    </>
  );
};
