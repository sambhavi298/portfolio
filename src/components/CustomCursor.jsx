import React, { useEffect, useRef } from 'react';

// Helper for random colors
const randomColors = (count) => {
    return new Array(count)
        .fill(0)
        .map(() => "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0'));
};

export default function CustomCursor() {
    const canvasRef = useRef(null);
    const tubesRef = useRef(null);

    useEffect(() => {
        let mounted = true;
        let cleanup;

        const initTubes = async () => {
            if (!canvasRef.current) return;

            try {
                const module = await import('https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js');
                const TubesCursor = module.default;

                if (!mounted) return;

                const app = TubesCursor(canvasRef.current, {
                    tubes: {
                        colors: ["#53bc28", "#f967fb", "#6958d5"],
                        lights: {
                            intensity: 200,
                            colors: ["#83f36e", "#fe8a2e", "#ff008a", "#60aed5"]
                        }
                    }
                });

                // Configure renderer for transparency
                if (app.renderer) {
                    app.renderer.setClearColor(0x000000, 0);
                }

                tubesRef.current = app;

                const handleGlobalClick = () => {
                    if (!tubesRef.current) return;
                    const colors = randomColors(3);
                    const lightsColors = randomColors(4);
                    tubesRef.current.tubes.setColors(colors);
                    tubesRef.current.tubes.setLightsColors(lightsColors);
                };

                window.addEventListener('click', handleGlobalClick);

                cleanup = () => {
                    window.removeEventListener('click', handleGlobalClick);
                };

            } catch (error) {
                console.error("Failed to load TubesCursor:", error);
            }
        };

        initTubes();

        return () => {
            mounted = false;
            if (cleanup) cleanup();
        };
    }, []);

    return (
        <div className="fixed inset-0 w-full h-full pointer-events-none z-[9999]">
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full block"
                style={{ touchAction: 'none' }}
            />
        </div>
    );
}
