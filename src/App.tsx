import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Gauge,
  Headphones,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Truck,
  Wrench,
  X,
} from "lucide-react";
import { type ComponentType, useEffect, useMemo, useState } from "react";

const WHATSAPP_NUMBER = "31992640017";
const PHONE_NUMBER = "(31) 37732739";
const EMAIL = "adm@hidrauseven.com.br";
const ADDRESS = "Rua Felipe Chamon, 702 - Santo Antônio, Sete Lagoas - MG";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Rua%20Felipe%20Chamon%20702%20Santo%20Antonio%20Sete%20Lagoas%20MG";
const INSTAGRAM_URL = "https://www.instagram.com/hidrau_seven?igsh=MWExaHdxNHdlejZkeA==";
const WHATSAPP_MESSAGE =
  "Olá, vim pelo site da Hidrau Seven e gostaria de solicitar um orçamento.";
const LOGO_SRC = "/logo.png";

const navItems = [
  ["Início", "#inicio"],
  ["Serviços", "#servicos"],
  ["Produtos", "#produtos"],
  ["Empresa", "#empresa"],
  ["Contato", "#contato"],
];

const galleryImages = [
  "/gallery/foto-1.jpeg",
  "/gallery/foto-2.jpeg",
  "/gallery/foto-3.jpeg",
  "/gallery/foto-4.jpeg",
  "/gallery/foto-5.jpeg",
  "/gallery/foto-6.jpeg",
  "/gallery/foto-7.jpeg",
  "/gallery/foto-8.jpeg",
  "/gallery/foto-9.jpeg",
  "/gallery/foto-10.jpeg",
  "/gallery/foto-11.jpeg",
  "/gallery/foto-12.jpeg",
  "/gallery/foto-13.jpeg",
  "/gallery/foto-14.jpeg",
  "/gallery/foto-15.jpeg",
  "/gallery/foto-16.jpeg",
  "/gallery/foto-17.jpeg",
  "/gallery/foto-18.jpeg",
  "/gallery/foto-19.jpeg",
  "/gallery/foto-20.jpeg",
  "/gallery/foto-21.jpeg",
  "/gallery/foto-22.jpeg",
  "/gallery/foto-23.jpeg",
  "/gallery/foto-24.jpeg",
  "/gallery/foto-25.jpeg",
  "/gallery/foto-26.jpeg",
  "/gallery/foto-27.jpeg",
  "/gallery/foto-28.jpeg",
  "/gallery/foto-29.jpeg",
];

const services = [
  {
    title: "Direção hidráulica",
    text: "Diagnóstico, manutenção e reparo para carros, pick-ups e utilitários.",
    icon: Gauge,
  },
  {
    title: "Linha pesada",
    text: "Sistemas hidráulicos para caminhões, basculantes, munck e prancha.",
    icon: Truck,
  },
  {
    title: "Cilindros e componentes",
    text: "Reparo em cilindros, bombas, comandos, válvulas, orbitrols e motores hidráulicos.",
    icon: Wrench,
  },
  {
    title: "Empresas e frotas",
    text: "Atendimento técnico para reduzir paradas e manter a operação rodando.",
    icon: ShieldCheck,
  },
];

