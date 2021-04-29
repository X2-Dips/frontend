import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="container gridBox h-100">
      <div className="flexBox jcc fdr error-page-msg">
        <h1 className="mb-2">Oops... </h1>
        <p>Page Not Found!</p>
        <div className="my-2 error-pagep-btns">
          <Link className="btn" to="/products">
            Back
          </Link>
          <Link className="btn" to="/">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
