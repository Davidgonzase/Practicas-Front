import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";

type results = {
    page:string,
    ships:ship[]
}

type ship={ 
    Name:string,
    Model:string,
    Manufacturer:string,
    Cost_in_Credits:string

}

export const handler:Handlers = {
        GET:async (_req:Request,ctx:FreshContext<unknown,results>) => {
        try{
            const url = new URL(_req.url)
            const page = url.searchParams.get("page") || 1
            let res = await fetch(`https://swapi.dev/api/starships/?page=${page}`)
            res = await res.json()
            if(res.results=="Not found")throw new Error("Page not found")
            const ships:ship[]=res.results.map(i=> {return {
                Name:i.name,
                Model:i.model,
                Manufacturer:i.manufacturer,
                Cost_in_Credits:i.cost_in_credits
            } })
            return ctx.render({
                page,
                ships
            })
        }catch(error){
            return ctx.render()
        }}
}

const Page = (props:PageProps<results>) =>{
    try {
        const {page,ships} = props.data;
        const atras=`/startships?page=${Number(page)-1}`
        const delante=`/startships?page=${Number(page)+1}`

        return <div class="center">
            <h1>Pagina {page}</h1>
            {ships.map(i=>{return <br>
            <div>
                <li><b>Name : </b>{`${i.Name}`}</li> 
                <li><b>Model : </b>{`${i.Model}`}</li>
                <li><b>Manufacturer : </b>{`${i.Manufacturer}`}</li>
                <li><b>Cost in credits : </b>{`${i.Cost_in_Credits}`}</li>
                </div>
                </br>
            })}
            
            <br></br>
            <div>
            <a href={atras}>
                <button>Atras</button>
            </a> 
            
            <form target="/startships" method="get"><input type="text" id="fname" name="page" ></input></form>

            <a href={delante}>
                <button>Delante</button>
            </a> 
            </div>
        </div>   
    } catch (error) {
        return <div>Pagina no encontrada</div>
    }
    
}


export default Page;