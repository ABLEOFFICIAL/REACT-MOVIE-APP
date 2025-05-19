import React from "react";
import Text from "../global/Text";
import MyBtn from "../global/myBtn";

const Questions = () => {
  return (
    <div>
      <div className="px-5 py-10">
        <Text
          title="Frequently Asked Question"
          textTitle="Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe."
        />
        <MyBtn children="Ask a Question" />
      </div>
      <div></div>
    </div>
  );
};

export default Questions;
