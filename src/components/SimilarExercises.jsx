import React from "react";
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (
  <div className="mt-0 lg:mt-20 p-5">
    <h2 className="text-2xl lg:text-4xl font-bold mb-8 text-gray-800 dark:text-white ml-5">
      <span className="text-red-500 capitalize">
        Similar Target Muscle exercises
      </span>
    </h2>
    <div className="relative p-2 flex flex-row gap-5 overflow-x-auto">
      {targetMuscleExercises.length !== 0 ? (
        <HorizontalScrollbar data={targetMuscleExercises} />
      ) : (
        <Loader />
      )}
    </div>
    <h2 className="text-2xl lg:text-4xl font-bold mt-16 lg:mt-24 mb-8 text-gray-800 dark:text-white ml-5">
      <span className="text-red-500 capitalize">
        Similar Equipment exercises
      </span>
    </h2>
    <div className="relative p-2 flex flex-row gap-5 overflow-x-auto">
      {equipmentExercises.length !== 0 ? (
        <HorizontalScrollbar data={equipmentExercises} />
      ) : (
        <Loader />
      )}
    </div>
  </div>
);

export default SimilarExercises;
