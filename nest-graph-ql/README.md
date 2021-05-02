# Nestjs GraphQL

Example demonstrating how to build a GraphQL CRUD application using Nestjs and MongoDB. For an in-depth explanation of the application and the basic Nestjs concepts, you can follow [this article](https://gabrieltanner.org/blog/nestjs-graphqlserver).

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

## Testing the application

After starting the application you can start using it by either opening the GraphQL playground on http://localhost:3000/graphql or sending a request through an HTTP client like [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/).

### Creating an item

```
mutation {
  createItem(input: {title: "item", price: 10, description: "test"}) {
    title
    price
    description
    id
  }
}
```

### Getting all items

```
{
  items {
    title,
    price,
    description,
    id
  }
}
```

### Updating item

```
mutation {
  updateItem(id: "ID", input: {title: "item123", price: 10, description: "test123"}) {
    title
    price
    description
    id
  }
}
```

### Deleting item

```
mutation {
  deleteItem(id: "ID") {
    title
    price
    description
    id
  }
}
```
