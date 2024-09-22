interface ImageProjectEntity{
    public_id:string;
    url:string;
    format:string;
}
export interface ProjectDto{
    id:number;
    title: string,
    description: string,
    link: string,
    image: ImageProjectEntity,
}