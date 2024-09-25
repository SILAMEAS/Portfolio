'use client'
import {useState} from 'react'
import {SubmitHandler, useForm} from 'react-hook-form'
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"
import {Edit, Image as ImageIcon, Save} from "lucide-react"
import Image from "next/image"
import {zodResolver} from '@hookform/resolvers/zod'
import * as z from 'zod'
import {toast} from "@/hooks/use-toast";
import {ProjectDto} from "@/lib/dto/ProjectDto";
import Link from "next/link";
import {useUpdateProjectMutation} from "@/redux/feature/projectSlice";
import {Loading} from "@/components/Loading";

const formSchema = z.object({
    title: z.string().min(1, 'Title is required').max(100, 'Title is too long'),
    description: z.string().min(1, 'Description is required').max(500, 'Description is too long'),
    imageUrl: z.string().url('Invalid image URL'),
    link:z.string().url().min(1, {
        message: "link is required",
    })
})

type FormValues = z.infer<typeof formSchema>

export default function CardProjectCmd({project}:{project:ProjectDto}) {
    const [file, setFile] = useState<File | null>(null);
    const [isEditing, setIsEditing] = useState(false);
    const [updateProject,update]=useUpdateProjectMutation();
    const { register, handleSubmit, setValue, watch,reset, formState: { errors } } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: project.title,
            description:project.description,
           imageUrl: `${project.image.url}`,
            link:project.link
            // imageUrl: "https://res.cloudinary.com/ddz6bkk0m/image/upload/v1727069952/imnhuyvhhez42ddormso.png?height=200&width=400",
        },
    })

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        const formData=new FormData();
        formData.append('title',data.title);
        formData.append('description',data.description);
        formData.append('link',data.link);
        if(file){
            formData.append('image', file);
        }
        try {
            await updateProject({body:formData,id:project.id}).unwrap();
            toast({
                title: "Changes saved successfully!",
                description: "Your project has been updated.",
            });
            setIsEditing(false);
        } catch (error) {
            console.error("Error submitting form:", error)
            toast({
                title: "Error saving changes",
                description: "Please try again later.",
                variant: "destructive",
            })
        }
    }

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            setFile(file);
            const reader = new FileReader()
            reader.onloadend = () => {
                setValue('imageUrl', reader.result as string, { shouldValidate: true })
            }
            reader.readAsDataURL(file)
        }
    }

    const currentImageUrl = watch('imageUrl')

    return (
        <Card className="w-full max-w-md mx-auto overflow-hidden h-full pb-[10px]">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="relative w-full h-48">
                    <Image
                        src={currentImageUrl}
                        alt="Project preview"
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 hover:scale-105"
                    />
                    {isEditing && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                            <label htmlFor="image-upload" className="cursor-pointer">
                                <ImageIcon className="w-12 h-12 text-white" />
                                <input
                                    id="image-upload"
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={handleImageChange}
                                />
                            </label>
                        </div>
                    )}
                </div>
                <CardHeader>
                    {isEditing ? (
                        <Input
                            {...register('title')}
                            className="text-2xl font-bold"
                        />
                    ) : (
                        <h2 className="text-2xl font-bold">{watch('title')}</h2>
                    )}
                    {errors.title && <p className="text-sm text-red-500">{errors.title.message}</p>}
                </CardHeader>
                <CardContent>
                    {isEditing ? (
                        <Textarea
                            {...register('description')}
                            className="min-h-[100px]"
                        />
                    ) : (
                        <p className="text-muted-foreground">{watch('description')}</p>
                    )}
                    {errors.description && <p className="text-sm text-red-500">{errors.description.message}</p>}
                    {isEditing ? (
                        <Input
                            {...register('link')}
                            className="mt-[10px]"
                        />
                    ) : (
                        <Link href={watch('link')} className={'text-blue-500 underline text-sm'}>
                            {watch('link')}
                        </Link>
                    )}
                    {errors.link && <p className="text-sm text-red-500">{errors.link.message}</p>}
                </CardContent>
                <CardFooter className="flex justify-end space-x-2">
                    {isEditing&&  <Button type="submit">
                        <Save className="w-4 h-4 mr-2" />
                        {update.isLoading? <Loading/>:'Save'}
                    </Button>}
                </CardFooter>
            </form>
            {
                !isEditing&& <Button onClick={() => setIsEditing(true)}>
                    <Edit className="w-4 h-4 mr-2" />
                    Edit
                </Button>
            }
        </Card>
    )
}