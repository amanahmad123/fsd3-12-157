# Express.js Setup

## 1. Create Project Folders

Create two folders:

```text
project
  backend
  frontend
```

## 2. Setup Backend

Open the backend folder:

```bash
cd backend
```

Initialize Node.js:

```bash
npm init -y
```

Install Nodemon:

```bash
npm i nodemon -D
```

Install Express:

```bash
npm i express
```

## 3. Configure package.json

Add:

```json
"type": "module"
```

Change the scripts:

```json
"scripts": {
  "start": "node app.js",
  "dev": "nodemon app.js"
}
```

## 4. Create app.js

Create an `app.js` file and write:

```javascript
import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
```

## 5. Run the Server

For development:

```bash
npm run dev
```

For normal mode:

```bash
npm start
```

## 6. Open in Browser

Open:

```text
http://localhost:3000
```

You should see:

```text
Hello World
```

## What We Learned

We learned how to:

1. Create a Node.js project
2. Install Express
3. Install Nodemon
4. Create an Express server
5. Create a GET route
6. Run the server on a port
7. Open the server in a browser
