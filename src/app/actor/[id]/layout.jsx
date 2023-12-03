export default function idPageLayout({ children }) {
  return (
    <div
      className="flex flex-col items-center justify-center py-2"
      id="idPageLayoutParentDiv"
    >
      {children}
    </div>
  );
}
