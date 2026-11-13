// Same drawing as the app's BrandMark (gym-navigator-front-app/src/components/brand-mark.tsx).
const PLATES = [
  { x: 40, y: 58, width: 24, height: 84, rx: 12 },
  { x: 136, y: 58, width: 24, height: 84, rx: 12 },
  { x: 24, y: 74, width: 18, height: 52, rx: 9 },
  { x: 158, y: 74, width: 18, height: 52, rx: 9 },
];

export function BrandMark({ size = 40, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" className={className} aria-hidden="true">
      <g transform="rotate(-30 100 100)">
        <g fill="#FFF6EC" stroke="#FFF6EC" strokeWidth={14} strokeLinejoin="round">
          <rect x={58} y={91} width={84} height={18} rx={9} />
          {PLATES.map((p, i) => (
            <rect key={i} {...p} />
          ))}
        </g>
        <g fill="#FF6B1A">
          {PLATES.map((p, i) => (
            <rect key={i} {...p} />
          ))}
        </g>
      </g>
    </svg>
  );
}

export function Logo() {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span className="grid size-10 place-items-center rounded-xl bg-brand">
        <BrandMark size={32} />
      </span>
      <span className="display text-2xl text-ink">Gymify</span>
    </span>
  );
}
