const { PrismaClient } = require("@prisma/client");
const { messages } = require("./data.js");
const prisma = new PrismaClient();

const load = async () => {
  try {
    await prisma.Message.deleteMany();
    console.log("Deleted records in Message table");

    await prisma.$queryRaw`ALTER TABLE Message AUTO_INCREMENT = 1`;
    console.log("reset message auto increment to 1");

    await prisma.Message.createMany({
      data: messages,
    });
    console.log("Added product data");
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

load();
