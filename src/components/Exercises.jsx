import React, { useEffect, useState } from "react";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";
import Loader from "./Loader";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart, setExercises]);

  // Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  if (!currentExercises.length) return <Loader />;

  return (
    <div id="exercises" className="mt-[50px] p-[20px]">
      <h4 className="text-[30px] lg:text-[44px] font-bold mb-[46px]">
        Showing Results
      </h4>
      <div className="flex flex-wrap justify-center gap-[50px] lg:gap-[107px]">
        {currentExercises.map((exercise, idx) => (
          <ExerciseCard key={idx} exercise={exercise} />
        ))}
      </div>
      <div className="mt-[70px] lg:mt-[114px] flex justify-center">
        {exercises.length > 9 && (
          <nav>
            <ul className="flex justify-center gap-1 text-xs font-medium">
              {Array.from({
                length: Math.ceil(exercises.length / exercisesPerPage),
              }).map((_, i) => (
                <li key={i}>
                  <button
                    onClick={(e) => paginate(e, i + 1)}
                    className={`px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${
                      currentPage === i + 1 ? "text-blue-600 bg-blue-50" : ""
                    }`}
                  >
                    {i + 1}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};

export default Exercises;
