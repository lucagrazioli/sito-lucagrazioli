/* ==========================================================
   Motore del sito. Normalmente non serve toccare questo file.
   ========================================================== */

/* Profondita' della pagina rispetto alla radice: '' oppure '../' */
const RADICE = document.body.dataset.radice || '';
const p = s => RADICE + s;

/* ---------- Header e footer condivisi ---------- */
/* Testo del pulsante in alto a sinistra che riporta alla home. */
const MARCHIO = 'Luca Grazioli';

const VOCI = [
  ['Film','film/'],
  ['Photography','photography.html'],
  ['Essay','essay.html'],
  ['Multimedia','multimedia.html'],
  ['About','about.html']
];

function costruisciTestata(){
  const attiva = document.body.dataset.pagina || '';
  const voci = VOCI.map(([n,u])=>
    `<a href="${p(u)}"${n.toLowerCase()===attiva?' aria-current="page"':''}>${n}</a>`
  ).join('');

  const testata = document.createElement('header');
  testata.className = 'testata' + (document.body.dataset.pagina==='home' ? '' : ' testata--fissa');
  testata.innerHTML = `
    <a class="marchio rivela" href="${p('index.html')}">${MARCHIO}</a>
    <button class="apri-menu" aria-expanded="false" aria-controls="menu" aria-label="Apri il menu"><span></span><span></span></button>
    <nav class="menu rivela" id="menu">${voci}</nav>
    <div class="social rivela">
      <a href="https://www.youtube.com/@LucaGrazioli" target="_blank" rel="noopener" aria-label="YouTube">
        <svg viewBox="0 0 24 24"><path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/></svg>
      </a>
      <a href="https://www.instagram.com/lucagrazioli_/" target="_blank" rel="noopener" aria-label="Instagram">
        <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
      </a>
    </div>`;
  document.body.prepend(testata);

  // Nasconde l'header mentre si scende, lo rimette appena si risale.
  if(testata.classList.contains('testata--fissa')){
    let ultimo = 0;
    addEventListener('scroll', ()=>{
      const y = scrollY;
      if(y > ultimo && y > 160) testata.classList.add('testata--nascosta');
      else testata.classList.remove('testata--nascosta');
      // la velatura compare solo quando non siamo piu' in cima alla pagina
      testata.classList.toggle('testata--velata', y > 160);
      ultimo = y;
    }, {passive:true});
  }

  const bottone = testata.querySelector('.apri-menu');
  const nav = testata.querySelector('.menu');
  bottone.addEventListener('click', ()=>{
    const aperto = nav.classList.toggle('aperto');
    bottone.setAttribute('aria-expanded', aperto);
    bottone.setAttribute('aria-label', aperto ? 'Chiudi il menu' : 'Apri il menu');
    document.body.classList.toggle('menu-aperto', aperto);
    document.body.style.overflow = aperto ? 'hidden' : '';
  });
}

function costruisciPie(){
  if(document.body.dataset.pagina==='home') return;
  const pie = document.createElement('footer');
  pie.className = 'pie';
  pie.innerHTML = `
    <p class="rivela"><a href="mailto:lucagrazioli.grz@gmail.com">lucagrazioli.grz@gmail.com</a></p>
    <p class="rivela">© Luca Grazioli ${new Date().getFullYear()}</p>`;
  document.body.appendChild(pie);
}

/* ---------- Animazioni al primo ingresso in viewport ---------- */
function attivaAnimazioni(){
  const bersagli = document.querySelectorAll('.rivela, .rivela-img');
  if(!('IntersectionObserver' in window)){
    bersagli.forEach(e=>e.classList.add('dentro'));
    return;
  }
  const osservatore = new IntersectionObserver((voci, obs)=>{
    // raggruppa gli elementi che entrano insieme per scaglionarli
    const entrati = voci.filter(v=>v.isIntersecting);
    entrati.forEach((v,i)=>{
      v.target.style.transitionDelay = (i * parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue('--anim-scarto')
      )) + 's';
      v.target.classList.add('dentro');
      obs.unobserve(v.target);
    });
  }, {rootMargin:'0px 0px -5% 0px', threshold:0});

  bersagli.forEach(e=>osservatore.observe(e));

  // Rete di sicurezza: se qualcosa non e' stato rivelato entro 2 secondi,
  // si mostra da solo. Un'animazione che non parte non deve lasciare buchi.
  setTimeout(()=>{
    document.querySelectorAll('.rivela:not(.dentro), .rivela-img:not(.dentro)')
      .forEach(e=>{ e.style.transitionDelay='0s'; e.classList.add('dentro'); });
  }, 2000);
}

/* Manda a capo dopo ogni punto fermo, cosi' le righe non dipendono
   dalla larghezza della finestra e non restano parole orfane.
   Non tocca i punti dentro i numeri (1.85:1) o le abbreviazioni. */
