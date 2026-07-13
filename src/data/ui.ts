import type { Lang } from '../types';

export const UI = {
  appName: { ko: 'Digging', en: 'Digging' },
  tagline: {
    ko: '꼬리에 꼬리를 무는 관심사 탐구',
    en: 'Follow your curiosity, one thread at a time',
  },
  nav: {
    explore: { ko: '탐구하기', en: 'Explore' },
    map: { ko: '나의 탐구 지도', en: 'My Map' },
    home: { ko: '홈', en: 'Home' },
  },
  home: {
    heading: { ko: '무엇에 관심이 있나요?', en: 'What are you interested in?' },
    subheading: {
      ko: '유튜브 추천 알고리즘이 참고하는 관심사 카테고리예요. 마음이 가는 주제를 골라보세요. 여러 개를 골라도 좋아요.',
      en: 'These are the same categories YouTube uses to personalize recommendations. Pick whatever pulls you in — you can choose more than one.',
    },
    cta: { ko: '탐구 시작하기', en: 'Start exploring' },
    selectedCount: { ko: '개 선택됨', en: 'selected' },
    changeLater: {
      ko: '관심사는 언제든 다시 바꿀 수 있어요.',
      en: 'You can always change your interests later.',
    },
  },
  explore: {
    heading: { ko: '탐구 주제를 골라보세요', en: 'Pick a topic to dig into' },
    editInterests: { ko: '관심사 다시 고르기', en: 'Edit interests' },
    starterTopics: { ko: '시작할 주제', en: 'Starting topics' },
    myBranches: { ko: '내가 이어온 탐구', en: 'Branches I\'ve started' },
    startButton: { ko: '탐구 시작 →', en: 'Start digging →' },
    continueButton: { ko: '이어서 탐구하기 →', en: 'Continue →' },
    noBranchesYet: { ko: '아직 시작한 탐구가 없어요. 위 주제 중 하나를 클릭해보세요!', en: 'No branches yet — click a topic above to begin!' },
    emptyState: {
      ko: '아직 고른 관심사가 없어요.',
      en: 'You haven\'t picked any interests yet.',
    },
    goHome: { ko: '관심사 고르러 가기', en: 'Go pick interests' },
    depthLabel: { ko: '깊이', en: 'depth' },
  },
  topic: {
    step1Title: { ko: '1단계 · 자료로 배우기', en: 'Step 1 · Learn from a source' },
    step1Desc: {
      ko: '아래 링크로 영상을 시청하거나 글을 읽어보세요. 다 봤다면 체크하세요.',
      en: 'Watch the video or read the article below. Check it off once you\'re done.',
    },
    watchVideo: { ko: '📺 유튜브에서 영상 찾아보기', en: '📺 Find a video on YouTube' },
    readArticle: { ko: '📖 위키백과에서 글 찾아보기', en: '📖 Find an article on Wikipedia' },
    videoDone: { ko: '영상 시청 완료', en: 'Watched the video' },
    articleDone: { ko: '글 읽기 완료', en: 'Read the article' },
    step2Title: { ko: '2단계 · 핵심 단어 정리', en: 'Step 2 · Key vocabulary' },
    step2Desc: {
      ko: '아래 단어들의 뜻을 이해했다면 체크하세요. 새로 배운 단어가 있다면 직접 추가해보세요.',
      en: 'Check off each term once you understand it. Add any new words you learned yourself.',
    },
    addVocabPlaceholderTerm: { ko: '새 단어', en: 'New term' },
    addVocabPlaceholderDef: { ko: '뜻 설명', en: 'Definition' },
    addButton: { ko: '추가', en: 'Add' },
    step3Title: { ko: '3단계 · 사실 정리 & 내 생각', en: 'Step 3 · Facts & my thoughts' },
    step3Desc: {
      ko: '알게 된 사실들을 체크하고, 내 생각을 자유롭게 정리해보세요.',
      en: 'Check off the facts you\'ve learned, then write your own thoughts freely.',
    },
    addFactPlaceholder: { ko: '새로 알게 된 사실 추가하기', en: 'Add a fact you learned' },
    reflectionLabel: { ko: '내 생각 정리', en: 'My reflection' },
    reflectionPlaceholder: {
      ko: '이 주제에 대해 새롭게 알게 된 것, 흥미로웠던 점, 더 궁금한 점을 자유롭게 적어보세요...',
      en: 'Write freely about what you learned, what surprised you, and what you\'re still curious about...',
    },
    step4Title: { ko: '4단계 · 꼬리에 꼬리 물기', en: 'Step 4 · Dig deeper' },
    step4Desc: {
      ko: '이 주제를 공부하다 보니 더 궁금한 게 생겼나요? 다음 탐구 주제로 이어가 보세요.',
      en: 'Did something make you more curious? Turn it into your next topic.' ,
    },
    suggestedFollowUps: { ko: '추천 다음 주제', en: 'Suggested next topics' },
    customFollowUpPlaceholder: { ko: '내가 더 궁금한 것을 직접 적어보세요', en: 'Or type what you\'re curious about' },
    digDeeperButton: { ko: '이 주제로 더 파고들기 →', en: 'Dig deeper into this →' },
    childrenExisting: { ko: '이어서 탐구한 주제들', en: 'Topics you continued into' },
    finishBranch: { ko: '여기서 탐구 마무리하기', en: 'Wrap up this branch' },
    finished: { ko: '✓ 탐구 완료', en: '✓ Completed' },
    reopens: { ko: '다시 열기', en: 'Reopen' },
    trail: { ko: '탐구 경로', en: 'Exploration trail' },
    backToExplore: { ko: '← 탐구 목록으로', en: '← Back to topics' },
  },
  map: {
    heading: { ko: '나의 탐구 지도', en: 'My Exploration Map' },
    subheading: {
      ko: '지금까지 얼마나 깊이 파고들었는지 한눈에 확인해보세요.',
      en: 'See how deep your curiosity has taken you so far.' ,
    },
    statTopics: { ko: '탐구한 주제', en: 'Topics explored' },
    statDepth: { ko: '최고 깊이', en: 'Deepest dig' },
    statCompleted: { ko: '완료한 탐구', en: 'Branches completed' },
    statVocab: { ko: '익힌 단어', en: 'Words learned' },
    badgeNone: { ko: '아직 탐구를 시작해보세요!', en: 'Start your first dig!' },
    badgeLv1: { ko: '🌱 탐구 새싹', en: '🌱 Curious Sprout' },
    badgeLv2: { ko: '🌿 파고드는 자', en: '🌿 Deep Digger' },
    badgeLv3: { ko: '🌳 탐구의 달인', en: '🌳 Master Explorer' },
    empty: { ko: '아직 탐구한 주제가 없어요.', en: 'You haven\'t explored anything yet.' },
    resetButton: { ko: '전체 기록 초기화', en: 'Reset all progress' },
    resetConfirm: { ko: '정말 모든 탐구 기록을 지울까요? 되돌릴 수 없어요.', en: 'Really erase all exploration history? This can\'t be undone.' },
  },
  common: {
    interests: { ko: '관심사', en: 'Interests' },
  },
} as const;

export function t(entry: { ko: string; en: string }, lang: Lang): string {
  return entry[lang];
}
