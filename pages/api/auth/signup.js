// import { hashPassword } from "@/lib/auth";
// import { connectToDatabase } from "@/lib/db";
import { hashPassword } from "../../../lib/auth";
import { connectToDatabase } from "../../../lib/db";

async function handler(req, res){
    if (req.method !== 'POST'){ return; }

    const data = req.body;

    const {email, password} = data;

    if (!email){
        res.status(422).json({message:"wrong email"})
    }

    const client = await connectToDatabase();
    
    const db = client.db();
    const hashedpassword = await hashPassword(password);
    db.collection('users').insertOne({
        email:email,
        password:hashedpassword
    })
    res.status(201).json({message:"create successfully"});
}

export default handler;