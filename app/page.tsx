import Image from "next/image";

const heroStats = [
  {
    label: "10+ lat doświadczenia",
    value: "Praktyka kliniczna i poradnia"
  },
  {
    label: "1200+ pacjentów",
    value: "indywidualnych planów żywieniowych"
  },
  {
    label: "Holistyczne wsparcie",
    value: "żywienie, diagnostyka i motywacja"
  }
];

const services = [
  {
    title: "Indywidualne plany żywieniowe",
    description:
      "Personalizowane strategie oparte na analizie wyników badań, stylu życia oraz preferencji smakowych."
  },
  {
    title: "Dietoterapia chorób",
    description:
      "Kompleksowa opieka przy insulinooporności, chorobach tarczycy, cukrzycy typu 2, nadciśnieniu oraz zaburzeniach lipidowych."
  },
  {
    title: "Redukcja i praca nad sylwetką",
    description:
      "Skuteczne i trwałe metody redukcji masy ciała z naciskiem na zdrowe nawyki i równowagę hormonalną."
  },
  {
    title: "Żywienie sportowców",
    description:
      "Wsparcie w osiąganiu celów treningowych poprzez planowanie posiłków, suplementację i monitoring wyników."
  }
];

const testimonials = [
  {
    name: "Karolina, 36 lat",
    result:
      "−12 kg w 6 miesięcy, stabilizacja hormonów tarczycy i poprawa energii.",
    quote:
      "Radosław słucha, tłumaczy i motywuje. Plan był dopasowany do mojego trybu życia i wreszcie czuję, że jem normalnie."
  },
  {
    name: "Michał, 42 lata",
    result: "normalizacja wyników lipidowych i spadek ciśnienia.",
    quote:
      "Współpraca obejmowała konsultacje online, analizę badań i jasne zalecenia. Czuję się zaopiekowany i pewny obranej drogi."
  }
];

const process = [
  {
    step: "01",
    title: "Analiza zdrowia i stylu życia",
    description:
      "Zbieram szczegółowy wywiad, analizuję wyniki badań oraz dotychczasowe nawyki żywieniowe."
  },
  {
    step: "02",
    title: "Plan dopasowany do Ciebie",
    description:
      "Otrzymujesz praktyczny jadłospis, zalecenia suplementacyjne oraz strategie radzenia sobie z trudnymi momentami."
  },
  {
    step: "03",
    title: "Stałe wsparcie i monitoring",
    description:
      "Regularne konsultacje, korekty planu i narzędzia do śledzenia postępów pomagają utrzymać motywację."
  }
];

const resources = [
  {
    title: "E-book: Zdrowe nawyki w 21 dni",
    description:
      "Zestaw praktycznych wskazówek, listy zakupów i przykładowych posiłków, aby zacząć zmiany od zaraz.",
    cta: "Pobierz e-book"
  },
  {
    title: "Newsletter 4Slim",
    description:
      "Co tydzień dawka wiedzy i inspiracji: przepisy sezonowe, analiza badań, praktyczne narzędzia.",
    cta: "Zapisz się"
  }
];

