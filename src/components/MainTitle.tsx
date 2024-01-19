import React from "react";

type Props = {
  text: string;
};

export default function MainTitle({ text }: Props) {
  return <p className="text-5xl my-10">{text}</p>;
}
