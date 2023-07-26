import React from "react";
import MovieImg from "./../../assets/content/avengers.png";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const MovieItemSceleton = () => {
  return (
    <div className="py-[14px] px-[34px] bg-[#610094] flex justify-between sm:justify-center sm:items-center">
      <div className="leftSide flex sm:flex-col justify-center sm:items-center gap-5">
        <p className="mr-[11px] text-[28px]">
          <Skeleton width={30} height={30} baseColor={"#000000"} />
        </p>
        <div className="mr-[21px]">
          <Skeleton
            width={96}
            height={133}
            style={{ maxWidth: "96px", maxHeight: "133px" }}
            baseColor={"#000000"}
          />
        </div>
        <div>
          <div className="flex gap-[11px] mb-[6px] items-center">
            <p className="text-[24px] font-semibold 550:text-[18px]">
              <Skeleton
                width={150}
                className="550:w-[50px]"
                baseColor={"#000000"}
              />
            </p>
            <p className="text-[18px] font-semibold text-[#867070A1] 550:text-[14px]">
              <Skeleton width={50} baseColor={"#000000"} />
            </p>
          </div>
          <p className="text-[16px] 550:text-[14px] text-[#867070] mb-[10px]">
            <Skeleton width={100} baseColor={"#000000"} />
          </p>
          <p className="text-[16px] 550:text-[14px] text-[#867070]">
            <Skeleton width={200} baseColor={"#000000"} />
          </p>
        </div>
        <div className="flex gap-[10px] hidden sm:flex">
          <div>
            <Skeleton
              baseColor={"#000000"}
              width={24}
              height={24}
              circle={true}
            />
          </div>
          <p className="text-black text-[12px]">
            <Skeleton width={30} baseColor={"#000000"} />
          </p>
        </div>
      </div>
      <div className="rightSide flex gap-[10px] 550:flex-col 550:gap-[5px] sm:hidden">
        <div>
          <Skeleton
            width={24}
            height={24}
            circle={true}
            baseColor={"#000000"}
          />
        </div>
        <p className="text-black text-[12px]">
          <Skeleton width={30} baseColor={"#000000"} />
        </p>
      </div>
    </div>
  );
};

export default MovieItemSceleton;
