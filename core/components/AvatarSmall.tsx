import Link from 'next/link';
import React from 'react'

interface AvatarSmall {
    readonly session: any;
}

function generateAvatarName(name: string): string {
    if (!name || typeof name !== "string") {
      return "";
    }
  
    const names = name.trim().split(" ");
    const firstInitial = names[0]?.charAt(0).toUpperCase() || "";
    const secondInitial = names[1]?.charAt(0).toUpperCase() || "";
  
    return firstInitial + secondInitial;
  }

function AvatarSmall({session}: AvatarSmall) {
    const shortName = generateAvatarName(session.fullName || "");

  return (
    <Link
    href={"/auth/account"}
    className={`h-6 w-6 bg-body-100 hover:bg-body-400   text-primary-950 ${shortName.length===2?"text-sm":"text-base"}  rounded-full flex items-center justify-center font-semibold`}
      >
        {shortName}
      </Link>
  )
}

export default AvatarSmall
