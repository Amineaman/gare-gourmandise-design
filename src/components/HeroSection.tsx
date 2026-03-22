import { Phone, MapPin, Star } from "lucide-react";

const SteamIcon = () => (
  <svg width="40" height="50" viewBox="0 0 40 50" className="absolute -top-6 left-1/2 -translate-x-1/2">
    {[0, 1, 2].map((i) => (
      <path
        key={i}
        d={`M${14 + i * 6} 30 Q${16 + i * 6} 20 ${14 + i * 6} 10`}
        fill="none"
        stroke="hsl(38 68% 47% / 0.4)"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="animate-steam"
        style={{ animationDelay: `${i * 0.5}s` }}
      />
    ))}
  </svg>
);

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-hero grain overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-gold/3 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Monogram */}
        <div className="relative inline-block mb-8">
          <SteamIcon />
          <div className="w-20 h-20 mx-auto rounded-full border-2 border-gold/40 flex items-center justify-center">
            <span className="text-3xl font-serif font-bold text-gold tracking-widest">LGV</span>
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-primary-foreground leading-tight mb-6">
          Là où chaque pause
          <br />
          <span className="text-gradient-gold italic">devient parfaite</span>
        </h1>

        <p className="text-lg sm:text-xl text-primary-foreground/70 font-sans max-w-2xl mx-auto mb-10 leading-relaxed">
          Votre escale idéale à Bouskoura — en face de la gare.
          <br className="hidden sm:block" />
          Cuisine soignée, ambiance chaleureuse, espace VIP.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="tel:+212661571270"
            className="flex items-center gap-3 bg-gold hover:bg-gold-light text-espresso font-sans font-bold text-base px-8 py-4 rounded-full transition-all duration-300 hover:shadow-gold hover:scale-105"
            aria-label="Nous appeler"
          >
            <Phone className="w-5 h-5" />
            Nous appeler
          </a>
          <a
            href="https://maps.google.com/?q=Café-Resto+LGV+Bouskoura"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 border-2 border-primary-foreground/30 text-primary-foreground hover:border-gold hover:text-gold font-sans font-semibold text-base px-8 py-4 rounded-full transition-all duration-300"
            aria-label="Nous trouver sur Google Maps"
          >
            <MapPin className="w-5 h-5" />
            Nous trouver
          </a>
        </div>

        {/* Rating badge */}
        <div className="inline-flex items-center gap-2 bg-espresso/50 backdrop-blur-sm border border-gold/30 rounded-full px-5 py-2.5 animate-float">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-gold text-gold" />
            ))}
          </div>
          <span className="text-sm font-sans text-gold font-semibold">5.0 — 12 avis Google</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 rounded-full bg-gold animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
