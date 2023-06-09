import Logo from "@/components/Logo";
import TextField from "@/components/TextField";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-900 via-purple-900 to-violet-600">
      <Logo />
      <TextField />
    </main>
  );
}
