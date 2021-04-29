import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class ItemInput {
  @Field()
  readonly title: string;
  @Field(() => Int)
  readonly price: number;
  @Field()
  readonly description: string;
}
