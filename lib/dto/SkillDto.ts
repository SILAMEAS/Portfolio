import {ImageProjectEntity} from "@/lib/dto/ProjectDto";

export interface SkillDto{
    id:number;
    name: string,
    description: string,
    percent: string,
    image: ImageProjectEntity,
}