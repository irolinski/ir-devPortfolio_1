import React, { MouseEventHandler, useRef, useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import { IoIosArrowDown } from "react-icons/io";

type accordionItemTypes = {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: MouseEventHandler;
};

const AccordionItem = ({
  question,
  answer,
  isOpen,
  onClick,
}: accordionItemTypes) => {
  const { t } = useTranslation();
  const contentHeight: any = useRef();

  return (
    <div className="accordion-wrapper">
      <button
        className={`question-container ${isOpen ? "active" : ""}`}
        onClick={onClick}
      >
        <p className="question-content sm:text-2xl md:text-xl ">
          {t(question)}
        </p>
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
        <p className="answer-content text-md whitespace-pre-wrap sm:text-xl">
          <ul className="answer-list font-italic">
            <Trans
              i18nKey={answer}
              components={{
                li: <li />,
              }}
            />
          </ul>
        </p>
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
    <div className="accordion container">
      {data.map(
        (
          item: { question: string; answer: string },
          index: React.Key | null | undefined,
        ) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ),
      )}
    </div>
  );
};

export default Accordion;
