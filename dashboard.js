// dashboard.js
// museDashboardData (dashboard-data.js에서 정의) 를 사용해 차트/요약을 렌더링

document.addEventListener("DOMContentLoaded", function () {
  if (typeof museDashboardData === "undefined") {
    console.warn("museDashboardData 가 정의되어 있지 않습니다.");
    return;
  }

  const data = museDashboardData;

  /* ---------- 상단 요약 카드 ---------- */
  const summary = data.summary;
  const totalVisitorsEl = document.getElementById("stat-totalVisitors");
  const totalSessionsEl = document.getElementById("stat-totalSessions");
  const avgSessionEl = document.getElementById("stat-avgSessionDuration");
  const avgItemsEl = document.getElementById("stat-avgItemsPerUser");

  if (totalVisitorsEl) totalVisitorsEl.textContent = summary.totalVisitors.toLocaleString();
  if (totalSessionsEl) totalSessionsEl.textContent = summary.totalSessions.toLocaleString();
  if (avgSessionEl) avgSessionEl.textContent = summary.avgSessionDuration.toFixed(1);
  if (avgItemsEl) {
    const avgItems = (summary.avgArtifactsPerUser + summary.avgContentsPerUser).toFixed(1);
    avgItemsEl.textContent = avgItems + "개";
  }

  /* ---------- 방문자 성별/연령 차트 ---------- */
  const visitorsCanvas = document.getElementById("chartVisitors");
  if (visitorsCanvas) {
    const gender = data.visitorsByGender;
    const age = data.visitorsByAge;

    new Chart(visitorsCanvas.getContext("2d"), {
      type: "bar",
      data: {
        labels: age.map(a => a.label),
        datasets: [
          {
            type: "bar",
            label: "연령 비율(%)",
            data: age.map(a => a.value)
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
          title: {
            display: true,
            text: `성별 비율 F:${gender.female}% M:${gender.male}% 기타:${gender.other}%`
          }
        },
        scales: {
          y: { beginAtZero: true, max: 40 }
        }
      }
    });
  }

  /* 공통 함수: 수평 막대 차트 렌더링 */
  function renderHorizontalBar(canvasId, title, items) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: items.map(i => i.name),
        datasets: [
          {
            label: title,
            data: items.map(i => i.value)
          }
        ]
      },
      options: {
        indexAxis: "y",
        responsive: true,
        plugins: {
          legend: { display: false },
          title: {
            display: false
          },
          tooltip: {
            callbacks: {
              label: ctx => `${ctx.formattedValue} 회`
            }
          }
        },
        scales: {
          x: {
            beginAtZero: true
          }
        }
      }
    });
  }

  /* ---------- 유물/콘텐츠 TOP10 차트 ---------- */
  renderHorizontalBar(
    "chartArtifactsClicks",
    "유물 클릭 수",
    data.topArtifactsByClicks
  );
  renderHorizontalBar(
    "chartArtifactsLikes",
    "유물 찜 수",
    data.topArtifactsByLikes
  );
  renderHorizontalBar(
    "chartContentsClicks",
    "콘텐츠 클릭 수",
    data.topContentsByClicks
  );
  renderHorizontalBar(
    "chartContentsLikes",
    "콘텐츠 찜 수",
    data.topContentsByLikes
  );

  /* ---------- 키워드 워드클라우드 (간단 버전) ---------- */
  const cloudContainer = document.getElementById("keyword-cloud");
  if (cloudContainer) {
    cloudContainer.innerHTML = "";

    const maxWeight = Math.max(...data.keywordWeights.map(k => k.weight));

    data.keywordWeights.forEach(k => {
      const span = document.createElement("span");
      const ratio = k.weight / maxWeight; // 0~1
      const fontSize = 0.7 + ratio * 1.1; // 0.7rem ~ 1.8rem 정도

      span.textContent = k.tag;
     const maxWeight = Math.max(...data.keywordWeights.map(k => k.weight));

data.keywordWeights.forEach(k => {
  const span = document.createElement("span");
  const ratio = k.weight / maxWeight;

  // 글씨 크기 범위 (0.9rem ~ 1.8rem)
  const fontSize = 0.9 + ratio * 0.9;

  span.textContent = k.tag;
  span.style.fontSize = fontSize.toFixed(2) + "rem";
  span.style.opacity = (0.65 + ratio * 0.35).toFixed(2);
  span.style.padding = "2px 6px";
  span.style.whiteSpace = "nowrap";    // 단어 자체는 줄바꿈 X

  cloudContainer.appendChild(span);
});

      span.style.opacity = (0.6 + ratio * 0.4).toFixed(2);

      cloudContainer.appendChild(span);
    });
  }
});
