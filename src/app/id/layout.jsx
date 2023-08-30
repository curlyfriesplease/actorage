export default function idPageLayout({children}) {
  return (
    <div style={{ display: 'flex' }}>
        <div style={{ border: 'solid red 1px'}}>
            <h2>idPageLayout</h2>
        {children}
        </div>
    </div>
  );
}