import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TrainersComponent = () => {
  const [trainers, setTrainers] = useState([]);
  const token = localStorage.getItem("token");
  if (!token) throw new Error("No token found");

  useEffect(() => {
    // Fetch the trainers from the API with authentication
    fetch("/protected/trainers", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        setTrainers(data.Trainers);
      })
      .catch((error) => {
        console.error("There was an error fetching the trainers!", error);
      });
  }, [token]);

  return (
    <div>
      <section className="bg-gray-900 text-white">
        {/* This div below has the link to add trainer form */}
        <div className="flex justify-end mb-4">
          <Link
            to="/trainers/create"
            className="bg-green-500 text-white font-bold py-2 px-4 rounded"
          >
            New Trainer +
          </Link>
        </div>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Meet our team of world class trainers
            </h2>

            <p className="mt-4 text-gray-300">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequuntur aliquam doloribus nesciunt eos fugiat. Vitae aperiam
              fugit consequuntur saepe laborum.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {trainers.map((trainer) => (
              <article
                key={trainer.ID}
                className="overflow-hidden rounded-lg shadow transition hover:shadow-lg dark:shadow-gray-700/25"
              >
                <img
                  alt=""
                  src={trainer.ImageURL}
                  className="h-56 w-full object-cover"
                />
                <div className="bg-white p-4 sm:p-6 dark:bg-gray-900">
                  <a href="/">
                    <h3 className="mt-0.5 text-lg text-gray-900 dark:text-white">
                      {trainer.FirstName} {trainer.LastName}
                    </h3>
                  </a>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
                    {trainer.Bio}
                  </p>
                  <br />
                  <p
                    className="block text-xs text-gray-500 dark:text-gray-400"
                  >
                    {trainer.Email}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrainersComponent;
