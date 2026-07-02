import { Container } from "@/components/ui/Container";

const logos = ["Acme", "Nebula", "Orbit", "Seedling", "Vertex"];

export default function TrustLogos() {
  return (
    <section className="py-12">
      <Container>
        <p className="text-center text-sm font-medium text-zinc-500">
          Trusted by early-stage startups
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-8">
          {logos.map((logo) => (
            <div
              key={logo}
              className="text-lg font-bold text-zinc-500 transition-colors hover:text-slate-300"
            >
              {logo}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
