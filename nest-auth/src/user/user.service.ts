import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, PassportLocalModel } from 'mongoose';
import { User } from '../types/user';
import { CreateUserDto } from './dto/create-user.dto';
import { debug } from 'util';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: PassportLocalModel<User>) {}

    logger: Logger = new Logger();

    async findAll(): Promise<User[]> {
        return await this.userModel.find().exec();
    }

    async findOne(options: object): Promise<User> {
        return await this.userModel.findOne(options).exec();
    }

    async findById(ID: number): Promise<User> {
        return await this.userModel.findById(ID).exec();
    }

    async create(createUserDto: CreateUserDto): Promise<User> {
        const createdUser = new this.userModel(createUserDto);
        return await createdUser.save();
    }

    async update(ID: number, newValue: User): Promise<User> {
        const user = await this.userModel.findById(ID).exec();

        if (!user._id) {
            this.logger.log('user not found', 'updateUser');
        }

        await this.userModel.findByIdAndUpdate(ID, newValue).exec();
        return await this.userModel.findById(ID).exec();
    }

    async delete(ID: number): Promise<string> {
        try {
            await this.userModel.findByIdAndRemove(ID).exec();
            return 'The user has been deleted';
        } catch (error) {
            debug(error);
            return 'The user could not be deleted';
        }
    }
}
