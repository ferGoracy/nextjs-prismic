import React from "react";
import Image from "next/image";
import Button from "./Button";

type Props = {
  style?: string;
};

export default function ImageButtonCard({ style }: Props) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <Image
        className="w-full"
        src="/hero-image.jpg"
        alt="Sunset in the mountains"
        width={100}
        height={100}
        //fill={true}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <Button Text="Ver más" />
      </div>
    </div>
  );
}
