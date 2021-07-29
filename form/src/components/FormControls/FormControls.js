import React from "react";
import "./FormControls.css";

export const Input = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
  return (
    <div>
      <div className={"form-control" + " " + (hasError ? "error" : "")}>
        <input {...input} {...props} />
      </div>
        {hasError ? <span className={"error"}>{meta.error}</span> : ''}
    </div>
  );
};
