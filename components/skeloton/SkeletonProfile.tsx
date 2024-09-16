import React from 'react';
import {Skeleton} from "@/components/ui/skeleton";

const SkeletonProfile = () => {
    return <div className={'absolute top-36 md:top-48 lg:top-28 pl-20'}>
        <Skeleton className="h-6 w-[250px]" />
    </div>
};

export default SkeletonProfile;
