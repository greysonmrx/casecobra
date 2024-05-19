import React from "react";
import * as LucideIcons from "lucide-react";

export type IconName = "arrow-right";

export interface IconProps extends LucideIcons.LucideProps {
  name: IconName;
}

const Icons: Record<IconName, React.FC<LucideIcons.LucideProps>> = {
  "arrow-right": (props) => <LucideIcons.ArrowRight {...props} />,
};

const Icon: React.FC<IconProps> = ({ name, ...props }) => {
  return Icons[name](props);
};

export { Icon };
