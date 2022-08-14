import { BadgeLabel, Color } from "../types";

interface IProps {
  value: number;
  type: BadgeLabel;
  color: Color;
  padding:number;
}

export const Badge = ({ value, type, color,padding }: IProps) => {
  return (
    <span className={`badge bg-${color} px-${padding} mt-3`} >
      {type}: {value}
    </span>
  );
};
