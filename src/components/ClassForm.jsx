import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ClassForm = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Description: "",
    ImageURL: "",
    StartTime: "",
    EndTime: "",
    Trainers: "trainers",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) throw new Error("No token found");

    try {
      const response = await fetch("/protected/classes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Class created successfully:", data);
      navigate("/classes");
    } catch (error) {
      console.error("Error creating a class:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg"
      >
        {/* This div below has the link to add class form */}
        <div className="flex justify-end mb-4">
          <Link
            to="/classes"
            className="bg-green-500 text-white font-bold py-2 px-4 rounded"
          >
            Back -
          </Link>
        </div>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-lg font-semibold leading-7 text-gray-900">
              Class Information
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="Name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="Name"
                    id="Name"
                    value={formData.Name}
                    onChange={handleChange}
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="StartTime"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  StartTime
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="StartTime"
                    id="StartTime"
                    autoComplete="family-name"
                    value={formData.StartTime}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {/* ImageURL */}

              <div className="sm:col-span-3">
                <label
                  htmlFor="EndTime"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  EndTime
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="EndTime"
                    id="EndTime"
                    value={formData.EndTime}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="ImageURL"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Image URL
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="ImageURL"
                    id="ImageURL"
                    value={formData.ImageURL}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {/* Phone */}

              {/* Description */}
              <div className="col-span-full">
                <label
                  htmlFor="Description"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Description{" "}
                </label>
                <div className="mt-2">
                  <textarea
                    id="Description"
                    name="Description"
                    rows={3}
                    value={formData.Description}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default ClassForm;
