import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class ItemsResolver {
  /* constructor(
    private readonly authorsService: AuthorsService,
    private readonly postsService: PostsService,
  ) {} */

  @Query(() => String)
  async hello() {
    return 'hello';
  }

}
