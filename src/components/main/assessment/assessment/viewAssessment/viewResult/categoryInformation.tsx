import React from "react";
import OpenEndQuestions from "./openEndQuestions";

const categoryInformation = () => {
  return (
    <section>
      <h1>Category Information</h1>
      <div>
        <p>Category name:</p>
        <p>Category Score:</p>
        <p>Alloted time:</p>
        <p>Total Number of Questions in Category:</p>
        <p>Percentage score:</p>
      </div>
      <div>
        <p>Category name:</p>
        <p>Category Score:</p>
        <p>Alloted time:</p>
        <p>Total Number of Questions in Category:</p>
        <div>
          <OpenEndQuestions />
          <p>Open ended questions:</p>
        </div>

        <p>Percentage score:</p>
      </div>
    </section>
  );
};

export default categoryInformation;
