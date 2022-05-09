import mongoose from 'mongoose';
import { config } from './../config/Constant';
export class MongoConnection {
    public async connect(): Promise<void> {
        try {
            await mongoose.connect(config.MONGO_CONNECT);
            console.log("database connected");
            
        } catch (error) {
            console.log(error);
            process.exit(1);
        }
    }
}