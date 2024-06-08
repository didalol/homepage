import Desc from "@/components/Desc.mdx";
import Skill from "@/components/Skill";

export default function Home() {
  return (
    <div className="mt-16 mx-4 lg:mb-0  lg:w-full lg:max-w-3xl prose">
      <Desc />
      <Skill skill="Next.js" />
    </div>
  );
}
