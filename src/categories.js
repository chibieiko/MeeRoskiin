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
                        "Kierrätykseen kelpaamattomat materiaalit, esim. likaantuneet paperit, pahvit ja muovipakkaukset",
                        "Hehku- ja halogeenilamput",
                        "Sulakkeet",
                        "Siivousjäte ja imurin pölypussit",
                        "PVC-muovia sisältävät jätteet, esim. puhallettavat lelut, muovipressut, vahakankaat ja sadevaatteet sekä ns. syvävedetyt myyntipakkaukset, kuten tablettien läpipainopakkaukset, lelu- ja autotarvikepakkaukset",
                        "Alumiinipinnoitetut muovit, kuten sipsipussit, kahvipaketit",
                        "Tuhka ja tupakantumpit",
                        "Ikkunalasi, peililasi, posliini, keramiikka ja kristalli sekä kuumuuden kestävä lasi (pyrex)",
                        "Kasetit (VHS- ja C-kasetit sekä tyhjät värikasetit)",
                        "Tulostimien värikasetit",
                        "Valokuvat ja negatiivit",
                        "Nahka ja lumput",
                        "Kumitavara, kuten polkupyörän renkaat ja lelut",
                        "Rikkinäiset kengät ja vaatteet",
                        "Kinkunrasva ja muu juokseva rasva pakattuna tiiviisti esim. muovipulloon",
                        "Kertakäyttövaipat ja terveyssiteet",
                        "Tavallinen ja mineraalipohjainen kissanhiekka",
                        "Lemmikkieläinten jätökset"
                    ]
                }
            ],
            no: [
                {
                    examples: [
                        "Ongelmajätteitä",
                        "Kierrätykseen lajiteltavissa olevia materiaaleja"
                    ]
                }
            ],
            remember: null,
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
                        "Ruoantähteet",
                        "Pilaantuneet elintarvikkeet",
                        "Kiinteät rasvat, hyytyneet paistinrasvat",
                        "Hedelmien ja kasvisten kuoret",
                        "Kahvin tai teen porot",
                        "Teepussit ja suodatinpaperit",
                        "Kananmunankuoret",
                        "Kananmunakennot",
                        "Kalanperkuujätteet, pienet luut",
                        "Talouspaperit, lautasliinat ja nenäliinat",
                        "Kukkamulta, kasvinosat ja kuihtuneet kukat",
                        "Puutarhajätteet",
                        "Lemmikkieläinten puupohjaiset kuivikkeet"
                    ]
                }
            ],
            no: [{
                examples: [
                    "Muovikasseja ja -pusseja -> seka- tai energiajätteeseen tai muovikassien keräykseen",
                    "Ruokaöljyjä ja muita juoksevia rasvoja -> sekajätteeseen tiiviiseen muovipulloon pakattuna",
                    "Liemiä, nesteitä -> viemäriin",
                    "Tuhkaa, tupakantumppeja -> sekajätteeseen",
                    "Imurin pölypusseja -> sekajätteeseen",
                    "Vaippoja, terveyssiteitä -> sekajätteeseen",
                    "Maito- ja mehutölkkejä -> keräyskartonkiin",
                    "Lääkkeitä -> apteekkiin",
                    "Tavallista tai mineraalipohjaista kissanhiekkaa -> sekajätteeseen",
                    "Lemmikkieläinten jätöksiä -> sekajätteeseen",
                    "Muita maatumattomia tai haitallisia materiaaleja",
                ]
            }],
            remember: null,
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
                            "Elintarvikkeiden, kuten juustojen ja leikkeleiden, muovikääreet",
                            "Elintarvikkeiden muoviset pakkaukset huuhdeltuina, kuten kuten viili- ja jogurttipurkit, voi- ja margariinirasiat",
                            "Kiriste- ja kutistemuovit",
                            "Muovia ja paperia sisältävät pakkaukset",
                            "Muovikanisterit ja -sangot, ämpärit",
                            "Muovikannet ja -korkit",
                            "Muovikassit, -pussit ja -kelmut",
                            "Muovipullot, kuten kertakäyttöiset virvoitusjuoma-, mehu-, pesuaine- ym. pullot (pantilliset pullot palautukseen)",
                            "Muoviset kertakäyttöastiat",
                            "Muoviset pakkausalustat ja -kotelot",
                            "Pienet muoviesineet kuten tiskiharjat, kynien muovikuoret",
                            "Styroksi (likaiset styroksit sekajätteeseen, esim. kalalaatikot)",
                            "Vaahtomuovi (leikkaa patjat 4:ään osaan)",
                            "Valokuvat ja negatiivit",
                            "Virvoitusjuomakorit"
                        ]
                    ]
                },
                {
                    type: "Energiajätteeseen kuuluva kartonki ja paperijäte",
                    examples: [
                        "Likaantunut, kostea pahvi ja kartonki",
                        "Märkälujakartonki",
                        "Kaikki pahvi ja kartonki vain, jos niille ei ole järjestetty erillistä keräystä",
                        "Itsejäljentävä paperi",
                        "Julisteet",
                        "Karkkipaperit",
                        "Lahja-, kääre- ja pakkauspaperit",
                        "Liimautuvat muistilaput",
                        "Muovi- ja vahapinnoitettu paperi",
                        "Osoite- ja muut pikkutarrat sekä niiden taustapaperit"
                    ]
                },
                {
                    type: "Energiajätteeseen kelpaava puujäte",
                    examples: [
                        "Pikinen puu",
                        "Puurakenteet, joissa polypropeeni- tai polystyreenimuovia",
                        "Kutterinpuru, sahanpuru (voi kelvata puunkeräykseen)",
                        "Puurakenteiset huonekalut (voi kelvata puunkeräykseen)"
                    ]
                }
            ],
            no: [{
                examples: [
                    "PVC-muovi (nuolikolmion sisällä on numerotunnus 03, aina tunnusta ei kuitenkaan ole)",
                    [
                        "Johdot, putket, letkut",
                        "Keinonahka",
                        "Kontaktimuovi, ruskea pakkausteippi, jotkut tarrat",
                        "Lateksihansikkaat ja muut suojavaatteet",
                        "Mapit, muovitaskut, piirtoheitinkalvot",
                        "Muovikortit, esim. luottokortit",
                        "Muovipressut ja –ritilät",
                        "Puhallettavat lelut",
                        "Uimapatjat ja -renkaat",
                        "Rakentamisessa käytetyt muovit, kuten tapetit, lattiapäällysteet, listat ja kattokourut",
                        "Sadetakit, suihkumyssyt ja -verhot",
                        "Suojatossut, esiliinat, kerniliinat",
                        "Ns. syvävedetyt myyntipakkaukset, kuten tablettien läpilyöntilevyt, lelu- ja autotarvikepakkaukset",
                        "Äänilevyt"
                    ],
                    "Nuolikolmion sisällä olevalla numerotunnuksella 07 merkityt, muut kuin pakkausmuovit",
                    "Muut tunnistamattomat muoviset esineet",
                    "Muut energiajakeeseen soveltumattomat jätteet",
                    [
                        "Alumiinia sisältävä materiaali, kuten foliovuoratut sipsipussit ja -purkit, mehutölkit, makkaranpaistopussit, kahvipaketit",
                        "Biojäte",
                        "Fluoria sisältävät esineet",
                        "Haltex-levyt",
                        "Hammastahnaputkilot ja -harjat",
                        "Kasetit (VHS-, C- ja värikasetit)",
                        "Keramiikka",
                        "Kumi",
                        "Lahopuu",
                        "Lasi",
                        "Metallit",
                        "Nahka",
                        "Ongelmajätteet",
                        "Painekyllästetty puu",
                        "Painepakkaukset, kuten hiuslakat, spraymaalit, deodorantit",
                        "Paristot",
                        "Posliini",
                        "Puurakenteet joissa tervapaperia, betonia tai PVC:tä",
                        "Pölyävä jäte, kuten siivousjäte, pölynimuripussit ja tuhka",
                        "Sähkö- ja elektroniikkaromu",
                        "Sähkölamput",
                        "Vaipat, siteet"
                    ],
                ]
            }],
            remember: null,
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
                        "Sanoma- ja aikakauslehdet",
                        "Mainokset ja esitteet",
                        "Kirjekuoret, myös ikkunalliset",
                        "Puhelinluettelot",
                        "Kirjat ilman kansia",
                        "Kirjoitus- ja kopiopaperit sekä piirustuspaperit",
                        "Kaikki postiluukun tai -laatikon kautta talouteen tulleet paperit"
                    ]
                }
            ],
            no: [{
                examples: [
                    "Märkää tai likaista paperia",
                    "Pahvia ja ruskeaa paperia, ruskeita paperikasseja",
                    "Kartonkitölkkejä, kuten maito- ja mehupurkkeja",
                    "Muovia",
                    "Alumiini-, vaha- tai lahjapaperia"
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
            yes: null,
            no: null,
            remember: null,
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
                        "Lasipullot",
                        "Lasipurkit",
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
                        "Ajoneuvojen jäähdytin-, jarru- ja kytkinnesteet",
                        "Jäteöljyt, öljynsuodattimet ja muut öljyiset jätteet",
                        "Liuottimet kuten tärpätti, tinneri, asetoni (myös kynsilakanpoistoaine) ja liuotinpitoiset pesuaineet",
                        "Maalit, liimat, lakat ja hartsit sekä puunsuoja- ja kyllästysaineet (myös kynsilakka)",
                        "Kaasua sisältävät tai sisältäneet paineastiat",
                        "Aerosolipakkaukset",
                        "Emäksiset pesuaineet",
                        "Torjunta- ja desinfiointiaineet",
                        "Uudenvuodentinat",
                        "Valokuvauskemikaalit",
                        "Voimakkaat hapot kuten rikkihappo",
                        "Asbestipitoinen jäte -> katso paikalliset ohjeet",
                        "Painekyllästetty puu -> katso paikalliset ohjeet",
                        "Loisteputket, pienoisloistelamput ja energiansäästölamput -> omaan keräysjärjestelmäänsä",
                        "Sähkölaitteet -> omaan keräysjärjestelmäänsä",
                        "Paristot, nappiparistot ja akut -> omaan keräysjärjestelmäänsä",
                        "Elohopeakuumemittarit ja käyttämättä jääneet lääkkeet -> apteekkiin tai kiertävään keräysautoon",
                    ]
                }
            ],
            no: [{
                examples: [
                    "Täysin kuivuneita ja tyhjiä astioita"
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
                        "Suuret kodinkoneet (jääkaapit, pakastimet, pesukoneet, astianpesukoneet, sähköliedet, mikroaaltouunit, sähköiset lämmityslaitteet jne.)",
                        "Pienet kodinkoneet (pölynimurit, ompelukoneet, silitysraudat, leivänpaahtimet, kahvinkeittimet, parranajokoneet, hiustenkuivaajat, sähköhammasharjat jne.)",
                        "Tieto- ja teletekniset laitteet (tietokoneet, tulostimet, näytöt, näppäimistöt, hiiret, taskulaskimet, puhelimet jne.)",
                        "Kuluttajaelektroniikka (radiot, televisiot, videokamerat, digikamerat, videonauhurit, kaiuttimet, DVD-soittimet jne.)",
                        "Valaistuslaitteet (valaisimet, loisteputket, energiansäästölamput, taskulamput, EI hehku- tai halogeenilamppuja)",
                        "Sähkö- ja elektroniikkatyökalut (porat, sahat, sähköruohonleikkurit jne.)",
                        "Lelut, vapaa-ajan- ja urheiluvälineet (sähköjunat, kilpa-autoradat, videopelilaitteistot jne.)",
                        "Terveydenhuollon laitteet (elektroniset verenpaine- ja kuumemittarit jne.)",
                        "Tarkkailu- ja valvontalaitteet (paloilmaisimet, termostaatit jne.)",
                    ]
                }
            ],
            no: [{
                examples: [
                    "Irrallisia paristoja ja akkuja -> paristoja ja pienakkuja kerätään niitä myyvissä myymälöissä, kioskeilla ja huoltoasemilla",
                    "Hehku- ja halogeenilamppuja -> sekajätteeseen"
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
                        "Kotitalousparistot",
                        "Nappiparistot",
                        "Kannettavat akut (suljettuja, käsin kannettavia)"
                    ]
                }
            ],
            no: [{
                examples: [
                    "Ajoneuvo- ja teollisuusakkuja -> akkujen keräykseen"
                ]
            }],
            remember: null,
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
                        "Käyttökelpoiset vaatteet ja jalkineet",
                        "Verhot",
                        "Pyyhkeet",
                        "Lakanat",
                        "Muu puhdas ja kuiva käytöstä poistettu tekstiili",
                    ]
                }
            ],
            no: [{
                examples: [
                    "Likaisia tai rikkinäisiä vaatteita"
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
            yes: null,
            no: null,
            remember: null,
            description: "Test description"
        },
        {
            id: 115,
            name: "Akut",
            showOnCategoryPage: true,
            yes: [
                {
                    type: "Ajoneuvoakut",
                    examples: [
                        "Henkilö-, paketti- ja kuorma-autojen akut",
                        "Mopojen ja moottoripyörien akut",
                        "Kolmi- ja nelipyörien sekä kevyiden nelipyörien akut",
                        "Traktorin, moottorityökoneen ja maastoajoneuvon akut",
                        "Auton alustalle rakennettujen työkoneiden akut",
                        "Hinattavien laitteiden ja moottorittomien ajoneuvojen akut",
                        "Perävaunujen akut",
                        "Pelastusautojen, poliisiajoneuvojen, ruumisautojen ja sairasautojen akut",
                        "Matkailuautojen akut",
                        "Museoajoneuvojen akut",
                        "Huoltoautojen akut"
                    ]
                },
                {
                    type: "Teollisuusakut",
                    examples: [
                        "Varatievalojen akut",
                        "Varavoima-akut",
                        "Sähkökäyttöisten trukkien akut",
                        "Siivouskoneiden akut",
                        "Joidenkin instrumenttien akut",
                        "Joidenkin kassapäätteiden varmennusakut"
                    ]
                }
            ],
            no: [{
                examples: [
                    "Kannettavia akkuja ja paristoja -> paristojen keräykseen"
                ]
            }],
            remember: null,
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
                        "Energiansäästölamput",
                        "Loisteputket"
                    ]
                }
            ],
            no: [{
                examples: [
                    "Halogeenilamput -> sekajätteeseen",
                    "Hehkulamput -> sekajätteeseen",
                    "Autojen lamput -> sekajätteeseen"
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
                        "Puu- ja kuormalavat, myös lastulevystä tehdyt",
                        "Laudat, lankut, puupöllit, vanerit",
                        "Massiivipuu ja siitä valmistetut huonekalut",
                        "Maalamaton ja maalattu rakennus- ja purkupuu",
                        "Puiset betonin valumuotit, betoniset laudat",
                        "Kuitu- ja kovalevyt, puuparketit",
                        "Kaapelikelat",
                        "Puretut kaapistot, komerot ja laatikostot",
                        "Lastu- ja MDF -levyrunkoiset huonekalut",
                        "Ovet ja ikkunankehykset",
                        "Muovipinnoitettu puu, lastu-, MDF- ja melamiinilevyt"
                    ]
                }
            ],
            no: [{
                examples: [
                    "Verhoillut huonekalut",
                    "Ikkunat laseineen",
                    "Lasi- ja peiliovet",
                    "PVC -muovia, laattoja ym. sisältävät puumateriaalit",
                    "Kyllästetty puu",
                    "Risut ja oksat"
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
            yes: null,
            no: null,
            remember: null,
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
                        "Betoni-, tiili-, kivennäislaatta- ja keramiikkajätteet",
                        "Kipsipohjaiset jätteet",
                        "Kyllästämättömät puujätteet",
                        "Metallijätteet",
                        "Lasijätteet",
                        "Muovijätteet",
                        "Paperi- ja kartonkijätteet",
                        "Maa- ja kiviainesjätteet"
                    ]
                },
                {
                    type: "Lisäksi vaaralliset jätteet on aina pidettävä erillään muista jätteistä ja materiaaleista",
                    examples: []
                }
            ],
            no: null,
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