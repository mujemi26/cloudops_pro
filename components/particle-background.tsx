"use client"

import { useEffect, useMemo, useState, useCallback } from "react"
import Particles, { initParticlesEngine } from "react-tsparticles"
import { type Container, type ISourceOptions } from "tsparticles-engine"
import { loadSlim } from "tsparticles-slim"
import { useTheme } from "next-themes"

export default function ParticleBackground() {
  const [init, setInit] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const particlesLoaded = useCallback(async (container?: Container): Promise<void> => {
    // console.log("Particles loaded", container)
  }, [])

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 140,
            links: {
              opacity: 0.8,
              color: theme === 'dark' ? '#3b82f6' : '#3b82f6'
            }
          },
        },
      },
      particles: {
        color: {
          value: theme === 'dark' ? '#a5b4fc' : '#6366f1',
        },
        links: {
          color: theme === 'dark' ? '#4f46e5' : '#a5b4fc',
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 60,
        },
        opacity: {
          value: 0.4,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    [theme]
  )

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        className="absolute inset-0 z-0"
      />
    )
  }

  return null
}