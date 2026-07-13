import { Link } from 'react-router-dom';
import { useAppStore, nodeChildren, nodeRootsForInterest } from '../store/useAppStore';
import { getSeed, INTERESTS } from '../data/interests';
import { UI, t } from '../data/ui';
import type { ExplorationNode } from '../types';

function StatTile({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-center">
      <div className="text-2xl font-bold tabular-nums text-[var(--text)]">{value}</div>
      <div className="mt-0.5 text-[11px] font-medium uppercase tracking-wide text-[var(--text-faint)]">{label}</div>
    </div>
  );
}

function TreeRow({ node, nodes, lang }: { node: ExplorationNode; nodes: Record<string, ExplorationNode>; lang: 'ko' | 'en' }) {
  const children = nodeChildren(nodes, node.id);
  return (
    <div>
      <Link
        to={`/topic/${node.id}`}
        className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm transition hover:bg-[var(--surface-2)]"
        style={{ marginLeft: node.depth * 18 }}
      >
        <span className="text-[var(--border-strong)]">{node.depth > 0 ? '↳' : '•'}</span>
        <span className="text-[var(--text)]">{lang === 'ko' ? node.titleKo : node.titleEn}</span>
        {node.completed && <span className="text-xs text-emerald-600 dark:text-emerald-400">✓</span>}
      </Link>
      {children.map((c) => (
        <TreeRow key={c.id} node={c} nodes={nodes} lang={lang} />
      ))}
    </div>
  );
}

function maxDepthOf(nodes: Record<string, ExplorationNode>): number {
  let max = -1;
  for (const n of Object.values(nodes)) max = Math.max(max, n.depth);
  return max + 1;
}

export default function MapPage() {
  const lang = useAppStore((s) => s.lang);
  const nodes = useAppStore((s) => s.nodes);
  const selected = useAppStore((s) => s.selectedInterests);
  const resetAll = useAppStore((s) => s.resetAll);

  const allNodes = Object.values(nodes);
  const totalTopics = allNodes.length;
  const deepest = totalTopics > 0 ? maxDepthOf(nodes) : 0;
  const completedCount = allNodes.filter((n) => n.completed).length;
  const vocabLearned = allNodes.reduce((sum, n) => {
    const seed = n.seedTopicId ? getSeed(n.seedTopicId) : undefined;
    const seedCount = seed ? seed.vocabulary.filter((_, i) => n.seedVocabChecked[i]).length : 0;
    const customCount = n.customVocab.filter((v) => v.checked).length;
    return sum + seedCount + customCount;
  }, 0);

  let badge: { ko: string; en: string } = UI.map.badgeNone;
  if (deepest >= 4) badge = UI.map.badgeLv3;
  else if (deepest >= 3) badge = UI.map.badgeLv2;
  else if (deepest >= 1) badge = UI.map.badgeLv1;

  function handleReset() {
    if (window.confirm(t(UI.map.resetConfirm, lang))) {
      resetAll();
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="text-2xl font-bold text-[var(--text)]">{t(UI.map.heading, lang)}</h1>
      <p className="mt-1 text-sm text-[var(--text-muted)]">{t(UI.map.subheading, lang)}</p>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <StatTile label={t(UI.map.statTopics, lang)} value={totalTopics} />
        <StatTile label={t(UI.map.statDepth, lang)} value={deepest} />
        <StatTile label={t(UI.map.statCompleted, lang)} value={completedCount} />
        <StatTile label={t(UI.map.statVocab, lang)} value={vocabLearned} />
      </div>

      <div className="mt-4 rounded-full bg-amber-50 px-4 py-2 text-center text-sm font-semibold text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">
        {t(badge, lang)}
      </div>

      <div className="mt-8 flex flex-col gap-8">
        {selected.length === 0 && totalTopics === 0 && (
          <p className="py-10 text-center text-sm text-[var(--text-faint)]">{t(UI.map.empty, lang)}</p>
        )}
        {INTERESTS.filter((i) => selected.includes(i.id)).map((interest) => {
          const roots = nodeRootsForInterest(nodes, interest.id);
          if (roots.length === 0) return null;
          return (
            <section key={interest.id}>
              <div className="flex items-center gap-2">
                <span className={`flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br text-base ${interest.gradient}`}>
                  {interest.emoji}
                </span>
                <h2 className="font-bold text-[var(--text)]">{t(interest.name, lang)}</h2>
              </div>
              <div className="mt-2 flex flex-col gap-0.5 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-3">
                {roots.map((root) => (
                  <TreeRow key={root.id} node={root} nodes={nodes} lang={lang} />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {totalTopics > 0 && (
        <div className="mt-10 text-center">
          <button onClick={handleReset} className="text-xs font-medium text-[var(--text-faint)] hover:text-red-500 hover:underline">
            {t(UI.map.resetButton, lang)}
          </button>
        </div>
      )}
    </div>
  );
}
