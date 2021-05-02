# Nestjs file uploading

Nestjs file uploading example demonstrating how to upload single and multiple files over an HTTP endpoint. For an in-depth explanation of the application and the basic Nestjs concepts, you can follow [this article](https://gabrieltanner.org/blog/nestjs-file-uploading-using-multer).

## Requirements

- [NodeJS](https://nodejs.org/en/)

## Getting started

### Installing dependencies

First, you need to install all the needed dependencies.

```bash
$ npm install
```

### Starting the application

After installing the dependencies, you can run the application using one of the following commands.

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Sending HTTP request

Once the server has started successfully, you can start sending HTTP requests to the three endpoints:

- GET request - `localhost:3000/:imgpath` - Get an uploaded image
- POST request - `localhost:3000` - Upload a single image
- POST request - `localhost:3000/multiple` - Upload multiple images at a time