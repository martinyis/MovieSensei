import React from "react";
import Cards from "./Cards";
import Fade from "react-reveal/Fade";
const Features = () => {
  return (
    <section className="mx-auto max-w-[1120px] pt-[165px] px-10 md:pt-[105px] xs:px-5">
      <Fade top>
        <h3 className="text-[36px] font-bold text-center xs:text-[30px]">
          What MovieSensei Does?
        </h3>
        <p className="pt-[25px] text-[24px] xs:text-[20px] max-w-[637px] text-center mx-auto">
          Learn about the various services provided by MovieSensei and find the
          one that suits you best.
        </p>
      </Fade>
      <Cards />
    </section>
  );
};

export default Features;
