import { hash } from 'bcryptjs';

export async function hashPassword(password){
    const hashedpassword = await hash(password,12);
    return hashedpassword;
}