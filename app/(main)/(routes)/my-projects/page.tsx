import React from "react";
import LayoutCardListProject from "@/components/layout/list-card-project";

const Page = () => {

  return (
      <div
          style={{backgroundImage: "url(/bg-3.jpg)"}}
          className="h-screen w-screen flex items-center justify-center bg-cover bg-center"
      >
        <div className="flex flex-col gap-20 max-w-[100%] text-center items-center">
          <div className="flex flex-col items-center gap-4 hidden">
            <h1 className="font-semibold text-white text-[20px] ">
              Projects{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}
                &{" "}
            </span>
              Code
            </h1>
            <p className="text-gray-400 text-[20px]">
              develop your self like technologies
            </p>
          </div>
          <LayoutCardListProject/>
        </div>
      </div>
  );
};

export default Page;