function aCapoAiPunti(testo){
  return testo.replace(/([.!?])\s+(?=[A-Z0-9"'\u201c])/g, '$1<br>');
}

/* ---------- Mattoncini riutilizzabili ---------- */
function bloccoDati(dati){
  return `<div class="dati rivela">` + dati.map(([e,v])=>
    `<div${/WHAT I DID/i.test(e)?' class="ruolo"':''}><span class="etichetta">${e}</span> | <span class="valore">${v}</span></div>`
  ).join('') + `</div>`;
}
function bloccoAzioni(azioni){
  if(!azioni || !azioni.length) return '';
  return `<div class="azioni rivela">` + azioni.map(([t,u])=>
    `<a href="${u}"${u.startsWith('http')?' target="_blank" rel="noopener"':''}>${t}</a>`).join('') + `</div>`;
}

/* ---------- Pagine a schede: essay e multimedia ---------- */
function renderFasce(chiave, contenitore){
  contenitore.className = 'fasce';
  contenitore.innerHTML = CONTENUTI[chiave].map(v => `
    <section class="fascia">
      <div class="fascia__sfondo rivela-img">
        <img src="${p(v.img)}" alt="${v.titolo}" loading="lazy"
             style="object-position:${v.focus || '50% 50%'}">
      </div>
      <div class="fascia__velo"></div>
      <div class="fascia__testo">
        <h2 class="rivela">${v.titolo}</h2>
        ${bloccoDati(v.dati)}
        ${bloccoAzioni(v.azioni)}
      </div>
    </section>`).join('');
}

/* Parallasse: sposta l'immagine dentro la fascia mentre scorre. */
function attivaParallasse(){
  const fasce = [...document.querySelectorAll('.fascia')];
  if(!fasce.length) return;
  if(matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const corsa = () => parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue('--parallasse-corsa')) || 0;

  let inCoda = false;
  function aggiorna(){
    inCoda = false;
    const h = innerHeight, c = corsa();
    for(const f of fasce){
      const r = f.getBoundingClientRect();
      if(r.bottom < -200 || r.top > h + 200) continue;
      const img = f.querySelector('.fascia__sfondo img');
      if(!img) continue;
      // -1 quando la fascia entra dal basso, +1 quando esce in alto
      const avanzamento = (r.top + r.height/2 - h/2) / (h/2 + r.height/2);
      img.style.transform = `translateY(${(-avanzamento * c / 2).toFixed(1)}px)`;
    }
  }
  addEventListener('scroll', ()=>{ if(!inCoda){ inCoda=true; requestAnimationFrame(aggiorna); } }, {passive:true});
  addEventListener('resize', aggiorna, {passive:true});
  aggiorna();
}

/* ---------- Photography ---------- */
function renderGalleria(contenitore){
  // mescola le foto: ordine diverso a ogni visita (Fisher-Yates)
  const foto = CONTENUTI.photography.slice();
  for(let i = foto.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [foto[i], foto[j]] = [foto[j], foto[i]];
  }
  contenitore.innerHTML = foto.map(([file,alt]) => `
    <figure class="rivela-img">
      <img src="${p('img/photography/'+file)}" alt="${alt}" loading="lazy">
    </figure>`).join('');
}

/* ---------- Indice Film ---------- */
function renderIndiceFilm(contenitore){
  contenitore.innerHTML = CONTENUTI.film.map(f => `
    <a class="poster" href="${p('film/'+f.slug+'.html')}">
      <figure class="rivela-img">
        <img src="${p(f.poster)}" alt="Poster di ${f.titolo}" loading="lazy">
      </figure>
    </a>`).join('');
}

/* ---------- Scheda singola film ---------- */
function renderFilm(slug, contenitore){
  const i = CONTENUTI.film.findIndex(f=>f.slug===slug);
  const f = CONTENUTI.film[i];
  if(!f){ contenitore.innerHTML = '<p>Film non trovato.</p>'; return; }

  document.title = f.titolo + ' — Luca Grazioli';

  contenitore.innerHTML = `
    <div class="film-video rivela-img">
      <video autoplay muted loop playsinline preload="auto"
             onerror="this.replaceWith(Object.assign(new Image(),{src:'${p(f.poster)}',alt:'Poster di ${f.titolo}'}))">
        <source src="${p(f.video)}" type="video/mp4">
      </video>
    </div>

    <div class="film-testo">
      <h1 class="rivela">${f.titolo}</h1>
      ${bloccoDati(f.dati)}
      <p class="sinossi rivela">${aCapoAiPunti(f.sinossi)}</p>
      ${bloccoAzioni(f.azioni)}
    </div>

    <div class="altri-film">
      <div class="poster-griglia">
        ${CONTENUTI.film.filter(a => a.slug !== f.slug).map(a => `
          <a class="poster" href="${p('film/'+a.slug+'.html')}">
            <figure class="rivela-img">
              <img src="${p(a.poster)}" alt="Poster di ${a.titolo}" loading="lazy">
            </figure>
          </a>`).join('')}
      </div>
    </div>`;

}

/* ---------- Avvio ---------- */
document.addEventListener('DOMContentLoaded', ()=>{
  costruisciTestata();

  // a capo a ogni punto solo nei testi introduttivi delle sezioni.
  // L'about ne resta fuori: e' lungo e a capo continui si legge male.
  document.querySelectorAll('.intro p').forEach(p=>{
    p.innerHTML = aCapoAiPunti(p.innerHTML);
  });

  const g = document.getElementById('galleria');
  if(g) renderGalleria(g);

  const s = document.getElementById('schede');
  if(s) renderFasce(document.body.dataset.pagina, s);

  const fi = document.getElementById('indice-film');
  if(fi) renderIndiceFilm(fi);

  const fs = document.getElementById('scheda-film');
  if(fs) renderFilm(document.body.dataset.slug, fs);

  costruisciPie();
  attivaAnimazioni();
  attivaParallasse();
});
