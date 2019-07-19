import { Injectable, Logger } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { UserService } from '../user/user.service';
import { User } from '../types/user';
import { InjectModel } from '@nestjs/mongoose';
import { PassportLocalModel } from 'mongoose';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { debug } from 'util';
import { RegistrationStatus } from './interfaces/registration-status.interface';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService,
                @InjectModel('User') private readonly userModel: PassportLocalModel<User>) {}

    async register(user: User) {
        let status: RegistrationStatus = { success: true, message: 'user register' };
        await this.userModel.register(new this.userModel({
            firstName: user.firstName,
            lastName: user.lastName}), user.password, (err) => {
            if (err) {
                debug(err);
                status = { success: false, message: err };
            }
        });
        return status;
    }

    createToken(user) {
        const expiresIn = 3600;

        const accessToken = jwt.sign({ id: user.id,
            email: user.username,
            firstname: user.firstName,
            lastname: user.lastName }, 'SOME_GREAT_SECRET', { expiresIn });

        Logger.log(accessToken, 'AuthService');
        return {
            expiresIn,
            accessToken,
        };
    }

    async validateUser(payload: JwtPayload): Promise<any> {
        return await this.userService.findById(payload.id);
    }
}
