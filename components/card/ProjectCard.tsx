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
      <div className="flip-container transition-all" >
          <div className={`flip-card ${flipped ? "flipped" : ""}`}>
              {/* Front of the card */}
              <div className="flip-card-front ">
                  <ProjectFaceCard {...props} onClick={handleFlip}/>
              </div>

              {/* Back of the card */}
              <div className="flip-card-back ">
                  <ProjectBackCard {...props} onClick={handleFlip}/>

              </div>
          </div>
      </div>
  );
};

export default ProjectCard;
