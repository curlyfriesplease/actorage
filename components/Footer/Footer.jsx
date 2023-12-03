import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t py-4 text-center text-s text-orange-600">
      <Link href="/about" className="hover:underline">
        {' '}
        About{' '}
      </Link>
    </footer>
  );
}
