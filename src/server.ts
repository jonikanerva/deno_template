import { serve } from "../deps.ts";

const port = 8000;
const hostname = "localhost";
const serverAddress = `${hostname}:${port}`;
const server = serve({ port, hostname });

console.log(`Server running at ${serverAddress}`);

for await (const request of server) {
  const { method, url } = request;
  const { pathname } = new URL(url, serverAddress);

  if (method === "GET" && pathname === "/") {
    request.respond({ body: "Root" });
  } else if (method === "GET" && pathname === "/hello") {
    request.respond({ body: "Hello World!" });
  } else {
    request.respond({ body: "Not Found!", status: 404 });
  }
}
