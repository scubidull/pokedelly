var L = ["PS", "Ataque", "Defesa", "Ataque Esp.", "Defesa Esp.", "Velocidade"];
var D = [
  {
    n: "Lalisa",
    e: "🎤",
    c: "Pessoa favorita",
    i: ["Artista", "Lalisa Manobal (Lisa)", "Nível de amor", "MÁXIMO"],
    t: ["Música", "Dança", "Ídolo"],
    d: "A favorita das favoritas. Aparece em todas as playlists, todos os vídeos e todas as conversas. Domina o palco e a pista de dança.",
    s: [10, 10, 10, 10, 10, 10],
    r: ["Música", "Dança"],
  },
  {
    n: "Batata",
    e: "🍟",
    c: "Comida",
    i: ["Tipo", "Comida salgada", "Formas", "Frita, assada, purê"],
    t: ["Comida", "Batata"],
    d: "Qualquer comida que envolva batata entra automaticamente na lista de aprovadas. Evolui de purê para batata frita crocante.",
    s: [9, 5, 6, 7, 4, 9],
    r: ["Batata frita", "Purê", "Batata assada"],
  },
  {
    n: "Snickers",
    e: "🍫",
    c: "Chocolate",
    i: ["Tipo", "Chocolate com amendoim", "Posto", "Chocolate favorito"],
    t: ["Doce", "Chocolate"],
    d: "O chocolate favorito dela. Barra com amendoim e caramelo, sempre bem-vinda.",
    s: [10, 8, 6, 5, 5, 9],
    r: ["Chocolate", "Amendoim"],
  },
  {
    n: "Chocolate com morango",
    e: "🍓",
    c: "Doce",
    i: ["Tipo", "Doce", "Combinação", "Chocolate + morango"],
    t: ["Doce", "Fruta"],
    d: "Doces com chocolate e morango são a combinação perfeita. Quanto mais chocolate e mais morango, melhor.",
    s: [9, 6, 5, 9, 6, 8],
    r: ["Snickers", "Morango"],
  },
  {
    n: "Pokémon",
    e: "⚡",
    c: "Franquia",
    i: ["Tipo", "Jogos e anime", "Pokédex", "Gostei, vou fazer uma"],
    t: ["Anime", "Jogo"],
    d: "Uma das franquias favoritas. Tem tantos Pokémon que já inspirou até esta pokédex.",
    s: [9, 8, 7, 8, 7, 8],
    r: ["Pikachu", "Cartas", "Jogos"],
  },
  {
    n: "Naruto",
    e: "🍥",
    c: "Anime",
    i: ["Tipo", "Anime / Mangá", "Personagem", "Naruto Uzumaki"],
    t: ["Anime", "Ninja"],
    d: "Anime favorito, com os personagens preferidos dela: Naruto, Sasuke, Itachi e Tsunade.",
    s: [10, 9, 8, 9, 8, 9],
    r: ["Naruto", "Sasuke", "Itachi", "Tsunade"],
  },
  {
    n: "Sasuke",
    e: "🌀",
    c: "Personagem",
    i: ["Origem", "Naruto", "Clã", "Uchiha"],
    t: ["Anime", "Ninja"],
    d: "Um dos personagens favoritos. Sharingan, olhar sério e muito drama.",
    s: [8, 10, 8, 9, 8, 10],
    r: ["Naruto", "Itachi"],
  },
  {
    n: "Itachi",
    e: "🐦‍⬛",
    c: "Personagem",
    i: ["Origem", "Naruto", "Clã", "Uchiha"],
    t: ["Anime", "Ninja"],
    d: "Irmão mais velho do Sasuke e personagem favorito dela. Calmo, inteligente e cheio de segredos.",
    s: [9, 9, 9, 10, 9, 10],
    r: ["Sasuke", "Naruto"],
  },
  {
    n: "Tsunade",
    e: "💪",
    c: "Personagem",
    i: ["Origem", "Naruto", "Cargo", "Quinta Hokage"],
    t: ["Anime", "Ninja", "Médica"],
    d: "Quinta Hokage e uma das melhores médicas ninja. Soco com força de sobra.",
    s: [10, 10, 8, 8, 9, 7],
    r: ["Naruto"],
  },
  {
    n: "Tokyo Ghoul",
    e: "👁️",
    c: "Anime",
    i: ["Tipo", "Anime / Mangá", "Clima", "Sombrio"],
    t: ["Anime", "Terror"],
    d: "Anime favorito com clima sombrio e personagens marcantes.",
    s: [8, 9, 6, 9, 7, 7],
    r: ["Naruto"],
  },
  {
    n: "Batman",
    e: "🦇",
    c: "Herói",
    i: ["Tipo", "Herói da DC", "Cidade", "Gotham"],
    t: ["Herói", "DC"],
    d: "O cavaleiro das trevas. Sem superpoderes, mas com muito dinheiro, tecnologia e atitude.",
    s: [9, 8, 9, 10, 9, 7],
    r: ["Nightwing", "Batman"],
  },
  {
    n: "Nightwing",
    e: "🦅",
    c: "Herói",
    i: ["Tipo", "Herói da DC", "Alter ego", "Dick Grayson"],
    t: ["Herói", "DC"],
    d: "Ex-Robin que virou herói por conta própria. Acrobático, rápido e carismático.",
    s: [8, 8, 8, 7, 8, 10],
    r: ["Batman"],
  },
  {
    n: "Homem-Aranha",
    e: "🕷️",
    c: "Herói",
    i: ["Tipo", "Herói da Marvel", "Cidade", "Nova York"],
    t: ["Herói", "Marvel"],
    d: "O amigo da vizinhança. Lança teias, escala paredes e solta piadas no meio da luta.",
    s: [8, 8, 7, 9, 8, 10],
    r: ["Batman"],
  },
  {
    n: "Star Wars",
    e: "🚀",
    c: "Franquia",
    i: ["Tipo", "Filmes e séries", "Lugar", "Galáxia muito distante"],
    t: ["Filme", "Ficção"],
    d: "Que a Força esteja com ela. Sabres de luz, naves e planetas distantes.",
    s: [9, 8, 8, 9, 8, 8],
    r: ["Sabres de luz", "Jedi"],
  },
  {
    n: "Harry Potter",
    e: "⚡",
    c: "Franquia",
    i: ["Tipo", "Livros e filmes", "Escola", "Hogwarts"],
    t: ["Magia", "Livro", "Filme"],
    d: "O bruxo da cicatriz. Feitiços, corujas e muita aventura em Hogwarts.",
    s: [9, 8, 8, 10, 9, 7],
    r: ["Hogwarts", "Varinha"],
  },
  {
    n: "Mitologia egípcia",
    e: "🏺",
    c: "Interesse",
    i: ["Tipo", "Mitologia", "Região", "Egito antigo"],
    t: ["Mitologia", "História"],
    d: "Deuses, pirâmides e histórias do Egito antigo.",
    s: [8, 7, 9, 10, 10, 5],
    r: ["Anúbis", "Rá", "Ísis"],
  },
  {
    n: "Fred",
    e: "🐦",
    c: "Passarinho",
    i: ["Tipo", "Pet", "Dono", "Ela mesma"],
    t: ["Pet", "Passarinho"],
    d: "Um dos dois passarinhos dela. Canta, voa e manda na casa.",
    s: [7, 3, 4, 5, 5, 10],
    r: ["Amarelinha"],
  },
  {
    n: "Amarelinha",
    e: "🐤",
    c: "Passarinho",
    i: ["Tipo", "Pet", "Dono", "Ela mesma"],
    t: ["Pet", "Passarinho"],
    d: "A outra passarinha dela, dupla de Fred. Pequena, alegre e muito querida.",
    s: [7, 3, 4, 5, 5, 10],
    r: ["Fred"],
  },
];

