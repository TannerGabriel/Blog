import { Module } from '@nestjs/common';
import { ItemsResolver } from './items.resolver';
import { ItemSchema } from './item.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsService } from './items.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Item', schema: ItemSchema }])],
    providers: [ItemsResolver, ItemsService],
})
export class ItemsModule {}
