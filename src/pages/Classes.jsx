import { Button } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Classes = () => {
  const [classes, setClasses] = useState([]);
  const token = localStorage.getItem("token");
  if (!token) throw new Error("No token found");

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the classes from the API with authentication
    fetch("/protected/classes", {
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
        setClasses(data.classes);
      })
      .catch((error) => {
        console.error("There was an error fetching the classes!", error);
      });
  }, [token]);

//   const LoadDetails = (id) => {
//     navigate("/classes/:" + {classItem.id});
//   };

  return (
    <div>
      <section className="bg-gray-900 text-white">
        {/* This div below has the link to add trainer form */}
        <div className="flex justify-end mb-4">
          <Link
            to="/classes/create"
            className="bg-green-500 text-white font-bold py-2 px-4 rounded"
          >
            New Class +
          </Link>
        </div>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Choose a class that you can join.
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {classes.map((classItem) => (
              <article
                key={classItem.ID}
                className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg"
              >
                <img
                  alt=""
                  src={
                    classItem.ImageURL
                      ? classItem.ImageURL
                      : "https://images.unsplash.com/photo-1632077804406-188472f1a810?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                  <div className="p-4 sm:p-6">
                    <p
                      className="block text-xs text-white/90"
                    >
                      {classItem.StartTime} - {classItem.EndTime}
                    </p>

                    <a href="#">
                      <h3 className="mt-0.5 text-lg text-white">
                        {classItem.Name}
                      </h3>
                    </a>

                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                      {classItem.Description}
                    </p>
                  </div>
                  <div className="flex justify-end mb-4">
                  <Link
                    to={`/classes/${classItem.ID}`} 
                    // onClick={LoadDetails}
                    className="bg-green-500 text-white font-bold py-2 px-4 rounded"
                  >
                    See Details 
                  </Link>
                </div>
                </div>
                
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Classes;
