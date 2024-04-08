import Link from 'next/link';

export default function ResumePage() {
  return (
    <div>
      <h1>My Resume</h1>
      <Link href="/public/Resume.pdf" passHref>
        <a target="_blank" rel="noopener noreferrer">
          Open Resume
        </a>
      </Link>
    </div>
  );
}
