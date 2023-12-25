"use client";
import { useEffect, useState } from "react";
import GameCard from "@/components/GameCard";

const Games = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const res = await fetch("/api/games");
        if (res.ok) {
          const { data } = await res.json();
          setGames(data.results);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (err) {
        console.error("Error fetching data: ", err);
      }
    };

    fetchGames();
  }, []);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 pt-10">
      {games.map((game, i) => (
        <GameCard game={game} key={i} />
      ))}
    </div>
  );
};

export default Games;
