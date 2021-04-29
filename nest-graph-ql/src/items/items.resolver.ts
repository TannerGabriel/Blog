import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ItemsService } from './items.service';
import { ItemType } from './dto/create-item.dto';
import { ItemInput } from './input-items.input';
import { Item } from './interfaces/item.interface'

@Resolver(of => ItemType)
export class ItemsResolver {
  constructor(private readonly itemsService: ItemsService) {}

  @Query(returns  => [ItemType])
  async items(): Promise<ItemType[]> {
    return this.itemsService.findAll();
  }

  @Mutation(returns => ItemType)
  async createItem(@Args('input') input: ItemInput): Promise<ItemType> {
    return this.itemsService.create(input);
  }

  @Mutation(returns => ItemType)
  async updateItem(
    @Args('id') id: string,
    @Args('input') input: ItemInput,
  ) {
    return this.itemsService.update(id, input as Item);
  }

  @Mutation(returns  => ItemType)
  async deleteItem(@Args('id') id: string) {
    return this.itemsService.delete(id);
  }

  @Query(returns => String)
  async hello() {
    return 'hello';
  }
}
