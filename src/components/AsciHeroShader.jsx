import { Shader, Swirl, ChromaFlow, FlutedGlass, FilmGrain } from 'shaders/react'

// Shader stack for the hero device screen. Split from AsciPage so the
// WebGL renderer bundled with `shaders` loads on demand instead of
// blocking the page chunk.
export default function AsciHeroShader() {
  return (
    <Shader style={{ width: '100%', height: '100%' }}>
      <Swirl colorA="#ffffff" colorB="#f0f0f0" detail={1.7} />
      <ChromaFlow
        baseColor="#ffffff"
        downColor="#9ca3af"
        leftColor="#9ca3af"
        rightColor="#9ca3af"
        upColor="#9ca3af"
        momentum={13}
        radius={3.5}
      />
      <FlutedGlass
        aberration={0.61}
        angle={31}
        frequency={8}
        highlight={0.12}
        highlightSoftness={0}
        lightAngle={-90}
        refraction={4}
        shape="rounded"
        softness={1}
        speed={0.15}
      />
      <FilmGrain strength={0.05} />
    </Shader>
  )
}
