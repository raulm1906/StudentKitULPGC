import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const LoadingIcon = () => {
  return (
    <div className="d-flex justify-content-center align-items-center h-100">
      <FontAwesomeIcon icon={faSpinner} size="6x" spin />
    </div>
  );
};

export default LoadingIcon;
