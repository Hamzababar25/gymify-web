import Image from "next/image";
import { BrandMark } from "@/components/brand-mark";
import { BETA_MAILTO, WEB_APP_URL } from "@/components/site-chrome";
import { SUPPORT_EMAIL } from "@/content/legal";

const SHOTS = [
  { src: "/shots/1-home.webp", alt: "Gymify home screen with today's workout and weekly progress" },
  { src: "/shots/2-train.webp", alt: "Pick muscles and minutes; Gymify builds the workout" },
  { src: "/shots/3-workout.webp", alt: "A generated workout with sets, reps and rest times" },
  { src: "/shots/4-exercise.webp", alt: "Exercise screen with form pictures and the next weight to lift" },
  { src: "/shots/5-gym.webp", alt: "Tick the equipment your gym has" },
];

const STEPS = [
  { n: "1", title: "Tick your gym's equipment", body: "Machines, dumbbells, cables, bands or just bodyweight — Gymify only plans what your gym actually has." },
  { n: "2", title: "Pick muscles and minutes", body: "Chest and back in 45 minutes? It builds the session, fits it into your time and adds a warm-up." },
  { n: "3", title: "Train, log, progress", body: "Log weight and reps. Next time it tells you what to lift, and adjusts your weekly sets to how you recover." },
];

const FEATURES = [
  { title: "Built around your gym", body: "Machine taken? Swap to an alternative on other equipment in one tap. Busy gym? It plans for that too." },
  { title: "Progress that keeps going", body: "Next-weight suggestions that follow your gym's plate and dumbbell steps, plus an easier week when stalled lifts or soreness say you need one." },
  { title: "Fits the time you have", body: "Short on time, opposite muscles are paired into supersets so you keep more of your sets." },
  { title: "Listens to your joints", body: "Tell it an exercise hurt and it picks a different one next time." },
  { title: "Calories and steps", body: "Calorie and protein targets from your profile, with your daily steps added to the budget." },
  { title: "Weekly plan and report", body: "A plan for the days you can train, streaks, sets per muscle and a weekly PDF report." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 pt-6 pb-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:pt-12">
        <div>
          <p className="eyebrow">Workout planner · Made in Pakistan</p>
          <h1 className="display mt-4 text-5xl sm:text-6xl lg:text-7xl">
            Your gym. Your time. <span className="text-brand">Your plan.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted">
            Gymify builds every workout from the equipment in your gym, fits it into the minutes you have, and tells you
            what to lift next time.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={BETA_MAILTO} className="btn btn-primary">Join the Android beta</a>
            <a href={WEB_APP_URL} className="btn btn-outline">Try it in your browser</a>
          </div>
          <p className="mt-4 text-sm text-muted">Coming soon to Google Play. Free during the beta.</p>
        </div>
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-lime/50 via-orange/20 to-brand/20 blur-2xl" />
          <Image
            src={SHOTS[1].src}
            alt={SHOTS[1].alt}
            width={540}
            height={916}
            priority
            className="w-full rounded-[2rem] shadow-2xl shadow-brand/20"
          />
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <p className="eyebrow">How it works</p>
        <h2 className="display mt-2 text-4xl sm:text-5xl">Three steps to a plan that fits</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.n} className="card p-6">
              <span className="display grid size-11 place-items-center rounded-full bg-brand text-xl text-cream">{s.n}</span>
              <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-muted">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Screenshots */}
      <section className="mt-20" aria-label="App screenshots">
        <div className="mx-auto flex w-full max-w-6xl snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:px-6">
          {SHOTS.map((s) => (
            <Image
              key={s.src}
              src={s.src}
              alt={s.alt}
              width={540}
              height={916}
              loading="lazy"
              className="w-56 shrink-0 snap-start rounded-3xl shadow-lg shadow-brand/10 sm:w-64"
            />
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto mt-20 w-full max-w-6xl scroll-mt-6 px-4 sm:px-6">
        <p className="eyebrow">Features</p>
        <h2 className="display mt-2 text-4xl sm:text-5xl">A coach in your pocket, not a template</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div key={f.title} className="card p-6">
              <span className="block h-1.5 w-10 rounded-full bg-orange" />
              <h3 className="mt-4 text-lg font-bold">{f.title}</h3>
              <p className="mt-2 text-muted">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gyms and coaches */}
      <section id="gyms" className="mx-auto mt-20 w-full max-w-6xl scroll-mt-6 px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[2rem] bg-brand p-8 text-cream sm:p-12">
          <BrandMark size={280} className="pointer-events-none absolute -right-10 -bottom-20 hidden opacity-90 sm:block" />
          <p className="eyebrow !text-lime">For gyms and coaches</p>
          <h2 className="display mt-2 max-w-2xl text-4xl sm:text-5xl">Give every member a plan that fits your floor</h2>
          <ul className="mt-6 grid max-w-2xl gap-3 text-cream/90">
            <li>• Coaches link clients with a code, see their workouts and progress, and set their weekly plan.</li>
            <li>• Members train on the equipment your gym really has, so plans never send them to a missing machine.</li>
            <li>• A gym leaderboard keeps members coming back.</li>
          </ul>
          <a
            href={`mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent("Gymify for my gym")}`}
            className="btn btn-light mt-8"
          >
            Bring Gymify to your gym
          </a>
        </div>
      </section>

      {/* Safety */}
      <section className="mx-auto mt-20 w-full max-w-3xl px-4 text-center sm:px-6">
        <p className="eyebrow">Safety first</p>
        <h2 className="display mt-2 text-3xl sm:text-4xl">A short health check before your first workout</h2>
        <p className="mt-4 text-muted">
          Its rules follow published guidelines (ACSM, WHO). Gymify gives general fitness guidance, not medical advice — talk
          to a doctor before starting a new exercise or diet plan. For adults 18 and over.
        </p>
      </section>

      {/* Final CTA */}
      <section className="mx-auto mt-20 w-full max-w-6xl px-4 sm:px-6">
        <div className="card flex flex-col items-start justify-between gap-6 p-8 sm:flex-row sm:items-center sm:p-10">
          <div>
            <h2 className="display text-3xl sm:text-4xl">Ready for a plan that fits?</h2>
            <p className="mt-2 text-muted">Email us your Google Play address and we&apos;ll add you to the Android beta.</p>
          </div>
          <a href={BETA_MAILTO} className="btn btn-primary shrink-0">Join the beta</a>
        </div>
      </section>
    </>
  );
}
