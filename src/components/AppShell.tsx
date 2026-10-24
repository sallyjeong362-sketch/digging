import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { useAppStore } from '../store/useAppStore';
import { UI, t } from '../data/ui';
import { computeStats, currentLevel } from '../lib/gamification';
import { DigMark, IconCompass, IconHome, IconLayers } from './icons';
import ToastHost from './ToastHost';

function LangToggle({ className = '' }: { className?: string }) {
  const lang = useAppStore((s) => s.lang);
  const setLang = useAppStore((s) => s.setLang);
  return (
    <div className={`flex overflow-hidden rounded-full border border-[var(--border-strong)] text-xs ${className}`}>
      <button
        onClick={() => setLang('ko')}
        className={`px-2.5 py-1.5 font-semibold transition ${lang === 'ko' ? 'bg-[var(--ink)] text-[var(--bg)]' : 'bg-[var(--surface)] text-[var(--text-muted)] hover:bg-[var(--surface-2)]'}`}
      >
        한글
      </button>
      <button
        onClick={() => setLang('en')}
        className={`px-2.5 py-1.5 font-semibold transition ${lang === 'en' ? 'bg-[var(--ink)] text-[var(--bg)]' : 'bg-[var(--surface)] text-[var(--text-muted)] hover:bg-[var(--surface-2)]'}`}
      >
        EN
      </button>
    </div>
  );
}

function PointsChip({ points }: { points: number }) {
  const lang = useAppStore((s) => s.lang);
  return (
    <span className="flex items-center gap-1.5 rounded-full bg-[var(--accent-soft)] px-3 py-1.5 text-xs font-bold text-[var(--accent-soft-text)] tabular-nums">
      <span aria-hidden>⚡</span>
      {points}
      <span className="hidden font-medium opacity-70 sm:inline">{t(UI.shell.points, lang)}</span>
    </span>
  );
}

const NAV_ITEMS = [
  { to: '/', label: UI.nav.home, Icon: IconHome, match: (p: string) => p === '/' },
  { to: '/explore', label: UI.nav.explore, Icon: IconCompass, match: (p: string) => p.startsWith('/explore') || p.startsWith('/topic') },
  { to: '/map', label: UI.nav.map, Icon: IconLayers, match: (p: string) => p === '/map' },
];

export default function AppShell() {
  const lang = useAppStore((s) => s.lang);
  const nodes = useAppStore((s) => s.nodes);
  const location = useLocation();
  const stats = computeStats(nodes);
  const level = currentLevel(stats.points);

  return (
    <div className="min-h-screen bg-[var(--bg)] lg:flex">
      {/* Desktop sidebar */}
      <aside className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-64 lg:flex-col lg:border-r lg:border-[var(--border)] lg:bg-[var(--surface)] lg:px-6 lg:py-7">
        <Link to="/" className="flex items-center gap-2.5">
          <DigMark className="h-7 w-7 text-[var(--accent)]" />
          <span className="text-xl font-black tracking-tight text-[var(--text)]">{t(UI.appName, lang)}</span>
        </Link>
        <p className="mt-1.5 text-xs text-[var(--text-faint)]">{t(UI.shell.tagline, lang)}</p>

        <nav className="mt-9 flex flex-col gap-1">
          {NAV_ITEMS.map(({ to, label, Icon, match }) => {
            const active = match(location.pathname);
            return (
              <Link
                key={to}
                to={to}
                className={`flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-semibold transition ${
                  active ? 'bg-[var(--accent-soft)] text-[var(--accent-soft-text)]' : 'text-[var(--text-muted)] hover:bg-[var(--surface-2)]'
                }`}
              >
                <Icon className="h-[18px] w-[18px] shrink-0" />
                {t(label, lang)}
              </Link>
            );
          })}
        </nav>

        <div className="mt-8 rounded-2xl bg-[var(--surface-2)] px-4 py-3.5 text-xs leading-relaxed whitespace-pre-line text-[var(--text-muted)]">
          {t(UI.shell.note, lang)}
        </div>

        <div className="mt-auto flex flex-col gap-3 pt-6">
          <Link
            to="/map"
            className="flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--bg)] px-3.5 py-3 transition hover:border-[var(--accent-soft-border)]"
          >
            <span className="text-xs font-bold text-[var(--text)]">{t(level.label, lang)}</span>
            <PointsChip points={stats.points} />
          </Link>
          <LangToggle />
        </div>
      </aside>

      {/* Mobile top bar */}
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-[var(--border)] bg-[var(--surface)]/95 px-4 py-3 backdrop-blur lg:hidden">
        <Link to="/" className="flex items-center gap-2">
          <DigMark className="h-6 w-6 text-[var(--accent)]" />
          <span className="text-base font-black tracking-tight text-[var(--text)]">{t(UI.appName, lang)}</span>
        </Link>
        <div className="flex items-center gap-2">
          <PointsChip points={stats.points} />
          <LangToggle />
        </div>
      </header>

      <main className="min-w-0 flex-1 pb-20 lg:ml-64 lg:pb-0">
        <Outlet />
      </main>

      {/* Mobile bottom tab bar */}
      <nav
        className="fixed inset-x-0 bottom-0 z-30 flex border-t border-[var(--border)] bg-[var(--surface)]/95 backdrop-blur lg:hidden"
        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      >
        {NAV_ITEMS.map(({ to, label, Icon, match }) => {
          const active = match(location.pathname);
          return (
            <NavLink
              key={to}
              to={to}
              className={`flex flex-1 flex-col items-center gap-1 py-2.5 text-[11px] font-semibold transition ${
                active ? 'text-[var(--accent)]' : 'text-[var(--text-faint)]'
              }`}
            >
              <Icon className="h-5 w-5" />
              {t(label, lang)}
            </NavLink>
          );
        })}
      </nav>

      <ToastHost />
    </div>
  );
}
