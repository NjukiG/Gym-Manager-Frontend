import React from "react";
import Loader from "./Loader";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <Loader />;

  return (
    <div className="mt-8 lg:mt-20 p-5">
      <h1 className="text-3xl lg:text-5xl font-bold mb-8 dark:text-white">
        <span className="text-gray-900 capitalize">
          Watch {name} exercise videos
        </span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {exerciseVideos.slice(0, 3).map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <article className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] dark:shadow-gray-700/25">
              <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6 dark:bg-gray-900">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                    src={item.video.thumbnails[0].url}
                    alt={item.video.title}
                  />
                </div>
                <h3 className="mt-0.5 text-lg font-medium text-gray-900 dark:text-white">
                  {item.video.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {item.video.channelName}
                </p>
              </div>
            </article>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ExerciseVideos;
