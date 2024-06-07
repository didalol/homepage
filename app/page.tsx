import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="my-32 mx-4  lg:mb-0  lg:w-full lg:max-w-3xl">
        <div className=" flex justify-between  items-center">
          <div className=" flex flex-col gap-4">
            <div className="text-2xl font-bold">全栈开发者</div>
            <p className="prose">
              我拥有广泛的技术栈，涵盖了多种流行的编程语言，包括{" "}
              <b>Java、Go、Python、PHP和JavaScript</b>
              。具备丰富的开发经验和技能，能够在前端和后端开发中游刃有余，从构建动态网页到设计强大的服务器端应用程序，都能胜任。
              <br />{" "}
              在前端开发方面，我熟练运用HTML、CSS和JavaScript，能够创建响应式和交互式用户界面，提升用户体验。
              <br />
              在后端开发方面，我能够利用 <b>Java、Go、Python和PHP</b>
              等语言构建高效的服务器端应用程序，处理复杂的业务逻辑和数据交互。
              我熟悉各种数据库系统，包括关系型数据库和NoSQL数据库，能够设计优化的数据存储方案，并实现高效的数据检索和处理。我注重代码质量和系统性能优化，善于解决问题并持续学习新技术，以保持竞争力。
              通过全面的技术能力和团队合作精神，我致力于为客户提供创新的解决方案，推动项目的成功实现，并不断追求个人的成长和技术进步。
            </p>
          </div>
          <Image
            className=" h-48 w-48  max-lg:hidden"
            alt=""
            width={400}
            height={400}
            src={"/easlo-laptop.svg"}
          />
        </div>
      </div>
    </main>
  );
}
