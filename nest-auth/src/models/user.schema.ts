import * as mongoose from 'mongoose';
import * as passportLocalMongoose from 'passport-local-mongoose';

export const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
});
UserSchema.plugin(passportLocalMongoose);
