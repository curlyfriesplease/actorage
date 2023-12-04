import { MainLogo } from '@/components/Misc/MainLogo';
import SearchContainer from '@/components/Search/SearchContainer';

export default function Home() {
  return (
    <main
      className="
    flex 
    flex-col 
    h32
    items-center 
    justify-between 
    p-9
    w-screen
    max-w-screen-md
    "
    >
      <MainLogo />
      <SearchContainer />
    </main>
  );
}
