"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import "../../app/globals.css";
import {ProjectDto} from "@/lib/dto/ProjectDto";
import ProjectFaceCard from "@/components/card/project-face-card";
import ProjectBackCard from "@/components/card/project-back-card"; // Create a separate CSS file for the flip animation
const ProjectCard = (props: ProjectDto) => {
    const [flipped, setFlipped] = useState(false);

    const handleFlip = () => {
        setFlipped(!flipped);
    };
  return (
      <div className="flip-container transition-all animate-pulse" onClick={handleFlip}>
          <div className={`flip-card ${flipped ? "flipped" : ""}`}>
              {/* Front of the card */}
              <div className="flip-card-front">
                 <ProjectFaceCard {...props}/>
              </div>

              {/* Back of the card */}
              <div className="flip-card-back">
                  <ProjectBackCard {...props}/>
              </div>
          </div>
      </div>
  );
};

export default ProjectCard;