var IMG = {

  Lalisa: { main: "imagens/lisa1.jpg", gal: ["imagens/lisa2.jpg", "imagens/lisa3.jpg", "imagens/lisa4.jpg"] },

  Batata: { main: "imagens/batata1.jpg", gal: ["imagens/batata2.jpg", "imagens/batata3.jpg", "imagens/batata4.jpg"] },

  Snickers: { main: "imagens/snickers1.jpg", gal: ["imagens/snickers2.jpg", "imagens/snickers3.jpg", "imagens/snickers4.jpg"] },

  "Chocolate com morango": { main: "imagens/chocolate1.jpg", gal: ["imagens/chocolate2.jpg", "imagens/chocolate3.jpg", "imagens/chocolate4.jpg"] },

  Pokémon: { main: "imagens/pokemon1.jpg", gal: ["imagens/pokemon2.jpg", "imagens/pokemon3.jpg", "imagens/pokemon4.jpg"] },

  Naruto: { main: "imagens/naruto1.jpg", gal: ["imagens/naruto2.jpg", "imagens/naruto3.jpg", "imagens/naruto4.jpg"] },

  Sasuke: { main: "imagens/sasuke1.jpg", gal: ["imagens/sasuke2.jpg", "imagens/sasuke3.jpg", "imagens/sasuke4.jpg"] },

  Itachi: { main: "imagens/itachi1.jpg", gal: ["imagens/itachi2.jpg", "imagens/itachi3.jpg", "imagens/itachi4.jpg"] },

  Tsunade: { main: "imagens/tsunade1.jpg", gal: ["imagens/tsunade2.jpg", "imagens/tsunade3.jpg", "imagens/tsunade4.jpg"] },

  "Tokyo Ghoul": { main: "imagens/tokyo1.jpg", gal: ["imagens/tokyo2.jpg", "imagens/tokyo3.jpg", "imagens/tokyo4.jpg"] },

  Batman: { main: "imagens/batman1.jpg", gal: ["imagens/batman2.jpg", "imagens/batman3.jpg", "imagens/batman4.jpg"] },

  Nightwing: { main: "imagens/nightwing1.jpg", gal: ["imagens/nightwing2.jpg", "imagens/nightwing3.jpg", "imagens/nightwing4.jpg"] },

  "Homem-Aranha": { main: "imagens/homem-aranha1.jpg", gal: ["imagens/homem-aranha2.jpg", "imagens/homem-aranha3.jpg", "imagens/homem-aranha4.jpg"] },

  "Star Wars": { main: "imagens/starwars1.jpg", gal: ["imagens/starwars2.jpg", "imagens/starwars3.jpg", "imagens/starwars4.jpg"] },

  "Harry Potter": { main: "imagens/harrypotter1.jpg", gal: ["imagens/harrypotter2.jpg", "imagens/harrypotter3.jpg", "imagens/harrypotter4.jpg"] },

  "Mitologia egípcia": { main: "imagens/egito1.jpg", gal: ["imagens/egito2.jpg", "imagens/egito3.jpg", "imagens/egito4.jpg"] },

  Fred: { main: "imagens/fred1.jpg", gal: ["imagens/fred2.jpg", "imagens/fred3.jpg", "imagens/fred4.jpg"] },

  Amarelinha: { main: "imagens/amarelinha1.jpg", gal: ["imagens/amarelinha2.jpg", "imagens/amarelinha3.jpg", "imagens/amarelinha4.jpg"] },
};
function mainImg(n) {
  return IMG[n] && IMG[n].main;
}
function galImg(n, k) {
  return IMG[n] && IMG[n].gal && IMG[n].gal[k];
}