const productCatalog = [
  {
    title: "Bomba hidráulica",
    description: "Reposição e manutenção para sistemas hidráulicos veiculares.",
    image: "/products/bomba-hidraulica.png",
  },
  {
    title: "Setor de direção",
    description: "Componentes para direção hidráulica de linha leve e pesada.",
    image: "/products/setor-direcao.png",
  },
  {
    title: "Comando hidráulico",
    description: "Comandos, válvulas e acionamentos para equipamentos.",
    image: "/products/comando-hidraulico.png",
  },
  {
    title: "Cabo de acionamento",
    description: "Cabos para acionamento de sistemas hidráulicos e tomadas.",
    image: "/products/cabo-acionamento.png",
  },
  {
    title: "Anéis",
    description: "Vedações, anéis e reparos para montagem e revisão.",
    image: "/products/aneis.png",
  },
  {
    title: "Gaxeta",
    description: "Gaxetas e vedações para reparo de sistemas hidráulicos.",
    image: "/products/gaxeta.png",
  },
  {
    title: "Bomba de direção",
    description: "Bombas para direção hidráulica automotiva e utilitária.",
    image: "/products/bomba-direcao.png",
  },
  {
    title: "Cardan",
    description: "Cardans e componentes para transmissão e tomada de força.",
    image: "/products/cardan.png",
  },
  {
    title: "Motor hidráulico",
    description: "Motores hidráulicos para aplicações industriais e veiculares.",
    image: "/products/motor-hidraulico.png",
  },
  {
    title: "Caixa de direção",
    description: "Caixas de direção hidráulica/elétrica.",
    image: "/products/caixa-direcao.png",
  },
  {
    title: "Cilindro hidráulico",
    description: "Cilindros para caminhões, máquinas e implementos.",
    image: "/products/cilindro-hidraulico.png",
  },
  {
    title: "Kit direção hidráulica",
    description: "Kits completos para conversão e instalação de direção.",
    image: "/products/kit-direcao-hidraulica.png",
  },
];

const serviceDetails = [
  {
    title: "Caminhões",
    text: "Direções, setor, bomba, reservatório e mangueiras.",
    icon: Truck,
    image: "/services/caminhoes.png",
  },
  {
    title: "Báscula",
    text: "Cilindros telescópios e duplos, bombas, tomada de força, cardã, juntas, chavetas, barras, válvulas, cabos de acionamento e mangueiras de pressão e retorno.",
    icon: Gauge,
    image: "/services/bascula.png",
  },
  {
    title: "Caminhões Munck",
    text: "Cilindros, mangueiras, bombas hidráulicas, válvulas, comandos e direção hidráulica completa.",
    icon: Wrench,
    image: "/services/munck.png",
  },
  {
    title: "Caminhões prancha",
    text: "Cilindros, tomada de força, válvulas, comandos, mangueiras e demais componentes hidráulicos.",
    icon: ShieldCheck,
    image: "/services/prancha.png",
  },
  {
    title: "Carros / Pick-ups",
    text: "Direção hidráulica, caixas de direção, bombas de direção, reservatórios, mangueiras, polias e conversão de direção mecânica em hidráulica.",
    icon: Gauge,
    image: "/services/carros-pickups.png",
  },
];

const advantages = [
  "Atendimento direto com equipe técnica",
  "Serviços para linha leve e pesada",
  "Peças e componentes hidráulicos",
  "Foco em qualidade, segurança e garantia",
];

