import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAppStore, nodeChildren } from '../store/useAppStore';
import { getInterest, getSeed } from '../data/interests';
import { UI, t } from '../data/ui';
import { youtubeSearchUrl, wikipediaSearchUrl } from '../lib/links';
import { getTrail } from '../lib/tree';

function Checkbox({ checked, onChange, label }: { checked: boolean; onChange: () => void; label: string }) {
  return (
    <label className="flex cursor-pointer items-start gap-2.5 rounded-lg px-2 py-1.5 text-sm transition hover:bg-[var(--surface-2)]">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--accent)]"
      />
      <span className={checked ? 'text-[var(--text-faint)] line-through' : 'text-[var(--text)]'}>{label}</span>
    </label>
  );
}

function SectionCard({ title, desc, children }: { title: string; desc?: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm">
      <h2 className="text-base font-bold text-[var(--text)]">{title}</h2>
      {desc && <p className="mt-1 text-xs leading-relaxed text-[var(--text-muted)]">{desc}</p>}
      <div className="mt-4">{children}</div>
    </section>
  );
}

export default function TopicPage() {
  const { nodeId } = useParams<{ nodeId: string }>();
  const lang = useAppStore((s) => s.lang);
  const nodes = useAppStore((s) => s.nodes);
  const updateNode = useAppStore((s) => s.updateNode);
  const toggleSeedVocab = useAppStore((s) => s.toggleSeedVocab);
  const toggleSeedFact = useAppStore((s) => s.toggleSeedFact);
  const addCustomVocab = useAppStore((s) => s.addCustomVocab);
  const toggleCustomVocab = useAppStore((s) => s.toggleCustomVocab);
  const addCustomFact = useAppStore((s) => s.addCustomFact);
  const toggleCustomFact = useAppStore((s) => s.toggleCustomFact);
  const setReflection = useAppStore((s) => s.setReflection);
  const markCompleted = useAppStore((s) => s.markCompleted);
  const createCustomNode = useAppStore((s) => s.createCustomNode);
  const navigate = useNavigate();

  const [newVocabTerm, setNewVocabTerm] = useState('');
  const [newVocabDef, setNewVocabDef] = useState('');
  const [newFact, setNewFact] = useState('');
  const [customFollowUp, setCustomFollowUp] = useState('');

  const node = nodeId ? nodes[nodeId] : undefined;

  if (!node) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 text-center text-[var(--text-muted)]">
        {lang === 'ko' ? '주제를 찾을 수 없어요.' : 'Topic not found.'}
        <div className="mt-4">
          <Link to="/explore" className="text-[var(--link)] hover:underline">{t(UI.topic.backToExplore, lang)}</Link>
        </div>
      </div>
    );
  }

  const interest = getInterest(node.interestId);
  const seed = node.seedTopicId ? getSeed(node.seedTopicId) : undefined;
  const title = lang === 'ko' ? node.titleKo : node.titleEn;
  const trail = getTrail(nodes, node.id);
  const children = nodeChildren(nodes, node.id);
  const videoQuery = lang === 'ko' ? node.titleKo : node.titleEn;

  const seedVocabDoneCount = seed ? seed.vocabulary.filter((_, i) => node.seedVocabChecked[i]).length : 0;
  const customVocabDoneCount = node.customVocab.filter((v) => v.checked).length;
  const totalVocab = (seed?.vocabulary.length ?? 0) + node.customVocab.length;
  const totalVocabDone = seedVocabDoneCount + customVocabDoneCount;

  function handleDigDeeperSuggested(followUp: { ko: string; en: string }) {
    const id = createCustomNode(node!.interestId, followUp.ko, followUp.en, node!.id);
    navigate(`/topic/${id}`);
  }

  function handleDigDeeperCustom() {
    if (!customFollowUp.trim()) return;
    const text = customFollowUp.trim();
    const id = createCustomNode(node!.interestId, text, text, node!.id);
    setCustomFollowUp('');
    navigate(`/topic/${id}`);
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      {/* Trail / breadcrumb */}
      <div className="mb-4 flex flex-wrap items-center gap-1 text-xs text-[var(--text-muted)]">
        <Link to="/explore" className="font-medium text-[var(--link)] hover:underline">
          {interest ? `${interest.emoji} ${t(interest.name, lang)}` : t(UI.nav.explore, lang)}
        </Link>
        {trail.map((n) => (
          <span key={n.id} className="flex items-center gap-1">
            <span className="text-[var(--border-strong)]">/</span>
            {n.id === node.id ? (
              <span className="font-semibold text-[var(--text)]">{lang === 'ko' ? n.titleKo : n.titleEn}</span>
            ) : (
              <Link to={`/topic/${n.id}`} className="hover:underline">
                {lang === 'ko' ? n.titleKo : n.titleEn}
              </Link>
            )}
          </span>
        ))}
      </div>

      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <span className="inline-block rounded-full bg-[var(--surface-2)] px-2.5 py-1 text-[11px] font-semibold text-[var(--text-muted)]">
            {t(UI.explore.depthLabel, lang)} {node.depth + 1}
          </span>
          <h1 className="mt-2 text-2xl font-bold text-[var(--text)]">{title}</h1>
          {seed && <p className="mt-1 text-sm text-[var(--text-muted)]">{t(seed.blurb, lang)}</p>}
        </div>
        {node.completed && (
          <span className="shrink-0 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
            {t(UI.topic.finished, lang)}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-5">
        {/* Step 1 */}
        <SectionCard title={t(UI.topic.step1Title, lang)} desc={t(UI.topic.step1Desc, lang)}>
          <div className="flex flex-col gap-2">
            <a
              href={youtubeSearchUrl(seed ? t(seed.title, lang) : videoQuery)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-[var(--border)] px-3 py-2.5 text-sm font-medium text-[var(--text)] transition hover:border-red-300 hover:bg-red-50 dark:hover:border-red-800 dark:hover:bg-red-950/40"
            >
              {t(UI.topic.watchVideo, lang)}
            </a>
            <a
              href={wikipediaSearchUrl(seed ? t(seed.title, lang) : videoQuery, lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-[var(--border)] px-3 py-2.5 text-sm font-medium text-[var(--text)] transition hover:border-[var(--accent-soft-border)] hover:bg-[var(--accent-soft)]"
            >
              {t(UI.topic.readArticle, lang)}
            </a>
          </div>
          <div className="mt-3 flex flex-col gap-0.5 border-t border-[var(--border)] pt-3">
            <Checkbox checked={node.videoDone} onChange={() => updateNode(node.id, { videoDone: !node.videoDone })} label={t(UI.topic.videoDone, lang)} />
            <Checkbox checked={node.articleDone} onChange={() => updateNode(node.id, { articleDone: !node.articleDone })} label={t(UI.topic.articleDone, lang)} />
          </div>
        </SectionCard>

        {/* Step 2 */}
        <SectionCard title={`${t(UI.topic.step2Title, lang)} (${totalVocabDone}/${totalVocab})`} desc={t(UI.topic.step2Desc, lang)}>
          <div className="flex flex-col divide-y divide-[var(--border)]">
            {seed?.vocabulary.map((v, i) => (
              <div key={i} className="py-1.5">
                <Checkbox
                  checked={!!node.seedVocabChecked[i]}
                  onChange={() => toggleSeedVocab(node.id, i)}
                  label={`${t(v.term, lang)} — ${t(v.definition, lang)}`}
                />
              </div>
            ))}
            {node.customVocab.map((v) => (
              <div key={v.id} className="py-1.5">
                <Checkbox
                  checked={v.checked}
                  onChange={() => toggleCustomVocab(node.id, v.id)}
                  label={`${v.term} — ${v.definition}`}
                />
              </div>
            ))}
          </div>
          <div className="mt-3 flex flex-col gap-2 border-t border-[var(--border)] pt-3 sm:flex-row">
            <input
              value={newVocabTerm}
              onChange={(e) => setNewVocabTerm(e.target.value)}
              placeholder={t(UI.topic.addVocabPlaceholderTerm, lang)}
              className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm text-[var(--text)] placeholder:text-[var(--text-faint)] sm:w-1/3"
            />
            <input
              value={newVocabDef}
              onChange={(e) => setNewVocabDef(e.target.value)}
              placeholder={t(UI.topic.addVocabPlaceholderDef, lang)}
              className="flex-1 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm text-[var(--text)] placeholder:text-[var(--text-faint)]"
            />
            <button
              onClick={() => {
                addCustomVocab(node.id, newVocabTerm, newVocabDef);
                setNewVocabTerm('');
                setNewVocabDef('');
              }}
              disabled={!newVocabTerm.trim()}
              className="rounded-lg bg-[var(--ink)] px-4 py-2 text-sm font-semibold text-[var(--bg)] transition enabled:hover:bg-[var(--ink-hover)] disabled:cursor-not-allowed disabled:bg-[var(--border-strong)] disabled:text-[var(--text-faint)]"
            >
              {t(UI.topic.addButton, lang)}
            </button>
          </div>
        </SectionCard>

        {/* Step 3 */}
        <SectionCard title={t(UI.topic.step3Title, lang)} desc={t(UI.topic.step3Desc, lang)}>
          <div className="flex flex-col divide-y divide-[var(--border)]">
            {seed?.facts.map((f, i) => (
              <div key={i} className="py-1.5">
                <Checkbox checked={!!node.seedFactsChecked[i]} onChange={() => toggleSeedFact(node.id, i)} label={t(f, lang)} />
              </div>
            ))}
            {node.customFacts.map((f) => (
              <div key={f.id} className="py-1.5">
                <Checkbox checked={f.checked} onChange={() => toggleCustomFact(node.id, f.id)} label={f.text} />
              </div>
            ))}
          </div>
          <div className="mt-3 flex gap-2 border-t border-[var(--border)] pt-3">
            <input
              value={newFact}
              onChange={(e) => setNewFact(e.target.value)}
              placeholder={t(UI.topic.addFactPlaceholder, lang)}
              className="flex-1 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm text-[var(--text)] placeholder:text-[var(--text-faint)]"
            />
            <button
              onClick={() => {
                addCustomFact(node.id, newFact);
                setNewFact('');
              }}
              disabled={!newFact.trim()}
              className="rounded-lg bg-[var(--ink)] px-4 py-2 text-sm font-semibold text-[var(--bg)] transition enabled:hover:bg-[var(--ink-hover)] disabled:cursor-not-allowed disabled:bg-[var(--border-strong)] disabled:text-[var(--text-faint)]"
            >
              {t(UI.topic.addButton, lang)}
            </button>
          </div>

          <div className="mt-5 border-t border-[var(--border)] pt-4">
            <label className="mb-1.5 block text-sm font-semibold text-[var(--text)]">{t(UI.topic.reflectionLabel, lang)}</label>
            <textarea
              value={node.reflection}
              onChange={(e) => setReflection(node.id, e.target.value)}
              placeholder={t(UI.topic.reflectionPlaceholder, lang)}
              rows={5}
              className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] p-3 text-sm leading-relaxed text-[var(--text)] placeholder:text-[var(--text-faint)] focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/30"
            />
          </div>
        </SectionCard>

        {/* Step 4 */}
        <SectionCard title={t(UI.topic.step4Title, lang)} desc={t(UI.topic.step4Desc, lang)}>
          {seed && seed.followUps.length > 0 && (
            <div className="mb-3">
              <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-[var(--text-faint)]">
                {t(UI.topic.suggestedFollowUps, lang)}
              </p>
              <div className="flex flex-col gap-2">
                {seed.followUps.map((f, i) => (
                  <button
                    key={i}
                    onClick={() => handleDigDeeperSuggested(f)}
                    className="rounded-lg border border-[var(--accent-soft-border)] bg-[var(--accent-soft)] px-3 py-2 text-left text-sm font-medium text-[var(--accent-soft-text)] transition hover:brightness-95 dark:hover:brightness-125"
                  >
                    {t(f, lang)} →
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-2">
            <input
              value={customFollowUp}
              onChange={(e) => setCustomFollowUp(e.target.value)}
              placeholder={t(UI.topic.customFollowUpPlaceholder, lang)}
              className="flex-1 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm text-[var(--text)] placeholder:text-[var(--text-faint)]"
              onKeyDown={(e) => e.key === 'Enter' && handleDigDeeperCustom()}
            />
            <button
              onClick={handleDigDeeperCustom}
              disabled={!customFollowUp.trim()}
              className="shrink-0 rounded-lg bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white transition enabled:hover:bg-[var(--accent-hover)] disabled:cursor-not-allowed disabled:bg-[var(--border-strong)] disabled:text-[var(--text-faint)]"
            >
              {t(UI.topic.digDeeperButton, lang)}
            </button>
          </div>

          {children.length > 0 && (
            <div className="mt-5 border-t border-[var(--border)] pt-4">
              <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-[var(--text-faint)]">
                {t(UI.topic.childrenExisting, lang)}
              </p>
              <div className="flex flex-col gap-2">
                {children.map((c) => (
                  <Link
                    key={c.id}
                    to={`/topic/${c.id}`}
                    className="flex items-center justify-between rounded-lg border border-[var(--border)] px-3 py-2 text-sm transition hover:border-[var(--accent-soft-border)] hover:bg-[var(--surface-2)]"
                  >
                    <span className="text-[var(--text)]">{lang === 'ko' ? c.titleKo : c.titleEn}</span>
                    {c.completed && <span className="text-xs text-emerald-600 dark:text-emerald-400">{t(UI.topic.finished, lang)}</span>}
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mt-5 border-t border-[var(--border)] pt-4">
            <button
              onClick={() => markCompleted(node.id, !node.completed)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                node.completed
                  ? 'border border-[var(--border-strong)] text-[var(--text-muted)] hover:bg-[var(--surface-2)]'
                  : 'bg-emerald-600 text-white hover:bg-emerald-700'
              }`}
            >
              {node.completed ? t(UI.topic.reopens, lang) : t(UI.topic.finishBranch, lang)}
            </button>
          </div>
        </SectionCard>
      </div>
    </div>
  );
}
