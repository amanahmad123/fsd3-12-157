# NPM Projects

1. go to project folder (by cd)
2. type ``` npm init -y ```
3. open package.json
4. update ```type:module```
5. install nodemon ``` npm i nodemon -D```
6. update script in padkage.json 
```
script{

    "start": "node app.js", 
    "dev": "nodemon prg7.js"
    
}
```
7. add node_modules to .gitignore
8. to run use `npm run dev`


# REST API

-majorly backend server return only data not html file
-REST API uses (get, post, put, patch, delete) method to communicate with client
-any browser can check only get method
-for other method type we use third party API Teaster like postman, thunder client, echo api etc.



# REST API — Short Cheat Sheet

GET → Take data from server

```text
GET /api/products
GET /api/products/101
```

POST → Send/Create data on server

```text
POST /api/products
Body → new data
```

PUT → Update/Replace full data

```text
PUT /api/products/101
Body → updated data
```

PATCH → Update part of data

```text
PATCH /api/products/101
Body → changed data
```

DELETE → Delete data

```text
DELETE /api/products/101
```

## Remember

```text
GET     → Take
POST    → Create
PUT     → Update
PATCH   → Partial Update
DELETE  → Remove
```

## Express

```text
req.params → URL data
req.query  → ? query data
req.body   → Sent data
res.json() → Send response
```

### Easy Rule

```text
URL        → Where?
METHOD     → What?
BODY       → What data?
RESPONSE   → Server's answer
```
