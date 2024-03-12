import { Handlers } from "$fresh/server.ts";
import "mongoose" from mongoose;

export const handler = (_req: Request, _ctx: FreshContext): Response => {
    GET(_req) {
        console.log(_req.)
        return new Response(JSON.stringify());
      },
};