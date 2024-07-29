
import Link from "next/link";
import { Button } from "~/components/ui/button"

export default function HomePage() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen pt-16">
      <div className="flex flex-col mb-8">
        <h1 className="font-bold text-3xl mb-4">Software Development</h1>
        <div>
          <p className="text-left">I specialize in building modern, efficient applications using:</p>
        </div>
        <div>
          <ul className="list-disc text-left mt-4">
            <li><b>Python</b> for backend development, scripting, and data analysis</li>
            <li><b>Javascript & Typescript</b> for dynamic, type-safe web development</li>
            <li><b>React</b> for creating interactive user interfaces</li>
            <li><b>Next.js</b> for server-side rendering and static site generation</li>
            <li><b>Tailwind CSS & CSS</b> for responsive, visually appealing design</li>
            <li><b>HTML</b> for semantic and accessible web content</li>
            <li><b>SQL</b> for managing and querying relational databases</li>
            <li><b>Git</b> for version control and collaboration</li>
          </ul>
        </div>
      </div>
    </main>
  );
}

