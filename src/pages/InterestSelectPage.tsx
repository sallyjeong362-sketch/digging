import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../store/useAppStore';
import { INTERESTS } from '../data/interests';
import { UI, t } from '../data/ui';

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
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-2xl font-bold text-[var(--text)] sm:text-3xl">{t(UI.home.heading, lang)}</h1>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--text-muted)] sm:text-base">
        {t(UI.home.subheading, lang)}
      </p>

      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {INTERESTS.map((interest) => {
          const isSelected = selected.includes(interest.id);
          return (
            <button
              key={interest.id}
              onClick={() => toggleInterest(interest.id)}
              aria-pressed={isSelected}
              className={`group relative flex flex-col items-center justify-center gap-2 rounded-2xl border-2 p-4 text-center transition ${
                isSelected
                  ? 'border-[var(--accent)] bg-[var(--accent-soft)] shadow-sm'
                  : 'border-[var(--border)] bg-[var(--surface)] hover:border-[var(--border-strong)] hover:bg-[var(--surface-2)]'
              }`}
            >
              {isSelected && (
                <span className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--accent)] text-[11px] text-white">
                  ✓
                </span>
              )}
              <span className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br text-2xl ${interest.gradient}`}>
                {interest.emoji}
              </span>
              <span className="text-sm font-semibold text-[var(--text)]">{t(interest.name, lang)}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-10 flex flex-col items-center gap-3">
        <button
          onClick={handleStart}
          disabled={selected.length === 0}
          className="rounded-full bg-[var(--accent)] px-8 py-3 text-base font-semibold text-white shadow transition enabled:hover:bg-[var(--accent-hover)] disabled:cursor-not-allowed disabled:bg-[var(--border-strong)] disabled:text-[var(--text-faint)]"
        >
          {t(UI.home.cta, lang)} {selected.length > 0 && `(${selected.length}${t(UI.home.selectedCount, lang)})`}
        </button>
        <p className="text-xs text-[var(--text-faint)]">{t(UI.home.changeLater, lang)}</p>
      </div>
    </div>
  );
}
