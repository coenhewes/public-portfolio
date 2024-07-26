import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex justify-center items-center min-h-screen pt-16"> {/* Add pt-16 here */}
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-3xl mb-4">Hi, my name is Coen</h1>
        <p className="text-center max-w-md">
          I am a full-stack software engineer and revenue operations professional.
        </p>
      </div>
    </main>
  );
}
