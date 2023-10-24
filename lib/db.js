import { MongoClient } from "mongodb";

export async function connectToDatabase(){
    const client = await MongoClient.connect(
        "mongodb://127.0.0.1:27017/data_utility"
    );

    return client;
}
