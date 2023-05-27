import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function Par() {
  return (
    <Parallax pages={1} style={{ top: "0", left: "0" }}>
      <ParallaxLayer offset={0} speed={2.5}>
        <div
          style={{
            width: 400,
            height: 400,
            background: "#ff0000",
            borderRadius: 8,
          }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={2.5}>
        <div
          style={{
            width: 400,
            height: 400,
            background: "#00ff00",
            borderRadius: 8,
          }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={2.5}>
        <div
          style={{
            width: 400,
            height: 400,
            background: "#0000ff",
            borderRadius: 8,
          }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={3} speed={2.5}>
        <div
          style={{
            width: 400,
            height: 400,
            background: "#0f0f0f",
            borderRadius: 8,
          }}
        />
      </ParallaxLayer>
    </Parallax>
  );
}
