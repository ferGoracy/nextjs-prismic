import React from "react";
import Link from "../../node_modules/next/link";

export default function Button(props: any) {
  return (
    <Link
      className="px-4 py-4 my-10 bg-blue-700 hover:bg-blue-900 rounded-2xl border-none text-white text-xl w-full"
      href={props.Href}
    >
      {props.Text}
    </Link>
  );
}
