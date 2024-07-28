
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen pt-16"> {/* Changed to flex-col here */}
      <div className="flex flex-col items-center mb-8"> {/* Add margin-bottom to separate from images */}
        <h1 className="font-bold text-3xl mb-4">Hi, my name is Coen</h1>
        <p className="text-center max-w-md">
          I am a full-stack software engineer and revenue operations professional.
        </p>
      </div>
      <div className="flex flex-wrap gap-4 justify-center"> {/* Added flex-wrap and gap */}
        <img src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" alt="Python" />
        <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript" />
        <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React" />
        <img src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
        <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="TailwindCSS" />
        <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
        <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
        <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
        <img src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white" alt="Git" />
      </div>
    </main>
  );
}

