import Link from "next/link";
import { Logo } from "@/components/brand-mark";
import { SUPPORT_EMAIL } from "@/content/legal";

export const WEB_APP_URL = "https://gym-navigator-app.expo.app";
export const BETA_MAILTO = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent("Gymify Android beta")}&body=${encodeURIComponent(
  "Hi, I'd like to join the Gymify Android beta. My Google Play (Gmail) address is: "
)}`;

export function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-5 sm:px-6">
      <Link href="/" aria-label="Gymify home">
        <Logo />
      </Link>
      <nav className="flex items-center gap-1 text-sm font-semibold sm:gap-2">
        <Link href="/#features" className="hidden rounded-full px-3 py-2 text-muted hover:text-ink sm:inline">
          Features
        </Link>
        <Link href="/#gyms" className="hidden rounded-full px-3 py-2 text-muted hover:text-ink sm:inline">
          For gyms
        </Link>
        <a href={BETA_MAILTO} className="btn btn-primary !px-4 !py-2.5 text-sm">
          Join the beta
        </a>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 sm:grid-cols-[1.4fr_1fr_1fr] sm:px-6">
        <div className="space-y-3">
          <Logo />
          <p className="max-w-xs text-sm text-muted">
            Workouts built for your gym&apos;s equipment, your time and your goal. Made in Pakistan.
          </p>
        </div>
        <div className="space-y-2 text-sm">
          <p className="eyebrow">Legal</p>
          <ul className="space-y-1.5 text-muted">
            <li><Link className="hover:text-ink" href="/privacy">Privacy policy</Link></li>
            <li><Link className="hover:text-ink" href="/terms">Terms of use</Link></li>
            <li><Link className="hover:text-ink" href="/health">Health disclaimer</Link></li>
            <li><Link className="hover:text-ink" href="/delete-account">Delete your account</Link></li>
          </ul>
        </div>
        <div className="space-y-2 text-sm">
          <p className="eyebrow">Contact</p>
          <ul className="space-y-1.5 text-muted">
            <li><a className="hover:text-ink" href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a></li>
            <li><a className="hover:text-ink" href={WEB_APP_URL}>Open the web app</a></li>
          </ul>
        </div>
      </div>
      <p className="pb-8 text-center text-xs text-muted">© {new Date().getFullYear()} Gymify. General fitness guidance, not medical advice. For adults 18+.</p>
    </footer>
  );
}
