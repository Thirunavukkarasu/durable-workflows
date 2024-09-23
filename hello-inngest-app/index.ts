import { serve } from "inngest/bun";
import { functions, inngest } from "./inngest";

Bun.serve({
  port: 3000,
  fetch(request: Request) {
    const url = new URL(request.url);

    if (url.pathname === "/api/inngest") {
      return serve({ client: inngest, functions })(request);
    }

    return new Response("Not found", { status: 404 });
  },
});