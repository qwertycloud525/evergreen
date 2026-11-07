const TIERS = [
  { name: "Master",   req: "500건 이상", fee: "1.0%", perk: "고객센터 우선 처리권", color: "#E8871E" },
  { name: "Diamond",  req: "300건 이상", fee: "1.5%", perk: "고객센터 우선 처리권", color: "#8FD3E8" },
  { name: "Platinum", req: "200건 이상", fee: "2.0%", perk: "고객센터 우선 처리권", color: "#C9D3DC" },
  { name: "Gold",     req: "100건 이상", fee: "3.0%", perk: "", color: "#F2C14E" },
  { name: "Silver",   req: "50건 이상",  fee: "3.0%", perk: "", color: "#B8B8B8" },
  { name: "Bronze",   req: "10건 이상",  fee: "3.5%", perk: "", color: "#C07A42" },
  { name: "구매자",    req: "기본 등급",  fee: "4.0%", perk: "", color: "#8C705A" },
];

const COINS = [
  { name: "비트코인", ticker: "BTC", symbol: "₿", color: "#F2A447" },
  { name: "이더리움", ticker: "ETH", symbol: "Ξ", color: "#8FD3E8" },
  { name: "라이트코인", ticker: "LTC", symbol: "Ł", color: "#C9D3DC" },
  { name: "리플", ticker: "XRP", symbol: "✕", color: "#F3E7D6" },
  { name: "테더", ticker: "USDT", symbol: "₮", color: "#6FCF97" },
  { name: "트론", ticker: "TRX", symbol: "T", color: "#C9472F" },
  { name: "도지코인", ticker: "DOGE", symbol: "Ð", color: "#F2C14E" },
  { name: "비트코인캐시", ticker: "BCH", symbol: "₿", color: "#E8871E" },
];

function renderTiers() {
  const table = document.getElementById("tier-table");
  if (!table) return;

  const head = document.createElement("div");
  head.className = "tier-row head";
  head.innerHTML = `
    <span>등급</span>
    <span>이용 실적</span>
    <span>송금 수수료</span>
    <span>혜택</span>
  `;
  table.appendChild(head);

  TIERS.forEach((tier) => {
    const row = document.createElement("div");
    row.className = "tier-row";
    row.innerHTML = `
      <span class="tier-name"><span class="tier-dot" style="background:${tier.color}"></span>${tier.name}</span>
      <span class="tier-req">${tier.req}</span>
      <span class="tier-fee">${tier.fee}</span>
      <span class="tier-perk">${tier.perk}</span>
    `;
    table.appendChild(row);
  });
}

function renderCoins() {
  const grid = document.getElementById("coin-grid");
  if (!grid) return;

  COINS.forEach((coin) => {
    const card = document.createElement("div");
    card.className = "coin-card";
    card.innerHTML = `
      <span class="coin-badge" style="background:${coin.color}">${coin.symbol}</span>
      <span class="coin-name">${coin.name}</span>
      <span class="coin-ticker">${coin.ticker}</span>
    `;
    grid.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderTiers();
  renderCoins();
});
