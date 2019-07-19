import { Document, PassportLocalDocument } from 'mongoose';

export interface User extends PassportLocalDocument {
    readonly firstName: string;
    readonly lastName: string;
    readonly email: string;
    readonly password: string;
}
