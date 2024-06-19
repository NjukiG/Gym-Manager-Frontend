import React from "react";
import { Link } from "react-router-dom";

const ExerciseCard = ({ exercise }) => (
  <Link
    className="exercise-card block w-full sm:w-72 md:w-80 lg:w-96 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
    to={`/exercise/${exercise.id}`}
  >
    <div className="relative pb-56">
      <img
        src={exercise.gifUrl}
        alt={exercise.name}
        loading="lazy"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
    </div>
    <div className="p-4 bg-white dark:bg-gray-800">
      <div className="flex flex-wrap gap-2 mb-4">
        <button className="text-sm text-white bg-red-500 hover:bg-red-600 rounded-full px-4 py-1 capitalize transition">
          {exercise.bodyPart}
        </button>
        <button className="text-sm text-white bg-yellow-500 hover:bg-yellow-600 rounded-full px-4 py-1 capitalize transition">
          {exercise.target}
        </button>
      </div>
      <p className="text-black dark:text-white font-bold capitalize text-lg sm:text-xl">
        {exercise.name}
      </p>
    </div>
  </Link>
);

export default ExerciseCard;
