import { Controller, Get, Param, Post, Body, Put, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { ItemService } from './item.service';
import { Item } from './item.entity';
import { ItemDto } from './item.dto';

@Controller('item')
export class ItemController {
    constructor(private itemService: ItemService) {}

    @Get()
    async findAllItems(): Promise<Item[]> {
        return await this.itemService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: number): Promise<Item> {
        return await this.itemService.findById(id);
    }

    @Post()
    async createItem(@Body() item: Item) {
        return await this.itemService.createItem(item);
    }

    @Put(':id')
    async updateItem(@Param('id') id: string, @Body() item: ItemDto) {
        return await this.itemService.update(id, item);
    }

    @Delete(':id')
    async deleteItem(@Param('id') id: string) {
        return await this.itemService.delete(id);
    }
}
