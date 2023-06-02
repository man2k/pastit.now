const { PrismaClient } = require("@prisma/client");
const { paste } = require("./data.js");
const prisma = new PrismaClient();

const load = async () => {
  try {
    await prisma.Pastes.deleteMany();
    console.log("Deleted records in Message table");

    await prisma.$queryRaw`ALTER TABLE Pastes AUTO_INCREMENT = 1`;
    console.log("reset message auto increment to 1");

    await prisma.Pastes.createMany({
      data: paste,
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
