import { motion } from "framer-motion"

const Header = () => {
  return (
    <div
      className="
        min-h-[40rem]
        md:min-h-[48rem]
        w-full 
        flex
        justify-center
        items-center
        relative
      "
    >
      <div className="w-fit text-center md:text-left relative z-10">
        <h1 className="text-gray-100 text-lg md:text-xl font-semibold uppercase">Portafolio</h1>
        <motion.h2
          initial={{
            translateX: 65,
            opacity: 0
          }}
          animate={{
            translateX: 0,
            opacity: 1
          }}
          transition={{ ease: "easeOut", duration: .6 }}
          className="font-extrabold text-gray-100 text-6xl md:text-7xl xl:text-8xl"
        >
          Mauricio <span className="text-sky-400">M</span>art<span className="text-sky-400">í</span>nez
        </motion.h2>
        <p className="text-gray-100 text-lg md:text-xl font-semibold md:text-right uppercase mt-2">Desarrollador Web <span className="text-sky-400">Front-End</span></p>
      </div>

      {/* Circles gradient */}
      <div className="absolute top-0 left-0 w-full h-full">
        {/* circle 1 */}
        <div className="absolute top-0 -left-56 md:top-20 md:left-16 blur-[200px] w-72 h-72 rounded-full bg-pink-600"></div>

        {/* circle 2 */}
        <div className="absolute bottom-20 -right-56 md:top-40 md:right-16 blur-[200px] w-72 h-72 rounded-full bg-sky-400"></div>
      </div>
    </div>
  )
}

export default Header