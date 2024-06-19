import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ClassDetails = () => {
  const { id } = useParams();
  const [classData, setClassData] = useState({});

  const token = localStorage.getItem("token");
  if (!token) throw new Error("No token found");

  useEffect(() => {
    // Fetch the classes from the API with authentication
    fetch("/protected/classes/" + id, {
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
        console.log(data);
        setClassData(data);
      })
      .catch((error) => {
        console.error("There was an error fetching the classes!", error);
      });
  }, [token]);

  return <div>ClassDetails component still under development.</div>;
};

export default ClassDetails;
