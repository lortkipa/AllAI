import { GoPlus } from "react-icons/go";
import { IoArrowUpOutline } from "react-icons/io5";

const icons = {
  plus: GoPlus,
  "arrow-up": IoArrowUpOutline,
};

export default function Icon({
  type,
  color,
  size,
}: {
  type: "plus" | "arrow-up";
  color: string;
  size: string;
}) {
  const Icon = icons[type];

  return <Icon color={color} size={size} />;
}
