export default {
    categories: [
        {
            id: 100,
            name: "Sekajäte",
            showOnCategoryPage: true,
            yes: [
                {
                    type: "Muovipohjainen energiajäte",
                    examples: [
                        "kierrätykseen kelpaamattomat materiaalit, esim. likaantuneet paperit, pahvit ja muovipakkaukset",
                        "hehku- ja halogeenilamput",
                        "sulakkeet",
                        "siivousjäte ja imurin pölypussit",
                        "PVC-muovia sisältävät jätteet, esim. puhallettavat lelut, muovipressut, vahakankaat ja sadevaatteet sekä ns. syvävedetyt myyntipakkaukset, kuten tablettien läpipainopakkaukset, lelu- ja autotarvikepakkaukset",
                        "alumiinipinnoitetut muovit, kuten sipsipussit, kahvipaketit",
                        "tuhka ja tupakantumpit",
                        "ikkunalasi, peililasi, posliini, keramiikka ja kristalli sekä kuumuuden kestävä lasi (pyrex)",
                        "kasetit (VHS- ja C-kasetit sekä tyhjät värikasetit)",
                        "tulostimien värikasetit",
                        "valokuvat ja negatiivit",
                        "nahka ja lumput",
                        "kumitavara, kuten polkupyörän renkaat ja lelut",
                        "rikkinäiset kengät ja vaatteet",
                        "kinkunrasva ja muu juokseva rasva pakattuna tiiviisti esim. muovipulloon",
                        "kertakäyttövaipat ja terveyssiteet",
                        "tavallinen ja mineraalipohjainen kissanhiekka",
                        "lemmikkieläinten jätökset"
                    ]
                }
            ],
            no: [
                {
                    examples: [
                        "ongelmajätteitä",
                        "kierrätykseen lajiteltavissa olevia materiaaleja"
                    ]
                }
            ],
            remember: [],
            description: "Test description"
        },
        {
            id: 101,
            name: "Bio- ja puutarhajäte",
            showOnCategoryPage: true,
            yes: [
                {
                    type: null,
                    examples: [
                        "ruoantähteet",
                        "pilaantuneet elintarvikkeet",
                        "kiinteät rasvat, hyytyneet paistinrasvat",
                        "hedelmien ja kasvisten kuoret",
                        "kahvin tai teen porot",
                        "teepussit ja suodatinpaperit",
                        "kananmunankuoret",
                        "kananmunakennot",
                        "kalanperkuujätteet, pienet luut",
                        "talouspaperit, lautasliinat ja nenäliinat",
                        "kukkamulta, kasvinosat ja kuihtuneet kukat",
                        "puutarhajätteet",
                        "lemmikkieläinten puupohjaiset kuivikkeet"
                    ]
                }
            ],
            no: [{
                examples: [
                    "muovikasseja ja -pusseja -> seka- tai energiajätteeseen tai muovikassien keräykseen",
                    "ruokaöljyjä ja muita juoksevia rasvoja -> sekajätteeseen tiiviiseen muovipulloon pakattuna",
                    "liemiä, nesteitä -> viemäriin",
                    "tuhkaa, tupakantumppeja -> sekajätteeseen",
                    "imurin pölypusseja -> sekajätteeseen",
                    "vaippoja, terveyssiteitä -> sekajätteeseen",
                    "maito- ja mehutölkkejä -> keräyskartonkiin",
                    "lääkkeitä -> apteekkiin",
                    "tavallista tai mineraalipohjaista kissanhiekkaa -> sekajätteeseen",
                    "lemmikkieläinten jätöksiä -> sekajätteeseen",
                    "muita maatumattomia tai haitallisia materiaaleja",
                ]
            }],
            remember: [],
            description: "Test description"
        },
        {
            id: 102,
            name: "Energiajäte",
            showOnCategoryPage: true,
            yes: [
                {
                    type: "Muovipohjainen energiajäte",
                    examples: [
                        "Nuolikolmion sisällä olevalla numerotunnuksella 01, 02, 04, 05 ja 06 merkityt muovit",
                        "Nuolikolmion sisällä olevalla numerotunnuksella 07 merkityt pakkausmuovit",
                        [
                            "Esimerkiksi seuraavat tuotteet:",
                            "elintarvikkeiden, kuten juustojen ja leikkeleiden, muovikääreet",
                            "elintarvikkeiden muoviset pakkaukset huuhdeltuina, kuten kuten viili- ja jogurttipurkit, voi- ja margariinirasiat",
                            "kiriste- ja kutistemuovit",
                            "muovia ja paperia sisältävät pakkaukset",
                            "muovikanisterit ja -sangot, ämpärit",
                            "muovikannet ja -korkit",
                            "muovikassit, -pussit ja -kelmut",
                            "muovipullot, kuten kertakäyttöiset virvoitusjuoma-, mehu-, pesuaine- ym. pullot (pantilliset pullot palautukseen)",
                            "muoviset kertakäyttöastiat",
                            "muoviset pakkausalustat ja -kotelot",
                            "pienet muoviesineet kuten tiskiharjat, kynien muovikuoret",
                            "styroksi (likaiset styroksit sekajätteeseen, esim. kalalaatikot)",
                            "vaahtomuovi (leikkaa patjat 4:ään osaan)",
                            "valokuvat ja negatiivit",
                            "virvoitusjuomakorit"
                        ]
                    ]
                },
                {
                    type: "Energiajätteeseen kuuluva kartonki ja paperijäte",
                    examples: [
                        "likaantunut, kostea pahvi ja kartonki",
                        "märkälujakartonki",
                        "kaikki pahvi ja kartonki vain, jos niille ei ole järjestetty erillistä keräystä",
                        "itsejäljentävä paperi",
                        "julisteet",
                        "karkkipaperit",
                        "lahja-, kääre- ja pakkauspaperit",
                        "liimautuvat muistilaput",
                        "muovi- ja vahapinnoitettu paperi",
                        "osoite- ja muut pikkutarrat sekä niiden taustapaperit"
                    ]
                },
                {
                    type: "Energiajätteeseen kelpaava puujäte",
                    examples: [
                        "pikinen puu",
                        "puurakenteet, joissa polypropeeni- tai polystyreenimuovia",
                        "kutterinpuru, sahanpuru (voi kelvata puunkeräykseen)",
                        "puurakenteiset huonekalut (voi kelvata puunkeräykseen)"
                    ]
                }
            ],
            no: [{
                examples: [
                    "PVC-muovi (nuolikolmion sisällä on numerotunnus 03, aina tunnusta ei kuitenkaan ole)",
                    [
                        "johdot, putket, letkut",
                        "keinonahka",
                        "kontaktimuovi, ruskea pakkausteippi, jotkut tarrat",
                        "lateksihansikkaat ja muut suojavaatteet",
                        "mapit, muovitaskut, piirtoheitinkalvot",
                        "muovikortit, esim. luottokortit",
                        "muovipressut ja –ritilät",
                        "puhallettavat lelut",
                        "uimapatjat ja -renkaat",
                        "rakentamisessa käytetyt muovit, kuten tapetit, lattiapäällysteet, listat ja kattokourut",
                        "sadetakit, suihkumyssyt ja -verhot",
                        "suojatossut, esiliinat, kerniliinat",
                        "ns. syvävedetyt myyntipakkaukset, kuten tablettien läpilyöntilevyt, lelu- ja autotarvikepakkaukset",
                        "äänilevyt"
                    ],
                    "Nuolikolmion sisällä olevalla numerotunnuksella 07 merkityt, muut kuin pakkausmuovit",
                    "Muut tunnistamattomat muoviset esineet",
                    "Muut energiajakeeseen soveltumattomat jätteet",
                    [
                        "alumiinia sisältävä materiaali, kuten foliovuoratut sipsipussit ja -purkit, mehutölkit, makkaranpaistopussit, kahvipaketit",
                        "biojäte",
                        "fluoria sisältävät esineet",
                        "haltex-levyt",
                        "hammastahnaputkilot ja -harjat",
                        "kasetit (VHS-, C- ja värikasetit)",
                        "keramiikka",
                        "kumi",
                        "lahopuu",
                        "lasi",
                        "metallit",
                        "nahka",
                        "ongelmajätteet",
                        "painekyllästetty puu",
                        "painepakkaukset, kuten hiuslakat, spraymaalit, deodorantit",
                        "paristot",
                        "posliini",
                        "puurakenteet joissa tervapaperia, betonia tai PVC:tä",
                        "pölyävä jäte, kuten siivousjäte, pölynimuripussit ja tuhka",
                        "sähkö- ja elektroniikkaromu",
                        "sähkölamput",
                        "vaipat, siteet"
                    ],
                ]
            }],
            remember: [],
            description: "Test description"
        },
        {
            id: 103,
            name: "Paperi",
            showOnCategoryPage: true,
            yes: [
                {
                    type: null,
                    examples: [
                        "sanoma- ja aikakauslehdet",
                        "mainokset ja esitteet",
                        "kirjekuoret, myös ikkunalliset",
                        "puhelinluettelot",
                        "kirjat ilman kansia",
                        "kirjoitus- ja kopiopaperit sekä piirustuspaperit",
                        "kaikki postiluukun tai -laatikon kautta talouteen tulleet paperit"
                    ]
                }
            ],
            no: [{
                examples: [
                    "märkää tai likaista paperia",
                    "pahvia ja ruskeaa paperia, ruskeita paperikasseja",
                    "kartonkitölkkejä, kuten maito- ja mehupurkkeja",
                    "muovia",
                    "alumiini-, vaha- tai lahjapaperia"
                ]
            }],
            remember: [{
                examples: [
                    "Niittejä tai paperiliittimiä ei tarvitse poistaa",
                    "Älä niputa lehtiä narulla tai pakkausteipillä",
                    "Älä heitä lehtipussia keräyslaatikkoon, ellet käytä valkoista paperikassia"
                ]
            }],
            description: "Test description"
        },
        {
            id: 104,
            name: "Pahvi",
            showOnCategoryPage: false,
            yes: [
                {
                    type: null,
                    examples: []
                }
            ],
            no: [],
            remember: [],
            description: "Test description"
        },
        {
            id: 105,
            name: "Kartonki",
            showOnCategoryPage: true,
            yes: [
                {
                    type: null,
                    examples: [
                        "Aaltopahvilaatikot",
                        "Kartonkitölkit, esim. maito- ja mehutölkit",
                        "Kartonkiset einespakkaukset, kuivatuotteiden kartonkipakkaukset",
                        "Kuivien tuotteiden kartonkipakkaukset, esim. muro- ja keksipaketit",
                        "Paperipussit ja -kassit",
                        "Pizzalaatikot, munakennot",
                        "Kartonkiset kertakäyttöastiat",
                        "WC- ja talouspaperirullien hylsyt",
                        "Juomien pahviset monipakkaukset, esim. sixpackit ja salkut"
                    ]
                }
            ],
            no: [{
                examples: [
                    "Muovia, esim. muovipusseja, -kasseja ja -kääreitä, styroksia, kuplamuovia"
                ]
            }],
            remember: [{
                examples: [
                    "Palauta pakkaukset tyhjinä, puhtaina, kuivina, litistettyinä ja sisäkkäin pakattuina",
                    "Vie vaarallisten aineiden jäämiä tai painetta sisältävät pakkaukset (esim. maalit, kemikaalit, lääkkeet, hiuslakka) paikkakuntasi vaarallisten jätteiden keräykseen",
                ]
            }],
            description: "Test description"
        },
        {
            id: 106,
            name: "Metalli",
            showOnCategoryPage: true,
            yes: [
                {
                    type: "Metallipakkaukset",
                    examples: [
                        "Säilyketölkit",
                        "Pantittomat juomatölkit",
                        "Metallikannet, -korkit ja -sulkimet",
                        "Alumiinivuoat, -foliot ja -kannet",
                        "Maalipurkit",
                        "Paineettomat aerosolipullot"
                    ]
                },
                {
                    type: "Kotitalouden pienmetalliesineet",
                    examples: [
                        "Kattilat ja paistinpannut",
                        "Aterimet, sakset ja käsityökalut",
                        "Muut pienet metalliesineet (naulat, ruuvit, helat ym.)",
                        "Alumiiniset tuikkukynttilöiden kuoret"
                    ]
                }
            ],
            no: [{
                examples: [
                    "Muovia: esim. muovipusseja, -kasseja ja -kääreitä, styroksia, kuplamuovia"
                ],
            }],
            remember: [{
                examples: [
                    "Isot metalliromut vastaanotetaan yleensä vain miehitetyissä keräyspaikoissa tai kiertävillä keräyksillä, esimerkiksi polkupyörät, räystäskourut, metalliset koneet, huonekalujen metalliosat, metalliputket, kaapelit",
                    "Keräykseen ei saa tuoda sähkö- ja elektroniikkaromua.",
                    "Vie vaarallisten aineiden jäämiä tai painetta sisältävät pakkaukset (esim. maalit, kemikaalit, lääkkeet, hiuslakka) paikkakuntasi vaarallisten jätteiden vastaanottopisteeseen",
                ],
            }],
            description: "Test description"
        },
        {
            id: 107,
            name: "Lasi",
            showOnCategoryPage: true,
            yes: [
                {
                    type: null,
                    examples: [
                        "lasipullot",
                        "lasipurkit",
                    ]
                }
            ],
            no: [{
                examples: [
                    "Terveydenhuollon pakkauksia, kuten injektionestepulloja ja ampulleja",
                    "Muovia: esim. muovipusseja, -kasseja ja -kääreitä, styroksia, kuplamuovia",
                    "Posliinia tai keramiikkaa",
                    "Lasiastioita (esim. juomalasit, uunivuoat, kahvipannut, kattiloiden ja pannujen kannet)",
                    "Kristallilasia",
                    "Opaalilasia (esim. joissain kosmetiikkapakkauksissa tai koriste-esineissä)",
                    "Ikkuna- tai peililasia",
                    "Lamppuja tai valaisimia"
                ]
            }],
            remember: [{
                examples: [
                    "Poista korkit ja kannet",
                    "Kaulusrenkaita ja etikettejä ei tarvitse poistaa. Huuhtele likaiset lasipakkaukset tarvittaessa kylmällä vedellä. Palauta pantilliset lasipullot kaupan tai Alkon palautusautomaattiin",
                    "Vie vaarallisten aineiden jäämiä tai painetta sisältävät pakkaukset (esim. maalit, kemikaalit, lääkkeet, hiuslakka) paikkakuntasi vaarallisten jätteiden vastaanottopisteeseen"
                ]
            }],
            description: "Test description"
        },
        {
            id: 108,
            name: "Vaarallinen jäte",
            showOnCategoryPage: true,
            yes: [
                {
                    type: null,
                    examples: [
                        "ajoneuvojen jäähdytin-, jarru- ja kytkinnesteet",
                        "jäteöljyt, öljynsuodattimet ja muut öljyiset jätteet",
                        "liuottimet kuten tärpätti, tinneri, asetoni (myös kynsilakanpoistoaine) ja liuotinpitoiset pesuaineet",
                        "maalit, liimat, lakat ja hartsit sekä puunsuoja- ja kyllästysaineet (myös kynsilakka)",
                        "kaasua sisältävät tai sisältäneet paineastiat",
                        "aerosolipakkaukset",
                        "emäksiset pesuaineet",
                        "torjunta- ja desinfiointiaineet",
                        "uudenvuodentinat",
                        "valokuvauskemikaalit",
                        "voimakkaat hapot kuten rikkihappo",
                        "asbestipitoinen jäte -> katso paikalliset ohjeet",
                        "painekyllästetty puu -> katso paikalliset ohjeet",
                        "loisteputket, pienoisloistelamput ja energiansäästölamput -> omaan keräysjärjestelmäänsä",
                        "sähkölaitteet -> omaan keräysjärjestelmäänsä",
                        "paristot, nappiparistot ja akut -> omaan keräysjärjestelmäänsä",
                        "elohopeakuumemittarit ja käyttämättä jääneet lääkkeet -> apteekkiin tai kiertävään keräysautoon",
                    ]
                }
            ],
            no: [{
                examples: [
                    "täysin kuivuneita ja tyhjiä astioita"
                ]
            }],
            remember: [{
                examples: [
                    "Vaaralliset jätteet on aina lajiteltava erikseen muusta jätteestä!",
                    "Lääkejätteet apteekkiin",
                    "Räjähteet poliisille",
                    "Sähkölaitteet sekä akut ja paristot omiin keräysjärjestelmiinsä",
                    "Asbestijäte on erityiskäsittelyä vaativaa jätettä, joka pitää paketoida erikseen"
                ]
            }],
            description: "Test description"
        },
        {
            id: 109,
            name: "Sähkölaitteet (SER)",
            showOnCategoryPage: true,
            yes: [
                {
                    type: null,
                    examples: [
                        "suuret kodinkoneet (jääkaapit, pakastimet, pesukoneet, astianpesukoneet, sähköliedet, mikroaaltouunit, sähköiset lämmityslaitteet jne.)",
                        "pienet kodinkoneet (pölynimurit, ompelukoneet, silitysraudat, leivänpaahtimet, kahvinkeittimet, parranajokoneet, hiustenkuivaajat, sähköhammasharjat jne.)",
                        "tieto- ja teletekniset laitteet (tietokoneet, tulostimet, näytöt, näppäimistöt, hiiret, taskulaskimet, puhelimet jne.)",
                        "kuluttajaelektroniikka (radiot, televisiot, videokamerat, digikamerat, videonauhurit, kaiuttimet, DVD-soittimet jne.)",
                        "valaistuslaitteet (valaisimet, loisteputket, energiansäästölamput, taskulamput, EI hehku- tai halogeenilamppuja)",
                        "sähkö- ja elektroniikkatyökalut (porat, sahat, sähköruohonleikkurit jne.)",
                        "lelut, vapaa-ajan- ja urheiluvälineet (sähköjunat, kilpa-autoradat, videopelilaitteistot jne.)",
                        "terveydenhuollon laitteet (elektroniset verenpaine- ja kuumemittarit jne.)",
                        "tarkkailu- ja valvontalaitteet (paloilmaisimet, termostaatit jne.)",
                    ]
                }
            ],
            no: [{
                examples: [
                    "irrallisia paristoja ja akkuja -> paristoja ja pienakkuja kerätään niitä myyvissä myymälöissä, kioskeilla ja huoltoasemilla",
                    "hehku- ja halogeenilamppuja -> sekajätteeseen"
                ]
            }],
            remember: [{
                examples: [
                    "Poista valaisimista lamput ja loisteputket, jotka kerätään erikseen keräyspisteissä tai myymälöissä. Loisteputkien sytyttimet ovat osa valaisinta",
                    "Poista pölynimureista pölypussit",
                    "Tulostimista ja kirjoittimista ei tarvitse poistaa väripatruunoita tai -kasetteja",
                    "Tuo kaikki laitteet ilman pakkauksia",
                    "Laitteiden tulee olla pääsääntöisesti kokonaisia",
                    "Kahvinkeitinten lasikannut tai mikroaaltouunin lasilautaset kuuluvat sekajätteeseen",
                    "Laitteet palautetaan ilman pakkauksia ja ylimääräisiä teippejä"
                ]
            }],
            description: "Test description"
        },
        {
            id: 110,
            name: "Paristot",
            showOnCategoryPage: true,
            yes: [
                {
                    type: null,
                    examples: [
                        "kotitalousparistot",
                        "nappiparistot",
                        "kannettavat akut (suljettuja, käsin kannettavia)"
                    ]
                }
            ],
            no: [{
                examples: [
                    "ajoneuvo- ja teollisuusakkuja -> akkujen keräykseen"
                ]
            }],
            remember: [],
            description: "Test description"
        },
        {
            id: 111,
            name: "Muovi",
            showOnCategoryPage: true,
            yes: [
                {
                    type: null,
                    examples: [
                        "Elintarvikkeiden muoviset pakkaukset, kuten jogurttipurkit, voirasiat sekä leikkele-, juusto- valmisruokapakkaukset",
                        "Pesuaine-, shampoo- ja saippuapakkaukset",
                        "Muovipullot, -kanisterit ja -purkit – mieluiten litistettyinä",
                        "Muovikassit, -pussit ja -kääreet",
                    ]
                }
            ],
            no: [{
                examples: [
                    "Sekajätettä",
                    "PVC-pakkauksia",
                    "Muita muovituotteita tai yritysten muovipakkauksia"
                ]
            }],
            remember: [
                "Palauta kotitalouden muovipakkaukset tyhjinä, puhtaina ja kuivina",
                "Vie vaarallisten aineiden jäämiä tai painetta sisältävät pakkaukset (esim. maalit, kemikaalit, lääkkeet, hiuslakka) paikkakuntasi vaarallisten jätteiden vastaanottopisteeseen",
            ],
            description: "Test description"
        },
        {
            id: 113,
            name: "Tekstiili",
            showOnCategoryPage: true,
            yes: [
                {
                    type: null,
                    examples: [
                        "käyttökelpoiset vaatteet ja jalkineet",
                        "verhot",
                        "pyyhkeet",
                        "lakanat",
                        "muu puhdas ja kuiva käytöstä poistettu tekstiili",
                    ]
                }
            ],
            no: [{
                examples: [
                    "likaisia tai rikkinäisiä vaatteita"
                ]
            }],
            remember: [{
                examples: [
                    "Keräykseen kelpaavat vain ehjät, puhtaat ja käyttökelpoiset vaatteet",
                    "Pakkaa vaatteet normaalikokoisiin muovipusseihin"
                ]
            }],
            description: "Test description"
        },
        {
            id: 114,
            name: "Muu jäte",
            showOnCategoryPage: false,
            yes: [
                {
                    type: null,
                    examples: []
                }
            ],
            no: [],
            remember: [],
            description: "Test description"
        },
        {
            id: 115,
            name: "Akut",
            showOnCategoryPage: true,
            yes: [
                {
                    type: "ajoneuvoakut",
                    examples: [
                        "henkilö-, paketti- ja kuorma-autojen akut",
                        "mopojen ja moottoripyörien akut",
                        "kolmi- ja nelipyörien sekä kevyiden nelipyörien akut",
                        "traktorin, moottorityökoneen ja maastoajoneuvon akut",
                        "auton alustalle rakennettujen työkoneiden akut",
                        "hinattavien laitteiden ja moottorittomien ajoneuvojen akut",
                        "perävaunujen akut",
                        "pelastusautojen, poliisiajoneuvojen, ruumisautojen ja sairasautojen akut",
                        "matkailuautojen akut",
                        "museoajoneuvojen akut",
                        "huoltoautojen akut"
                    ]
                },
                {
                    type: "teollisuusakut",
                    examples: [
                        "varatievalojen akut",
                        "varavoima-akut",
                        "sähkökäyttöisten trukkien akut",
                        "siivouskoneiden akut",
                        "joidenkin instrumenttien akut",
                        "joidenkin kassapäätteiden varmennusakut"
                    ]
                }
            ],
            no: [{
                examples: [
                    "kannettavia akkuja ja paristoja -> paristojen keräykseen"
                ]
            }],
            remember: [],
            description: "Test description"
        },
        {
            id: 116,
            name: "Lamput",
            showOnCategoryPage: true,
            yes: [
                {
                    type: null,
                    examples: [
                        "energiansäästölamput",
                        "loisteputket"
                    ]
                }
            ],
            no: [{
                examples: [
                    "halogeenilamput -> sekajätteeseen",
                    "hehkulamput -> sekajätteeseen",
                    "autojen lamput -> sekajätteeseen"
                ]
            }],
            remember: [{
                examples: [
                    "Energiansäästölamput sisältävät pieniä määriä elohopeaa, joten vältä rikkomasta niitä. Lampputieto-sivustolta löydät vastauksia usein esitettyihin kysymyksiin"
                ]
            }],
            description: "Test description"
        },
        {
            id: 117,
            name: "Puu",
            showOnCategoryPage: true,
            yes: [
                {
                    type: null,
                    examples: [
                        "puu- ja kuormalavat, myös lastulevystä tehdyt",
                        "laudat, lankut, puupöllit, vanerit",
                        "massiivipuu ja siitä valmistetut huonekalut",
                        "maalamaton ja maalattu rakennus- ja purkupuu",
                        "puiset betonin valumuotit, betoniset laudat",
                        "kuitu- ja kovalevyt, puuparketit",
                        "kaapelikelat",
                        "puretut kaapistot, komerot ja laatikostot",
                        "lastu- ja MDF -levyrunkoiset huonekalut",
                        "ovet ja ikkunankehykset",
                        "muovipinnoitettu puu, lastu-, MDF- ja melamiinilevyt"
                    ]
                }
            ],
            no: [{
                examples: [
                    "verhoillut huonekalut",
                    "ikkunat laseineen",
                    "lasi- ja peiliovet",
                    "PVC -muovia, laattoja ym. sisältävät puumateriaalit",
                    "kyllästetty puu",
                    "risut ja oksat"
                ]
            }],
            remember: [{
                examples: [
                    "Puujätteessä saa olla nauloja, ruuveja, heloja ym. pieniä metalliosia"
                ]
            }],
            description: "Test description"
        },
        {
            id: 118,
            name: "Kyllästetty puu",
            showOnCategoryPage: false,
            yes: [
                {
                    type: null,
                    examples: []
                }
            ],
            no: [],
            remember: [],
            description: "Test description"
        },
        {
            id: 119,
            name: "Rakennus- ja purkujäte",
            showOnCategoryPage: true,
            yes: [
                {
                    type: "Muovipohjainen energiajäte",
                    examples: []
                },
                {
                    type: "Rakennushankkeessa on kerättävä ja pidettävä erillään seuraavat jätelajit, mikäli se on teknisesti ja taloudellisesti mahdollista",
                    examples: [
                        "betoni-, tiili-, kivennäislaatta- ja keramiikkajätteet",
                        "kipsipohjaiset jätteet",
                        "kyllästämättömät puujätteet",
                        "metallijätteet",
                        "lasijätteet",
                        "muovijätteet",
                        "paperi- ja kartonkijätteet",
                        "maa- ja kiviainesjätteet"
                    ]
                },
                {
                    type: "Lisäksi vaaralliset jätteet on aina pidettävä erillään muista jätteistä ja materiaaleista",
                    examples: []
                }
            ],
            no: [],
            remember: [{
                examples: [
                    "Lajitteluvelvoitteen voi täyttää joko lajittelemalla ja erilliskeräämällä rakennusjätteen työmaalla tai toimittamalla sekalaisen rakennusjätteen lajiteltavaksi jätteen käsittelylaitoksessa",
                    "Vaaralliset jätteet ja merkittävät määrät kipsijätettä on kuitenkin otettava erilleen jo syntypaikalla",
                    "Esimerkiksi metalli-, betoni- ja puujätteet kannattaa useimmiten kerätä erikseen muusta rakennusjätteestä"
                ]
            }],
            description: "Test description"
        },
    ]
}