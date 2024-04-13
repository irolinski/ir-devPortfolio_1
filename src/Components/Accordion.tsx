import React, { MouseEventHandler, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";



type accordionItemTypes = {
  question: string,
  answer: HTMLElement | string,
  isOpen: boolean,
  onClick: MouseEventHandler
}

const AccordionItem = ({ question, answer, isOpen, onClick } :accordionItemTypes) => {
  const contentHeight: any = useRef();
  return (
    <div className="accordion-wrapper">
      <button
        className={`question-container ${isOpen ? "active" : ""}`}
        onClick={onClick}
      >
        <p className="question-content">{question}</p>
        <IoIosArrowDown className={`arrow ${isOpen ? "active" : ""}`} />
      </button>

      <div
        ref={contentHeight}
        className="answer-container"
        style={
          isOpen
            ? { height: contentHeight.current.scrollHeight }
            : { height: "0px" }
        }
      >
        { typeof answer === 'string' ? <p className="answer-content text-md">{answer}</p> : <div className="answer-content">{answer}</div> }
        {/* { Array.isArray(answer) && <ul className="answer-content answer-list text-md">{ answer.map((a) => <li>{a}</li>) }</ul> } */}
        
      </div>
    </div>
  );
};

const Accordion = ({ data }: any) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index: any) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className=" accordion container">
      {data.map((item: { question: string; answer: string; }, index: React.Key | null | undefined) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={activeIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;

