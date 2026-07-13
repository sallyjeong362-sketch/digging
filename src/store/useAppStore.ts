import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { ExplorationNode, Lang } from '../types';
import { getSeed } from '../data/interests';

function newId(): string {
  return crypto.randomUUID();
}

interface AppState {
  lang: Lang;
  setLang: (lang: Lang) => void;

  selectedInterests: string[];
  toggleInterest: (id: string) => void;
  hasChosenInterests: boolean;
  confirmInterests: () => void;

  nodes: Record<string, ExplorationNode>;

  createNodeFromSeed: (seedId: string, parentId: string | null) => string;
  createCustomNode: (interestId: string, titleKo: string, titleEn: string, parentId: string | null) => string;

  updateNode: (id: string, patch: Partial<ExplorationNode>) => void;
  toggleSeedVocab: (nodeId: string, idx: number) => void;
  toggleSeedFact: (nodeId: string, idx: number) => void;
  addCustomVocab: (nodeId: string, term: string, definition: string) => void;
  toggleCustomVocab: (nodeId: string, itemId: string) => void;
  addCustomFact: (nodeId: string, text: string) => void;
  toggleCustomFact: (nodeId: string, itemId: string) => void;
  setReflection: (nodeId: string, text: string) => void;
  markCompleted: (nodeId: string, completed: boolean) => void;

  resetAll: () => void;
}

function childCount(nodes: Record<string, ExplorationNode>, parentId: string): number {
  return Object.values(nodes).filter((n) => n.parentId === parentId).length;
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      lang: 'ko',
      setLang: (lang) => set({ lang }),

      selectedInterests: [],
      hasChosenInterests: false,
      toggleInterest: (id) =>
        set((state) => ({
          selectedInterests: state.selectedInterests.includes(id)
            ? state.selectedInterests.filter((x) => x !== id)
            : [...state.selectedInterests, id],
        })),
      confirmInterests: () => set({ hasChosenInterests: true }),

      nodes: {},

      createNodeFromSeed: (seedId, parentId) => {
        const seed = getSeed(seedId);
        if (!seed) throw new Error(`Unknown seed: ${seedId}`);
        const parent = parentId ? get().nodes[parentId] : null;
        const id = newId();
        const node: ExplorationNode = {
          id,
          interestId: seed.interestId,
          seedTopicId: seed.id,
          parentId,
          depth: parent ? parent.depth + 1 : 0,
          titleKo: seed.title.ko,
          titleEn: seed.title.en,
          createdAt: Date.now(),
          videoDone: false,
          articleDone: false,
          seedVocabChecked: {},
          seedFactsChecked: {},
          customVocab: [],
          customFacts: [],
          reflection: '',
          completed: false,
        };
        set((state) => ({ nodes: { ...state.nodes, [id]: node } }));
        return id;
      },

      createCustomNode: (interestId, titleKo, titleEn, parentId) => {
        const parent = parentId ? get().nodes[parentId] : null;
        const id = newId();
        const node: ExplorationNode = {
          id,
          interestId,
          seedTopicId: null,
          parentId,
          depth: parent ? parent.depth + 1 : 0,
          titleKo,
          titleEn,
          createdAt: Date.now(),
          videoDone: false,
          articleDone: false,
          seedVocabChecked: {},
          seedFactsChecked: {},
          customVocab: [],
          customFacts: [],
          reflection: '',
          completed: false,
        };
        set((state) => ({ nodes: { ...state.nodes, [id]: node } }));
        return id;
      },

      updateNode: (id, patch) =>
        set((state) => ({
          nodes: { ...state.nodes, [id]: { ...state.nodes[id], ...patch } },
        })),

      toggleSeedVocab: (nodeId, idx) =>
        set((state) => {
          const node = state.nodes[nodeId];
          if (!node) return state;
          return {
            nodes: {
              ...state.nodes,
              [nodeId]: {
                ...node,
                seedVocabChecked: { ...node.seedVocabChecked, [idx]: !node.seedVocabChecked[idx] },
              },
            },
          };
        }),

      toggleSeedFact: (nodeId, idx) =>
        set((state) => {
          const node = state.nodes[nodeId];
          if (!node) return state;
          return {
            nodes: {
              ...state.nodes,
              [nodeId]: {
                ...node,
                seedFactsChecked: { ...node.seedFactsChecked, [idx]: !node.seedFactsChecked[idx] },
              },
            },
          };
        }),

      addCustomVocab: (nodeId, term, definition) =>
        set((state) => {
          const node = state.nodes[nodeId];
          if (!node || !term.trim()) return state;
          return {
            nodes: {
              ...state.nodes,
              [nodeId]: {
                ...node,
                customVocab: [...node.customVocab, { id: newId(), term: term.trim(), definition: definition.trim(), checked: false }],
              },
            },
          };
        }),

      toggleCustomVocab: (nodeId, itemId) =>
        set((state) => {
          const node = state.nodes[nodeId];
          if (!node) return state;
          return {
            nodes: {
              ...state.nodes,
              [nodeId]: {
                ...node,
                customVocab: node.customVocab.map((v) => (v.id === itemId ? { ...v, checked: !v.checked } : v)),
              },
            },
          };
        }),

      addCustomFact: (nodeId, text) =>
        set((state) => {
          const node = state.nodes[nodeId];
          if (!node || !text.trim()) return state;
          return {
            nodes: {
              ...state.nodes,
              [nodeId]: {
                ...node,
                customFacts: [...node.customFacts, { id: newId(), text: text.trim(), checked: false }],
              },
            },
          };
        }),

      toggleCustomFact: (nodeId, itemId) =>
        set((state) => {
          const node = state.nodes[nodeId];
          if (!node) return state;
          return {
            nodes: {
              ...state.nodes,
              [nodeId]: {
                ...node,
                customFacts: node.customFacts.map((f) => (f.id === itemId ? { ...f, checked: !f.checked } : f)),
              },
            },
          };
        }),

      setReflection: (nodeId, text) =>
        set((state) => {
          const node = state.nodes[nodeId];
          if (!node) return state;
          return { nodes: { ...state.nodes, [nodeId]: { ...node, reflection: text } } };
        }),

      markCompleted: (nodeId, completed) =>
        set((state) => {
          const node = state.nodes[nodeId];
          if (!node) return state;
          return { nodes: { ...state.nodes, [nodeId]: { ...node, completed } } };
        }),

      resetAll: () => set({ nodes: {}, selectedInterests: [], hasChosenInterests: false }),
    }),
    { name: 'digging-app-state' },
  ),
);

export function nodeChildren(nodes: Record<string, ExplorationNode>, parentId: string): ExplorationNode[] {
  return Object.values(nodes)
    .filter((n) => n.parentId === parentId)
    .sort((a, b) => a.createdAt - b.createdAt);
}

export function nodeRootsForInterest(nodes: Record<string, ExplorationNode>, interestId: string): ExplorationNode[] {
  return Object.values(nodes)
    .filter((n) => n.parentId === null && n.interestId === interestId)
    .sort((a, b) => a.createdAt - b.createdAt);
}

export { childCount };
