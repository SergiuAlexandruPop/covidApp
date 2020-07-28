import React from "react";

import "./form-input.styles.scss";

const FormInput = () => {
  return (
    <form className="form">
      <input type="text" className="input" placeholder="Country Name" />
    </form>
  );
};

export default FormInput;
