const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Optional: add delays or custom routes here
// Example: simulate network delay
// server.use((req, res, next) => setTimeout(next, 500));

server.use(router);

// Use Render's assigned PORT or fallback to 3000
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
