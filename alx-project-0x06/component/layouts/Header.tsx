import Button from "@/components/common/Button";
import Link from "next/link";
import React from "react";



const Header: React.FC = () => {
  return (
    <header className="fixed w-full bg-white shadow-md">
      <div className="flex justify-between items-center py-6 px-4 md:px-8 mx-auto">
        <Link href={`/`} className="text-3xl md:text-5xl font-bold text-gray-800 tracking-tight" >Splash App</Link>
        <div className="flex gap-4">
          <Button buttonLabel="Sign In" backgroundColor="red"/>
          <Button buttonLabel="Sign Up" backgroundColor="blue"/>
        </div>
      </div>
    </header>
  )
}

export default Header;