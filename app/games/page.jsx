"use client";

import { useEffect, useState } from "react";

const Games = async () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const res = await fetch("/api/games");
        if (res.ok) {
          console.log(res.body);
          const data = await res.json();
          console.log(data);
          setGames(data);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (err) {
        console.error("Error fetching data: ", err);
      }
    };

    fetchGames();
  }, []);

  return <div>Games</div>;
};

export default Games;
