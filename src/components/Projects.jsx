import { motion } from "framer-motion"

export default function Projects() {

    const projects = [
        {
            title: "Hardware Aware NAS",
            desc: "AutoML system optimized for edge devices"
        },
        {
            title: "IoT Digital Twin",
            desc: "Simulation model for IoT networks"
        },
        {
            title: "ML Prediction System",
            desc: "Machine learning model for predictions"
        }
    ]

    return (
        <motion.section
            id="projects"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="min-h-screen text-white px-20 py-32 overflow-hidden"
            style={{ perspective: "1200px" }}
        >

            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-bold text-center mb-16"
            >
                Projects
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50, rotateX: 20 }}
                        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        whileHover={{
                            scale: 1.05,
                            rotateY: 10,
                            rotateX: -5,
                            translateZ: 50,
                            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.7)",
                            borderColor: "rgba(6, 182, 212, 0.5)"
                        }}
                        className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/10 transition-all duration-500 cursor-pointer flex flex-col justify-between group"
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        <div style={{ transform: "translateZ(30px)" }}>
                            <h3 className="text-2xl font-bold mb-3 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                                {project.desc}
                            </p>
                        </div>

                        <div
                            className="mt-6 flex items-center text-sm font-bold text-cyan-500/60 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity"
                            style={{ transform: "translateZ(20px)" }}
                        >
                            Explore Project →
                        </div>

                    </motion.div>
                ))}

            </div>

        </motion.section>
    )
}
