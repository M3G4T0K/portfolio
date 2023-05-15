import { motion, useScroll } from "framer-motion"

import Logo from "../assets/Logo"
import { LogoAnimation } from "../animations"
import { GithubIcon, InstagramIcon, Menu, MenuIcon } from "lucide-react"
import { ActiveLineBotton, HoverLineBotton, ListHeader } from "../styles/Stylezed"
import { useEffect, useState } from "react"


const Header = () => {
    const [ScrollIndex, SetScrollIndex] = useState(0)

    const ScreenOnlyView = event => {
        const ScreenActual = event.currentTarget.scrollY / window.innerHeight
        if(ScreenActual < 0.6) SetScrollIndex(0)
        else if(ScreenActual >= 0.6 && ScreenActual < 1.6) SetScrollIndex(1)
        else if(ScreenActual >= 1.6) SetScrollIndex(2)
    }

  
    useEffect(() => {
        window.addEventListener("scroll", ScreenOnlyView)
        LogoAnimation()
        return () => window.removeEventListener("scroll", ScreenOnlyView)
    }, [])



    return (
        <motion.div className="backdrop-blur-sm fixed w-[100vw] h-14 flex justify-center sm:justify-between items-center py-3 px-4 sm:px-10 z-10">
            <Logo className={"w-2/6 max-w-[200px] hidden sm:block"} />
            <ul className="gap-5 items-center justify-center flex">
                <li>
                    <a href="#About" className={`${HoverLineBotton} ${ListHeader} ${ScrollIndex == 0 ? ActiveLineBotton : ""} relative`}>About</a>
                </li>
                <li>
                    <a className={`${HoverLineBotton} ${ListHeader} ${ScrollIndex == 1 ? ActiveLineBotton : ""} relative`}>Work</a>
                </li>
                <li>
                    <a className={`${HoverLineBotton} ${ListHeader} ${ScrollIndex == 2 ? ActiveLineBotton : ""} relative`}>Contact</a>
                </li>
                <li className={`${ListHeader} flex items-center gap-2 ml-3`}>
                    <a href="https://github.com/M3G4T0K/"><GithubIcon/></a> 
                    <a href="https://www.instagram.com/matheusdev_morningstar/"><InstagramIcon /></a> 
                </li>
            </ul>
        </motion.div>
    )
}

export default Header