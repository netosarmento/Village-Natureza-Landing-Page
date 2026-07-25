import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { motion } from "framer-motion";
import { Clock } from 'lucide-react';
import {
  Menu,
  X,
  Building2,
  Shield,
  Trees,
  Wallet,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Phone,
  MessageCircle,
  CheckCircle2,
  Home,
  Ruler,
  BedDouble,
  Waves,
  Flame,
  Trophy,
  Dumbbell,
  Laptop,
  Baby,
  ToyBrick,
  PawPrint,
  Sparkles,
  Bike,
  TreePine,
  Utensils,
  Sprout,
  Navigation,
  Instagram,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

const WA = "https://wa.me/5591987654321";
const MAPS_ROUTE_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Canopus+Constru%C3%A7%C3%B5es+Av+Augusto+Montenegro+Bel%C3%A9m+PA";

// Imagens placeholder — serão substituídas por fotos reais do empreendimento.
const IMAGES = [
  "./images/carrousel/1.jpeg",
  "./images/carrousel/2.jpeg",
  "./images/carrousel/3.jpeg",
  "./images/carrousel/4.jpeg",
  "./images/carrousel/5.jpeg",
];

// Galeria — 12 slots com legendas editáveis. Substituir src pelas fotos reais.
const GALLERY: { src: string; label: string }[] = [
  { src: "./images/gallery/fachada.jpeg", label: "Fachada" },
  { src: "./images/gallery/piscina.jpeg", label: "Piscina" },
  { src: "./images/gallery/academia.jpeg", label: "Academia" },
  { src: "./images/gallery/Tipo A.jpeg", label: "Sala Tipo A" },
  { src: "./images/gallery/cozinha.jpeg", label: "Cozinha" },
  { src: "./images/gallery/Quarto 1 A.jpeg", label: "Quarto Tipo A" },
  { src: "./images/gallery/tipo B.jpeg", label: "Sala Tipo B" },
  { src: "./images/gallery/Quarto 2 B.jpeg", label: "Quarto Tipo B" },
  { src: "./images/gallery/sacada.jpeg", label: "Varanda" },
  { src: "./images/gallery/Planta A.jpeg", label: "Planta Tipo A" },
  { src: "./images/gallery/Planta B.jpeg", label: "Planta Tipo B" },
  { src: "./images/gallery/Planta Pavimento.jpeg", label: "Planta do pavimento" },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

export function Landing() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <Toaster position="top-center" richColors />
      <Navbar />
      <main>
        <Hero />
        <VideoBlock />
        <QuemSomos />
        <PorQueVillage />
        <CanopusCaixa />
        <Localizacao />
        <Village />
        <Plantas />
        <MCMV />
        <Contato />
      </main>
      <SiteFooter />
    </div>
  );
}

