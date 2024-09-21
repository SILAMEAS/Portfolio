import React from 'react';
import {Card, CardContent, CardDescription, CardHeader,} from "@/components/ui/card"
import {ProjectDto} from "@/lib/dto/ProjectDto";
import {z} from "zod";

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
const ProjectBackCard = ({description,
                          link,
                         image,
                         title='title'}:ProjectDto) => {

    return (
        <Card className="w-70 h-[25rem] overflow-y-auto">
            <CardHeader>
                <CardDescription>Description Detail</CardDescription>
            </CardHeader>
            <CardContent>
                {description}
            </CardContent>
        </Card>
    )
}
export default ProjectBackCard