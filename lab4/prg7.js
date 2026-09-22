import http from "http";
import { getUsers } from "./users.js";

const server = http.createServer((req, res) => {

    // Tell the client that we are sending JSON
    res.setHeader("Content-Type", "application/json");

    // GET all users
    if (req.url === "/api/users" && req.method === "GET") {

        res.end(JSON.stringify(getUsers()));

    }

    // POST - add user
    else if (req.url === "/api/users" && req.method === "POST") {

        res.end(JSON.stringify({
            msg: "add user"
        }));

    }

    // GET single user
    else if (req.url === "/api/users/1" && req.method === "GET") {

        res.end(JSON.stringify({
            msg: "single user with id 1"
        }));

    }

    // PUT - update user
    else if (req.url === "/api/users/1" && req.method === "PUT") {

        res.end(JSON.stringify({
            msg: "update user 1"
        }));

    }

    // DELETE - remove user
    else if (req.url === "/api/users/1" && req.method === "DELETE") {

        res.end(JSON.stringify({
            msg: "remove 1"
        }));

    }

    // Route not found
    else {

        res.statusCode = 404;

        res.end(JSON.stringify({
            msg: "Route not found"
        }));

    }
});


// Start server
server.listen(3001, () => {
    console.log("prg7 is running on port 3001");
});
