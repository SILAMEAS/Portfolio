"use client";
import React from "react";
import {useModal} from "@/hooks/store/use-modal-store";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle,} from "@/components/ui/sheet"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Loading} from "@/components/Loading";
import {Textarea} from "@/components/ui/textarea";
import {useApiUpdateProfile} from "@/components/hooks/profile/useApiUpdateProfile";

const formSchema = z.object({
    title: z.string().min(1, {
        message: "Title is required",
    }).max(28, {
        message: "Title is too long",
    }),
    mainTitle: z.string().min(1, {
        message: "mainTitle is required",
    }).max(28, {
        message: "mainTitle is too long",
    }),
    description:z.string().min(1, {
        message: "description is required",
    }),
    label:z.string().min(1, {
        message: "label is required",
    }),
    mainLabel:z.string().min(1, {
        message: "mainLabel is required",
    })
});
const EditTitleSheet = () => {
    const {type,isOpen,onClose,data}=useModal();
    const {updateProfile}=useApiUpdateProfile();
    const isModalOpen=isOpen&&type==='editTitle';
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            mainTitle:"",
            description:"",
            label:"",
            mainLabel:""
        },
    });
    const loading = form.formState.isSubmitting;
    const handleClose=()=>{
        form.reset();
        onClose()
    }
    const onSubmit = async (value: z.infer<typeof formSchema>) => {
        await updateProfile(value);
        form.reset();
        handleClose();
    };
    React.useEffect(()=>{
        if(data.profile){
            form.setValue('title',data.profile.title);
            form.setValue('mainTitle',data.profile.mainTitle);
            form.setValue('description',data.profile.description)
            form.setValue('label',data.profile.label);
            form.setValue('mainLabel',data.profile.mainLabel)
        }

    },[data,form])

    return (
        <Sheet open={isModalOpen} onOpenChange={onClose}>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Customize Home</SheetTitle>
                    <SheetDescription>

                    </SheetDescription>
                </SheetHeader>
                <div className={'h-[calc(100%-30px)] overflow-y-scroll'}>
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
                                                Label
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
                                    name={"label"}
                                />
                                {/** main label **/}
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
                                                    placeholder={"Enter your title"}
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                    name={"mainLabel"}
                                />
                                {/** title **/}
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
                                {/** main label **/}
                                <FormField
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel
                                                className={
                                                    "uppercase text-xs font-bold text-zinc-500 dark:text-secondary/700"
                                                }
                                            >
                                                Main Title
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
                                    name={"mainTitle"}
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
                                                Description
                                            </FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    {...field}
                                                    rows={6}
                                                    disabled={loading}
                                                    className={
                                                        "bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                                                    }
                                                    placeholder={"Enter your title"}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                    name={"description"}
                                />
                            </div>
                            <SheetFooter className={"py-10 w-[100%] px-6"}>
                                <Button type="submit" className={'w-full'}>{loading?<Loading textLoading={'updating ...'}/>:'Save changes'}</Button>
                            </SheetFooter>
                        </form>
                    </Form>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default EditTitleSheet;

