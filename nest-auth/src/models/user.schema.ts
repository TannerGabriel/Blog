import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';

export const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

UserSchema.pre('save', async function(next: mongoose.HookNextFunction) {
    try {
        if (!this.isModified('password')) {
        return next();
        }
        // tslint:disable-next-line: no-string-literal
        const hashed = await bcrypt.hash(this['password'], 10);
        // tslint:disable-next-line: no-string-literal
        this['password'] = hashed;
        return next();
    } catch (err) {
        return next(err);
    }
});
