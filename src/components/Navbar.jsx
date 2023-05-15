// Komponen Navbar untuk layout pada website
import Image from "next/image"
import { useEffect, useState } from "react"
export default function Navbar(){
    const [href, setHref] = useState("")
    useEffect(() => {
        if (typeof window !== "undefined") {
            setHref(window.location.href)
        }
    },[])
    return(
        <nav
            className="w-full h-[82px] bg-[#8A9A5B] px-[75px] flex items-center justify-between"
        >
            <h1 className="font-hurricane text-[55px]">Dahayu</h1>
            <div className="flex items-center">
                <a className="font-dosis text-[22px]" href="#">Home</a>
                <a className="font-dosis text-[22px] ml-7" href="#">Categories</a>
                <a className="font-dosis text-[22px] ml-7" href="#">Explore</a>
                {/* Mengecek apakah berada di page login/register */}
                {(!href.includes("login") && !href.includes("register")) &&  <Image className="ml-7" width={55} height={55} src="/profPic.png" />}
                {href.includes("register") &&<a className="font-dosis text-[22px] ml-7" href="#">Login</a>}
                {href.includes("login   ") &&<a className="font-dosis text-[22px] ml-7" href="#">Register</a>}
            </div>
        </nav>
    )
}