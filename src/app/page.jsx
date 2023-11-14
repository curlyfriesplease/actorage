import SearchContainer from "@/components/Search/SearchContainer";

export default function Home() {
  return (
    <main
      className="
    flex 
    flex-col 
    min-h-screen 
    items-center 
    justify-between 
    p-9
    w-screen
    max-w-screen-md
    "
    >
      <SearchContainer />
    </main>
  );
}
