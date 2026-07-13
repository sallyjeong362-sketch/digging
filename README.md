# Digging 🕳️

**Digging**은 학생이 하나의 관심사를 꼬리에 꼬리를 물고 깊게 탐구하도록 돕는 앱입니다.
*Digging is an app that helps students explore a single interest deeper and deeper, one curious question leading to the next.*

## 어떻게 동작하나요? / How it works

1. **관심사 고르기** — 유튜브 추천 알고리즘이 쓰는 것과 같은 관심사 카테고리(게임, 음악, 과학, 우주 등)에서 마음이 가는 주제를 고릅니다.
   *Pick interests — choose from the same category set YouTube uses to personalize recommendations.*
2. **자료로 배우기** — 관련 유튜브 영상을 시청하거나 위키백과 글을 읽습니다.
   *Learn from a source — watch a related YouTube video or read a Wikipedia article.*
3. **핵심 단어 정리** — 큐레이션된 핵심 단어를 체크하고, 새로 배운 단어를 직접 추가합니다.
   *Key vocabulary — check off curated terms and add new ones you discover.*
4. **사실 정리 & 내 생각** — 알게 된 사실을 체크리스트로 정리하고, 내 생각을 자유롭게 씁니다.
   *Facts & reflection — check off facts you've learned and write your own thoughts freely.*
5. **꼬리에 꼬리 물기** — 더 궁금해진 점을 다음 탐구 주제로 만들어 계속 파고듭니다. 탐구 지도에서 전체 여정을 한눈에 볼 수 있어요.
   *Dig deeper — turn a new question into your next topic, and see your whole journey on the Exploration Map.*

앱은 한국어 / 영어 두 언어를 모두 지원합니다 (헤더의 언어 전환 버튼).
*The app fully supports both Korean and English (see the language toggle in the header).*

## 개발 / Development

```bash
npm install
npm run dev      # start dev server
npm run build    # production build
```

Built with React + TypeScript + Vite + Tailwind CSS + Zustand (localStorage persistence). No backend — all progress is saved locally in the browser.

Deployed automatically to GitHub Pages on every push to `main`.
