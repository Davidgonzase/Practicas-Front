import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Jobs from "../../islands/Jobs.tsx"
import {results,data} from "../../types.ts"

type response={
    results?:results,
    error?:string;
}

export const handler:Handlers ={
    GET:async(req:Request,ctx:FreshContext<response>) =>{
        try {
            const response = await fetch("https://arbeitnow.com/api/job-board-api")
            const data = await response.json() as results
            return ctx.render({results:data})
        } catch (error) {
            return ctx.render({error:error.message})
        }
    },
}

const Page = (props:PageProps<response>) =>{
    if(props.data.error || !props.data.results) return (<text>{props.data.error}</text>);
    return (
        <Jobs results={props.data.results}/>
    );
}

export default Page;