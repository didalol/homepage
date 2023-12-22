import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  GithubOutlined,
  WechatFilled,
  MailOutlined,
} from "@ant-design/icons";
import { Popover } from "../popover";

const Profile = () => {
  const openUrl = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <section
      id="profile"
      className="flex gap-8  justify-center text-center items-center min-h-screen max-lg:flex-col">
      <Image
        src={"/assets/profile.jpg"}
        width={350}
        height={350}
        alt="Profile picture"
        className="rounded-full h-92 w-92 max-lg:h-48 max-lg:w-48"
      />
      <div className="flex flex-col gap-4 justify-center text-center items-center antialiased hover:subpixel-antialiased">
        <p className="text-md text-slate-500 font-semibold">你好, 我是</p>
        <p className="text-xl text-slate-500 font-semibold">
          一个练习时长两年半（经验）的
        </p>
        <p className="text-md text-slate-500 font-semibold">
          全栈开发者（新时代农民工）
        </p>
        <div className="flex gap-4 justify-center">
          <Button
            variant="secondary"
            onClick={() => openUrl("")}
            className="hvr-buzz">
            个人简历
          </Button>
        </div>

        {/* 社交链接 */}
        <div className="flex gap-4 justify-center">
          <Popover
            hoverEnabled={true}
            trigger={
              <MailOutlined className="text-2xl cursor-pointer hover:scale-125 hvr-buzz" />
            }>
            <div className="flex gap-4 flex-col justify-center items-center">
              <p className="text-sm">he.wenyao@foxmail.com</p>
            </div>
          </Popover>
          <Popover
            hoverEnabled={true}
            trigger={
              <WechatFilled
                onClick={() => openUrl("/assets/wechat.jpg")}
                className="text-2xl cursor-pointer hover:scale-125  hvr-buzz"
              />
            }>
            <div className="flex gap-4 flex-col justify-center items-center">
              <p className="text-sm">微信号:he-wen-yao</p>
            </div>
          </Popover>
          <GithubOutlined
            className="text-2xl cursor-pointer hover:scale-125 hvr-buzz"
            onClick={() => window.open("https://github.com/huala-fun")}
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;
