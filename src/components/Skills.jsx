import { motion } from "framer-motion"
import { FaPython, FaReact, FaDatabase, FaBrain, FaCode } from "react-icons/fa"
import { SiTensorflow } from "react-icons/si"

export default function Skills() {

    const skills = [
        { name: "Python", icon: <FaPython size={40} /> },
        { name: "Machine Learning", icon: <FaBrain size={40} /> },
        { name: "TensorFlow", icon: <SiTensorflow size={40} /> },
        { name: "React", icon: <FaReact size={40} /> },
        { name: "SQL", icon: <FaDatabase size={40} /> },
        { name: "Data Structures", icon: <FaCode size={40} /> },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <motion.section
            id="skills"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="min-h-screen bg-black text-white px-20 py-32 overflow-hidden"
            style={{ perspective: "1000px" }}
        >

            <motion.h2
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-bold text-center mb-16"
            >
                Skills
            </motion.h2>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-3 gap-10"
            >

                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{
                            scale: 1.05,
                            rotateX: 10,
                            rotateY: -10,
                            backgroundColor: "rgba(31, 41, 55, 1)",
                            borderColor: "rgba(6, 182, 212, 0.5)",
                            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(6, 182, 212, 0.2)"
                        }}
                        className="p-10 flex flex-col items-center justify-center text-center bg-gray-800 rounded-xl transition-all duration-300 border border-white/5 cursor-default group"
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        <div
                            className="mb-4 text-cyan-400 group-hover:text-cyan-300 transition-colors"
                            style={{ transform: "translateZ(30px)" }}
                        >
                            {skill.icon}
                        </div>
                        <span
                            className="text-xl font-medium tracking-tight"
                            style={{ transform: "translateZ(20px)" }}
                        >
                            {skill.name}
                        </span>
                    </motion.div>
                ))}

            </motion.div>

        </motion.section>
    )
}
