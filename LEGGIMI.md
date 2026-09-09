# Sito di Luca Grazioli — istruzioni

## 1. Metti a posto le immagini

Copia il contenuto della cartella `sito-immagini` (quella sul Desktop) dentro `img/`:

| da                          | a                  |
|-----------------------------|--------------------|
| sito-immagini/photography/  | img/photography/   |
| sito-immagini/multimedia/   | img/multimedia/    |
| sito-immagini/essay/        | img/essay/         |
| sito-immagini/film/         | img/film/          |
| sito-immagini/about/        | non serve (foto tolta) |

**Attenzione ai nomi dei poster.** In `js/contenuti.js` sono scritti così:

```
01_dolci-acque-poster.jpg
02_donne-senza-uomini.jpg
03_ritratto-di-rosa-italiana.jpg
04_portrait-de-rosa-francaise.jpg
05_a-life-in-frames.jpg
```

Tu li hai rinominati a mano: se i nomi non combaciano, o rinomini i file, o correggi
le righe `poster:` dentro `contenuti.js`. Se un poster non compare, è quasi sempre questo.

## 2. Il font

Vai su **fontshare.com/fonts/switzer**, scarica la famiglia e metti dentro `font/`:

```
font/Switzer-Variable.woff2
font/Switzer-VariableItalic.woff2
```

Finché non ci sono, il sito usa Helvetica: funziona ma non è il look finale.

## 3. I video

Metti i file qui, quando li hai compressi:

```
video/home.mp4                              (il trailer in loop)
video/film/dolci-acque.mp4
video/film/donne-senza-uomini.mp4
video/film/ritratto-di-rosa-italiana.mp4
video/film/portrait-de-rosa-francaise.mp4
video/film/a-life-in-frames.mp4
```

Finché mancano, al loro posto compare il poster del film. Nessun errore, nessun buco.
Per l'home conviene anche un fermo immagine `img/home-poster.jpg`, che si vede nel
mezzo secondo prima che il video parta.

## 4. Guardarlo in locale

Doppio clic su `index.html` **non basta**: il browser blocca i file caricati via
JavaScript. Apri il Terminale, entra nella cartella del sito e lancia:

```
cd ~/Desktop/sito
python3 -m http.server 8000
```

Poi apri **http://localhost:8000** nel browser. Per fermarlo, `Ctrl+C`.

## 5. Regolare le animazioni

In `css/stile.css`, in cima, ci sono due righe:

```
--anim-durata: 0.7s;
--anim-scarto: 0.08s;
```

Apri il sito nuovo e quello vecchio affiancati, guarda, cambia il numero, ricarica.
`durata` è quanto dura l'entrata di ogni elemento, `scarto` è il ritardo fra un
elemento e il successivo (l'effetto a cascata).

Le due animazioni sono già fedeli all'originale:
- i **testi** salgono di 16.42px sfumando
- le **immagini** si scoprono con un wipe dal basso verso l'alto

## 6. Aggiungere o modificare un lavoro

Tutto sta in `js/contenuti.js`. Non serve toccare HTML né CSS.
Per aggiungere un progetto: copia un blocco esistente, incollalo, cambia i valori.

Se aggiungi un **film** devi anche duplicare un file dentro `film/`
(es. copia `dolciacque.html` in `nuovofilm.html`) e cambiare due cose:
`data-slug="nuovofilm"` e il titolo. Lo slug deve combaciare con quello in `contenuti.js`.

## 7. Regolare tipografia e movimento

In `css/stile.css`:

```
--misura: 88ch;              /* lunghezza max delle righe: alza per righe piu' lunghe */
--gap-poster: 10px;          /* spazio fra i poster nell'indice film */
--parallasse-corsa: 120px;   /* 0px = parallasse spento */
--altezza-fascia: 547px;
--anim-durata: 0.7s;
--anim-scarto: 0.08s;
```

Per cambiare il testo del pulsante in alto a sinistra, apri `js/sito.js`
e modifica la prima riga: `const MARCHIO = 'Luca Grazioli';`

## 8. Il vecchio paragrafo sul parallasse

In `css/stile.css`:

```
--parallasse-corsa: 120px;   /* quanto scorre l'immagine dentro la fascia */
--altezza-fascia: 547px;     /* altezza delle fasce multimedia/essay */
--gap-poster: 10px;          /* spazio fra i poster nell'indice film */
```

`0px` sulla corsa spegne il parallasse del tutto. Numeri alti = movimento piu' marcato.

## 8. Da completare

Nel file `contenuti.js` cerca `#DA-COMPLETARE`: sono i link Vimeo/YouTube di
quattro film che non sono riuscito a estrarre. Aprili dal sito Squarespace,
copia gli indirizzi e incollali al posto di quella scritta.

## 9. Metterlo online

1. Crea un account su **GitHub** e carica questa cartella in un repository
2. Vai su **Cloudflare Pages**, collega il repository, e pubblica
3. Sposta il dominio `lucagrazioli.eu` puntandolo a Cloudflare
4. Solo quando tutto funziona, disdici Squarespace

I passaggi 1-3 li facciamo insieme quando sei pronto.


## Novita' di questa versione

- Multimedia ed Essay rifatti come **fasce a tutta larghezza** alte 547px, immagine
  in cover sul punto focale, testo bianco sovrapposto a sinistra, con parallasse.
- Aggiunti i due progetti 2026 che mancavano: **Paganini Paradise** e **Allerta Terra**.
  Lancia `scarica-nuovi-multimedia.sh` per prendere le loro immagini.
- Schede film rifatte: video a tutta larghezza, testo sotto, poster grande in fondo.
- Tolta la didascalia sotto i poster nell'indice, spazio fra i poster ridotto.
- Corretto il bug dei poster invisibili (soglia dell'osservatore a 0) e aggiunta
  una rete di sicurezza: se dopo 2 secondi qualcosa non e' comparso, si mostra da solo.
