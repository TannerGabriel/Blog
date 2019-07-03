import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ItemsService } from './items.service';
import { ItemType } from './dto/create-item.dto';
import { ItemInput } from './input-items.input';

@Resolver()
export class ItemsResolver {
  constructor(
    private readonly itemsService: ItemsService,
  ) {}

  @Query(() => [ItemType])
  async items() {
    return this.itemsService.findAll();
  }

  @Mutation(() => ItemType)
  async createItem(@Args('input') input: ItemInput) {
    return this.itemsService.create(input);
  }

  @Query(() => String)
  async hello() {
    return 'hello';
  }

}
