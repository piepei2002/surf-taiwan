// 新增浪點時，只需要依 AGENTS.md 規則在此陣列增加一筆資料。
const LICENSE = 'https://creativecommons.org/licenses/by-sa/4.0/';
const spots = [
  {
    id:'wushi-harbor', name:'烏石港', region:'北部', location:'宜蘭縣頭城鎮',
    description:'烏石港位於宜蘭頭城，鄰近外澳海岸，是東北部知名的衝浪區域。海岸與港口景觀是這裡的特色，實際下水位置應依現場海況及管制資訊判斷。',
    tips:'留意浪況、離岸流及港口周邊活動；不要在航道內衝浪。',
    source:'https://swelleye.com/surf-spots/',
    image:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Wushi_Harbor_and_Waiao_Beach.jpg?width=960',
    imagePage:'https://commons.wikimedia.org/wiki/File:Wushi_Harbor_and_Waiao_Beach.jpg',
    credit:'Yu tptw', license:'CC BY-SA 4.0',licenseUrl:LICENSE
  },
  {
    id:'songbo-harbor', name:'松柏港', region:'中部', location:'臺中市大甲區',
    description:'松柏港北堤海域位於台中大甲，擁有寬闊沙灘與風力發電機海岸景觀，也是中部常見的衝浪活動地點。這裡是開放水域，海況與安全條件可能快速變化。',
    tips:'此區無人巡查，務必注意離岸流、潮汐、水深及現場安全告示。',
    source:'https://taichung.travel/ocean-realtime/zh-tw/northbreakwater-dajiasongbofishingharbor',
    image:'https://commons.wikimedia.org/wiki/Special:Redirect/file/2022_SongBo_Fishing_Port_N5.jpg?width=960',
    imagePage:'https://commons.wikimedia.org/wiki/File:2022_SongBo_Fishing_Port_N5.jpg',
    credit:'Taiwankengo', license:'CC BY-SA 4.0',licenseUrl:LICENSE
  },
  {
    id:'jinzun', name:'金樽', region:'東部', location:'臺東縣東河鄉',
    description:'金樽位於台東東河鄉，東海岸地形與海景相當有特色，也是台灣著名的衝浪地區之一。到訪時除了欣賞海岸景觀，也應先了解當天風浪與地形風險。',
    tips:'東海岸海象多變，應先觀察浪區、海流與礁石等環境，量力而為。',
    source:'https://swelleye.com/surf-spots/',
    image:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Jinzun_Fish_Harbor.jpg?width=960',
    imagePage:'https://commons.wikimedia.org/wiki/File:Jinzun_Fish_Harbor.jpg',
    credit:'Eric Deng', license:'CC BY-SA 4.0',licenseUrl:LICENSE
  }
];

const grid = document.getElementById('spot-grid');
const buttons = document.querySelectorAll('[data-filter]');
function renderSpots(region='全部') {
  const selected = region === '全部' ? spots : spots.filter(s=>s.region===region);
  grid.replaceChildren();
  for (const s of selected) {
    const card = document.createElement('article'); card.className='spot-card';
    // 資料由專案維護者編輯；新增外部資料時應先驗證 URL 與文字。
    card.innerHTML = `<div class="spot-photo"><img src="${s.image}" alt="${s.name}周邊海岸或港口景觀，非即時浪況" loading="lazy" referrerpolicy="no-referrer"><span class="spot-region">${s.region}</span></div><div class="spot-content"><span class="spot-location">${s.location}</span><h3>${s.name}</h3><p>${s.description}</p><div class="spot-tip"><strong>海域提醒｜</strong>${s.tips}</div><div class="spot-links"><a href="${s.source}" target="_blank" rel="noopener noreferrer">資料參考 ↗</a><a href="${s.imagePage}" target="_blank" rel="noopener noreferrer">照片來源 ↗</a></div><div class="credit">攝影：${s.credit} · <a href="${s.licenseUrl}" target="_blank" rel="noopener noreferrer">${s.license}</a><br>來源：<a href="${s.imagePage}" target="_blank" rel="noopener noreferrer">Wikimedia Commons</a> · 網頁裁切顯示（未修改原始檔案）</div></div>`;
    grid.appendChild(card);
  }
}
buttons.forEach(button => button.addEventListener('click', () => {
  buttons.forEach(b=>{b.classList.remove('active');b.setAttribute('aria-pressed','false');});
  button.classList.add('active');button.setAttribute('aria-pressed','true');
  renderSpots(button.dataset.filter);
}));
renderSpots();
