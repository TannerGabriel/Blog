import { InputType, Field, Int } from 'type-graphql';

@InputType()
export class ItemInput {
  @Field()
  readonly title: string;
  @Field(() => Int)
  readonly price: number;
  @Field()
  readonly description: string;
}
