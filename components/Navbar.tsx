"use client"
import {Socials} from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";
import {Skeleton} from "@/components/ui/skeleton";
import React from "react";
import {useGetProfileQuery} from "@/redux/feature/profileSlice";

const Navbar = () => {
    const getProfile=useGetProfileQuery({});
  return (
    <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-5 md:px-20">
      <div className="flex flex-row gap-3 items-center">
          {
              getProfile?.currentData ?
                  <h1 className="text-white text-[25px] font-semibold">
                      {getProfile?.currentData?.label}{" "}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
            {" "}
                          {getProfile?.currentData?.mainLabel}{" "}
          </span>
                  </h1>: <Skeleton className="h-6 w-[250px]" />

          }
      </div>

        <div className="flex flex-row gap-5 mb-2">
            {Socials.map((social) => (
                <Link key={social.name} href={social.url ?? "#"} target="_blank">
                    <Image
                        key={social.name}
                        src={social.src}
              alt={social.name}
              width={28}
              height={28}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
