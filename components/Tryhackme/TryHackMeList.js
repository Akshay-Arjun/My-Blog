import TryHackMeCard from "./TryHackMeCard";

export default function TryHackMeList({ tryhackers: tryhackers }) {
  return (
    <section className="mx-9">
      {tryhackers && tryhackers.map((tryhacker) => (
        <TryHackMeCard
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
