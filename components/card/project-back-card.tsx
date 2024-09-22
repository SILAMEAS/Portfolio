import React from 'react';
import {Card, CardContent, CardDescription, CardHeader,} from "@/components/ui/card"
import {ProjectDto} from "@/lib/dto/ProjectDto";
import {z} from "zod";
import {ICardProject} from "@/components/card/project-face-card";

const formSchema = z.object({
    title: z.string().min(1, {
        message: "Title is required",
    }).max(28, {
        message: "Title is too long",
    }),
    description: z.string().min(1, {
        message: "description is required",
    }).max(28, {
        message: "description is too long",
    }),
    image:z.string().min(1, {
        message: "image is required",
    }),
    link:z.string().min(1, {
        message: "link is required",
    })
});
const ProjectBackCard = ({description,title,onClick}:ICardProject) => {

    return (
        <Card className="w-70 h-auto overflow-y-auto" onClick={onClick}>
            <CardHeader>
                <CardDescription>{title}</CardDescription>
            </CardHeader>
            <CardContent>
                {description}
            </CardContent>
        </Card>
    )
}
export default ProjectBackCard