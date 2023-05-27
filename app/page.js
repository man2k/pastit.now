import Image from "next/image";
import TextField from "@/components/TextField";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-24 bg-green-300">
      <div>
        <label className=" font-mono text-4xl font-bold">PASTIT.NOW</label>
      </div>
      <TextField />
    </main>
  );
}
