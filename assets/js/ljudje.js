// Množica »navadnih ljudi« in predmeti za video o kapljanju. Ploske silhuete, vznožje pri y = 0.
// Ljudje so v eni barvi (privzeto violet), da se ločijo od črnih kapitalistov (druzina.js).
// f = barva lika, b = barva podlage (za izreze).

// gradbinec s čelado
function gradbinec(f, b) {
  return `<g>
    <rect x="-27" y="-124" width="23" height="118" fill="${f}"/><rect x="4" y="-124" width="23" height="118" fill="${f}"/>
    <path d="M-34 -10 H-2 V2 H-40 Q-40 -10 -34 -10 Z M2 -10 H34 Q40 -10 40 2 H2 Z" fill="${f}"/>
    <path d="M-46 -252 H46 L52 -116 H-52 Z" fill="${f}"/>
    <path d="M-46 -246 L-64 -150 L-50 -146 L-36 -222 Z M46 -246 L64 -150 L50 -146 L36 -222 Z" fill="${f}"/>
    <circle cx="-57" cy="-142" r="10" fill="${f}"/><circle cx="57" cy="-142" r="10" fill="${f}"/>
    <rect x="-46" y="-206" width="92" height="7" fill="${b}"/>
    <rect x="-9" y="-268" width="18" height="18" fill="${f}"/>
    <circle cx="0" cy="-286" r="30" fill="${f}"/>
    <path d="M-34 -296 C-34 -340 34 -340 34 -296 Z" fill="${f}"/><rect x="-44" y="-300" width="88" height="9" rx="4" fill="${f}"/>
    <rect x="-3" y="-332" width="6" height="30" fill="${b}"/>
  </g>`;
}
// medicinska sestra (kapica s križcem)
function sestra(f, b) {
  return `<g>
    <rect x="-20" y="-80" width="15" height="74" fill="${f}"/><rect x="5" y="-80" width="15" height="74" fill="${f}"/>
    <ellipse cx="-13" cy="-5" rx="15" ry="6" fill="${f}"/><ellipse cx="13" cy="-5" rx="15" ry="6" fill="${f}"/>
    <path d="M-30 -246 H30 L54 -74 H-54 Z" fill="${f}"/>
    <path d="M-30 -240 L-48 -150 L-36 -146 L-22 -214 Z M30 -240 L48 -150 L36 -146 L22 -214 Z" fill="${f}"/>
    <circle cx="-42" cy="-142" r="9" fill="${f}"/><circle cx="42" cy="-142" r="9" fill="${f}"/>
    <path d="M-12 -246 L0 -226 L12 -246 Z" fill="${b}"/>
    <rect x="-8" y="-262" width="16" height="18" fill="${f}"/>
    <circle cx="0" cy="-280" r="27" fill="${f}"/>
    <path d="M-27 -284 C-30 -312 30 -312 27 -284 C34 -262 30 -246 22 -240 C24 -262 18 -278 0 -280 C-18 -278 -24 -262 -22 -240 C-30 -246 -34 -262 -27 -284 Z" fill="${f}"/>
    <path d="M-24 -300 L24 -300 L18 -324 H-18 Z" fill="${f}"/>
    <path d="M-3 -320 h6 v6 h6 v6 h-6 v6 h-6 v-6 h-6 v-6 h6 Z" fill="${b}"/>
  </g>`;
}
// upokojenec (kapa s šiltom, palica, rahlo sključen)
function upokojenec(f, b) {
  return `<g transform="rotate(4)">
    <rect x="-24" y="-118" width="21" height="114" fill="${f}"/><rect x="3" y="-118" width="21" height="114" fill="${f}"/>
    <ellipse cx="-14" cy="-5" rx="18" ry="7" fill="${f}"/><ellipse cx="14" cy="-5" rx="18" ry="7" fill="${f}"/>
    <path d="M-42 -238 H42 L48 -96 H-48 Z" fill="${f}"/>
    <path d="M42 -232 L66 -150 L54 -144 L32 -208 Z M-42 -232 L-56 -140 L-44 -138 L-32 -208 Z" fill="${f}"/>
    <circle cx="61" cy="-142" r="10" fill="${f}"/><circle cx="-50" cy="-134" r="10" fill="${f}"/>
    <rect x="57" y="-146" width="8" height="146" fill="${f}" transform="rotate(-4 61 0)"/>
    <rect x="-3" y="-234" width="6" height="136" fill="${b}"/>
    <rect x="-8" y="-252" width="16" height="16" fill="${f}"/>
    <circle cx="0" cy="-272" r="28" fill="${f}"/>
    <path d="M-30 -282 C-30 -312 30 -312 32 -282 Z M24 -288 H52 Q56 -282 50 -279 H24 Z" fill="${f}"/>
  </g>`;
}
// prodajalka z vrečko (spet v trgovini)
function prodajalka(f, b) {
  return `<g>
    <rect x="-18" y="-84" width="14" height="78" fill="${f}"/><rect x="4" y="-84" width="14" height="78" fill="${f}"/>
    <ellipse cx="-12" cy="-5" rx="14" ry="6" fill="${f}"/><ellipse cx="12" cy="-5" rx="14" ry="6" fill="${f}"/>
    <path d="M-34 -150 H34 L44 -78 H-44 Z" fill="${f}"/>
    <path d="M-30 -246 H30 L34 -146 H-34 Z" fill="${f}"/>
    <path d="M-30 -240 L-42 -160 L-30 -156 L-20 -214 Z M30 -240 L52 -168 L40 -162 L20 -214 Z" fill="${f}"/>
    <circle cx="-36" cy="-152" r="9" fill="${f}"/>
    <path d="M38 -172 h34 v62 h-46 Z" fill="${f}"/><path d="M44 -172 q11 -22 22 0" fill="none" stroke="${f}" stroke-width="5"/>
    <rect x="30" y="-150" width="40" height="5" fill="${b}"/>
    <rect x="-8" y="-262" width="16" height="18" fill="${f}"/>
    <circle cx="0" cy="-280" r="27" fill="${f}"/><circle cx="0" cy="-318" r="15" fill="${f}"/>
  </g>`;
}
// študent z nahrbtnikom
function student(f, b) {
  return `<g>
    <rect x="-24" y="-120" width="20" height="112" fill="${f}"/><rect x="4" y="-120" width="20" height="112" fill="${f}"/>
    <path d="M-32 -12 H-2 V2 H-38 Q-38 -12 -32 -12 Z M2 -12 H32 Q38 -12 38 2 H2 Z" fill="${f}"/>
    <path d="M-40 -244 H40 L44 -112 H-44 Z" fill="${f}"/>
    <rect x="34" y="-236" width="30" height="88" rx="12" fill="${f}"/>
    <path d="M-40 -238 L-54 -150 L-42 -146 L-30 -212 Z" fill="${f}"/><circle cx="-48" cy="-142" r="9" fill="${f}"/>
    <rect x="-40" y="-176" width="80" height="6" fill="${b}"/>
    <path d="M-32 -244 C-34 -300 34 -300 32 -244 Z" fill="${f}"/>
    <circle cx="0" cy="-268" r="27" fill="${f}"/>
  </g>`;
}
// otrok
function otrok(f, b) {
  return `<g>
    <rect x="-14" y="-62" width="11" height="58" fill="${f}"/><rect x="3" y="-62" width="11" height="58" fill="${f}"/>
    <path d="M-22 -150 H22 L36 -56 H-36 Z" fill="${f}"/>
    <path d="M-22 -146 L-34 -96 L-24 -92 L-14 -130 Z M22 -146 L34 -96 L24 -92 L14 -130 Z" fill="${f}"/>
    <circle cx="0" cy="-174" r="24" fill="${f}"/>
    <circle cx="-26" cy="-184" r="9" fill="${f}"/><circle cx="26" cy="-184" r="9" fill="${f}"/>
  </g>`;
}
const LJUDJE = [gradbinec, sestra, upokojenec, prodajalka, student, otrok];

