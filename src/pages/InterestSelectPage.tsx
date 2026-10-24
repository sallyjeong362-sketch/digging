import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../store/useAppStore';
import { INTERESTS } from '../data/interests';
import { UI, t } from '../data/ui';
import Hero from '../components/Hero';

export default function InterestSelectPage() {
  const lang = useAppStore((s) => s.lang);
  const selected = useAppStore((s) => s.selectedInterests);
  const toggleInterest = useAppStore((s) => s.toggleInterest);
  const confirmInterests = useAppStore((s) => s.confirmInterests);
  const navigate = useNavigate();

  function handleStart() {
    confirmInterests();
    navigate('/explore');
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 sm:py-10">
      <Hero />

      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4">
        {INTERESTS.map((interest) => {
          const isSelected = selected.includes(interest.id);
          return (
            <button
              key={interest.id}
              onClick={() => toggleInterest(interest.id)}
              aria-pressed={isSelected}
              style={{ ['--cat-tint' as string]: interest.tint, ['--cat-tint-dark' as string]: interest.tintDark }}
              className={`group overflow-hidden rounded-2xl border-2 bg-[var(--surface)] text-left transition ${
                isSelected ? 'border-[var(--accent)] shadow-md' : 'border-[var(--border)] hover:border-[var(--border-strong)] hover:shadow-sm'
              }`}
            >
              <div className="category-art relative flex h-20 items-center justify-center sm:h-24">
                <span className="rotate-[-8deg] text-4xl drop-shadow-sm transition duration-200 group-hover:rotate-0 group-hover:scale-110 sm:text-5xl">
                  {interest.emoji}
                </span>
                {isSelected && (
                  <span className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--accent)] text-[11px] font-bold text-white shadow">
                    ✓
                  </span>
                )}
              </div>
              <div className="px-2.5 py-2.5 text-center sm:px-3">
                <span className="text-xs font-bold text-[var(--text)] sm:text-sm">{t(interest.name, lang)}</span>
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-10 flex flex-col items-center gap-3">
        <button
          onClick={handleStart}
          disabled={selected.length === 0}
          className="rounded-full bg-[var(--accent)] px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-[var(--accent)]/20 transition enabled:hover:bg-[var(--accent-hover)] enabled:hover:shadow-xl disabled:cursor-not-allowed disabled:bg-[var(--border-strong)] disabled:text-[var(--text-faint)] disabled:shadow-none"
        >
          {t(UI.home.cta, lang)} {selected.length > 0 && `(${selected.length}${t(UI.home.selectedCount, lang)})`}
        </button>
        <p className="text-xs text-[var(--text-faint)]">{t(UI.home.changeLater, lang)}</p>
      </div>
    </div>
  );
}
