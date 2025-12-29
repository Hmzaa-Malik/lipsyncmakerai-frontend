export function PartnershipSection() {
  return (
    <section className="border-b border-border/40 bg-background py-16">
      <div className="container mx-auto px-4">
        <p className="mb-12 text-center text-sm text-muted-foreground">
          We partner with the world&apos;s leading organizations to advance their industries:
        </p>

        <div className="flex flex-wrap items-center justify-center gap-12 opacity-60 grayscale">
          {["BBC", "CNN", "Netflix", "Disney", "Amazon", "HBO"].map((brand) => (
            <div key={brand} className="text-2xl font-bold tracking-tight text-foreground/80">
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
