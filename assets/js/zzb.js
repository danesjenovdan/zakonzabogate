// Zakon za bogate — skupno: »Deli to stran« (vsi gumbi [data-share]) in animiran prihod logotipa
(function () {
  document.querySelectorAll('[data-share]').forEach(function (sb) {
    var wrap = sb.closest('.share-wrap'), c = wrap && wrap.querySelector('.copied'), lbl = sb.querySelector('span'), base = lbl ? lbl.textContent : '', t = 0;
    sb.addEventListener('click', async function () {
      var url = location.href.split('#')[0], ok = false;
      try { await navigator.clipboard.writeText(url); ok = true; } catch (e) {
        var ta = document.createElement('textarea'); ta.value = url; ta.style.position = 'fixed'; ta.style.opacity = '0'; document.body.appendChild(ta); ta.select();
        try { ok = document.execCommand('copy'); } catch (_) {} ta.remove();
      }
      if (c) {
        c.innerHTML = ok ? '<b>Povezava je bila kopirana</b><span>– deli s prijatelji ali objavi.</span>' : '<b>Deli s prijatelji ali objavi.</b><span>' + url + '</span>';
        c.classList.remove('on'); void c.offsetWidth; c.classList.add('on');
      }
      sb.classList.remove('pop'); void sb.offsetWidth; sb.classList.add('pop');
      if (lbl) lbl.textContent = ok ? 'Kopirano!' : base;
      clearTimeout(t); t = setTimeout(function () { if (c) c.classList.remove('on'); if (lbl) lbl.textContent = base; }, 4500);
    });
  });
  var logos = document.querySelectorAll('img[data-anim]');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting && !e.target.dataset.played) { e.target.dataset.played = '1'; e.target.src = e.target.dataset.anim + '?t=' + Date.now(); }
        if (!e.isIntersecting && e.intersectionRatio === 0 && e.target.dataset.played) delete e.target.dataset.played;
      });
    }, { threshold: [0, 0.45] });
    logos.forEach(function (i) { io.observe(i); });
  } else logos.forEach(function (i) { i.src = i.dataset.anim; });
})();
