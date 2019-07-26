import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from './item.entity';
import { Repository } from 'typeorm';
import { ItemDto } from './item.dto';

@Injectable()
export class ItemService {
    constructor(@InjectRepository(Item) private readonly itemRepository: Repository<Item>) {}

    async findAll(): Promise<Item[]> {
        return await this.itemRepository.find();
    }

    async findById(id: number): Promise<Item> {
        return await this.itemRepository.findOne({id});
    }

    async createItem(item: Item) {
        return await this.itemRepository.save(item);
    }

    async update(id: string, item: ItemDto) {
        return await this.itemRepository.update(id, item);
    }

    async delete(id: string) {
        return await this.itemRepository.delete(id);
    }
}
