import http from "http";
import express from "express";
import { applyMiddleware, applyRoutes } from './src/utils';
import routes from './src/service';
import middleware from './src/middleware';
import errorHandlers from './src/middleware/errorHandlers';


process.on('uncaughtException', e => {
	console.log(e)
	process.exit(1)
})

process.on('unhandledRejection', e => {
	console.log(e)
	process.exit(1)
})

const router = express();
applyMiddleware(middleware, router);
applyRoutes(routes, router);
applyMiddleware(errorHandlers, router);

const { PORT = 3000 } = process.env;

const server = http.createServer(router);

server.listen(PORT, () => 
	console.log(`Server is running http://localhost:${PORT}...`)
);