/* ---------------- Navbar ---------------- */
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#empresa", label: "A Canopus" },
    { href: "#village", label: "O Empreendimento" },
    { href: "#plantas", label: "Plantas" },
    { href: "#localizacao", label: "Localização" },
    { href: "#contato", label: "Fale Conosco" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[color:var(--brand-dark)]/95 backdrop-blur shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        {/* LOGO VILLAGE NATUREZA */}
        <a href="#top" className="flex min-w-0 items-center gap-2 font-display text-base font-extrabold tracking-tight text-white sm:text-xl">
          <img 
            src="/images/Logo-VN-white.png" 
            alt="Village Natureza" 
            className="navbar-logo"
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/85 transition-colors hover:text-[color:var(--brand-green)]"
            >
              {l.label}
            </a>
          ))}
          <Button
             asChild
             className="glassmorphism rounded-full px-6 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:!bg-[color:var(--brand-green)] hover:brightness-110 active:scale-95 active:!bg-[color:var(--brand-green)]"
            >
          <a href="#contato">Agendar Visita</a>
          </Button>
        </nav>

        <button
          className="rounded-md p-2 text-white lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Abrir menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[color:var(--brand-dark)] lg:hidden">
          <div className="flex flex-col gap-1 px-4 py-4 sm:px-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-white/90 hover:bg-white/10"
              >
                {l.label}
              </a>
            ))}
            <Button
              asChild
              className="glassmorphism mt-2 rounded-full bg-[color:var(--brand-green)] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 active:scale-95"
            >
              <a href="#contato" onClick={() => setOpen(false)}>
                Agendar Visita
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-[color:var(--brand-dark)] pt-24 text-white sm:pt-28"
    >
      {/* IMAGEM DE FUNDO */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--brand-dark)] via-[color:var(--brand-dark)]/90 to-transparent" />
      <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-[color:var(--brand-green)]/25 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.2fr,1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* LOGO VILLAGE NATUREZA */}
          <div
            role="img"
            aria-label="Village Natureza"
            className="inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-4 py-2.5 backdrop-blur-sm sm:px-5 sm:py-3"
          >
            <img 
              src="/images/Logo-VN.png" 
              alt="Village Natureza" 
              className="hero-logo"
            />
          </div>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            Um lar que já nasce <span className="text-[color:var(--brand-green)]">pronto</span> para receber sua história.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            O primeiro empreendimento Canopus em Belém. Apartamentos modernos,
            infraestrutura completa e acesso ao programa Minha Casa, Minha Vida.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
            <Button
              asChild
              size="lg"
              className="glassmorphism w-full rounded-full px-8 py-6 text-base font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:!bg-[color:var(--brand-green)] hover:brightness-110 active:scale-95 active:!bg-[color:var(--brand-green)] sm:w-auto"
            >
              <a href="#contato">Agendar Visita</a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="glassmorphism w-full rounded-full border-white/40 px-8 py-6 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:!bg-[color:var(--brand-green)] hover:border-[color:var(--brand-green)] hover:text-white active:scale-95 active:!bg-[color:var(--brand-green)] sm:w-auto"
            >
              <a href={WA} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp
              </a>
            </Button>
          </div>

          <div className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-white/10 pt-6 sm:mt-14 sm:gap-6 sm:pt-8">
            {[
              { 
                k: "2", 
                v: "quartos" 
              },
              { 
                k: (
                  <img 
                    src="/images/MCMV-logo.svg" 
                    alt="Minha Casa Minha Vida" 
                    className="mcmv-logo align-middle" // ← APENAS adicionei align-middle
                  />
                ), 
                v: "acesso facilitado" 
              },
              { 
                k: "24h", 
                v: "segurança" 
              },
            ].map((s) => (
              <div key={s.v} className="hero-stats-item">
                <div className="hero-stats-value flex items-center"> {/* ← Adicionei flex items-center */}
                  {s.k}
                </div>
                <div className="hero-stats-label">{s.v}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block"
        >
          <div className="relative">
            <div className="relative w-full max-w-2xl mx-auto">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[color:var(--brand-green)]/30 to-[color:var(--brand-orange)]/20 blur-2xl" />
              <img
                src="./images/gallery/fachada.jpeg"
                alt="Village Natureza"
                className="relative w-full h-auto rounded-3xl border border-white/10 shadow-2xl"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Vídeo em loop (YouTube) ---------------- */
function VideoBlock() {
  const videoId = "-eYK3YP524A";

  return (
    <section id="video" className="bg-[color:var(--brand-dark)] py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl">
          <div className="relative aspect-video w-full">
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=1&modestbranding=1&rel=0`}
              title="Vídeo institucional Village Natureza"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Quem Somos ---------------- */
function QuemSomos() {
  const stats = [
    { k: "50+", v: "anos de história" },
    { k: "300+", v: "empreendimentos" },
    { k: "50k+", v: "unidades entregues" },
    { k: "4", v: "estados de atuação" },
  ];
  return (
    <section id="empresa" className="bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div {...fadeUp} className="max-w-3xl">
          <SectionKicker>Quem Somos</SectionKicker>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-[color:var(--brand-dark)] sm:text-4xl lg:text-5xl">
            Cinco décadas construindo <span className="text-[color:var(--brand-green)]">lares</span> pelo Nordeste — e agora no Norte.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            A Canopus Construções nasceu no Maranhão e, ao longo de mais de 50 anos, se
            consolidou como uma das maiores construtoras da região. Com mais de 300
            empreendimentos entregues, 50 mil unidades habitacionais e presença em
            Maranhão, Piauí, Ceará — e agora Pará — carregamos um compromisso claro:
            oferecer habitação de qualidade com preço acessível.
          </p>
        </motion.div>

        <motion.div
          {...fadeUp}
          className="mt-10 rounded-2xl border-l-4 border-[color:var(--brand-green)] bg-secondary/60 p-6 sm:mt-12 sm:p-8"
        >
          <p className="font-display text-lg italic leading-relaxed text-[color:var(--brand-dark)] sm:text-2xl">
            "Nossa missão é transformar o sonho da casa própria em realidade, com
            qualidade, sustentabilidade e respeito à comunidade e ao meio ambiente."
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:mt-16 sm:gap-6 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.v}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-border bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-[color:var(--brand-green)]/50 hover:shadow-xl sm:p-8"
            >
              <div className="font-display text-3xl font-extrabold text-[color:var(--brand-green)] sm:text-5xl">
                {s.k}
              </div>
              <div className="mt-2 text-xs font-medium uppercase tracking-wider text-muted-foreground sm:text-sm">
                {s.v}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Por que o Village Natureza? ---------------- */
function PorQueVillage() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--brand-dark)] py-16 text-white sm:py-24 lg:py-32">
      <div className="absolute right-0 top-0 h-full w-1/2 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1400&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
        <motion.div {...fadeUp}>
          <SectionKicker light>Nosso compromisso</SectionKicker>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Por que o <span className="text-[color:var(--brand-green)]">Village Natureza</span>?
          </h2>
        </motion.div>

        <motion.div {...fadeUp} className="mt-8 space-y-5 text-base leading-relaxed text-white/85 sm:mt-10 sm:space-y-6 sm:text-lg">
          <p>
            Porque existe uma diferença entre comprar um apartamento e conquistar um
            lar. O Village Natureza nasce do encontro entre a solidez de 50 anos da
            Canopus e o desejo mais simples e verdadeiro de qualquer família: viver
            bem, com segurança, natureza por perto e a certeza de que cada detalhe foi
            pensado para você.
          </p>
          <p>
            Aqui, a chegada da Canopus a Belém não é apenas expansão — é um
            compromisso. Trouxemos a experiência comprovada em centenas de
            empreendimentos, respeito à floresta amazônica em cada escolha construtiva,
            e a confiança de quem já transformou a vida de mais de 50 mil famílias
            Brasil afora.
          </p>
          <p>
            O resultado é um condomínio pensado do primeiro tijolo à última folha do
            jardim: infraestrutura completa, plantas inteligentes e a liberdade de
            construir sua história em um lugar que já nasce pronto para recebê-la.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Canopus + Caixa ---------------- */
function CanopusCaixa() {
  const perks = [
    "Juros reduzidos",
    "Condições especiais de financiamento",
    "Vantagens exclusivas do Minha Casa, Minha Vida",
  ];
  return (
    <section className="bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          {...fadeUp}
          className="overflow-hidden rounded-3xl border border-border bg-secondary/40 p-6 sm:p-10 lg:p-14"
        >
          <div className="grid gap-8 lg:grid-cols-[1.2fr,1fr] lg:items-center lg:gap-10">
            <div>
              <SectionKicker>Parceria</SectionKicker>
              <h2 className="mt-4 font-display text-2xl font-bold leading-tight text-[color:var(--brand-dark)] sm:text-3xl lg:text-4xl">
                Canopus e Caixa,{" "}
                <span className="text-[color:var(--brand-green)]">juntas por você</span>!
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                De um lado, a construtora que transforma sonhos em realidade há 50
                anos. Do outro, o banco que mais financia imóveis no Brasil. Juntas,
                Canopus e Caixa unem solidez e credibilidade para colocar a sua
                conquista no centro de tudo.
              </p>
              <p className="mt-6 text-base font-medium text-[color:var(--brand-dark)]">
                Tudo isso pensado para facilitar sua vida — e acelerar a sua virada de
                chave.
              </p>
            </div>

            <ul className="space-y-4 rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8">
              {perks.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[color:var(--brand-green)]/15 text-[color:var(--brand-green)]">
                    <CheckCircle2 className="h-5 w-5" />
                  </span>
                  <span className="text-base font-medium text-[color:var(--brand-dark)]">
                    {p}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Localização ---------------- */
function Localizacao() {
  const near = [
    "2 min do Colégio Adventista",
    "5 min da Farmácia Pague Menos",
    "6 min do Parque dos Igarapés",
    "12 min do Assaí Atacadista",
    "13 min do Parque Shopping",
  ];

  return (
    <section id="localizacao" className="relative overflow-hidden bg-[color:var(--brand-dark)] py-20 sm:py-28">
      {/* Imagem de fundo */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            <span className="text-[color:var(--brand-green)]">Localização</span> privilegiada
          </h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            Venha conhecer o Village Natureza e descubra o seu novo lar
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* LADO ESQUERDO - INFORMAÇÕES DO VILLAGE NATUREZA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm shadow-xl sm:p-10"
          >
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[color:var(--brand-green)] shadow-lg">
              <MapPin className="h-7 w-7 text-white" />
            </div>
            
            <h3 className="mt-6 font-display text-2xl font-bold text-white sm:text-3xl">
              Village <span className="text-[color:var(--brand-green)]">Natureza</span>
            </h3>
            
            <div className="mt-4 space-y-3">
              <div className="flex items-start gap-3 rounded-xl bg-white/5 p-4 backdrop-blur-sm border border-white/10">
                <div className="mt-1 shrink-0 rounded-full bg-[color:var(--brand-green)]/20 p-1.5">
                  <MapPin className="h-4 w-4 text-[color:var(--brand-green)]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Localização do Empreendimento</p>
                  <p className="text-sm text-white/70">
                    Av. Augusto Montenegro, Belém - PA
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-white/80">
              O Village Natureza está localizado em uma das melhores regiões de Belém, 
              com fácil acesso e infraestrutura completa ao redor.
            </p>

            {/* LISTA DE PONTOS PRÓXIMOS */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {near.map((n) => (
                <div
                  key={n}
                  className="flex items-start gap-3 rounded-xl bg-white/5 p-3 backdrop-blur-sm border border-white/10"
                >
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-[color:var(--brand-green)]" />
                  <span className="text-sm font-medium text-white/90">
                    {n}
                  </span>
                </div>
              ))}
            </div>

            <Button
              asChild
              size="lg"
              className="glassmorphism mt-8 w-full rounded-full px-6 py-6 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:!bg-[color:var(--brand-green)] hover:brightness-110 active:scale-95 sm:w-auto"
            >
              <a 
                href="https://maps.app.goo.gl/8xaHrKzW1BVgAEJBA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <Navigation className="mr-2 h-5 w-5 shrink-0" />
                <span>Como chegar ao Village Natureza</span>
              </a>
            </Button>
          </motion.div>

          {/* LADO DIREITO - LOJA CANOPUS (ESCRITÓRIO) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm shadow-xl sm:p-10"
          >
            <div className="absolute inset-0 opacity-10 rounded-3xl overflow-hidden">
              <div
                className="h-full w-full"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
            
            <div className="relative">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[color:var(--brand-green)] shadow-lg">
                <Navigation className="h-7 w-7 text-white" />
              </div>
              
              <h3 className="mt-6 font-display text-2xl font-bold text-white sm:text-3xl">
                Loja <span className="text-[color:var(--brand-green)]">Canopus</span>
              </h3>
              
              <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base">
                Visite nossa loja e conheça de perto o Village Natureza.
              </p>

              <div className="mt-4 space-y-3">
                <div className="flex items-start gap-3 rounded-xl bg-white/5 p-4 backdrop-blur-sm border border-white/10">
                  <div className="mt-1 shrink-0 rounded-full bg-[color:var(--brand-green)]/20 p-1.5">
                    <MapPin className="h-4 w-4 text-[color:var(--brand-green)]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Endereço da Loja</p>
                    <p className="text-sm text-white/70">
                      Av. Mário Covas — Bairro Coqueiro, Belém/PA
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl bg-white/5 p-4 backdrop-blur-sm border border-white/10">
                  <div className="mt-1 shrink-0 rounded-full bg-[color:var(--brand-green)]/20 p-1.5">
                    <Clock className="h-4 w-4 text-[color:var(--brand-green)]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Funcionamento</p>
                    <p className="text-sm text-white/70">
                      Segunda a Sábado, 9h às 18h
                    </p>
                  </div>
                </div>
              </div>

              <Button
                asChild
                size="lg"
                className="glassmorphism mt-8 w-full rounded-full px-6 py-6 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:!bg-[color:var(--brand-green)] hover:brightness-110 active:scale-95 sm:w-auto"
              >
                <a 
                  href={MAPS_ROUTE_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <Navigation className="mr-2 h-5 w-5 shrink-0" />
                  <span>Como chegar à Loja Canopus</span>
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Village + Carousel ---------------- */
function Village() {
  const amenities = [
    { icon: Waves, label: "Piscina adulto e infantil" },
    { icon: Flame, label: "Salão de festas aberto / Churrasqueira" },
    { icon: Trophy, label: "Campo gramado" },
    { icon: Dumbbell, label: "Academia" },
    { icon: Laptop, label: "Coworking" },
    { icon: Baby, label: "Brinquedoteca" },
    { icon: ToyBrick, label: "Playground" },
    { icon: PawPrint, label: "Pet place" },
    { icon: Sparkles, label: "SPA / Sauna" },
    { icon: Home, label: "Redário" },
    { icon: Bike, label: "Bicicletário" },
    { icon: TreePine, label: "Praças" },
    { icon: Utensils, label: "Espaço funcional" },
    { icon: Sprout, label: "Área para horta / piquenique" },
  ];

  return (
    <section id="village" className="bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div {...fadeUp} className="max-w-3xl">
          <SectionKicker>O empreendimento</SectionKicker>
          {/* LOGO VILLAGE NATUREZA */}
          <div className="flex items-center gap-3">
            <img 
              src="/images/Logo-VN.png" 
              alt="Village Natureza" 
              className="village-logo"
            />
          </div>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Um lar planejado para o clima, a rotina e a família amazônica — com
            infraestrutura completa de lazer, segurança e áreas verdes.
          </p>
        </motion.div>

        <motion.div {...fadeUp} className="mt-12 sm:mt-14">
          <h3 className="font-display text-xl font-bold text-[color:var(--brand-dark)] sm:text-2xl lg:text-3xl">
            Lazer e infraestrutura completos
          </h3>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {amenities.map((a, i) => (
              <motion.div
                key={a.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="group flex items-start gap-3 rounded-2xl border border-border bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-[color:var(--brand-green)]/60 hover:shadow-md sm:p-5"
              >
                <div className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-[color:var(--brand-green)]/10 text-[color:var(--brand-green)] transition-colors group-hover:bg-[color:var(--brand-green)] group-hover:text-white sm:h-10 sm:w-10">
                  <a.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <span className="min-w-0 text-xs font-semibold leading-snug text-[color:var(--brand-dark)] sm:text-sm">
                  {a.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div {...fadeUp} className="mt-14 sm:mt-20">
          <Carousel />
        </motion.div>

        <motion.div {...fadeUp} className="mt-14 sm:mt-20">
          <h3 className="font-display text-xl font-bold text-[color:var(--brand-dark)] sm:text-2xl lg:text-3xl">
            Conheça os ambientes
          </h3>
          <p className="mt-2 text-xs text-muted-foreground sm:text-sm">
            Imagens meramente ilustrativas — serão substituídas pelas fotos reais do empreendimento.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-2.5 sm:mt-8 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {GALLERY.map((g) => (
              <figure
                key={g.label}
                className="group relative aspect-square overflow-hidden rounded-xl bg-muted"
              >
                <img
                  src={g.src}
                  alt={g.label}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-2 text-xs font-medium text-white sm:p-3 sm:text-sm">
                  {g.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Carousel() {
  const [i, setI] = useState(0);
  const n = IMAGES.length;

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % n), 5000);
    return () => clearInterval(t);
  }, [n]);

  const go = (d: number) => setI((v) => (v + d + n) % n);

  return (
    <div className="relative overflow-hidden rounded-2xl bg-[color:var(--brand-dark)] shadow-2xl sm:rounded-3xl">
      <div className="relative aspect-[4/3] w-full sm:aspect-[16/9]">
        {IMAGES.map((src, idx) => (
          <img
            key={src}
            src={src}
            alt={`Village Natureza ${idx + 1}`}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              idx === i ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      <button
        onClick={() => go(-1)}
        aria-label="Anterior"
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-[color:var(--brand-dark)] shadow-lg backdrop-blur transition hover:bg-white sm:left-4 sm:p-3"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={() => go(1)}
        aria-label="Próximo"
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-[color:var(--brand-dark)] shadow-lg backdrop-blur transition hover:bg-white sm:right-4 sm:p-3"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute inset-x-0 bottom-3 flex justify-center gap-2 sm:bottom-5">
        {IMAGES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Ir para slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all ${
              idx === i
                ? "w-8 bg-[color:var(--brand-green)]"
                : "w-2 bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* ---------------- Plantas ---------------- */
function Plantas() {
  const items = [
    {
      title: "Planta Tipo A",
      area: "43,5 m²",
      badge: "Suíte reversível",
      icon: BedDouble,
      desc:
        "2 quartos, com opção de suíte reversível: o banheiro social possui 2 portas de acesso, uma para a área comum do apartamento e outra exclusiva para o quarto principal, funcionando como suíte. Sala de estar/jantar integrada, cozinha, banheiro social e varanda.",
      features: ["2 quartos", "Suíte reversível", "Varanda", "Cozinha integrada"],
      highlight: true,
    },
    {
      title: "Planta Tipo B",
      area: "42,16 m²",
      badge: "Layout padrão",
      icon: Ruler,
      desc:
        "2 quartos no layout padrão, banheiro social independente (sem a suíte reversível). Sala de estar/jantar integrada, cozinha, banheiro social e varanda.",
      features: ["2 quartos", "Banheiro social", "Varanda", "Cozinha integrada"],
      highlight: false,
    },
  ];
  return (
    <section id="plantas" className="bg-secondary/40 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div {...fadeUp} className="max-w-2xl">
          <SectionKicker>Tipologias</SectionKicker>
          <h2 className="mt-4 font-display text-3xl font-bold text-[color:var(--brand-dark)] sm:text-4xl lg:text-5xl">
            Plantas pensadas para{" "}
            <span className="text-[color:var(--brand-green)]">viver bem</span>.
          </h2>
          <p className="mt-4 text-sm text-muted-foreground sm:text-base">
            Ambas as plantas têm varanda — a diferença está apenas no layout interno e
            na suíte reversível.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 sm:mt-14 lg:grid-cols-2">
          {items.map((it, i) => (
            <motion.article
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative flex flex-col rounded-3xl border p-6 transition-all hover:-translate-y-1 hover:shadow-2xl sm:p-10 ${
                it.highlight
                  ? "border-[color:var(--brand-green)] bg-[color:var(--brand-dark)] text-white shadow-xl"
                  : "border-border bg-white"
              }`}
            >
              {it.highlight && (
                <span className="absolute -top-3 left-6 rounded-full bg-[color:var(--brand-green)] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white sm:left-8 sm:text-xs">
                  Mais procurada
                </span>
              )}
              <div className="flex items-center gap-3 sm:gap-4">
                <div
                  className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl sm:h-14 sm:w-14 ${
                    it.highlight
                      ? "bg-[color:var(--brand-green)] text-white"
                      : "bg-[color:var(--brand-green)]/10 text-[color:var(--brand-green)]"
                  }`}
                >
                  <it.icon className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                <div className="min-w-0">
                  <h3
                    className={`font-display text-xl font-bold sm:text-2xl ${
                      it.highlight ? "text-white" : "text-[color:var(--brand-dark)]"
                    }`}
                  >
                    {it.title}
                  </h3>
                  <div
                    className={`text-sm font-semibold uppercase tracking-wider ${
                      it.highlight ? "text-[color:var(--brand-green)]" : "text-[color:var(--brand-green)]"
                    }`}
                  >
                    {it.area}
                  </div>
                </div>
              </div>

              <span
                className={`mt-6 inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold ${
                  it.highlight
                    ? "bg-white/10 text-white"
                    : "bg-[color:var(--brand-green)]/10 text-[color:var(--brand-green)]"
                }`}
              >
                {it.badge}
              </span>

              <p
                className={`mt-4 flex-1 text-sm leading-relaxed ${
                  it.highlight ? "text-white/85" : "text-muted-foreground"
                }`}
              >
                {it.desc}
              </p>

              <ul className="mt-6 grid grid-cols-2 gap-2">
                {it.features.map((f) => (
                  <li
                    key={f}
                    className={`flex items-center gap-2 text-sm ${
                      it.highlight ? "text-white/90" : "text-[color:var(--brand-dark)]"
                    }`}
                  >
                    <CheckCircle2
                      className={`h-4 w-4 ${
                        it.highlight
                          ? "text-[color:var(--brand-green)]"
                          : "text-[color:var(--brand-green)]"
                      }`}
                    />
                    {f}
                  </li>
                ))}
              </ul>

                <Button
                  asChild
                  className={`mt-8 rounded-full px-6 py-3 text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 active:scale-95 ${
                  it.highlight
                   ? "bg-[color:var(--brand-green)] hover:bg-[color:var(--brand-green)]/90"
                   : "bg-[color:var(--brand-dark)] hover:bg-[color:var(--brand-dark)]/90"
                 } hover:backdrop-blur-sm`}
                >
                <a href="#contato" className="flex items-center justify-center font-medium">
                       Quero esta planta
                    </a>
              </Button>
            </motion.article>
          ))}
        </div>

        <motion.div {...fadeUp} className="mt-10 text-center sm:mt-12">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="glassmorphism w-full rounded-full border-[color:var(--brand-dark)] px-8 py-6 text-sm font-semibold text-[color:var(--brand-dark)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[color:var(--brand-dark)] hover:text-white active:scale-95 sm:w-auto sm:text-base"
          >
            <a href={MAPS_ROUTE_URL} target="_blank" rel="noopener noreferrer">
              <Navigation className="mr-2 h-5 w-5 shrink-0" />
              <span className="truncate">Como chegar até a loja Canopus</span>
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- MCMV ---------------- */
function MCMV() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <motion.div
          {...fadeUp}
          className="flex flex-col items-center gap-6 rounded-3xl border border-border bg-secondary/40 p-6 text-center sm:flex-row sm:p-10 sm:text-left"
        >
          {/* LOGO OFICIAL MINHA CASA MINHA VIDA AQUI — substituir este badge pela logo oficial quando disponível */}
          <div
            role="img"
            aria-label="Minha Casa Minha Vida"
            className="flex-shrink-0 rounded-2xl bg-[color:var(--mcmv-blue)] px-6 py-5 shadow-md"
          >
            <div className="text-xs font-bold uppercase tracking-widest text-[color:var(--mcmv-yellow)]">
              Governo Federal
            </div>
            <div className="mt-1 font-display text-xl font-extrabold leading-tight text-white">
              Minha Casa
              <br />
              <span className="text-[color:var(--mcmv-yellow)]">Minha Vida</span>
            </div>
          </div>
          <div className="min-w-0">
            <h3 className="font-display text-xl font-bold text-[color:var(--brand-dark)] sm:text-2xl lg:text-3xl">
              Empreendimento habilitado no Minha Casa, Minha Vida
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Financiamento facilitado, taxas reduzidas e condições especiais para
              famílias que sonham com a casa própria. Nossa equipe te ajuda em cada
              etapa.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Contato ---------------- */
function Contato() {
  const [form, setForm] = useState({
    nome: "",
    whatsapp: "",
    email: "",
    tipologia: "",
    mensagem: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.nome || !form.whatsapp) {
      toast.error("Preencha ao menos nome e WhatsApp.");
      return;
    }
    const text = encodeURIComponent(
      `Olá! Meu nome é ${form.nome}.\nTenho interesse no Village Natureza${
        form.tipologia ? ` — tipologia: ${form.tipologia}` : ""
      }.\n${form.email ? `E-mail: ${form.email}\n` : ""}${
        form.mensagem ? `\n${form.mensagem}` : ""
      }`,
    );
    toast.success("Redirecionando para o WhatsApp…");
    setTimeout(() => window.open(`${WA}?text=${text}`, "_blank"), 400);
  };

  return (
    <section id="contato" className="bg-secondary/40 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr,1fr] lg:gap-14">
        <motion.div {...fadeUp}>
          <SectionKicker>Fale conosco</SectionKicker>
          <h2 className="mt-4 font-display text-3xl font-bold text-[color:var(--brand-dark)] sm:text-4xl lg:text-5xl">
            Agende sua <span className="text-[color:var(--brand-green)]">visita</span>.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Preencha o formulário e nossa equipe entrará em contato. Se preferir, chame
            diretamente pelo WhatsApp — respondemos rápido.
          </p>

          <div className="mt-8 space-y-4 sm:mt-10 sm:space-y-5">
            <InfoRow
              icon={<Phone className="h-5 w-5" />}
              title="Central de vendas"
              value="0800 098 1100"
            />
            <InfoRow
              icon={<MapPin className="h-5 w-5" />}
              title="Loja Canopus"
              value="Av. Augusto Montenegro, Nº 981 — Parque Verde, Belém/PA"
              extra="Em frente ao Conj. Sevilha"
            />
            <InfoRow
              icon={<Building2 className="h-5 w-5" />}
              title="Empreendimento"
              value="Village Natureza — Av. Mário Covas, Coqueiro — Belém/PA"
            />
            <InfoRow
              icon={<Globe className="h-5 w-5" />}
              title="Site oficial"
              value="canopusconstrucoes.com.br"
              href="https://canopusconstrucoes.com.br"
            />
            <InfoRow
              icon={<Instagram className="h-5 w-5" />}
              title="Instagram"
              value="@canopusconstrucoes"
              href="https://instagram.com/canopusconstrucoes"
            />
          </div>

          <Button
            asChild
            size="lg"
            className="glassmorphism mt-10 h-14 w-full rounded-full bg-[color:var(--brand-green)] text-base font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 active:scale-95 sm:w-auto sm:px-10"
          >
            <a href={WA} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" /> Conversar no WhatsApp
            </a>
          </Button>
        </motion.div>

        <motion.form
          {...fadeUp}
          onSubmit={handleSubmit}
          className="rounded-3xl border border-border bg-white p-6 shadow-xl sm:p-10"
        >
          <div className="space-y-5">
            <Field label="Nome completo" htmlFor="nome">
              <Input
                id="nome"
                required
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
                placeholder="Como podemos te chamar?"
              />
            </Field>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="WhatsApp" htmlFor="whatsapp">
                <Input
                  id="whatsapp"
                  required
                  value={form.whatsapp}
                  onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                  placeholder="(91) 99999-9999"
                />
              </Field>
              <Field label="E-mail" htmlFor="email">
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="voce@email.com"
                />
              </Field>
            </div>
            <Field label="Tipologia de interesse" htmlFor="tipologia">
              <Select
                value={form.tipologia}
                onValueChange={(v) => setForm({ ...form, tipologia: v })}
              >
                <SelectTrigger id="tipologia">
                  <SelectValue placeholder="Selecione uma tipologia" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Planta Tipo A (43,5m² — suíte reversível)">
                    Planta Tipo A (43,5 m² — suíte reversível)
                  </SelectItem>
                  <SelectItem value="Planta Tipo B (42,16m² — padrão)">
                    Planta Tipo B (42,16 m² — padrão)
                  </SelectItem>
                  <SelectItem value="Ainda não sei">Ainda não sei</SelectItem>
                </SelectContent>
              </Select>
            </Field>
            <Field label="Mensagem" htmlFor="mensagem">
              <Textarea
                id="mensagem"
                rows={4}
                value={form.mensagem}
                onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                placeholder="Conte-nos mais sobre o que você procura."
              />
            </Field>

            <Button
              type="submit"
              size="lg"
              className="glassmorphism h-14 w-full rounded-full bg-[color:var(--brand-green)] text-base font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 active:scale-95"
            >
              Enviar e falar no WhatsApp
            </Button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div>
      <Label
        htmlFor={htmlFor}
        className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
      >
        {label}
      </Label>
      {children}
    </div>
  );
}

function InfoRow({
  icon,
  title,
  value,
  extra,
  href,
}: {
  icon: ReactNode;
  title: string;
  value: string;
  extra?: string;
  href?: string;
}) {
  const valueEl = href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-0.5 text-base font-medium text-[color:var(--brand-dark)] hover:text-[color:var(--brand-green)]"
    >
      {value}
    </a>
  ) : (
    <div className="mt-0.5 text-base font-medium text-[color:var(--brand-dark)]">
      {value}
    </div>
  );
  return (
    <div className="flex items-start gap-3 sm:gap-4">
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[color:var(--brand-green)]/10 text-[color:var(--brand-green)] sm:h-11 sm:w-11">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {title}
        </div>
        <div className="break-words">{valueEl}</div>
        {extra && (
          <div className="mt-0.5 text-xs text-muted-foreground">{extra}</div>
        )}
      </div>
    </div>
  );
}

/* ---------------- Footer ---------------- */
function SiteFooter() {
  return (
    <footer className="bg-[color:var(--brand-dark)] py-12 text-white sm:py-14">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-2 sm:gap-10 sm:px-6 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-display text-xl font-extrabold tracking-tight">
            <img 
              src="/images/Logo-VN-white.png" 
              alt="Village Natureza" 
              className="footer-logo"
            />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            Um empreendimento Canopus Construções. 50+ anos construindo lares com
            qualidade, sustentabilidade e propósito.
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold uppercase tracking-wider text-[color:var(--brand-green)]">
            Empreendimento
          </div>
          <p className="mt-4 text-sm text-white/80">Village Natureza</p>
          <p className="text-sm text-white/60">Av. Mário Covas, Coqueiro — Belém/PA</p>
        </div>
        <div>
          <div className="text-sm font-semibold uppercase tracking-wider text-[color:var(--brand-green)]">
            Loja Canopus
          </div>
          <p className="mt-4 text-sm text-white/80">
            Av. Augusto Montenegro, Nº 981
          </p>
          <p className="text-sm text-white/60">Parque Verde — Belém/PA</p>
          <p className="text-sm text-white/60">Em frente ao Conj. Sevilha</p>
        </div>
        <div>
          <div className="text-sm font-semibold uppercase tracking-wider text-[color:var(--brand-green)]">
            Contato
          </div>
          <p className="mt-4 text-sm text-white/80">0800 098 1100</p>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex text-sm text-white/80 hover:text-[color:var(--brand-green)]"
          >
            WhatsApp de vendas
          </a>
          <div className="mt-3 flex flex-col gap-1 text-sm text-white/70">
            <a
              href="https://canopusconstrucoes.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[color:var(--brand-green)]"
            >
              canopusconstrucoes.com.br
            </a>
            <a
              href="https://instagram.com/canopusconstrucoes"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[color:var(--brand-green)]"
            >
              @canopusconstrucoes
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-white/10 px-4 pt-6 text-center text-xs text-white/60 sm:mt-12 sm:flex-row sm:px-6 sm:text-left">
        <div>© {new Date().getFullYear()} Canopus Construções. Todos os direitos reservados.</div>
        <div>
          Desenvolvido pela ❤️ Lead House
        </div>
      </div>
    </footer>
  );
}

function SectionKicker({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] ${
        light ? "text-[color:var(--brand-green)]" : "text-[color:var(--brand-green)]"
      }`}
    >
      <span className="h-px w-8 bg-[color:var(--brand-green)]" />
      {children}
    </span>
  );
}