import { PrismaClient } from "@prisma/client";
import { PrismaClientInitializationError } from "@prisma/client/runtime";

const prismaClient = new PrismaClient();

export default prismaClient;