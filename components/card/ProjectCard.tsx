"use client";
import {useState} from "react";
import "../../app/globals.css";
import {ProjectDto} from "@/lib/dto/ProjectDto";
import ProjectFaceCard from "@/components/card/project-face-card";
import ProjectBackCard from "@/components/card/project-back-card";

const ProjectCard = (props: ProjectDto) => {
    const [flipped, setFlipped] = useState(false);

    const handleFlip = () => {
        setFlipped(!flipped);
    };
  return (
      <div className="flip-container transition-all" onClick={handleFlip}>
          <div className={`flip-card ${flipped ? "flipped" : ""}`}>
              {/* Front of the card */}
              <div className="flip-card-front animate-pulse">
                  <ProjectFaceCard {...props}/>
                  {/*<div onClick={handleFlip} className={'absolute top-[10px] right-[-15px]'}>{'description'}</div>*/}
              </div>

              {/* Back of the card */}
              <div className="flip-card-back ">
                  <ProjectBackCard {...props}/>
                  {/*<div onClick={handleFlip} className={'absolute top-[10px] right-[-15px]'}><TbSwipe*/}
                  {/*    className={'h-10 w-10'}/></div>*/}
              </div>
          </div>
      </div>
  );
};

export default ProjectCard;
