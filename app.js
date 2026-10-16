const ICONS = {
  grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
  box: '<path d="m12 3 9 4.5v9L12 21l-9-4.5v-9L12 3Z"/><path d="m3.5 7.7 8.5 4.4 8.5-4.4M12 12v9"/>',
  arrows: '<path d="M7 7h13m0 0-4-4m4 4-4 4"/><path d="M17 17H4m0 0 4 4m-4-4 4-4"/>',
  tag: '<path d="M20.5 13 13 20.5a2.1 2.1 0 0 1-3 0L3.5 14V4h10l7 7a1.4 1.4 0 0 1 0 2Z"/><circle cx="8" cy="8" r="1.3"/>',
  truck: '<path d="M3 6h11v11H3z"/><path d="M14 10h4l3 3v4h-7z"/><circle cx="7.5" cy="18" r="2"/><circle cx="17.5" cy="18" r="2"/>',
  pin: '<path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
  bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10 21h4"/>',
  chart: '<path d="M3 3v18h18"/><path d="m7 14 4-4 4 3 6-7"/>',
  shield: '<path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/>',
  help: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.6 2.6 0 1 1 4.5 1.8c-1.1 1-2 1.1-2 3"/><path d="M12 17h.01"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5M12 15V3"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  edit: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z"/>',
  trash: '<path d="M3 6h18M8 6V4h8v2m3 0-1 14H6L5 6m4 4v6m6-6v6"/>',
  close: '<path d="m18 6-12 12M6 6l12 12"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  coins: '<circle cx="8" cy="8" r="5"/><path d="M11.5 11.5A5 5 0 1 1 12 17"/><path d="M8 6v4m-2-2h4m5 7v4m-2-2h4"/>',
  layers: '<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 16l9 5 9-5"/>',
  package: '<path d="m12 3 9 4.5v9L12 21l-9-4.5v-9L12 3Z"/><path d="M12 12 3.5 7.7M12 12l8.5-4.3M12 12v9"/>',
  logout: '<path d="M10 17l5-5-5-5m5 5H3"/><path d="M12 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-6"/>',
};

const PAGE_META = {
  dashboard: ["Visão geral", "PAINEL DE CONTROLE", "Acompanhe o desempenho do seu estoque em tempo real."],
  products: ["Produtos", "CATÁLOGO", "Gerencie os produtos cadastrados no seu inventário."],
  movements: ["Movimentações", "OPERAÇÃO", "Consulte entradas e saídas registradas no estoque."],
  categories: ["Categorias", "ORGANIZAÇÃO", "Organize seus produtos por categoria."],
  suppliers: ["Fornecedores", "PARCEIROS", "Mantenha os contatos dos seus fornecedores em dia."],
  locations: ["Locais de estoque", "ARMAZENAMENTO", "Visualize e organize os locais de armazenamento."],
  alerts: ["Alertas de estoque", "ATENÇÃO", "Produtos que precisam de reposição ou acompanhamento."],
  reports: ["Relatórios", "ANÁLISE", "Resumos do inventário para apoiar suas decisões."],
  permissions: ["Permissões", "ADMINISTRAÇÃO", "Perfis de acesso e permissões da equipe."],
};

const INITIAL_DATA = {
  products: [
    { id: "p-1001", name: "Caderno universitário 10 matérias", sku: "CAD-001", category: "Papelaria", supplier: "Papel & Cia", location: "Prateleira A1", quantity: 148, minimum: 40, price: 18.9 },
    { id: "p-1002", name: "Caneta esferográfica azul", sku: "CAN-014", category: "Papelaria", supplier: "Papel & Cia", location: "Prateleira A2", quantity: 32, minimum: 50, price: 2.5 },
    { id: "p-1003", name: "Mouse sem fio ergonômico", sku: "TEC-208", category: "Eletrônicos", supplier: "TechSul", location: "Estoque B1", quantity: 76, minimum: 20, price: 64.9 },
    { id: "p-1004", name: "Copo térmico inox 450 ml", sku: "UTL-032", category: "Utilidades", supplier: "Casa & Co", location: "Prateleira C3", quantity: 0, minimum: 15, price: 42 },
    { id: "p-1005", name: "Teclado compacto USB", sku: "TEC-115", category: "Eletrônicos", supplier: "TechSul", location: "Estoque B1", quantity: 53, minimum: 20, price: 89.9 },
    { id: "p-1006", name: "Bloco adesivo colorido", sku: "CAD-026", category: "Papelaria", supplier: "Papel & Cia", location: "Prateleira A3", quantity: 24, minimum: 30, price: 8.75 },
    { id: "p-1007", name: "Garrafa de água 750 ml", sku: "UTL-041", category: "Utilidades", supplier: "Casa & Co", location: "Prateleira C2", quantity: 91, minimum: 25, price: 35.5 },
  ],
  categories: ["Papelaria", "Eletrônicos", "Utilidades", "Acessórios"],
  suppliers: [
    { name: "Papel & Cia", contact: "contato@papelecia.com.br", phone: "(11) 3456-7890" },
    { name: "TechSul", contact: "vendas@techsul.com.br", phone: "(11) 3344-5678" },
    { name: "Casa & Co", contact: "oi@casaeco.com.br", phone: "(11) 3210-9876" },
  ],
  locations: [
    { name: "Prateleira A1", description: "Papelaria — corredor A" },
    { name: "Prateleira A2", description: "Papelaria — corredor A" },
    { name: "Estoque B1", description: "Eletrônicos — depósito B" },
    { name: "Prateleira C3", description: "Utilidades — corredor C" },
  ],
  movements: [],
};

