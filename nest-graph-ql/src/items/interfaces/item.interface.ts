import { Document } from 'mongoose';

export interface Item extends Document {
    readonly title: string;
    readonly price: number;
    readonly description: string;
}
