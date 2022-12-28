import HackingCard from "./HackingCard";

export default function HackingList({ tryhackers: tryhackers }) {
  return (
    <section className="mx-9">
      {tryhackers && tryhackers.map((tryhacker) => (
        <HackingCard
          key={tryhacker.slug}
          title={tryhacker.title}
          slug={tryhacker.slug}
          coverImage={tryhacker.coverImage}
          excerpt={tryhacker.excerpt}
        />
      ))}
    </section >
  );
};
