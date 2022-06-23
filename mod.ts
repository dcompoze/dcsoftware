import { serve } from "https://deno.land/std@0.145.0/http/server.ts";
import { serveFile } from "https://deno.land/std@0.145.0/http/file_server.ts";

async function handleRequest(request: Request): Promise<Response> {
    const { pathname } = new URL(request.url);
    if (pathname == "/" || pathname.startsWith("/index.html")) {
        return await serveFile(request, `${Deno.cwd()}/static/index.html`);
    } else if (pathname.startsWith("/styles.css")) {
        return await serveFile(request, `${Deno.cwd()}/static/styles.css`);
    } else if (pathname.startsWith("/favicon/favicon.ico")) {
        return await serveFile(request, `${Deno.cwd()}/static/favicon/favicon.ico`);
    } else if (pathname.startsWith("/favicon/apple-touch-icon.png")) {
        return await serveFile(request, `${Deno.cwd()}/static/favicon/apple-touch-icon.png`);
    } else if (pathname.startsWith("/index.js")) {
        return await serveFile(request, `${Deno.cwd()}/static/index.js`);
    } else {
        return await serveFile(request, `${Deno.cwd()}/static/index.html`);
    }
}

serve(handleRequest);
