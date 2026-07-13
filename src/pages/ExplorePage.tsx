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
        <p className="text-stone-600">{t(UI.explore.emptyState, lang)}</p>
        <Link
          to="/"
          className="mt-4 inline-block rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
        >
          {t(UI.explore.goHome, lang)}
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-stone-900 sm:text-2xl">{t(UI.explore.heading, lang)}</h1>
        <Link to="/" className="text-xs font-medium text-blue-600 hover:underline">
          {t(UI.explore.editInterests, lang)}
        </Link>
      </div>

      <div className="mt-8 flex flex-col gap-10">
        {selected.map((interestId) => {
          const interest = getInterest(interestId);
          if (!interest) return null;
          const seeds = getSeedsForInterest(interestId);
          const roots = nodeRootsForInterest(nodes, interestId);
          const startedSeedIds = new Set(roots.map((r) => r.seedTopicId).filter(Boolean));

          return (
            <section key={interestId}>
              <div className="flex items-center gap-2">
                <span className={`flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br text-lg ${interest.gradient}`}>
                  {interest.emoji}
                </span>
                <h2 className="text-lg font-bold text-stone-900">{t(interest.name, lang)}</h2>
              </div>

              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {seeds
                  .filter((seed) => !startedSeedIds.has(seed.id))
                  .map((seed) => (
                    <button
                      key={seed.id}
                      onClick={() => startSeed(seed.id)}
                      className="flex flex-col items-start gap-1.5 rounded-xl border border-stone-200 bg-white p-4 text-left transition hover:border-blue-300 hover:shadow-sm"
                    >
                      <span className="font-semibold text-stone-900">{t(seed.title, lang)}</span>
                      <span className="text-xs leading-relaxed text-stone-500">{t(seed.blurb, lang)}</span>
                      <span className="mt-1 text-xs font-semibold text-blue-600">{t(UI.explore.startButton, lang)}</span>
                    </button>
                  ))}
              </div>

              {roots.length > 0 && (
                <div className="mt-4">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-stone-400">
                    {t(UI.explore.myBranches, lang)}
                  </p>
                  <div className="flex flex-col gap-2">
                    {roots.map((root) => (
                      <Link
                        key={root.id}
                        to={`/topic/${root.id}`}
                        className="flex items-center justify-between rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm transition hover:border-blue-300 hover:bg-white"
                      >
                        <span className="font-medium text-stone-800">
                          {lang === 'ko' ? root.titleKo : root.titleEn}
                        </span>
                        <span className="flex items-center gap-2 text-xs text-stone-400">
                          {root.completed && <span className="text-emerald-600">{t(UI.topic.finished, lang)}</span>}
                          <span>{countDescendants(nodes, root.id)} · {t(UI.explore.depthLabel, lang)} {maxDepth(nodes, root.id) + 1}</span>
                          <span className="text-blue-600">{t(UI.explore.continueButton, lang)}</span>
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
