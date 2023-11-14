export default function idPageLayout({ children }) {
  return (
    <div
      className="flex items-center justify-center py-6"
      id="idPageLayoutParentDiv"
    >
      {children}
    </div>
  );
}
