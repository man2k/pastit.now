"use client";
import { usePathname } from "next/navigation";
import TextField from "@/components/TextField";
import axios from "axios";
import { useState } from "react";

// const page = () => {
//   const pathname = usePathname();
//   // console.log(pathname);
//   return <div>{pathname}</div>;
// };

// export default page;

export default function Home() {
  const [gotContent, setGotContent] = useState("");
  const pathname = usePathname();
  axios
    .post("api/getPastes", {
      id: pathname,
    })
    .then((res) => {
      console.log(res);
      setGotContent(res);
    });
  // axios
  //   .post("api/pastes", {
  //     id: id,
  //     paste: stringify(encMsg),
  //     timestamp: `${new Date().getTime()}`,
  //     author: "anon",
  //   })
  //   .then(function (response) {
  //     console.log(response);
  //     window.alert("Uploaded");
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly bg-green-300">
      <div className="text-mono mb-0">
        <label className=" font-mono text-4xl font-bold">PASTIT.NOW</label>
      </div>
      <TextField gotContent={gotContent} />
    </main>
  );
}
