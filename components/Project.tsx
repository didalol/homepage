import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Link from "next/link";

const projects = [
  {
    name: "个人博客",
    description: "一个记录个人学习、思考的博客",
    link: "https://blog.huala.fun/",
  },
  {
    name: "热榜聚合",
    description: "一个聚合了多个热榜网站的聚合网站",
    link: "https://hot-rank.huala.fun",
  },
  {
    name: "开发工具箱",
    description: "拥有很多便捷使用的开发工具的网站",
    link: "https://toolbox.huala.fun/",
  },
  {
    name: "画图工具",
    description: "基于开源作品 excalidraw 部署",
    link: "https://draw.huala.fun/",
  },
];

const Project: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map(({ description, name, link }, index) => {
        return (
          <Link href={link} key={index} target="_blank" rel="noopener noreferrer">
            <Card>
              <CardHeader className="py-0">
                <CardTitle>{name}</CardTitle>
              </CardHeader>
              <CardContent>{description}</CardContent>
            </Card>
          </Link>
        );
      })}
    </div>
  );
};

export default Project;
