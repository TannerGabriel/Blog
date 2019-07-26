import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { ItemService } from './item.service';
import { Item } from './item.entity';
import { async } from 'rxjs/internal/scheduler/async';
import { ItemDto } from './item.dto';
import { identity } from 'rxjs';

@Controller('item')
export class ItemController {
    constructor(private itemService: ItemService) {}

    @Get()
    async findAllItems(): Promise<Item[]> {
        return this.itemService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: number): Promise<Item> {
        return this.itemService.findById(id);
    }

    @Post()
    async createItem(@Body() item: Item) {
        return this.itemService.createItem(item);
    }

    @Put(':id')
    async updateItem(@Param('id') id: string, @Body() item: ItemDto) {
        return this.itemService.update(id, item);
    }

    @Delete(':id')
    async deleteItem(@Param('id') id: string) {
        return this.itemService.delete(id);
    }
}
