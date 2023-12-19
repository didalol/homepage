import * as React from "react"

import { TagsTwoTone } from "@ant-design/icons"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



const frontend = [
  'HTML、CSS、JavaScript',
  'React',
  'Next.js',
  'Ant Design',
  'TypeScript',
]


const backend = [
  'Node.js',
  'Express',
  'MongoDB',
  'MySQL',
  'Nginx',
  'PostgreSQL',
  'Redis',
  'MySQL',
  'JAVA',
  'Spring Boot',
  'Spring Cloud',
]

const others = [
  'Git',
  'Postman',
  'ApiPost',
  'Docker',
]


const Experience = () => {
  return (
    <section id="experience" className="flex flex-col justify-content: start;min-h-screen py-16">
      <div className=" text-center ">
        <p className="text-md">Experience</p>
        <h1 className="text-3xl tracking-widest mt-4 font-bold">经验</h1>
      </div>
      <div className="mt-8 flex flex-col gap-4">
        <div className="flex justify-between gap-4  max-lg:flex-col">
          <Card className="flex-1 shadow-none ">
            <CardHeader>
              <CardTitle>后端开发技术</CardTitle>
              <CardDescription>Backend Development</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {
                  backend.map((item,index) => {
                    return (
                      <div key={`backend-${index}`} className="flex items-center gap-2">
                        <TagsTwoTone />
                        <span>{item}</span>
                      </div>
                    )
                  })
                }
              </div>
            </CardContent>
          </Card>
          <Card className="flex-1 shadow-none ">
            <CardHeader>
              <CardTitle>前端开技术</CardTitle>
              <CardDescription>Frontend Development</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {
                  frontend.map((item,index) => {
                    return (
                      <div key={`frontend-${index}`} className="flex items-center gap-2">
                        <TagsTwoTone />
                        <span>{item}</span>
                      </div>
                    )
                  })
                }
              </div>
            </CardContent>
          </Card>
        </div>
        <Card className="shadow-none">
          <CardHeader>
            <CardTitle>其他技术</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {
                others.map((item,index) => {
                  return (
                    <div key={`others-${index}`} className="flex items-center gap-2">
                      <TagsTwoTone />
                      <span>{item}</span>
                    </div>
                  )
                })
              }
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default Experience;