import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";

export const handler:Handlers = {
    GET:async (_req:Request,ctx:FreshContext<unknown>) => {
        const url = new URL(_req.url)
        const query = url.searchParams.get("query") || null
        if(query){
            return new Response("", {
                status: 307,
                headers: { Location: `/people?query=${query}` },
              });
        }
        return ctx.render({})
    }
}

const Page = (props:PageProps<unknown>) =>{
    let query
    return (
        <div>
          <form>
            <input type="text" name="query" value={query} />
            <button type="submit">Search</button>
          </form>
        </div>
    );

}


export default Page;