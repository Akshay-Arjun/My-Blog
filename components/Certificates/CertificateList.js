import CertificateCard from "./CertificateCard";

export default function HackingList({ certificates: certificates }) {
  return (
    <section className="mx-9">
      {certificates && certificates.map((certificate) => (
        <CertificateCard
          key={certificate.slug}
          title={certificate.title}
          slug={certificate.slug}
          coverImage={certificate.coverImage}
          excerpt={certificate.excerpt}
        />
      ))}
    </section >
  );
};