var REL = {

  "Música": "imagens/rel-musica.jpg",
  "Dança": "imagens/rel-danca.jpg",

  "Batata frita": "imagens/rel-batata-frita.jpg",
  "Purê": "imagens/rel-pure.jpg",
  "Batata assada": "imagens/rel-batata-assada.jpg",

  "Chocolate": "imagens/rel-chocolate.jpg",
  "Amendoim": "imagens/rel-amendoim.jpg",

  "Morango": "imagens/rel-morango.jpg",

  "Pikachu": "imagens/rel-pikachu.jpg",
  "Cartas": "imagens/rel-cartas.jpg",
  "Jogos": "imagens/rel-jogos.jpg",

  "Sabres de luz": "imagens/rel-sabres-de-luz.jpg",
  "Jedi": "imagens/rel-jedi.jpg",

  "Hogwarts": "imagens/rel-hogwarts.jpg",
  "Varinha": "imagens/rel-varinha.jpg",

  "Anúbis": "imagens/rel-anubis.jpg",
  "Rá": "imagens/rel-ra.jpg",
  "Ísis": "imagens/rel-isis.jpg",
};
function relThumb(r, k) {
  var src = k >= 0 ? mainImg(D[k].n) : REL[r];
  var letter = (k >= 0 ? D[k].n : r).charAt(0);
  return src
    ? '<img src="' + src + '" alt="" onerror="this.parentNode.textContent=\'' + letter + '\'">'
    : letter;
}
var el = document.getElementById("app"),
  cur = 0,
  hist = [];
