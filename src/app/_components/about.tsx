// src/app/_components/about.tsx

import React from 'react';

export function About() {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          About Me
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          I am a full-stack developer and Revenue Operations professional.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Full-Stack Development
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              With expertise in both front-end and back-end technologies, I build comprehensive web solutions that are efficient, scalable, and user-friendly.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Revenue Operations
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              I specialize in optimizing business processes to drive revenue growth, integrating sales, marketing, and customer success strategies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
