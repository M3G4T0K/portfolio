import { animate } from "framer-motion"

export const LogoAnimation = () => animate([
    ["#iconLogo", { x: 500 }, { duration: 1 }],
    ["#iconLogo", { x: 0 }, { duration: 1 }],
    ["#rectLogo", { width: "120%"}, { duration: 0.6 }]
])