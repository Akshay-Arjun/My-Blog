import HackerCard from "./HackerCard";

export default function HackersList({ hackers: hackers }) {
  return (
    <section className="mx-9">
      {hackers && hackers.map((hacker) => (
        <HackerCard
          key={hacker.slug}
          title={hacker.title}
          slug={hacker.slug}
          coverImage={hacker.coverImage}
          excerpt={hacker.excerpt}
        />
      ))}
    </section >
  );
};
