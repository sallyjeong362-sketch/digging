import type { ExplorationNode, LocalizedText } from '../types';
import { getSeed } from '../data/interests';

export interface Stats {
  totalTopics: number;
  deepestDepth: number;
  completedBranches: number;
  vocabLearned: number;
  factsLearned: number;
  interestsExplored: number;
  points: number;
}

function nodeVocabLearned(n: ExplorationNode): number {
  const seed = n.seedTopicId ? getSeed(n.seedTopicId) : undefined;
  const seedCount = seed ? seed.vocabulary.filter((_, i) => n.seedVocabChecked[i]).length : 0;
  const customCount = n.customVocab.filter((v) => v.checked).length;
  return seedCount + customCount;
}

function nodeFactsLearned(n: ExplorationNode): number {
  const seed = n.seedTopicId ? getSeed(n.seedTopicId) : undefined;
  const seedCount = seed ? seed.facts.filter((_, i) => n.seedFactsChecked[i]).length : 0;
  const customCount = n.customFacts.filter((f) => f.checked).length;
  return seedCount + customCount;
}

export function computeStats(nodes: Record<string, ExplorationNode>): Stats {
  const all = Object.values(nodes);
  const totalTopics = all.length;
  const deepestDepth = all.reduce((max, n) => Math.max(max, n.depth), -1) + 1;
  const completedBranches = all.filter((n) => n.completed).length;
  const vocabLearned = all.reduce((sum, n) => sum + nodeVocabLearned(n), 0);
  const factsLearned = all.reduce((sum, n) => sum + nodeFactsLearned(n), 0);
  const interestsExplored = new Set(all.map((n) => n.interestId)).size;

  const points =
    totalTopics * 10 +
    vocabLearned * 5 +
    factsLearned * 5 +
    completedBranches * 20 +
    all.filter((n) => n.videoDone).length * 3 +
    all.filter((n) => n.articleDone).length * 3;

  return { totalTopics, deepestDepth, completedBranches, vocabLearned, factsLearned, interestsExplored, points };
}

export interface Level {
  index: number;
  label: LocalizedText;
  threshold: number;
}

export const LEVELS: Level[] = [
  { index: 0, label: { ko: '아직 탐구 전', en: 'Not started yet' }, threshold: 0 },
  { index: 1, label: { ko: '🌱 탐구 새싹', en: '🌱 Curious Sprout' }, threshold: 1 },
  { index: 2, label: { ko: '🌿 파고드는 자', en: '🌿 Deep Digger' }, threshold: 80 },
  { index: 3, label: { ko: '🌳 탐구의 달인', en: '🌳 Master Explorer' }, threshold: 220 },
  { index: 4, label: { ko: '🏆 탐구왕', en: '🏆 Grand Digger' }, threshold: 450 },
];

export function currentLevel(points: number): Level {
  let level = LEVELS[0];
  for (const l of LEVELS) {
    if (points >= l.threshold) level = l;
  }
  return level;
}

export function nextLevel(points: number): Level | null {
  const cur = currentLevel(points);
  return LEVELS.find((l) => l.index === cur.index + 1) ?? null;
}

export interface Badge {
  id: string;
  icon: string;
  name: LocalizedText;
  desc: LocalizedText;
  unlocked: (stats: Stats) => boolean;
}

export const BADGES: Badge[] = [
  {
    id: 'first-dig',
    icon: '🔍',
    name: { ko: '첫 탐구', en: 'First Dig' },
    desc: { ko: '첫 번째 주제를 탐구 시작했어요', en: 'Started your very first topic' },
    unlocked: (s) => s.totalTopics >= 1,
  },
  {
    id: 'depth-3',
    icon: '⛏️',
    name: { ko: '세 번 파고들기', en: 'Three Layers Down' },
    desc: { ko: '한 주제를 깊이 3단계까지 파고들었어요', en: 'Dug a single thread three levels deep' },
    unlocked: (s) => s.deepestDepth >= 3,
  },
  {
    id: 'depth-5',
    icon: '🕳️',
    name: { ko: '깊은 땅굴', en: 'Deep Tunnel' },
    desc: { ko: '한 주제를 깊이 5단계까지 파고들었어요', en: 'Dug a single thread five levels deep' },
    unlocked: (s) => s.deepestDepth >= 5,
  },
  {
    id: 'finisher',
    icon: '🏁',
    name: { ko: '첫 완주', en: 'First Finish' },
    desc: { ko: '하나의 탐구 가지를 끝까지 마무리했어요', en: 'Wrapped up a full exploration branch' },
    unlocked: (s) => s.completedBranches >= 1,
  },
  {
    id: 'vocab-10',
    icon: '📚',
    name: { ko: '단어 수집가', en: 'Word Collector' },
    desc: { ko: '핵심 단어를 10개 익혔어요', en: 'Learned 10 key vocabulary terms' },
    unlocked: (s) => s.vocabLearned >= 10,
  },
  {
    id: 'vocab-30',
    icon: '📖',
    name: { ko: '단어 박사', en: 'Word Scholar' },
    desc: { ko: '핵심 단어를 30개 익혔어요', en: 'Learned 30 key vocabulary terms' },
    unlocked: (s) => s.vocabLearned >= 30,
  },
  {
    id: 'multi-interest',
    icon: '🧭',
    name: { ko: '다방면 탐험가', en: 'Many Directions' },
    desc: { ko: '서로 다른 관심사 3개를 탐구했어요', en: 'Explored 3 different interest categories' },
    unlocked: (s) => s.interestsExplored >= 3,
  },
  {
    id: 'points-200',
    icon: '⚡',
    name: { ko: '탐구 발전소', en: 'Curiosity Engine' },
    desc: { ko: '탐구 포인트 200점을 모았어요', en: 'Earned 200 exploration points' },
    unlocked: (s) => s.points >= 200,
  },
];
