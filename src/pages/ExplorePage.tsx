import { Link, useNavigate } from 'react-router-dom';
import { useAppStore, nodeRootsForInterest, nodeChildren } from '../store/useAppStore';
import { getInterest, getSeedsForInterest } from '../data/interests';
import { UI, t } from '../data/ui';

function countDescendants(nodes: ReturnType<typeof useAppStore.getState>['nodes'], rootId: string): number {
  let count = 1;
  for (const child of nodeChildren(nodes, rootId)) {
    count += countDescendants(nodes, child.id);
  }
  return count;
}

function maxDepth(nodes: ReturnType<typeof useAppStore.getState>['nodes'], rootId: string): number {
  const root = nodes[rootId];
  let deepest = root.depth;
  for (const child of nodeChildren(nodes, rootId)) {
    deepest = Math.max(deepest, maxDepth(nodes, child.id));
  }
  return deepest;
}

export default function ExplorePage() {
  const lang = useAppStore((s) => s.lang);
  const selected = useAppStore((s) => s.selectedInterests);
  const nodes = useAppStore((s) => s.nodes);
  const createNodeFromSeed = useAppStore((s) => s.createNodeFromSeed);
  const navigate = useNavigate();

  function startSeed(seedId: string) {
    const id = createNodeFromSeed(seedId, null);
    navigate(`/topic/${id}`);
  }

  if (selected.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 text-center">
        <p className="text-[var(--text-muted)]">{t(UI.explore.emptyState, lang)}</p>
        <Link
          to="/"
          className="mt-4 inline-block rounded-full bg-[var(--accent)] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[var(--accent-hover)]"
        >
          {t(UI.explore.goHome, lang)}
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 sm:py-10">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-black tracking-tight text-[var(--text)] sm:text-2xl">{t(UI.explore.heading, lang)}</h1>
        <Link to="/" className="text-xs font-semibold text-[var(--link)] hover:underline">
          {t(UI.explore.editInterests, lang)}
        </Link>
      </div>

      <div className="mt-8 flex flex-col gap-11">
        {selected.map((interestId) => {
          const interest = getInterest(interestId);
          if (!interest) return null;
          const seeds = getSeedsForInterest(interestId);
          const roots = nodeRootsForInterest(nodes, interestId);
          const startedSeedIds = new Set(roots.map((r) => r.seedTopicId).filter(Boolean));

          return (
            <section key={interestId}>
              <div
                className="flex items-center gap-2.5"
                style={{ ['--cat-tint' as string]: interest.tint, ['--cat-tint-dark' as string]: interest.tintDark }}
              >
                <span className="category-art flex h-9 w-9 items-center justify-center rounded-xl text-lg">{interest.emoji}</span>
                <h2 className="text-lg font-bold text-[var(--text)]">{t(interest.name, lang)}</h2>
              </div>

              <div className="mt-3 grid gap-3.5 sm:grid-cols-2">
                {seeds
                  .filter((seed) => !startedSeedIds.has(seed.id))
                  .map((seed) => (
                    <button
                      key={seed.id}
                      onClick={() => startSeed(seed.id)}
                      style={{ ['--cat-tint' as string]: interest.tint, ['--cat-tint-dark' as string]: interest.tintDark }}
                      className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] text-left transition hover:-translate-y-0.5 hover:border-[var(--accent-soft-border)] hover:shadow-lg"
                    >
                      <div className="category-art flex h-16 items-center px-4">
                        <span className="text-3xl drop-shadow-sm transition group-hover:scale-110">{interest.emoji}</span>
                      </div>
                      <div className="p-4">
                        <span className="font-bold text-[var(--text)]">{t(seed.title, lang)}</span>
                        <p className="mt-1 text-xs leading-relaxed text-[var(--text-muted)]">{t(seed.blurb, lang)}</p>
                        <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[var(--link)]">
                          {t(UI.explore.startButton, lang)}
                        </span>
                      </div>
                    </button>
                  ))}
              </div>

              {roots.length > 0 && (
                <div className="mt-4">
                  <p className="mb-2 text-xs font-bold uppercase tracking-wide text-[var(--text-faint)]">
                    {t(UI.explore.myBranches, lang)}
                  </p>
                  <div className="flex flex-col gap-2">
                    {roots.map((root) => (
                      <Link
                        key={root.id}
                        to={`/topic/${root.id}`}
                        className="flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--surface-2)] px-4 py-3 text-sm transition hover:border-[var(--accent-soft-border)] hover:bg-[var(--surface)]"
                      >
                        <span className="font-semibold text-[var(--text)]">
                          {lang === 'ko' ? root.titleKo : root.titleEn}
                        </span>
                        <span className="flex items-center gap-2 text-xs text-[var(--text-faint)]">
                          {root.completed && <span className="font-semibold text-[var(--accent-2)]">{t(UI.topic.finished, lang)}</span>}
                          <span className="tabular-nums">{countDescendants(nodes, root.id)} · {t(UI.explore.depthLabel, lang)} {maxDepth(nodes, root.id) + 1}</span>
                          <span className="font-bold text-[var(--link)]">{t(UI.explore.continueButton, lang)}</span>
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}
