"use client";

import React from "react";
import { CaseColor } from "@prisma/client";

import { AspectRatio } from "@/components/AspectRatio";

import { cn } from "@/utils/cn";

const colors: Record<CaseColor, string> = {
  BLACK: "bg-zinc-950",
  BLUE: "bg-blue-950",
  ROSE: "bg-rose-950",
};

interface PhonePreviewProps {
  croppedImageUrl: string;
  color: CaseColor;
}

const PhonePreview: React.FC<PhonePreviewProps> = ({
  croppedImageUrl,
  color,
}) => {
  const ref = React.useRef<HTMLDivElement>(null);

  const [renderedDimensions, setRenderedDimensions] = React.useState({
    height: 0,
    width: 0,
  });

  const handleResize = React.useCallback(() => {
    if (!ref.current) return;

    const { width, height } = ref.current.getBoundingClientRect();

    setRenderedDimensions({ width, height });
  }, []);

  React.useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  let caseBackgroundColor = colors[color];

  return (
    <AspectRatio ref={ref} ratio={3000 / 2001} className="relative">
      <div
        className="absolute z-20 scale-[1.0352]"
        style={{
          left:
            renderedDimensions.width / 2 -
            renderedDimensions.width / (1216 / 121),
          top: renderedDimensions.height / 6.22,
        }}
      >
        <img
          width={renderedDimensions.width / (3000 / 637)}
          className={cn(
            "phone-skew relative z-20 rounded-t-[15px] rounded-b-[10px] md:rounded-t-[30px] md:rounded-b-[20px]",
            caseBackgroundColor
          )}
          src={croppedImageUrl}
        />
      </div>

      <div className="relative h-full w-full z-40">
        <img
          alt="phone"
          src="/clearphone.png"
          className="pointer-events-none h-full w-full antialiased rounded-md"
        />
      </div>
    </AspectRatio>
  );
};

export { PhonePreview };
