import type { Interest, TopicSeed } from '../types';

/**
 * Interest categories modeled on the category set YouTube uses to personalize
 * recommendations (its "interests" taxonomy shown during onboarding / ads preferences).
 */
export const INTERESTS: Interest[] = [
  { id: 'gaming', name: { ko: '게임', en: 'Gaming' }, emoji: '🎮', gradient: 'from-violet-500 to-purple-600', seedTopicIds: ['gaming-history', 'gaming-physics'] },
  { id: 'music', name: { ko: '음악', en: 'Music' }, emoji: '🎵', gradient: 'from-pink-500 to-rose-500', seedTopicIds: ['music-jazz', 'music-orchestra'] },
  { id: 'sports', name: { ko: '스포츠', en: 'Sports' }, emoji: '⚽', gradient: 'from-emerald-500 to-teal-600', seedTopicIds: ['sports-olympics', 'sports-soccer-tactics'] },
  { id: 'science-tech', name: { ko: '과학과 기술', en: 'Science & Tech' }, emoji: '🔬', gradient: 'from-sky-500 to-blue-600', seedTopicIds: ['tech-ai', 'science-renewable-energy'] },
  { id: 'food', name: { ko: '요리', en: 'Food & Cooking' }, emoji: '🍳', gradient: 'from-amber-500 to-orange-600', seedTopicIds: ['food-fermentation', 'food-world-dishes'] },
  { id: 'fashion', name: { ko: '패션과 뷰티', en: 'Fashion & Beauty' }, emoji: '👗', gradient: 'from-fuchsia-500 to-pink-600', seedTopicIds: ['fashion-history', 'fashion-sustainable'] },
  { id: 'travel', name: { ko: '여행과 문화', en: 'Travel & Culture' }, emoji: '✈️', gradient: 'from-cyan-500 to-sky-600', seedTopicIds: ['travel-heritage', 'travel-festivals'] },
  { id: 'film', name: { ko: '영화와 애니메이션', en: 'Film & Animation' }, emoji: '🎬', gradient: 'from-slate-600 to-zinc-700', seedTopicIds: ['film-animation', 'film-cinematography'] },
  { id: 'animals', name: { ko: '동물과 자연', en: 'Animals & Nature' }, emoji: '🐾', gradient: 'from-lime-500 to-green-600', seedTopicIds: ['animals-ecosystem', 'animals-endangered'] },
  { id: 'space', name: { ko: '우주', en: 'Space' }, emoji: '🚀', gradient: 'from-indigo-500 to-violet-700', seedTopicIds: ['space-solar-system', 'space-black-holes'] },
  { id: 'history', name: { ko: '역사', en: 'History' }, emoji: '🏛️', gradient: 'from-yellow-600 to-amber-700', seedTopicIds: ['history-egypt', 'history-world-wars'] },
  { id: 'art', name: { ko: '미술과 디자인', en: 'Art & Design' }, emoji: '🎨', gradient: 'from-red-500 to-rose-600', seedTopicIds: ['art-color-theory', 'art-famous-painters'] },
];

