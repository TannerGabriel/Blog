import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { ItemsModule } from '../src/items/items.module';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { ItemType } from '../src/items/dto/create-item.dto';
import { Item } from '../src/items/interfaces/item.interface';

describe('AppController (e2e)', () => {
  let app;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        ItemsModule,
        MongooseModule.forRoot('mongodb://localhost/nestgraphqltesting'),
        GraphQLModule.forRoot({
          autoSchemaFile: 'schema.gql',
        }),
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  const item: Item = {
    title: 'Great item',
    price: 10,
    description: 'Description of this great item',
  };

  const id: string = '';

  const updatedItem: Item = {
    title: 'Great updated item',
    price: 20,
    description: 'Updated description of this great item',
  };

  const createitemObject = JSON.stringify(item).replace(
    /\"([^(\")"]+)\":/g,
    '$1:',
  );
  const updateItemObject = JSON.stringify(updatedItem).replace(
    /\"([^(\")"]+)\":/g,
    '$1:',
  );

  const createItemQuery = `
  mutation {
    createItem(input: ${createitemObject}) {
      title
      price
      description
      id
    }
  }`;

  it('createItem', () => {
    return request(app.getHttpServer())
      .post('/graphql')
      .send({
        operationName: null,
        variables: {},
        query: createItemQuery,
      })
      .expect(({ body }) => {
        const data = body.data.createItem;
        console.log(data.id);
        this.id = data.id;
        expect(data.title).toBe(item.title);
        expect(data.description).toBe(item.description);
        expect(data.price).toBe(item.price);
      })
      .expect(200);
  });

  it('getItems', () => {
    return request(app.getHttpServer())
      .post('/graphql')
      .send({
        operationName: null,
        variables: {},
        query: '{items{title, price, description, id}}',
      })
      .expect(({ body }) => {})
      .expect(200);
  });

  it('createItem', () => {
    const updateItemQuery = `
    mutation {
      updateItem(id: "${this.id}", input: ${updateItemObject}) {
        title
        price
        description
        id
      }
    }`;

    console.log(updateItemQuery);

    return request(app.getHttpServer())
      .post('/graphql')
      .send({
        operationName: null,
        variables: {},
        query: updateItemQuery,
      })
      .expect(({ body }) => {
        console.log(body);
        const data = body.data.updateItem;
        expect(data.title).toBe(updatedItem.title);
        expect(data.description).toBe(updatedItem.description);
        expect(data.price).toBe(updatedItem.price);
      })
      .expect(200);
  });
});
