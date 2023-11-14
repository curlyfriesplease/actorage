export default function idPageLayout({ children }) {
  return (
    <div
      className="flex flex-col items-center justify-center py-6"
      id="idPageLayoutParentDiv"
    >
      {children}
    </div>
  );
}
