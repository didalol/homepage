import React, { useState, useEffect } from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const HoverPopover = ({ trigger, children }: { trigger: React.ReactNode, children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true);
  }, []);

  const [open, setOpen] = useState(false);
  const handleMouseEnter = () => {
    setOpen(true);
  };
  const handleMouseLeave = () => {
    setOpen(false);
  };

  if (!mounted) {
    return null;
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {trigger}
      </PopoverTrigger>
      <PopoverContent
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </PopoverContent>
    </Popover>
  );
};

export default HoverPopover;