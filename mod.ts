import { serve } from "https://deno.land/std@0.145.0/http/server.ts";
import { serveDir, serveFile } from "https://deno.land/std@0.145.0/http/file_server.ts";

async function handleRequest(request: Request): Promise<Response> {
    const { pathname } = new URL(request.url);

    if (pathname == "/") {
        return await serveFile(request, `${Deno.cwd()}/static/index.html`);
    } else {
        return await serveDir(request, { fsRoot: `${Deno.cwd()}/static` });
    }
}

serve(handleRequest);
