                            GovTech Assessment
### Manual Installation

### Backend

**Clone the repo:**

```
git clone https://github.com/varsha-konin-au7/crud.git 
```

Install the dependencies:
```
npm install
```

_Commands:_ 
**Running locally:**
``` cd src ```
``` nodemon index.js ```

**Environment Variables:**
The environment variables can be found and modified in the .env file. They come with these default values:

** server running on port:8000


**User routes:**
```
POST /v1/users - create a user
GET /v1/users - get all users
GET /v1/users/:userId - get user
PATCH /v1/users/:userId - update user
DELETE /v1/users/:userId - delete user
```
**Error Handling**
The app has a centralized error handling mechanism.


**Validation**
Request data is validated using Joi

**Authentication**
There's authentication for certain routes. These routes require a valid JWT access token in the Authorization request header using the Bearer schema. If the request does not contain a valid access token, an Unauthorized (401) error is thrown.

**Paginate**
The paginate plugin adds the paginate static method to the mongoose schema.

**Tests**
TODO - Tests need to be added


## Frontend