export const TOPIC_SEEDS: TopicSeed[] = [
  {
    id: 'gaming-history',
    interestId: 'gaming',
    title: { ko: '비디오 게임의 역사', en: 'The History of Video Games' },
    blurb: { ko: '오락실 게임부터 오늘날의 콘솔·모바일 게임까지, 게임은 어떻게 발전해왔을까?', en: 'From arcade cabinets to consoles and mobile games — how did games evolve?' },
    vocabulary: [
      { term: { ko: '아케이드 게임', en: 'Arcade game' }, definition: { ko: '동전을 넣고 오락실 기기에서 즐기는 게임', en: 'A coin-operated game played on a machine in an arcade' } },
      { term: { ko: '콘솔', en: 'Console' }, definition: { ko: 'TV나 모니터에 연결해 게임을 즐기는 전용 기기', en: 'A dedicated device connected to a TV/monitor for playing games' } },
      { term: { ko: '픽셀 아트', en: 'Pixel art' }, definition: { ko: '작은 사각형(픽셀) 단위로 그린 초기 게임 그래픽 스타일', en: 'A graphic style built from small square units (pixels), common in early games' } },
    ],
    facts: [
      { ko: '최초의 상업용 비디오 게임 중 하나는 1972년 아타리의 "퐁(Pong)"이다.', en: 'One of the first commercial video games was Atari\'s "Pong" in 1972.' },
      { ko: '1980년대에는 오락실 아케이드 게임이 크게 유행했다.', en: 'Arcade games were hugely popular in the 1980s.' },
      { ko: '오늘날은 콘솔, PC, 모바일 등 다양한 플랫폼에서 게임을 즐길 수 있다.', en: 'Today, games are played across many platforms: consoles, PC, and mobile.' },
    ],
    followUps: [
      { ko: '게임 그래픽 기술은 어떻게 발전했을까?', en: 'How has game graphics technology evolved?' },
      { ko: '이스포츠(e-Sports)는 어떻게 시작되었을까?', en: 'How did e-Sports get started?' },
      { ko: '게임 스토리텔링은 어떻게 만들어질까?', en: 'How is storytelling crafted in games?' },
    ],
  },
  {
    id: 'gaming-physics',
    interestId: 'gaming',
    title: { ko: '게임 속 물리 엔진의 원리', en: 'How Physics Engines Work in Games' },
    blurb: { ko: '캐릭터가 뛰고, 물체가 떨어지고, 자동차가 부딪히는 게임 속 움직임은 어떻게 계산될까?', en: 'How are jumping, falling, and collisions calculated inside a game?' },
    vocabulary: [
      { term: { ko: '물리 엔진', en: 'Physics engine' }, definition: { ko: '중력, 충돌, 움직임 같은 물리 현상을 실시간으로 계산하는 소프트웨어', en: 'Software that calculates physical phenomena like gravity and collisions in real time' } },
      { term: { ko: '충돌 감지', en: 'Collision detection' }, definition: { ko: '두 물체가 게임 안에서 서로 부딪혔는지를 계산하는 기술', en: 'A technique for calculating whether two objects have touched in the game' } },
      { term: { ko: '중력 시뮬레이션', en: 'Gravity simulation' }, definition: { ko: '물체가 아래로 떨어지는 현실의 중력을 게임 안에서 흉내 내는 것', en: 'Mimicking real-world gravity so objects fall inside the game' } },
    ],
    facts: [
      { ko: '물리 엔진은 매 프레임마다 물체의 위치와 속도를 다시 계산한다.', en: 'A physics engine recalculates every object\'s position and speed on each frame.' },
      { ko: '충돌 감지가 정확하지 않으면 캐릭터가 벽을 통과하는 오류가 생길 수 있다.', en: 'Inaccurate collision detection can cause a character to glitch through walls.' },
      { ko: '유니티(Unity), 언리얼(Unreal) 같은 게임 엔진에는 물리 엔진이 내장되어 있다.', en: 'Game engines like Unity and Unreal come with a physics engine built in.' },
    ],
    followUps: [
      { ko: '게임 엔진(Unity, Unreal)은 무엇을 할 수 있을까?', en: 'What can game engines like Unity or Unreal actually do?' },
      { ko: '3D 캐릭터 애니메이션은 어떻게 만들어질까?', en: 'How is 3D character animation created?' },
      { ko: '오픈월드 게임의 지도는 어떻게 설계될까?', en: 'How are open-world game maps designed?' },
    ],
  },
  {
    id: 'music-jazz',
    interestId: 'music',
    title: { ko: '재즈의 탄생과 즉흥연주', en: 'The Birth of Jazz and Improvisation' },
    blurb: { ko: '자유롭고 즉흥적인 재즈 음악은 어디서, 어떻게 시작되었을까?', en: 'Where and how did this free, improvisational style of music begin?' },
    vocabulary: [
      { term: { ko: '즉흥연주', en: 'Improvisation' }, definition: { ko: '악보 없이 그 자리에서 만들어내는 연주', en: 'Music created spontaneously, without written notation' } },
      { term: { ko: '스윙', en: 'Swing' }, definition: { ko: '재즈 특유의 통통 튀는 리듬감', en: 'The bouncing, syncopated rhythmic feel typical of jazz' } },
      { term: { ko: '블루스', en: 'Blues' }, definition: { ko: '재즈에 큰 영향을 준, 애환을 담은 미국 흑인 음악 장르', en: 'An African American music genre expressing hardship that heavily influenced jazz' } },
    ],
    facts: [
      { ko: '재즈는 19세기 말~20세기 초 미국 뉴올리언스에서 시작되었다.', en: 'Jazz originated in New Orleans, USA, in the late 19th–early 20th century.' },
      { ko: '재즈는 아프리카 리듬과 유럽 화성이 만나 탄생했다.', en: 'Jazz was born from the meeting of African rhythms and European harmony.' },
      { ko: '즉흥연주는 재즈 연주자마다 서로 다른 개성을 표현하는 핵심 요소다.', en: 'Improvisation is the key element that lets each jazz musician express a unique voice.' },
    ],
    followUps: [
      { ko: '루이 암스트롱은 재즈에 어떤 영향을 주었을까?', en: 'What impact did Louis Armstrong have on jazz?' },
      { ko: '블루스와 재즈는 어떻게 다를까?', en: 'How is blues different from jazz?' },
      { ko: '재즈는 힙합 같은 현대 음악에 어떤 영향을 주었을까?', en: 'How has jazz influenced modern genres like hip-hop?' },
    ],
  },
  {
    id: 'music-orchestra',
    interestId: 'music',
    title: { ko: '오케스트라 악기의 종류', en: 'Instruments of the Orchestra' },
    blurb: { ko: '오케스트라는 어떤 악기들로 이루어져 있고, 각 파트는 어떤 역할을 할까?', en: 'What instruments make up an orchestra, and what role does each section play?' },
    vocabulary: [
      { term: { ko: '현악기', en: 'String instrument' }, definition: { ko: '바이올린, 첼로처럼 줄을 활로 켜거나 튕겨 소리 내는 악기', en: 'Instruments like violin and cello that make sound by bowing or plucking strings' } },
      { term: { ko: '관악기', en: 'Wind instrument' }, definition: { ko: '플루트, 클라리넷처럼 입으로 바람을 불어 소리 내는 악기', en: 'Instruments like flute and clarinet that make sound by blowing air' } },
      { term: { ko: '지휘자', en: 'Conductor' }, definition: { ko: '오케스트라 전체의 박자와 표현을 이끄는 사람', en: 'The person who leads the tempo and expression of the whole orchestra' } },
    ],
    facts: [
      { ko: '오케스트라는 크게 현악기, 관악기, 타악기, 금관악기로 나뉜다.', en: 'An orchestra is broadly divided into strings, woodwinds, percussion, and brass.' },
      { ko: '바이올린 파트는 보통 오케스트라에서 가장 인원이 많은 파트다.', en: 'The violin section is usually the largest group in an orchestra.' },
      { ko: '지휘자는 악기를 연주하지 않지만 연주 전체의 흐름을 조율한다.', en: 'The conductor doesn\'t play an instrument but coordinates the flow of the whole performance.' },
    ],
    followUps: [
      { ko: '작곡가는 교향곡을 어떻게 만들까?', en: 'How does a composer write a symphony?' },
      { ko: '한국 전통 악기와 서양 악기는 어떻게 다를까?', en: 'How do traditional Korean instruments differ from Western ones?' },
      { ko: '영화음악은 오케스트라를 어떻게 활용할까?', en: 'How does film music make use of the orchestra?' },
    ],
  },
  {
    id: 'sports-olympics',
    interestId: 'sports',
    title: { ko: '올림픽의 역사와 정신', en: 'The History and Spirit of the Olympics' },
    blurb: { ko: '고대 그리스에서 시작된 올림픽은 어떻게 세계 최대의 스포츠 축제가 되었을까?', en: 'How did an ancient Greek tradition become the world\'s biggest sporting event?' },
    vocabulary: [
      { term: { ko: '근대 올림픽', en: 'Modern Olympics' }, definition: { ko: '1896년 아테네에서 처음 열린 현대식 올림픽 대회', en: 'The modern-format Olympic Games, first held in Athens in 1896' } },
      { term: { ko: '오륜기', en: 'Olympic rings' }, definition: { ko: '5개 대륙의 화합을 상징하는 다섯 개의 고리', en: 'Five interlocking rings symbolizing the unity of five continents' } },
      { term: { ko: '성화 봉송', en: 'Torch relay' }, definition: { ko: '올림픽 개막 전 성화를 릴레이로 옮기는 의식', en: 'The ceremonial relay carrying the Olympic flame before the games open' } },
    ],
    facts: [
      { ko: '고대 올림픽은 기원전 776년 그리스 올림피아에서 시작되었다.', en: 'The ancient Olympics began in 776 BCE in Olympia, Greece.' },
      { ko: '근대 올림픽은 1896년 쿠베르탱 남작의 제안으로 부활했다.', en: 'The modern Olympics were revived in 1896 on the proposal of Baron Pierre de Coubertin.' },
      { ko: '올림픽은 4년마다 하계·동계 대회로 번갈아 열린다.', en: 'The Olympics alternate between Summer and Winter Games every four years.' },
    ],
    followUps: [
      { ko: '올림픽 경기 종목은 어떻게 추가되고 사라질까?', en: 'How do Olympic sports get added or removed?' },
      { ko: '패럴림픽은 무엇이고 어떻게 시작되었을까?', en: 'What is the Paralympics and how did it start?' },
      { ko: '올림픽 개최 도시는 어떻게 선정될까?', en: 'How is an Olympic host city chosen?' },
    ],
  },
  {
    id: 'sports-soccer-tactics',
    interestId: 'sports',
    title: { ko: '축구 전술의 기초', en: 'Basics of Soccer Tactics' },
    blurb: { ko: '4-4-2, 티키타카 같은 축구 전술 용어는 실제로 무엇을 의미할까?', en: 'What do soccer tactics terms like 4-4-2 or tiki-taka actually mean?' },
    vocabulary: [
      { term: { ko: '포메이션', en: 'Formation' }, definition: { ko: '선수들이 경기장에 배치되는 대형 (예: 4-4-2)', en: 'The arrangement of players on the field, e.g. 4-4-2' } },
      { term: { ko: '점유율 축구', en: 'Possession football' }, definition: { ko: '짧은 패스로 공을 오래 소유하며 경기를 주도하는 전술', en: 'A tactic focused on keeping the ball via short passes to control the game' } },
      { term: { ko: '오프사이드', en: 'Offside' }, definition: { ko: '공격수가 수비 라인보다 앞서 있을 때 적용되는 반칙 규칙', en: 'A rule violated when an attacker is ahead of the last defender at the wrong moment' } },
    ],
    facts: [
      { ko: '포메이션 숫자는 수비수-미드필더-공격수 순서로 인원을 나타낸다.', en: 'Formation numbers list players from defenders to midfielders to forwards.' },
      { ko: '티키타카는 짧은 패스를 빠르게 주고받는 스페인식 전술 스타일이다.', en: 'Tiki-taka is a Spanish tactical style built on quick, short passing.' },
      { ko: '오프사이드 규칙은 공격이 지나치게 쉬워지는 것을 막기 위해 존재한다.', en: 'The offside rule exists to stop attacks from becoming too easy.' },
    ],
    followUps: [
      { ko: '축구 감독은 경기 중 전술을 어떻게 바꿀까?', en: 'How does a coach change tactics during a match?' },
      { ko: '골키퍼의 포지션별 역할은 무엇일까?', en: 'What is the goalkeeper\'s specific role?' },
      { ko: '월드컵은 어떻게 시작되었을까?', en: 'How did the World Cup begin?' },
    ],
  },
  {
    id: 'tech-ai',
    interestId: 'science-tech',
    title: { ko: '인공지능은 어떻게 작동할까?', en: 'How Does Artificial Intelligence Work?' },
    blurb: { ko: '챗봇이나 추천 시스템 뒤에 숨어 있는 인공지능의 기본 원리를 알아보자.', en: 'What\'s the basic principle behind the AI powering chatbots and recommendation systems?' },
    vocabulary: [
      { term: { ko: '머신러닝', en: 'Machine learning' }, definition: { ko: '데이터를 통해 컴퓨터가 스스로 규칙을 학습하는 방법', en: 'A method where computers learn patterns from data rather than being explicitly programmed' } },
      { term: { ko: '데이터셋', en: 'Dataset' }, definition: { ko: 'AI를 학습시키기 위해 모아 놓은 예시 데이터 모음', en: 'A collection of example data used to train an AI model' } },
      { term: { ko: '알고리즘', en: 'Algorithm' }, definition: { ko: '문제를 해결하기 위한 단계별 계산 절차', en: 'A step-by-step procedure for solving a problem' } },
    ],
    facts: [
      { ko: 'AI는 수많은 데이터를 학습해서 패턴을 찾아낸다.', en: 'AI learns from large amounts of data to find patterns.' },
      { ko: '추천 알고리즘은 내 시청 기록을 바탕으로 다음 영상을 예측한다.', en: 'Recommendation algorithms predict your next video based on your watch history.' },
      { ko: 'AI가 학습한 데이터에 편향이 있으면 결과도 편향될 수 있다.', en: 'If the training data is biased, the AI\'s outputs can be biased too.' },
    ],
    followUps: [
      { ko: '유튜브 추천 알고리즘은 어떤 기준으로 영상을 골라줄까?', en: 'What criteria does the YouTube recommendation algorithm use?' },
      { ko: 'AI와 딥러닝은 어떻게 다를까?', en: 'How is deep learning different from AI in general?' },
      { ko: 'AI 윤리 문제에는 어떤 것들이 있을까?', en: 'What kinds of ethical issues arise around AI?' },
    ],
  },
  {
    id: 'science-renewable-energy',
    interestId: 'science-tech',
    title: { ko: '재생 에너지의 원리', en: 'How Renewable Energy Works' },
    blurb: { ko: '태양광, 풍력, 수력 발전은 각각 어떤 원리로 전기를 만들어낼까?', en: 'How do solar, wind, and hydro power actually generate electricity?' },
    vocabulary: [
      { term: { ko: '태양광 발전', en: 'Solar power' }, definition: { ko: '태양빛을 전기로 바꾸는 발전 방식', en: 'Generating electricity by converting sunlight' } },
      { term: { ko: '풍력 발전', en: 'Wind power' }, definition: { ko: '바람의 힘으로 터빈을 돌려 전기를 만드는 방식', en: 'Generating electricity by spinning turbines with wind' } },
      { term: { ko: '탄소 배출', en: 'Carbon emissions' }, definition: { ko: '화석연료를 태울 때 나오는 이산화탄소 같은 온실가스', en: 'Greenhouse gases like CO₂ released when burning fossil fuels' } },
    ],
    facts: [
      { ko: '화석연료와 달리 재생 에너지는 고갈되지 않는 자원을 사용한다.', en: 'Unlike fossil fuels, renewable energy relies on resources that don\'t run out.' },
      { ko: '태양광 패널은 빛 에너지를 전기 에너지로 직접 변환한다.', en: 'Solar panels convert light energy directly into electrical energy.' },
      { ko: '재생 에너지는 화석연료보다 탄소 배출이 훨씬 적다.', en: 'Renewable energy produces far fewer carbon emissions than fossil fuels.' },
    ],
    followUps: [
      { ko: '기후 변화는 왜 일어날까?', en: 'What actually causes climate change?' },
      { ko: '전기차 배터리는 어떻게 작동할까?', en: 'How does an electric car battery work?' },
      { ko: '우리나라는 재생 에너지를 얼마나 사용하고 있을까?', en: 'How much renewable energy does my country actually use?' },
    ],
  },
  {
    id: 'food-fermentation',
    interestId: 'food',
    title: { ko: '발효 음식의 과학', en: 'The Science of Fermented Food' },
    blurb: { ko: '김치, 요거트, 된장은 왜, 어떻게 발효될까? 그 안에 숨은 과학을 알아보자.', en: 'Why and how do foods like kimchi and yogurt ferment? Let\'s dig into the science.' },
    vocabulary: [
      { term: { ko: '발효', en: 'Fermentation' }, definition: { ko: '미생물이 유기물을 분해해 맛과 성질을 변화시키는 과정', en: 'A process where microbes break down organic matter, changing flavor and properties' } },
      { term: { ko: '유산균', en: 'Lactic acid bacteria' }, definition: { ko: '당을 분해해 젖산을 만들어내는 유익한 균', en: 'Beneficial bacteria that break down sugar into lactic acid' } },
      { term: { ko: '숙성', en: 'Aging/Ripening' }, definition: { ko: '시간이 지나면서 맛과 향이 깊어지는 과정', en: 'The process by which flavor and aroma deepen over time' } },
    ],
    facts: [
      { ko: '김치는 유산균 발효를 통해 새콤한 맛과 보존성을 얻는다.', en: 'Kimchi gets its tangy taste and shelf life through lactic acid fermentation.' },
      { ko: '발효 식품에는 장 건강에 도움이 되는 유익균이 많다.', en: 'Fermented foods are rich in beneficial bacteria that support gut health.' },
      { ko: '온도와 시간은 발효의 속도와 맛을 크게 좌우한다.', en: 'Temperature and time strongly affect the speed and flavor of fermentation.' },
    ],
    followUps: [
      { ko: '세계 각국의 발효 음식에는 어떤 것이 있을까?', en: 'What fermented foods exist in other cultures around the world?' },
      { ko: '장내 미생물은 우리 몸에 어떤 영향을 줄까?', en: 'How do gut microbes affect our overall health?' },
      { ko: '빵은 왜 부풀어 오를까? (효모의 원리)', en: 'Why does bread rise? (The science of yeast)' },
    ],
  },
  {
    id: 'food-world-dishes',
    interestId: 'food',
    title: { ko: '세계 각국의 대표 요리', en: 'Iconic Dishes Around the World' },
    blurb: { ko: '나라마다 대표 음식이 다른 이유는 무엇일까? 지리와 역사 속에서 답을 찾아보자.', en: 'Why does every country have such different signature dishes? The answer lies in geography and history.' },
    vocabulary: [
      { term: { ko: '향신료', en: 'Spice' }, definition: { ko: '음식에 향과 맛을 더하는 식물성 재료', en: 'A plant-based ingredient added to food for aroma and flavor' } },
      { term: { ko: '주식', en: 'Staple food' }, definition: { ko: '쌀, 밀처럼 한 지역에서 주로 먹는 기본 음식', en: 'A basic food like rice or wheat that a region relies on most' } },
      { term: { ko: '음식 문화', en: 'Food culture' }, definition: { ko: '한 지역의 역사와 환경이 반영된 먹거리 전통', en: 'Food traditions shaped by a region\'s history and environment' } },
      ],
    facts: [
      { ko: '기후와 지형은 그 지역에서 재배 가능한 식재료를 결정한다.', en: 'Climate and geography determine which ingredients a region can grow.' },
      { ko: '향신료 무역은 과거 여러 나라의 역사와 경제에 큰 영향을 주었다.', en: 'The spice trade historically shaped the economies and history of many nations.' },
      { ko: '같은 재료라도 나라마다 조리법이 크게 다를 수 있다.', en: 'Even with the same ingredient, cooking methods can differ greatly by country.' },
    ],
    followUps: [
      { ko: '실크로드는 음식 문화에 어떤 영향을 주었을까?', en: 'How did the Silk Road shape food culture?' },
      { ko: '한식의 특징은 무엇일까?', en: 'What are the defining characteristics of Korean cuisine?' },
      { ko: '패스트푸드는 어떻게 전 세계로 퍼졌을까?', en: 'How did fast food spread across the world?' },
    ],
  },
  {
    id: 'fashion-history',
    interestId: 'fashion',
    title: { ko: '패션의 역사: 시대별 스타일 변화', en: 'A History of Fashion Through the Ages' },
    blurb: { ko: '옷은 시대마다 왜 이렇게 다르게 변했을까? 사회와 패션의 관계를 살펴보자.', en: 'Why has clothing changed so much across eras? Let\'s see how fashion reflects society.' },
    vocabulary: [
      { term: { ko: '오트 쿠튀르', en: 'Haute couture' }, definition: { ko: '한 벌씩 맞춤 제작하는 고급 디자이너 의상', en: 'High-end, custom-made designer clothing crafted one piece at a time' } },
      { term: { ko: '실루엣', en: 'Silhouette' }, definition: { ko: '옷을 입었을 때 드러나는 전체적인 윤곽선', en: 'The overall outline of a garment when worn' } },
      { term: { ko: '트렌드', en: 'Trend' }, definition: { ko: '특정 시기에 많은 사람이 따르는 유행 스타일', en: 'A popular style many people follow during a specific period' } },
    ],
    facts: [
      { ko: '패션은 그 시대의 사회, 경제, 기술을 반영한다.', en: 'Fashion reflects the society, economy, and technology of its time.' },
      { ko: '1920년대는 여성복이 짧고 자유로워지며 큰 변화를 겪었다.', en: 'In the 1920s, women\'s clothing became shorter and freer, a major shift.' },
      { ko: '오늘날 패션 트렌드는 SNS를 통해 훨씬 빠르게 퍼진다.', en: 'Today, fashion trends spread much faster thanks to social media.' },
    ],
    followUps: [
      { ko: '한복은 시대에 따라 어떻게 변해왔을까?', en: 'How has hanbok (Korean traditional dress) changed over time?' },
      { ko: '패스트 패션은 왜 문제가 될까?', en: 'Why is fast fashion considered a problem?' },
      { ko: '유명 패션 디자이너들은 어떤 스타일을 만들었을까?', en: 'What signature styles did famous fashion designers create?' },
    ],
  },
  {
    id: 'fashion-sustainable',
    interestId: 'fashion',
    title: { ko: '지속 가능한 패션이란?', en: 'What Is Sustainable Fashion?' },
    blurb: { ko: '환경을 생각하는 패션은 어떤 모습일까? 옷장 속 숨은 환경 문제를 알아보자.', en: 'What does environmentally conscious fashion look like? Let\'s uncover the hidden footprint of our closets.' },
    vocabulary: [
      { term: { ko: '패스트 패션', en: 'Fast fashion' }, definition: { ko: '유행에 맞춰 저렴하고 빠르게 생산·소비되는 의류', en: 'Cheap clothing produced and consumed quickly to keep up with trends' } },
      { term: { ko: '업사이클링', en: 'Upcycling' }, definition: { ko: '버려지는 물건을 더 가치 있는 물건으로 재탄생시키는 것', en: 'Turning discarded items into something of greater value' } },
      { term: { ko: '탄소 발자국', en: 'Carbon footprint' }, definition: { ko: '한 제품이 만들어지고 사용되며 남기는 온실가스의 총량', en: 'The total greenhouse gases produced across a product\'s life' } },
    ],
    facts: [
      { ko: '패스트 패션 산업은 물 사용량과 환경 오염이 큰 산업 중 하나다.', en: 'The fast fashion industry is a major consumer of water and source of pollution.' },
      { ko: '옷을 오래 입고 재활용하는 것도 지속 가능한 패션의 실천이다.', en: 'Wearing clothes longer and recycling them is also a form of sustainable fashion.' },
      { ko: '업사이클링은 버려질 소재에 새로운 디자인 가치를 더한다.', en: 'Upcycling adds new design value to materials that would otherwise be discarded.' },
    ],
    followUps: [
      { ko: '옷 한 벌이 만들어지기까지 어떤 과정을 거칠까?', en: 'What\'s the full journey behind making a single piece of clothing?' },
      { ko: '친환경 소재에는 어떤 것들이 있을까?', en: 'What kinds of eco-friendly fabrics exist?' },
      { ko: '중고 의류 거래는 왜 늘어나고 있을까?', en: 'Why is secondhand clothing trading on the rise?' },
    ],
  },
  {
    id: 'travel-heritage',
    interestId: 'travel',
    title: { ko: '세계 문화유산 탐방', en: 'Exploring World Heritage Sites' },
    blurb: { ko: '유네스코 세계문화유산은 어떤 기준으로 선정되고, 왜 보호해야 할까?', en: 'What makes a UNESCO World Heritage Site, and why must we protect them?' },
    vocabulary: [
      { term: { ko: '유네스코', en: 'UNESCO' }, definition: { ko: '교육·과학·문화 분야의 국제 협력을 담당하는 유엔 기구', en: 'A UN agency for international cooperation in education, science, and culture' } },
      { term: { ko: '세계문화유산', en: 'World Heritage Site' }, definition: { ko: '인류 전체를 위해 보호할 가치가 있다고 인정된 유적이나 자연', en: 'A site recognized as having outstanding value worth protecting for all humanity' } },
      { term: { ko: '보존', en: 'Preservation' }, definition: { ko: '유적이나 자연을 원래 모습대로 지키고 유지하는 것', en: 'Keeping and maintaining a site in its original condition' } },
    ],
    facts: [
      { ko: '세계문화유산에는 유적뿐 아니라 자연유산도 포함된다.', en: 'World Heritage Sites include not just monuments but natural sites too.' },
      { ko: '한국의 석굴암과 불국사도 세계문화유산으로 등재되어 있다.', en: 'Korea\'s Seokguram Grotto and Bulguksa Temple are listed as World Heritage Sites.' },
      { ko: '전쟁이나 개발로 훼손 위기에 처한 유산도 있다.', en: 'Some heritage sites are endangered by war or development.' },
    ],
    followUps: [
      { ko: '우리나라의 세계문화유산에는 무엇이 있을까?', en: 'What World Heritage Sites exist in my own country?' },
      { ko: '고대 문명의 유적은 어떻게 발견되었을까?', en: 'How were ancient civilizations\' ruins actually discovered?' },
      { ko: '관광이 문화유산에 미치는 영향은 무엇일까?', en: 'How does tourism impact cultural heritage sites?' },
    ],
  },
  {
    id: 'travel-festivals',
    interestId: 'travel',
    title: { ko: '세계의 축제와 전통', en: 'Festivals and Traditions Around the World' },
    blurb: { ko: '브라질의 카니발, 인도의 홀리 축제… 세계 축제에는 어떤 의미가 담겨 있을까?', en: 'From Brazil\'s Carnival to India\'s Holi — what meanings do these festivals carry?' },
    vocabulary: [
      { term: { ko: '전통 축제', en: 'Traditional festival' }, definition: { ko: '한 지역에서 오랫동안 이어져 온 기념 행사', en: 'A celebration that a region has carried on for a long time' } },
      { term: { ko: '무형문화유산', en: 'Intangible cultural heritage' }, definition: { ko: '건축물이 아닌 춤, 노래, 축제처럼 형태가 없는 문화유산', en: 'Cultural heritage without a physical form, like dance, song, or festivals' } },
      { term: { ko: '풍습', en: 'Custom' }, definition: { ko: '한 사회에서 오래도록 지켜 온 생활 습관', en: 'A practice long observed within a society' } },
    ],
    facts: [
      { ko: '축제는 종교, 계절, 역사적 사건과 관련된 경우가 많다.', en: 'Festivals are often tied to religion, the seasons, or historical events.' },
      { ko: '강릉 단오제처럼 무형문화유산으로 등재된 한국 축제도 있다.', en: 'Some Korean festivals, like Gangneung Danoje, are listed as intangible cultural heritage.' },
      { ko: '축제는 그 지역 공동체의 정체성을 표현하는 방법이기도 하다.', en: 'Festivals are also a way for a community to express its identity.' },
    ],
    followUps: [
      { ko: '우리나라의 전통 명절에는 어떤 의미가 담겨 있을까?', en: 'What meanings lie behind traditional holidays in my own country?' },
      { ko: '종교는 축제 문화에 어떤 영향을 주었을까?', en: 'How has religion shaped festival culture?' },
      { ko: '세계 각국의 새해맞이 풍습은 어떻게 다를까?', en: 'How do New Year\'s customs differ across the world?' },
    ],
  },
  {
    id: 'film-animation',
    interestId: 'film',
    title: { ko: '애니메이션은 어떻게 만들어질까?', en: 'How Is Animation Actually Made?' },
    blurb: { ko: '그림이 어떻게 움직이는 것처럼 보일까? 애니메이션 제작의 원리를 알아보자.', en: 'How do drawings appear to move? Let\'s explore how animation is made.' },
    vocabulary: [
      { term: { ko: '프레임', en: 'Frame' }, definition: { ko: '애니메이션을 이루는 하나하나의 정지 그림', en: 'A single still image that makes up part of an animation' } },
      { term: { ko: '스토리보드', en: 'Storyboard' }, definition: { ko: '장면의 흐름을 그림으로 미리 정리한 설계도', en: 'A visual plan mapping out how each scene will flow' } },
      { term: { ko: '2D/3D 애니메이션', en: '2D/3D animation' }, definition: { ko: '평면 그림으로 만드는 방식과 입체 모델로 만드는 방식', en: 'Animation made with flat drawings versus with 3D computer models' } },
    ],
    facts: [
      { ko: '애니메이션은 1초에 보통 24장의 프레임을 이어 붙여 움직임을 만든다.', en: 'Animation typically strings together 24 frames per second to create motion.' },
      { ko: '스토리보드는 실제 제작 전에 장면 순서와 구도를 미리 정한다.', en: 'A storyboard plans out scene order and composition before production begins.' },
      { ko: '3D 애니메이션은 컴퓨터로 만든 입체 모델을 움직여 제작한다.', en: '3D animation is made by moving computer-generated 3D models.' },
    ],
    followUps: [
      { ko: '픽사 같은 스튜디오는 3D 캐릭터를 어떻게 만들까?', en: 'How does a studio like Pixar build a 3D character?' },
      { ko: '일본 애니메이션(애니메)은 어떤 특징이 있을까?', en: 'What are the distinct features of Japanese animation (anime)?' },
      { ko: '더빙과 성우는 애니메이션에서 어떤 역할을 할까?', en: 'What role do voice actors and dubbing play in animation?' },
    ],
  },
  {
    id: 'film-cinematography',
    interestId: 'film',
    title: { ko: '영화 촬영 기법의 기초', en: 'Basics of Film Cinematography' },
    blurb: { ko: '카메라 앵글과 조명은 영화의 분위기를 어떻게 바꿀까?', en: 'How do camera angles and lighting change the mood of a film?' },
    vocabulary: [
      { term: { ko: '앵글', en: 'Camera angle' }, definition: { ko: '카메라가 피사체를 바라보는 각도', en: 'The angle from which the camera views its subject' } },
      { term: { ko: '클로즈업', en: 'Close-up' }, definition: { ko: '인물의 얼굴 등을 가까이서 크게 찍는 촬영 기법', en: 'A shot framing a subject, often a face, tightly and up close' } },
      { term: { ko: '미장센', en: 'Mise-en-scène' }, definition: { ko: '조명, 소품, 배치 등 화면 안의 모든 요소를 구성하는 것', en: 'The arrangement of everything within the frame — lighting, props, staging' } },
    ],
    facts: [
      { ko: '로우 앵글(아래에서 위로 찍는 앵글)은 인물을 더 크고 강해 보이게 한다.', en: 'A low angle shot (looking up) makes a subject appear larger and more powerful.' },
      { ko: '클로즈업은 인물의 감정을 관객에게 강하게 전달한다.', en: 'A close-up conveys a character\'s emotion powerfully to the audience.' },
      { ko: '조명의 색과 세기는 장면의 분위기를 크게 좌우한다.', en: 'The color and intensity of lighting greatly shapes a scene\'s mood.' },
    ],
    followUps: [
      { ko: '유명 감독들은 어떤 촬영 스타일을 가지고 있을까?', en: 'What distinct camera styles do famous directors have?' },
      { ko: '영화 색보정(컬러그레이딩)은 왜 할까?', en: 'Why do films go through color grading?' },
      { ko: '영화 속 음향과 음악은 어떻게 감정을 만들어낼까?', en: 'How do sound and music in film create emotion?' },
    ],
  },
  {
    id: 'animals-ecosystem',
    interestId: 'animals',
    title: { ko: '생태계와 먹이사슬', en: 'Ecosystems and Food Chains' },
    blurb: { ko: '생물들은 서로 어떻게 연결되어 있을까? 생태계가 균형을 이루는 원리를 알아보자.', en: 'How are living things connected to each other? Let\'s learn how ecosystems stay in balance.' },
    vocabulary: [
      { term: { ko: '먹이사슬', en: 'Food chain' }, definition: { ko: '생물들이 먹고 먹히는 관계로 연결된 순서', en: 'A sequence linking organisms through who eats whom' } },
      { term: { ko: '생산자', en: 'Producer' }, definition: { ko: '식물처럼 스스로 양분을 만들어내는 생물', en: 'An organism, like a plant, that makes its own food' } },
      { term: { ko: '분해자', en: 'Decomposer' }, definition: { ko: '죽은 생물을 분해해 자연으로 되돌리는 생물', en: 'An organism that breaks down dead matter and returns it to nature' } },
    ],
    facts: [
      { ko: '먹이사슬은 생산자에서 시작해 여러 소비자 단계로 이어진다.', en: 'A food chain starts with producers and moves through several levels of consumers.' },
      { ko: '한 종이 사라지면 먹이사슬 전체의 균형이 무너질 수 있다.', en: 'If one species disappears, it can upset the balance of the entire food chain.' },
      { ko: '분해자는 죽은 생물과 배설물을 분해해 영양분을 순환시킨다.', en: 'Decomposers break down dead organisms and waste, recycling nutrients.' },
    ],
    followUps: [
      { ko: '외래종은 생태계에 어떤 영향을 줄까?', en: 'How do invasive species affect an ecosystem?' },
      { ko: '바다 생태계는 육지 생태계와 어떻게 다를까?', en: 'How does a marine ecosystem differ from one on land?' },
      { ko: '기후 변화는 생태계에 어떤 영향을 미칠까?', en: 'How does climate change affect ecosystems?' },
    ],
  },
  {
    id: 'animals-endangered',
    interestId: 'animals',
    title: { ko: '멸종 위기 동물 보호', en: 'Protecting Endangered Species' },
    blurb: { ko: '왜 어떤 동물들은 멸종 위기에 처하고, 우리는 이들을 어떻게 지킬 수 있을까?', en: 'Why do some animals become endangered, and how can we help protect them?' },
    vocabulary: [
      { term: { ko: '멸종 위기종', en: 'Endangered species' }, definition: { ko: '개체 수가 크게 줄어 사라질 위험에 처한 생물종', en: 'A species whose population has dropped so much it risks disappearing' } },
      { term: { ko: '서식지 파괴', en: 'Habitat destruction' }, definition: { ko: '개발 등으로 동물이 살아가는 환경이 사라지는 것', en: 'The loss of an environment animals depend on, often due to development' } },
      { term: { ko: '보호구역', en: 'Protected area' }, definition: { ko: '멸종 위기 생물을 지키기 위해 법으로 보호되는 지역', en: 'A legally protected area set aside to safeguard endangered species' } },
    ],
    facts: [
      { ko: '서식지 파괴는 동물이 멸종 위기에 처하는 가장 큰 원인 중 하나다.', en: 'Habitat destruction is one of the biggest causes of species becoming endangered.' },
      { ko: '판다, 호랑이 등 여러 동물이 국제적으로 보호받고 있다.', en: 'Animals like pandas and tigers are protected under international efforts.' },
      { ko: '보호구역 지정은 멸종 위기종의 개체 수 회복에 도움이 된다.', en: 'Designating protected areas helps endangered species recover in number.' },
    ],
    followUps: [
      { ko: '우리나라의 멸종 위기 동물에는 무엇이 있을까?', en: 'What endangered species exist in my own country?' },
      { ko: '동물원과 보호센터는 어떤 역할을 할까?', en: 'What role do zoos and rescue centers play in conservation?' },
      { ko: '밀렵은 왜 근절되지 않을까?', en: 'Why is poaching so hard to stop?' },
    ],
  },
  {
    id: 'space-solar-system',
    interestId: 'space',
    title: { ko: '태양계 탐사', en: 'Exploring the Solar System' },
    blurb: { ko: '태양계에는 어떤 행성들이 있고, 인류는 이를 어떻게 탐사해왔을까?', en: 'What planets make up our solar system, and how has humanity explored them?' },
    vocabulary: [
      { term: { ko: '행성', en: 'Planet' }, definition: { ko: '태양 주위를 도는, 스스로 빛나지 않는 둥근 천체', en: 'A round celestial body that orbits the Sun and doesn\'t emit its own light' } },
      { term: { ko: '공전', en: 'Orbit (revolution)' }, definition: { ko: '한 천체가 다른 천체 주위를 도는 운동', en: 'The motion of one body circling around another' } },
      { term: { ko: '탐사선', en: 'Space probe' }, definition: { ko: '사람 없이 우주를 탐사하도록 보낸 무인 우주선', en: 'An uncrewed spacecraft sent to explore space' } },
    ],
    facts: [
      { ko: '태양계에는 태양을 중심으로 8개의 행성이 공전하고 있다.', en: 'Eight planets orbit the Sun in our solar system.' },
      { ko: '보이저 1호는 태양계를 벗어나 성간 우주까지 도달한 탐사선이다.', en: 'Voyager 1 is a probe that has traveled beyond the solar system into interstellar space.' },
      { ko: '화성은 인류가 미래에 유인 탐사를 계획 중인 대표적인 행성이다.', en: 'Mars is a leading candidate for future crewed missions.' },
    ],
    followUps: [
      { ko: '화성 탐사 로버는 어떤 임무를 수행할까?', en: 'What missions do Mars rovers actually carry out?' },
      { ko: '인류는 왜 달에 다시 가려고 할까?', en: 'Why is humanity planning to return to the Moon?' },
      { ko: '태양계 밖에도 행성이 있을까? (외계행성)', en: 'Are there planets beyond our solar system? (Exoplanets)' },
    ],
  },
  {
    id: 'space-black-holes',
    interestId: 'space',
    title: { ko: '블랙홀이란 무엇인가?', en: 'What Is a Black Hole?' },
    blurb: { ko: '빛조차 빠져나올 수 없다는 블랙홀, 그 정체는 무엇일까?', en: 'Not even light can escape a black hole — so what exactly is it?' },
    vocabulary: [
      { term: { ko: '블랙홀', en: 'Black hole' }, definition: { ko: '중력이 너무 강해 빛조차 빠져나올 수 없는 천체', en: 'An object with gravity so strong that not even light can escape it' } },
      { term: { ko: '사건의 지평선', en: 'Event horizon' }, definition: { ko: '한 번 넘으면 다시 빠져나올 수 없는 블랙홀의 경계', en: 'The boundary around a black hole beyond which nothing can return' } },
      { term: { ko: '중력', en: 'Gravity' }, definition: { ko: '질량을 가진 물체들이 서로 끌어당기는 힘', en: 'The force by which objects with mass attract each other' } },
    ],
    facts: [
      { ko: '블랙홀은 거대한 별이 수명을 다하고 붕괴할 때 만들어질 수 있다.', en: 'A black hole can form when a massive star collapses at the end of its life.' },
      { ko: '2019년 인류는 블랙홀의 모습을 처음으로 사진으로 관측했다.', en: 'In 2019, humanity captured the first-ever photograph of a black hole.' },
      { ko: '사건의 지평선을 넘으면 빛조차 다시 빠져나올 수 없다.', en: 'Once something crosses the event horizon, not even light can escape.' },
    ],
    followUps: [
      { ko: '블랙홀은 어떻게 사진으로 찍을 수 있었을까?', en: 'How was it even possible to photograph a black hole?' },
      { ko: '중력은 시간과 공간에 어떤 영향을 줄까? (상대성이론)', en: 'How does gravity affect space and time? (Theory of relativity)' },
      { ko: '별은 어떻게 태어나고 죽을까?', en: 'How are stars born, and how do they die?' },
    ],
  },
  {
    id: 'history-egypt',
    interestId: 'history',
    title: { ko: '고대 이집트 문명', en: 'Ancient Egyptian Civilization' },
    blurb: { ko: '피라미드와 파라오로 유명한 고대 이집트는 어떤 사회였을까?', en: 'Known for pyramids and pharaohs — what was ancient Egyptian society really like?' },
    vocabulary: [
      { term: { ko: '파라오', en: 'Pharaoh' }, definition: { ko: '고대 이집트의 절대 권력을 가진 왕', en: 'The all-powerful ruler of ancient Egypt' } },
      { term: { ko: '상형문자', en: 'Hieroglyphs' }, definition: { ko: '그림 형태로 이루어진 고대 이집트의 문자', en: 'Ancient Egypt\'s writing system made of pictorial symbols' } },
      { term: { ko: '미라', en: 'Mummy' }, definition: { ko: '시신이 썩지 않도록 특수 처리하여 보존한 것', en: 'A body specially preserved to prevent decay' } },
    ],
    facts: [
      { ko: '고대 이집트 문명은 나일강을 중심으로 발전했다.', en: 'Ancient Egyptian civilization developed along the Nile River.' },
      { ko: '피라미드는 파라오의 무덤으로 지어졌다.', en: 'Pyramids were built as tombs for pharaohs.' },
      { ko: '이집트인은 사후 세계를 믿어 시신을 미라로 만들었다.', en: 'Egyptians believed in an afterlife, which is why they mummified the dead.' },
    ],
    followUps: [
      { ko: '피라미드는 실제로 어떻게 지어졌을까?', en: 'How were the pyramids actually built?' },
      { ko: '로제타석은 어떻게 상형문자 해독의 열쇠가 되었을까?', en: 'How did the Rosetta Stone become the key to decoding hieroglyphs?' },
      { ko: '클레오파트라는 어떤 인물이었을까?', en: 'What kind of figure was Cleopatra, really?' },
    ],
  },
  {
    id: 'history-world-wars',
    interestId: 'history',
    title: { ko: '세계대전과 그 영향', en: 'The World Wars and Their Impact' },
    blurb: { ko: '두 차례의 세계대전은 왜 일어났고, 오늘날 세계에 어떤 영향을 남겼을까?', en: 'Why did the World Wars happen, and how do they still shape the world today?' },
    vocabulary: [
      { term: { ko: '동맹국', en: 'Alliance' }, definition: { ko: '전쟁에서 서로 협력하기로 약속한 나라들의 모임', en: 'A group of nations that agree to cooperate, especially in war' } },
      { term: { ko: '휴전', en: 'Armistice / Ceasefire' }, definition: { ko: '전쟁 당사국들이 싸움을 잠시 멈추기로 한 합의', en: 'An agreement between warring parties to stop fighting' } },
      { term: { ko: '국제연합(UN)', en: 'United Nations (UN)' }, definition: { ko: '세계대전 이후 평화 유지를 위해 만들어진 국제기구', en: 'An international organization founded after the World Wars to maintain peace' } },
    ],
    facts: [
      { ko: '제1차 세계대전은 1914년부터 1918년까지 이어졌다.', en: 'World War I lasted from 1914 to 1918.' },
      { ko: '제2차 세계대전 이후 세계 평화를 위해 국제연합(UN)이 만들어졌다.', en: 'The United Nations was founded after World War II to help maintain global peace.' },
      { ko: '두 세계대전은 수많은 나라의 정치와 국경을 크게 바꾸어 놓았다.', en: 'Both World Wars dramatically reshaped the politics and borders of many nations.' },
    ],
    followUps: [
      { ko: '세계대전은 우리나라 역사에 어떤 영향을 주었을까?', en: 'How did the World Wars affect the history of my own country?' },
      { ko: '전쟁 이후 세계 질서는 어떻게 재편되었을까?', en: 'How was the global order reshaped after the wars?' },
      { ko: '전쟁을 막기 위한 국제기구들은 어떤 역할을 할까?', en: 'What role do international organizations play in preventing war?' },
    ],
  },
  {
    id: 'art-color-theory',
    interestId: 'art',
    title: { ko: '색채 이론의 기초', en: 'Basics of Color Theory' },
    blurb: { ko: '화가들은 색을 어떻게 선택하고 조합할까? 색채 이론의 기본을 알아보자.', en: 'How do artists choose and combine colors? Let\'s learn the basics of color theory.' },
    vocabulary: [
      { term: { ko: '원색', en: 'Primary color' }, definition: { ko: '다른 색을 섞어서는 만들 수 없는 기본 색 (빨강·파랑·노랑)', en: 'A base color that can\'t be made by mixing others (red, blue, yellow)' } },
      { term: { ko: '보색', en: 'Complementary color' }, definition: { ko: '색상환에서 서로 마주 보는, 강한 대비를 이루는 색', en: 'Colors opposite each other on the color wheel, creating strong contrast' } },
      { term: { ko: '색상환', en: 'Color wheel' }, definition: { ko: '색의 관계를 둥글게 배열해 보여주는 도표', en: 'A circular diagram showing the relationships between colors' } },
    ],
    facts: [
      { ko: '원색을 섞으면 주황, 초록, 보라 같은 2차색이 만들어진다.', en: 'Mixing primary colors creates secondary colors like orange, green, and purple.' },
      { ko: '보색을 나란히 쓰면 그림에 강한 시각적 대비가 생긴다.', en: 'Placing complementary colors side by side creates strong visual contrast.' },
      { ko: '차가운 색과 따뜻한 색은 그림의 분위기를 다르게 만든다.', en: 'Cool and warm colors create very different moods in a painting.' },
    ],
    followUps: [
      { ko: '색은 사람의 감정에 어떤 영향을 줄까? (색채 심리학)', en: 'How does color affect human emotion? (Color psychology)' },
      { ko: '인상주의 화가들은 색을 어떻게 사용했을까?', en: 'How did Impressionist painters use color?' },
      { ko: '디지털 디자인에서는 색을 어떻게 표현할까? (RGB, HEX)', en: 'How is color represented in digital design? (RGB, HEX)' },
    ],
  },
  {
    id: 'art-famous-painters',
    interestId: 'art',
    title: { ko: '유명 화가들의 화풍', en: 'Styles of Famous Painters' },
    blurb: { ko: '고흐, 피카소 같은 화가들은 왜 그렇게 서로 다른 그림을 그렸을까?', en: 'Why did painters like Van Gogh and Picasso paint in such different styles?' },
    vocabulary: [
      { term: { ko: '화풍', en: 'Artistic style' }, definition: { ko: '한 화가만의 독특한 표현 방식', en: 'An artist\'s unique way of expressing their work' } },
      { term: { ko: '인상주의', en: 'Impressionism' }, definition: { ko: '빛과 순간의 느낌을 표현하려 한 19세기 미술 사조', en: 'A 19th-century art movement focused on capturing light and fleeting moments' } },
      { term: { ko: '입체주의', en: 'Cubism' }, definition: { ko: '사물을 여러 각도에서 본 모습을 한 화면에 담는 화풍', en: 'A style depicting objects from multiple angles at once' } },
    ],
    facts: [
      { ko: '반 고흐는 강렬한 색채와 굵은 붓터치로 감정을 표현했다.', en: 'Van Gogh expressed emotion through bold colors and thick brushstrokes.' },
      { ko: '피카소는 입체주의를 창시해 사물을 여러 시점에서 동시에 그렸다.', en: 'Picasso pioneered Cubism, painting objects from multiple viewpoints at once.' },
      { ko: '화풍은 화가가 살던 시대와 개인적 경험의 영향을 받는다.', en: 'An artist\'s style is shaped by both their era and personal experience.' },
    ],
    followUps: [
      { ko: '한국의 전통 회화는 서양화와 어떻게 다를까?', en: 'How does traditional Korean painting differ from Western painting?' },
      { ko: '현대 미술은 왜 이해하기 어려울 때가 많을까?', en: 'Why does contemporary art often feel hard to understand?' },
      { ko: '미술관은 작품을 어떻게 선정하고 전시할까?', en: 'How do museums select and curate the works they display?' },
    ],
  },
];

export function getInterest(id: string): Interest | undefined {
  return INTERESTS.find((i) => i.id === id);
}

export function getSeed(id: string): TopicSeed | undefined {
  return TOPIC_SEEDS.find((s) => s.id === id);
}

export function getSeedsForInterest(interestId: string): TopicSeed[] {
  return TOPIC_SEEDS.filter((s) => s.interestId === interestId);
}
