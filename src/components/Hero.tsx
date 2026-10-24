import { useAppStore } from '../store/useAppStore';
import { UI, t } from '../data/ui';

/** A CSS-built cross-section of earth: the hero image for the home page, tying
 * the app's visual identity directly to its core mechanic (digging deeper). */
function StrataArt() {
  return (
    <div className="relative mx-auto aspect-[4/3] w-full max-w-[280px] overflow-hidden rounded-2xl sm:max-w-none">
      {/* sky */}
      <div className="absolute inset-x-0 top-0 h-[32%] bg-gradient-to-b from-[var(--accent-2-soft)] to-[var(--accent-2-soft)]" />
      {/* strata bands */}
      <div className="absolute inset-x-0 top-[32%] h-[17%] bg-[var(--accent-2)] opacity-80" />
      <div className="absolute inset-x-0 top-[49%] h-[17%] bg-[var(--ink)] opacity-[0.55]" />
      <div className="absolute inset-x-0 top-[66%] h-[17%] bg-[var(--ink)] opacity-75" />
      <div className="absolute inset-x-0 top-[83%] h-[17%] bg-[var(--ink)]" />

      {/* dig tunnel carved down to the glow */}
      <div className="absolute left-1/2 top-0 h-[78%] w-[22%] -translate-x-1/2 rounded-b-[999px] bg-[var(--bg)]" />

      {/* curiosity spark at the bottom of the tunnel */}
      <div
        className="absolute left-1/2 top-[70%] h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full blur-md"
        style={{ background: 'radial-gradient(circle, var(--accent) 0%, transparent 72%)' }}
      />
      <span className="absolute left-1/2 top-[70%] -translate-x-1/2 -translate-y-1/2 text-3xl">✨</span>

      {/* floating curiosity marks above ground */}
      <span className="absolute left-[12%] top-[9%] rotate-[-10deg] text-xl font-black text-[var(--surface)] opacity-80">?</span>
      <span className="absolute right-[16%] top-[16%] rotate-[8deg] text-base text-[var(--surface)] opacity-70">✦</span>
      <span className="absolute left-[22%] top-[20%] text-sm text-[var(--surface)] opacity-60">✦</span>

      {/* grass tufts along the surface line */}
      <div className="absolute inset-x-0 top-[29%] flex justify-between px-[8%] text-[var(--accent-2-soft-text)] opacity-70">
        <span>⌃</span>
        <span>⌃</span>
        <span>⌃</span>
        <span>⌃</span>
        <span>⌃</span>
      </div>
    </div>
  );
}

export default function Hero() {
  const lang = useAppStore((s) => s.lang);
  return (
    <div className="overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)]">
      <div className="flex flex-col items-center gap-6 p-6 sm:flex-row sm:gap-8 sm:p-8">
        <div className="order-2 flex-1 sm:order-1">
          <p className="text-xs font-bold tracking-[0.18em] text-[var(--accent)] uppercase">Digging</p>
          <h1 className="mt-2 text-balance text-2xl font-black leading-tight tracking-tight text-[var(--text)] sm:text-3xl">
            {t(UI.home.heading, lang)}
          </h1>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--text-muted)]">{t(UI.home.subheading, lang)}</p>
        </div>
        <div className="order-1 w-full shrink-0 sm:order-2 sm:w-[260px]">
          <StrataArt />
        </div>
      </div>
    </div>
  );
}
