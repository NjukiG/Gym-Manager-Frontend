import React from "react";
import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-10 p-8 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg">
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
        <img
          src={gifUrl}
          alt={name}
          loading="lazy"
          className="rounded-lg shadow-lg max-w-full h-auto"
        />
      </div>

      <div className="flex flex-col gap-6 lg:gap-8 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
        <h1 className="text-4xl lg:text-5xl font-bold capitalize text-gray-800 dark:text-white">
          {name}
        </h1>
        <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
          Exercises keep you strong.{" "}
          <span className="capitalize font-semibold">{name}</span> is one of the
          best exercises to target your{" "}
          <span className="font-semibold">{target}</span>. It will help you
          improve your mood and gain energy.
        </p>
        {extraDetail.map((item) => (
          <div
            key={item.name}
            className="flex items-center gap-5 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-sm"
          >
            <div className="flex items-center justify-center bg-yellow-200 dark:bg-yellow-600 rounded-full w-20 h-20">
              <img src={item.icon} alt={item.name} className="w-10 h-10" />
            </div>
            <h2 className="text-2xl lg:text-3xl capitalize text-gray-700 dark:text-gray-300">
              {item.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Detail;
