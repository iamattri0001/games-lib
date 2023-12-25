import { FaStar, FaStarHalfStroke, FaArrowRight } from "react-icons/fa6";

import Image from "next/image";
import Link from "next/link";

const GameCard = ({ game }) => {
  const showRating = () => {
    const rating = Number(game.rating);
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating < i) {
        stars.push(<FaStarHalfStroke key={i} />);
        break;
      } else {
        stars.push(<FaStar key={i} />);
      }
    }
    return stars;
  };
  return (
    <div className="border border-ui-800 flex md:flex-col gap-y-5 items-center justify-center py-5 px-7 rounded-md transition-all hover:bg-ui-950 relative">
      <span className="absolute bg-ui-900 top-0 right-0 text-xs px-2 py-1 rounded">
        {game.released}
      </span>

      <div>
        <Image
          src={game.background_image}
          height={300}
          width={300}
          alt="Image"
        />
      </div>

      <div className="w-full flex flex-col items-center gap-y-2">
        <h3 className="text-2xl">{game.name}</h3>
        <div className="flex gap-5 items-center justify-center flex-wrap">
          <span className="text-accent-300 italic flex ">{showRating()}</span>
          <div className="flex gap-1 flex-wrap items-center justify-center w-fit">
            <span className="text-[12px] bg-ui-800 px-[8px] py-[3px] rounded-3xl">
              Anohe
            </span>
            {game.genres.map((genre, i) => (
              <span
                key={i}
                className="text-[12px] bg-ui-800 px-[8px] py-[3px] rounded-3xl"
              >
                {genre.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      <Link href={`/games/${game.slug}`}>
        <button className="ring-ui-400 ring-1 hover:bg-ui-900 text-accent-300 rounded px-4 py-1 flex items-center justify-center gap-x-2">
          More <FaArrowRight />
        </button>
      </Link>
    </div>
  );
};

export default GameCard;
