import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "@/assets/status-plug-logo.jpeg.asset.json";

const PHONE = "5163875207";
const PHONE_DISPLAY = "516-387-5207";
const WHATSAPP_URL =
  "https://wa.me/15163875207?text=I%27m%20interested%20in%20buying%20an%20Ad";
const TEL_URL = `tel:+1${PHONE}`;
const SMS_URL = `sms:+1${PHONE}`;

const PLANS = [
  { views: "10,000", price: "350", popular: false },
  { views: "15,000", price: "550", popular: false },
  { views: "25,000", price: "650", popular: true },
];

const FEATURES = [
  {
    icon: "users",
    title: "Large Engaged Community",
    body: "We post your ad to an active, real audience that actually watches status — not bots, not dead numbers.",
  },
  {
    icon: "eye",
    title: "Real Views & Real Results",
    body: "Every view is a genuine pair of eyes. You get the exposure you pay for, backed by a community that engages.",
  },
  {
    icon: "rocket",
    title: "Boost Your Brand",
    body: "Get your business in front of thousands fast. More eyes on your offer means more momentum for your brand.",
  },
  {
    icon: "tag",
    title: "Affordable & Effective",
    body: "Simple flat-rate packages. Pick the reach you need, pay one price, and watch the views come in.",
  },
];

