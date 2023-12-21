"use client";
import { useEffect, useState } from "react";
import { Progress } from "./ui/progress";

/**
 * 计算页面滚动进度
 * @returns
 */
const progressPercent = () => {
  const container = document.documentElement;
  const scroll = container.scrollTop;
  return (scroll / (container.scrollHeight - container.clientHeight)) * 100;
};
/**
 * 页面滚动进度条
 * @returns
 */
export const ScrollProgress = () => {
  const [progressPercentValue, setProgressPercentValue] = useState(0);
  useEffect(() => {
    setProgressPercentValue(progressPercent());
    window.onscroll = () => {
      console.log(progressPercent());
      setProgressPercentValue(progressPercent());
    };
  }, []);
  return progressPercentValue ? (
    <Progress
      className="fixed top-0 z-[999999] rounded-none h-[2px] "
      value={progressPercentValue}></Progress>
  ) : (
    <></>
  );
};
