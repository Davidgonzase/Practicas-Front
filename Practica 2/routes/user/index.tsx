import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";
import User from "../../components/User.tsx";

type result={
    user?:user
    error?:string
}

type user={
    sex:string
    address:string,
    name:string,
    email:string,
}

export const handler:Handlers = {
    GET:async (_req:Request,ctx:FreshContext<result>) => {
        try {
            const env = await load();
            const NINJA_KEY = env.NINJA_KEY || Deno.env.get("NINJA_KEY");
            if(!NINJA_KEY)throw new Error("Mising Ninja Key")
            const res = await fetch("https://api.api-ninjas.com/v1/randomuser",{
                headers: {
                    'X-Api-Key': NINJA_KEY
                }
            })
            if(res.status!=200)throw new Error("Internal API error")
            const user = await res.json() as user 
            return ctx.render({user:user})
        } catch (error) {
            return ctx.render({error:error.message})
        }
    }
}

const Page = (props:PageProps<result>) =>{
        if(props.data.error || !props.data.user){
            return(<div >
                {props.data.error || "Ha ocurrido un problema"}
            </div>
            );
        }
    const data= props.data
    return(<div>
        <User sex={props.data.user.sex} name={props.data.user.name} email={props.data.user.email} address={props.data.user.address}/>
    </div>

    );
}

export default Page;