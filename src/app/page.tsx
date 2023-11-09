"use client";

import home from "@/components/home";

export default function Home() {
  return (
    <div className="container min-h-screen flex flex-col pt-4 lg:px-32">
      <home.Nav />
      <home.Profile />
      <home.Experience />
      <home.Projects />
      <home.Footer />
    </div>
  );
}
