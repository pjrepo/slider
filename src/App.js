import React, { useEffect, useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import people from "./Data";

const App = () => {
  const [index, setIndex] = useState(0);

  const prevHandler = () => {
    if (index === 0) setIndex(people.length - 1);
    else setIndex(index - 1);
  };
  const nextHandler = () => {
    if (index === people.length - 1) setIndex(0);
    else setIndex(index + 1);
  };

  useEffect(() => {
    let slider = setInterval(() => {
      if (index === people.length - 1) setIndex(0);
      else setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <React.Fragment>
      <section className="section">
        <div className="title">
          <h2>
            <span>/</span>Reviews
          </h2>
        </div>
        <div className="section-center">
          {people.map((person, personIndex) => {
            const { id, image, name, title, quote } = person;
            let position = "nextSlide";
            if (personIndex === index) {
              position = "activeSlide";
            }
            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === people.length - 1)
            ) {
              position = "lastSlide";
            }
            return (
              <article key={id} className={position}>
                <img src={image} alt={name} className="person-img" />
                <h4>{name}</h4>
                <p className="title">{title}</p>
                <p className="text">{quote}</p>
                <FaQuoteRight className="icon" />
              </article>
            );
          })}
          <button className="prev" onClick={prevHandler}>
            <FiChevronLeft />
          </button>
          <button className="next" onClick={nextHandler}>
            <FiChevronRight />
          </button>
        </div>
      </section>
    </React.Fragment>
  );
};

export default App;
