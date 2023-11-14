export default function idPageLayout({ children }) {
  return (
    <div
      className="flex items-center justify-center py-6"
      id="idPageLayoutParentDiv"
    >
      <div style={{ border: 'solid green 1px' }}>{children}</div>
    </div>
  );
}
