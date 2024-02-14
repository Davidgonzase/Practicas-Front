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
            const name = url.searchParams.get("query") || undefined
            let res = await fetch(`https://swapi.dev/api/people/?search=${name}`)
            res = await res.json()
            if(res.results.length==0)throw new Error
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
        return <div >
            <h1>Personas encontradas :</h1>
            {persons.map(i=>{return <div> <br><menu>
                <li><b>Name : {`${i.name}`}</b></li> 
                <p>Height : {`${i.height}`}</p>
                <p>Mass : {`${i.mass}`}</p>
                <p>Gender : {`${i.gender}`}</p>
                <p>Birth year : {`${i.birth_year}`}</p>
                </menu> </br> </div>
            })}
            </div>
    } catch (error) {
        return <div>Persona no encontrada</div>
    }
    
}


export default Page;