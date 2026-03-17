import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, MeshDistortMaterial, Sphere } from "@react-three/drei"

function FloatingShape() {
    const meshRef = useRef()

    useFrame((state) => {
        const time = state.clock.getElapsedTime()
        meshRef.current.rotation.x = Math.sin(time / 2) / 4
        meshRef.current.rotation.y = Math.cos(time / 2) / 4
        meshRef.current.position.y = Math.sin(time / 1.5) / 10
    })

    return (
        <mesh ref={meshRef} rotation={[10, 10, 0]}>
            <boxGeometry args={[2, 2, 2]} />
            <MeshDistortMaterial
                color="#22d3ee"
                speed={2}
                distort={0.4}
                radius={1}
            />
        </mesh>
    )
}

export default function Scene3D() {
    return (
        <div className="w-full h-[400px] cursor-grab active:cursor-grabbing">
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                <ambientLight intensity={0.5} />
                <directionalLight position={[2, 2, 5]} intensity={1} />
                <spotLight position={[-5, 5, 0]} angle={0.3} penumbra={1} intensity={1} />
                <FloatingShape />
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
        </div>
    )
}