function Icon({ name }: { name: string }) {
  const common = "h-6 w-6";
  switch (name) {
    case "users":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "eye":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case "rocket":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z" />
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.27 5.71-1.95 8.95A22 22 0 0 1 17 12l-3 3" />
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.1 5 0 5 0" />
          <path d="M12 15v5s3.03-.55 4-2c1.1-1.62 0-5 0-5" />
        </svg>
      );
    case "tag":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
          <circle cx="7.5" cy="7.5" r="1.2" fill="currentColor" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-1.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      );
    case "phone":
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
        </svg>
      );
    default:
      return null;
  }
}

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#top" className="flex items-center gap-2">
            <img
              src={logoAsset.url}
              alt="Status Plug Ads logo"
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-primary neon-text">
              Status Plug Ads
            </span>
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition hover:brightness-110"
          >
            <Icon name="whatsapp" />
            Advertise now
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden grid-fade">
        <div className="mx-auto max-w-6xl px-4 pt-16 pb-12 sm:pt-24">
          <div className="mx-auto flex max-w-md flex-col items-center text-center">
            <div className="glow-border rounded-full bg-background/40 p-1.5">
              <img
                src={logoAsset.url}
                alt="Status Plug Ads"
                className="h-28 w-28 rounded-full object-cover sm:h-32 sm:w-32"
              />
            </div>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.35em] text-primary neon-text">
              Status Plug Ads
            </p>
            <h1 className="mt-3 text-4xl font-black uppercase leading-[1.05] tracking-tight sm:text-6xl">
              We get your <span className="text-primary neon-text">business</span> seen
            </h1>
            <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
              We put your ad in front of a large, engaged WhatsApp status community.
              Real views from real people — 10K, 15K, or 25K views on demand.
            </p>
            <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-bold text-primary-foreground shadow-[0_0_30px_-6px] shadow-primary transition hover:brightness-110 sm:w-auto"
              >
                <Icon name="whatsapp" />
                I want to advertise
              </a>
              <a
                href={TEL_URL}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-primary/50 px-7 py-3.5 text-base font-bold text-primary transition hover:bg-primary/10 sm:w-auto"
              >
                <Icon name="phone" />
                Call {PHONE_DISPLAY}
              </a>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Or text <span className="font-semibold text-foreground">{PHONE_DISPLAY}</span> to get started.
            </p>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-border/60 bg-card/40">
        <div className="mx-auto grid max-w-6xl grid-cols-3 divide-x divide-border/60">
          {[
            { k: "25K+", v: "Views per post" },
            { k: "100%", v: "Real viewers" },
            { k: "1 day", v: "Turnaround" },
          ].map((s) => (
            <div key={s.v} className="px-3 py-6 text-center">
              <div className="text-2xl font-black text-primary neon-text sm:text-4xl">{s.k}</div>
              <div className="mt-1 text-[0.7rem] font-medium uppercase tracking-wider text-muted-foreground sm:text-xs">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="rates" className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="text-center">
          <span className="inline-block rounded-full bg-primary px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary-foreground">
            Our rates
          </span>
          <h2 className="mt-4 text-3xl font-black uppercase tracking-tight sm:text-5xl">
            Pick your reach
          </h2>
          <p className="mt-3 text-muted-foreground">
            Flat-rate packages. No subscriptions, no surprises.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.views}
              className={
                "relative flex flex-col rounded-2xl p-6 " +
                (plan.popular
                  ? "glow-border bg-card"
                  : "border border-border/70 bg-card/60")
              }
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-primary-foreground">
                  Best value
                </span>
              )}
              <div className="flex items-center gap-2 text-primary">
                <Icon name="eye" />
                <span className="text-sm font-semibold uppercase tracking-wider">
                  Views
                </span>
              </div>
              <div className="mt-4 text-4xl font-black">{plan.views}</div>
              <div className="text-sm text-muted-foreground">status views</div>
              <div className="my-5 h-px bg-border/60" />
              <div className="flex items-end gap-1">
                <span className="text-2xl font-bold text-primary">$</span>
                <span className="text-5xl font-black leading-none">{plan.price}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                One flat price. Posted to our entire community.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  "mt-6 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition " +
                  (plan.popular
                    ? "bg-primary text-primary-foreground hover:brightness-110"
                    : "border border-primary/50 text-primary hover:bg-primary/10")
                }
              >
                <Icon name="whatsapp" />
                Claim this package
              </a>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Want a custom package or recurring posting?{" "}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:underline">
            Message us on WhatsApp
          </a>{" "}
          or call <a href={TEL_URL} className="font-semibold text-primary hover:underline">{PHONE_DISPLAY}</a>.
        </p>
      </section>

      {/* Features */}
      <section className="border-y border-border/60 bg-card/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <div className="text-center">
            <h2 className="text-3xl font-black uppercase tracking-tight sm:text-4xl">
              Why businesses choose us
            </h2>
            <p className="mt-3 text-muted-foreground">
              More views. More exposure. More sales.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-border/70 bg-card/60 p-6 transition hover:border-primary/50"
              >
                <div className="inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                  <Icon name={f.icon} />
                </div>
                <h3 className="mt-4 text-base font-bold uppercase tracking-wide">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="text-center">
          <h2 className="text-3xl font-black uppercase tracking-tight sm:text-4xl">
            How it works
          </h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            { n: "01", t: "Reach out", d: "Message us on WhatsApp or call/text 516-387-5207 with the package you want." },
            { n: "02", t: "Send your ad", d: "Share your image, video, or link. We review it and slot it into the next post." },
            { n: "03", t: "Get seen", d: "We post your ad to our engaged community and the views roll in — fast." },
          ].map((s) => (
            <div key={s.n} className="rounded-2xl border border-border/70 bg-card/60 p-6">
              <div className="text-sm font-black text-primary neon-text">{s.n}</div>
              <h3 className="mt-2 text-lg font-bold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA + QR */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="glow-border rounded-3xl bg-card/80 p-8 sm:p-12">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <h2 className="text-3xl font-black uppercase tracking-tight sm:text-4xl">
                Let's grow together
              </h2>
              <p className="mt-3 max-w-lg text-muted-foreground">
                Ready to put your business in front of thousands? Tap below to open
                WhatsApp — the message is already filled in. Or call/text us directly.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-bold text-primary-foreground shadow-[0_0_30px_-6px] shadow-primary transition hover:brightness-110"
                >
                  <Icon name="whatsapp" />
                  I'm interested in buying an Ad
                </a>
                <a
                  href={SMS_URL}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/50 px-7 py-3.5 text-base font-bold text-primary transition hover:bg-primary/10"
                >
                  <Icon name="phone" />
                  Text {PHONE_DISPLAY}
                </a>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Call or text{" "}
                <a href={TEL_URL} className="font-semibold text-primary hover:underline">
                  {PHONE_DISPLAY}
                </a>{" "}
                — we answer fast.
              </p>
            </div>

            <div className="mx-auto flex w-full max-w-xs flex-col items-center rounded-2xl border border-border/70 bg-background/60 p-5 md:w-56">
              <p className="text-xs font-bold uppercase tracking-widest text-primary">
                Scan to open WhatsApp
              </p>
              <img
                src="/wa-qr.png"
                alt="WhatsApp QR code for 516-387-5207"
                className="mt-3 h-40 w-40 rounded-lg bg-white p-2"
              />
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Message <span className="font-semibold text-foreground">{PHONE_DISPLAY}</span>
                <br />
                The message is already filled in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/60 bg-card/40">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
          <div className="flex items-center gap-2">
            <img
              src={logoAsset.url}
              alt="Status Plug Ads"
              className="h-8 w-8 rounded-full object-cover"
            />
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
              Status Plug Ads
            </span>
          </div>
          <p className="text-center text-xs text-muted-foreground">
            Advertise your business · More views. More exposure. More sales.
            <br />
            Call or text{" "}
            <a href={TEL_URL} className="font-semibold text-primary hover:underline">
              {PHONE_DISPLAY}
            </a>
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-bold text-primary-foreground transition hover:brightness-110"
          >
            <Icon name="whatsapp" />
            WhatsApp us
          </a>
        </div>
      </footer>
    </div>
  );
}
