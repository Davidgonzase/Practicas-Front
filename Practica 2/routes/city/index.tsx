import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";
import City from "../../components/City.tsx";

type result={
    city?:city
    error?:string
}

type city = {
    name:string
    population:string,
    longitude:string,
    latitude:string,
    country:string,
    is_capital:string
};

export const handler:Handlers = {
    GET:async (_req:Request,ctx:FreshContext<result>) => {
        try {
            const url = new URL(_req.url)
            const city = url.searchParams.get("city") || null
            const env = await load();
            let cityres = null
            if(city){
                const NINJA_KEY = env.NINJA_KEY || Deno.env.get("NINJA_KEY");
                if(!NINJA_KEY)throw new Error("Mising Ninja Key")
                const res = await fetch(`https://api.api-ninjas.com/v1/city?name=${city}&limit=1`,{
                    headers: {
                        'X-Api-Key': NINJA_KEY
                    }
                })
                if(res.status!=200)throw new Error("Internal API error")
                cityres =await res.json() as city[]
            }
            if(cityres==null)return ctx.render({})
            const fcity:city = cityres[0]
            return ctx.render({city:fcity})
        } catch (error) {
            return ctx.render({error:error.message})
        }
    }
}

const Page = (props:PageProps<result>) =>{
    if(props.data.error){
        return(<div >
            {props.data.error || "Ha ocurrido un problema"}
        </div>
        );
    }
    return(
        <div class="flexcity">
            <form class="searcher">
                Ciudad <input type="text" name="city" /> <text> </text>
                <button type="submit" class="bs"> Buscar </button>
            </form>

            {props.data.city && <div><City name={props.data.city.name} population={props.data.city.population} 
            longitude={props.data.city.longitude} latitude={props.data.city.latitude} 
            is_capital={props.data.city.is_capital} country={props.data.city.country}/></div>}
        </div>
    );
}

export default Page;