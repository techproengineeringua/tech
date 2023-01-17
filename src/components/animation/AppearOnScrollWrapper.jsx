import React, { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const variants = {
  visible: { opacity: 1, transition: { duration: 1.2 } },
  hidden: { opacity: 0 }
};

const AppearOnScrollWrapper = ({ element }) => {
  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    control.start(inView ? "visible" : "hidden")
  }, [control, inView])

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={control}
    >
      {element}
    </motion.div>
  )
}

export default AppearOnScrollWrapper
