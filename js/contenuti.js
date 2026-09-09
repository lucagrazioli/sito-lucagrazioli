/* ==========================================================
   CONTENUTI DEL SITO
   Questo e' l'unico file che ti serve toccare per aggiungere,
   togliere o modificare un lavoro. Niente HTML, niente CSS.

   Regole:
   - ogni voce sta fra parentesi graffe { }
   - le voci sono separate da una virgola
   - il testo va fra apici singoli '...'
   - se dentro il testo c'e' un apostrofo, scrivilo \'
   ========================================================== */

const CONTENUTI = {

/* ----------------------------------------------------------
   FILM — 5 lavori. L'ordine qui e' l'ordine sulla pagina.
   'slug' deve combaciare col nome del file in /film/
   ---------------------------------------------------------- */
film: [
  {
    slug:'dolciacque',
    titolo:'Dolci Acque',
    poster:'img/film/01_dolci-acque-poster.jpg',
    video:'video/dolci-acque.mp4',
    dati:[
      ['GENRE','Narrative Short Film'],
      ['LENGHT','20’00’’'],
      ['YEAR','2024'],
      ['COUNTRY','Italy'],
      ['PRODUCTION','Sei Ottavi with Oki Doki Film & Albatros Film'],
      ['DISTRIBUTION','ShortsFit'],
      ['SPECIFICATION','Colors - 1.85:1 Digital 4K - Dolby 5.1'],
      ['WHAT I DID','Film Director & Producer']
    ],
    sinossi:'In the summer of 1981, Renzo and Monica, two twenty-year-olds from different worlds, fall in love against the backdrop of Lake Garda. Their story reflects the intimacy and challenges of an era, with dreams of social redemption juxtaposed against bourgeois privileges.',
    azioni:[
      ['WATCH NOW','https://vimeo.com/932544362'],
      ['TRAILER','https://vimeo.com/932916094'],
      ['BACKSTAGE','https://vimeo.com/957891247']
    ]
  },
  {
    slug:'donnesenzauomini',
    titolo:'Donne Senza Uomini',
    poster:'img/film/02_donne-senza-uomini.jpg',
    video:'video/donne-senza-uomini.mp4',
    dati:[
      ['GENRE','Narrative Short Film'],
      ['LENGHT','10’40’’'],
      ['YEAR','2021'],
      ['COUNTRY','Italy'],
      ['PRODUCTION','Sei Ottavi'],
      ['DISTRIBUTION','Siberia'],
      ['SPECIFICATION','B/W — 1.85:1 Digital 4K — Dolby 5.1'],
      ['WHAT I DID','Film Director & Producer']
    ],
    sinossi:'Italy 1965. Marcello, a middle-class man, decides to spend the night with a prostitute. He gets in touch with a luxurious brothel managed by a very strict owner with draconian rules. Among multiple women introduced to him he chooses Bice, a young woman in her early twenties. After their sexual intercourse the bedroom’s phone rings.',
    azioni:[
      /* DA COMPLETARE: incolla qui i 3 link dalla pagina Squarespace */
      ['WATCH NOW','https://vimeo.com/1159599105'],
      ['TRAILER','https://vimeo.com/945253158'],
      ['BACKSTAGE','https://vimeo.com/1159631764']
    ]
  },
  {
    slug:'ritrattodirosaallitaliana',
    titolo:'Ritratto di Rosa, all’italiana',
    poster:'img/film/03_ritratto-di-rosa-italiana.jpg',
    video:'video/ritratto-di-rosa-italiana.mp4',
    dati:[
      ['GENRE','Super8 Short Film'],
      ['LENGHT','03’30’’'],
      ['YEAR','2023'],
      ['COUNTRY','Italy'],
      ['PRODUCTION','Sei Ottavi'],
      ['SPECIFICATION','Colors — 1.33:1 Super 8 — Stereo'],
      ['WHAT I DID','Film Director & Producer']
    ],
    sinossi:'“Ritratto di Rosa, all’italiana” stands as the second act of the trilogy begun in 2019 with “Portrait de Rosa, à la française.” The poetry of the first chapter is replaced by a melody that takes the viewer back among the waves of a journey, among rocks and shells. A song full of love and hope from the past, setting the end of youth and the beginning of maturity.',
    azioni:[
      ['WATCH NOW','https://vimeo.com/1005394516']
    ]
  },
  {
    slug:'portraitderosaalafrancaise',
    titolo:'Portrait de Rosa, à la française',
    poster:'img/film/04_portrait-de-rosa-francaise.jpg',
    video:'video/portrait-de-rosa-francaise.mp4',
    dati:[
      ['GENRE','Super8 Short Film'],
      ['LENGHT','03’00’’'],
      ['YEAR','2021'],
      ['COUNTRY','France'],
      ['PRODUCTION','Sei Ottavi'],
      ['SPECIFICATION','Colors — 1.33:1 Super 8 — Stereo'],
      ['WHAT I DID','Film Director & Producer']
    ],
    sinossi:'Filmed on Super 8 in Paris, Portrait de Rosa, à la française portrays an intimate love story through quiet images and gentle emotion.',
    azioni:[
      ['WATCH NOW','https://vimeo.com/1159617743']
    ]
  },
  {
    slug:'alifeinframes',
    titolo:'A Life in Frames',
    poster:'img/film/05_a-life-in-frames.jpg',
    video:'video/a-life-in-frames.mp4',
    dati:[
      ['GENRE','Video Essay'],
      ['LENGHT','39’20’’'],
      ['YEAR','2025'],
      ['COUNTRY','Italy'],
      ['PRODUCTION','Sei Ottavi with WYN'],
      ['DISTRIBUTION','YouTube'],
      ['SPECIFICATION','Colors - 1.85:1 Digital 2K - Stereo'],
      ['WHAT I DID','Writer, Director & Editor']
    ],
    sinossi:'A Life in Frames explores the work of Joe Walker, tracing his career from his early life to his most recent films. Through detailed analysis and discussion, we examine the techniques, choices, and creative vision that define his editing work.',
    azioni:[
      ['WATCH NOW','https://www.youtube.com/watch?v=Rwoypv3L_hs'],
      ['EVENT','https://youtu.be/QaJ0Ou5cF9w']
    ]
  }
],

/* ----------------------------------------------------------
   ESSAY — 6 video essay
   ---------------------------------------------------------- */
essay: [
  {titolo:'Hana-bi — Takeshi Kitano\'s Heart', img:'img/essay/01_hanabi-kitano.jpg',
   dati:[['GENRE','Video Essay'],['LENGHT','13’42’’'],['YEAR','2022'],['PRODUCTION','Sei Ottavi'],['SPECIFICATION','Colors — 1.85:1 Digital 2K — Stereo'],['WHAT I DID','Writer, Director & Editor']],
   azioni:[['WATCH ON YOUTUBE','https://www.youtube.com/watch?v=6MsZHBml1ws']]},

  {titolo:'Beck — Harold Sakuishi x Osamu Kobayashi', img:'img/essay/02_beck.jpg', focus:'50% 22.4%',
   dati:[['GENRE','Video Essay'],['LENGHT','16’35’’'],['YEAR','2024'],['PRODUCTION','Sei Ottavi'],['SPECIFICATION','Colors — 1.85:1 Digital 2K — Stereo'],['WHAT I DID','Writer, Director & Editor']],
   azioni:[['WATCH ON YOUTUBE','https://www.youtube.com/watch?v=7_5SFqdEo10']]},

  {titolo:'Rainbow Fireflies — Thank you Mr. Uda', img:'img/essay/03_rainbow-fireflies.jpg',
   dati:[['GENRE','Video Essay'],['LENGHT','10’46’’'],['YEAR','2021'],['PRODUCTION','Sei Ottavi'],['SPECIFICATION','Colors — 1.85:1 Digital 2K — Stereo'],['WHAT I DID','Director & Editor']],
   azioni:[['WATCH ON YOUTUBE','https://youtu.be/hP4sdMrF4QU']]},

  {titolo:'Wall Engravings — I thought life was a poem by Guy Gilles', img:'img/essay/04_wall-engravings.jpg',
   dati:[['GENRE','Video Essay'],['LENGHT','09’22’’'],['YEAR','2024'],['PRODUCTION','Sei Ottavi'],['SPECIFICATION','Colors — 1.66:1 Digital 2K — Stereo'],['WHAT I DID','Director & Editor']],
   azioni:[['WATCH ON YOUTUBE','https://youtu.be/1T1KBtldfPs']]},

  {titolo:'Sweet Deceptions — The first video essay on Alberto Lattuada', img:'img/essay/05_sweet-deceptions.jpg',
   dati:[['GENRE','Video Essay'],['LENGHT','10’00’’'],['YEAR','2021'],['PRODUCTION','Sei Ottavi'],['SPECIFICATION','Colors — 1.85:1 Digital 2K — Stereo'],['FOR WHOM','Locarno Film Festival'],['WHAT I DID','Writer, Director & Editor']],
   azioni:[['WATCH ON YOUTUBE','https://www.youtube.com/watch?v=dtwUtXDEzsk']]},

  {titolo:'The Apartment — Billy Wilder\'s trick room', img:'img/essay/06_the-apartment.jpg', focus:'48.7% 17.6%',
   dati:[['GENRE','Video Essay'],['LENGHT','10’16’’'],['YEAR','2020'],['PRODUCTION','Sei Ottavi'],['SPECIFICATION','Colors — 1.85:1 Digital 2K — Stereo'],['WHAT I DID','Director & Editor']],
   azioni:[['WATCH ON YOUTUBE','https://www.youtube.com/watch?v=yB868Y6UOnQ']]}
],

/* ----------------------------------------------------------
   MULTIMEDIA — 14 progetti
   ---------------------------------------------------------- */
multimedia: [
  {titolo:'Paganini Paradise', img:'img/multimedia/01_paganini-paradise.jpg', focus:'50% 70.4%',
   dati:[['GENRE','Superlive Immersive Concert'],['LENGHT','80 min'],['YEAR','2026'],['COUNTRY','Italy'],['WHERE','Arena di Verona'],['FOR WHOM','Karmachina'],['WHAT I DID','Storyboard & Post production']],
   azioni:[['LEARN MORE','https://www.rainews.it/tgr/veneto/video/2026/08/verona-paganini-paradise-in-arena-il-nuovissimo-concerto-immersivo-firmato-marco-balich--e3f041b6-4f25-4187-b145-48058c2041e3.html'],['WATCH MORE','https://www.youtube.com/watch?v=D9IzQGSqOow']]},

  {titolo:'Allerta Terra - Noi e il clima', img:'img/multimedia/02_allerta-terra.jpg', focus:'50% 50%',
   dati:[['GENRE','Immersive Exhibition'],['LENGHT','20 min'],['YEAR','2026'],['COUNTRY','Italy'],['WHERE','Genova Blue District'],['FOR WHOM','Karmachina'],['WHAT I DID','Post production']],
   azioni:[['LEARN MORE','https://www.genovabluedistrict.com/eventi/allera-terra-noi-e-il-clima/']]},
  {titolo:'The Prince of Goldsmiths - Shanghai', img:'img/multimedia/03_buccellati-shanghai.jpg', focus:'51.6% 100%',
   dati:[['GENRE','Immersive Exhibition'],['LENGHT','60 min'],['YEAR','2025'],['COUNTRY','China'],['WHERE','Shanghai Exhibition Center'],['FOR WHOM','Karmachina'],['WHAT I DID','Head of Post production']],
   azioni:[['LEARN MORE','https://www.buccellati.com/it_it/the-prince-of-goldsmiths-shanghai']]},

  {titolo:'Schengen Museum', img:'img/multimedia/04_schengen-museum.jpg',
   dati:[['GENRE','Multimedia Museum'],['LENGHT','/'],['YEAR','2025'],['COUNTRY','Luxembourg'],['WHERE','Schengen'],['FOR WHOM','Karmachina'],['WHAT I DID','Post production']],
   azioni:[['LEARN MORE','https://vimeo.com/1093757944']]},

  {titolo:'Ukiyo-e RE:BORN', img:'img/multimedia/05_ukiyoe-reborn.jpg',
   dati:[['GENRE','Immersive Exhibition'],['LENGHT','26’00’’'],['YEAR','2025'],['COUNTRY','Japan'],['WHERE','Kadokawa Museum (Tokyo)'],['FOR WHOM','Karmachina'],['WHAT I DID','Post production']],
   azioni:[['LEARN MORE','https://www.youtube.com/watch?v=PkEw6EDt96s']]},

  {titolo:'5 Threads, 40 Years', img:'img/multimedia/06_etro-5threads.jpg',
   dati:[['GENRE','Immersive Exhibition'],['LENGHT','8’00’’'],['YEAR','2025'],['COUNTRY','Italy'],['WHERE','Etro Home Collection, Milan'],['FOR WHOM','Karmachina'],['WHAT I DID','Post production']],
   azioni:[['LEARN MORE','https://vimeo.com/1074609415']]},

  {titolo:'Bergamo in sul monte', img:'img/multimedia/07_bergamo-monte.jpg',
   dati:[['GENRE','Immersive Exhibition'],['LENGHT','18’00’’'],['YEAR','2024'],['COUNTRY','Italy'],['WHERE','Mura di Bergamo: Il Museo - Porta Sant’Agostino, Bergamo'],['FOR WHOM','Karmachina'],['WHAT I DID','Art Direction & Post production Manager']],
   azioni:[['LEARN MORE','https://vimeo.com/1017487178']]},

  {titolo:'Monet: I Can See the Lights', img:'img/multimedia/08_monet-lights.jpg',
   dati:[['GENRE','Immersive Exhibition'],['LENGHT','26’00’’'],['YEAR','2024'],['COUNTRY','Japan'],['WHERE','Kadokawa Museum (Tokyo)'],['FOR WHOM','Karmachina'],['WHAT I DID','Storyboard & Post production']],
   azioni:[['LEARN MORE','https://youtu.be/z14WM_t_KzE']]},

  {titolo:'The Prince of Goldsmiths - Venice', img:'img/multimedia/09_buccellati-venezia.jpg',
   dati:[['GENRE','Immersive Exhibition'],['LENGHT','40’00’’'],['YEAR','2024'],['COUNTRY','Italy'],['WHERE','Oficine 800, Giudecca (Venice)'],['FOR WHOM','Karmachina'],['WHAT I DID','Post production']],
   azioni:[['LEARN MORE','https://www.buccellati.com/it_it/prince-of-goldsmiths']]},

  {titolo:'Sorolla a través de la luz', img:'img/multimedia/10_sorolla.jpg',
   dati:[['GENRE','Immersive Exhibition'],['LENGHT','15’00’’'],['YEAR','2023'],['COUNTRY','Spain'],['WHERE','Palazzo Reale, Madrid & Fundación Bancaja, Valencia'],['FOR WHOM','Karmachina'],['WHAT I DID','Post production']],
   azioni:[['LEARN MORE','https://vimeo.com/804342473']]},

  {titolo:'Vincent van Gogh - Un pittore colto', img:'img/multimedia/11_van-gogh.jpg',
   dati:[['GENRE','Immersive Exhibition'],['LENGHT','05’00’’'],['YEAR','2023'],['COUNTRY','Italy'],['WHERE','Mudec - Museo delle Culture, Milano'],['FOR WHOM','Karmachina'],['WHAT I DID','Storyboard & Post production']],
   azioni:[['LEARN MORE','https://vimeo.com/897147311']]},

  {titolo:'Open Art', img:'img/multimedia/12_open-art.jpg',
   dati:[['GENRE','Video mapping'],['LENGHT','20’00’’'],['YEAR','2023'],['COUNTRY','Italy'],['WHERE','Piazza Santo Stefano, Bologna'],['FOR WHOM','Karmachina'],['WHAT I DID','Post production']],
   azioni:[['LEARN MORE','https://www.balichwonderstudio.com/brand-experiences/immersive-experience/g-d-open-art/']]},

  {titolo:'The ExhiBEEtion', img:'img/multimedia/13_exhibeetion.jpg',
   dati:[['GENRE','Immersive Exhibition'],['LENGHT','08’00’’'],['YEAR','2022'],['COUNTRY','Italy'],['WHERE','Meet - Digital Culture Center, Milan'],['FOR WHOM','Karmachina'],['WHAT I DID','Post production']],
   azioni:[['LEARN MORE','https://vimeo.com/757625101']]},

  {titolo:'L’amato di Iside', img:'img/multimedia/14_amato-di-iside.jpg',
   dati:[['GENRE','Immersive Exhibition'],['LENGHT','30’00’’'],['YEAR','2023'],['COUNTRY','Italy'],['WHERE','Domus Aurea, Roma'],['FOR WHOM','Karmachina'],['WHAT I DID','Post production']],
   azioni:[['LEARN MORE','https://vimeo.com/848372058']]},

  {titolo:'La veduta di Gerusalemme al Colosseo', img:'img/multimedia/15_gerusalemme-colosseo.jpg',
   dati:[['GENRE','Permanent Video Mapping'],['LENGHT','07’00’’'],['YEAR','2022'],['COUNTRY','Italy'],['WHERE','Colosseo, Rome'],['FOR WHOM','Karmachina'],['WHAT I DID','Post production']],
   azioni:[['LEARN MORE','https://vimeo.com/725954736']]},

  {titolo:'Galleria Marca Corona', img:'img/multimedia/16_marca-corona.jpg',
   dati:[['GENRE','Video Exhibition'],['LENGHT','14’00’’ / 08’00’’'],['YEAR','2021-2022'],['COUNTRY','Italy'],['WHERE','Galleria Marca Corona, Sassuolo'],['FOR WHOM','Karmachina'],['WHAT I DID','Post production']],
   azioni:[['LEARN MORE','https://www.galleriamarcacorona.com/']]}
],

/* ----------------------------------------------------------
   PHOTOGRAPHY — 44 foto, nell'ordine in cui appaiono.
   Per aggiungerne una: copia una riga e cambia file e alt.
   ---------------------------------------------------------- */
photography: [
  ['01_lanterne.jpg','Donna dietro lanterne giapponesi'],
  ['02_onsen-tramonto.jpg','Persona in una vasca termale al tramonto'],
  ['03_capelli-bagnati.jpg','Ritratto in controluce, capelli bagnati'],
  ['04_spiaggia-braccia.jpg','Donna sulla spiaggia con le braccia aperte'],
  ['05_spiaggia-seduta.jpg','Donna seduta sulla sabbia'],
  ['06_tramonto-camicia.jpg','Ritratto vicino all\'acqua al tramonto'],
  ['07_bicicletta.jpg','Ciclista su una piazza in mattoni al tramonto'],
  ['08_saluto-mare.jpg','Donna che saluta guardando il mare'],
  ['09_ginocchia-spiaggia.jpg','Donna abbracciata alle ginocchia sulla spiaggia'],
  ['10_strada-maglione.jpg','Ragazza in una strada residenziale'],
  ['11_sorriso-tramonto.jpg','Ritratto sorridente al tramonto'],
  ['12_silhouette-spiaggia.jpg','Silhouette sulla spiaggia al tramonto'],
  ['13_finestra-notte.jpg','Due figure oltre una finestra a grata, di notte'],
  ['14_veranda.jpg','Donna seduta su una veranda'],
  ['15_cappotto-sabbia.jpg','Persona seduta sulla sabbia con il cappotto'],
  ['16_panchina-bosco.jpg','Donna su una panchina in un bosco'],
  ['17_campo-erba.jpg','Donna in un campo di erba alta'],
  ['18_panchina-bn.jpg','Ritratto in bianco e nero su una panchina'],
  ['19_shoji-letto.jpg','Persona su un letto fra pareti shoji'],
  ['20_fiume-montagne.jpg','Donna presso un fiume con montagne sullo sfondo'],
  ['21_panchina-giappone-bn.jpg','Donna distesa su una panchina, bianco e nero'],
  ['22_ombrello-autunno.jpg','Donna con ombrello trasparente fra foglie autunnali'],
  ['23_grotta-silhouette.jpg','Silhouette all\'imbocco di una grotta'],
  ['24_due-spiaggia-bn.jpg','Due persone sedute sulla spiaggia, bianco e nero'],
  ['25_grotta-cane.jpg','Due donne e un cane visti da una grotta'],
  ['26_pontile-bn.jpg','Persona distesa su un pontile, bianco e nero'],
  ['27_balcone-lago.jpg','Donna su un balcone affacciato sul lago'],
  ['28_piscina-montagne.jpg','Donna in piscina con montagne sullo sfondo'],
  ['29_finestra-letto.jpg','Ragazza alla finestra mentre un ragazzo dorme'],
  ['30_onsen-nebbia.jpg','Donna in una sorgente termale nella nebbia'],
  ['31_selfie-lago.jpg','Due persone si fotografano davanti al lago'],
  ['32_bacio-tramonto.jpg','Coppia al tramonto'],
  ['33_camicia-gialla.jpg','Ritratto con camicia gialla'],
  ['34_profilo-rosso.jpg','Profilo in controluce al tramonto'],
  ['35_specchio-bn.jpg','Donna allo specchio, bianco e nero'],
  ['36_sabbia-viso.jpg','Ragazza con la sabbia sul viso'],
  ['37_sdraiata-sabbia.jpg','Persona distesa sulla sabbia'],
  ['38_cappello-cespugli.jpg','Donna con cappello a tesa larga fra i cespugli'],
  ['39_arancione-dettaglio.jpg','Dettaglio di un tessuto arancione'],
  ['40_cappello-paglia.jpg','Donna con cappello di paglia in riva al mare'],
  ['41_letto-finestra.jpg','Persona distesa a letto vicino alla finestra'],
  ['42_spalla-tramonto.jpg','Coppia con la testa appoggiata alla spalla, al tramonto'],
  ['43_cerchio-acqua.jpg','Tre persone distese in acqua bassa'],
  ['44_mare-bn.jpg','Donna in mare, bianco e nero']
]

};
