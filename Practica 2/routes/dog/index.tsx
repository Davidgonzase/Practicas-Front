import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";
import Dog from "../../components/Dog.tsx";

type result={
    dog?:dog
    error?:string
}

type dog = {
    name:string
    max_height_male:string,
    max_height_female:string,
    max_weight_male: string,
    max_weight_female: string,
    good_with_strangers: string,
    good_with_children: string,
    good_with_other_dogs: string,
    image_link:string
};

export const handler:Handlers = {
    GET:async (_req:Request,ctx:FreshContext<result>) => {
        try {
            const url = new URL(_req.url)
            const dog = url.searchParams.get("dog") || null
            const env = await load();
            let dogres = null
            if(dog){
                const NINJA_KEY = env.NINJA_KEY || Deno.env.get("NINJA_KEY");
                if(!NINJA_KEY)throw new Error("Mising Ninja Key")
                const res = await fetch(`https://api.api-ninjas.com/v1/dogs?name=${dog}&limit=1`,{
                    headers: {
                        'X-Api-Key': NINJA_KEY
                    }
                })
                if(res.status!=200)throw new Error("Internal API error")
                dogres =await res.json() as dog[]
            }
            if(dogres==null)return ctx.render({})
            const fdog:dog = dogres[0]
            return ctx.render({dog:fdog})
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
        <div class="flexdog">
            <form class="searcher">
                    Raza<input type="text" name="dog" /> <text> </text>
                    <button type="submit" class="bs"> Buscar </button>
             </form>
            {props.data.dog && <Dog name={props.data.dog.name} max_height_male={props.data.dog.max_height_male} 
                max_height_female={props.data.dog.max_height_female} max_weight_female={props.data.dog.max_weight_female} 
                max_weight_male={props.data.dog.max_weight_male} good_with_children={props.data.dog.good_with_children} 
                good_with_other_dogs={props.data.dog.good_with_other_dogs} good_with_strangers={props.data.dog.good_with_strangers}
                image_link={props.data.dog.image_link}/> }
        </div>
    );
}

export default Page;