function pad(n) {
  return String(n + 1).padStart(4, "0");
}
function find(name) {
  for (var k = 0; k < D.length; k++)
    if (D[k].n.toLowerCase() === name.toLowerCase()) return k;
  return -1;
}
function show(i) {
  cur = (i + D.length) % D.length;
  var p = D[cur];
  document.querySelector("nav").hidden = false;
  var pv = D[(cur - 1 + D.length) % D.length],
    nx = D[(cur + 1) % D.length];
  document.getElementById("prev").textContent =
    "‹ Nº " + pad((cur - 1 + D.length) % D.length) + " " + pv.n;
  document.getElementById("next").textContent =
    nx.n + " Nº " + pad((cur + 1) % D.length) + " ›";
  var h =
    '<button class="back" id="home">Todos os gostos</button> ' +
    (hist.length ? '<button class="back" id="back">← Voltar</button>' : "") +
    "<h1>" +
    p.n +
    " <span>Nº " +
    pad(cur) +
    '</span></h1><div class="top"><div><div class="pic">' +
    (mainImg(p.n)
      ? '<img src="' + mainImg(p.n) + '" alt="' + p.n + '">'
      : '<span class="ph">Foto principal<br>' + p.n + "</span>") +
    '</div><div class="stats">Estatísticas<div class="bars">';
  p.s.forEach(function (v) {
    h += '<div class="bar" style="height:' + v * 10 + '%"></div>';
  });
  h += '</div><div class="lbl">';
  L.forEach(function (l) {
    h += "<span>" + l + "</span>";
  });
  h +=
    '</div></div></div><div><p class="d">' +
    p.d +
    '</p><div class="info"><div><b>Categoria</b><span>' +
    p.c +
    "</span></div><div><b>" +
    p.i[0] +
    "</b><span>" +
    p.i[1] +
    "</span></div><div><b>" +
    p.i[2] +
    "</b><span>" +
    p.i[3] +
    '</span></div></div><h3>Tipo</h3><div class="chips">';
  p.t.forEach(function (t) {
    h +=
      '<span class="chip" style="background:' +
      colorOf(t) +
      '">' +
      t +
      "</span>";
  });
  h += '</div></div></div><div class="evo">Relacionados<div class="row">';
  p.r.forEach(function (r) {
    var k = find(r);
    h +=
      '<button class="node"' +
      (k >= 0 ? ' data-k="' + k + '"' : "") +
      "><i>" +
      relThumb(r, k) +
      "</i>" +
      r +
      "</button>";
  });
  h +=
    '</div></div><p style="text-align:center"><button class="pill" id="rnd">Explorar mais gostos</button></p>';
  h +=
    '<div class="gal"><h4><span>Fotos de ' +
    p.n +
    '</span><span><button class="arr" id="gl" aria-label="Anterior">‹</button><button class="arr" id="gr" aria-label="Próxima">›</button></span></h4><div class="strip" id="strip">';
  for (var s = 0; s < 3; s++) {
    var im = galImg(p.n, s);
    h +=
      '<div class="card"><div class="slot">' +
      (im
        ? '<img src="' + im + '" alt="Foto ' + (s + 1) + " de " + p.n + '">'
        : "Foto " + (s + 1) + " de " + p.n) +
      "</div><p>" +
      p.n +
      "</p></div>";
  }
  h += "</div></div>";
  el.innerHTML = h;
  window.scrollTo(0, 0);
  try {
    history.replaceState(null, "", "#" + (cur + 1));
  } catch (e) {}
}
var PAL = [
    "#5a9e3a",
    "#a05cb5",
    "#e8691f",
    "#2f9bc4",
    "#5f8a2c",
    "#d9569d",
    "#3b82b8",
    "#b8561a",
    "#6f55a0",
    "#c28a00",
  ],
  shown = 12;
