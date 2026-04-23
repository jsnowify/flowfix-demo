export default function CustomCursor({ dotRef, ringRef }) {
  return (
    <>
      <div
        className="custom-cursor custom-cursor--dot"
        ref={dotRef}
        aria-hidden="true"
      />
      <div
        className="custom-cursor custom-cursor--ring"
        ref={ringRef}
        aria-hidden="true"
      />
    </>
  );
}