function InstagramIcon({ className = "", size = 24 }: { className?: string; size?: number }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
      <path d="M17.5 6.5h.01" />
    </svg>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePhoto, setActivePhoto] = useState(0);
  const [availablePhotos, setAvailablePhotos] = useState<string[]>(galleryImages);

  const whatsappUrl = useMemo(
    () => `https://wa.me/55${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
    [],
  );

  useEffect(() => {
    if (availablePhotos.length < 2) {
      return;
    }

    const timer = window.setInterval(() => {
      setActivePhoto((current) => (current + 1) % availablePhotos.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, [availablePhotos.length]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen bg-[#f5fbff] text-slate-950">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-sky-950/10 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
          <a href="#inicio" onClick={closeMenu} className="flex min-w-0 items-center">
            <LogoImage className="h-11 w-auto max-w-[210px] sm:max-w-[260px]" />
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-sm font-bold text-slate-700 transition hover:text-[#006aa6]"
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-lg bg-[#006aa6] px-5 py-3 text-sm font-black text-white shadow-lg shadow-sky-900/15 transition hover:-translate-y-0.5 hover:bg-[#045783] lg:inline-flex"
          >
            Orçamento
            <ArrowRight size={17} />
          </a>

          <button
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-sky-950/10 bg-white text-[#006aa6] lg:hidden"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-sky-950/10 bg-white px-5 py-4 lg:hidden">
            <nav className="mx-auto grid max-w-7xl gap-2">
              {navItems.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  className="rounded-lg px-3 py-3 text-sm font-bold text-slate-800 hover:bg-sky-50"
                >
                  {label}
                </a>
              ))}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className="mt-2 rounded-lg bg-[#006aa6] px-4 py-3 text-center text-sm font-black text-white"
              >
                Solicitar orçamento
              </a>
            </nav>
          </div>
        )}
      </header>

      <main>
        <section id="inicio" className="relative overflow-hidden pt-16">
          <div className="absolute inset-0 bg-[linear-gradient(130deg,#dff5ff_0%,#f8fcff_46%,#ffffff_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-white" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-10 lg:grid-cols-[1fr_0.92fr] lg:px-8 lg:py-14">
            <div className="flex flex-col justify-center">
              <p className="mb-5 w-fit rounded-lg border border-sky-200 bg-white px-4 py-2 text-sm font-black uppercase tracking-[0.16em] text-[#006aa6]">
                Sete Lagoas / MG
              </p>
              <h1 className="max-w-3xl text-[34px] font-black leading-[1.06] text-slate-950 sm:text-5xl lg:text-[56px]">
                Hidráulica veicular com atendimento rápido e serviço bem feito.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Manutenção, reparo e componentes para direção hidráulica, caminhões,
                máquinas e frotas. Simples, técnico e direto ao ponto.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#ef2d35] px-6 py-4 text-base font-black text-white shadow-xl shadow-red-900/20 transition hover:-translate-y-0.5 hover:bg-[#d91f28]"
                >
                  Chamar no WhatsApp
                  <Phone size={19} />
                </a>
                <a
                  href="#servicos"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#006aa6]/20 bg-white px-6 py-4 text-base font-black text-[#006aa6] transition hover:-translate-y-0.5 hover:border-[#006aa6]/40 hover:bg-sky-50"
                >
                  Ver serviços
                  <ArrowRight size={19} />
                </a>
              </div>
            </div>

            <div className="relative min-h-[280px] overflow-hidden rounded-lg bg-[#063f66] text-white shadow-2xl shadow-sky-950/20 sm:min-h-[390px]">
              <PhotoCarousel
                activePhoto={activePhoto}
                availablePhotos={availablePhotos}
                onMissingPhoto={(src) => {
                  setAvailablePhotos((photos) => photos.filter((photo) => photo !== src));
                  setActivePhoto(0);
                }}
                onSelect={setActivePhoto}
              />
            </div>
          </div>
        </section>

        <section id="servicos" className="bg-white py-16 lg:py-20">
          <SectionIntro
            eyebrow="Serviços"
            title="Serviços para linha leve, pesada e equipamentos"
            text="Conteúdo recuperado do site antigo, agora em um formato mais atual e fácil de ler no celular."
          />

          <div className="mx-auto mt-10 grid max-w-7xl gap-4 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-lg border border-sky-100 bg-[#f7fcff] p-6 transition hover:-translate-y-1 hover:border-[#7bd2f0] hover:shadow-xl hover:shadow-sky-950/10"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[#006aa6] text-white">
                  <service.icon size={24} />
                </div>
                <h3 className="text-xl font-black text-slate-950">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{service.text}</p>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-12 grid max-w-7xl gap-4 px-5 lg:grid-cols-2 lg:px-8">
            {serviceDetails.map((service) => (
              <article
                key={service.title}
                className="grid gap-5 overflow-hidden rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:grid-cols-[1fr_190px] sm:items-center"
              >
                <div>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#f5fbff] text-[#006aa6]">
                    <service.icon size={24} />
                  </div>
                  <h3 className="text-xl font-black text-slate-950">{service.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{service.text}</p>
                </div>
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-36 w-full object-contain sm:h-40"
                  loading="lazy"
                />
              </article>
            ))}
          </div>
        </section>

        <section id="produtos" className="bg-[#063f66] py-16 text-white lg:py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#7bd2f0]">
                Produtos
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
                Componentes hidráulicos para reposição e manutenção.
              </h2>
              <p className="mt-5 text-lg leading-8 text-sky-50/85">
                Disponibilizamos produtos das linhas DHB, ZF do Brasil, Bosch, Parker,
                Indisa, Hidrodinâmica e TRW Automotive.
              </p>
              <p className="mt-4 text-base leading-7 text-sky-50/75">
                Somos especializados em componentes hidráulicos para carros, caminhões e
                máquinas agrícolas, com os requisitos necessários para executar serviços
                com total profissionalismo.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {productCatalog.map((product) => (
                <article
                  key={product.title}
                  className="grid min-h-72 grid-rows-[150px_auto] rounded-lg bg-white text-slate-950 shadow-xl shadow-sky-950/10"
                >
                  <div className="flex items-center justify-center border-b border-slate-100 p-4">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-full w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-black leading-snug">{product.title}</h3>
                    <p className="mt-3 text-sm font-medium leading-6 text-slate-600">
                      {product.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="empresa" className="bg-[#f5fbff] py-16 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1fr_0.9fr] lg:px-8">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#006aa6]">
                Empresa
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
                Mais de 25 anos de experiência em hidráulica.
              </h2>
              <div className="mt-5 grid gap-4 text-base leading-8 text-slate-600 sm:text-lg">
                <p>
                  Há mais de 25 anos no mercado, a Hidrau Seven atua no segmento de
                  reparação de sistemas hidráulicos e direção hidráulica com uma meta
                  fundamental: conquistar clientes por meio de trabalho honesto, com
                  qualidade, garantia e preço justo.
                </p>
                <p>
                  Nosso objetivo principal não é apenas vender peças e serviços.
                  Preocupamo-nos em efetuar uma avaliação precisa do estado do equipamento
                  ou veículo e dos riscos de segurança, informando o que é necessário para
                  o perfeito funcionamento.
                </p>
                <p>
                  Vendemos e reparamos sistemas hidráulicos de quaisquer fabricantes,
                  atendendo empresas frotistas e clientes particulares com atendimento
                  personalizado e foco no melhor custo-benefício nas reparações.
                </p>
              </div>
            </div>

            <div className="grid gap-3">
              {advantages.map((item) => (
                <div key={item} className="flex items-center gap-4 rounded-lg bg-white p-5 shadow-sm">
                  <CheckCircle2 className="shrink-0 text-[#006aa6]" size={23} />
                  <p className="font-black text-slate-800">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="bg-white py-16 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#006aa6]">
                Contato
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
                Precisa de orçamento ou diagnóstico?
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Envie uma mensagem ou ligue para confirmar atendimento, endereço e
                disponibilidade.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#ef2d35] px-5 py-4 font-black text-white shadow-lg shadow-red-900/15 transition hover:-translate-y-0.5 hover:bg-[#d91f28]"
                >
                  <Headphones size={19} />
                  WhatsApp
                </a>
                <a
                  href={`tel:+55${WHATSAPP_NUMBER}`}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-sky-900/15 px-5 py-4 font-black text-[#006aa6] transition hover:bg-sky-50"
                >
                  <Phone size={19} />
                  Ligar
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-sky-900/15 px-5 py-4 font-black text-[#006aa6] transition hover:bg-sky-50"
                >
                  <MapPin size={19} />
                  Mapa
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-sky-900/15 px-5 py-4 font-black text-[#006aa6] transition hover:bg-sky-50"
                >
                  <InstagramIcon size={19} />
                  Instagram
                </a>
              </div>
            </div>

            <div className="rounded-lg bg-[#063f66] p-6 text-white shadow-xl shadow-sky-950/15">
              <div className="grid gap-4">
                <ContactLine icon={MapPin} text={ADDRESS} />
                <ContactLine icon={Phone} text={`Telefone/WhatsApp: ${PHONE_NUMBER}`} />
                <ContactLine icon={Mail} text={`E-mail: ${EMAIL}`} />
                <ContactLine icon={InstagramIcon} text="@hidrau_seven" />
                <ContactLine icon={Clock} text="Segunda a sexta, horário comercial" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#002c47] py-8 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-5 text-center lg:px-8">
          <p className="text-sm font-bold text-sky-100">
            © {new Date().getFullYear()} Hidrau Seven. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Chamar a Hidrau Seven no WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#ef2d35] text-white shadow-2xl shadow-red-950/35 transition hover:-translate-y-1 hover:bg-[#d91f28]"
      >
        <Phone size={25} />
      </a>
    </div>
  );
}

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  text: string;
};

function SectionIntro({ eyebrow, title, text }: SectionIntroProps) {
  return (
    <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
      <p className="text-sm font-black uppercase tracking-[0.2em] text-[#006aa6]">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">{title}</h2>
      <p className="mt-5 text-lg leading-8 text-slate-600">{text}</p>
    </div>
  );
}

function LogoImage({ className = "" }: { className?: string }) {
  return (
    <img
      src={LOGO_SRC}
      alt="Hidrau Seven Sistemas Hidráulicos"
      className={`block object-contain ${className}`}
      onError={(event) => {
        const wrapper = event.currentTarget.parentElement;
        if (wrapper) {
          wrapper.style.display = "none";
        } else {
          event.currentTarget.style.display = "none";
        }
      }}
    />
  );
}

type PhotoCarouselProps = {
  activePhoto: number;
  availablePhotos: string[];
  onMissingPhoto: (src: string) => void;
  onSelect: (index: number) => void;
};

function PhotoCarousel({
  activePhoto,
  availablePhotos,
  onMissingPhoto,
  onSelect,
}: PhotoCarouselProps) {
  if (availablePhotos.length === 0) {
    return (
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(123,210,240,0.22),transparent_42%),#063f66]">
        <div className="absolute left-6 top-6 rounded-lg bg-white px-4 py-3">
          <LogoImage className="h-14 w-auto max-w-[330px]" />
        </div>
      </div>
    );
  }

  return (
    <div className="group absolute inset-0">
      {availablePhotos.map((src, index) => (
        <img
          key={src}
          src={src}
          alt="Serviço hidráulico realizado pela Hidrau Seven"
          onError={() => onMissingPhoto(src)}
          className={`absolute inset-0 h-full w-full object-cover transition duration-700 ${
            index === activePhoto ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        />
      ))}

      {availablePhotos.length > 1 && (
        <div className="pointer-events-auto absolute right-5 top-5 flex items-center gap-3 rounded-full bg-slate-950/35 px-3 py-2 text-xs font-black text-white opacity-75 backdrop-blur transition hover:opacity-100">
          <span>
            {activePhoto + 1}/{availablePhotos.length}
          </span>
          <div className="flex gap-2">
            {availablePhotos.slice(0, 5).map((src, index) => (
              <button
                key={src}
                type="button"
                aria-label={`Mostrar foto ${index + 1}`}
                onClick={() => onSelect(index)}
                className={`h-2 rounded-full transition ${
                  index === activePhoto ? "w-6 bg-white" : "w-2 bg-white/55 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </div>
      )}

      {availablePhotos.length > 1 && (
        <div className="pointer-events-auto absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4">
          {[-1, 1].map((direction) => (
            <button
              key={direction}
              type="button"
              aria-label={direction < 0 ? "Foto anterior" : "Próxima foto"}
              onClick={() =>
                onSelect(
                  (activePhoto + direction + availablePhotos.length) % availablePhotos.length,
                )
              }
              className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950/35 text-xl font-black text-white opacity-0 backdrop-blur transition hover:bg-slate-950/60 group-hover:opacity-100"
            >
              {direction < 0 ? "‹" : "›"}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

type ContactLineProps = {
  icon: ComponentType<{ className?: string; size?: number }>;
  text: string;
};

function ContactLine({ icon: Icon, text }: ContactLineProps) {
  return (
    <div className="flex min-w-0 gap-4 rounded-lg bg-white p-4 text-slate-950">
      <Icon className="mt-0.5 shrink-0 text-[#006aa6]" size={22} />
      <p className="min-w-0 break-words font-bold leading-6">{text}</p>
    </div>
  );
}

export default App;