function loadData() {
  try {
    const saved = localStorage.getItem("estoque-mais-data");
    if (!saved) return structuredClone(INITIAL_DATA);
    const parsed = JSON.parse(saved);
    for (const key of Object.keys(INITIAL_DATA)) {
      if (!Array.isArray(parsed[key])) throw new Error(`Dados inválidos: ${key}`);
    }
    return parsed;
  } catch (error) {
    console.error("Não foi possível carregar os dados salvos do inventário.", error);
    return structuredClone(INITIAL_DATA);
  }
}

let state = loadData();
let currentPage = "dashboard";
let productSearch = "";
let statusFilter = "all";
let categoryFilter = "all";
let movementFilter = "all";
const pageContent = document.querySelector("#page-content");
const modalRoot = document.querySelector("#modal-root");
const toastRegion = document.querySelector("#toast-region");

function icon(name) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ICONS.box}</svg>`;
}

document.querySelectorAll("[data-icon]").forEach((element) => {
  element.innerHTML = icon(element.dataset.icon);
});

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[character]);
}

function saveData() {
  try {
    localStorage.setItem("estoque-mais-data", JSON.stringify(state));
    return true;
  } catch (error) {
    console.error("Não foi possível salvar os dados do inventário.", error);
    toast("Não foi possível salvar os dados neste navegador.", true);
    return false;
  }
}

function currency(value) {
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);
}

function formatDate(value) {
  return new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "short", year: "numeric" }).format(new Date(value));
}

function productStatus(product) {
  if (Number(product.quantity) <= 0) return "out";
  if (Number(product.quantity) <= Number(product.minimum)) return "low";
  return "ok";
}

function toast(message, error = false) {
  const element = document.createElement("div");
  element.className = `toast${error ? " error" : ""}`;
  element.innerHTML = `${icon(error ? "close" : "check")}<span>${escapeHtml(message)}</span>`;
  toastRegion.append(element);
  window.setTimeout(() => element.remove(), 3200);
}

function navigate(page) {
  if (!PAGE_META[page]) return;
  currentPage = page;
  document.querySelector("#sidebar").classList.remove("open");
  renderPage();
}

function pageHeading() {
  const [title, eyebrow, subtitle] = PAGE_META[currentPage];
  let action = "";
  if (["dashboard", "products"].includes(currentPage)) action = `<button class="button button-primary" data-action="new-product">${icon("plus")}Novo produto</button>`;
  else if (currentPage === "movements") action = `<button class="button button-secondary" data-action="stock-out">${icon("logout")}Registrar saída</button><button class="button button-primary" data-action="stock-in">${icon("plus")}Registrar entrada</button>`;
  else if (["categories", "suppliers", "locations"].includes(currentPage)) action = `<button class="button button-primary" data-action="new-record">${icon("plus")}Adicionar ${currentPage === "categories" ? "categoria" : currentPage === "suppliers" ? "fornecedor" : "local"}</button>`;
  else if (currentPage === "reports") action = `<button class="button button-secondary" data-action="export">${icon("download")}Exportar dados</button>`;
  return `<div class="page-heading"><div><p class="eyebrow">${eyebrow}</p><h1>${title}</h1><p class="page-subtitle">${subtitle}</p></div><div class="heading-actions">${action}</div></div>`;
}

function productRows(products, actions = true) {
  if (!products.length) return `<tr><td class="empty-state" colspan="${actions ? 7 : 6}">Nenhum produto encontrado com esses filtros.</td></tr>`;
  return products.map((product, index) => {
    const status = productStatus(product);
    const label = status === "ok" ? "Em estoque" : status === "low" ? "Estoque baixo" : "Sem estoque";
    return `<tr><td><div class="product-cell"><span class="product-thumb tone-${index % 4}">${icon("package")}</span><span><span class="product-name">${escapeHtml(product.name)}</span><span class="product-sku">${escapeHtml(product.sku)}</span></span></div></td><td>${escapeHtml(product.category)}</td><td>${escapeHtml(product.location || "—")}</td><td class="stock-quantity">${Number(product.quantity)} un.</td><td>${currency(Number(product.price) || 0)}</td><td><span class="status status-${status}">${label}</span></td>${actions ? `<td><div class="row-actions"><button class="row-action" data-action="edit-product" data-id="${escapeHtml(product.id)}" aria-label="Editar ${escapeHtml(product.name)}">${icon("edit")}</button><button class="row-action" data-action="delete-product" data-id="${escapeHtml(product.id)}" aria-label="Excluir ${escapeHtml(product.name)}">${icon("trash")}</button></div></td>` : ""}</tr>`;
  }).join("");
}

function filteredProducts(products = state.products) {
  const query = productSearch.trim().toLocaleLowerCase("pt-BR");
  return products.filter((product) => {
    const matchesQuery = !query || [product.name, product.sku, product.category, product.supplier, product.location]
      .some((value) => String(value || "").toLocaleLowerCase("pt-BR").includes(query));
    return matchesQuery && (statusFilter === "all" || productStatus(product) === statusFilter)
      && (categoryFilter === "all" || product.category === categoryFilter);
  });
}

function productTable(products, dashboard = false, actions = true) {
  return `<div class="panel table-panel"><div class="table-toolbar"><div class="toolbar-title"><h2>${dashboard ? "Produtos recentes" : "Todos os produtos"}</h2><span class="result-count">${products.length} itens</span></div><div class="toolbar-controls"><label class="search-wrap">${icon("search")}<input type="search" data-search-products aria-label="Buscar produto" placeholder="Buscar produto..." value="${escapeHtml(productSearch)}"></label><select class="filter-select" data-filter-category aria-label="Filtrar por categoria"><option value="all">Categorias</option>${state.categories.map((category) => `<option value="${escapeHtml(category)}" ${categoryFilter === category ? "selected" : ""}>${escapeHtml(category)}</option>`).join("")}</select><select class="filter-select" data-filter-status aria-label="Filtrar por status"><option value="all" ${statusFilter === "all" ? "selected" : ""}>Todos os status</option><option value="ok" ${statusFilter === "ok" ? "selected" : ""}>Em estoque</option><option value="low" ${statusFilter === "low" ? "selected" : ""}>Estoque baixo</option><option value="out" ${statusFilter === "out" ? "selected" : ""}>Sem estoque</option></select>${dashboard ? "" : `<button class="button button-quiet" data-action="export">${icon("download")}Exportar</button>`}</div></div><div class="table-scroll"><table class="data-table"><thead><tr><th>Produto</th><th>Categoria</th><th>Local</th><th>Quantidade</th><th>Preço unitário</th><th>Status</th>${actions ? "<th>Ações</th>" : ""}</tr></thead><tbody>${productRows(products, actions)}</tbody></table></div>${dashboard ? `<div class="table-footer"><span>Exibindo ${products.length} de ${state.products.length} produtos</span><button class="text-link" data-page-link="products">Ver todos os produtos →</button></div>` : ""}</div>`;
}

function statsMarkup() {
  const total = state.products.reduce((sum, product) => sum + Number(product.quantity || 0), 0);
  const value = state.products.reduce((sum, product) => sum + Number(product.quantity || 0) * Number(product.price || 0), 0);
  const low = state.products.filter((product) => productStatus(product) === "low").length;
  const out = state.products.filter((product) => productStatus(product) === "out").length;
  const cards = [
    ["Produtos cadastrados", state.products.length, `${state.categories.length} categorias ativas`, "box", ""],
    ["Unidades em estoque", total.toLocaleString("pt-BR"), "Somatório das quantidades", "layers", "blue"],
    ["Valor em estoque", currency(value), "Com base no preço unitário", "coins", "purple"],
    ["Precisam de atenção", low + out, `${low} baixos · ${out} sem estoque`, "bell", "amber"],
  ];
  return `<div class="stat-grid">${cards.map(([label, amount, note, symbol, tone]) => `<article class="stat-card"><div class="stat-top"><span class="stat-label">${label}</span><span class="stat-icon ${tone}">${icon(symbol)}</span></div><div class="stat-value">${amount}</div><div class="stat-foot">${note}</div></article>`).join("")}</div>`;
}

function chartMarkup() {
  const days = Array.from({ length: 7 }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() - (6 - index));
    const key = date.toISOString().slice(0, 10);
    const amount = (type) => state.movements.filter((movement) => movement.date?.slice(0, 10) === key && movement.type === type).reduce((sum, movement) => sum + Number(movement.quantity), 0);
    return { label: new Intl.DateTimeFormat("pt-BR", { weekday: "short" }).format(date).replace(".", ""), entries: amount("in"), exits: amount("out") };
  });
  const max = Math.max(1, ...days.flatMap((day) => [day.entries, day.exits]));
  return `<div class="chart-wrap"><div class="chart"><div class="chart-y"><span>${max}</span><span>${Math.ceil(max * .75)}</span><span>${Math.ceil(max * .5)}</span><span>${Math.ceil(max * .25)}</span><span>0</span></div><div class="chart-plot"><i class="chart-grid"></i><i class="chart-grid"></i><i class="chart-grid"></i><i class="chart-grid"></i><div class="chart-bars">${days.map((day) => `<div class="chart-column" title="${day.entries} entradas, ${day.exits} saídas"><span class="chart-bar in" style="height:${Math.max(3, day.entries / max * 100)}%"></span><span class="chart-bar out" style="height:${Math.max(3, day.exits / max * 100)}%"></span></div>`).join("")}</div><div class="chart-days">${days.map((day) => `<span>${day.label}</span>`).join("")}</div></div></div></div><div class="chart-legend"><span><i class="legend-dot in"></i>Entradas</span><span><i class="legend-dot out"></i>Saídas</span></div>`;
}

function categoriesChart() {
  const colors = ["#68ad87", "#7794be", "#d2a65c", "#ae8ab8", "#d48072"];
  const count = Math.max(1, state.products.length);
  return `<div class="category-body">${state.categories.slice(0, 5).map((category, index) => {
    const products = state.products.filter((product) => product.category === category).length;
    const percent = Math.round(products / count * 100);
    return `<div class="category-row"><span class="category-color"><i style="background:${colors[index % colors.length]}"></i><span class="category-name">${escapeHtml(category)}</span></span><span class="category-percent">${percent}%</span><span class="category-count">${products}</span><span class="category-track"><span class="category-fill" style="width:${percent}%"></span></span></div>`;
  }).join("")}</div>`;
}

function renderDashboard() {
  pageContent.innerHTML = `${pageHeading()}${statsMarkup()}<div class="overview-grid"><section class="panel"><div class="panel-header"><div><h2 class="panel-title">Movimentação de estoque</h2><p class="panel-description">Entradas e saídas nos últimos 7 dias</p></div><select class="period-select" aria-label="Período do gráfico"><option>Últimos 7 dias</option></select></div>${chartMarkup()}</section><section class="panel"><div class="panel-header"><div><h2 class="panel-title">Produtos por categoria</h2><p class="panel-description">Distribuição do catálogo</p></div><span class="stat-icon">${icon("chart")}</span></div>${categoriesChart()}</section></div>${productTable(filteredProducts().slice(0, 5), true)}`;
}

function recordTable(key, heading, columns, productField) {
  const items = state[key];
  return `<div class="panel table-panel page-panel"><div class="table-toolbar"><div class="toolbar-title"><h2>${heading}</h2><span class="result-count">${items.length} ${key === "categories" ? "categorias" : key === "suppliers" ? "fornecedores" : "locais"}</span></div></div><div class="table-scroll"><table class="data-table"><thead><tr>${columns.map((column) => `<th>${column.label}</th>`).join("")}<th>Produtos</th></tr></thead><tbody>${items.length ? items.map((item) => `<tr>${columns.map((column) => `<td>${escapeHtml(typeof item === "string" ? item : item[column.key] || "—")}</td>`).join("")}<td>${state.products.filter((product) => product[productField] === (item.name || item)).length}</td></tr>`).join("") : `<tr><td class="empty-state" colspan="${columns.length + 1}">Nenhum registro cadastrado.</td></tr>`}</tbody></table></div></div>`;
}

function movementTable() {
  const movements = movementFilter === "all" ? state.movements : state.movements.filter((item) => item.type === movementFilter);
  const sorted = [...movements].sort((a, b) => new Date(b.date) - new Date(a.date));
  return `<div class="panel table-panel page-panel"><div class="table-toolbar"><div class="toolbar-title"><h2>Histórico de movimentações</h2><span class="result-count">${sorted.length} registros</span></div><div class="toolbar-controls"><select class="filter-select" aria-label="Filtrar tipo de movimentação" data-filter-movement><option value="all" ${movementFilter === "all" ? "selected" : ""}>Todas as movimentações</option><option value="in" ${movementFilter === "in" ? "selected" : ""}>Entradas</option><option value="out" ${movementFilter === "out" ? "selected" : ""}>Saídas</option></select></div></div><div class="table-scroll"><table class="data-table"><thead><tr><th>Tipo</th><th>Produto</th><th>Quantidade</th><th>Responsável</th><th>Observação</th><th>Data</th></tr></thead><tbody>${sorted.length ? sorted.map((movement) => {
    const product = state.products.find((item) => item.id === movement.productId);
    return `<tr><td><span class="movement-type ${movement.type}">${icon(movement.type === "in" ? "plus" : "logout")}${movement.type === "in" ? "Entrada" : "Saída"}</span></td><td>${escapeHtml(product?.name || "Produto removido")}</td><td class="stock-quantity">${movement.type === "in" ? "+" : "−"}${Number(movement.quantity)} un.</td><td>${escapeHtml(movement.responsible || "Não informado")}</td><td>${escapeHtml(movement.note || "—")}</td><td>${formatDate(movement.date)}</td></tr>`;
  }).join("") : `<tr><td class="empty-state" colspan="6">Nenhuma movimentação registrada. Registre uma entrada ou saída para começar.</td></tr>`}</tbody></table></div></div>`;
}

function renderPage() {
  const [title] = PAGE_META[currentPage];
  document.title = `Inventário — ${title}`;
  document.querySelector("#breadcrumb-current").textContent = title;
  document.querySelectorAll(".nav-item").forEach((item) => item.classList.toggle("active", item.dataset.page === currentPage));
  const alertCount = state.products.filter((product) => productStatus(product) !== "ok").length;
  document.querySelector("#sidebar-alert-count").textContent = alertCount;
  document.querySelector("#sidebar-alert-count").hidden = alertCount === 0;
  document.querySelector("#notification-dot").hidden = alertCount === 0;
  if (currentPage === "dashboard") return renderDashboard();
  if (currentPage === "products") {
    pageContent.innerHTML = `${pageHeading()}${productTable(filteredProducts())}`;
    return;
  }
  if (currentPage === "movements") {
    pageContent.innerHTML = `${pageHeading()}${movementTable()}`;
    return;
  }
  if (currentPage === "categories") {
    pageContent.innerHTML = `${pageHeading()}${recordTable("categories", "Categorias cadastradas", [{ label: "Nome da categoria", key: "name" }], "category")}`;
    return;
  }
  if (currentPage === "suppliers") {
    pageContent.innerHTML = `${pageHeading()}${recordTable("suppliers", "Fornecedores cadastrados", [{ label: "Fornecedor", key: "name" }, { label: "E-mail", key: "contact" }, { label: "Telefone", key: "phone" }], "supplier")}`;
    return;
  }
  if (currentPage === "locations") {
    pageContent.innerHTML = `${pageHeading()}${recordTable("locations", "Locais cadastrados", [{ label: "Local", key: "name" }, { label: "Descrição", key: "description" }], "location")}`;
    return;
  }
  if (currentPage === "alerts") {
    const items = state.products.filter((product) => productStatus(product) !== "ok");
    pageContent.innerHTML = `${pageHeading()}${statsMarkup()}<div class="panel table-panel page-panel"><div class="table-toolbar"><div class="toolbar-title"><h2>Reposição necessária</h2><span class="result-count">${items.length} produtos</span></div></div><div class="table-scroll"><table class="data-table"><thead><tr><th>Produto</th><th>Categoria</th><th>Local</th><th>Em estoque</th><th>Estoque mínimo</th><th>Status</th><th>Ação</th></tr></thead><tbody>${items.length ? items.map((product, index) => `<tr><td><div class="product-cell"><span class="product-thumb tone-${index % 4}">${icon("package")}</span><span><span class="product-name">${escapeHtml(product.name)}</span><span class="product-sku">${escapeHtml(product.sku)}</span></span></div></td><td>${escapeHtml(product.category)}</td><td>${escapeHtml(product.location)}</td><td class="stock-quantity">${product.quantity} un.</td><td>${product.minimum} un.</td><td><span class="status status-${productStatus(product)}">${productStatus(product) === "out" ? "Sem estoque" : "Estoque baixo"}</span></td><td><button class="text-link" data-action="stock-in" data-id="${escapeHtml(product.id)}">Registrar entrada</button></td></tr>`).join("") : `<tr><td class="empty-state" colspan="7">Tudo certo — não há produtos abaixo do estoque mínimo.</td></tr>`}</tbody></table></div></div>`;
    return;
  }
  if (currentPage === "reports") {
    const value = state.products.reduce((sum, product) => sum + Number(product.quantity || 0) * Number(product.price || 0), 0);
    const units = state.products.reduce((sum, product) => sum + Number(product.quantity || 0), 0);
    const attention = state.products.filter((product) => productStatus(product) !== "ok").length;
    pageContent.innerHTML = `${pageHeading()}<div class="report-grid"><article class="panel report-card"><h3>Posição do estoque</h3><p>Valor total e produtos cadastrados no inventário.</p><div class="report-metric">${currency(value)}</div><p>${state.products.length} produtos · ${units.toLocaleString("pt-BR")} unidades</p><button class="button button-secondary" data-action="export">${icon("download")}Baixar relatório CSV</button></article><article class="panel report-card"><h3>Movimentação e reposição</h3><p>Resumo do histórico e dos itens que requerem atenção.</p><div class="report-metric">${state.movements.length}</div><p>movimentações registradas · ${attention} produtos para revisar</p><button class="button button-secondary" data-page-link="movements">${icon("arrows")}Ver movimentações</button></article></div>${productTable(filteredProducts(), false, false)}`;
    return;
  }
  if (currentPage === "permissions") {
    pageContent.innerHTML = `${pageHeading()}<div class="panel page-panel"><div class="panel-header"><div><h2 class="panel-title">Perfis de acesso</h2><p class="panel-description">As permissões abaixo são uma referência para o controle de acesso da equipe.</p></div><span class="stat-icon">${icon("shield")}</span></div><div class="table-scroll"><table class="data-table"><thead><tr><th>Perfil</th><th>Produtos</th><th>Movimentações</th><th>Relatórios</th><th>Usuários</th></tr></thead><tbody><tr><td><strong>Administrador</strong></td><td>Acesso total</td><td>Acesso total</td><td>Acesso total</td><td>Gerenciar</td></tr><tr><td><strong>Gerente</strong></td><td>Acesso total</td><td>Acesso total</td><td>Visualizar</td><td>Visualizar</td></tr><tr><td><strong>Estoquista</strong></td><td>Visualizar</td><td>Registrar</td><td>Sem acesso</td><td>Sem acesso</td></tr></tbody></table></div><p class="permissions-note">Esta tela é demonstrativa. A aplicação ainda não possui autenticação nem controle de acesso no servidor.</p></div>`;
    return;
  }
  pageContent.innerHTML = `${pageHeading()}<div class="panel empty-state-block"><span class="empty-icon">${icon("box")}</span><strong>Em breve</strong><p>Esta área estará disponível nas próximas atualizações.</p></div>`;
}

function modalMarkup(title, subtitle, body) {
  return `<div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><div class="modal-header"><div><h2 id="modal-title">${title}</h2><p>${subtitle}</p></div><button class="modal-close" data-action="close-modal" aria-label="Fechar">${icon("close")}</button></div>${body}</div>`;
}

function openModal(markup) {
  modalRoot.innerHTML = markup;
  modalRoot.addEventListener("click", (event) => {
    if (event.target === modalRoot) closeModal();
  }, { once: true });
  modalRoot.querySelector("input, select, textarea")?.focus();
}

function closeModal() {
  modalRoot.innerHTML = "";
}

function selectOptions(values, selected = "") {
  return values.map((value) => `<option value="${escapeHtml(value)}" ${value === selected ? "selected" : ""}>${escapeHtml(value)}</option>`).join("");
}

function openProductModal(product = null) {
  const editing = Boolean(product);
  const body = `<form class="modal-form" id="product-form"><div class="form-grid">
    <div class="field full"><label for="product-name">Nome do produto *</label><input id="product-name" name="name" required maxlength="100" value="${escapeHtml(product?.name || "")}" placeholder="Ex.: Caderno universitário"></div>
    <div class="field"><label for="product-sku">Código SKU *</label><input id="product-sku" name="sku" required maxlength="32" value="${escapeHtml(product?.sku || "")}" placeholder="Ex.: CAD-001"></div>
    <div class="field"><label for="product-category">Categoria *</label><select id="product-category" name="category" required><option value="">Selecione uma categoria</option>${selectOptions(state.categories, product?.category || "")}</select></div>
    <div class="field"><label for="product-supplier">Fornecedor</label><select id="product-supplier" name="supplier"><option value="">Selecione</option>${selectOptions(state.suppliers.map((item) => item.name), product?.supplier || "")}</select></div>
    <div class="field"><label for="product-location">Local de armazenamento</label><select id="product-location" name="location"><option value="">Selecione</option>${selectOptions(state.locations.map((item) => item.name), product?.location || "")}</select></div>
    <div class="field"><label for="product-quantity">Quantidade atual *</label><input id="product-quantity" name="quantity" type="number" min="0" step="1" required value="${escapeHtml(product?.quantity ?? 0)}"></div>
    <div class="field"><label for="product-minimum">Estoque mínimo *</label><input id="product-minimum" name="minimum" type="number" min="0" step="1" required value="${escapeHtml(product?.minimum ?? 1)}"></div>
    <div class="field full"><label for="product-price">Preço unitário (R$) *</label><input id="product-price" name="price" type="number" min="0" step="0.01" required value="${escapeHtml(product?.price ?? "")}" placeholder="0,00"></div>
  </div><div class="modal-footer"><button class="button button-secondary" type="button" data-action="close-modal">Cancelar</button><button class="button button-primary" type="submit">${icon("check")}${editing ? "Salvar alterações" : "Cadastrar produto"}</button></div></form>`;
  openModal(modalMarkup(editing ? "Editar produto" : "Novo produto", editing ? "Atualize as informações do produto." : "Preencha os dados para cadastrar um novo item.", body));
  modalRoot.querySelector("#product-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const sku = String(form.get("sku")).trim();
    if (state.products.some((item) => item.sku.toLocaleLowerCase("pt-BR") === sku.toLocaleLowerCase("pt-BR") && item.id !== product?.id)) {
      toast("Já existe um produto cadastrado com este SKU.", true);
      modalRoot.querySelector("#product-sku").focus();
      return;
    }
    const updated = { id: product?.id || `p-${Date.now()}`, name: String(form.get("name")).trim(), sku, category: String(form.get("category")), supplier: String(form.get("supplier")), location: String(form.get("location")), quantity: Number(form.get("quantity")), minimum: Number(form.get("minimum")), price: Number(form.get("price")) };
    if (editing) state.products = state.products.map((item) => item.id === product.id ? updated : item);
    else state.products.unshift(updated);
    saveData();
    closeModal();
    renderPage();
    toast(editing ? "Produto atualizado com sucesso." : "Produto cadastrado com sucesso.");
  });
}

function openMovementModal(type, productId = "") {
  const entry = type === "in";
  const body = `<form class="modal-form" id="movement-form"><div class="form-grid">
    <div class="field full"><label for="movement-product">Produto *</label><select id="movement-product" name="productId" required><option value="">Selecione o produto</option>${state.products.map((product) => `<option value="${escapeHtml(product.id)}" ${product.id === productId ? "selected" : ""}>${escapeHtml(product.name)} · ${escapeHtml(product.sku)} (${product.quantity} un.)</option>`).join("")}</select></div>
    <div class="field"><label for="movement-quantity">Quantidade *</label><input id="movement-quantity" name="quantity" type="number" min="1" step="1" required placeholder="Ex.: 10"></div>
    <div class="field"><label for="movement-responsible">Responsável</label><input id="movement-responsible" name="responsible" maxlength="60" value="Marina Costa"></div>
    <div class="field full"><label for="movement-note">Observação</label><textarea id="movement-note" name="note" maxlength="180" placeholder="${entry ? "Ex.: Reposição do fornecedor" : "Ex.: Separação de pedido"}"></textarea></div>
  </div><div class="modal-footer"><button class="button button-secondary" type="button" data-action="close-modal">Cancelar</button><button class="button button-primary" type="submit">${icon(entry ? "plus" : "logout")}Registrar ${entry ? "entrada" : "saída"}</button></div></form>`;
  openModal(modalMarkup(`Registrar ${entry ? "entrada" : "saída"}`, `Atualize o saldo do estoque com uma nova ${entry ? "entrada" : "saída"}.`, body));
  modalRoot.querySelector("#movement-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const product = state.products.find((item) => item.id === form.get("productId"));
    const quantity = Number(form.get("quantity"));
    if (!product) return toast("Selecione um produto válido.", true);
    if (!Number.isInteger(quantity) || quantity < 1) return toast("Informe uma quantidade inteira maior que zero.", true);
    if (!entry && quantity > Number(product.quantity)) return toast("A saída não pode ser maior que o estoque disponível.", true);
    product.quantity = Number(product.quantity) + (entry ? quantity : -quantity);
    state.movements.push({ id: `m-${Date.now()}`, productId: product.id, type, quantity, responsible: String(form.get("responsible")).trim() || "Não informado", note: String(form.get("note")).trim(), date: new Date().toISOString() });
    saveData();
    closeModal();
    renderPage();
    toast(`${entry ? "Entrada" : "Saída"} de ${quantity} un. registrada.`);
  });
}

function openRecordModal() {
  const config = {
    categories: { title: "Nova categoria", fields: [{ name: "name", label: "Nome da categoria *", placeholder: "Ex.: Papelaria", required: true }] },
    suppliers: { title: "Novo fornecedor", fields: [{ name: "name", label: "Nome do fornecedor *", placeholder: "Ex.: Distribuidora Central", required: true }, { name: "contact", label: "E-mail", type: "email", placeholder: "contato@fornecedor.com.br" }, { name: "phone", label: "Telefone", placeholder: "(11) 3333-4444" }] },
    locations: { title: "Novo local", fields: [{ name: "name", label: "Nome do local *", placeholder: "Ex.: Prateleira D1", required: true }, { name: "description", label: "Descrição", placeholder: "Ex.: Depósito — corredor D" }] },
  }[currentPage];
  if (!config) return;
  const body = `<form class="modal-form" id="record-form"><div class="form-grid">${config.fields.map((field) => `<div class="field full"><label for="record-${field.name}">${field.label}</label><input id="record-${field.name}" name="${field.name}" ${field.type ? `type="${field.type}"` : ""} ${field.required ? "required" : ""} maxlength="100" placeholder="${field.placeholder}"></div>`).join("")}</div><div class="modal-footer"><button class="button button-secondary" type="button" data-action="close-modal">Cancelar</button><button class="button button-primary" type="submit">${icon("check")}Salvar</button></div></form>`;
  openModal(modalMarkup(config.title, "Preencha as informações do novo cadastro.", body));
  modalRoot.querySelector("#record-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(event.currentTarget).entries());
    const name = values.name.trim();
    if (currentPage === "categories") {
      if (state.categories.some((item) => item.toLocaleLowerCase("pt-BR") === name.toLocaleLowerCase("pt-BR"))) return toast("Esta categoria já existe.", true);
      state.categories.push(name);
    } else if (currentPage === "suppliers") {
      if (state.suppliers.some((item) => item.name.toLocaleLowerCase("pt-BR") === name.toLocaleLowerCase("pt-BR"))) return toast("Este fornecedor já existe.", true);
      state.suppliers.push({ name, contact: values.contact.trim(), phone: values.phone.trim() });
    } else {
      if (state.locations.some((item) => item.name.toLocaleLowerCase("pt-BR") === name.toLocaleLowerCase("pt-BR"))) return toast("Este local já existe.", true);
      state.locations.push({ name, description: values.description.trim() });
    }
    saveData();
    closeModal();
    renderPage();
    toast("Cadastro realizado com sucesso.");
  });
}

function exportProducts() {
  const rows = [["Produto", "SKU", "Categoria", "Fornecedor", "Local", "Quantidade", "Estoque mínimo", "Preço unitário (R$)", "Status"], ...state.products.map((product) => [product.name, product.sku, product.category, product.supplier, product.location, product.quantity, product.minimum, Number(product.price).toFixed(2), productStatus(product) === "ok" ? "Em estoque" : productStatus(product) === "low" ? "Estoque baixo" : "Sem estoque"])];
  const csv = rows.map((row) => row.map((value) => `"${String(value ?? "").replaceAll('"', '""')}"`).join(";")).join("\r\n");
  const url = URL.createObjectURL(new Blob(["\uFEFF", csv], { type: "text/csv;charset=utf-8" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = `inventario-${new Date().toISOString().slice(0, 10)}.csv`;
  link.click();
  URL.revokeObjectURL(url);
  toast("Relatório CSV exportado.");
}

document.addEventListener("click", (event) => {
  const nav = event.target.closest("[data-page], [data-page-link]");
  if (nav) return navigate(nav.dataset.page || nav.dataset.pageLink);
  const button = event.target.closest("[data-action]");
  if (!button) return;
  const product = state.products.find((item) => item.id === button.dataset.id);
  switch (button.dataset.action) {
    case "new-product": openProductModal(); break;
    case "edit-product": if (product) openProductModal(product); break;
    case "delete-product":
      if (product && window.confirm(`Excluir "${product.name}" do inventário?`)) {
        state.products = state.products.filter((item) => item.id !== product.id);
        saveData(); renderPage(); toast("Produto excluído.");
      }
      break;
    case "stock-in": openMovementModal("in", button.dataset.id || ""); break;
    case "stock-out": openMovementModal("out", button.dataset.id || ""); break;
    case "new-record": openRecordModal(); break;
    case "export": exportProducts(); break;
    case "close-modal": closeModal(); break;
  }
});

document.addEventListener("input", (event) => {
  if (!event.target.matches("[data-search-products]")) return;
  productSearch = event.target.value;
  const cursor = event.target.selectionStart;
  renderPage();
  const input = pageContent.querySelector("[data-search-products]");
  input?.focus();
  input?.setSelectionRange(cursor, cursor);
});

document.addEventListener("change", (event) => {
  if (event.target.matches("[data-filter-category]")) categoryFilter = event.target.value;
  if (event.target.matches("[data-filter-status]")) statusFilter = event.target.value;
  if (event.target.matches("[data-filter-category], [data-filter-status]")) renderPage();
  if (event.target.matches("[data-filter-movement]")) {
    movementFilter = event.target.value;
    renderPage();
  }
});

document.querySelector("#mobile-menu").addEventListener("click", () => document.querySelector("#sidebar").classList.toggle("open"));
document.querySelector("[data-help]").addEventListener("click", () => openModal(modalMarkup("Guia rápido", "Comece a organizar seu inventário em poucos passos.", `<div class="permissions-note"><strong>1. Cadastre seus produtos:</strong> inclua nome, SKU, categoria e quantidade atual.<br><br><strong>2. Registre movimentações:</strong> use entradas e saídas para manter o saldo atualizado.<br><br><strong>3. Acompanhe os alertas:</strong> produtos abaixo do estoque mínimo aparecem na área de alertas.<br><br><strong>4. Exporte relatórios:</strong> baixe a lista de produtos em CSV para usar em uma planilha.</div>`)));
document.querySelector("#today-label").textContent = new Intl.DateTimeFormat("pt-BR", { weekday: "short", day: "numeric", month: "short", year: "numeric" }).format(new Date());
renderPage();
