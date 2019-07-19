import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserSchema } from '../models/user.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{name: 'User', schema: UserSchema}])],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService, MongooseModule.forFeature([{name: 'User', schema: UserSchema}])]
})
export class UserModule {}
