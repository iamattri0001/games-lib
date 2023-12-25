"use client";
import { useEffect, useState } from "react";

const GameDetails = ({ params }) => {
  const { slug } = params;
  const [gameInfo, setGameInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGameInfo = async () => {
      try {
        const response = await fetch(`/api/gameInfo?name=${slug}`);

        if (!response.ok) {
          throw new Error("Something went wrong");
        }

        const { data } = await response.json();
        setGameInfo(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchGameInfo();
  }, [slug]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!gameInfo) {
    return <div>Loading...</div>;
  }

  return <div dangerouslySetInnerHTML={{ __html: gameInfo?.description }} />;
};

export default GameDetails;
