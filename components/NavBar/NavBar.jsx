import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export default function NavBar() {
  return (
    <nav className="flex justify-between w-full">
      <div id="header-logo">(logo tbc)</div>
      <div id="return-to-home">
        <Link href="/" className="hover:underline">
          <FontAwesomeIcon
            icon={faXmark}
            width={30}
            height={30}
            className={'text-sky-500'}
          />
        </Link>
      </div>
    </nav>
  );
}
