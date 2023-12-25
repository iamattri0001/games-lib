import React from "react";

const GameDetails = ({ params }) => {
  const { slug } = params;
  return <div>{slug}</div>;
};

export default GameDetails;
