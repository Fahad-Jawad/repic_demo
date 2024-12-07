"use client";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-1/4 bg-gray-100 p-4">
      <h2 className="text-lg font-bold mb-4">Forms</h2>
      <Link href="/forms/form1">
        <button className="block w-full bg-blue-100 rounded-xl p-3 mb-2 text-left">
          Form 1
        </button>
      </Link>
      <Link href="/forms/form2">
        <button className="block w-full bg-blue-100 rounded-xl p-3 mb-2 text-left">
          Form 2
        </button>
      </Link>
    </div>
  );
}
