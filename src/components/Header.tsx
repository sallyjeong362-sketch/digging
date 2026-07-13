import { Link, useLocation } from 'react-router-dom';
import { useAppStore } from '../store/useAppStore';
import { UI, t } from '../data/ui';

export default function Header() {
  const lang = useAppStore((s) => s.lang);
  const setLang = useAppStore((s) => s.setLang);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-20 border-b border-[var(--border)] bg-[var(--surface)]/90 backdrop-blur">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2 font-bold text-[var(--text)]">
          <span className="text-xl">🕳️</span>
          <span>{t(UI.appName, lang)}</span>
        </Link>

        <nav className="flex items-center gap-1 text-sm font-medium">
          <Link
            to="/explore"
            className={`rounded-full px-3 py-1.5 transition ${
              location.pathname.startsWith('/explore') || location.pathname.startsWith('/topic')
                ? 'bg-[var(--accent)] text-white'
                : 'text-[var(--text-muted)] hover:bg-[var(--surface-2)]'
            }`}
          >
            {t(UI.nav.explore, lang)}
          </Link>
          <Link
            to="/map"
            className={`rounded-full px-3 py-1.5 transition ${
              location.pathname === '/map' ? 'bg-[var(--accent)] text-white' : 'text-[var(--text-muted)] hover:bg-[var(--surface-2)]'
            }`}
          >
            {t(UI.nav.map, lang)}
          </Link>

          <div className="ml-2 flex overflow-hidden rounded-full border border-[var(--border-strong)] text-xs">
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
        </nav>
      </div>
    </header>
  );
}