// ---------- predmeti ----------
function kosarica(f, b) {   // košarica (kupec), širina ~120, vznožje y = 0
  return `<g><path d="M-60 -70 H60 L48 0 H-48 Z" fill="${f}"/>
    <rect x="-48" y="-54" width="96" height="7" fill="${b}"/><rect x="-44" y="-34" width="88" height="7" fill="${b}"/><rect x="-40" y="-16" width="80" height="6" fill="${b}"/>
    <path d="M-44 -70 C-44 -120 44 -120 44 -70" fill="none" stroke="${f}" stroke-width="9"/></g>`;
}
function blagajna(f, b) {   // stara blagajna (trgovec), širina ~200
  const keys = [...Array(12)].map((_, i) => `<rect x="${-58 + (i % 4) * 30}" y="${-104 + Math.floor(i / 4) * 22}" width="20" height="13" rx="3" fill="${b}"/>`).join('');
  return `<g><rect x="-100" y="-42" width="200" height="42" rx="5" fill="${f}"/><rect x="-80" y="-26" width="160" height="5" fill="${b}"/>
    <path d="M-84 -42 L-70 -124 H70 L84 -42 Z" fill="${f}"/>${keys}
    <rect x="-40" y="-176" width="80" height="44" rx="5" fill="${f}"/><rect x="-30" y="-168" width="60" height="26" rx="3" fill="${b}"/>
    <text x="0" y="-148" text-anchor="middle" font-family="Archivo" font-weight="900" font-size="22" fill="${f}">€</text></g>`;
}
function hisa(f, b, hat) {  // hiša najemodajalca s cilindrom na strehi, širina ~200
  return `<g><path d="M-90 0 V-130 L0 -210 L90 -130 V0 Z" fill="${f}"/><rect x="40" y="-200" width="24" height="44" fill="${f}"/>
    <rect x="-22" y="-74" width="44" height="74" fill="${b}"/><rect x="-66" y="-118" width="34" height="34" fill="${b}"/><rect x="32" y="-118" width="34" height="34" fill="${b}"/>
    ${hat ? `<g transform="translate(-6 -196) rotate(-8) scale(.62)"><path fill="${hat}" fill-rule="evenodd" d="M-38 -102 H38 Q44 -102 44 -96 V0 H-44 V-96 Q-44 -102 -38 -102 Z M-44 -22 V-12 H44 V-22 Z M-86 0 H86 Q94 0 94 8 Q94 16 86 16 H-86 Q-94 16 -94 8 Q-94 0 -86 0 Z"/></g>` : ''}</g>`;
}
function kup(w, gold = '#EDB92E', gold2 = '#F2C64A', ink = '#1E1638') {   // kup cekinov (gomila), vznožje y = 0, širina w
  const h = w * .42; let coins = '';
  for (let r = 0; r < 5; r++) {
    const y = -12 - r * (h / 5.4), half = (w / 2) * Math.sqrt(1 - Math.pow((r + .5) / 5.6, 2)) - 18;
    for (let x = -half; x <= half; x += 40) coins += `<ellipse cx="${(x + (r % 2) * 20).toFixed(0)}" cy="${y.toFixed(0)}" rx="17" ry="7" fill="${gold2}" stroke="${ink}" stroke-width="3"/>`;
  }
  return `<g><path d="M${-w / 2} 0 Q${-w / 2.6} ${-h * .9} 0 ${-h} Q${w / 2.6} ${-h * .9} ${w / 2} 0 Z" fill="${gold}" stroke="${ink}" stroke-width="5"/>${coins}</g>`;
}
function zig(text, col = '#E5603A', w = 300) {   // pravokoten žig z dvojnim robom in »potiskano« teksturo
  const id = 'z' + Math.random().toString(36).slice(2, 7), h = w * .34;
  return `<svg viewBox="${-w / 2 - 10} ${-h / 2 - 10} ${w + 20} ${h + 20}" width="${w}" overflow="visible">
    <defs><filter id="${id}"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" seed="4"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 -1.1 1.5"/><feComposite in="SourceGraphic" operator="in"/></filter></defs>
    <g filter="url(#${id})" fill="none" stroke="${col}"><rect x="${-w / 2}" y="${-h / 2}" width="${w}" height="${h}" rx="8" stroke-width="7"/>
      <rect x="${-w / 2 + 11}" y="${-h / 2 + 11}" width="${w - 22}" height="${h - 22}" rx="4" stroke-width="3"/>
      <text x="0" y="${h * .17}" text-anchor="middle" font-family="Archivo" font-weight="900" font-size="${h * .5}" letter-spacing="4" fill="${col}" stroke="none">${text}</text></g></svg>`;
}

