import React from "react";
import { assets } from "../assets/assets";



const COD3R2 = () => {
  return (
    <div className="d-flex justify-content-center align-items-center text-center gap-2 p-4">
      <img
        src={assets.CodersLettermark}
        alt="Lettermark"
        className="lettermark-class"
        style={{ height: "100px", width: "auto" }}
      />
    </div>
  );
};

export default COD3R2;
