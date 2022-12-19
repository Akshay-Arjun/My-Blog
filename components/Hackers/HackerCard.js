import Image from 'next/image';
import Link from 'next/link';

export default function HackerCard(hacker) {
  return (
    <div className="mx-auto w-full min-w-sm lg:w-3/4 bg-accent-2 rounded-lg shadow mt-8 mb-8">
      <Link href={"/hackerone/" + hacker.slug}>
        <div className='w-full relative'>
          <Image height={10} width={16}
            objectFit='cover' layout='responsive' objectPosition='center' src={hacker.coverImage} alt={hacker.title} placeholder="blur" blurDataURL={`/_next/image?url=${hacker.coverImage}&w=16&q=1`} className='rounded-t-lg' />
        </div>
      </Link>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-accent-1 dark:text-white">{hacker.title}</h5>
        <p className="mb-4 text-sm font-normal text-accent-1 dark:text-gray-400">{hacker.excerpt}</p>
        <div className="inline-flex items-center py-2 px-3 text-sm font-medium text-accent-2 bg-accent-1 rounded-lg hover:bg-accent-1 hover:text-accent-2 focus:ring-4 focus:outline-none">
          <Link href={"/hackerone/" + hacker.slug}>
            Read More
          </Link>
          <i className='bi bi-arrow-right ml-1'></i>
        </div>
      </div>
    </div>
  );
}
