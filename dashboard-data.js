// dashboard-data.js
// MuseTiv 대시보드용 가상 데이터

const museDashboardData = {
  summary: {
    totalVisitors: 12840,       // 총 방문자 수
    totalSessions: 19430,       // 총 세션 수
    avgSessionDuration: 6.8,    // 평균 체류 시간(분)
    avgArtifactsPerUser: 4.2,   // 1인당 열람 유물 수
    avgContentsPerUser: 3.6     // 1인당 열람 콘텐츠 수
  },

  visitorsByGender: {
    female: 58,   // %
    male: 40,
    other: 2
  },

  visitorsByAge: [
    { label: "10대", value: 12 },
    { label: "20대", value: 34 },
    { label: "30대", value: 28 },
    { label: "40대", value: 16 },
    { label: "50대+", value: 10 }
  ],

  // 유물 클릭 TOP10
  topArtifactsByClicks: [
    { name: "백자 달항아리", value: 420 },
    { name: "청자 상감운학문 매병", value: 390 },
    { name: "금동미륵보살반가사유상", value: 365 },
    { name: "천마도", value: 310 },
    { name: "신라 금관", value: 295 },
    { name: "훈민정음 해례본(영인본)", value: 270 },
    { name: "팔만대장경 목판(복제)", value: 245 },
    { name: "반가사유상 모형", value: 230 },
    { name: "지구의(혼천의 모형)", value: 215 },
    { name: "조선 왕실 의궤(복제)", value: 198 }
  ],

  // 유물 찜 TOP10
  topArtifactsByLikes: [
    { name: "금동미륵보살반가사유상", value: 510 },
    { name: "백자 달항아리", value: 480 },
    { name: "신라 금관", value: 455 },
    { name: "천마도", value: 430 },
    { name: "청자 상감운학문 매병", value: 410 },
    { name: "조선 왕실 의궤(복제)", value: 340 },
    { name: "팔만대장경 목판(복제)", value: 320 },
    { name: "지구의(혼천의 모형)", value: 305 },
    { name: "월인석보 목판(복제)", value: 280 },
    { name: "해시계(앙부일구 모형)", value: 260 }
  ],

  // 콘텐츠 클릭 TOP10
  topContentsByClicks: [
    { name: "미스터 션샤인", value: 610 },
    { name: "육룡이 나르샤", value: 580 },
    { name: "킹덤", value: 540 },
    { name: "옷소매 붉은 끝동", value: 505 },
    { name: "파친코", value: 470 },
    { name: "노량", value: 430 },
    { name: "헤어질 결심", value: 415 },
    { name: "사도", value: 380 },
    { name: "밀정", value: 355 },
    { name: "왕의 남자", value: 340 }
  ],

  // 콘텐츠 찜 TOP10
  topContentsByLikes: [
    { name: "옥중화", value: 520 },
    { name: "옷소매 붉은 끝동", value: 510 },
    { name: "미스터 션샤인", value: 500 },
    { name: "육룡이 나르샤", value: 485 },
    { name: "킹덤", value: 470 },
    { name: "파친코", value: 450 },
    { name: "왕의 남자", value: 420 },
    { name: "노량", value: 405 },
    { name: "사도", value: 390 },
    { name: "밀정", value: 375 }
  ],

  // 태그/키워드 워드클라우드용 가중치
  keywordWeights: [
    { tag: "사극", weight: 38 },
    { tag: "왕실", weight: 28 },
    { tag: "무사", weight: 24 },
    { tag: "궁궐", weight: 22 },
    { tag: "조선", weight: 30 },
    { tag: "고려", weight: 18 },
    { tag: "신라", weight: 16 },
    { tag: "전쟁", weight: 20 },
    { tag: "식민지", weight: 14 },
    { tag: "독립운동", weight: 12 },
    { tag: "귀신", weight: 10 },
    { tag: "역사 스릴러", weight: 9 },
    { tag: "로맨스", weight: 11 },
    { tag: "판타지", weight: 8 }
  ]
};
