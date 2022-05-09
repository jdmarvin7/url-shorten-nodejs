import { IUrl } from './IUrl';
import { Schema, model } from "mongoose";

const UrlSchema = new Schema<IUrl>({
    hash: { type: 'string', required: true},
    originUrl: { type: 'string', required: true},
    shortUrl: { type: 'string'}
})

export const URL = model<IUrl>('URL', UrlSchema)