// kup v obliki piramide stolpcev kovancev (bere se kot denar); vznožje y = 0, vrh srednjega stolpca vrne .top
function kupStolpci(n = [3, 5, 8, 12, 8, 5, 3], gold = '#EDB92E', gold2 = '#F2C64A', ink = '#1E1638') {
  const W = 64, step = 13; let g = '';
  const x0 = -(n.length - 1) * W * .78 / 2;
  // od zunaj navznoter, da srednji stolpci prekrijejo stranske
  const order = n.map((_, i) => i).sort((a, b) => Math.abs(b - (n.length - 1) / 2) - Math.abs(a - (n.length - 1) / 2));
  for (const i of order) {
    const x = x0 + i * W * .78;
    for (let k = 0; k < n[i]; k++) {
      const y = -10 - k * step;
      g += `<path d="M${x - 30} ${y} v8 a30 10 0 0 0 60 0 v-8 Z" fill="${gold}" stroke="${ink}" stroke-width="3"/>`;
      g += `<ellipse cx="${x}" cy="${y}" rx="30" ry="10" fill="${gold2}" stroke="${ink}" stroke-width="3"/>`;
    }
  }
  return `<g>${g}</g>`;
}
function kupStolpciVrh(n = [3, 5, 8, 12, 8, 5, 3]) { return -10 - (Math.max(...n) - 1) * 13 - 6; }

// tovarna (razvoj, proizvodnja) — žagasta streha, dimnik, okna; vznožje y = 0, širina ~200
function tovarna(f, b) {
  return `<g><rect x="56" y="-206" width="26" height="100" fill="${f}"/>
    <path d="M-100 0 V-110 L-60 -150 V-110 L-20 -150 V-110 L20 -150 V-110 H100 V0 Z" fill="${f}"/>
    ${[-74, -34, 6, 46].map(x => `<rect x="${x}" y="-82" width="26" height="30" fill="${b}"/>`).join('')}
    <rect x="-20" y="-40" width="40" height="40" fill="${b}"/></g>`;
}
