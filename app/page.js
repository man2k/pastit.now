import Logo from "@/components/Logo";
import TextField from "@/components/TextField";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly bg-gradient-to-br from-green-500 to-green-700 hover:bg-gradient-to-bl">
      <Logo />
      <TextField />
    </main>
  );
}
