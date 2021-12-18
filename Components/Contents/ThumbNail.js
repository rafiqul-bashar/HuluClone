import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React from "react";
const ThumbNail = ({ result }) => {
  const baseUrl = "https://image.tmdb.org/t/p/original";
  return (
    <div className="group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
      <Image
        src={
          `${baseUrl}${result.backdrop_path || result.poster_path}` ||
          `${baseUrl}${result.poster_path}`
        }
        layout="responsive"
        height={1080}
        width={1920}
        alt="sas"
      />
      <div className="p-2">
        <p className="truncate max-w-md">{result.overview}</p>
        <h2 className=" text-white text-2xl transition-all ease-in-out duration-100 group-hover:font-bold">
          {result.title || result.original_name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {result.release_date || result.first_air_date}.{""}
          <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
        </p>
      </div>
    </div>
  );
};

export default ThumbNail;
