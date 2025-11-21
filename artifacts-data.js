// artifacts-data.js
// 뮤즈티브에서 사용할 대표 유물 데이터셋 (이미지는 로컬 파일 경로)

const artifactsDataset = [
  {
    id: "baekja_dalhangari",
    name: "백자 달항아리",
    // museum.go.kr 소장품 상세페이지
    museumUrl: "https://www.museum.go.kr/site/main/relic/search/view?relicId=941",
    // 네가 직접 저장할 이미지 파일 경로 (원하는 이름으로 바꿔도 됨)
    image: "baekja_dalhangari.jpg",
    tags: ["조선", "백자", "달항아리"]
  },
  {
    id: "cheongja_unhak_maebyeong",
    name: "청자 상감 운학문 매병",
    museumUrl: "https://www.emuseum.go.kr/detail?relicId=PS0100201300600177400000",
    image: "cheongja_unhak_maebyeong.jpg",
    tags: ["고려", "청자", "운학문"]
  },
  {
    id: "gilt_maitreya_thought",
    name: "금동미륵보살반가사유상",
    museumUrl: "https://www.museum.go.kr/site/main/relic/search/view?relicId=1256",
    image: "gilt_maitreya_thought.jpg",
    tags: ["삼국시대", "불상", "반가사유상"]
  },
  {
    id: "silla_gold_crown",
    name: "신라 금관",
    museumUrl: "https://www.emuseum.go.kr/detail?relicId=PS0100100100100943500000",
    image: "silla_gold_crown.jpg",
    tags: ["신라", "금관", "왕실"]
  },
  {
    id: "cheonmado_stamp",
    name: "한국미술 5천년 특별우표(천마도)",
    museumUrl: "https://www.emuseum.go.kr/detail?relicId=PS0100200100103776500000",
    image: "cheonmado_stamp.jpg",
    tags: ["천마도", "우표", "근현대"]
  },
  {
    id: "mireuk_bangga_replica",
    name: "미륵반가사유상 복제품",
    museumUrl: "https://www.emuseum.go.kr/m/detail?relicId=PS0100200100900103800000",
    image: "img/artifacts/mireuk_bangga_replica.jpg",
    tags: ["불상", "복제", "전시"]
  },
  {
    id: "cheonmundo",
    name: "천문도",
    museumUrl: "https://www.museum.go.kr/site/main/relic/search/view?relicId=73434",
    image: "img/artifacts/cheonmundo.jpg",
    tags: ["조선", "천문도", "전통과학"]
  },
  {
    id: "cheongja_cloud_crane",
    name: "청자 상감 구름·학무늬 매병",
    museumUrl: "https://www.museum.go.kr/MUSEUM/contents/M0505000000.do?relicId=1126&schM=view&searchId=search",
    image: "img/artifacts/cheongja_cloud_crane.jpg",
    tags: ["고려", "매병", "운학문"]
  }
];
