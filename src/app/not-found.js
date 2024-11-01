import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="text-center items-center flex justify-center">
      <h1>This page can not be found</h1>
      <Link to={"/"}>Go back to home</Link>
    </div>
  );
};

export default NotFound;
