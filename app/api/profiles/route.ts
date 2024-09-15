import {AppDataSource, checkDBConnection} from "@/db/typeorm.config";
import {NextResponse} from "next/server";
import {Profile} from "@/db/entities/Profile";


export async function GET() {
    try {
        await checkDBConnection();
        const userRepository = AppDataSource.getRepository(Profile);
        const users: Profile[] = await userRepository.find();
        if(users.length===0){
            const newUser=userRepository.create({
                    mainTile:"Web Development",
                    title:"Make anything possible with",
                    description:"Hello, I`m Sila. My experience is 2 years with web development. You can \\tcontact me if you want to build your website for your business."
                }
            );
            await userRepository.save(newUser);
        }
        const response = NextResponse.json(users);
        // Set headers to prevent any kind of caching
        response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
        response.headers.set('Expires', '0');
        response.headers.set('Pragma', 'no-cache');

        // Disable Vercel edge caching
        response.headers.set('x-vercel-cache', 'MISS');
        return response;
    } catch (error) {
        return NextResponse.error();
    }
}
