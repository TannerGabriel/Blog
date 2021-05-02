# Nestjs MongoDB CRUD

Simple MongoDB CRUD example demonstrating the Nestjs application structure as well as how you can work with databases. For an in-depth explanation of the application and the basic Nestjs concepts, you can follow [this article](https://gabrieltanner.org/blog/nestjs-crashcourse).

## Requirements

- [NodeJS](https://nodejs.org/en/)
- MongoDB database

## Getting started

### Installing dependencies

First, you need to install all the needed dependencies.

```bash
$ npm install
```

### Configuring the database

Before starting the application, you will need to create a MongoDB database and edit the connection string in the `app.modules.ts` file to match your database configuration. The repository includes a Docker-Compose file that helps you start MongoDB.

```
docker-compose up
```

The default database configuration in the `app.module.ts` file looks like this:

```
@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest')],
})
```

If you are not running the database on your local machine, replace localhost with the correct IP-Address.

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