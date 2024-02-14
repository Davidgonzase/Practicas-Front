import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";

type results = {
    page:string,
    ships:ship[]
}

type ship={ 
    name:string,
    model:string,
    manufacturer:string,
    cost_in_credits:string

}

export const handler:Handlers = {
        GET:async (_req:Request,ctx:FreshContext<unknown,results>) => {
        try{
            const url = new URL(_req.url)
            const page = url.searchParams.get("page") || 1
            let res = await fetch(`https://swapi.dev/api/starships/?page=${page}`)
            res = await res.json()
            if(res.results=="Not found")throw new Error("Page not found")
            return ctx.render({
                page,
                ships:res.results
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

        return <div>
            <h1>Pagina {page}</h1>
            {ships.map(i=>{return <br><menu>
                    <li><b>Name : {`${i.name}`}</b></li> 
                    <p>Model : {`${i.model}`}</p>
                    <p>Manufacturer : {`${i.manufacturer}`}</p>
                    <p>Cost in credits : {`${i.cost_in_credits}`}</p>
                    </menu></br>
            })}
            
            <div class = "center">
                <form target="/startships" method="get"><input type="text" id="fname" name="page" ></input></form>
                <a href={atras} class="center">
                    <button>Atras</button>
                </a> 
                <a href={delante} class="center">
                    <button>Delante</button>
                </a> 
            </div>
        </div>   
    } catch (error) {
        return <div>Pagina no encontrada</div>
    }
    
}


export default Page;