"use client";
import { usePathname } from "next/navigation";
import TextField from "@/components/TextField";
import axios from "axios";
import { useEffect, useState } from "react";
import CryptoJS from "crypto-js";
import { parse } from "flatted";

export default function Home() {
  const [gotContent, setGotContent] = useState("");
  const pathname = usePathname().replace("/", "");
  // console.log(pathname);
  useEffect(() => {
    axios
      .post("api/getPastes", {
        id: pathname,
      })
      .then((res) => {
        // console.log(parse(res.data.paste));
        // setGotContent(res.data.paste);
        const decMsg = CryptoJS.AES.decrypt(parse(res.data.paste), pathname);
        // console.log(decMsg);
        // console.log(decMsg.toString(CryptoJS.enc.Utf8));
        setGotContent(decMsg.toString(CryptoJS.enc.Utf8));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [pathname]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly bg-green-300">
      <div className="text-mono mb-0">
        <label className=" font-mono text-4xl font-bold">PASTIT.NOW</label>
      </div>
      <TextField gotContent={gotContent} pasteID={pathname} />
    </main>
  );
}
