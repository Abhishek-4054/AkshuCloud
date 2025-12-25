import { Hono } from "hono";

const app = new Hono();

// Logging middleware
app.use("*", async (c, next) => {
  const start = Date.now();
  await next();
  const duration = Date.now() - start;
  console.log(`${c.req.method} ${c.req.path} ${c.res.status} in ${duration}ms`);
});

// API route
app.get("/api/hello", (c) => {
  return c.json({ message: "Hello from Cloudflare Worker!" });
});

// Static route
app.get("/", (c) => c.text("Welcome to AkshuCloud"));

// Error handling
app.onError((err, c) => {
  console.error("Error:", err);
  return c.json({ message: err.message || "Internal Server Error" }, 500);
});

export default app;