export default function HomePage() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 py-16 md:px-10 lg:px-16">
      <section className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="space-y-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-2 text-sm font-medium text-brand">
            Dietetyk kliniczny • Online & stacjonarnie w Lublinie
          </span>
          <h1 className="font-heading text-4xl font-semibold text-slate-900 md:text-5xl lg:text-6xl">
            Skuteczna dietoterapia i trwałe nawyki żywieniowe z 4Slim
          </h1>
          <p className="max-w-xl text-lg text-slate-700">
            Nazywam się Radosław Bernat. Wspieram pacjentów w poprawie zdrowia
            metabolicznego, redukcji wagi oraz budowaniu relacji z jedzeniem.
            Łączę wiedzę kliniczną z praktyką kulinarną i realnym wsparciem.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="https://www.4slim.pl/konsultacje"
              className="rounded-full bg-brand px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-brand-dark"
            >
              Umów konsultację
            </a>
            <a
              href="https://www.4slim.pl/blog"
              className="rounded-full border border-slate-300 px-6 py-3 text-center text-sm font-semibold text-slate-700 transition hover:border-brand hover:text-brand"
            >
              Zobacz materiały edukacyjne
            </a>
          </div>
          <dl className="grid gap-6 sm:grid-cols-3">
            {heroStats.map((item) => (
              <div key={item.label} className="rounded-3xl bg-white p-6 shadow">
                <dt className="text-sm font-semibold uppercase tracking-wide text-brand">
                  {item.label}
                </dt>
                <dd className="mt-2 text-sm text-slate-600">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative flex justify-center">
          <div className="absolute inset-y-10 left-10 hidden w-40 rounded-full bg-brand/20 blur-3xl lg:block" />
          <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=800&q=80"
              alt="Zdrowe odżywianie i konsultacje dietetyczne"
              width={640}
              height={840}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section id="about" className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <h2 className="font-heading text-3xl font-semibold text-slate-900 md:text-4xl">
            Indywidualne podejście i nauka na pierwszym miejscu
          </h2>
          <p className="text-lg text-slate-700">
            Każdy plan żywieniowy tworzę w oparciu o Twoją historię zdrowia,
            badania laboratoryjne oraz codzienność. Stawiam na edukację, bo to
            ona pozwala utrzymać efekty i świadomie reagować na sygnały ciała.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-brand/20 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-brand">
                Holistyczne spojrzenie
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Dieta to nie tylko jadłospis – to praca nad snem, stresem,
                regeneracją oraz aktywnością fizyczną.
              </p>
            </div>
            <div className="rounded-3xl border border-brand/20 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-brand">
                Współpraca krok po kroku
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Otrzymujesz narzędzia do monitoringu, aplikację do raportowania
                posiłków oraz stałą opiekę pomiędzy wizytami.
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-3xl bg-white p-8 shadow-lg">
          <h3 className="text-xl font-semibold text-slate-900">
            Specjalizacje
          </h3>
          <ul className="mt-6 space-y-4 text-sm text-slate-700">
            <li>• Insulinooporność i cukrzyca typu 2</li>
            <li>• Hashimoto i inne choroby tarczycy</li>
            <li>• PCOS i zaburzenia hormonalne</li>
            <li>• Odżywianie kobiet w ciąży i karmiących</li>
            <li>• Wsparcie w budowaniu masy mięśniowej</li>
          </ul>
          <a
            href="mailto:kontakt@4slim.pl"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
          >
            Napisz do mnie
          </a>
        </div>
      </section>

      <section id="services" className="space-y-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-heading text-3xl font-semibold text-slate-900 md:text-4xl">
              Usługi dopasowane do Twoich celów
            </h2>
            <p className="mt-2 max-w-2xl text-lg text-slate-700">
              Współpraca może odbywać się stacjonarnie w Lublinie lub online.
              Każdy program jest dostosowany do realnych możliwości czasowych i
              budżetu.
            </p>
          </div>
          <a
            href="https://www.4slim.pl/cennik"
            className="rounded-full border border-brand px-6 py-3 text-sm font-semibold text-brand transition hover:bg-brand hover:text-white"
          >
            Sprawdź cennik
          </a>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="flex flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow transition hover:-translate-y-1 hover:border-brand/60 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600">{service.description}</p>
              <span className="mt-6 text-sm font-semibold text-brand">
                Poznaj szczegóły →
              </span>
            </article>
          ))}
        </div>
      </section>

      <section id="process" className="space-y-10">
        <h2 className="font-heading text-3xl font-semibold text-slate-900 md:text-4xl">
          Jak wygląda współpraca
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {process.map((item) => (
            <div
              key={item.step}
              className="relative rounded-3xl bg-white p-8 shadow-lg"
            >
              <span className="absolute -top-4 right-6 text-6xl font-bold text-brand/10">
                {item.step}
              </span>
              <h3 className="text-lg font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="testimonials" className="space-y-10">
        <h2 className="font-heading text-3xl font-semibold text-slate-900 md:text-4xl">
          Pacjenci o współpracy
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.name}
              className="flex h-full flex-col rounded-3xl bg-white p-8 shadow-md"
            >
              <p className="text-sm italic text-slate-700">
                “{testimonial.quote}”
              </p>
              <div className="mt-6 border-t border-slate-100 pt-4 text-sm text-slate-600">
                <span className="font-semibold text-slate-900">
                  {testimonial.name}
                </span>
                <br />
                {testimonial.result}
              </div>
            </blockquote>
          ))}
        </div>
      </section>

      <section id="resources" className="grid gap-6 md:grid-cols-2">
        {resources.map((resource) => (
          <div
            key={resource.title}
            className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-brand/5 p-8 shadow-lg"
          >
            <div>
              <h3 className="text-2xl font-semibold text-slate-900">
                {resource.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600">
                {resource.description}
              </p>
            </div>
            <a
              href="https://www.4slim.pl"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
            >
              {resource.cta}
              <span aria-hidden>→</span>
            </a>
          </div>
        ))}
      </section>

      <section
        id="contact"
        className="overflow-hidden rounded-3xl bg-slate-900 p-10 text-white shadow-xl md:p-16"
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-heading text-3xl font-semibold md:text-4xl">
              Umów konsultację startową
            </h2>
            <p className="mt-4 text-sm text-slate-300">
              Pracuję stacjonarnie w gabinecie w Lublinie oraz online. W trakcie
              rozmowy omawiamy Twoje cele, wykonane badania oraz ustalamy plan
              działania na najbliższe tygodnie.
            </p>
            <dl className="mt-6 space-y-3 text-sm">
              <div>
                <dt className="font-semibold text-white">Telefon</dt>
                <dd className="text-slate-300">
                  <a href="tel:+48601329585">+48 601 329 585</a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-white">E-mail</dt>
                <dd className="text-slate-300">
                  <a href="mailto:kontakt@4slim.pl">kontakt@4slim.pl</a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-white">Gabinet</dt>
                <dd className="text-slate-300">
                  4Slim Dietetyk, ul. Lipowa 18, Lublin
                </dd>
              </div>
            </dl>
          </div>
          <form className="space-y-4 rounded-3xl bg-white/10 p-6 backdrop-blur md:p-8">
            <div>
              <label htmlFor="name" className="text-sm font-semibold">
                Imię i nazwisko
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Twoje imię"
                className="mt-2 w-full rounded-full border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:border-brand focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-semibold">
                Adres e-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="kontakt@4slim.pl"
                className="mt-2 w-full rounded-full border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:border-brand focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-semibold">
                Opisz swój cel
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Na czym chcesz się skupić podczas współpracy?"
                className="mt-2 w-full rounded-3xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:border-brand focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
            >
              Wyślij wiadomość
            </button>
            <p className="text-xs text-white/60">
              Formularz ma charakter demonstracyjny. Skontaktuj się bezpośrednio
              e-mailowo lub telefonicznie, aby umówić wizytę.
            </p>
          </form>
        </div>
      </section>

      <footer className="rounded-3xl border border-slate-200 bg-white p-8 text-sm text-slate-600 shadow">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="text-base font-semibold text-slate-900">
              Dietetyk Radosław Bernat • 4Slim
            </span>
            <p className="mt-1 text-xs text-slate-500">
              Profesjonalna opieka dietetyczna i edukacja żywieniowa.
            </p>
          </div>
          <div className="flex gap-6 text-xs font-medium">
            <a href="https://www.4slim.pl/o-mnie" className="hover:text-brand">
              O mnie
            </a>
            <a href="https://www.4slim.pl/blog" className="hover:text-brand">
              Blog
            </a>
            <a href="https://www.4slim.pl/kontakt" className="hover:text-brand">
              Kontakt
            </a>
            <a href="https://www.instagram.com/4slim_dietetyk" className="hover:text-brand">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
