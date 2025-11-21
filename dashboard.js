// dashboard.js
// museDashboardData (dashboard-data.js에서 정의) 를 사용해 차트/요약/워드클라우드를 렌더링
// Chart.js 글자색 전역 설정 (가장 강력한 방식)
Chart.defaults.color = "#f2f2f2";
Chart.defaults.font.family = "-apple-system, BlinkMacSystemFont, system-ui, sans-serif";

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

  /* ---------- 공통: 축/폰트 색을 밝게 세팅하는 옵션 ---------- */
  const axisColor = "#f2f2f2";
  const gridColor = "rgba(255, 255, 255, 0.08)";

  function makeBaseOptions(extra = {}) {
    return {
      responsive: true,
      plugins: {
        legend: {
          labels: {
            color: axisColor
          }
        },
        title: {
          color: axisColor,
          ...((extra.plugins && extra.plugins.title) || {})
        },
        tooltip: {
          bodyColor: "#ffffff",
          titleColor: "#ffffff",
        }
      },
      scales: {
        x: {
          ticks: { color: axisColor },
          grid: { color: gridColor },
          ...((extra.scales && extra.scales.x) || {})
        },
        y: {
          ticks: { color: axisColor },
          grid: { color: gridColor },
          ...((extra.scales && extra.scales.y) || {})
        }
      },
      ...extra
    };
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
            label: "연령 비율(%)",
            data: age.map(a => a.value)
          }
        ]
      },
      options: makeBaseOptions({
        plugins: {
          title: {
            display: true,
            text: `성별 비율  ·  여성 ${gender.female}%  ·  남성 ${gender.male}%  ·  기타 ${gender.other}%`
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 40
          }
        }
      })
    });
  }

  /* ---------- 공통: 수평 막대 차트 ---------- */
  function renderHorizontalBar(canvasId, items) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: items.map(i => i.name),
        datasets: [
          {
            data: items.map(i => i.value)
          }
        ]
      },
      options: makeBaseOptions({
        indexAxis: "y",
        plugins: {
          legend: { display: false }
        },
        scales: {
          x: {
            beginAtZero: true
          }
        }
      })
    });
  }

  /* ---------- 유물/콘텐츠 TOP10 차트 ---------- */
  renderHorizontalBar("chartArtifactsClicks", data.topArtifactsByClicks);
  renderHorizontalBar("chartArtifactsLikes", data.topArtifactsByLikes);
  renderHorizontalBar("chartContentsClicks", data.topContentsByClicks);
  renderHorizontalBar("chartContentsLikes", data.topContentsByLikes);

  /* ---------- 키워드 워드클라우드 ---------- */
  const cloudContainer = document.getElementById("keyword-cloud");
  if (cloudContainer && Array.isArray(data.keywordWeights)) {
    cloudContainer.innerHTML = "";

    const maxWeight = Math.max(...data.keywordWeights.map(k => k.weight));

    data.keywordWeights.forEach(k => {
      const span = document.createElement("span");
      const ratio = k.weight / maxWeight;           // 0 ~ 1
      const fontSize = 0.9 + ratio * 0.9;           // 0.9rem ~ 1.8rem

      span.textContent = k.tag;
      span.style.fontSize = fontSize.toFixed(2) + "rem";
      span.style.opacity = (0.65 + ratio * 0.35).toFixed(2);
      span.style.padding = "2px 6px";
      span.style.whiteSpace = "nowrap";
      span.style.color = "#f2f2f2";

      cloudContainer.appendChild(span);
    });
  }
});
