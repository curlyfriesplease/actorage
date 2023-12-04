import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export default function NavBar() {
  return (
    <nav className="flex justify-between w-full">
      <div id="blank-spacer-div" style={{ width: '30px' }}></div>
      <div id="header-logo">
        <Image
          src="/images/HOWTA_png_small_title.png"
          alt="navbarlogo"
          width={200}
          height={100}
          className="cursor-pointer"
        />
      </div>
      <div id="return-to-home" className="self-center">
        <Link href="/">
          <FontAwesomeIcon
            icon={faXmark}
            width={30}
            height={30}
            className={'text-sky-800'}
          />
        </Link>
      </div>
    </nav>
  );
}
