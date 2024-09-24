import React from 'react';
export const loadingSpin = <div
    className="w-4 h-4  md:w-8 md:h-8 border-4 border-blue-200 rounded-full animate-spin border-top-color:transparent"></div>
export const Loading = ({textLoading="",className}:{textLoading?:string,className?:string}) => {
    return <div className={`flex items-center justify-center min-h-screen z-40 ${className}`}>
                    {loadingSpin}
                <p className="ml-2">{textLoading}</p>
            </div>
            };
