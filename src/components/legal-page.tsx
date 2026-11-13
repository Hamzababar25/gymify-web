import { LEGAL, LEGAL_TITLES, LEGAL_UPDATED, SUPPORT_EMAIL, type LegalDoc } from "@/content/legal";

/** Turns the support email inside a sentence into a mailto link. */
function withEmailLink(text: string) {
  const parts = text.split(SUPPORT_EMAIL);
  return parts.flatMap((part, i) =>
    i === 0
      ? [part]
      : [
          <a key={i} href={`mailto:${SUPPORT_EMAIL}`}>
            {SUPPORT_EMAIL}
          </a>,
          part,
        ]
  );
}

export function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <article className="mx-auto w-full max-w-3xl px-4 pt-8 sm:px-6">
      <p className="eyebrow">Gymify</p>
      <h1 className="display mt-2 text-4xl sm:text-5xl">{LEGAL_TITLES[doc]}</h1>
      <p className="mt-3 text-sm text-muted">Last updated: {LEGAL_UPDATED}</p>
      <div className="card prose-legal mt-8 p-6 sm:p-10 [&>section:first-child>h2]:mt-0">
        {LEGAL[doc].map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.body.length === 1 ? (
              <p>{withEmailLink(section.body[0])}</p>
            ) : (
              <ul>
                {section.body.map((line) => (
                  <li key={line}>{withEmailLink(line)}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </article>
  );
}
