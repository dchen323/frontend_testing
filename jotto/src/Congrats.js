import React from "react";

/**
 * Functional react component
 * @function
 * @params {object} props-React props
 * @returns {JSX.Element} rendered component(or null)
 */

export default props => {
  if (props.success) {
    return (
      <div data-test="component-congrats">
        <span data-test="congrats-message">
          Congratulations! You guessed the word!
        </span>
      </div>
    );
  } else {
    return <div data-test="component-congrats" />;
  }
};
