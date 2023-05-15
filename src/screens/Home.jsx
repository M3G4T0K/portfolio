import { useRef, useState } from "react"
import { Header } from "../components"

import {  motion, useScroll, useTransform } from "framer-motion"
import {  ArrowLeftIcon, ArrowRightIcon } from "lucide-react"
import ReactTyped from "react-typed"

const Home = () => {
  const { scrollYProgress } = useScroll()
  const WorkRef = useRef(null)
  const opacityText = useTransform(scrollYProgress, [0.18, 0.25], [1, 0]) 
  const [IndexAtual, setIndexAtual] = useState(0)

  const Switch = isBack => {
      var IndexActual = IndexAtual

      if(isBack) IndexActual--
      else IndexActual++

      if(IndexActual > 2) IndexActual = 0
      if(IndexActual < 0) IndexActual = 2

      WorkRef.current.scrollTo({
        behavior: "smooth",
        left: window.innerWidth * (IndexActual)
      })

      setIndexAtual(IndexActual)
  }
  
  return (
    <div className="w-screen h-[300vh] bg-background relative">
        <Header />
        <motion.div id="About" style={{opacity: opacityText}} className="grid grid-cols-3 grid-rows-2 pt-[10%] w-[100vw] h-[100vh] p-10 gap-5">
          <ReactTyped 
            typeSpeed={50}
            className="text-texto/80 text-titulo-xl col-span-3  md:col-span-2 md:row-span-2 pt-10"
            strings={["I'am <strong>Matheus</strong>, a full-stack developer in constant learning. My passion is to enhance the security and design of the websites I create"]}
          />
          <img src="sapo.png" className="object-contain w-full h-full row-start-2 col-span-3 md:row-span-2 md:col-start-3" />
        </motion.div>
        <div className="w-screen h-screen relative flex justify-center items-center">
          <div ref={WorkRef} className="w-full h-full sm:h-5/6 overflow-x-hidden relative">
            <div className="w-[300vw] h-full grid grid-cols-3 gap-10 p-10">
              <div className="w-full h-full sm:h-5/6 flex flex-col items-center justify-center">
                <img src="react.png" className="w-full h-1/3 object-contain" />
                <p className="text-texto w-full h-full py-10">&nbsp;Com habilidades em desenvolvimento utilizando React, posso criar aplicações web interativas e dinâmicas.<br/>&nbsp;React é uma biblioteca JavaScript popular que permite construir interfaces de usuário reativas, dividindo-as em componentes reutilizáveis. Ele oferece um fluxo de trabalho eficiente, tornando mais fácil a criação de interfaces complexas e interações em tempo real. Com o React, posso transformar suas ideias em aplicações web modernas, rápidas e escaláveis.</p>
              </div>
              <div className="w-full h-full sm:h-5/6 flex flex-col items-center justify-center">
                <img src="tailwind.svg" className="w-full h-1/3 object-contain sm:scale-[300%]" />
                <p className="text-texto w-full h-full">&nbsp;Com habilidades em estilização utilizando Tailwind CSS, posso criar designs modernos e responsivos de forma eficiente.<br/>&nbsp;O Tailwind CSS é uma biblioteca de classes utilitárias que permite estilizar rapidamente elementos HTML, tornando o processo de desenvolvimento mais ágil. Ele é amplamente utilizado para criar interfaces de usuário elegantes e funcionais em projetos web e aplicativos, proporcionando flexibilidade e modularidade. Com o Tailwind CSS, posso transformar suas ideias em designs atraentes e de alta qualidade.</p>
              </div>
              <div className="w-full h-full sm:h-5/6 flex flex-col items-center justify-center">
                <img src="node.png" className="w-full h-1/3 object-contain" />
                <p className="text-texto w-full h-full py-10">Com habilidades em desenvolvimento utilizando Node.js no backend, posso criar servidores robustos e escaláveis para suas aplicações web. Node.js é uma plataforma de tempo de execução JavaScript que permite construir aplicações de alta performance, lidando com um grande número de requisições simultâneas de forma eficiente. Ele oferece um ambiente de desenvolvimento ágil e flexível, permitindo a construção de APIs, serviços web e outras funcionalidades no lado do servidor. Com o Node.js, posso garantir um backend confiável e eficiente para suas aplicações web.</p>
              </div>
            </div>  
          </div>
          <div className="flex justify-center gap-10 bottom-0 absolute w-full">
              <ArrowLeftIcon onClick={() => Switch(true)} color="gray" className="w-20 h-10 rounded-full hover:scale-110"/>
              <ArrowRightIcon onClick={() => Switch()} color="blue" className="w-20 h-10 rounded-full hover:scale-110" />
            </div>
        </div>
        <div className="w-screen h-screen relative flex justify-center items-center text-texto">
          <ReactTyped
            loop
            typeSpeed={30}
            backDelay={1500}
            className="text-texto/80 text-lg tracking-widest"
            strings={[
              "Ainda estou construindo meu portfolio<br/>Portanto todo projeto que for completo estarei postando aqui",
              "Espero que goste do meu trabalho<br/>E que possamos trabalhar juntos em breve<br>Até mais!",
            ]}
          />
        </div>
    </div>
  )
}

export default Home