import React from "react";
import useGenres, { Genre } from "../hooks/useGenres";

// interface Props{
//     genre:Genre
// }

const GenreList = () => {
  const { genres, error, isLoading } = useGenres();
  return (
    <ul>
      {genres.map((g) => (
        <li key={g.id}>{g.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
