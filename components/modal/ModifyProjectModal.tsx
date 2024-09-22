"use client";
import React, {useState} from "react";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle,} from "@/components/ui/dialog";
import {useAppDispatch, useAppSelector} from "@/redux/hooks";
import {onClose} from "@/redux/slices/modalSlice";
import {useCreateProjectMutation, useUpdateProjectMutation} from "@/redux/feature/projectSlice";
import Image from "next/image";
import {Loading} from "@/components/Loading";

const formSchema = z.object({
    title: z.string().min(1, {
        message: "Title is required",
    }).max(40, {
        message: "Title is too long",
    }),
    description:z.string().min(1, {
        message: "description is required",
    }),
    link:z.string().url().min(1, {
        message: "link is required",
    })
});
const ModifyProjectModal = () => {
    const {modal:{isOpen,type,data}}=useAppSelector(state=>state);
    const dispatch=useAppDispatch();
    const [updateProject,res]=useUpdateProjectMutation();
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
        setFile(null);
        dispatch(onClose())}

    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if(file)
            setFile(file)

    };
    const onSubmit = async (value: z.infer<typeof formSchema>) => {

        const formData=new FormData();
        formData.append('title',value.title);
        formData.append('description',value.description);
        formData.append('link',value.link);
        if(file){
            formData.append('image', file);
        }
        try {
            await updateProject({body:formData,id:data?.project?.id??0}).unwrap();
            form.reset();
            handleClose();
        } catch (error) {
            console.error("Upload error", error);
        }

    };
    React.useEffect(()=>{
        if(data.project){
            form.setValue('title',data.project?.title??'');
            form.setValue('description',data.project?.description??"")
            form.setValue('link',data.project?.link??"");
        }

    },[data.project,form])
    return (
        <Dialog open={isModalOpen} onOpenChange={handleClose}>
            <DialogContent className={"bg-black text-black p-0 overflow-hidden "}>
                <DialogHeader className={"py-8 px-6"}>
                    <DialogTitle className={"text-2xl text-center font-bold text-white"}>
                        Modify Project
                    </DialogTitle>

                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className={"space-y-8 px-6 max-h-[30rem] overflow-y-auto"}>
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
                                            description
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
                                            link
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

                            {/** image **/}
                            <FormItem>
                                <FormLabel
                                    className={
                                        "uppercase text-xs font-bold text-zinc-500 dark:text-secondary/700"
                                    }
                                >
                                    Image
                                </FormLabel>
                                <FormControl>
                                    <Input type="file" accept="image/*" onChange={onFileChange}/>
                                </FormControl>
                                <FormMessage />
                                {
                                    (file)&& <Image src={URL.createObjectURL(file)} alt={"file"} width={200} height={200}/>
                                }
                                {
                                    (data?.project?.image.url&&!file)&& <Image src={data?.project?.image.url} alt={"imageUrl"} width={200} height={200}/>
                                }
                            </FormItem>

                        </div>
                        <DialogFooter className={"bg-inherit px-6 py-4"}>
                            <Button disabled={loading} variant={"default"} type={"submit"}>
                                {
                                    loading?<Loading/>:"Update Project"
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

