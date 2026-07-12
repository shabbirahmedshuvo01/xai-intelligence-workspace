export default function Lights() {
  return (
    <>
      <ambientLight intensity={1.2} />

      <directionalLight
        position={[4, 4, 5]}
        intensity={2}
        color="#8B5CF6"
      />

      <pointLight
        position={[-3, 2, 2]}
        intensity={8}
        color="#22D3EE"
      />

      <pointLight
        position={[3, -2, 3]}
        intensity={5}
        color="#A855F7"
      />
    </>
  );
}