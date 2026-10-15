/* =====================================================================
   NEXCOMPANY — INTERAÇÕES
   Para configurar os contactos, edite apenas o bloco CONFIG abaixo.
   Deixe "" (vazio) enquanto o dado não estiver confirmado: o site
   mostra um marcador de posição e o botão de e-mail fica inativo.
   ===================================================================== */

const CONFIG = {
  email: "",        // Exemplo: "contacto@seudominio.com"  (só preencha depois de confirmado)
  telefone: "",     // Exemplo: "+244 900 000 000"
  localizacao: "",  // Exemplo: "Luanda, Angola"
  redes: [
    // Preencha só com contas oficiais confirmadas. Exemplo:
    // { nome: "LinkedIn", url: "https://www.linkedin.com/company/..." },
    // { nome: "Instagram", url: "https://www.instagram.com/..." }
  ]
};

(function () {
  "use strict";

  /* ---------- 1. Ano automático no rodapé ---------- */
  var ano = document.getElementById("ano");
  if (ano) ano.textContent = new Date().getFullYear();

  /* ---------- 2. Menu móvel ---------- */
  var botaoMenu = document.querySelector(".menu-toggle");
  var menu = document.getElementById("menu-principal");

  function definirMenu(aberto) {
    if (!botaoMenu || !menu) return;
    botaoMenu.setAttribute("aria-expanded", String(aberto));
    botaoMenu.querySelector(".visually-hidden").textContent = aberto ? "Fechar menu" : "Abrir menu";
    menu.classList.toggle("is-open", aberto);
  }

  if (botaoMenu && menu) {
    botaoMenu.addEventListener("click", function () {
      definirMenu(botaoMenu.getAttribute("aria-expanded") !== "true");
    });

    // Fecha o menu ao escolher uma ligação
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) definirMenu(false);
    });

    // Fecha o menu com a tecla Esc
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && botaoMenu.getAttribute("aria-expanded") === "true") {
        definirMenu(false);
        botaoMenu.focus();
      }
    });

    // Repõe o estado ao aumentar a janela
    window.addEventListener("resize", function () {
      if (window.innerWidth > 820) definirMenu(false);
    });
  }

  /* ---------- 3. Destaque da secção ativa no menu ---------- */
  var ligacoes = document.querySelectorAll(".nav-list a");
  var secoes = [];
  ligacoes.forEach(function (a) {
    var alvo = document.querySelector(a.getAttribute("href"));
    if (alvo) secoes.push({ link: a, alvo: alvo });
  });

  function atualizarAtivo() {
    var posicao = window.scrollY + 120;
    var atual = null;
    secoes.forEach(function (s) {
      if (s.alvo.offsetTop <= posicao) atual = s.link;
    });
    ligacoes.forEach(function (a) {
      if (a === atual) a.setAttribute("aria-current", "true");
      else a.removeAttribute("aria-current");
    });
  }
  window.addEventListener("scroll", atualizarAtivo, { passive: true });
  atualizarAtivo();

  /* ---------- 4. Contactos configuráveis ---------- */
  function escrever(chave, conteudo) {
    var el = document.querySelector('[data-contact="' + chave + '"]');
    if (el) el.replaceChildren(conteudo);
  }

  var emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(CONFIG.email);
  var botaoEmail = document.getElementById("botao-email");
  var notaEmail = document.getElementById("nota-email");

  if (emailValido) {
    var linkEmail = document.createElement("a");
    linkEmail.href = "mailto:" + CONFIG.email;
    linkEmail.textContent = CONFIG.email;
    escrever("email", linkEmail);

    if (botaoEmail) {
      botaoEmail.href = "mailto:" + CONFIG.email;
      botaoEmail.textContent = "Enviar e-mail";
      botaoEmail.removeAttribute("aria-disabled");
    }
    if (notaEmail) notaEmail.remove();
  }

  if (CONFIG.telefone) {
    escrever("telefone", document.createTextNode(CONFIG.telefone));
  }

  if (CONFIG.localizacao) {
    escrever("localizacao", document.createTextNode(CONFIG.localizacao));
  }

  if (CONFIG.redes.length > 0) {
    var listaRedes = document.createDocumentFragment();
    CONFIG.redes.forEach(function (rede, i) {
      if (i > 0) listaRedes.appendChild(document.createTextNode(" · "));
      var a = document.createElement("a");
      a.href = rede.url;
      a.textContent = rede.nome;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      listaRedes.appendChild(a);
    });
    escrever("redes", listaRedes);
  }

  // Rodapé: mostra e-mail e/ou redes quando existirem
  var rodape = document.querySelector('[data-contact="rodape"]');
  if (rodape && (emailValido || CONFIG.redes.length > 0)) {
    var partes = document.createDocumentFragment();
    if (emailValido) {
      var a = document.createElement("a");
      a.href = "mailto:" + CONFIG.email;
      a.textContent = CONFIG.email;
      partes.appendChild(a);
    }
    if (emailValido && CONFIG.redes.length > 0) partes.appendChild(document.createElement("br"));
    CONFIG.redes.forEach(function (rede, i) {
      if (i > 0) partes.appendChild(document.createTextNode(" · "));
      var r = document.createElement("a");
      r.href = rede.url;
      r.textContent = rede.nome;
      r.target = "_blank";
      r.rel = "noopener noreferrer";
      partes.appendChild(r);
    });
    rodape.classList.remove("placeholder");
    rodape.replaceChildren(partes);
  }
})();
