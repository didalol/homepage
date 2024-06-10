import Desc from "@/components/Desc.mdx";
import Project from "@/components/Project";
import Skill from "@/components/Skill";

export default function Home() {
  return (
    <div className=" mx-4 lg:mb-0  lg:w-full lg:max-w-3xl prose select-none pb-16">
      <Desc />
      <div>
        <h2>技能/经验</h2>
        <Skill />
      </div>
      <div>
        <h2>项目</h2>
        <Project />
      </div>
    </div>
  );
}
