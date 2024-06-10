import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Language from "./Language.mdx";
import Experience from "./Experience.mdx";

const Skill = () => {
  return (
    <Tabs defaultValue="experience" className="">
      <TabsList>
        <TabsTrigger value="experience">经验</TabsTrigger>
        <TabsTrigger value="language">语言框架</TabsTrigger>
      </TabsList>
      <TabsContent value="experience">
        <Experience />
      </TabsContent>
      <TabsContent value="language">
        <Language />
      </TabsContent>
    </Tabs>
  );
};

export default Skill;
