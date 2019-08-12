import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { ItemsModule } from '../src/items/items.module';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { ItemType } from '../src/items/dto/create-item.dto';

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

  const item: ItemType = {
    title: 'Great item',
    price: 10,
    description: 'Description of this great item',
  };

  const itemObject = JSON.stringify(item).replace(/\"([^(\")"]+)\":/g, '$1:');

  const createItemQuery = `
  mutation {
    createItem(input: ${itemObject}) {
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
});
