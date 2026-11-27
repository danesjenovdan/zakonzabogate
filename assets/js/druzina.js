// Družina kapitalistov — skupni liki (design.md §5.9). Vir: design-druzina.html.
// pal('sil', barvaPodlage) = črne silhuete; father/mother/son/daughter/poodle(c) vrnejo SVG <g> z vznožjem pri y = 0.
// Očetov cilinder je v <g class="fhat"> (za pozdrav).
const FK = { hat: '#141118', ink: '#1E1638', paper: '#FBF6E8', gold: '#EDB92E', violet: '#4632B5', lav: '#B3A2F0', coral: '#E5603A', skin: '#F6E3CC' };
function pal(mode, bg) {
  if (mode === 'sil') { const h = FK.hat; return { skin: h, coat: h, vest: h, trou: h, shoe: h, hat: h, band: bg, dress: h, dress2: h, hair: h, feather: h, pearl: h, eye: null, cheek: null, mous: h, dog: h, bow: h, watch: h, cig: h, cigTip: bg }; }
  return { skin: FK.skin, coat: FK.ink, vest: FK.gold, trou: '#2B2350', shoe: FK.hat, hat: FK.hat, band: FK.coral, dress: FK.violet, dress2: FK.lav, hair: '#3A2A1E', feather: FK.coral, pearl: FK.paper, eye: FK.ink, cheek: FK.coral, mous: FK.ink, dog: FK.paper, bow: FK.coral, watch: FK.gold, cig: '#6B4A2E', cigTip: FK.coral };
}
// oče: trebušast, cilinder, brki na pipe, cigara, žepna ura (brez monokla in palice)
function father(c) {
  const must = 'M0 -350 C12 -362 40 -362 58 -348 C66 -341 76 -343 77 -353 C78 -362 70 -368 64 -362 C69 -357 64 -350 57 -354 C42 -344 16 -342 0 -346 Z';
  return `<g>
    <rect x="-32" y="-128" width="26" height="124" fill="${c.trou}"/><rect x="6" y="-128" width="26" height="124" fill="${c.trou}"/>
    <ellipse cx="-22" cy="-6" rx="26" ry="9" fill="${c.shoe}"/><ellipse cx="22" cy="-6" rx="26" ry="9" fill="${c.shoe}"/>
    <path d="M-58 -318 C-96 -280 -98 -170 -74 -120 L-86 -70 L-30 -112 L30 -112 L86 -70 L74 -120 C98 -170 96 -280 58 -318 Z" fill="${c.coat}"/>
    <ellipse cx="0" cy="-214" rx="58" ry="80" fill="${c.vest}"/>
    ${c.eye ? `<path d="M-40 -232 Q0 -200 30 -236" fill="none" stroke="${c.watch === c.vest ? FK.ink : c.watch}" stroke-width="4"/><circle cx="32" cy="-236" r="9" fill="${FK.paper}" stroke="${FK.ink}" stroke-width="3"/>
      <circle cx="0" cy="-262" r="5" fill="${FK.ink}"/><circle cx="0" cy="-226" r="5" fill="${FK.ink}"/><circle cx="0" cy="-190" r="5" fill="${FK.ink}"/>` : ''}
    <path d="M-60 -312 C-92 -270 -104 -210 -78 -168 L-60 -176 C-74 -214 -64 -262 -44 -296 Z" fill="${c.coat}"/>
    <circle cx="-70" cy="-168" r="14" fill="${c.skin}"/>
    <path d="M60 -312 C86 -286 96 -262 100 -240 L82 -232 C74 -252 62 -270 46 -290 Z" fill="${c.coat}"/>
    <circle cx="94" cy="-238" r="13" fill="${c.skin}"/>
    <rect x="100" y="-247" width="46" height="11" rx="3" fill="${c.cig}" transform="rotate(-14 100 -242)"/><circle cx="145" cy="-253" r="6" fill="${c.cigTip}"/>
    <path d="M-20 -326 L0 -306 L20 -326 Z" fill="${c.eye ? FK.paper : c.coat}"/>
    ${c.eye ? `<path d="M-16 -316 L0 -324 L16 -316 L0 -308 Z" fill="${FK.coral}"/>` : ''}
    <circle cx="0" cy="-372" r="46" fill="${c.skin}"/>
    ${c.eye ? `<circle cx="-16" cy="-382" r="5" fill="${c.eye}"/><circle cx="16" cy="-382" r="5" fill="${c.eye}"/><path d="M-26 -394 L-8 -390 M8 -390 L26 -394" stroke="${c.eye}" stroke-width="4"/>
      <circle cx="-28" cy="-358" r="8" fill="${c.cheek}" opacity=".55"/><circle cx="28" cy="-358" r="8" fill="${c.cheek}" opacity=".55"/><path d="M-4 -372 Q0 -362 6 -370" fill="none" stroke="${FK.ink}" stroke-width="3"/>` : ''}
    <path d="${must}" fill="${c.mous}"/><path d="${must}" fill="${c.mous}" transform="scale(-1 1)"/>
    <g class="fhat">
    <rect x="-68" y="-420" width="136" height="14" rx="6" fill="${c.hat}"/>
    <path d="M-40 -506 H40 L36 -418 H-36 Z" fill="${c.hat}"/>
    <rect x="-37" y="-438" width="74" height="12" fill="${c.band}"/>
    </g>
  </g>`;
}
// mati: klobuk s peresom, zvonasta obleka, biseri
function mother(c) {
  return `<g>
    <path d="M-34 -300 C-44 -200 -92 -70 -104 -6 H104 C92 -70 44 -200 34 -300 Z" fill="${c.dress}"/>
    <path d="M-104 -6 H104 L98 -34 H-98 Z" fill="${c.dress2}"/>
    <circle cx="-40" cy="-292" r="22" fill="${c.dress}"/><circle cx="40" cy="-292" r="22" fill="${c.dress}"/>
    <path d="M-52 -284 C-70 -240 -64 -196 -40 -170 L-26 -180 C-44 -204 -46 -240 -34 -276 Z" fill="${c.dress}"/>
    <circle cx="-34" cy="-172" r="11" fill="${c.skin}"/>
    <rect x="-9" y="-318" width="18" height="22" fill="${c.skin}"/>
    ${c.eye ? [-14, -7, 0, 7, 14].map(x => `<circle cx="${x}" cy="${-300 + Math.abs(x) * -.25}" r="3.6" fill="${c.pearl}"/>`).join('') : ''}
    <circle cx="0" cy="-350" r="38" fill="${c.skin}"/>
    <circle cx="0" cy="-392" r="24" fill="${c.hair}"/>
    ${c.eye ? `<path d="M-18 -356 Q-12 -352 -6 -356 M6 -356 Q12 -352 18 -356" fill="none" stroke="${c.eye}" stroke-width="3.5"/><circle cx="-22" cy="-338" r="7" fill="${c.cheek}" opacity=".55"/><circle cx="22" cy="-338" r="7" fill="${c.cheek}" opacity=".55"/><path d="M-7 -328 Q0 -324 7 -328" fill="none" stroke="${FK.coral}" stroke-width="4"/>` : ''}
    <ellipse cx="6" cy="-394" rx="74" ry="12" fill="${c.hat}" transform="rotate(-8 6 -394)"/>
    <path d="M-22 -400 Q-18 -428 10 -428 Q34 -428 34 -404 Z" fill="${c.hat}"/>
    <path d="M30 -412 C70 -440 74 -478 52 -500 C66 -470 54 -446 26 -424 Z" fill="${c.feather}"/>
  </g>`;
}
// sin: brez klobuka (en klobuk na kader), metuljček, kratke hlače
function son(c) {
  return `<g>
    <rect x="-22" y="-92" width="17" height="88" fill="${c.skin}"/><rect x="5" y="-92" width="17" height="88" fill="${c.skin}"/>
    <ellipse cx="-15" cy="-5" rx="17" ry="7" fill="${c.shoe}"/><ellipse cx="15" cy="-5" rx="17" ry="7" fill="${c.shoe}"/>
    <rect x="-30" y="-130" width="60" height="44" rx="6" fill="${c.trou}"/>
    <path d="M-36 -236 H36 L40 -122 H-40 Z" fill="${c.coat}"/>
    <rect x="-52" y="-230" width="16" height="74" rx="8" fill="${c.coat}"/><rect x="36" y="-230" width="16" height="74" rx="8" fill="${c.coat}"/>
    <path d="M-14 -244 L0 -236 L14 -244 L14 -228 L0 -236 L-14 -228 Z" fill="${c.bow}"/>
    <circle cx="0" cy="-274" r="32" fill="${c.skin}"/>
    <path d="M-32 -282 C-30 -312 30 -314 32 -282 C20 -300 -10 -302 -32 -282 Z" fill="${c.hair}"/>
    ${c.eye ? `<circle cx="-11" cy="-276" r="4" fill="${c.eye}"/><circle cx="11" cy="-276" r="4" fill="${c.eye}"/><path d="M-8 -260 Q0 -264 8 -260" fill="none" stroke="${FK.ink}" stroke-width="3"/>` : ''}
  </g>`;
}
// hči: pentlja, obleka z ovratnikom
function daughter(c) {
  return `<g>
    <rect x="-18" y="-70" width="14" height="66" fill="${c.skin}"/><rect x="4" y="-70" width="14" height="66" fill="${c.skin}"/>
    <ellipse cx="-12" cy="-5" rx="14" ry="6" fill="${c.shoe}"/><ellipse cx="12" cy="-5" rx="14" ry="6" fill="${c.shoe}"/>
    <path d="M-24 -200 C-30 -150 -58 -100 -64 -64 H64 C58 -100 30 -150 24 -200 Z" fill="${c.dress2}"/>
    <path d="M-20 -204 L0 -186 L20 -204 Z" fill="${c.eye ? FK.paper : c.dress2}"/>
    <circle cx="0" cy="-232" r="30" fill="${c.skin}"/>
    <path d="M-30 -238 C-34 -268 34 -270 30 -238 C30 -206 40 -200 36 -186 L24 -214 C14 -250 -14 -250 -24 -214 L-36 -186 C-40 -200 -30 -206 -30 -238 Z" fill="${c.hair}"/>
    <path d="M-4 -264 L-30 -282 L-26 -250 Z M4 -264 L30 -282 L26 -250 Z" fill="${c.bow}"/><circle cx="0" cy="-262" r="6" fill="${c.bow}"/>
    ${c.eye ? `<circle cx="-10" cy="-230" r="3.6" fill="${c.eye}"/><circle cx="10" cy="-230" r="3.6" fill="${c.eye}"/><circle cx="-17" cy="-220" r="5" fill="${c.cheek}" opacity=".55"/><circle cx="17" cy="-220" r="5" fill="${c.cheek}" opacity=".55"/>` : ''}
  </g>`;
}
// koder s cofki
function poodle(c) {
  const p = c.dog;
  return `<g>
    <rect x="-46" y="-62" width="10" height="50" fill="${p}"/><rect x="26" y="-62" width="10" height="50" fill="${p}"/>
    <circle cx="-41" cy="-12" r="11" fill="${p}"/><circle cx="31" cy="-12" r="11" fill="${p}"/>
    <ellipse cx="-6" cy="-74" rx="50" ry="20" fill="${p}"/><circle cx="34" cy="-82" r="26" fill="${p}"/>
    <rect x="-66" y="-118" width="8" height="46" fill="${p}" transform="rotate(-24 -62 -96)"/><circle cx="-76" cy="-124" r="14" fill="${p}"/>
    <rect x="40" y="-128" width="12" height="40" fill="${p}"/>
    <circle cx="48" cy="-140" r="22" fill="${p}"/><ellipse cx="70" cy="-128" rx="18" ry="9" fill="${p}"/><ellipse cx="36" cy="-120" rx="10" ry="20" fill="${p}"/>
    ${c.eye ? `<circle cx="54" cy="-144" r="3.4" fill="${FK.ink}"/><circle cx="86" cy="-128" r="4.6" fill="${FK.ink}"/><rect x="38" y="-114" width="22" height="6" rx="3" fill="${FK.coral}"/>` : ''}
  </g>`;
}
