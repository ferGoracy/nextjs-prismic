import React from "react";

export default function Button(props: any) {
  return (
    <button className="px-4 py-4 my-10 bg-blue-700 hover:bg-blue-900 rounded-2xl border-none text-white text-xl w-full">
      {props.Text}
    </button>
  );
}
