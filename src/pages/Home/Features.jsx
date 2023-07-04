import React from "react";
import Cards from "./Cards";

const Features = () => {
  return (
    <div className="mx-auto max-w-[1120px] pt-[165px] px-10 md:pt-[105px]">
      <h3 className="text-[36px] font-bold text-center">
        What MovieSensei Does?
      </h3>
      <p className="pt-[25px] text-[24px] max-w-[637px] text-center mx-auto">
        Learn about the various services provided by MovieSensei and find the
        one that suits you best.
      </p>
      <Cards />
    </div>
  );
};

export default Features;
