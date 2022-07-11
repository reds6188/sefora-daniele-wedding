const santi = [
    {
      name: "San Daniele del Friuli",
      caption: "Protettore dei prosciutti",
      source: "prosciutto_crudo"
    },
    {
      name: "San Michele al Tagliamento",
      caption: "Protettore delle spiagge",
      source: "faro_bibione"
    },
    {
      name: "San Donà di Piave",
      caption: "Protettore di gente illustre",
      source: "san_dona_di_piave"
    },
    {
      name: "Santa Lucia di Piave",
      caption: "Protettrice dell'antica Fiera",
      source: "fiera_santa_lucia_di_piave"
    },
    {
      name: "San Stino di Livenza",
      caption: "Protettore dei fabbricatori di santini",
      source: "san_stino_di_livenza"
    },
    {
      name: "San Giorgio di Nogaro",
      caption: "Protettore della Bassa Friulana",
      source: "san_giorgio_di_nogaro"
    },
    {
      name: "San Gimignano",
      caption: "Protettore della torri",
      source: "san_gimignano"
    },
    {
      name: "Santa Maria di Leuca",
      caption: "Protettrice del tacco dello italico stivale",
      source: "santa_maria_di_leuca"
    },
    {
      name: "Santa Maria Novella",
      caption: "Protettrice della stazione fiorentina",
      source: "stazione_santa_maria_novella"
    },
    {
      name: "San Quirino",
      caption: "Protettore dei templari",
      source: "san_quirino"
    },
    {
      name: "San Quirico d'Orcia",
      caption: "Protettore dei cipressi",
      source: "san_quirico_dorcia"
    },
    {
      name: "San Remo",
      caption: "Protettore dei festival musicali",
      source: "sanremo"
    },
    {
      name: "Sans Souci",
      caption: "Protettore delle birre",
      source: "sans_souci"
    },
    {
      name: "San Pellegrino",
      caption: "Protettore dell'acqua e delle bibite gassate",
      source: "san_pellegrino"
    },
    {
      name: "San Giovese",
      caption: "Protettore del vino",
      source: "sangiovese"
    },
    {
      name: "San Carlo",
      caption: "Protettore delle patatine",
      source: "san_carlo_patatine"
    },
    {
      name: "Sam Sonite",
      caption: "Protettore delle valigie",
      source: "samsonite"
    },
    {
      name: "Sam Montana",
      caption: "Protettore del gelati",
      source: "sammontana"
    },
    {
      name: "Sam Marzano",
      caption: "Protettore dei pomodori",
      source: "sammarzano"
    },
    {
      name: "San Dalo",
      caption: "Protettore dei tedeschi con i calzini",
      source: "sandali"
    },
    {
      name: "Sam Pei",
      caption: "Protettore dei pescatori con grandi orecchie a sventola",
      source: "sampei"
    },
    {
      name: "San Siro",
      caption: "Protettore di Serpenti Nerazzurri e Diavoli Rossoneri",
      source: "stadio_san_siro"
    },
    {
      name: "San Disk",
      caption: "Protettore delle memorie Flash",
      source: "sandisk"
    },
    {
      name: "San Bitter",
      caption: "Protettore degli aperitivi analcolici",
      source: "sanbitter"
    },
    {
      name: "Sam Buca",
      caption: "Protettore dei liquori",
      source: "sambuca"
    },
    {
      name: "Santa Monica",
      caption: "Protettrice dei bagnini",
      source: "santa_monica_usa"
    },
    {
      name: "San Francisco",
      caption: "Protettore delle carceri di massima sicurezza",
      source: "san_francisco"
    },
    {
      name: "San Dokan",
      caption: "Santo patrono di Mompracem e di tutta la Malesia",
      source: "sandokan"
    },
    {
      name: "Sun Microsystem",
      caption: "Protettore della programmazione a classi",
      source: "sun_microsystem"
    },
    {
      name: "Saint Honoré",
      caption: "Santo patrono dei pasticcieri francesi (Onorato di Amiens)",
      source: "saint_honore"
    },
    {
      name: "San Tana",
      caption: "Protettore dei chitarristi",
      source: "santana"
    },
    {
      name: "San Tander",
      caption: "Protettore dei banchieri",
      source: "banca_santander"
    },
    {
      name: "Saint Bernardus",
      caption: "Protettore dei frati birrari",
      source: "st_bernardus"
    },
    {
      name: "Sam Pietrini",
      caption: "Protettore delle sospensioni",
      source: "sampietrini"
    },
    {
      name: "San Ificatore",
      caption: "Protettore dell'igiene che elimina fino al 99,9% di germi e batteri",
      source: "sanificatore"
    },
    {
      name: "San Gria",
      caption: "Protettore della frutta alcolizzata",
      source: "sangria"
    },
    {
      name: "San Gabriel",
      caption: "Protettore della birra nostrana",
      source: "san_gabriel"
    },
    {
      name: "San Miguel",
      caption: "Protettore della birra spagnola",
      source: "san_miguel"
    },
    {
      name: "Sam Pdoria",
      caption: "Protettore dei besughi",
      source: "sampdoria"
    },
    {
      name: "Sun Silk",
      caption: "Protettore dello shampoo",
      source: "sunsilk"
    },
    {
      name: "Santa Lucia",
      caption: "Protettrice delle mozzarelle",
      source: "mozzarella"
    },
    {
      name: "Santa Rosa",
      caption: "Protettrice delle marmellate",
      source: "marmellata"
    },
    {
      name: "San Crispino",
      caption: "Protettore del vino da tavola",
      source: "sancrispino"
    },
    {
      name: "Saint Moritz",
      caption: "Protettore degli sciatori",
      source: "saint_moritz"
    },
    {
      name: "Saint Vincent",
      caption: "Protettore dei casinò",
      source: "casino_saint_vincent"
    },
    {
      name: "San Scrito",
      caption: "Protettore della calligrafia dei dottori",
      source: "sanscrito"
    },
    {
      name: "San Torini",
      caption: "Protettore delle isole greche",
      source: "santorini"
    },
    {
      name: "San Dero",
      caption: "Protettore della Dacia",
      source: "dacia_sandero"
    },
    {
      name: "San Zione",
      caption: "Protettore dei vigili urbani",
      source: "sanzione"
    },
    {
      name: "San Vendemiano",
      caption: "Protettore di Alessandro Del Piero",
      source: "san_vendemiano"
    },
    {
      name: "San Giusto",
      caption: "Protettore di Trieste e de tuti i muli e le mule",
      source: "san_giusto_trieste"
    },
    {
      name: "Santa Nchè",
      caption: "Protettrice dei parlamentari italiani",
      source: "santanche"
    },
    {
      name: "San Guisuga",
      caption: "Protettore degli esami del sangue",
      source: "sanguisuga"
    },
    {
      name: "San Marino",
      caption: "Protettore degli staterelli dimenticati da Dio",
      source: "san_marino"
    },
    {
      name: "Sam Buco",
      caption: "Protettore dell'aperitivo Hugo",
      source: "sambuco"
    },
    {
      name: "San Tal",
      caption: "Protettore dei succhi di frutta",
      source: "santal"
    },
    {
      name: "San Bernardo",
      caption: "Protettore dei cani",
      source: "san_bernardo"
    },
    {
      name: "Sam Arcanda",
      caption: "Protettore dei cavalli oh-oh",
      source: "samarcanda"
    },
    {
      name: "San Candido Lienz",
      caption: "Protettore delle gite in bici",
      source: "san_candido_lienz"
    },
    {
      name: "San Ton",
      caption: "Protettore dei calciatori",
      source: "santon"
    },
    {
      name: "San Tino",
      caption: "Protettore del gioco di carte collezionabili dei santi",
      source: "santino"
    },
    {
      name: "San Culotto",
      caption: "Protettore dei rivoluzionari francesi",
      source: "sanculotto"
    },
    {
      name: "San Giovanni",
      caption: "Protettore di Amici di Maria",
      source: "sangiovanni"
    },
    {
      name: "Sam Sung",
      caption: "Protettore degli smartphone",
      source: "samsung"
    },
    {
      name: "San Itario",
      caption: "Protettore dei bagni",
      source: "sanitario"
    },
    {
      name: "San Antonio Spurs",
      caption: "Protettore dei giocatori di pallacanestro",
      source: "san_antonio_spurs"
    },
    {
      name: "San Dwich",
      caption: "Protettore dello spuntino",
      source: "sandwich"
    }
];

function checkWidth() {
	let image = document.querySelector("#figure img");
	image.height = document.getElementById("figure").offsetHeight;
}

window.addEventListener('load', checkWidth);	// Rendering on window load
window.addEventListener('resize', checkWidth);	// Rendering on window resize

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function randomCard() {
    const len = santi.length;
    const index = getRandomInt(len);
    document.getElementById("name").innerText = santi[index].name;
    let image = document.querySelector("#figure img");
    image.src = `images/santi/${santi[index].source}.jpg`;
    document.getElementById("caption").innerText = santi[index].caption;
}