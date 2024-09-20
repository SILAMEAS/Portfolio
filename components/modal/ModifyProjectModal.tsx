"use client";
import React, {useState} from "react";
import {useModal} from "@/hooks/store/use-modal-store";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form";
import {z} from "zod";
import axios from "axios";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle,} from "@/components/ui/dialog";
import qs from "query-string";

const formSchema = z.object({
    title: z.string().min(1, {
        message: "Title is required",
    }).max(28, {
        message: "Title is too long",
    }),
    description:z.string().min(1, {
        message: "description is required",
    }),
    link:z.string().min(1, {
        message: "link is required",
    })
});
const ModifyProjectModal = () => {
    const {type,isOpen,onClose}=useModal();
    const [file, setFile] = useState<File | null>(null);
    const isModalOpen=isOpen&&type==='modify-project';
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            description:"",
            link:""
        },
    });
    const loading = form.formState.isSubmitting;
    const handleClose=()=>{
        form.reset();
        onClose()
    }

    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if(file)
            setFile(file)

        console.log('file',file)
    };
    const onSubmit = async (value: z.infer<typeof formSchema>) => {
        const url=qs.stringifyUrl({
            url:`${process.env.NEXT_PUBLIC_URL_GETWAY}/api/project`,
        })
        if(!file){
            console.error('file missing')
            return
        }
        const formData=new FormData();
        formData.append('title',value.title);
        formData.append('description',value.description);
        formData.append('link',value.link);
        formData.append('image', file);

        try {
            const response = await axios.post(url, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            console.log("Upload successful", response.data.response.data.message);
        } catch (error) {
            console.error("Upload error", error);
        }

    };
    return (
        <Dialog open={isModalOpen} onOpenChange={handleClose}>
            <DialogContent className={"bg-black text-black p-0 overflow-hidden"}>
                <DialogHeader className={"py-8 px-6"}>
                    <DialogTitle className={"text-2xl text-center font-bold text-white"}>
                        Add New Project
                    </DialogTitle>

                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className={"space-y-8 px-6"}>
                            {/** label **/}
                            <FormField
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel
                                            className={
                                                "uppercase text-xs font-bold text-zinc-500 dark:text-secondary/700"
                                            }
                                        >
                                            Title
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                disabled={loading}
                                                className={
                                                    "bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                                                }
                                                placeholder={"Enter your title"}
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                                name={"title"}
                            />
                            {/** description **/}
                            <FormField
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel
                                            className={
                                                "uppercase text-xs font-bold text-zinc-500 dark:text-secondary/700"
                                            }
                                        >
                                            Main Label
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                disabled={loading}
                                                className={
                                                    "bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                                                }
                                                placeholder={"Enter your description"}
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                                name={"description"}
                            />
                            {/** link **/}
                            <FormField
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel
                                            className={
                                                "uppercase text-xs font-bold text-zinc-500 dark:text-secondary/700"
                                            }
                                        >
                                            Title
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                disabled={loading}
                                                className={
                                                    "bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                                                }
                                                placeholder={"Enter your link"}
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                                name={"link"}
                            />

                            <Input type="file" accept="image/*" onChange={onFileChange}/>
                        </div>
                        <DialogFooter className={"bg-inherit px-6 py-4"}>
                            <Button disabled={loading||!file} variant={"default"} type={"submit"}>
                                {
                                    loading?"loading ...":"Create Project"
                                }
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};

export default ModifyProjectModal;

