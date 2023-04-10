import {prismaclient} from '@prisma/client';

const prisma=new prismaclient();
export async function createuser(email,createdAt){
  const newUser=await prisma.user.create({
    data:{
      email,
      createdAt,
    }
  });
  return newUser
}
