import React from 'react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle,} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button";
import {ProjectDto} from "@/lib/dto/ProjectDto";
import {z} from "zod";
import {useModal} from "@/hooks/store/use-modal-store";
import {useApiUpdateProfile} from "@/components/hooks/profile/useApiUpdateProfile";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Textarea} from "@/components/ui/textarea";
import {SheetFooter} from "@/components/ui/sheet";
import {Loading} from "@/components/Loading";

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