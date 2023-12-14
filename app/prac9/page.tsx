// npx shadcn-ui@latest init

import Link from "next/link"
import Image from "next/image"
import Logo from "app/assets/Bold_Modern_Minimalist_Gradient_Technology_Business_Logo_-removebg-preview.png"
import { Menu } from "lucide-react"

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"


const page = () => {
  return (
    <header className="flex justify-between px-5 py-4 bg-slate-100">
        <h1 className="text-3xl font-bold text-gray-900  flex gap-x-3 items-center">
            <Image src={Logo} alt="Raibot" width={50} height={50}/>
            RoBot
        </h1>
        <nav className="flex items-center">
        <ul className="gap-x-3 font-semibold hidden md:flex">
            <li><Link href={'/'}>Home</Link></li>
            <li><Link href={'/'}>About</Link></li>
            <li><Link href={'/'}>Contact</Link></li>
            <li><Link href={'/'}>Blogs</Link></li>
        </ul>
        
        <Sheet>
        <div className="md:hidden">
  <SheetTrigger><Menu/></SheetTrigger>
            </div>    
  <SheetContent><SheetHeader>
  <ul className="gap-x-1 items-center font-semibold">
            <li><Link href={'/'}>Home</Link></li>
            <li><Link href={'/'}>About</Link></li>
            <li><Link href={'/'}>Contact</Link></li>
            <li><Link href={'/'}>Blogs</Link></li>
        </ul>
        </SheetHeader>
  </SheetContent>
</Sheet>

      
</nav>

        
        
    </header>
  )
}

export default page