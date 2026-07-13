import { Link, useLocation } from 'react-router-dom';
import { useAppStore } from '../store/useAppStore';
import { UI, t } from '../data/ui';

export default function Header() {
  const lang = useAppStore((s) => s.lang);
  const setLang = useAppStore((s) => s.setLang);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-20 border-b border-stone-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2 font-bold text-stone-900">
          <span className="text-xl">🕳️</span>
          <span>{t(UI.appName, lang)}</span>
        </Link>

        <nav className="flex items-center gap-1 text-sm font-medium">
          <Link
            to="/explore"
            className={`rounded-full px-3 py-1.5 transition ${
              location.pathname.startsWith('/explore') || location.pathname.startsWith('/topic')
                ? 'bg-blue-600 text-white'
                : 'text-stone-600 hover:bg-stone-100'
            }`}
          >
            {t(UI.nav.explore, lang)}
          </Link>
          <Link
            to="/map"
            className={`rounded-full px-3 py-1.5 transition ${
              location.pathname === '/map' ? 'bg-blue-600 text-white' : 'text-stone-600 hover:bg-stone-100'
            }`}
          >
            {t(UI.nav.map, lang)}
          </Link>

          <div className="ml-2 flex overflow-hidden rounded-full border border-stone-300 text-xs">
            <button
              onClick={() => setLang('ko')}
              className={`px-2.5 py-1.5 font-semibold transition ${lang === 'ko' ? 'bg-stone-900 text-white' : 'bg-white text-stone-500 hover:bg-stone-100'}`}
            >
              한글
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-2.5 py-1.5 font-semibold transition ${lang === 'en' ? 'bg-stone-900 text-white' : 'bg-white text-stone-500 hover:bg-stone-100'}`}
            >
              EN
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
