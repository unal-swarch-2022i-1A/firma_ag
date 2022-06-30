# API Gateway
Firma App API Gateway

## Architecture
https://softwareontheroad.com/ideal-nodejs-project-structure/

## RUN
```bash
node server.js
```

## Testing in Development
http://localhost:3000/graphql

### Sign data
#### Curl dentro del contenedor
A http://host.docker.internal:8092/sign/
```bash
ping host.docker.internal
curl --location --request GET 'http://host.docker.internal:8092/test'
curl --location --request POST 'http://host.docker.internal:8092/sign' --header 'Content-Type: application/json' --header 'Accept: application/json' --data-raw '{ "data": "hola mundo!", "user_id": "1" }'
```

#### Sign
```graphql
query {
  signData(
    userId: "1",
    data: "Hola mundo",
  ) {
    signature,
    userId,
    data
  }
}
```

### User
**Get by ID**
```graphql
query {
  getUser(id:1) {
    userId,
    firstName,
    lastName,
    email,
    password
  }
}
```
**Get by email**
```bash
curl 'http://localhost:3080/' \
-v \
-X POST \
-H 'content-type: application/json' \
--data '{"query":"{ getUserByEmail( email: \"kpassfield0@cocolog-nifty.com\" ) { userId, firstName }}"}'
```
```graphql

```
**Create**
```graphql
mutation {
  createUser (
    email: "kpassfield0@1cocolog-nifty.com",
    firstName: "Korry",
    lastName: "Passfield",
    password: "mP9B1mSca"    
  ) {
    httpCode,
    httpMessage
  }
}
```
```bash
curl 'http://localhost:3080/' \
-v \
-X POST \
-H 'content-type: application/json' \
--data '{
  "query":"mutation {
    createUser (
      email: \"kpassfield0@'$RANDOM'\",
      firstName: \"Korry\",
      lastName: \"Passfield\",
      password: \"mP9B1mSca\"    
    ) {
      httpCode,
      httpMessage
    }
  }"
}'
```