function colorOf(t) {
  var h = 0;
  for (var i = 0; i < t.length; i++)
    h = (h * 31 + t.charCodeAt(i)) % PAL.length;
  return PAL[h];
}
function grid(keep) {
  document.querySelector("nav").hidden = true;
  hist = [];
  var h = '<h1>Pokédex da Cadelly</h1><div class="grid">';
  D.slice(0, shown).forEach(function (p, i) {
    h +=
      '<button class="gc" data-k="' +
      i +
      '"><span class="gi">' +
      (mainImg(p.n)
        ? '<img src="' + mainImg(p.n) + '" alt="' + p.n + '">'
        : "<em>Foto<br>" + p.n + "</em>") +
      "</span><small>Nº " +
      pad(i) +
      "</small><b>" +
      p.n +
      '</b><span class="chips">';
    p.t.forEach(function (t) {
      h +=
        '<span class="chip" style="background:' +
        colorOf(t) +
        '">' +
        t +
        "</span>";
    });
    h += "</span></button>";
  });
  h += "</div>";
  if (shown < D.length)
    h +=
      '<p style="text-align:center;margin-top:28px"><button class="pill" id="more">Carregar mais gostos</button></p>';
  el.innerHTML = h;
  if (!keep) window.scrollTo(0, 0);
  try {
    history.replaceState(null, "", location.pathname);
  } catch (e) {}
}
function go(i) {
  hist.push(cur);
  if (hist.length > 50) hist.shift();
  show(i);
}
document.getElementById("prev").onclick = function () {
  go(cur - 1);
};
document.getElementById("next").onclick = function () {
  go(cur + 1);
};
el.addEventListener("click", function (e) {
  var n = e.target.closest(".node");
  if (n && n.dataset.k) go(+n.dataset.k);
  var g = e.target.closest(".gc");
  if (g) {
    hist = [];
    show(+g.dataset.k);
  }
  if (e.target.id === "home") grid();
  if (e.target.id === "more") {
    shown = Math.min(D.length, shown + 6);
    grid(true);
  }
  if (e.target.id === "rnd") go(Math.floor(Math.random() * D.length));
  if (e.target.id === "back" && hist.length) show(hist.pop());
  var st = document.getElementById("strip");
  if (e.target.id === "gl") st.scrollBy({ left: -200, behavior: "smooth" });
  if (e.target.id === "gr") st.scrollBy({ left: 200, behavior: "smooth" });
});
var start = parseInt((location.hash || "").slice(1), 10);
if (start > 0 && start <= D.length) show(start - 1);
else grid();
