const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
import { NextResponse } from "next/server";

async function handler(req, res) {
  // console.log(req.method);
  // console.log(res);
  const body = await req.json();
  // console.log(body);
  if (req.method === "POST") {
    try {
      //   const data = await prisma.product.findMany({});
      await prisma.Pastes.createMany({
        data: body,
      });
      return NextResponse.json({ success: true });
    } catch (err) {
      console.error(err);
      return NextResponse.json({ msg: "Something went wrong" });
    }
  } else {
    return NextResponse.json({ msg: "Method not allowed" });
  }
}
export { handler as GET, handler as POST };
