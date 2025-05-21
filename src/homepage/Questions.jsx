import React, { useEffect, useState } from "react";
import Text from "../global/Text";
import MyButton from "../global/MyButton";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const Questions = () => {
  const [questions, setQuestions] = useState([]);
  //   const [show, setShow] = useState(false);

  useEffect(() => {
    fetch("/question.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        const updated = data.map((d) => ({ ...d, show: false }));
        setQuestions(updated);
        console.log(updated);
      });
  }, []);

  function showHideAnswer(id) {
    console.log("hellllo");

    const clicked = questions.map((question) =>
      question.id === id ? { ...question, show: !question.show } : question
    );
    console.log(clicked);

    setQuestions(clicked);
  }

  return (
    <div className="px-5 md:px-28 py-10 md:py-32">
      <div className="md:flex md:justify-between md:items-center">
        <Text
          title="Frequently Asked Question"
          textTitle="Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe."
          bgTextTitle="Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe."
        />
        <MyButton children="Ask a Question" classname="bg-red-600 px-5 py-3" />
      </div>
      <div className="py-10 md:grid grid-cols-2 gap-10">
        <div className="col1">
          {questions &&
            questions.slice(0, 4).map((q, index) => (
              <div key={q.id} className="relative">
                <div className="w-screen md:w-full h-0.5 absolute bottom-0 left-0 bg-linear-to-r from-neutral-950 via-red-600 to-neutral-950"></div>
                <div className="py-5">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center py-4">
                      <span className="px-3 py-2.5 bg-neutral-800 rounded-lg mr-2">
                        0{index + 1}
                      </span>
                      <h2 className="text-lg font-light">{q.question}</h2>
                    </div>
                    {q.show ? (
                      <FaMinus
                        onClick={() => showHideAnswer(q.id)}
                        className="text-white size-5"
                      />
                    ) : (
                      <FaPlus
                        onClick={() => showHideAnswer(q.id)}
                        className="text-white size-5"
                      />
                    )}
                  </div>
                  {q.show && (
                    <p className="text-base font-extralight text-neutral-400">
                      {q.answer}
                    </p>
                  )}
                </div>
              </div>
            ))}
        </div>
        <div className="col2">
          {questions &&
            questions.slice(4, 9).map((q, index) => (
              <div key={q.id} className="relative">
                <div className="w-screen md:w-full h-0.5 absolute bottom-0 left-0 bg-linear-to-r from-neutral-950 via-red-600 to-neutral-950"></div>
                <div className="py-5">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center py-4">
                      <span className="px-3 py-2.5 bg-neutral-800 rounded-lg mr-2">
                        0{index + 5}
                      </span>
                      <h2 className="text-lg font-light">{q.question}</h2>
                    </div>
                    {q.show ? (
                      <FaMinus
                        onClick={() => showHideAnswer(q.id)}
                        className="text-white size-5"
                      />
                    ) : (
                      <FaPlus
                        onClick={() => showHideAnswer(q.id)}
                        className="text-white size-5"
                      />
                    )}
                  </div>
                  {q.show && (
                    <p className="text-base font-extralight text-neutral-400">
                      {q.answer}
                    </p>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Questions;
