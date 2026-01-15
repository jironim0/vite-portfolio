import { useState } from "react";
import s from "./Slider.module.scss";
import { projects as data } from "./data/projects";
import { FaGithub, FaLink } from "react-icons/fa";


export function Slider() {
  const [currentId, setCurrentId] = useState(1);
  const current = data.find((img) => img.id === currentId) || data[0];
  const [touchStart, setTouchStart] = useState(0);

  const nextSlide = () => {
    setCurrentId((prevId) => prevId === data.length ? 1 : prevId + 1)
  };

  const handleStart = (x: number) => {
    setTouchStart(x);
  };

  const handleEnd = (x: number) => {
    const diff = touchStart - x;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        //left swipe
        setCurrentId((curr) => (curr === data.length ? 1 : curr + 1));
      } else {
        //right swipe
        setCurrentId((prev) => (prev === 1 ? data.length : prev - 1));
      }
    }
  };

  return (
    <div
      id='slider'
      className={s.sliderContainer}
      onTouchStart={(e) => handleStart(e.changedTouches[0].clientX)}
      onTouchEnd={(e) => handleEnd(e.changedTouches[0].clientX)}
        onClick={nextSlide}
    >
        <div key={current.id}>
          <img
            className={s.sliderImage}
            src={current.image}
            alt={current.description}
          />
          <div className={s.sliderTextArea}>
            <h1>{current.title}</h1>
            <span className={s.sliderDescription}>{current.description}</span>
          </div>
          <div className={s.sliderIconLinks}>
            <div><a href={current.gitUrl} target='_blank' rel='noopener noreferrer' onClick={(e) => e.stopPropagation()}><FaGithub size={44} color="black"/></a></div>
            <div><a href={current.devUrl} target='_blank' rel='noopener noreferrer' onClick={(e) => e.stopPropagation()}><FaLink size={44} color="black"/></a></div>
          </div>
        </div>
    </div>
  );
}
