# NODEJS-JWT-EXAMPLE
This project is a sample implementation of an authentication system that uses JSON Web Token to manage users' login data in Node.js web server.

Express.js, Mongoose, ES6 Syntax is used in this project.

Tutorial on this project is available at https://velopert.com/2448 (KOREAN)

## Getting Started
### Prerequisites
- node.js 6.9.x
- npm 3.x
- MongoDB 3.0

### Installing & Configuration
1) Install dependencies
```
npm install
```
2) Rename `config.example.js` to `config.js`
3) Get a mongodb server and input `mongodbUri` of `config.js`

### Run the server
```
npm start
```

## APIs
### Auth Route
#### Register
`POST /api/auth/register`
```
{
    username,
    password
}
```
**Description**: creates a new user; first user will be assigned as an admin user. Password is stored in `HMAC-SHA1` format
#### Login
`POST /api/auth/login`
```
{
    username,
    password
}
```
**Description**: logs in to the server. Server will return a JWT token as:
```javascript
{
  "message": "logged in successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ODQ4MjU1NjJhOWRlMDE5NmM5MTI4ZmIiLCJ1c2VybmFtZSI6InRlc3RlciIsImFkbWluIjp0cnVlLCJpYXQiOjE0ODExMjMxNjMsImV4cCI6MTQ4MTcyNzk2MywiaXNzIjoidmVsb3BlcnQuY29tIiwic3ViIjoidXNlckluZm8ifQ.vh8LPqxYWJtO6Bxe7reL7sEon13dYFFnhpnyyEmaLBk"
}
```

#### Check
`GET /api/auth/check` or `GET /api/auth/check?token={token}`  

**Description**: checks the JWT. Token should be passed as Url-encoded query or `x-access-token` header

### User Route
APIs in user routes need admin's permission to process   

#### Check
`GET /api/user/list`

**Description**: retrieves all user list

#### Assign Admin
`POST /api/user/assign-admin/:username`  

**Description**: assigns admin permission to the given user

## License
[MIT License](http://opensource.org/licenses/MIT).  
Copyright (c) 2016 [velopert](https://www.velopert.com/).