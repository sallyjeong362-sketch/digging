export type Lang = 'ko' | 'en';

export interface LocalizedText {
  ko: string;
  en: string;
}

export interface VocabTerm {
  term: LocalizedText;
  definition: LocalizedText;
}

/** A curated starting point for deep exploration within an interest. */
export interface TopicSeed {
  id: string;
  interestId: string;
  title: LocalizedText;
  blurb: LocalizedText;
  vocabulary: VocabTerm[];
  facts: LocalizedText[];
  followUps: LocalizedText[];
}

export interface Interest {
  id: string;
  name: LocalizedText;
  emoji: string;
  gradient: string;
  seedTopicIds: string[];
}

export interface CustomVocabItem {
  id: string;
  term: string;
  definition: string;
  checked: boolean;
}

export interface CustomFactItem {
  id: string;
  text: string;
  checked: boolean;
}

/** A node the student has actually visited/created while digging — the live exploration tree. */
export interface ExplorationNode {
  id: string;
  interestId: string;
  seedTopicId: string | null;
  parentId: string | null;
  depth: number;
  titleKo: string;
  titleEn: string;
  createdAt: number;
  videoDone: boolean;
  articleDone: boolean;
  seedVocabChecked: Record<number, boolean>;
  seedFactsChecked: Record<number, boolean>;
  customVocab: CustomVocabItem[];
  customFacts: CustomFactItem[];
  reflection: string;
  completed: boolean;
}
