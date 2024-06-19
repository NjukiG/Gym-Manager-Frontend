import React, { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import ExerciseCard from "./ExerciseCard";
import BodyPart from "./BodyPart";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";
import "react-horizontal-scrolling-menu/dist/styles.css"; 

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <div onClick={() => scrollPrev()} className="cursor-pointer">
      <img src={LeftArrowIcon} alt="left-arrow" className="h-6 w-6" />
    </div>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <div onClick={() => scrollNext()} className="cursor-pointer">
      <img src={RightArrowIcon} alt="right-arrow" className="h-6 w-6" />
    </div>
  );
};

const HorizontalScrollbar = ({ data, isBodyParts, setBodyPart, bodyPart }) => (
  <div className="flex items-center">
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <div
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          className="inline-block mx-10"
        >
          {isBodyParts ? (
            <BodyPart
              item={item}
              setBodyPart={setBodyPart}
              bodyPart={bodyPart}
            />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </div>
      ))}
    </ScrollMenu>
  </div>
);

export default HorizontalScrollbar;
