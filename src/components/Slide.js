import React, { useState } from "react";
import person from "../data";
import { FaCaretLeft, FaCaretRight, FaQuoteRight } from "react-icons/fa";
const Slide = () => {
  const [index, setIndex] = useState(0);
  const { name, image, role, text } = person[index];
  const randomperson = () => {
    setIndex(() => {
      let newIndex = Math.trunc(Math.random() * person.length);
      return newIndex;
    });
  };
  const nextperson = () => {
    setIndex(() => {
      if (index === person.length - 1) {
        let newIndex = 0;
        return newIndex;
      } else {
        let newIndex = index + 1;
        return newIndex;
      }
    });
  };
  const prevperson = () => {
    setIndex(() => {
      if (index === 0) {
        let newIndex = person.length - 1;
        return newIndex;
      } else {
        let newIndex = index - 1;
        return newIndex;
      }
    });
  };
  return (
    <section className="data_container">
      <div className="img_container">
        <img src={image} alt={name} className="person_image" />
        <span className="quote_icon">
          <FaQuoteRight />
        </span>
      </div>
      <div className="content">
        <h2>{name}</h2>
        <h3>{role}</h3>
        <p>{text}</p>
        <button className="prev_button" onClick={() => prevperson()}>
          <FaCaretLeft />
        </button>
        <button className="next_button" onClick={() => nextperson()}>
          <FaCaretRight />
        </button>
        <button className="user" onClick={() => randomperson()}>
          Random User
        </button>
      </div>
    </section>
  );
};

export default Slide;
