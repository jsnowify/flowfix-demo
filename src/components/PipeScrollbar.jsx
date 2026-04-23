export default function PipeScrollbar({ fillRef, dropRef }) {
  return (
    <div className="pipe-scrollbar" aria-hidden="true">
      <div className="pipe-scrollbar__cap pipe-scrollbar__cap--top" />
      <div className="pipe-scrollbar__track">
        <div className="pipe-scrollbar__fill" ref={fillRef} />
        <div className="pipe-scrollbar__drop" ref={dropRef} />
      </div>
      <div className="pipe-scrollbar__cap pipe-scrollbar__cap--bottom" />
    </div>
  );
}
