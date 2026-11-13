import type { Metadata } from "next";
import Link from "next/link";
import { SUPPORT_EMAIL } from "@/content/legal";

export const metadata: Metadata = {
  title: "Delete your account",
  description: "How to delete your Gymify account and data.",
};

const DELETE_MAILTO = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent("Delete my Gymify account")}`;

export default function DeleteAccountPage() {
  return (
    <article className="mx-auto w-full max-w-3xl px-4 pt-8 sm:px-6">
      <p className="eyebrow">Gymify</p>
      <h1 className="display mt-2 text-4xl sm:text-5xl">Delete your account</h1>
      <p className="mt-3 text-muted">You can delete your Gymify account and its data at any time.</p>

      <div className="card prose-legal mt-8 p-6 sm:p-10">
        <h2 className="!mt-0">In the app (takes a minute)</h2>
        <ol>
          <li>Open Gymify and log in.</li>
          <li>On the Home screen, tap your initials in the top-right corner.</li>
          <li>Tap <strong>Account &amp; privacy</strong>.</li>
          <li>Scroll to <strong>Delete account</strong>, tap <strong>Delete my account</strong>, enter your password and tap <strong>Delete forever</strong>.</li>
        </ol>

        <h2>Can&apos;t log in?</h2>
        <p>
          Email <a href={DELETE_MAILTO}>{SUPPORT_EMAIL}</a> from the email address you signed up with and ask us to delete your
          account. We will delete it within 30 days and reply to confirm.
        </p>

        <h2>What is deleted</h2>
        <ul>
          <li>Your profile (name, email, body details, goal, injuries and health check outcome).</li>
          <li>Your workouts, logged sets, weekly plan, weight check-ins, body measurements and daily steps.</li>
          <li>Progress photos saved on that phone.</li>
          <li>Coaches: your clients keep their own accounts and are unlinked from you.</li>
        </ul>

        <h2>What is kept</h2>
        <p>
          Nothing is kept after deletion. Copies in our nightly database backups are removed automatically within 30 days.
          See the <Link href="/privacy">privacy policy</Link> for details.
        </p>
      </div>
    </article>
  );
}
