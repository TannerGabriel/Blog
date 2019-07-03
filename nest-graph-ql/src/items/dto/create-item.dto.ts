import { ObjectType, Field, Int, ID } from 'type-graphql';

@ObjectType()
export class ItemType {
    @Field(() => ID)
    readonly id: string;
    @Field()
    readonly title: string;
    @Field(() => Int)
    readonly price: number;
    @Field()
    readonly description: string;
}
