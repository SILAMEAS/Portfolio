"use client"
import React from 'react';
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,} from "@/components/ui/carousel"
import CardProjectCmd from "@/components/card/card-project-cmd";
import {useGetProjectsQuery} from "@/redux/feature/projectSlice";
import {Loading} from "@/components/Loading";

const LayoutCardListProject = () => {
    const getProjects=useGetProjectsQuery({});
    return  <Carousel className="w-full max-w-xs">
        <CarouselContent>
            {getProjects.isLoading?<Loading/>:
                getProjects?.currentData?.map((project, index) => (
                <CarouselItem key={index}>
                    <CardProjectCmd project={project}/>
                </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
    </Carousel>
};

export default LayoutCardListProject;
