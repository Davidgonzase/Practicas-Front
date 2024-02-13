import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";

type results = {
    persons:person[]
}

type person = {
    name:string,
    height:string,
    mass:string,
    gender:string,
    birth_year:string
}


export const handler:Handlers = {
        GET:async (_req:Request,ctx:FreshContext<unknown,results>) => {
        try{
            const url = new URL(_req.url)
            const name = url.searchParams.get("query") || 1
            let res = await fetch(`https://swapi.dev/api/people/?search=${name}`)
            //if(res.results.length==0)throw new Error
            res = await res.json()
            const persons:person[]=res.results.map(i=> {return {
                name:i.name,
                height:i.height,
                mass:i.mass,
                gender:i.gender,
                birth_year:i.birth_year
            } })    
            return ctx.render({
                persons
            })
        }catch(error){
            return ctx.render()
        }}
}

const Page = (props:PageProps<results>) =>{
    try {
        const {persons} = props.data;
        return <div class="center">{persons.map(i=>{return <li>{`Name: ${i.name}, height : ${i.height}, mass : ${i.mass}, gender:${i.gender}, birth_year:${i.birth_year}`}</li>})}<br></br></div>
    } catch (error) {
        return <div>Persona no encontrada</div>
    }
    
}


export default Page;