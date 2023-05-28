import TextField from "@/components/TextField";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly bg-green-300">
      <div className="text-mono mb-0">
        <label className=" font-mono text-4xl font-bold">PASTIT.NOW</label>
      </div>
      <TextField />
    </main>
  );
}
