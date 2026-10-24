import { Link } from 'react-router-dom';
import { useAppStore, nodeChildren, nodeRootsForInterest } from '../store/useAppStore';
import { INTERESTS } from '../data/interests';
import { UI, t } from '../data/ui';
import { BADGES, computeStats, currentLevel, nextLevel } from '../lib/gamification';
import type { ExplorationNode } from '../types';

function StatTile({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-center">
      <div className="text-2xl font-black tabular-nums text-[var(--text)]">{value}</div>
      <div className="mt-0.5 text-[11px] font-semibold uppercase tracking-wide text-[var(--text-faint)]">{label}</div>
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
        {node.completed && <span className="text-xs font-bold text-[var(--accent-2)]">✓</span>}
      </Link>
      {children.map((c) => (
        <TreeRow key={c.id} node={c} nodes={nodes} lang={lang} />
      ))}
    </div>
  );
}

export default function MapPage() {
  const lang = useAppStore((s) => s.lang);
  const nodes = useAppStore((s) => s.nodes);
  const selected = useAppStore((s) => s.selectedInterests);
  const resetAll = useAppStore((s) => s.resetAll);

  const stats = computeStats(nodes);
  const level = currentLevel(stats.points);
  const next = nextLevel(stats.points);
  const progressPct = next ? Math.min(100, Math.round(((stats.points - level.threshold) / (next.threshold - level.threshold)) * 100)) : 100;

  function handleReset() {
    if (window.confirm(t(UI.map.resetConfirm, lang))) {
      resetAll();
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-6 sm:py-10">
      <h1 className="text-2xl font-black tracking-tight text-[var(--text)]">{t(UI.map.heading, lang)}</h1>
      <p className="mt-1 text-sm text-[var(--text-muted)]">{t(UI.map.subheading, lang)}</p>

      {/* Level card */}
      <div className="mt-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="text-base font-bold text-[var(--text)]">{t(level.label, lang)}</span>
          <span className="flex items-center gap-1 rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-bold text-[var(--accent-soft-text)] tabular-nums">
            ⚡ {stats.points}
          </span>
        </div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-[var(--surface-2)]">
          <div
            className="h-full rounded-full bg-[var(--accent-2)] transition-all"
            style={{ width: `${progressPct}%` }}
          />
        </div>
        <p className="mt-2 text-[11px] font-medium text-[var(--text-faint)]">
          {next ? `${t(level.label, lang)} → ${t(next.label, lang)} · ${next.threshold - stats.points} ${t(UI.map.nextLevelAt, lang)}` : t(UI.map.maxLevel, lang)}
        </p>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <StatTile label={t(UI.map.statTopics, lang)} value={stats.totalTopics} />
        <StatTile label={t(UI.map.statDepth, lang)} value={stats.deepestDepth} />
        <StatTile label={t(UI.map.statCompleted, lang)} value={stats.completedBranches} />
        <StatTile label={t(UI.map.statVocab, lang)} value={stats.vocabLearned} />
      </div>

      {/* Badges */}
      <div className="mt-8">
        <h2 className="text-sm font-bold uppercase tracking-wide text-[var(--text-faint)]">{t(UI.map.badgesHeading, lang)}</h2>
        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {BADGES.map((badge) => {
            const unlocked = badge.unlocked(stats);
            return (
              <div
                key={badge.id}
                className={`flex flex-col items-center gap-1.5 rounded-2xl border p-4 text-center transition ${
                  unlocked ? 'border-[var(--accent-soft-border)] bg-[var(--accent-soft)]' : 'border-[var(--border)] bg-[var(--surface)] opacity-50'
                }`}
              >
                <span className="text-3xl">{unlocked ? badge.icon : '🔒'}</span>
                <span className="text-xs font-bold text-[var(--text)]">{t(badge.name, lang)}</span>
                <span className="text-[10px] leading-snug text-[var(--text-muted)]">
                  {unlocked ? t(badge.desc, lang) : t(UI.map.lockedLabel, lang)}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Exploration tree */}
      <div className="mt-9 flex flex-col gap-8">
        {selected.length === 0 && stats.totalTopics === 0 && (
          <p className="py-10 text-center text-sm text-[var(--text-faint)]">{t(UI.map.empty, lang)}</p>
        )}
        {stats.totalTopics > 0 && (
          <h2 className="text-sm font-bold uppercase tracking-wide text-[var(--text-faint)]">{t(UI.map.treeHeading, lang)}</h2>
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
                <h3 className="font-bold text-[var(--text)]">{t(interest.name, lang)}</h3>
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

      {stats.totalTopics > 0 && (
        <div className="mt-10 text-center">
          <button onClick={handleReset} className="text-xs font-medium text-[var(--text-faint)] hover:text-red-500 hover:underline">
            {t(UI.map.resetButton, lang)}
          </button>
        </div>
      )}
    </div>
  );
}
