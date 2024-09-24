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
import Image from "next/image";
import {Loading} from "@/components/Loading";
import {useDeleteSkillMutation, useUpdateSkillMutation} from "@/redux/feature/skillSlice";

const formSchema = z.object({
    name: z.string().min(1, {
        message: "Name is required",
    }).max(40, {
        message: "name is too long",
    }),
    description:z.string().min(1, {
        message: "description is required",
    }),
    percent:z.string().min(1, {
        message: "percent is required",
    })
});
const SkillModal = () => {
    const {modal:{isOpen,type,data}}=useAppSelector(state=>state);
    const dispatch=useAppDispatch();
    const [updateSkill,resUpdateSkill]=useUpdateSkillMutation();
    const [deleteSkill,resDeleteSkill]=useDeleteSkillMutation();
    const [file, setFile] = useState<File | null>(null);
    const isModalOpen=isOpen&&type==='modify-skill';
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            description:"",
            percent:""
        },
    });
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
        formData.append('name',value.name);
        formData.append('description',value.description);
        formData.append('percent',value.percent);
        if(file){
            formData.append('image', file);
        }
        try {
            await updateSkill({body:formData,id:data?.skill?.id??0}).unwrap();
            form.reset();
            handleClose();
        } catch (error) {
            console.error("Upload error", error);
        }

    };
    React.useEffect(()=>{
        if(data?.skill){
            form.setValue('name',data.skill?.name??'');
            form.setValue('description',data.skill?.description??"")
            form.setValue('percent',data.skill?.percent??"");
        }

    },[data?.skill,form]);
    const handleDelete=async ()=>{
        await deleteSkill({id:data?.skill?.id??0}).unwrap();
        form.reset();
        handleClose();
    }
    return (
        <Dialog open={isModalOpen} onOpenChange={handleClose}>
            <DialogContent className={"bg-black text-black p-0 overflow-hidden "}>
                <DialogHeader className={"py-8 px-6"}>
                    <DialogTitle className={"text-2xl text-center font-bold text-white"}>
                        Modify Skill
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
                                            Name
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                disabled={resDeleteSkill.isLoading||resUpdateSkill.isLoading}
                                                className={
                                                    "bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                                                }
                                                placeholder={"Enter your name"}
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                                name={"name"}
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
                                                disabled={resDeleteSkill.isLoading||resUpdateSkill.isLoading}
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
                                            percent
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                disabled={resDeleteSkill.isLoading||resUpdateSkill.isLoading}
                                                className={
                                                    "bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                                                }
                                                placeholder={"Enter your percent"}
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                                name={"percent"}
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
                                    (data?.skill?.image.url&&!file)&& <Image src={data?.skill?.image.url} alt={"imageUrl"} width={200} height={200}/>
                                }
                            </FormItem>

                        </div>
                        <DialogFooter className={"bg-inherit px-6 py-4"}>
                            <Button disabled={resDeleteSkill.isLoading} variant={"destructive"} onClick={handleDelete}>
                                {
                                    resDeleteSkill.isLoading?<Loading/>:"Delete"
                                }
                            </Button>
                            <Button disabled={resUpdateSkill.isLoading} variant={"default"} type={"submit"}>
                                {
                                    resUpdateSkill.isLoading?<Loading/>:"Update Skill"
                                }
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};

export default SkillModal;

