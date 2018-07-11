const data = [
  {
    "taxon": "Loxodonta africana",
    "genus": "Loxodonta",
    "family": "Elephantidae",
    "class": "Mammalia",
    "cnt": 25464,
    "percent": 26.50843222985634
  },
  {
    "taxon": "Caiman crocodilus fuscus",
    "genus": "Caiman",
    "family": "Alligatoridae",
    "class": "Reptilia",
    "cnt": 5095,
    "percent": 5.303976681240891
  },
  {
    "taxon": "Troides rhadamantus",
    "genus": "Troides",
    "family": "Papilionidae",
    "class": "Insecta",
    "cnt": 4958,
    "percent": 5.161357484905268
  },
  {
    "taxon": "Panthera pardus",
    "genus": "Panthera",
    "family": "Felidae",
    "class": "Mammalia",
    "cnt": 3126,
    "percent": 3.25421611492817
  },
  {
    "taxon": "Falco cherrug",
    "genus": "Falco",
    "family": "Falconidae",
    "class": "Aves",
    "cnt": 2059,
    "percent": 2.1434520091609413
  },
  {
    "taxon": "Monodon monoceros",
    "genus": "Monodon",
    "family": "Monodontidae",
    "class": "Mammalia",
    "cnt": 1551,
    "percent": 1.6146158650843223
  },
  {
    "taxon": "Orchidaceae",
    "genus": "",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1488,
    "percent": 1.5490318550905684
  },
  {
    "taxon": "Dalbergia cochinchinensis",
    "genus": "Dalbergia",
    "family": "Leguminosae",
    "class": "",
    "cnt": 1464,
    "percent": 1.5240474703310432
  },
  {
    "taxon": "Macaca fascicularis",
    "genus": "Macaca",
    "family": "Cercopithecidae",
    "class": "Mammalia",
    "cnt": 1333,
    "percent": 1.387674370185301
  },
  {
    "taxon": "Physeter macrocephalus",
    "genus": "Physeter",
    "family": "Physeteridae",
    "class": "Mammalia",
    "cnt": 1269,
    "percent": 1.3210493441599
  },
  {
    "taxon": "Psittacus erithacus",
    "genus": "Psittacus",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 1185,
    "percent": 1.2336039975015616
  },
  {
    "taxon": "Bulnesia sarmientoi",
    "genus": "Bulnesia",
    "family": "Zygophyllaceae",
    "class": "",
    "cnt": 1080,
    "percent": 1.1242973141786383
  },
  {
    "taxon": "Pterocarpus erinaceus",
    "genus": "Pterocarpus",
    "family": "Leguminosae",
    "class": "",
    "cnt": 1003,
    "percent": 1.044139079741828
  },
  {
    "taxon": "Strombus gigas",
    "genus": "Strombus",
    "family": "Strombidae",
    "class": "Gastropoda",
    "cnt": 990,
    "percent": 1.0306058713304185
  },
  {
    "taxon": "Balaenoptera acutorostrata",
    "genus": "Balaenoptera",
    "family": "Balaenopteridae",
    "class": "Mammalia",
    "cnt": 841,
    "percent": 0.8754944826150323
  },
  {
    "taxon": "Crocodylus niloticus",
    "genus": "Crocodylus",
    "family": "Crocodylidae",
    "class": "Reptilia",
    "cnt": 710,
    "percent": 0.73912138246929
  },
  {
    "taxon": "Acinonyx jubatus",
    "genus": "Acinonyx",
    "family": "Felidae",
    "class": "Mammalia",
    "cnt": 652,
    "percent": 0.6787424526337705
  },
  {
    "taxon": "Dendrobium",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 644,
    "percent": 0.6704143243805954
  },
  {
    "taxon": "Pericopsis elata",
    "genus": "Pericopsis",
    "family": "Leguminosae",
    "class": "",
    "cnt": 621,
    "percent": 0.6464709556527171
  },
  {
    "taxon": "Echinopsis pachanoi",
    "genus": "Echinopsis",
    "family": "Cactaceae",
    "class": "",
    "cnt": 602,
    "percent": 0.6266916510514262
  },
  {
    "taxon": "Furcifer pardalis",
    "genus": "Furcifer",
    "family": "Chamaeleonidae",
    "class": "Reptilia",
    "cnt": 602,
    "percent": 0.6266916510514262
  },
  {
    "taxon": "Delphinapterus leucas",
    "genus": "Delphinapterus",
    "family": "Monodontidae",
    "class": "Mammalia",
    "cnt": 598,
    "percent": 0.6225275869248387
  },
  {
    "taxon": "Furcifer lateralis",
    "genus": "Furcifer",
    "family": "Chamaeleonidae",
    "class": "Reptilia",
    "cnt": 486,
    "percent": 0.5059337913803873
  },
  {
    "taxon": "Furcifer verrucosus",
    "genus": "Furcifer",
    "family": "Chamaeleonidae",
    "class": "Reptilia",
    "cnt": 446,
    "percent": 0.4642931501145118
  },
  {
    "taxon": "Furcifer oustaleti",
    "genus": "Furcifer",
    "family": "Chamaeleonidae",
    "class": "Reptilia",
    "cnt": 436,
    "percent": 0.45388298979804287
  },
  {
    "taxon": "Phelsuma lineata",
    "genus": "Phelsuma",
    "family": "Gekkonidae",
    "class": "Reptilia",
    "cnt": 427,
    "percent": 0.44451384551322093
  },
  {
    "taxon": "Python bivittatus",
    "genus": "Python",
    "family": "Pythonidae",
    "class": "Reptilia",
    "cnt": 424,
    "percent": 0.44139079741828025
  },
  {
    "taxon": "Phelsuma quadriocellata",
    "genus": "Phelsuma",
    "family": "Gekkonidae",
    "class": "Reptilia",
    "cnt": 395,
    "percent": 0.4112013325005205
  },
  {
    "taxon": "Aratinga solstitialis",
    "genus": "Aratinga",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 391,
    "percent": 0.40703726837393295
  },
  {
    "taxon": "Pionites melanocephalus",
    "genus": "Pionites",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 388,
    "percent": 0.4039142202789923
  },
  {
    "taxon": "Ara ararauna",
    "genus": "Ara",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 371,
    "percent": 0.3862169477409952
  },
  {
    "taxon": "Bulbophyllum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 364,
    "percent": 0.378929835519467
  },
  {
    "taxon": "Scleractinia",
    "genus": "",
    "family": "",
    "class": "Anthozoa",
    "cnt": 344,
    "percent": 0.35810951488652926
  },
  {
    "taxon": "Hippopotamus amphibius",
    "genus": "Hippopotamus",
    "family": "Hippopotamidae",
    "class": "Mammalia",
    "cnt": 339,
    "percent": 0.3529044347282948
  },
  {
    "taxon": "Agapornis fischeri",
    "genus": "Agapornis",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 337,
    "percent": 0.35082240266500103
  },
  {
    "taxon": "Tursiops truncatus",
    "genus": "Tursiops",
    "family": "Delphinidae",
    "class": "Mammalia",
    "cnt": 331,
    "percent": 0.3445763064751197
  },
  {
    "taxon": "Cetacea",
    "genus": "",
    "family": "",
    "class": "Mammalia",
    "cnt": 323,
    "percent": 0.33624817822194464
  },
  {
    "taxon": "Poicephalus senegalus",
    "genus": "Poicephalus",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 309,
    "percent": 0.3216739537788882
  },
  {
    "taxon": "Balaenoptera physalus",
    "genus": "Balaenoptera",
    "family": "Balaenopteridae",
    "class": "Mammalia",
    "cnt": 308,
    "percent": 0.32063293774724133
  },
  {
    "taxon": "Bubalus arnee",
    "genus": "Bubalus",
    "family": "Bovidae",
    "class": "Mammalia",
    "cnt": 302,
    "percent": 0.31438684155735996
  },
  {
    "taxon": "Phelsuma laticauda",
    "genus": "Phelsuma",
    "family": "Gekkonidae",
    "class": "Reptilia",
    "cnt": 290,
    "percent": 0.30189464917759734
  },
  {
    "taxon": "Pionites leucogaster",
    "genus": "Pionites",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 282,
    "percent": 0.29356652092442226
  },
  {
    "taxon": "Poicephalus gulielmi",
    "genus": "Poicephalus",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 276,
    "percent": 0.2873204247345409
  },
  {
    "taxon": "Phelsuma madagascariensis",
    "genus": "Phelsuma",
    "family": "Gekkonidae",
    "class": "Reptilia",
    "cnt": 271,
    "percent": 0.2821153445763065
  },
  {
    "taxon": "Amazona ochrocephala",
    "genus": "Amazona",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 271,
    "percent": 0.2821153445763065
  },
  {
    "taxon": "Trichoglottis",
    "genus": "Trichoglottis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 269,
    "percent": 0.2800333125130127
  },
  {
    "taxon": "Dendrochilum",
    "genus": "Dendrochilum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 263,
    "percent": 0.27378721632313135
  },
  {
    "taxon": "Ara macao",
    "genus": "Ara",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 260,
    "percent": 0.2706641682281907
  },
  {
    "taxon": "Crocodylus siamensis",
    "genus": "Crocodylus",
    "family": "Crocodylidae",
    "class": "Reptilia",
    "cnt": 260,
    "percent": 0.2706641682281907
  },
  {
    "taxon": "Vanda lamellata",
    "genus": "Vanda",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 257,
    "percent": 0.26754112013325004
  },
  {
    "taxon": "Dendrobium sanderae",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 253,
    "percent": 0.2633770560066625
  },
  {
    "taxon": "Aratinga jandaya",
    "genus": "Aratinga",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 233,
    "percent": 0.24255673537372477
  },
  {
    "taxon": "Phalaenopsis schilleriana",
    "genus": "Phalaenopsis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 229,
    "percent": 0.2383926712471372
  },
  {
    "taxon": "Balaenoptera edeni",
    "genus": "Balaenoptera",
    "family": "Balaenopteridae",
    "class": "Mammalia",
    "cnt": 217,
    "percent": 0.22590047886737455
  },
  {
    "taxon": "Diopsittaca nobilis",
    "genus": "Diopsittaca",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 214,
    "percent": 0.2227774307724339
  },
  {
    "taxon": "Crocodylus porosus",
    "genus": "Crocodylus",
    "family": "Crocodylidae",
    "class": "Reptilia",
    "cnt": 214,
    "percent": 0.2227774307724339
  },
  {
    "taxon": "Vanda",
    "genus": "Vanda",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 206,
    "percent": 0.21444930251925878
  },
  {
    "taxon": "Orcinus orca",
    "genus": "Orcinus",
    "family": "Delphinidae",
    "class": "Mammalia",
    "cnt": 197,
    "percent": 0.20508015823443682
  },
  {
    "taxon": "Coelogyne",
    "genus": "Coelogyne",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 197,
    "percent": 0.20508015823443682
  },
  {
    "taxon": "Agapornis personatus",
    "genus": "Agapornis",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 195,
    "percent": 0.20299812617114305
  },
  {
    "taxon": "Calumma parsonii",
    "genus": "Calumma",
    "family": "Chamaeleonidae",
    "class": "Reptilia",
    "cnt": 191,
    "percent": 0.19883406204455548
  },
  {
    "taxon": "Eclectus roratus",
    "genus": "Eclectus",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 190,
    "percent": 0.1977930460129086
  },
  {
    "taxon": "Phelsuma kochi",
    "genus": "Phelsuma",
    "family": "Gekkonidae",
    "class": "Reptilia",
    "cnt": 189,
    "percent": 0.1967520299812617
  },
  {
    "taxon": "Hippocampus kuda",
    "genus": "Hippocampus",
    "family": "Syngnathidae",
    "class": "Actinopteri",
    "cnt": 187,
    "percent": 0.19466999791796794
  },
  {
    "taxon": "Cacatua alba",
    "genus": "Cacatua",
    "family": "Cacatuidae",
    "class": "Aves",
    "cnt": 180,
    "percent": 0.18738288569643974
  },
  {
    "taxon": "Pyrrhura picta",
    "genus": "Pyrrhura",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 175,
    "percent": 0.18217780553820528
  },
  {
    "taxon": "Probosciger aterrimus",
    "genus": "Probosciger",
    "family": "Cacatuidae",
    "class": "Aves",
    "cnt": 172,
    "percent": 0.17905475744326463
  },
  {
    "taxon": "Robiquetia",
    "genus": "Robiquetia",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 171,
    "percent": 0.17801374141161774
  },
  {
    "taxon": "Phelsuma grandis",
    "genus": "Phelsuma",
    "family": "Gekkonidae",
    "class": "Reptilia",
    "cnt": 168,
    "percent": 0.1748906933166771
  },
  {
    "taxon": "Dalbergia nigra",
    "genus": "Dalbergia",
    "family": "Leguminosae",
    "class": "",
    "cnt": 160,
    "percent": 0.16656256506350198
  },
  {
    "taxon": "Huso huso",
    "genus": "Huso",
    "family": "Acipenseridae",
    "class": "Actinopteri",
    "cnt": 160,
    "percent": 0.16656256506350198
  },
  {
    "taxon": "Phalaenopsis lueddemanniana",
    "genus": "Phalaenopsis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 159,
    "percent": 0.1655215490318551
  },
  {
    "taxon": "Aratinga pertinax",
    "genus": "Aratinga",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 158,
    "percent": 0.1644805330002082
  },
  {
    "taxon": "Phalaenopsis equestris",
    "genus": "Phalaenopsis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 158,
    "percent": 0.1644805330002082
  },
  {
    "taxon": "Phalaenopsis stuartiana",
    "genus": "Phalaenopsis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 152,
    "percent": 0.15823443681032687
  },
  {
    "taxon": "Eria",
    "genus": "Eria",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 147,
    "percent": 0.15302935665209244
  },
  {
    "taxon": "Megaptera novaeangliae",
    "genus": "Megaptera",
    "family": "Balaenopteridae",
    "class": "Mammalia",
    "cnt": 145,
    "percent": 0.15094732458879867
  },
  {
    "taxon": "Elephas maximus",
    "genus": "Elephas",
    "family": "Elephantidae",
    "class": "Mammalia",
    "cnt": 142,
    "percent": 0.14782427649385801
  },
  {
    "taxon": "Phalaenopsis lindenii",
    "genus": "Phalaenopsis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 142,
    "percent": 0.14782427649385801
  },
  {
    "taxon": "Pandinus imperator",
    "genus": "Pandinus",
    "family": "Scorpionidae",
    "class": "Arachnida",
    "cnt": 136,
    "percent": 0.14157818030397668
  },
  {
    "taxon": "Epigeneium",
    "genus": "Epigeneium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 135,
    "percent": 0.1405371642723298
  },
  {
    "taxon": "Amazona aestiva",
    "genus": "Amazona",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 134,
    "percent": 0.1394961482406829
  },
  {
    "taxon": "Balaena mysticetus",
    "genus": "Balaena",
    "family": "Balaenidae",
    "class": "Mammalia",
    "cnt": 134,
    "percent": 0.1394961482406829
  },
  {
    "taxon": "Ara severus",
    "genus": "Ara",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 134,
    "percent": 0.1394961482406829
  },
  {
    "taxon": "Oberonia",
    "genus": "Oberonia",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 132,
    "percent": 0.13741411617738913
  },
  {
    "taxon": "Furcifer campani",
    "genus": "Furcifer",
    "family": "Chamaeleonidae",
    "class": "Reptilia",
    "cnt": 131,
    "percent": 0.13637310014574225
  },
  {
    "taxon": "Cacatua galerita",
    "genus": "Cacatua",
    "family": "Cacatuidae",
    "class": "Aves",
    "cnt": 130,
    "percent": 0.13533208411409536
  },
  {
    "taxon": "Swietenia macrophylla",
    "genus": "Swietenia",
    "family": "Meliaceae",
    "class": "",
    "cnt": 128,
    "percent": 0.1332500520508016
  },
  {
    "taxon": "Poicephalus meyeri",
    "genus": "Poicephalus",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 127,
    "percent": 0.1322090360191547
  },
  {
    "taxon": "Phalaenopsis aphrodite",
    "genus": "Phalaenopsis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 127,
    "percent": 0.1322090360191547
  },
  {
    "taxon": "Cheloniidae",
    "genus": "",
    "family": "Cheloniidae",
    "class": "Reptilia",
    "cnt": 127,
    "percent": 0.1322090360191547
  },
  {
    "taxon": "Dendrobium anosmum",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 126,
    "percent": 0.1311680199875078
  },
  {
    "taxon": "Pionus menstruus",
    "genus": "Pionus",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 125,
    "percent": 0.1301270039558609
  },
  {
    "taxon": "Ara hybrid",
    "genus": "Ara",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 125,
    "percent": 0.1301270039558609
  },
  {
    "taxon": "Pyrrhura perlata",
    "genus": "Pyrrhura",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 123,
    "percent": 0.12804497189256714
  },
  {
    "taxon": "Podophyllum hexandrum",
    "genus": "Podophyllum",
    "family": "Berberidaceae",
    "class": "",
    "cnt": 120,
    "percent": 0.12492192379762648
  },
  {
    "taxon": "Python reticulatus",
    "genus": "Python",
    "family": "Pythonidae",
    "class": "Reptilia",
    "cnt": 117,
    "percent": 0.12179887570268583
  },
  {
    "taxon": "Uromastyx aegyptia",
    "genus": "Uromastyx",
    "family": "Agamidae",
    "class": "Reptilia",
    "cnt": 117,
    "percent": 0.12179887570268583
  },
  {
    "taxon": "Calumma oshaughnessyi",
    "genus": "Calumma",
    "family": "Chamaeleonidae",
    "class": "Reptilia",
    "cnt": 116,
    "percent": 0.12075785967103893
  },
  {
    "taxon": "Vanda roeblingiana",
    "genus": "Vanda",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 114,
    "percent": 0.11867582760774516
  },
  {
    "taxon": "Amesiella monticola",
    "genus": "Amesiella",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 114,
    "percent": 0.11867582760774516
  },
  {
    "taxon": "Aerides quinquevulnera",
    "genus": "Aerides",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 112,
    "percent": 0.11659379554445139
  },
  {
    "taxon": "Amesiella",
    "genus": "Amesiella",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 112,
    "percent": 0.11659379554445139
  },
  {
    "taxon": "Vanda hybrid",
    "genus": "Vanda",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 110,
    "percent": 0.11451176348115762
  },
  {
    "taxon": "Staurochilus",
    "genus": "Staurochilus",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 110,
    "percent": 0.11451176348115762
  },
  {
    "taxon": "Coelogyne usitana",
    "genus": "Coelogyne",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 109,
    "percent": 0.11347074744951072
  },
  {
    "taxon": "Ara chloropterus",
    "genus": "Ara",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 109,
    "percent": 0.11347074744951072
  },
  {
    "taxon": "Phalaenopsis mariae",
    "genus": "Phalaenopsis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 108,
    "percent": 0.11242973141786383
  },
  {
    "taxon": "Tillandsia xerographica",
    "genus": "Tillandsia",
    "family": "Bromeliaceae",
    "class": "",
    "cnt": 103,
    "percent": 0.10722465125962939
  },
  {
    "taxon": "Dendrobium bullenianum",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 103,
    "percent": 0.10722465125962939
  },
  {
    "taxon": "Vicugna vicugna",
    "genus": "Vicugna",
    "family": "Camelidae",
    "class": "Mammalia",
    "cnt": 102,
    "percent": 0.1061836352279825
  },
  {
    "taxon": "Deroptyus accipitrinus",
    "genus": "Deroptyus",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 102,
    "percent": 0.1061836352279825
  },
  {
    "taxon": "Phalaenopsis pulchra",
    "genus": "Phalaenopsis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 101,
    "percent": 0.10514261919633562
  },
  {
    "taxon": "Python sebae",
    "genus": "Python",
    "family": "Pythonidae",
    "class": "Reptilia",
    "cnt": 100,
    "percent": 0.10410160316468874
  },
  {
    "taxon": "Guarouba guarouba",
    "genus": "Guarouba",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 99,
    "percent": 0.10306058713304185
  },
  {
    "taxon": "Testudo kleinmanni",
    "genus": "Testudo",
    "family": "Testudinidae",
    "class": "Reptilia",
    "cnt": 98,
    "percent": 0.10201957110139497
  },
  {
    "taxon": "Anodorhynchus hyacinthinus",
    "genus": "Anodorhynchus",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 97,
    "percent": 0.10097855506974808
  },
  {
    "taxon": "Elephantidae",
    "genus": "",
    "family": "Elephantidae",
    "class": "Mammalia",
    "cnt": 96,
    "percent": 0.09993753903810118
  },
  {
    "taxon": "Amesiella philippinensis",
    "genus": "Amesiella",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 95,
    "percent": 0.0988965230064543
  },
  {
    "taxon": "Dendrobium taurinum",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 95,
    "percent": 0.0988965230064543
  },
  {
    "taxon": "Dendrobium hybrid",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 94,
    "percent": 0.09785550697480741
  },
  {
    "taxon": "Dendrobium victoriae-reginae",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 94,
    "percent": 0.09785550697480741
  },
  {
    "taxon": "Plerogyra simplex",
    "genus": "Plerogyra",
    "family": "Caryophylliidae",
    "class": "Anthozoa",
    "cnt": 94,
    "percent": 0.09785550697480741
  },
  {
    "taxon": "Bulbophyllum makoyanum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 93,
    "percent": 0.09681449094316052
  },
  {
    "taxon": "Dendrobium amethystoglossum",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 92,
    "percent": 0.09577347491151364
  },
  {
    "taxon": "Bulbophyllum facetum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 91,
    "percent": 0.09473245887986675
  },
  {
    "taxon": "Panthera tigris",
    "genus": "Panthera",
    "family": "Felidae",
    "class": "Mammalia",
    "cnt": 90,
    "percent": 0.09369144284821987
  },
  {
    "taxon": "Ceratostylis",
    "genus": "Ceratostylis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 90,
    "percent": 0.09369144284821987
  },
  {
    "taxon": "Tanygnathus lucionensis",
    "genus": "Tanygnathus",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 90,
    "percent": 0.09369144284821987
  },
  {
    "taxon": "Dendrochilum wenzelii",
    "genus": "Dendrochilum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 87,
    "percent": 0.0905683947532792
  },
  {
    "taxon": "Coelogyne rochussenii",
    "genus": "Coelogyne",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 86,
    "percent": 0.08952737872163231
  },
  {
    "taxon": "Dendrobium auriculatum",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 86,
    "percent": 0.08952737872163231
  },
  {
    "taxon": "Phalaenopsis hybrid",
    "genus": "Phalaenopsis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 85,
    "percent": 0.08848636268998543
  },
  {
    "taxon": "Bulbophyllum antenniferum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 85,
    "percent": 0.08848636268998543
  },
  {
    "taxon": "Melanosuchus niger",
    "genus": "Melanosuchus",
    "family": "Alligatoridae",
    "class": "Reptilia",
    "cnt": 84,
    "percent": 0.08744534665833854
  },
  {
    "taxon": "Dendrobium dearei",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 84,
    "percent": 0.08744534665833854
  },
  {
    "taxon": "Bulbophyllum pardalotum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 83,
    "percent": 0.08640433062669164
  },
  {
    "taxon": "Phalaenopsis hieroglyphica",
    "genus": "Phalaenopsis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 82,
    "percent": 0.08536331459504476
  },
  {
    "taxon": "Vanda sanderiana",
    "genus": "Vanda",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 81,
    "percent": 0.08432229856339787
  },
  {
    "taxon": "Phocoena phocoena",
    "genus": "Phocoena",
    "family": "Phocoenidae",
    "class": "Mammalia",
    "cnt": 81,
    "percent": 0.08432229856339787
  },
  {
    "taxon": "Coelogyne asperata",
    "genus": "Coelogyne",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 80,
    "percent": 0.08328128253175099
  },
  {
    "taxon": "Copiapoa cinerascens",
    "genus": "Copiapoa",
    "family": "Cactaceae",
    "class": "",
    "cnt": 80,
    "percent": 0.08328128253175099
  },
  {
    "taxon": "Blossfeldia liliputana",
    "genus": "Blossfeldia",
    "family": "Cactaceae",
    "class": "",
    "cnt": 80,
    "percent": 0.08328128253175099
  },
  {
    "taxon": "Calumma malthe",
    "genus": "Calumma",
    "family": "Chamaeleonidae",
    "class": "Reptilia",
    "cnt": 79,
    "percent": 0.0822402665001041
  },
  {
    "taxon": "Bulbophyllum santosii",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 79,
    "percent": 0.0822402665001041
  },
  {
    "taxon": "Furcifer willsii",
    "genus": "Furcifer",
    "family": "Chamaeleonidae",
    "class": "Reptilia",
    "cnt": 78,
    "percent": 0.08119925046845722
  },
  {
    "taxon": "Bulbophyllum lobbii",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 78,
    "percent": 0.08119925046845722
  },
  {
    "taxon": "Orchis mascula",
    "genus": "Orchis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 78,
    "percent": 0.08119925046845722
  },
  {
    "taxon": "Calumma brevicorne",
    "genus": "Calumma",
    "family": "Chamaeleonidae",
    "class": "Reptilia",
    "cnt": 78,
    "percent": 0.08119925046845722
  },
  {
    "taxon": "Furcifer antimena",
    "genus": "Furcifer",
    "family": "Chamaeleonidae",
    "class": "Reptilia",
    "cnt": 78,
    "percent": 0.08119925046845722
  },
  {
    "taxon": "Dendrobium schuetzei",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 77,
    "percent": 0.08015823443681033
  },
  {
    "taxon": "Appendicula",
    "genus": "Appendicula",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 77,
    "percent": 0.08015823443681033
  },
  {
    "taxon": "Coelogyne chloroptera",
    "genus": "Coelogyne",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 77,
    "percent": 0.08015823443681033
  },
  {
    "taxon": "Calumma nasutum",
    "genus": "Calumma",
    "family": "Chamaeleonidae",
    "class": "Reptilia",
    "cnt": 77,
    "percent": 0.08015823443681033
  },
  {
    "taxon": "Rhynchostylis retusa",
    "genus": "Rhynchostylis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 76,
    "percent": 0.07911721840516343
  },
  {
    "taxon": "Furcifer bifidus",
    "genus": "Furcifer",
    "family": "Chamaeleonidae",
    "class": "Reptilia",
    "cnt": 75,
    "percent": 0.07807620237351655
  },
  {
    "taxon": "Renanthera philippinensis",
    "genus": "Renanthera",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 75,
    "percent": 0.07807620237351655
  },
  {
    "taxon": "Bulbophyllum cumingii",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 74,
    "percent": 0.07703518634186966
  },
  {
    "taxon": "Ceratocentron fesselii",
    "genus": "Ceratocentron",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 74,
    "percent": 0.07703518634186966
  },
  {
    "taxon": "Dendrobium heterocarpum",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 74,
    "percent": 0.07703518634186966
  },
  {
    "taxon": "Vanda luzonica",
    "genus": "Vanda",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 73,
    "percent": 0.07599417031022278
  },
  {
    "taxon": "Corryocactus brevistylus",
    "genus": "Corryocactus",
    "family": "Cactaceae",
    "class": "",
    "cnt": 73,
    "percent": 0.07599417031022278
  },
  {
    "taxon": "Bulbophyllum biflorum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 73,
    "percent": 0.07599417031022278
  },
  {
    "taxon": "Bulbophyllum dearei",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 73,
    "percent": 0.07599417031022278
  },
  {
    "taxon": "Dendrobium nemorale",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 72,
    "percent": 0.07495315427857589
  },
  {
    "taxon": "Coelogyne merrillii",
    "genus": "Coelogyne",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 72,
    "percent": 0.07495315427857589
  },
  {
    "taxon": "Balaenoptera borealis",
    "genus": "Balaenoptera",
    "family": "Balaenopteridae",
    "class": "Mammalia",
    "cnt": 72,
    "percent": 0.07495315427857589
  },
  {
    "taxon": "Renanthera monachica",
    "genus": "Renanthera",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 72,
    "percent": 0.07495315427857589
  },
  {
    "taxon": "Calumma boettgeri",
    "genus": "Calumma",
    "family": "Chamaeleonidae",
    "class": "Reptilia",
    "cnt": 71,
    "percent": 0.07391213824692901
  },
  {
    "taxon": "Trichoglottis latisepala",
    "genus": "Trichoglottis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 71,
    "percent": 0.07391213824692901
  },
  {
    "taxon": "Copiapoa cinerea",
    "genus": "Copiapoa",
    "family": "Cactaceae",
    "class": "",
    "cnt": 71,
    "percent": 0.07391213824692901
  },
  {
    "taxon": "Vulpes zerda",
    "genus": "Vulpes",
    "family": "Canidae",
    "class": "Mammalia",
    "cnt": 71,
    "percent": 0.07391213824692901
  },
  {
    "taxon": "Ceratostylis retisquama",
    "genus": "Ceratostylis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 71,
    "percent": 0.07391213824692901
  },
  {
    "taxon": "Plerogyra sinuosa",
    "genus": "Plerogyra",
    "family": "Caryophylliidae",
    "class": "Anthozoa",
    "cnt": 70,
    "percent": 0.07287112221528212
  },
  {
    "taxon": "Micropera",
    "genus": "Micropera",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 69,
    "percent": 0.07183010618363522
  },
  {
    "taxon": "Dendrobium sanguinolentum",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 69,
    "percent": 0.07183010618363522
  },
  {
    "taxon": "Ascocentrum aurantiacum",
    "genus": "Ascocentrum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 68,
    "percent": 0.07078909015198834
  },
  {
    "taxon": "Lorius garrulus",
    "genus": "Lorius",
    "family": "Loriidae",
    "class": "Aves",
    "cnt": 67,
    "percent": 0.06974807412034145
  },
  {
    "taxon": "Eretmochelys imbricata",
    "genus": "Eretmochelys",
    "family": "Cheloniidae",
    "class": "Reptilia",
    "cnt": 66,
    "percent": 0.06870705808869457
  },
  {
    "taxon": "Grammatophyllum scriptum",
    "genus": "Grammatophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 66,
    "percent": 0.06870705808869457
  },
  {
    "taxon": "Balaenoptera musculus",
    "genus": "Balaenoptera",
    "family": "Balaenopteridae",
    "class": "Mammalia",
    "cnt": 66,
    "percent": 0.06870705808869457
  },
  {
    "taxon": "Phalaenopsis sanderiana",
    "genus": "Phalaenopsis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 66,
    "percent": 0.06870705808869457
  },
  {
    "taxon": "Phalaenopsis fasciata",
    "genus": "Phalaenopsis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 65,
    "percent": 0.06766604205704768
  },
  {
    "taxon": "Coelogyne marmorata",
    "genus": "Coelogyne",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 65,
    "percent": 0.06766604205704768
  },
  {
    "taxon": "Testudo graeca",
    "genus": "Testudo",
    "family": "Testudinidae",
    "class": "Reptilia",
    "cnt": 65,
    "percent": 0.06766604205704768
  },
  {
    "taxon": "Omoea",
    "genus": "Omoea",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 63,
    "percent": 0.0655840099937539
  },
  {
    "taxon": "Uromastyx ornata",
    "genus": "Uromastyx",
    "family": "Agamidae",
    "class": "Reptilia",
    "cnt": 62,
    "percent": 0.06454299396210701
  },
  {
    "taxon": "Cymbidium atropurpureum",
    "genus": "Cymbidium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 62,
    "percent": 0.06454299396210701
  },
  {
    "taxon": "Dendrochilum cootesii",
    "genus": "Dendrochilum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 61,
    "percent": 0.06350197793046013
  },
  {
    "taxon": "Bulbophyllum inunctum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 61,
    "percent": 0.06350197793046013
  },
  {
    "taxon": "Centrochelys sulcata",
    "genus": "Centrochelys",
    "family": "Testudinidae",
    "class": "Reptilia",
    "cnt": 61,
    "percent": 0.06350197793046013
  },
  {
    "taxon": "Amazona autumnalis",
    "genus": "Amazona",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 61,
    "percent": 0.06350197793046013
  },
  {
    "taxon": "Tuberolabium woodii",
    "genus": "Tuberolabium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 60,
    "percent": 0.06246096189881324
  },
  {
    "taxon": "Dendrobium secundum",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 60,
    "percent": 0.06246096189881324
  },
  {
    "taxon": "Eria ornata",
    "genus": "Eria",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 60,
    "percent": 0.06246096189881324
  },
  {
    "taxon": "Chelonia mydas",
    "genus": "Chelonia",
    "family": "Cheloniidae",
    "class": "Reptilia",
    "cnt": 60,
    "percent": 0.06246096189881324
  },
  {
    "taxon": "Calumma gastrotaenia",
    "genus": "Calumma",
    "family": "Chamaeleonidae",
    "class": "Reptilia",
    "cnt": 60,
    "percent": 0.06246096189881324
  },
  {
    "taxon": "Cacatua moluccensis",
    "genus": "Cacatua",
    "family": "Cacatuidae",
    "class": "Aves",
    "cnt": 60,
    "percent": 0.06246096189881324
  },
  {
    "taxon": "Bulbophyllum laxiflorum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 59,
    "percent": 0.061419945867166356
  },
  {
    "taxon": "Phalaenopsis bastianii",
    "genus": "Phalaenopsis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 58,
    "percent": 0.060378929835519464
  },
  {
    "taxon": "Agapornis nigrigenis",
    "genus": "Agapornis",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 58,
    "percent": 0.060378929835519464
  },
  {
    "taxon": "Poicephalus rufiventris",
    "genus": "Poicephalus",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 58,
    "percent": 0.060378929835519464
  },
  {
    "taxon": "Dendrochilum cobbianum",
    "genus": "Dendrochilum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 57,
    "percent": 0.05933791380387258
  },
  {
    "taxon": "Coelogyne bilamellata",
    "genus": "Coelogyne",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 57,
    "percent": 0.05933791380387258
  },
  {
    "taxon": "Acanthephippium",
    "genus": "Acanthephippium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 57,
    "percent": 0.05933791380387258
  },
  {
    "taxon": "Coelogyne sparsa",
    "genus": "Coelogyne",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 57,
    "percent": 0.05933791380387258
  },
  {
    "taxon": "Bulbophyllum odoratum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 57,
    "percent": 0.05933791380387258
  },
  {
    "taxon": "Dendrobium macrophyllum",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 56,
    "percent": 0.05829689777222569
  },
  {
    "taxon": "Buceros hydrocorax",
    "genus": "Buceros",
    "family": "Bucerotidae",
    "class": "Aves",
    "cnt": 56,
    "percent": 0.05829689777222569
  },
  {
    "taxon": "Bulbophyllum putidum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 56,
    "percent": 0.05829689777222569
  },
  {
    "taxon": "Bulbophyllum maxillare",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 56,
    "percent": 0.05829689777222569
  },
  {
    "taxon": "Aquilaria malaccensis",
    "genus": "Aquilaria",
    "family": "Thymelaeaceae",
    "class": "",
    "cnt": 55,
    "percent": 0.05725588174057881
  },
  {
    "taxon": "Aerides lawrenceae",
    "genus": "Aerides",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 55,
    "percent": 0.05725588174057881
  },
  {
    "taxon": "Renanthera matutina",
    "genus": "Renanthera",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 55,
    "percent": 0.05725588174057881
  },
  {
    "taxon": "Fitzroya cupressoides",
    "genus": "Fitzroya",
    "family": "Cupressaceae",
    "class": "",
    "cnt": 54,
    "percent": 0.056214865708931916
  },
  {
    "taxon": "Diceros bicornis",
    "genus": "Diceros",
    "family": "Rhinocerotidae",
    "class": "Mammalia",
    "cnt": 54,
    "percent": 0.056214865708931916
  },
  {
    "taxon": "Bulbophyllum cootesii",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 54,
    "percent": 0.056214865708931916
  },
  {
    "taxon": "Schoenorchis paniculata",
    "genus": "Schoenorchis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 54,
    "percent": 0.056214865708931916
  },
  {
    "taxon": "Cacatua sanguinea",
    "genus": "Cacatua",
    "family": "Cacatuidae",
    "class": "Aves",
    "cnt": 53,
    "percent": 0.05517384967728503
  },
  {
    "taxon": "Macropodanthus",
    "genus": "Macropodanthus",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 53,
    "percent": 0.05517384967728503
  },
  {
    "taxon": "Python molurus",
    "genus": "Python",
    "family": "Pythonidae",
    "class": "Reptilia",
    "cnt": 53,
    "percent": 0.05517384967728503
  },
  {
    "taxon": "Bulbophyllum aestivale",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 52,
    "percent": 0.054132833645638145
  },
  {
    "taxon": "Kingidium",
    "genus": "Kingidium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 52,
    "percent": 0.054132833645638145
  },
  {
    "taxon": "Uromastyx ocellata",
    "genus": "Uromastyx",
    "family": "Agamidae",
    "class": "Reptilia",
    "cnt": 52,
    "percent": 0.054132833645638145
  },
  {
    "taxon": "Phalaenopsis philippinensis",
    "genus": "Phalaenopsis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 52,
    "percent": 0.054132833645638145
  },
  {
    "taxon": "Orthopsittaca manilata",
    "genus": "Orthopsittaca",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 52,
    "percent": 0.054132833645638145
  },
  {
    "taxon": "Tridacna squamosa",
    "genus": "Tridacna",
    "family": "Tridacnidae",
    "class": "Bivalvia",
    "cnt": 52,
    "percent": 0.054132833645638145
  },
  {
    "taxon": "Trichoglossus haematodus",
    "genus": "Trichoglossus",
    "family": "Loriidae",
    "class": "Aves",
    "cnt": 52,
    "percent": 0.054132833645638145
  },
  {
    "taxon": "Bulbophyllum basisetum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 51,
    "percent": 0.05309181761399125
  },
  {
    "taxon": "Pionus chalcopterus",
    "genus": "Pionus",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 51,
    "percent": 0.05309181761399125
  },
  {
    "taxon": "Renanthera storiei",
    "genus": "Renanthera",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 50,
    "percent": 0.05205080158234437
  },
  {
    "taxon": "Capra falconeri",
    "genus": "Capra",
    "family": "Bovidae",
    "class": "Mammalia",
    "cnt": 50,
    "percent": 0.05205080158234437
  },
  {
    "taxon": "Dendrobium chameleon",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 50,
    "percent": 0.05205080158234437
  },
  {
    "taxon": "Dendrobium ceraula",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 50,
    "percent": 0.05205080158234437
  },
  {
    "taxon": "Ramphastos toco",
    "genus": "Ramphastos",
    "family": "Ramphastidae",
    "class": "Aves",
    "cnt": 50,
    "percent": 0.05205080158234437
  },
  {
    "taxon": "Tuberolabium phillipsii",
    "genus": "Tuberolabium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 50,
    "percent": 0.05205080158234437
  },
  {
    "taxon": "Aerides odorata",
    "genus": "Aerides",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 50,
    "percent": 0.05205080158234437
  },
  {
    "taxon": "Phalaenopsis",
    "genus": "Phalaenopsis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 50,
    "percent": 0.05205080158234437
  },
  {
    "taxon": "Vanda javierae",
    "genus": "Vanda",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 49,
    "percent": 0.05100978555069748
  },
  {
    "taxon": "Dendrobium papilio",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 49,
    "percent": 0.05100978555069748
  },
  {
    "taxon": "Bulbophyllum cheiri",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 49,
    "percent": 0.05100978555069748
  },
  {
    "taxon": "Phalaenopsis pallens",
    "genus": "Phalaenopsis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 49,
    "percent": 0.05100978555069748
  },
  {
    "taxon": "Pionus fuscus",
    "genus": "Pionus",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 48,
    "percent": 0.04996876951905059
  },
  {
    "taxon": "Phalaenopsis amabilis",
    "genus": "Phalaenopsis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 48,
    "percent": 0.04996876951905059
  },
  {
    "taxon": "Phalaenopsis sumatrana",
    "genus": "Phalaenopsis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 48,
    "percent": 0.04996876951905059
  },
  {
    "taxon": "Caiman crocodilus",
    "genus": "Caiman",
    "family": "Alligatoridae",
    "class": "Reptilia",
    "cnt": 48,
    "percent": 0.04996876951905059
  },
  {
    "taxon": "Dendrobium platycaulon",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 47,
    "percent": 0.048927753487403705
  },
  {
    "taxon": "Dendrobium aphyllum",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 47,
    "percent": 0.048927753487403705
  },
  {
    "taxon": "Bulbophyllum saurocephalum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 47,
    "percent": 0.048927753487403705
  },
  {
    "taxon": "Amazona amazonica",
    "genus": "Amazona",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 46,
    "percent": 0.04788673745575682
  },
  {
    "taxon": "Dendrobium goldschmidtianum",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 46,
    "percent": 0.04788673745575682
  },
  {
    "taxon": "Cymbidium finlaysonianum",
    "genus": "Cymbidium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 46,
    "percent": 0.04788673745575682
  },
  {
    "taxon": "Dendrochilum convallariiforme",
    "genus": "Dendrochilum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 45,
    "percent": 0.046845721424109935
  },
  {
    "taxon": "Gongylophis colubrinus",
    "genus": "Gongylophis",
    "family": "Boidae",
    "class": "Reptilia",
    "cnt": 45,
    "percent": 0.046845721424109935
  },
  {
    "taxon": "Vanda merrilli",
    "genus": "Vanda",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 44,
    "percent": 0.04580470539246304
  },
  {
    "taxon": "Malacochersus tornieri",
    "genus": "Malacochersus",
    "family": "Testudinidae",
    "class": "Reptilia",
    "cnt": 44,
    "percent": 0.04580470539246304
  },
  {
    "taxon": "Cymbidium cyperifolium",
    "genus": "Cymbidium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 44,
    "percent": 0.04580470539246304
  },
  {
    "taxon": "Aquilaria crassna",
    "genus": "Aquilaria",
    "family": "Thymelaeaceae",
    "class": "",
    "cnt": 44,
    "percent": 0.04580470539246304
  },
  {
    "taxon": "Pteroceras unguiculatum",
    "genus": "Pteroceras",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 43,
    "percent": 0.04476368936081616
  },
  {
    "taxon": "Poicephalus robustus",
    "genus": "Poicephalus",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 43,
    "percent": 0.04476368936081616
  },
  {
    "taxon": "Liparis",
    "genus": "Liparis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 43,
    "percent": 0.04476368936081616
  },
  {
    "taxon": "Saussurea costus",
    "genus": "Saussurea",
    "family": "Compositae",
    "class": "",
    "cnt": 43,
    "percent": 0.04476368936081616
  },
  {
    "taxon": "Ara ambiguus",
    "genus": "Ara",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 42,
    "percent": 0.04372267332916927
  },
  {
    "taxon": "Euphorbia tirucalli",
    "genus": "Euphorbia",
    "family": "Euphorbiaceae",
    "class": "",
    "cnt": 42,
    "percent": 0.04372267332916927
  },
  {
    "taxon": "Nepenthes truncata",
    "genus": "Nepenthes",
    "family": "Nepenthaceae",
    "class": "",
    "cnt": 42,
    "percent": 0.04372267332916927
  },
  {
    "taxon": "Eria aporoides",
    "genus": "Eria",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 42,
    "percent": 0.04372267332916927
  },
  {
    "taxon": "Dendrobium panduriferum",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 42,
    "percent": 0.04372267332916927
  },
  {
    "taxon": "Staurochilus loherianus",
    "genus": "Staurochilus",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 42,
    "percent": 0.04372267332916927
  },
  {
    "taxon": "Trogonoptera trojana",
    "genus": "Trogonoptera",
    "family": "Papilionidae",
    "class": "Insecta",
    "cnt": 41,
    "percent": 0.04268165729752238
  },
  {
    "taxon": "Bulbophyllum papulosum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 41,
    "percent": 0.04268165729752238
  },
  {
    "taxon": "Dendrochilum tenellum",
    "genus": "Dendrochilum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 41,
    "percent": 0.04268165729752238
  },
  {
    "taxon": "Thrixspermum hystrix",
    "genus": "Thrixspermum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 41,
    "percent": 0.04268165729752238
  },
  {
    "taxon": "Bulbophyllum longiflorum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 41,
    "percent": 0.04268165729752238
  },
  {
    "taxon": "Pteroceras philippinense",
    "genus": "Pteroceras",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 40,
    "percent": 0.041640641265875494
  },
  {
    "taxon": "Microsaccus",
    "genus": "Microsaccus",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 40,
    "percent": 0.041640641265875494
  },
  {
    "taxon": "Parapteroceras quisumbingii",
    "genus": "Parapteroceras",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 39,
    "percent": 0.04059962523422861
  },
  {
    "taxon": "Lorius lory",
    "genus": "Lorius",
    "family": "Loriidae",
    "class": "Aves",
    "cnt": 39,
    "percent": 0.04059962523422861
  },
  {
    "taxon": "Bulbophyllum nymphopolitanum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 39,
    "percent": 0.04059962523422861
  },
  {
    "taxon": "Scleropages formosus",
    "genus": "Scleropages",
    "family": "Osteoglossidae",
    "class": "Actinopteri",
    "cnt": 39,
    "percent": 0.04059962523422861
  },
  {
    "taxon": "Cyanopsitta spixii",
    "genus": "Cyanopsitta",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 39,
    "percent": 0.04059962523422861
  },
  {
    "taxon": "Phelsuma",
    "genus": "Phelsuma",
    "family": "Gekkonidae",
    "class": "Reptilia",
    "cnt": 39,
    "percent": 0.04059962523422861
  },
  {
    "taxon": "Vandopsis lissochiloides",
    "genus": "Vandopsis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 38,
    "percent": 0.03955860920258172
  },
  {
    "taxon": "Falco rusticolus",
    "genus": "Falco",
    "family": "Falconidae",
    "class": "Aves",
    "cnt": 38,
    "percent": 0.03955860920258172
  },
  {
    "taxon": "Arachnis flos-aeris",
    "genus": "Arachnis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 38,
    "percent": 0.03955860920258172
  },
  {
    "taxon": "Dendrobium bicaudatum",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 38,
    "percent": 0.03955860920258172
  },
  {
    "taxon": "Spathoglottis",
    "genus": "Spathoglottis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 38,
    "percent": 0.03955860920258172
  },
  {
    "taxon": "Psittacula cyanocephala",
    "genus": "Psittacula",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 38,
    "percent": 0.03955860920258172
  },
  {
    "taxon": "Hippopus hippopus",
    "genus": "Hippopus",
    "family": "Tridacnidae",
    "class": "Bivalvia",
    "cnt": 37,
    "percent": 0.03851759317093483
  },
  {
    "taxon": "Bulbophyllum weberi",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 37,
    "percent": 0.03851759317093483
  },
  {
    "taxon": "Aerides leeana",
    "genus": "Aerides",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 37,
    "percent": 0.03851759317093483
  },
  {
    "taxon": "Epigeneium treacherianum",
    "genus": "Epigeneium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 37,
    "percent": 0.03851759317093483
  },
  {
    "taxon": "Grammatophyllum stapeliiflorum",
    "genus": "Grammatophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 37,
    "percent": 0.03851759317093483
  },
  {
    "taxon": "Pomatocalpa",
    "genus": "Pomatocalpa",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 37,
    "percent": 0.03851759317093483
  },
  {
    "taxon": "Staurochilus ionosmus",
    "genus": "Staurochilus",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 37,
    "percent": 0.03851759317093483
  },
  {
    "taxon": "Bulbophyllum catenulatum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 37,
    "percent": 0.03851759317093483
  },
  {
    "taxon": "Tuberolabium",
    "genus": "Tuberolabium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 37,
    "percent": 0.03851759317093483
  },
  {
    "taxon": "Dendrochilum glumaceum",
    "genus": "Dendrochilum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 37,
    "percent": 0.03851759317093483
  },
  {
    "taxon": "Eria floribunda",
    "genus": "Eria",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 36,
    "percent": 0.037476577139287946
  },
  {
    "taxon": "Cirrhopetalum",
    "genus": "Cirrhopetalum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 36,
    "percent": 0.037476577139287946
  },
  {
    "taxon": "Dendrobium profusum",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 35,
    "percent": 0.03643556110764106
  },
  {
    "taxon": "Thrixspermum",
    "genus": "Thrixspermum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 35,
    "percent": 0.03643556110764106
  },
  {
    "taxon": "Phalaenopsis intermedia",
    "genus": "Phalaenopsis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 35,
    "percent": 0.03643556110764106
  },
  {
    "taxon": "Cacatua sulphurea",
    "genus": "Cacatua",
    "family": "Cacatuidae",
    "class": "Aves",
    "cnt": 35,
    "percent": 0.03643556110764106
  },
  {
    "taxon": "Psittacula derbiana",
    "genus": "Psittacula",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 35,
    "percent": 0.03643556110764106
  },
  {
    "taxon": "Chamaeleo chamaeleon",
    "genus": "Chamaeleo",
    "family": "Chamaeleonidae",
    "class": "Reptilia",
    "cnt": 35,
    "percent": 0.03643556110764106
  },
  {
    "taxon": "Dendrochilum uncatum",
    "genus": "Dendrochilum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 34,
    "percent": 0.03539454507599417
  },
  {
    "taxon": "Tayassu pecari",
    "genus": "Tayassu",
    "family": "Tayassuidae",
    "class": "Mammalia",
    "cnt": 34,
    "percent": 0.03539454507599417
  },
  {
    "taxon": "Dendrobium mindanaense",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 34,
    "percent": 0.03539454507599417
  },
  {
    "taxon": "Bulbophyllum alsiosum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 34,
    "percent": 0.03539454507599417
  },
  {
    "taxon": "Nepenthes alata",
    "genus": "Nepenthes",
    "family": "Nepenthaceae",
    "class": "",
    "cnt": 33,
    "percent": 0.034353529044347283
  },
  {
    "taxon": "Dendrobium polytrichum",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 33,
    "percent": 0.034353529044347283
  },
  {
    "taxon": "Pholidota imbricata",
    "genus": "Pholidota",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 33,
    "percent": 0.034353529044347283
  },
  {
    "taxon": "Eunectes murinus",
    "genus": "Eunectes",
    "family": "Boidae",
    "class": "Reptilia",
    "cnt": 33,
    "percent": 0.034353529044347283
  },
  {
    "taxon": "Puma concolor",
    "genus": "Puma",
    "family": "Felidae",
    "class": "Mammalia",
    "cnt": 32,
    "percent": 0.0333125130127004
  },
  {
    "taxon": "Furcifer petteri",
    "genus": "Furcifer",
    "family": "Chamaeleonidae",
    "class": "Reptilia",
    "cnt": 32,
    "percent": 0.0333125130127004
  },
  {
    "taxon": "Rhipsalis ewaldiana",
    "genus": "Rhipsalis",
    "family": "Cactaceae",
    "class": "",
    "cnt": 32,
    "percent": 0.0333125130127004
  },
  {
    "taxon": "Calanthe rubens",
    "genus": "Calanthe",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 32,
    "percent": 0.0333125130127004
  },
  {
    "taxon": "Amazona auropalliata",
    "genus": "Amazona",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 32,
    "percent": 0.0333125130127004
  },
  {
    "taxon": "Coelogyne confusa",
    "genus": "Coelogyne",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 32,
    "percent": 0.0333125130127004
  },
  {
    "taxon": "Bulbophyllum brevibrachiatum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 32,
    "percent": 0.0333125130127004
  },
  {
    "taxon": "Cymbidium dayanum",
    "genus": "Cymbidium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 32,
    "percent": 0.0333125130127004
  },
  {
    "taxon": "Caiman crocodilus yacare",
    "genus": "Caiman",
    "family": "Alligatoridae",
    "class": "Reptilia",
    "cnt": 31,
    "percent": 0.032271496981053506
  },
  {
    "taxon": "Grampus griseus",
    "genus": "Grampus",
    "family": "Delphinidae",
    "class": "Mammalia",
    "cnt": 31,
    "percent": 0.032271496981053506
  },
  {
    "taxon": "Pseudorca crassidens",
    "genus": "Pseudorca",
    "family": "Delphinidae",
    "class": "Mammalia",
    "cnt": 31,
    "percent": 0.032271496981053506
  },
  {
    "taxon": "Luisia cordatilabia",
    "genus": "Luisia",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 31,
    "percent": 0.032271496981053506
  },
  {
    "taxon": "Liparis latifolia",
    "genus": "Liparis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 31,
    "percent": 0.032271496981053506
  },
  {
    "taxon": "Cattleya hybrid",
    "genus": "Cattleya",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 31,
    "percent": 0.032271496981053506
  },
  {
    "taxon": "Stenella longirostris",
    "genus": "Stenella",
    "family": "Delphinidae",
    "class": "Mammalia",
    "cnt": 31,
    "percent": 0.032271496981053506
  },
  {
    "taxon": "Globicephala macrorhynchus",
    "genus": "Globicephala",
    "family": "Delphinidae",
    "class": "Mammalia",
    "cnt": 31,
    "percent": 0.032271496981053506
  },
  {
    "taxon": "Bulbophyllum mearnsii",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 30,
    "percent": 0.03123048094940662
  },
  {
    "taxon": "Orchidaceae hybrid",
    "genus": "",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 30,
    "percent": 0.03123048094940662
  },
  {
    "taxon": "Amazona leucocephala",
    "genus": "Amazona",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 30,
    "percent": 0.03123048094940662
  },
  {
    "taxon": "Grammatophyllum",
    "genus": "Grammatophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 29,
    "percent": 0.030189464917759732
  },
  {
    "taxon": "Dipodium paludosum",
    "genus": "Dipodium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 29,
    "percent": 0.030189464917759732
  },
  {
    "taxon": "Cymbidium chloranthum",
    "genus": "Cymbidium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 29,
    "percent": 0.030189464917759732
  },
  {
    "taxon": "Globicephala melas",
    "genus": "Globicephala",
    "family": "Delphinidae",
    "class": "Mammalia",
    "cnt": 29,
    "percent": 0.030189464917759732
  },
  {
    "taxon": "Arachnis longicaulis",
    "genus": "Arachnis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 29,
    "percent": 0.030189464917759732
  },
  {
    "taxon": "Penelopides panini",
    "genus": "Penelopides",
    "family": "Bucerotidae",
    "class": "Aves",
    "cnt": 29,
    "percent": 0.030189464917759732
  },
  {
    "taxon": "Bulbophyllum lasioglossum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 29,
    "percent": 0.030189464917759732
  },
  {
    "taxon": "Vanda concolor",
    "genus": "Vanda",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 29,
    "percent": 0.030189464917759732
  },
  {
    "taxon": "Tuberolabium quisumbingii",
    "genus": "Tuberolabium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 28,
    "percent": 0.029148448886112847
  },
  {
    "taxon": "Dendrobium carinatum",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 28,
    "percent": 0.029148448886112847
  },
  {
    "taxon": "Calumma guillaumeti",
    "genus": "Calumma",
    "family": "Chamaeleonidae",
    "class": "Reptilia",
    "cnt": 28,
    "percent": 0.029148448886112847
  },
  {
    "taxon": "Thrixspermum bromeliforme",
    "genus": "Thrixspermum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 27,
    "percent": 0.028107432854465958
  },
  {
    "taxon": "Amazona barbadensis",
    "genus": "Amazona",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 27,
    "percent": 0.028107432854465958
  },
  {
    "taxon": "Dendrobium balzerianum",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 27,
    "percent": 0.028107432854465958
  },
  {
    "taxon": "Prunus africana",
    "genus": "Prunus",
    "family": "Rosaceae",
    "class": "",
    "cnt": 27,
    "percent": 0.028107432854465958
  },
  {
    "taxon": "Tursiops aduncus",
    "genus": "Tursiops",
    "family": "Delphinidae",
    "class": "Mammalia",
    "cnt": 27,
    "percent": 0.028107432854465958
  },
  {
    "taxon": "Hippeophyllum",
    "genus": "Hippeophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 26,
    "percent": 0.027066416822819073
  },
  {
    "taxon": "Cleisostoma subulatum",
    "genus": "Cleisostoma",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 26,
    "percent": 0.027066416822819073
  },
  {
    "taxon": "Eos squamata",
    "genus": "Eos",
    "family": "Loriidae",
    "class": "Aves",
    "cnt": 26,
    "percent": 0.027066416822819073
  },
  {
    "taxon": "Struthio camelus",
    "genus": "Struthio",
    "family": "Struthionidae",
    "class": "Aves",
    "cnt": 26,
    "percent": 0.027066416822819073
  },
  {
    "taxon": "Flickingeria",
    "genus": "Flickingeria",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 26,
    "percent": 0.027066416822819073
  },
  {
    "taxon": "Ninox philippensis",
    "genus": "Ninox",
    "family": "Strigidae",
    "class": "Aves",
    "cnt": 26,
    "percent": 0.027066416822819073
  },
  {
    "taxon": "Tuberolabium rhopalorrhachis",
    "genus": "Tuberolabium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 26,
    "percent": 0.027066416822819073
  },
  {
    "taxon": "Bulbophyllum emiliorum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 25,
    "percent": 0.026025400791172184
  },
  {
    "taxon": "Bulbophyllum fenixii",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 25,
    "percent": 0.026025400791172184
  },
  {
    "taxon": "Cymbidium",
    "genus": "Cymbidium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 25,
    "percent": 0.026025400791172184
  },
  {
    "taxon": "Bulbophyllum aeolium",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 25,
    "percent": 0.026025400791172184
  },
  {
    "taxon": "Goodyera",
    "genus": "Goodyera",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 25,
    "percent": 0.026025400791172184
  },
  {
    "taxon": "Lagenorhynchus obliquidens",
    "genus": "Lagenorhynchus",
    "family": "Delphinidae",
    "class": "Mammalia",
    "cnt": 25,
    "percent": 0.026025400791172184
  },
  {
    "taxon": "Dendrobium wenzelii",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 25,
    "percent": 0.026025400791172184
  },
  {
    "taxon": "Bulbophyllum umbellatum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 24,
    "percent": 0.024984384759525295
  },
  {
    "taxon": "Sarcophyton pachyphyllum",
    "genus": "Sarcophyton",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 24,
    "percent": 0.024984384759525295
  },
  {
    "taxon": "Dendrobium crumenatum",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 24,
    "percent": 0.024984384759525295
  },
  {
    "taxon": "Tuberolabium sarcochiloides",
    "genus": "Tuberolabium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 24,
    "percent": 0.024984384759525295
  },
  {
    "taxon": "Eschrichtius robustus",
    "genus": "Eschrichtius",
    "family": "Eschrichtiidae",
    "class": "Mammalia",
    "cnt": 24,
    "percent": 0.024984384759525295
  },
  {
    "taxon": "Echinopsis peruviana",
    "genus": "Echinopsis",
    "family": "Cactaceae",
    "class": "",
    "cnt": 23,
    "percent": 0.02394336872787841
  },
  {
    "taxon": "Dendrochilum latifolium",
    "genus": "Dendrochilum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 23,
    "percent": 0.02394336872787841
  },
  {
    "taxon": "Bulbophyllum costatum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 23,
    "percent": 0.02394336872787841
  },
  {
    "taxon": "Oroya peruviana",
    "genus": "Oroya",
    "family": "Cactaceae",
    "class": "",
    "cnt": 23,
    "percent": 0.02394336872787841
  },
  {
    "taxon": "Nepenthes merrilliana",
    "genus": "Nepenthes",
    "family": "Nepenthaceae",
    "class": "",
    "cnt": 23,
    "percent": 0.02394336872787841
  },
  {
    "taxon": "Nepenthes ventricosa",
    "genus": "Nepenthes",
    "family": "Nepenthaceae",
    "class": "",
    "cnt": 23,
    "percent": 0.02394336872787841
  },
  {
    "taxon": "Varanus spinulosus",
    "genus": "Varanus",
    "family": "Varanidae",
    "class": "Reptilia",
    "cnt": 23,
    "percent": 0.02394336872787841
  },
  {
    "taxon": "Calanthe triplicata",
    "genus": "Calanthe",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 23,
    "percent": 0.02394336872787841
  },
  {
    "taxon": "Pteroceras",
    "genus": "Pteroceras",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 23,
    "percent": 0.02394336872787841
  },
  {
    "taxon": "Tuberolabium kotoense",
    "genus": "Tuberolabium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 23,
    "percent": 0.02394336872787841
  },
  {
    "taxon": "Pyrrhura molinae",
    "genus": "Pyrrhura",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 22,
    "percent": 0.02290235269623152
  },
  {
    "taxon": "Echinopsis",
    "genus": "Echinopsis",
    "family": "Cactaceae",
    "class": "",
    "cnt": 22,
    "percent": 0.02290235269623152
  },
  {
    "taxon": "Grammatophyllum measuresianum",
    "genus": "Grammatophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 22,
    "percent": 0.02290235269623152
  },
  {
    "taxon": "Amazona albifrons",
    "genus": "Amazona",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 22,
    "percent": 0.02290235269623152
  },
  {
    "taxon": "Tridacna",
    "genus": "Tridacna",
    "family": "Tridacnidae",
    "class": "Bivalvia",
    "cnt": 22,
    "percent": 0.02290235269623152
  },
  {
    "taxon": "Amazona finschi",
    "genus": "Amazona",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 22,
    "percent": 0.02290235269623152
  },
  {
    "taxon": "Steno bredanensis",
    "genus": "Steno",
    "family": "Delphinidae",
    "class": "Mammalia",
    "cnt": 22,
    "percent": 0.02290235269623152
  },
  {
    "taxon": "Panthera leo",
    "genus": "Panthera",
    "family": "Felidae",
    "class": "Mammalia",
    "cnt": 22,
    "percent": 0.02290235269623152
  },
  {
    "taxon": "Balaenopteridae",
    "genus": "",
    "family": "Balaenopteridae",
    "class": "Mammalia",
    "cnt": 22,
    "percent": 0.02290235269623152
  },
  {
    "taxon": "Panthera onca",
    "genus": "Panthera",
    "family": "Felidae",
    "class": "Mammalia",
    "cnt": 22,
    "percent": 0.02290235269623152
  },
  {
    "taxon": "Aquilaria filaria",
    "genus": "Aquilaria",
    "family": "Thymelaeaceae",
    "class": "",
    "cnt": 22,
    "percent": 0.02290235269623152
  },
  {
    "taxon": "Bulbophyllum loherianum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 21,
    "percent": 0.021861336664584636
  },
  {
    "taxon": "Eriosyce islayensis",
    "genus": "Eriosyce",
    "family": "Cactaceae",
    "class": "",
    "cnt": 21,
    "percent": 0.021861336664584636
  },
  {
    "taxon": "Bulbophyllum othonis",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 21,
    "percent": 0.021861336664584636
  },
  {
    "taxon": "Peponocephala electra",
    "genus": "Peponocephala",
    "family": "Delphinidae",
    "class": "Mammalia",
    "cnt": 21,
    "percent": 0.021861336664584636
  },
  {
    "taxon": "Cacatua haematuropygia",
    "genus": "Cacatua",
    "family": "Cacatuidae",
    "class": "Aves",
    "cnt": 21,
    "percent": 0.021861336664584636
  },
  {
    "taxon": "Phalaenopsis cornucervi",
    "genus": "Phalaenopsis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 21,
    "percent": 0.021861336664584636
  },
  {
    "taxon": "Rhynchostylis gigantea",
    "genus": "Rhynchostylis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 21,
    "percent": 0.021861336664584636
  },
  {
    "taxon": "Rhipsalis baccifera",
    "genus": "Rhipsalis",
    "family": "Cactaceae",
    "class": "",
    "cnt": 21,
    "percent": 0.021861336664584636
  },
  {
    "taxon": "Oberonia cylindrica",
    "genus": "Oberonia",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 21,
    "percent": 0.021861336664584636
  },
  {
    "taxon": "Otus megalotis",
    "genus": "Otus",
    "family": "Strigidae",
    "class": "Aves",
    "cnt": 21,
    "percent": 0.021861336664584636
  },
  {
    "taxon": "Dendrobium pseudoequitans",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 20,
    "percent": 0.020820320632937747
  },
  {
    "taxon": "Acriopsis javanica",
    "genus": "Acriopsis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 20,
    "percent": 0.020820320632937747
  },
  {
    "taxon": "Eria javanica",
    "genus": "Eria",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 20,
    "percent": 0.020820320632937747
  },
  {
    "taxon": "Oberonia obesa",
    "genus": "Oberonia",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 20,
    "percent": 0.020820320632937747
  },
  {
    "taxon": "Psittacula eupatria",
    "genus": "Psittacula",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 20,
    "percent": 0.020820320632937747
  },
  {
    "taxon": "Rhinocerotidae",
    "genus": "",
    "family": "Rhinocerotidae",
    "class": "Mammalia",
    "cnt": 20,
    "percent": 0.020820320632937747
  },
  {
    "taxon": "Bulbophyllum elassoglossum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 20,
    "percent": 0.020820320632937747
  },
  {
    "taxon": "Coelogyne vanoverberghii",
    "genus": "Coelogyne",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 20,
    "percent": 0.020820320632937747
  },
  {
    "taxon": "Crocodylus moreletii",
    "genus": "Crocodylus",
    "family": "Crocodylidae",
    "class": "Reptilia",
    "cnt": 20,
    "percent": 0.020820320632937747
  },
  {
    "taxon": "Malleola constricta",
    "genus": "Malleola",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 20,
    "percent": 0.020820320632937747
  },
  {
    "taxon": "Tupinambis",
    "genus": "Tupinambis",
    "family": "Teiidae",
    "class": "Reptilia",
    "cnt": 19,
    "percent": 0.01977930460129086
  },
  {
    "taxon": "Spathoglottis plicata",
    "genus": "Spathoglottis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 19,
    "percent": 0.01977930460129086
  },
  {
    "taxon": "Pan troglodytes",
    "genus": "Pan",
    "family": "Hominidae",
    "class": "Mammalia",
    "cnt": 19,
    "percent": 0.01977930460129086
  },
  {
    "taxon": "Balaenoptera bonaerensis",
    "genus": "Balaenoptera",
    "family": "Balaenopteridae",
    "class": "Mammalia",
    "cnt": 19,
    "percent": 0.01977930460129086
  },
  {
    "taxon": "Amazona farinosa",
    "genus": "Amazona",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 19,
    "percent": 0.01977930460129086
  },
  {
    "taxon": "Varanus",
    "genus": "Varanus",
    "family": "Varanidae",
    "class": "Reptilia",
    "cnt": 19,
    "percent": 0.01977930460129086
  },
  {
    "taxon": "Calanthe",
    "genus": "Calanthe",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 19,
    "percent": 0.01977930460129086
  },
  {
    "taxon": "Thrixspermum robinsonii",
    "genus": "Thrixspermum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 19,
    "percent": 0.01977930460129086
  },
  {
    "taxon": "Nepenthes",
    "genus": "Nepenthes",
    "family": "Nepenthaceae",
    "class": "",
    "cnt": 19,
    "percent": 0.01977930460129086
  },
  {
    "taxon": "Cephalophus zebra",
    "genus": "Cephalophus",
    "family": "Bovidae",
    "class": "Mammalia",
    "cnt": 19,
    "percent": 0.01977930460129086
  },
  {
    "taxon": "Smaug mossambicus",
    "genus": "Smaug",
    "family": "Cordylidae",
    "class": "Reptilia",
    "cnt": 19,
    "percent": 0.01977930460129086
  },
  {
    "taxon": "Furcifer",
    "genus": "Furcifer",
    "family": "Chamaeleonidae",
    "class": "Reptilia",
    "cnt": 19,
    "percent": 0.01977930460129086
  },
  {
    "taxon": "Staurochilus guibertii",
    "genus": "Staurochilus",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 18,
    "percent": 0.018738288569643973
  },
  {
    "taxon": "Stenella attenuata",
    "genus": "Stenella",
    "family": "Delphinidae",
    "class": "Mammalia",
    "cnt": 18,
    "percent": 0.018738288569643973
  },
  {
    "taxon": "Phalaenopsis pulcherrima",
    "genus": "Phalaenopsis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 18,
    "percent": 0.018738288569643973
  },
  {
    "taxon": "Vanda helvola",
    "genus": "Vanda",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 18,
    "percent": 0.018738288569643973
  },
  {
    "taxon": "Pteroglossus viridis",
    "genus": "Pteroglossus",
    "family": "Ramphastidae",
    "class": "Aves",
    "cnt": 18,
    "percent": 0.018738288569643973
  },
  {
    "taxon": "Copiapoa echinoides",
    "genus": "Copiapoa",
    "family": "Cactaceae",
    "class": "",
    "cnt": 18,
    "percent": 0.018738288569643973
  },
  {
    "taxon": "Calumma marojezense",
    "genus": "Calumma",
    "family": "Chamaeleonidae",
    "class": "Reptilia",
    "cnt": 18,
    "percent": 0.018738288569643973
  },
  {
    "taxon": "Liparis parviflora",
    "genus": "Liparis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 18,
    "percent": 0.018738288569643973
  },
  {
    "taxon": "Calumma",
    "genus": "Calumma",
    "family": "Chamaeleonidae",
    "class": "Reptilia",
    "cnt": 18,
    "percent": 0.018738288569643973
  },
  {
    "taxon": "Cephalophus dorsalis",
    "genus": "Cephalophus",
    "family": "Bovidae",
    "class": "Mammalia",
    "cnt": 18,
    "percent": 0.018738288569643973
  },
  {
    "taxon": "Schoenorchis",
    "genus": "Schoenorchis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 18,
    "percent": 0.018738288569643973
  },
  {
    "taxon": "Tubipora musica",
    "genus": "Tubipora",
    "family": "Tubiporidae",
    "class": "Anthozoa",
    "cnt": 18,
    "percent": 0.018738288569643973
  },
  {
    "taxon": "Corucia zebrata",
    "genus": "Corucia",
    "family": "Scincidae",
    "class": "Reptilia",
    "cnt": 18,
    "percent": 0.018738288569643973
  },
  {
    "taxon": "Uromastyx acanthinura",
    "genus": "Uromastyx",
    "family": "Agamidae",
    "class": "Reptilia",
    "cnt": 18,
    "percent": 0.018738288569643973
  },
  {
    "taxon": "Dendrobium niveobarbatum",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 17,
    "percent": 0.017697272537997084
  },
  {
    "taxon": "Bulbophyllum cryptophoranthus",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 17,
    "percent": 0.017697272537997084
  },
  {
    "taxon": "Liparis condylobulbon",
    "genus": "Liparis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 17,
    "percent": 0.017697272537997084
  },
  {
    "taxon": "Falco peregrinus",
    "genus": "Falco",
    "family": "Falconidae",
    "class": "Aves",
    "cnt": 17,
    "percent": 0.017697272537997084
  },
  {
    "taxon": "Chamaeleo gracilis",
    "genus": "Chamaeleo",
    "family": "Chamaeleonidae",
    "class": "Reptilia",
    "cnt": 17,
    "percent": 0.017697272537997084
  },
  {
    "taxon": "Dendrobium junceum",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 17,
    "percent": 0.017697272537997084
  },
  {
    "taxon": "Varanus indicus",
    "genus": "Varanus",
    "family": "Varanidae",
    "class": "Reptilia",
    "cnt": 17,
    "percent": 0.017697272537997084
  },
  {
    "taxon": "Aratinga auricapillus",
    "genus": "Aratinga",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 17,
    "percent": 0.017697272537997084
  },
  {
    "taxon": "Grammatophyllum martae",
    "genus": "Grammatophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 17,
    "percent": 0.017697272537997084
  },
  {
    "taxon": "Dendrobium ventricosum",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 17,
    "percent": 0.017697272537997084
  },
  {
    "taxon": "Heliopora coerulea",
    "genus": "Heliopora",
    "family": "Helioporidae",
    "class": "Anthozoa",
    "cnt": 17,
    "percent": 0.017697272537997084
  },
  {
    "taxon": "Grammatophyllum wallisii",
    "genus": "Grammatophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 17,
    "percent": 0.017697272537997084
  },
  {
    "taxon": "Ceratocentron",
    "genus": "Ceratocentron",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 17,
    "percent": 0.017697272537997084
  },
  {
    "taxon": "Cacatua ducorpsii",
    "genus": "Cacatua",
    "family": "Cacatuidae",
    "class": "Aves",
    "cnt": 17,
    "percent": 0.017697272537997084
  },
  {
    "taxon": "Primolius auricollis",
    "genus": "Primolius",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 16,
    "percent": 0.0166562565063502
  },
  {
    "taxon": "Gallicolumba luzonica",
    "genus": "Gallicolumba",
    "family": "Columbidae",
    "class": "Aves",
    "cnt": 16,
    "percent": 0.0166562565063502
  },
  {
    "taxon": "Uromastyx dispar",
    "genus": "Uromastyx",
    "family": "Agamidae",
    "class": "Reptilia",
    "cnt": 16,
    "percent": 0.0166562565063502
  },
  {
    "taxon": "Phalaenopsis reichenbachiana",
    "genus": "Phalaenopsis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 16,
    "percent": 0.0166562565063502
  },
  {
    "taxon": "Bulbophyllum nasseri",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 16,
    "percent": 0.0166562565063502
  },
  {
    "taxon": "Furcifer labordi",
    "genus": "Furcifer",
    "family": "Chamaeleonidae",
    "class": "Reptilia",
    "cnt": 16,
    "percent": 0.0166562565063502
  },
  {
    "taxon": "Candoia carinata",
    "genus": "Candoia",
    "family": "Boidae",
    "class": "Reptilia",
    "cnt": 16,
    "percent": 0.0166562565063502
  },
  {
    "taxon": "Nepenthes petiolata",
    "genus": "Nepenthes",
    "family": "Nepenthaceae",
    "class": "",
    "cnt": 16,
    "percent": 0.0166562565063502
  },
  {
    "taxon": "Eubalaena australis",
    "genus": "Eubalaena",
    "family": "Balaenidae",
    "class": "Mammalia",
    "cnt": 16,
    "percent": 0.0166562565063502
  },
  {
    "taxon": "Delphinus delphis",
    "genus": "Delphinus",
    "family": "Delphinidae",
    "class": "Mammalia",
    "cnt": 16,
    "percent": 0.0166562565063502
  },
  {
    "taxon": "Macropodanthus cootesii",
    "genus": "Macropodanthus",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 16,
    "percent": 0.0166562565063502
  },
  {
    "taxon": "Bulbophyllum alagense",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 16,
    "percent": 0.0166562565063502
  },
  {
    "taxon": "Prionailurus bengalensis",
    "genus": "Prionailurus",
    "family": "Felidae",
    "class": "Mammalia",
    "cnt": 16,
    "percent": 0.0166562565063502
  },
  {
    "taxon": "Dendrobium lamellatum",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 16,
    "percent": 0.0166562565063502
  },
  {
    "taxon": "Dendrobium ramosii",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 16,
    "percent": 0.0166562565063502
  },
  {
    "taxon": "Dendrobium miyakei",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 16,
    "percent": 0.0166562565063502
  },
  {
    "taxon": "Bulbophyllum maquilinguense",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 16,
    "percent": 0.0166562565063502
  },
  {
    "taxon": "Poicephalus rueppellii",
    "genus": "Poicephalus",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 15,
    "percent": 0.01561524047470331
  },
  {
    "taxon": "Loriculus philippensis",
    "genus": "Loriculus",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 15,
    "percent": 0.01561524047470331
  },
  {
    "taxon": "Matucana paucicostata",
    "genus": "Matucana",
    "family": "Cactaceae",
    "class": "",
    "cnt": 15,
    "percent": 0.01561524047470331
  },
  {
    "taxon": "Matucana intertexta",
    "genus": "Matucana",
    "family": "Cactaceae",
    "class": "",
    "cnt": 15,
    "percent": 0.01561524047470331
  },
  {
    "taxon": "Varanus marmoratus",
    "genus": "Varanus",
    "family": "Varanidae",
    "class": "Reptilia",
    "cnt": 15,
    "percent": 0.01561524047470331
  },
  {
    "taxon": "Stylophora pistillata",
    "genus": "Stylophora",
    "family": "Pocilloporidae",
    "class": "Anthozoa",
    "cnt": 15,
    "percent": 0.01561524047470331
  },
  {
    "taxon": "Stenella coeruleoalba",
    "genus": "Stenella",
    "family": "Delphinidae",
    "class": "Mammalia",
    "cnt": 15,
    "percent": 0.01561524047470331
  },
  {
    "taxon": "Cactaceae",
    "genus": "",
    "family": "Cactaceae",
    "class": "",
    "cnt": 15,
    "percent": 0.01561524047470331
  },
  {
    "taxon": "Cattleya",
    "genus": "Cattleya",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 15,
    "percent": 0.01561524047470331
  },
  {
    "taxon": "Ceratostylis senilis",
    "genus": "Ceratostylis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 15,
    "percent": 0.01561524047470331
  },
  {
    "taxon": "Ceratotherium simum",
    "genus": "Ceratotherium",
    "family": "Rhinocerotidae",
    "class": "Mammalia",
    "cnt": 15,
    "percent": 0.01561524047470331
  },
  {
    "taxon": "Ceratotherium simum simum",
    "genus": "Ceratotherium",
    "family": "Rhinocerotidae",
    "class": "Mammalia",
    "cnt": 15,
    "percent": 0.01561524047470331
  },
  {
    "taxon": "Copiapoa",
    "genus": "Copiapoa",
    "family": "Cactaceae",
    "class": "",
    "cnt": 15,
    "percent": 0.01561524047470331
  },
  {
    "taxon": "Crocodylus cataphractus",
    "genus": "Crocodylus",
    "family": "Crocodylidae",
    "class": "Reptilia",
    "cnt": 15,
    "percent": 0.01561524047470331
  },
  {
    "taxon": "Cuora amboinensis",
    "genus": "Cuora",
    "family": "Geoemydidae",
    "class": "Reptilia",
    "cnt": 15,
    "percent": 0.01561524047470331
  },
  {
    "taxon": "Dendrobium escritorii",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 15,
    "percent": 0.01561524047470331
  },
  {
    "taxon": "Dendrobium stella-silvae",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 15,
    "percent": 0.01561524047470331
  },
  {
    "taxon": "Eulophia squalida",
    "genus": "Eulophia",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 15,
    "percent": 0.01561524047470331
  },
  {
    "taxon": "Porites",
    "genus": "Porites",
    "family": "Poritidae",
    "class": "Anthozoa",
    "cnt": 14,
    "percent": 0.014574224443056423
  },
  {
    "taxon": "Echinopsis atacamensis",
    "genus": "Echinopsis",
    "family": "Cactaceae",
    "class": "",
    "cnt": 14,
    "percent": 0.014574224443056423
  },
  {
    "taxon": "Ursus arctos",
    "genus": "Ursus",
    "family": "Ursidae",
    "class": "Mammalia",
    "cnt": 14,
    "percent": 0.014574224443056423
  },
  {
    "taxon": "Lagenodelphis hosei",
    "genus": "Lagenodelphis",
    "family": "Delphinidae",
    "class": "Mammalia",
    "cnt": 14,
    "percent": 0.014574224443056423
  },
  {
    "taxon": "Podochilus",
    "genus": "Podochilus",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 14,
    "percent": 0.014574224443056423
  },
  {
    "taxon": "Anthracoceros marchei",
    "genus": "Anthracoceros",
    "family": "Bucerotidae",
    "class": "Aves",
    "cnt": 14,
    "percent": 0.014574224443056423
  },
  {
    "taxon": "Spathoglottis hybrid",
    "genus": "Spathoglottis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 14,
    "percent": 0.014574224443056423
  },
  {
    "taxon": "Renanthera",
    "genus": "Renanthera",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 14,
    "percent": 0.014574224443056423
  },
  {
    "taxon": "Phalaenopsis amboinensis",
    "genus": "Phalaenopsis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 14,
    "percent": 0.014574224443056423
  },
  {
    "taxon": "Tridacna gigas",
    "genus": "Tridacna",
    "family": "Tridacnidae",
    "class": "Bivalvia",
    "cnt": 14,
    "percent": 0.014574224443056423
  },
  {
    "taxon": "Chamaeleo senegalensis",
    "genus": "Chamaeleo",
    "family": "Chamaeleonidae",
    "class": "Reptilia",
    "cnt": 14,
    "percent": 0.014574224443056423
  },
  {
    "taxon": "Pteroceras longicalcareum",
    "genus": "Pteroceras",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 14,
    "percent": 0.014574224443056423
  },
  {
    "taxon": "Dendrochilum javieriense",
    "genus": "Dendrochilum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 14,
    "percent": 0.014574224443056423
  },
  {
    "taxon": "Dipodium pictum",
    "genus": "Dipodium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 14,
    "percent": 0.014574224443056423
  },
  {
    "taxon": "Phaius",
    "genus": "Phaius",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 14,
    "percent": 0.014574224443056423
  },
  {
    "taxon": "Goura victoria",
    "genus": "Goura",
    "family": "Columbidae",
    "class": "Aves",
    "cnt": 14,
    "percent": 0.014574224443056423
  },
  {
    "taxon": "Bulbophyllum ornithorhynchum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 14,
    "percent": 0.014574224443056423
  },
  {
    "taxon": "Caiman latirostris",
    "genus": "Caiman",
    "family": "Alligatoridae",
    "class": "Reptilia",
    "cnt": 14,
    "percent": 0.014574224443056423
  },
  {
    "taxon": "Aerides",
    "genus": "Aerides",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 14,
    "percent": 0.014574224443056423
  },
  {
    "taxon": "Dendrobium treacherianum",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 14,
    "percent": 0.014574224443056423
  },
  {
    "taxon": "Arctictis binturong",
    "genus": "Arctictis",
    "family": "Viverridae",
    "class": "Mammalia",
    "cnt": 13,
    "percent": 0.013533208411409536
  },
  {
    "taxon": "Stephanoaetus coronatus",
    "genus": "Stephanoaetus",
    "family": "Accipitridae",
    "class": "Aves",
    "cnt": 13,
    "percent": 0.013533208411409536
  },
  {
    "taxon": "Pionus maximiliani",
    "genus": "Pionus",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 13,
    "percent": 0.013533208411409536
  },
  {
    "taxon": "Coelogyne quinquelamellata",
    "genus": "Coelogyne",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 13,
    "percent": 0.013533208411409536
  },
  {
    "taxon": "Coelogyne candoonensis",
    "genus": "Coelogyne",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 13,
    "percent": 0.013533208411409536
  },
  {
    "taxon": "Phaius flavus",
    "genus": "Phaius",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 13,
    "percent": 0.013533208411409536
  },
  {
    "taxon": "Oberonia lycopodioides",
    "genus": "Oberonia",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 13,
    "percent": 0.013533208411409536
  },
  {
    "taxon": "Oberonia toppingii",
    "genus": "Oberonia",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 13,
    "percent": 0.013533208411409536
  },
  {
    "taxon": "Accipiter virgatus",
    "genus": "Accipiter",
    "family": "Accipitridae",
    "class": "Aves",
    "cnt": 13,
    "percent": 0.013533208411409536
  },
  {
    "taxon": "Pomatocalpa spicata",
    "genus": "Pomatocalpa",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 13,
    "percent": 0.013533208411409536
  },
  {
    "taxon": "Bulbophyllum leysenianum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 13,
    "percent": 0.013533208411409536
  },
  {
    "taxon": "Psittrichas fulgidus",
    "genus": "Psittrichas",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 13,
    "percent": 0.013533208411409536
  },
  {
    "taxon": "Bulbophyllum vaginatum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 13,
    "percent": 0.013533208411409536
  },
  {
    "taxon": "Eubalaena glacialis",
    "genus": "Eubalaena",
    "family": "Balaenidae",
    "class": "Mammalia",
    "cnt": 13,
    "percent": 0.013533208411409536
  },
  {
    "taxon": "Troides magellanus",
    "genus": "Troides",
    "family": "Papilionidae",
    "class": "Insecta",
    "cnt": 13,
    "percent": 0.013533208411409536
  },
  {
    "taxon": "Bolbopsittacus lunulatus",
    "genus": "Bolbopsittacus",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 13,
    "percent": 0.013533208411409536
  },
  {
    "taxon": "Caretta caretta",
    "genus": "Caretta",
    "family": "Cheloniidae",
    "class": "Reptilia",
    "cnt": 13,
    "percent": 0.013533208411409536
  },
  {
    "taxon": "Bulbophyllum bataanense",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 13,
    "percent": 0.013533208411409536
  },
  {
    "taxon": "Bulbophyllum surigaense",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 12,
    "percent": 0.012492192379762648
  },
  {
    "taxon": "Rhipsalis",
    "genus": "Rhipsalis",
    "family": "Cactaceae",
    "class": "",
    "cnt": 12,
    "percent": 0.012492192379762648
  },
  {
    "taxon": "Ara glaucogularis",
    "genus": "Ara",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 12,
    "percent": 0.012492192379762648
  },
  {
    "taxon": "Caiman crocodilus apaporiensis",
    "genus": "Caiman",
    "family": "Alligatoridae",
    "class": "Reptilia",
    "cnt": 12,
    "percent": 0.012492192379762648
  },
  {
    "taxon": "Bulbophyllum macranthum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 12,
    "percent": 0.012492192379762648
  },
  {
    "taxon": "Pteropus vampyrus",
    "genus": "Pteropus",
    "family": "Pteropodidae",
    "class": "Mammalia",
    "cnt": 12,
    "percent": 0.012492192379762648
  },
  {
    "taxon": "Bulbophyllum monstrabile",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 12,
    "percent": 0.012492192379762648
  },
  {
    "taxon": "Manis tricuspis",
    "genus": "Manis",
    "family": "Manidae",
    "class": "Mammalia",
    "cnt": 12,
    "percent": 0.012492192379762648
  },
  {
    "taxon": "Pygmaeocereus bylesianus",
    "genus": "Pygmaeocereus",
    "family": "Cactaceae",
    "class": "",
    "cnt": 12,
    "percent": 0.012492192379762648
  },
  {
    "taxon": "Leopardus geoffroyi",
    "genus": "Leopardus",
    "family": "Felidae",
    "class": "Mammalia",
    "cnt": 12,
    "percent": 0.012492192379762648
  },
  {
    "taxon": "Amazona festiva",
    "genus": "Amazona",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 12,
    "percent": 0.012492192379762648
  },
  {
    "taxon": "Austrocylindropuntia cylindrica",
    "genus": "Austrocylindropuntia",
    "family": "Cactaceae",
    "class": "",
    "cnt": 12,
    "percent": 0.012492192379762648
  },
  {
    "taxon": "Dendrobium fairchildiae",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 12,
    "percent": 0.012492192379762648
  },
  {
    "taxon": "Pteropus pumilus",
    "genus": "Pteropus",
    "family": "Pteropodidae",
    "class": "Mammalia",
    "cnt": 12,
    "percent": 0.012492192379762648
  },
  {
    "taxon": "Acropora",
    "genus": "Acropora",
    "family": "Acroporidae",
    "class": "Anthozoa",
    "cnt": 12,
    "percent": 0.012492192379762648
  },
  {
    "taxon": "Phaius tankervilleae",
    "genus": "Phaius",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 12,
    "percent": 0.012492192379762648
  },
  {
    "taxon": "Neowerdermannia vorwerkii",
    "genus": "Neowerdermannia",
    "family": "Cactaceae",
    "class": "",
    "cnt": 12,
    "percent": 0.012492192379762648
  },
  {
    "taxon": "Microhierax erythrogenys",
    "genus": "Microhierax",
    "family": "Falconidae",
    "class": "Aves",
    "cnt": 12,
    "percent": 0.012492192379762648
  },
  {
    "taxon": "Osteolaemus tetraspis",
    "genus": "Osteolaemus",
    "family": "Crocodylidae",
    "class": "Reptilia",
    "cnt": 12,
    "percent": 0.012492192379762648
  },
  {
    "taxon": "Grammatophyllum speciosum",
    "genus": "Grammatophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 12,
    "percent": 0.012492192379762648
  },
  {
    "taxon": "Oreocereus leucotrichus",
    "genus": "Oreocereus",
    "family": "Cactaceae",
    "class": "",
    "cnt": 12,
    "percent": 0.012492192379762648
  },
  {
    "taxon": "Lorius chlorocercus",
    "genus": "Lorius",
    "family": "Loriidae",
    "class": "Aves",
    "cnt": 12,
    "percent": 0.012492192379762648
  },
  {
    "taxon": "Seriatopora hystrix",
    "genus": "Seriatopora",
    "family": "Pocilloporidae",
    "class": "Anthozoa",
    "cnt": 11,
    "percent": 0.01145117634811576
  },
  {
    "taxon": "Sousa chinensis",
    "genus": "Sousa",
    "family": "Delphinidae",
    "class": "Mammalia",
    "cnt": 11,
    "percent": 0.01145117634811576
  },
  {
    "taxon": "Chamaeleo africanus",
    "genus": "Chamaeleo",
    "family": "Chamaeleonidae",
    "class": "Reptilia",
    "cnt": 11,
    "percent": 0.01145117634811576
  },
  {
    "taxon": "Bulbophyllum blumei",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 11,
    "percent": 0.01145117634811576
  },
  {
    "taxon": "Echinopsis tegeleriana",
    "genus": "Echinopsis",
    "family": "Cactaceae",
    "class": "",
    "cnt": 11,
    "percent": 0.01145117634811576
  },
  {
    "taxon": "Amazona viridigenalis",
    "genus": "Amazona",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 11,
    "percent": 0.01145117634811576
  },
  {
    "taxon": "Aprosmictus erythropterus",
    "genus": "Aprosmictus",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 11,
    "percent": 0.01145117634811576
  },
  {
    "taxon": "Candoia bibroni",
    "genus": "Candoia",
    "family": "Boidae",
    "class": "Reptilia",
    "cnt": 11,
    "percent": 0.01145117634811576
  },
  {
    "taxon": "Montipora",
    "genus": "Montipora",
    "family": "Acroporidae",
    "class": "Anthozoa",
    "cnt": 11,
    "percent": 0.01145117634811576
  },
  {
    "taxon": "Rauvolfia serpentina",
    "genus": "Rauvolfia",
    "family": "Apocynaceae",
    "class": "",
    "cnt": 11,
    "percent": 0.01145117634811576
  },
  {
    "taxon": "Cacatua goffiniana",
    "genus": "Cacatua",
    "family": "Cacatuidae",
    "class": "Aves",
    "cnt": 11,
    "percent": 0.01145117634811576
  },
  {
    "taxon": "Ursus thibetanus",
    "genus": "Ursus",
    "family": "Ursidae",
    "class": "Mammalia",
    "cnt": 11,
    "percent": 0.01145117634811576
  },
  {
    "taxon": "Bulbophyllum tripudians",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 11,
    "percent": 0.01145117634811576
  },
  {
    "taxon": "Kogia sima",
    "genus": "Kogia",
    "family": "Physeteridae",
    "class": "Mammalia",
    "cnt": 11,
    "percent": 0.01145117634811576
  },
  {
    "taxon": "Bulbophyllum dolichoblepharon",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 11,
    "percent": 0.01145117634811576
  },
  {
    "taxon": "Matucana aurantiaca",
    "genus": "Matucana",
    "family": "Cactaceae",
    "class": "",
    "cnt": 11,
    "percent": 0.01145117634811576
  },
  {
    "taxon": "Bulbophyllum profusum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 11,
    "percent": 0.01145117634811576
  },
  {
    "taxon": "Punotia lagopus",
    "genus": "Punotia",
    "family": "Cactaceae",
    "class": "",
    "cnt": 11,
    "percent": 0.01145117634811576
  },
  {
    "taxon": "Chalcopsitta cardinalis",
    "genus": "Chalcopsitta",
    "family": "Loriidae",
    "class": "Aves",
    "cnt": 11,
    "percent": 0.01145117634811576
  },
  {
    "taxon": "Dendrobium tenellum",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 11,
    "percent": 0.01145117634811576
  },
  {
    "taxon": "Amazona oratrix",
    "genus": "Amazona",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 11,
    "percent": 0.01145117634811576
  },
  {
    "taxon": "Oberonia leytensis",
    "genus": "Oberonia",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 11,
    "percent": 0.01145117634811576
  },
  {
    "taxon": "Gymnocalycium spegazzinii",
    "genus": "Gymnocalycium",
    "family": "Cactaceae",
    "class": "",
    "cnt": 11,
    "percent": 0.01145117634811576
  },
  {
    "taxon": "Bulbophyllum flavofimbriatum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 11,
    "percent": 0.01145117634811576
  },
  {
    "taxon": "Eulophia",
    "genus": "Eulophia",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 10,
    "percent": 0.010410160316468874
  },
  {
    "taxon": "Cumulopuntia sphaerica",
    "genus": "Cumulopuntia",
    "family": "Cactaceae",
    "class": "",
    "cnt": 10,
    "percent": 0.010410160316468874
  },
  {
    "taxon": "Orcaella brevirostris",
    "genus": "Orcaella",
    "family": "Delphinidae",
    "class": "Mammalia",
    "cnt": 10,
    "percent": 0.010410160316468874
  },
  {
    "taxon": "Primolius couloni",
    "genus": "Primolius",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 10,
    "percent": 0.010410160316468874
  },
  {
    "taxon": "Thelasis micrantha",
    "genus": "Thelasis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 10,
    "percent": 0.010410160316468874
  },
  {
    "taxon": "Tillandsia",
    "genus": "Tillandsia",
    "family": "Bromeliaceae",
    "class": "",
    "cnt": 10,
    "percent": 0.010410160316468874
  },
  {
    "taxon": "Otus mindorensis",
    "genus": "Otus",
    "family": "Strigidae",
    "class": "Aves",
    "cnt": 10,
    "percent": 0.010410160316468874
  },
  {
    "taxon": "Matucana haynei",
    "genus": "Matucana",
    "family": "Cactaceae",
    "class": "",
    "cnt": 10,
    "percent": 0.010410160316468874
  },
  {
    "taxon": "Prioniturus discurus",
    "genus": "Prioniturus",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 10,
    "percent": 0.010410160316468874
  },
  {
    "taxon": "Dendrobium armeniacum",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 10,
    "percent": 0.010410160316468874
  },
  {
    "taxon": "Varanus griseus",
    "genus": "Varanus",
    "family": "Varanidae",
    "class": "Reptilia",
    "cnt": 10,
    "percent": 0.010410160316468874
  },
  {
    "taxon": "Globicephala",
    "genus": "Globicephala",
    "family": "Delphinidae",
    "class": "Mammalia",
    "cnt": 10,
    "percent": 0.010410160316468874
  },
  {
    "taxon": "Eolophus roseicapilla",
    "genus": "Eolophus",
    "family": "Cacatuidae",
    "class": "Aves",
    "cnt": 10,
    "percent": 0.010410160316468874
  },
  {
    "taxon": "Ornithoptera victoriae",
    "genus": "Ornithoptera",
    "family": "Papilionidae",
    "class": "Insecta",
    "cnt": 10,
    "percent": 0.010410160316468874
  },
  {
    "taxon": "Coelogyne pandurata",
    "genus": "Coelogyne",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 10,
    "percent": 0.010410160316468874
  },
  {
    "taxon": "Kinyongia fischeri",
    "genus": "Kinyongia",
    "family": "Chamaeleonidae",
    "class": "Reptilia",
    "cnt": 10,
    "percent": 0.010410160316468874
  },
  {
    "taxon": "Kogia breviceps",
    "genus": "Kogia",
    "family": "Physeteridae",
    "class": "Mammalia",
    "cnt": 10,
    "percent": 0.010410160316468874
  },
  {
    "taxon": "Eunectes notaeus",
    "genus": "Eunectes",
    "family": "Boidae",
    "class": "Reptilia",
    "cnt": 10,
    "percent": 0.010410160316468874
  },
  {
    "taxon": "Coelogyne loheri",
    "genus": "Coelogyne",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 10,
    "percent": 0.010410160316468874
  },
  {
    "taxon": "Pongo pygmaeus",
    "genus": "Pongo",
    "family": "Hominidae",
    "class": "Mammalia",
    "cnt": 10,
    "percent": 0.010410160316468874
  },
  {
    "taxon": "Cleisostoma",
    "genus": "Cleisostoma",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 10,
    "percent": 0.010410160316468874
  },
  {
    "taxon": "Canis lupus",
    "genus": "Canis",
    "family": "Canidae",
    "class": "Mammalia",
    "cnt": 10,
    "percent": 0.010410160316468874
  },
  {
    "taxon": "Lonchura oryzivora",
    "genus": "Lonchura",
    "family": "Estrildidae",
    "class": "Aves",
    "cnt": 10,
    "percent": 0.010410160316468874
  },
  {
    "taxon": "Oberonia merrillii",
    "genus": "Oberonia",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 10,
    "percent": 0.010410160316468874
  },
  {
    "taxon": "Poicephalus cryptoxanthus",
    "genus": "Poicephalus",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 10,
    "percent": 0.010410160316468874
  },
  {
    "taxon": "Siebenrockiella leytensis",
    "genus": "Siebenrockiella",
    "family": "Geoemydidae",
    "class": "Reptilia",
    "cnt": 10,
    "percent": 0.010410160316468874
  },
  {
    "taxon": "Pteroglossus aracari",
    "genus": "Pteroglossus",
    "family": "Ramphastidae",
    "class": "Aves",
    "cnt": 9,
    "percent": 0.009369144284821987
  },
  {
    "taxon": "Frailea chiquitana",
    "genus": "Frailea",
    "family": "Cactaceae",
    "class": "",
    "cnt": 9,
    "percent": 0.009369144284821987
  },
  {
    "taxon": "Tridacnidae",
    "genus": "",
    "family": "Tridacnidae",
    "class": "Bivalvia",
    "cnt": 9,
    "percent": 0.009369144284821987
  },
  {
    "taxon": "Dendrobium spurium",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 9,
    "percent": 0.009369144284821987
  },
  {
    "taxon": "Luisia teretifolia",
    "genus": "Luisia",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 9,
    "percent": 0.009369144284821987
  },
  {
    "taxon": "Polystachya",
    "genus": "Polystachya",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 9,
    "percent": 0.009369144284821987
  },
  {
    "taxon": "Lepidochelys olivacea",
    "genus": "Lepidochelys",
    "family": "Cheloniidae",
    "class": "Reptilia",
    "cnt": 9,
    "percent": 0.009369144284821987
  },
  {
    "taxon": "Thrixspermum subulatum",
    "genus": "Thrixspermum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 9,
    "percent": 0.009369144284821987
  },
  {
    "taxon": "Oberonia iridifolia",
    "genus": "Oberonia",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 9,
    "percent": 0.009369144284821987
  },
  {
    "taxon": "Cryptostylis arachnites",
    "genus": "Cryptostylis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 9,
    "percent": 0.009369144284821987
  },
  {
    "taxon": "Rhyticeros plicatus",
    "genus": "Rhyticeros",
    "family": "Bucerotidae",
    "class": "Aves",
    "cnt": 9,
    "percent": 0.009369144284821987
  },
  {
    "taxon": "Aceros leucocephalus",
    "genus": "Aceros",
    "family": "Bucerotidae",
    "class": "Aves",
    "cnt": 9,
    "percent": 0.009369144284821987
  },
  {
    "taxon": "Ziphius cavirostris",
    "genus": "Ziphius",
    "family": "Ziphiidae",
    "class": "Mammalia",
    "cnt": 9,
    "percent": 0.009369144284821987
  },
  {
    "taxon": "Copiapoa calderana",
    "genus": "Copiapoa",
    "family": "Cactaceae",
    "class": "",
    "cnt": 9,
    "percent": 0.009369144284821987
  },
  {
    "taxon": "Pocillopora damicornis",
    "genus": "Pocillopora",
    "family": "Pocilloporidae",
    "class": "Anthozoa",
    "cnt": 9,
    "percent": 0.009369144284821987
  },
  {
    "taxon": "Plocoglottis acuminata",
    "genus": "Plocoglottis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 9,
    "percent": 0.009369144284821987
  },
  {
    "taxon": "Liparis elegans",
    "genus": "Liparis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 9,
    "percent": 0.009369144284821987
  },
  {
    "taxon": "Calanthe hennisii",
    "genus": "Calanthe",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 9,
    "percent": 0.009369144284821987
  },
  {
    "taxon": "Arundina graminifolia",
    "genus": "Arundina",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 9,
    "percent": 0.009369144284821987
  },
  {
    "taxon": "Buceros hydrocorax hydrocorax",
    "genus": "Buceros",
    "family": "Bucerotidae",
    "class": "Aves",
    "cnt": 9,
    "percent": 0.009369144284821987
  },
  {
    "taxon": "Calyptorhynchus banksii",
    "genus": "Calyptorhynchus",
    "family": "Cacatuidae",
    "class": "Aves",
    "cnt": 9,
    "percent": 0.009369144284821987
  },
  {
    "taxon": "Stenella frontalis",
    "genus": "Stenella",
    "family": "Delphinidae",
    "class": "Mammalia",
    "cnt": 9,
    "percent": 0.009369144284821987
  },
  {
    "taxon": "Bulbophyllum bolsteri",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 9,
    "percent": 0.009369144284821987
  },
  {
    "taxon": "Trichechus senegalensis",
    "genus": "Trichechus",
    "family": "Trichechidae",
    "class": "Mammalia",
    "cnt": 9,
    "percent": 0.009369144284821987
  },
  {
    "taxon": "Pocillopora",
    "genus": "Pocillopora",
    "family": "Pocilloporidae",
    "class": "Anthozoa",
    "cnt": 9,
    "percent": 0.009369144284821987
  },
  {
    "taxon": "Gastrochilus calceolaris",
    "genus": "Gastrochilus",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 9,
    "percent": 0.009369144284821987
  },
  {
    "taxon": "Helarctos malayanus",
    "genus": "Helarctos",
    "family": "Ursidae",
    "class": "Mammalia",
    "cnt": 9,
    "percent": 0.009369144284821987
  },
  {
    "taxon": "Bulbophyllum cornutum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 9,
    "percent": 0.009369144284821987
  },
  {
    "taxon": "Bulbophyllum woelfliae",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 9,
    "percent": 0.009369144284821987
  },
  {
    "taxon": "Rebutia mentosa",
    "genus": "Rebutia",
    "family": "Cactaceae",
    "class": "",
    "cnt": 9,
    "percent": 0.009369144284821987
  },
  {
    "taxon": "Millepora",
    "genus": "Millepora",
    "family": "Milleporidae",
    "class": "Hydrozoa",
    "cnt": 9,
    "percent": 0.009369144284821987
  },
  {
    "taxon": "Phaius philippinensis",
    "genus": "Phaius",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 8,
    "percent": 0.0083281282531751
  },
  {
    "taxon": "Pithecophaga jefferyi",
    "genus": "Pithecophaga",
    "family": "Accipitridae",
    "class": "Aves",
    "cnt": 8,
    "percent": 0.0083281282531751
  },
  {
    "taxon": "Thrixspermum centipeda",
    "genus": "Thrixspermum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 8,
    "percent": 0.0083281282531751
  },
  {
    "taxon": "Rebutia pygmaea",
    "genus": "Rebutia",
    "family": "Cactaceae",
    "class": "",
    "cnt": 8,
    "percent": 0.0083281282531751
  },
  {
    "taxon": "Leopardus pardalis",
    "genus": "Leopardus",
    "family": "Felidae",
    "class": "Mammalia",
    "cnt": 8,
    "percent": 0.0083281282531751
  },
  {
    "taxon": "Trichotosia vulpina",
    "genus": "Trichotosia",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 8,
    "percent": 0.0083281282531751
  },
  {
    "taxon": "Thelasis pygmaea",
    "genus": "Thelasis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 8,
    "percent": 0.0083281282531751
  },
  {
    "taxon": "Thecostele alata",
    "genus": "Thecostele",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 8,
    "percent": 0.0083281282531751
  },
  {
    "taxon": "Amazona vinacea",
    "genus": "Amazona",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 8,
    "percent": 0.0083281282531751
  },
  {
    "taxon": "Coelogyne longirachis",
    "genus": "Coelogyne",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 8,
    "percent": 0.0083281282531751
  },
  {
    "taxon": "Matucana formosa",
    "genus": "Matucana",
    "family": "Cactaceae",
    "class": "",
    "cnt": 8,
    "percent": 0.0083281282531751
  },
  {
    "taxon": "Arisaema tortuosum",
    "genus": "Arisaema",
    "family": "Araceae",
    "class": "",
    "cnt": 8,
    "percent": 0.0083281282531751
  },
  {
    "taxon": "Aratinga aurea",
    "genus": "Aratinga",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 8,
    "percent": 0.0083281282531751
  },
  {
    "taxon": "Goura cristata",
    "genus": "Goura",
    "family": "Columbidae",
    "class": "Aves",
    "cnt": 8,
    "percent": 0.0083281282531751
  },
  {
    "taxon": "Ascocentrum miniatum",
    "genus": "Ascocentrum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 8,
    "percent": 0.0083281282531751
  },
  {
    "taxon": "Crocodylia",
    "genus": "",
    "family": "",
    "class": "Reptilia",
    "cnt": 8,
    "percent": 0.0083281282531751
  },
  {
    "taxon": "Antipathes",
    "genus": "Antipathes",
    "family": "Antipathidae",
    "class": "Anthozoa",
    "cnt": 8,
    "percent": 0.0083281282531751
  },
  {
    "taxon": "Mesoplodon densirostris",
    "genus": "Mesoplodon",
    "family": "Ziphiidae",
    "class": "Mammalia",
    "cnt": 8,
    "percent": 0.0083281282531751
  },
  {
    "taxon": "Trichoglossus johnstoniae",
    "genus": "Trichoglossus",
    "family": "Loriidae",
    "class": "Aves",
    "cnt": 8,
    "percent": 0.0083281282531751
  },
  {
    "taxon": "Bulbophyllum mindanaense",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 8,
    "percent": 0.0083281282531751
  },
  {
    "taxon": "Bulbophyllum membranifolium",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 8,
    "percent": 0.0083281282531751
  },
  {
    "taxon": "Oncidium hybrid",
    "genus": "Oncidium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 8,
    "percent": 0.0083281282531751
  },
  {
    "taxon": "Anthracoceros albirostris",
    "genus": "Anthracoceros",
    "family": "Bucerotidae",
    "class": "Aves",
    "cnt": 8,
    "percent": 0.0083281282531751
  },
  {
    "taxon": "Varanus cumingi",
    "genus": "Varanus",
    "family": "Varanidae",
    "class": "Reptilia",
    "cnt": 8,
    "percent": 0.0083281282531751
  },
  {
    "taxon": "Delphinus capensis",
    "genus": "Delphinus",
    "family": "Delphinidae",
    "class": "Mammalia",
    "cnt": 8,
    "percent": 0.0083281282531751
  },
  {
    "taxon": "Phaius tankervilliae",
    "genus": "Phaius",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 8,
    "percent": 0.0083281282531751
  },
  {
    "taxon": "Pocillopora verrucosa",
    "genus": "Pocillopora",
    "family": "Pocilloporidae",
    "class": "Anthozoa",
    "cnt": 8,
    "percent": 0.0083281282531751
  },
  {
    "taxon": "Malleola",
    "genus": "Malleola",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 8,
    "percent": 0.0083281282531751
  },
  {
    "taxon": "Echinopsis arachnacantha",
    "genus": "Echinopsis",
    "family": "Cactaceae",
    "class": "",
    "cnt": 8,
    "percent": 0.0083281282531751
  },
  {
    "taxon": "Bulbophyllum cleistogamum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 8,
    "percent": 0.0083281282531751
  },
  {
    "taxon": "Acropora florida",
    "genus": "Acropora",
    "family": "Acroporidae",
    "class": "Anthozoa",
    "cnt": 7,
    "percent": 0.007287112221528212
  },
  {
    "taxon": "Afrormosia",
    "genus": "Afrormosia",
    "family": "Leguminosae",
    "class": "",
    "cnt": 7,
    "percent": 0.007287112221528212
  },
  {
    "taxon": "Canis aureus",
    "genus": "Canis",
    "family": "Canidae",
    "class": "Mammalia",
    "cnt": 7,
    "percent": 0.007287112221528212
  },
  {
    "taxon": "Furcifer rhinoceratus",
    "genus": "Furcifer",
    "family": "Chamaeleonidae",
    "class": "Reptilia",
    "cnt": 7,
    "percent": 0.007287112221528212
  },
  {
    "taxon": "Pterocarpus santalinus",
    "genus": "Pterocarpus",
    "family": "Leguminosae",
    "class": "",
    "cnt": 7,
    "percent": 0.007287112221528212
  },
  {
    "taxon": "Liparis viridiflora",
    "genus": "Liparis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 7,
    "percent": 0.007287112221528212
  },
  {
    "taxon": "Rhinoceros unicornis",
    "genus": "Rhinoceros",
    "family": "Rhinocerotidae",
    "class": "Mammalia",
    "cnt": 7,
    "percent": 0.007287112221528212
  },
  {
    "taxon": "Dendrobium finisterrae",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 7,
    "percent": 0.007287112221528212
  },
  {
    "taxon": "Hyperoodon ampullatus",
    "genus": "Hyperoodon",
    "family": "Ziphiidae",
    "class": "Mammalia",
    "cnt": 7,
    "percent": 0.007287112221528212
  },
  {
    "taxon": "Neophocaena phocaenoides",
    "genus": "Neophocaena",
    "family": "Phocoenidae",
    "class": "Mammalia",
    "cnt": 7,
    "percent": 0.007287112221528212
  },
  {
    "taxon": "Copiapoa humilis",
    "genus": "Copiapoa",
    "family": "Cactaceae",
    "class": "",
    "cnt": 7,
    "percent": 0.007287112221528212
  },
  {
    "taxon": "Bulbophyllum recurvilabre",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 7,
    "percent": 0.007287112221528212
  },
  {
    "taxon": "Eubalaena japonica",
    "genus": "Eubalaena",
    "family": "Balaenidae",
    "class": "Mammalia",
    "cnt": 7,
    "percent": 0.007287112221528212
  },
  {
    "taxon": "Bulbophyllum stellatum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 7,
    "percent": 0.007287112221528212
  },
  {
    "taxon": "Kinixys erosa",
    "genus": "Kinixys",
    "family": "Testudinidae",
    "class": "Reptilia",
    "cnt": 7,
    "percent": 0.007287112221528212
  },
  {
    "taxon": "Kinixys homeana",
    "genus": "Kinixys",
    "family": "Testudinidae",
    "class": "Reptilia",
    "cnt": 7,
    "percent": 0.007287112221528212
  },
  {
    "taxon": "Phelsuma mutabilis",
    "genus": "Phelsuma",
    "family": "Gekkonidae",
    "class": "Reptilia",
    "cnt": 7,
    "percent": 0.007287112221528212
  },
  {
    "taxon": "Vanilla",
    "genus": "Vanilla",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 7,
    "percent": 0.007287112221528212
  },
  {
    "taxon": "Bulbophyllum williamsii",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 7,
    "percent": 0.007287112221528212
  },
  {
    "taxon": "Bulbophyllum cupreum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 7,
    "percent": 0.007287112221528212
  },
  {
    "taxon": "Arisaema speciosum",
    "genus": "Arisaema",
    "family": "Araceae",
    "class": "",
    "cnt": 7,
    "percent": 0.007287112221528212
  },
  {
    "taxon": "Paphiopedilum",
    "genus": "Paphiopedilum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 7,
    "percent": 0.007287112221528212
  },
  {
    "taxon": "Gymnocalycium",
    "genus": "Gymnocalycium",
    "family": "Cactaceae",
    "class": "",
    "cnt": 7,
    "percent": 0.007287112221528212
  },
  {
    "taxon": "Stenella",
    "genus": "Stenella",
    "family": "Delphinidae",
    "class": "Mammalia",
    "cnt": 7,
    "percent": 0.007287112221528212
  },
  {
    "taxon": "Lagenorhynchus acutus",
    "genus": "Lagenorhynchus",
    "family": "Delphinidae",
    "class": "Mammalia",
    "cnt": 7,
    "percent": 0.007287112221528212
  },
  {
    "taxon": "Acipenser sturio",
    "genus": "Acipenser",
    "family": "Acipenseridae",
    "class": "Actinopteri",
    "cnt": 7,
    "percent": 0.007287112221528212
  },
  {
    "taxon": "Pocillopora meandrina",
    "genus": "Pocillopora",
    "family": "Pocilloporidae",
    "class": "Anthozoa",
    "cnt": 7,
    "percent": 0.007287112221528212
  },
  {
    "taxon": "Lophocebus aterrimus",
    "genus": "Lophocebus",
    "family": "Cercopithecidae",
    "class": "Mammalia",
    "cnt": 7,
    "percent": 0.007287112221528212
  },
  {
    "taxon": "Bulbophyllum cephalophorum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 7,
    "percent": 0.007287112221528212
  },
  {
    "taxon": "Echinopsis ancistrophora",
    "genus": "Echinopsis",
    "family": "Cactaceae",
    "class": "",
    "cnt": 7,
    "percent": 0.007287112221528212
  },
  {
    "taxon": "Ludisia discolor",
    "genus": "Ludisia",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 7,
    "percent": 0.007287112221528212
  },
  {
    "taxon": "Fungia",
    "genus": "Fungia",
    "family": "Fungiidae",
    "class": "Anthozoa",
    "cnt": 7,
    "percent": 0.007287112221528212
  },
  {
    "taxon": "Arisaema nepenthoides",
    "genus": "Arisaema",
    "family": "Araceae",
    "class": "",
    "cnt": 7,
    "percent": 0.007287112221528212
  },
  {
    "taxon": "Luisia",
    "genus": "Luisia",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 7,
    "percent": 0.007287112221528212
  },
  {
    "taxon": "Dendrochilum macranthum",
    "genus": "Dendrochilum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 7,
    "percent": 0.007287112221528212
  },
  {
    "taxon": "Arisaema galeatum",
    "genus": "Arisaema",
    "family": "Araceae",
    "class": "",
    "cnt": 7,
    "percent": 0.007287112221528212
  },
  {
    "taxon": "Feresa attenuata",
    "genus": "Feresa",
    "family": "Delphinidae",
    "class": "Mammalia",
    "cnt": 7,
    "percent": 0.007287112221528212
  },
  {
    "taxon": "Acerodon jubatus",
    "genus": "Acerodon",
    "family": "Pteropodidae",
    "class": "Mammalia",
    "cnt": 7,
    "percent": 0.007287112221528212
  },
  {
    "taxon": "Moschus",
    "genus": "Moschus",
    "family": "Moschidae",
    "class": "Mammalia",
    "cnt": 7,
    "percent": 0.007287112221528212
  },
  {
    "taxon": "Rebutia steinbachii",
    "genus": "Rebutia",
    "family": "Cactaceae",
    "class": "",
    "cnt": 7,
    "percent": 0.007287112221528212
  },
  {
    "taxon": "Appendicula buxifolia",
    "genus": "Appendicula",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 7,
    "percent": 0.007287112221528212
  },
  {
    "taxon": "Varanus olivaceus",
    "genus": "Varanus",
    "family": "Varanidae",
    "class": "Reptilia",
    "cnt": 7,
    "percent": 0.007287112221528212
  },
  {
    "taxon": "Cymbidium ensifolium",
    "genus": "Cymbidium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 7,
    "percent": 0.007287112221528212
  },
  {
    "taxon": "Tarsius syrichta",
    "genus": "Tarsius",
    "family": "Tarsiidae",
    "class": "Mammalia",
    "cnt": 7,
    "percent": 0.007287112221528212
  },
  {
    "taxon": "Cercopithecus neglectus",
    "genus": "Cercopithecus",
    "family": "Cercopithecidae",
    "class": "Mammalia",
    "cnt": 7,
    "percent": 0.007287112221528212
  },
  {
    "taxon": "Pteroglossus castanotis",
    "genus": "Pteroglossus",
    "family": "Ramphastidae",
    "class": "Aves",
    "cnt": 7,
    "percent": 0.007287112221528212
  },
  {
    "taxon": "Chelonistele sulphurea",
    "genus": "Chelonistele",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 7,
    "percent": 0.007287112221528212
  },
  {
    "taxon": "Tanygnathus sumatranus",
    "genus": "Tanygnathus",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 7,
    "percent": 0.007287112221528212
  },
  {
    "taxon": "Tridacna crocea",
    "genus": "Tridacna",
    "family": "Tridacnidae",
    "class": "Bivalvia",
    "cnt": 6,
    "percent": 0.006246096189881324
  },
  {
    "taxon": "Cirrhipathes",
    "genus": "Cirrhipathes",
    "family": "Antipathidae",
    "class": "Anthozoa",
    "cnt": 6,
    "percent": 0.006246096189881324
  },
  {
    "taxon": "Phalaenopsis violacea",
    "genus": "Phalaenopsis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 6,
    "percent": 0.006246096189881324
  },
  {
    "taxon": "Matucana aureiflora",
    "genus": "Matucana",
    "family": "Cactaceae",
    "class": "",
    "cnt": 6,
    "percent": 0.006246096189881324
  },
  {
    "taxon": "Matucana krahnii",
    "genus": "Matucana",
    "family": "Cactaceae",
    "class": "",
    "cnt": 6,
    "percent": 0.006246096189881324
  },
  {
    "taxon": "Echinopsis bridgesii",
    "genus": "Echinopsis",
    "family": "Cactaceae",
    "class": "",
    "cnt": 6,
    "percent": 0.006246096189881324
  },
  {
    "taxon": "Malaxis acuminata",
    "genus": "Malaxis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 6,
    "percent": 0.006246096189881324
  },
  {
    "taxon": "Phalaenopsis deliciosa",
    "genus": "Phalaenopsis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 6,
    "percent": 0.006246096189881324
  },
  {
    "taxon": "Cleisostoma williamsonii",
    "genus": "Cleisostoma",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 6,
    "percent": 0.006246096189881324
  },
  {
    "taxon": "Psittacula columboides",
    "genus": "Psittacula",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 6,
    "percent": 0.006246096189881324
  },
  {
    "taxon": "Rhipsalis pilocarpa",
    "genus": "Rhipsalis",
    "family": "Cactaceae",
    "class": "",
    "cnt": 6,
    "percent": 0.006246096189881324
  },
  {
    "taxon": "Rhynchostylis",
    "genus": "Rhynchostylis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 6,
    "percent": 0.006246096189881324
  },
  {
    "taxon": "Coelogyne remediosiae",
    "genus": "Coelogyne",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 6,
    "percent": 0.006246096189881324
  },
  {
    "taxon": "Bulbophyllum sibuyanense",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 6,
    "percent": 0.006246096189881324
  },
  {
    "taxon": "Acropora hyacinthus",
    "genus": "Acropora",
    "family": "Acroporidae",
    "class": "Anthozoa",
    "cnt": 6,
    "percent": 0.006246096189881324
  },
  {
    "taxon": "Copiapoa serpentisulcata",
    "genus": "Copiapoa",
    "family": "Cactaceae",
    "class": "",
    "cnt": 6,
    "percent": 0.006246096189881324
  },
  {
    "taxon": "Hippocampus",
    "genus": "Hippocampus",
    "family": "Syngnathidae",
    "class": "Actinopteri",
    "cnt": 6,
    "percent": 0.006246096189881324
  },
  {
    "taxon": "Ceratozamia",
    "genus": "Ceratozamia",
    "family": "Zamiaceae",
    "class": "",
    "cnt": 6,
    "percent": 0.006246096189881324
  },
  {
    "taxon": "Pyrrhura cruentata",
    "genus": "Pyrrhura",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 6,
    "percent": 0.006246096189881324
  },
  {
    "taxon": "Bulbophyllum piestoglossum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 6,
    "percent": 0.006246096189881324
  },
  {
    "taxon": "Pachyseris rugosa",
    "genus": "Pachyseris",
    "family": "Agariciidae",
    "class": "Anthozoa",
    "cnt": 6,
    "percent": 0.006246096189881324
  },
  {
    "taxon": "Cephalophus ogilbyi",
    "genus": "Cephalophus",
    "family": "Bovidae",
    "class": "Mammalia",
    "cnt": 6,
    "percent": 0.006246096189881324
  },
  {
    "taxon": "Ramphastos vitellinus",
    "genus": "Ramphastos",
    "family": "Ramphastidae",
    "class": "Aves",
    "cnt": 6,
    "percent": 0.006246096189881324
  },
  {
    "taxon": "Acropora humilis",
    "genus": "Acropora",
    "family": "Acroporidae",
    "class": "Anthozoa",
    "cnt": 6,
    "percent": 0.006246096189881324
  },
  {
    "taxon": "Cumulopuntia boliviana",
    "genus": "Cumulopuntia",
    "family": "Cactaceae",
    "class": "",
    "cnt": 6,
    "percent": 0.006246096189881324
  },
  {
    "taxon": "Cercopithecus nictitans",
    "genus": "Cercopithecus",
    "family": "Cercopithecidae",
    "class": "Mammalia",
    "cnt": 6,
    "percent": 0.006246096189881324
  },
  {
    "taxon": "Bulbophyllum echinochilum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 6,
    "percent": 0.006246096189881324
  },
  {
    "taxon": "Dendrobium boosii",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 6,
    "percent": 0.006246096189881324
  },
  {
    "taxon": "Dendrobium conanthum",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 6,
    "percent": 0.006246096189881324
  },
  {
    "taxon": "Paphiopedilum sukhakulii",
    "genus": "Paphiopedilum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 6,
    "percent": 0.006246096189881324
  },
  {
    "taxon": "Pocillopora eydouxi",
    "genus": "Pocillopora",
    "family": "Pocilloporidae",
    "class": "Anthozoa",
    "cnt": 6,
    "percent": 0.006246096189881324
  },
  {
    "taxon": "Bulbophyllum chrysendetum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 6,
    "percent": 0.006246096189881324
  },
  {
    "taxon": "Flickingeria fimbriata",
    "genus": "Flickingeria",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 6,
    "percent": 0.006246096189881324
  },
  {
    "taxon": "Turbinaria reniformis",
    "genus": "Turbinaria",
    "family": "Dendrophylliidae",
    "class": "Anthozoa",
    "cnt": 6,
    "percent": 0.006246096189881324
  },
  {
    "taxon": "Appendicula anceps",
    "genus": "Appendicula",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 6,
    "percent": 0.006246096189881324
  },
  {
    "taxon": "Dendrobium henryi",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 6,
    "percent": 0.006246096189881324
  },
  {
    "taxon": "Turbinaria",
    "genus": "Turbinaria",
    "family": "Dendrophylliidae",
    "class": "Anthozoa",
    "cnt": 6,
    "percent": 0.006246096189881324
  },
  {
    "taxon": "Chalcopsitta atra",
    "genus": "Chalcopsitta",
    "family": "Loriidae",
    "class": "Aves",
    "cnt": 6,
    "percent": 0.006246096189881324
  },
  {
    "taxon": "Bromheadia devogelii",
    "genus": "Bromheadia",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 6,
    "percent": 0.006246096189881324
  },
  {
    "taxon": "Dendrobium ochraceum",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 6,
    "percent": 0.006246096189881324
  },
  {
    "taxon": "Leopardus colocolo",
    "genus": "Leopardus",
    "family": "Felidae",
    "class": "Mammalia",
    "cnt": 6,
    "percent": 0.006246096189881324
  },
  {
    "taxon": "Balearica regulorum",
    "genus": "Balearica",
    "family": "Gruidae",
    "class": "Aves",
    "cnt": 6,
    "percent": 0.006246096189881324
  },
  {
    "taxon": "Dendrobium subulatum",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 6,
    "percent": 0.006246096189881324
  },
  {
    "taxon": "Haliastur indus",
    "genus": "Haliastur",
    "family": "Accipitridae",
    "class": "Aves",
    "cnt": 6,
    "percent": 0.006246096189881324
  },
  {
    "taxon": "Pholidota ventricosa",
    "genus": "Pholidota",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 6,
    "percent": 0.006246096189881324
  },
  {
    "taxon": "Dendrobium velutinelabrum",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 6,
    "percent": 0.006246096189881324
  },
  {
    "taxon": "Pholidota articulata",
    "genus": "Pholidota",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 6,
    "percent": 0.006246096189881324
  },
  {
    "taxon": "Eulophia spectabilis",
    "genus": "Eulophia",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 6,
    "percent": 0.006246096189881324
  },
  {
    "taxon": "Calanthe vestita",
    "genus": "Calanthe",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 6,
    "percent": 0.006246096189881324
  },
  {
    "taxon": "Halomitra pileus",
    "genus": "Halomitra",
    "family": "Fungiidae",
    "class": "Anthozoa",
    "cnt": 6,
    "percent": 0.006246096189881324
  },
  {
    "taxon": "Calanthe mcgregorii",
    "genus": "Calanthe",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 6,
    "percent": 0.006246096189881324
  },
  {
    "taxon": "Amazona dufresniana",
    "genus": "Amazona",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 6,
    "percent": 0.006246096189881324
  },
  {
    "taxon": "Dendrochilum undulatum",
    "genus": "Dendrochilum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 6,
    "percent": 0.006246096189881324
  },
  {
    "taxon": "Flickingeria luxurians",
    "genus": "Flickingeria",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 5,
    "percent": 0.005205080158234437
  },
  {
    "taxon": "Dendrobium chrysotoxum",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 5,
    "percent": 0.005205080158234437
  },
  {
    "taxon": "Tyto capensis",
    "genus": "Tyto",
    "family": "Tytonidae",
    "class": "Aves",
    "cnt": 5,
    "percent": 0.005205080158234437
  },
  {
    "taxon": "Myrmecophaga tridactyla",
    "genus": "Myrmecophaga",
    "family": "Myrmecophagidae",
    "class": "Mammalia",
    "cnt": 5,
    "percent": 0.005205080158234437
  },
  {
    "taxon": "Vanda limbata",
    "genus": "Vanda",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 5,
    "percent": 0.005205080158234437
  },
  {
    "taxon": "Acropora cerealis",
    "genus": "Acropora",
    "family": "Acroporidae",
    "class": "Anthozoa",
    "cnt": 5,
    "percent": 0.005205080158234437
  },
  {
    "taxon": "Pteroceras leopardinum",
    "genus": "Pteroceras",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 5,
    "percent": 0.005205080158234437
  },
  {
    "taxon": "Acanthophippium mantinianum",
    "genus": "Acanthophippium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 5,
    "percent": 0.005205080158234437
  },
  {
    "taxon": "Phreatia",
    "genus": "Phreatia",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 5,
    "percent": 0.005205080158234437
  },
  {
    "taxon": "Podochilus lucescens",
    "genus": "Podochilus",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 5,
    "percent": 0.005205080158234437
  },
  {
    "taxon": "Calumma crypticum",
    "genus": "Calumma",
    "family": "Chamaeleonidae",
    "class": "Reptilia",
    "cnt": 5,
    "percent": 0.005205080158234437
  },
  {
    "taxon": "Dendrobium uncatum",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 5,
    "percent": 0.005205080158234437
  },
  {
    "taxon": "Echinopsis aurea",
    "genus": "Echinopsis",
    "family": "Cactaceae",
    "class": "",
    "cnt": 5,
    "percent": 0.005205080158234437
  },
  {
    "taxon": "Dendrochilum vanoverberghii",
    "genus": "Dendrochilum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 5,
    "percent": 0.005205080158234437
  },
  {
    "taxon": "Cereus",
    "genus": "Cereus",
    "family": "Cactaceae",
    "class": "",
    "cnt": 5,
    "percent": 0.005205080158234437
  },
  {
    "taxon": "Dalbergia",
    "genus": "Dalbergia",
    "family": "Leguminosae",
    "class": "",
    "cnt": 5,
    "percent": 0.005205080158234437
  },
  {
    "taxon": "Bulbophyllum lemniscatoides",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 5,
    "percent": 0.005205080158234437
  },
  {
    "taxon": "Naja philippinensis",
    "genus": "Naja",
    "family": "Elapidae",
    "class": "Reptilia",
    "cnt": 5,
    "percent": 0.005205080158234437
  },
  {
    "taxon": "Oncidium",
    "genus": "Oncidium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 5,
    "percent": 0.005205080158234437
  },
  {
    "taxon": "Cymbidium bicolor",
    "genus": "Cymbidium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 5,
    "percent": 0.005205080158234437
  },
  {
    "taxon": "Grosourdya",
    "genus": "Grosourdya",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 5,
    "percent": 0.005205080158234437
  },
  {
    "taxon": "Tubastraea",
    "genus": "Tubastraea",
    "family": "Dendrophylliidae",
    "class": "Anthozoa",
    "cnt": 5,
    "percent": 0.005205080158234437
  },
  {
    "taxon": "Mesoplodon europaeus",
    "genus": "Mesoplodon",
    "family": "Ziphiidae",
    "class": "Mammalia",
    "cnt": 5,
    "percent": 0.005205080158234437
  },
  {
    "taxon": "Ascoglossum calopterum",
    "genus": "Ascoglossum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 5,
    "percent": 0.005205080158234437
  },
  {
    "taxon": "Vanda scandens",
    "genus": "Vanda",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 5,
    "percent": 0.005205080158234437
  },
  {
    "taxon": "Tuberolabium guamense",
    "genus": "Tuberolabium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 5,
    "percent": 0.005205080158234437
  },
  {
    "taxon": "Merulina ampliata",
    "genus": "Merulina",
    "family": "Merulinidae",
    "class": "Anthozoa",
    "cnt": 5,
    "percent": 0.005205080158234437
  },
  {
    "taxon": "Hippocampus algiricus",
    "genus": "Hippocampus",
    "family": "Syngnathidae",
    "class": "Actinopteri",
    "cnt": 5,
    "percent": 0.005205080158234437
  },
  {
    "taxon": "Dendrochilum curranii",
    "genus": "Dendrochilum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 5,
    "percent": 0.005205080158234437
  },
  {
    "taxon": "Phaius tancarvilliae",
    "genus": "Phaius",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 5,
    "percent": 0.005205080158234437
  },
  {
    "taxon": "Tuberolabium brevirhachis",
    "genus": "Tuberolabium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 5,
    "percent": 0.005205080158234437
  },
  {
    "taxon": "Primolius maracana",
    "genus": "Primolius",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 5,
    "percent": 0.005205080158234437
  },
  {
    "taxon": "Otus longicornis",
    "genus": "Otus",
    "family": "Strigidae",
    "class": "Aves",
    "cnt": 5,
    "percent": 0.005205080158234437
  },
  {
    "taxon": "Tubastraea micranthus",
    "genus": "Tubastraea",
    "family": "Dendrophylliidae",
    "class": "Anthozoa",
    "cnt": 5,
    "percent": 0.005205080158234437
  },
  {
    "taxon": "Grammatophyllum ravanii",
    "genus": "Grammatophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 5,
    "percent": 0.005205080158234437
  },
  {
    "taxon": "Psittaciformes",
    "genus": "",
    "family": "",
    "class": "Aves",
    "cnt": 5,
    "percent": 0.005205080158234437
  },
  {
    "taxon": "Ceratostylis subulata",
    "genus": "Ceratostylis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 5,
    "percent": 0.005205080158234437
  },
  {
    "taxon": "Cephalorhynchus hectori",
    "genus": "Cephalorhynchus",
    "family": "Delphinidae",
    "class": "Mammalia",
    "cnt": 5,
    "percent": 0.005205080158234437
  },
  {
    "taxon": "Epidendrum",
    "genus": "Epidendrum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 5,
    "percent": 0.005205080158234437
  },
  {
    "taxon": "Aquilaria",
    "genus": "Aquilaria",
    "family": "Thymelaeaceae",
    "class": "",
    "cnt": 5,
    "percent": 0.005205080158234437
  },
  {
    "taxon": "Encephalartos",
    "genus": "Encephalartos",
    "family": "Zamiaceae",
    "class": "",
    "cnt": 5,
    "percent": 0.005205080158234437
  },
  {
    "taxon": "Elleanthus",
    "genus": "Elleanthus",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 5,
    "percent": 0.005205080158234437
  },
  {
    "taxon": "Ramphastos tucanus",
    "genus": "Ramphastos",
    "family": "Ramphastidae",
    "class": "Aves",
    "cnt": 5,
    "percent": 0.005205080158234437
  },
  {
    "taxon": "Echinopsis spiniflora",
    "genus": "Echinopsis",
    "family": "Cactaceae",
    "class": "",
    "cnt": 5,
    "percent": 0.005205080158234437
  },
  {
    "taxon": "Epidendrum hybrid",
    "genus": "Epidendrum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 5,
    "percent": 0.005205080158234437
  },
  {
    "taxon": "Lepilemur",
    "genus": "Lepilemur",
    "family": "Lepilemuridae",
    "class": "Mammalia",
    "cnt": 5,
    "percent": 0.005205080158234437
  },
  {
    "taxon": "Dendrophyllia",
    "genus": "Dendrophyllia",
    "family": "Dendrophylliidae",
    "class": "Anthozoa",
    "cnt": 5,
    "percent": 0.005205080158234437
  },
  {
    "taxon": "Dermochelys coriacea",
    "genus": "Dermochelys",
    "family": "Dermochelyidae",
    "class": "Reptilia",
    "cnt": 5,
    "percent": 0.005205080158234437
  },
  {
    "taxon": "Eryx jaculus",
    "genus": "Eryx",
    "family": "Boidae",
    "class": "Reptilia",
    "cnt": 5,
    "percent": 0.005205080158234437
  },
  {
    "taxon": "Dendrobium philippinense",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 5,
    "percent": 0.005205080158234437
  },
  {
    "taxon": "Lagenorhynchus albirostris",
    "genus": "Lagenorhynchus",
    "family": "Delphinidae",
    "class": "Mammalia",
    "cnt": 5,
    "percent": 0.005205080158234437
  },
  {
    "taxon": "Erythrocebus patas",
    "genus": "Erythrocebus",
    "family": "Cercopithecidae",
    "class": "Mammalia",
    "cnt": 5,
    "percent": 0.005205080158234437
  },
  {
    "taxon": "Dendrobium pachyphyllum",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 5,
    "percent": 0.005205080158234437
  },
  {
    "taxon": "Echinopsis marsoneri",
    "genus": "Echinopsis",
    "family": "Cactaceae",
    "class": "",
    "cnt": 5,
    "percent": 0.005205080158234437
  },
  {
    "taxon": "Balearica pavonina",
    "genus": "Balearica",
    "family": "Gruidae",
    "class": "Aves",
    "cnt": 5,
    "percent": 0.005205080158234437
  },
  {
    "taxon": "Bos mutus",
    "genus": "Bos",
    "family": "Bovidae",
    "class": "Mammalia",
    "cnt": 5,
    "percent": 0.005205080158234437
  },
  {
    "taxon": "Acropora nobilis",
    "genus": "Acropora",
    "family": "Acroporidae",
    "class": "Anthozoa",
    "cnt": 5,
    "percent": 0.005205080158234437
  },
  {
    "taxon": "Dendrobium modestum",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 5,
    "percent": 0.005205080158234437
  },
  {
    "taxon": "Dendrobium milaniae",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 5,
    "percent": 0.005205080158234437
  },
  {
    "taxon": "Stereochilus",
    "genus": "Stereochilus",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 5,
    "percent": 0.005205080158234437
  },
  {
    "taxon": "Bulbophyllum blepharistes",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 5,
    "percent": 0.005205080158234437
  },
  {
    "taxon": "Chaetophractus nationi",
    "genus": "Chaetophractus",
    "family": "Dasypodidae",
    "class": "Mammalia",
    "cnt": 5,
    "percent": 0.005205080158234437
  },
  {
    "taxon": "Rhipsalis cereuscula",
    "genus": "Rhipsalis",
    "family": "Cactaceae",
    "class": "",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Ceratostylis mindanaensis",
    "genus": "Ceratostylis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Vanda lindeni",
    "genus": "Vanda",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Acropora palifera",
    "genus": "Acropora",
    "family": "Acroporidae",
    "class": "Anthozoa",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Vandopsis",
    "genus": "Vandopsis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Rhinoceros sondaicus",
    "genus": "Rhinoceros",
    "family": "Rhinocerotidae",
    "class": "Mammalia",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Calanthe hybrid",
    "genus": "Calanthe",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Cleisostoma chrysochilum",
    "genus": "Cleisostoma",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Acampe",
    "genus": "Acampe",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Cacatua ophthalmica",
    "genus": "Cacatua",
    "family": "Cacatuidae",
    "class": "Aves",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Rhipsalis mesembryanthemoides",
    "genus": "Rhipsalis",
    "family": "Cactaceae",
    "class": "",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Acropora latistella",
    "genus": "Acropora",
    "family": "Acroporidae",
    "class": "Anthozoa",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Robiquetia flammea",
    "genus": "Robiquetia",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Corryocactus",
    "genus": "Corryocactus",
    "family": "Cactaceae",
    "class": "",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Accipiter trivirgatus",
    "genus": "Accipiter",
    "family": "Accipitridae",
    "class": "Aves",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Sarcophyton",
    "genus": "Sarcophyton",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Gymnocalycium pflanzii",
    "genus": "Gymnocalycium",
    "family": "Cactaceae",
    "class": "",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Bulbophyllum penduliscapum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Crocodylus mindorensis",
    "genus": "Crocodylus",
    "family": "Crocodylidae",
    "class": "Reptilia",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Bulbophyllum ovalifolium",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Seleucidis melanoleucus",
    "genus": "Seleucidis",
    "family": "Paradisaeidae",
    "class": "Aves",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Bulbophyllum maculosum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Cymbidium hybrid",
    "genus": "Cymbidium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Cystorchis luzonensis",
    "genus": "Cystorchis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Spilornis cheela",
    "genus": "Spilornis",
    "family": "Accipitridae",
    "class": "Aves",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Delphinus",
    "genus": "Delphinus",
    "family": "Delphinidae",
    "class": "Mammalia",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Staurochilus leytensis",
    "genus": "Staurochilus",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Dendrobium clemensiae",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Dendrobium crassimarginatum",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Dendrobium cruentum",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Pleurothallis",
    "genus": "Pleurothallis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Platanista gangetica",
    "genus": "Platanista",
    "family": "Platanistidae",
    "class": "Mammalia",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Pionus senilis",
    "genus": "Pionus",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Tupaia everetti",
    "genus": "Tupaia",
    "family": "Tupaiidae",
    "class": "Mammalia",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Zeuxine",
    "genus": "Zeuxine",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Dendrobium moschatum",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Varanus nuchalis",
    "genus": "Varanus",
    "family": "Varanidae",
    "class": "Reptilia",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Testudinidae",
    "genus": "",
    "family": "Testudinidae",
    "class": "Reptilia",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Balaenidae",
    "genus": "",
    "family": "Balaenidae",
    "class": "Mammalia",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Pilophyllum villosum",
    "genus": "Pilophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Dendrobium stellare",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Tillandsia hybrid",
    "genus": "Tillandsia",
    "family": "Bromeliaceae",
    "class": "",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Dendrobium tortile",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Phragmipedium",
    "genus": "Phragmipedium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Tolumnia",
    "genus": "Tolumnia",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Pholidota",
    "genus": "",
    "family": "",
    "class": "Mammalia",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Dendrobium ypsilon",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Dendrochilum coccineum",
    "genus": "Dendrochilum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Trichoglottis calochila",
    "genus": "Trichoglottis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Philantomba monticola",
    "genus": "Philantomba",
    "family": "Bovidae",
    "class": "Mammalia",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Dendrochilum kopfii",
    "genus": "Dendrochilum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Dendrochilum longifolium",
    "genus": "Dendrochilum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Amazona brasiliensis",
    "genus": "Amazona",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Dendrochilum woodianum",
    "genus": "Dendrochilum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Amazona hybrid",
    "genus": "Amazona",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Phelsuma breviceps",
    "genus": "Phelsuma",
    "family": "Gekkonidae",
    "class": "Reptilia",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Phelsuma abbotti",
    "genus": "Phelsuma",
    "family": "Gekkonidae",
    "class": "Reptilia",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Disa hybrid",
    "genus": "Disa",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Maxillaria",
    "genus": "Maxillaria",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Phalaenopsis micholitzii",
    "genus": "Phalaenopsis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Echinopsis hertrichiana",
    "genus": "Echinopsis",
    "family": "Cactaceae",
    "class": "",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Macaca nigra",
    "genus": "Macaca",
    "family": "Cercopithecidae",
    "class": "Mammalia",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Monachus",
    "genus": "Monachus",
    "family": "Phocidae",
    "class": "Mammalia",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Eria cootesii",
    "genus": "Eria",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Trionyx triunguis",
    "genus": "Trionyx",
    "family": "Trionychidae",
    "class": "Reptilia",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Espostoa lanata",
    "genus": "Espostoa",
    "family": "Cactaceae",
    "class": "",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Leopardus wiedii",
    "genus": "Leopardus",
    "family": "Felidae",
    "class": "Mammalia",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Ornithoptera priamus",
    "genus": "Ornithoptera",
    "family": "Papilionidae",
    "class": "Insecta",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Aceros waldeni",
    "genus": "Aceros",
    "family": "Bucerotidae",
    "class": "Aves",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Euphorbia",
    "genus": "Euphorbia",
    "family": "Euphorbiaceae",
    "class": "",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Lagenorhynchus obscurus",
    "genus": "Lagenorhynchus",
    "family": "Delphinidae",
    "class": "Mammalia",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Nephelaphyllum pulchrum",
    "genus": "Nephelaphyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Pecari tajacu",
    "genus": "Pecari",
    "family": "Tayassuidae",
    "class": "Mammalia",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Parapteroceras",
    "genus": "Parapteroceras",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Kinyongia tavetana",
    "genus": "Kinyongia",
    "family": "Chamaeleonidae",
    "class": "Reptilia",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Furcifer angeli",
    "genus": "Furcifer",
    "family": "Chamaeleonidae",
    "class": "Reptilia",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Indopacetus pacificus",
    "genus": "Indopacetus",
    "family": "Ziphiidae",
    "class": "Mammalia",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Furcifer nicosiai",
    "genus": "Furcifer",
    "family": "Chamaeleonidae",
    "class": "Reptilia",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Pantholops hodgsonii",
    "genus": "Pantholops",
    "family": "Bovidae",
    "class": "Mammalia",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Hylobates lar",
    "genus": "Hylobates",
    "family": "Hylobatidae",
    "class": "Mammalia",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Tuberolabium minutum",
    "genus": "Tuberolabium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Opuntia",
    "genus": "Opuntia",
    "family": "Cactaceae",
    "class": "",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Goura scheepmakeri",
    "genus": "Goura",
    "family": "Columbidae",
    "class": "Aves",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Antipatharia",
    "genus": "",
    "family": "",
    "class": "Anthozoa",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Oryx dammah",
    "genus": "Oryx",
    "family": "Bovidae",
    "class": "Mammalia",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Catopuma temminckii",
    "genus": "Catopuma",
    "family": "Felidae",
    "class": "Mammalia",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Cephalorhynchus eutropia",
    "genus": "Cephalorhynchus",
    "family": "Delphinidae",
    "class": "Mammalia",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Pyrrhura frontalis",
    "genus": "Pyrrhura",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "taxon": "Nepenthes burkei",
    "genus": "Nepenthes",
    "family": "Nepenthaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Nepenthes deaniana",
    "genus": "Nepenthes",
    "family": "Nepenthaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Aratinga leucophthalma",
    "genus": "Aratinga",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Arctocephalus pusillus",
    "genus": "Arctocephalus",
    "family": "Otariidae",
    "class": "Mammalia",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Dendrochilum simile",
    "genus": "Dendrochilum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Trichoglottis mindanaensis",
    "genus": "Trichoglottis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Prionailurus bengalensis bengalensis",
    "genus": "Prionailurus",
    "family": "Felidae",
    "class": "Mammalia",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Dendrochilum parvulum",
    "genus": "Dendrochilum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Dendrochilum pangasinanense",
    "genus": "Dendrochilum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Arisaema jacquemontii",
    "genus": "Arisaema",
    "family": "Araceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Trichoglottis chrysochila",
    "genus": "Trichoglottis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Phocoenoides dalli",
    "genus": "Phocoenoides",
    "family": "Phocoenidae",
    "class": "Mammalia",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Pholidota",
    "genus": "Pholidota",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Adenoncos major",
    "genus": "Adenoncos",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Dendrochilum apoense",
    "genus": "Dendrochilum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Coelogyne mooreana",
    "genus": "Coelogyne",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Rhizotrochus typus",
    "genus": "Rhizotrochus",
    "family": "Flabellidae",
    "class": "Anthozoa",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Acriopsis",
    "genus": "Acriopsis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Anthracoceros malayanus",
    "genus": "Anthracoceros",
    "family": "Bucerotidae",
    "class": "Aves",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Tolumnia hybrid",
    "genus": "Tolumnia",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Gyps fulvus",
    "genus": "Gyps",
    "family": "Accipitridae",
    "class": "Aves",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Balaenoptera",
    "genus": "Balaenoptera",
    "family": "Balaenopteridae",
    "class": "Mammalia",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Balanophyllia",
    "genus": "Balanophyllia",
    "family": "Dendrophylliidae",
    "class": "Anthozoa",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Phaius antoninae",
    "genus": "Phaius",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Thrixspermum acuminatissimum",
    "genus": "Thrixspermum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Berardius arnuxii",
    "genus": "Berardius",
    "family": "Ziphiidae",
    "class": "Mammalia",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Dendrobium pentapterum",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Calanthe conspicua",
    "genus": "Calanthe",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Acropora millepora",
    "genus": "Acropora",
    "family": "Acroporidae",
    "class": "Anthozoa",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Dendrobium parthenium",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Brachionidium",
    "genus": "Brachionidium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Pelatantheria",
    "genus": "Pelatantheria",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Buceros bicornis",
    "genus": "Buceros",
    "family": "Bucerotidae",
    "class": "Aves",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Favites",
    "genus": "Favites",
    "family": "Faviidae",
    "class": "Anthozoa",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Otochilus",
    "genus": "Otochilus",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Pavona decussata",
    "genus": "Pavona",
    "family": "Agariciidae",
    "class": "Anthozoa",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Parodia maassii",
    "genus": "Parodia",
    "family": "Cactaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Parodia erinacea",
    "genus": "Parodia",
    "family": "Cactaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Dendrobium lindleyi",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Dendrobium hymenopterum",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Caloenas nicobarica",
    "genus": "Caloenas",
    "family": "Columbidae",
    "class": "Aves",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Bulbophyllum carunculatum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Plocoglottis bicomata",
    "genus": "Plocoglottis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Haliotis midae",
    "genus": "Haliotis",
    "family": "Haliotidae",
    "class": "Gastropoda",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Tursiops",
    "genus": "Tursiops",
    "family": "Delphinidae",
    "class": "Mammalia",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Dendrobium davaoense",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Bulbophyllum coniferum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Parantipathes",
    "genus": "Parantipathes",
    "family": "Schizopathidae",
    "class": "Anthozoa",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Dendrobium crepidatum",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Dendrobium convallariiforme",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Paphiopedilum godefroyae",
    "genus": "Paphiopedilum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Paphiopedilum concolor",
    "genus": "Paphiopedilum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Ailuropoda melanoleuca",
    "genus": "Ailuropoda",
    "family": "Ursidae",
    "class": "Mammalia",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Stelis",
    "genus": "Stelis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Chelonistele",
    "genus": "Chelonistele",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Staurochilus luchuensis",
    "genus": "Staurochilus",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Dendrobium bellatulum",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Kingidium decumbens",
    "genus": "Kingidium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Oberonia hispidula",
    "genus": "Oberonia",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Renanthera hybrid",
    "genus": "Renanthera",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Rebutia albopectinata",
    "genus": "Rebutia",
    "family": "Cactaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Bulbophyllum debrincatiae",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Dendrobium archipelagense",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Bulbophyllum doryphoroide",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Dendrobium acutilingue",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Haliaeetus leucocephalus",
    "genus": "Haliaeetus",
    "family": "Accipitridae",
    "class": "Aves",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Bulbophyllum ecornutum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Acropora digitifera",
    "genus": "Acropora",
    "family": "Acroporidae",
    "class": "Anthozoa",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Bulbophyllum hybrid",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Galaxea",
    "genus": "Galaxea",
    "family": "Oculinidae",
    "class": "Anthozoa",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Acanthocereus tetragonus",
    "genus": "Acanthocereus",
    "family": "Cactaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Bulbophyllum leytense",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Gastrochilus",
    "genus": "Gastrochilus",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Cyphastrea",
    "genus": "Cyphastrea",
    "family": "Faviidae",
    "class": "Anthozoa",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Pythonidae",
    "genus": "",
    "family": "Pythonidae",
    "class": "Reptilia",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Oeceoclades pulchra",
    "genus": "Oeceoclades",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Bulbophyllum mastersianum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Bulbophyllum membranaceum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Bulbophyllum negrosianum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Hippotragus niger",
    "genus": "Hippotragus",
    "family": "Bovidae",
    "class": "Mammalia",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Cuora mouhotii",
    "genus": "Cuora",
    "family": "Geoemydidae",
    "class": "Reptilia",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Rebutia neocumingii",
    "genus": "Rebutia",
    "family": "Cactaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Opuntia pubescens",
    "genus": "Opuntia",
    "family": "Cactaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Hippocampus histrix",
    "genus": "Hippocampus",
    "family": "Syngnathidae",
    "class": "Actinopteri",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Bulbophyllum odoratissimum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Pan paniscus",
    "genus": "Pan",
    "family": "Hominidae",
    "class": "Mammalia",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Primates",
    "genus": "",
    "family": "",
    "class": "Mammalia",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Goniopora",
    "genus": "Goniopora",
    "family": "Poritidae",
    "class": "Anthozoa",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Crocodylus",
    "genus": "Crocodylus",
    "family": "Crocodylidae",
    "class": "Reptilia",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Crepidium",
    "genus": "Crepidium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Corymborkis",
    "genus": "Corymborkis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Sarcoglyphis",
    "genus": "Sarcoglyphis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Bulbophyllum radicans",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Priodontes maximus",
    "genus": "Priodontes",
    "family": "Dasypodidae",
    "class": "Mammalia",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Rebutia einsteinii",
    "genus": "Rebutia",
    "family": "Cactaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Robiquetia enigma",
    "genus": "Robiquetia",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Puma yagouaroundi",
    "genus": "Puma",
    "family": "Felidae",
    "class": "Mammalia",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Epicranthes",
    "genus": "Epicranthes",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Phalaenopsis leucorrhoda",
    "genus": "Phalaenopsis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Microcebus",
    "genus": "Microcebus",
    "family": "Cheirogaleidae",
    "class": "Mammalia",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Mesoplodon hectori",
    "genus": "Mesoplodon",
    "family": "Ziphiidae",
    "class": "Mammalia",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Malaxis",
    "genus": "Malaxis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Mycaranthes vanoverberghii",
    "genus": "Mycaranthes",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Equus africanus",
    "genus": "Equus",
    "family": "Equidae",
    "class": "Mammalia",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Echinopsis lateritia",
    "genus": "Echinopsis",
    "family": "Cactaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Amazona tucumana",
    "genus": "Amazona",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Mesoplodon grayi",
    "genus": "Mesoplodon",
    "family": "Ziphiidae",
    "class": "Mammalia",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Echinopora",
    "genus": "Echinopora",
    "family": "Faviidae",
    "class": "Anthozoa",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Melocactus bellavistensis",
    "genus": "Melocactus",
    "family": "Cactaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Naja samarensis",
    "genus": "Naja",
    "family": "Elapidae",
    "class": "Reptilia",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Habenaria",
    "genus": "Habenaria",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Disa uniflora",
    "genus": "Disa",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Ara rubrogenys",
    "genus": "Ara",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Eria lasiopetala",
    "genus": "Eria",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Acrantophis",
    "genus": "Acrantophis",
    "family": "Boidae",
    "class": "Reptilia",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Eria pannea",
    "genus": "Eria",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Dendrochilum yuccifolium",
    "genus": "Dendrochilum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Eria robusta",
    "genus": "Eria",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Rhyticeros undulatus",
    "genus": "Rhyticeros",
    "family": "Bucerotidae",
    "class": "Aves",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Eria xanthocheila",
    "genus": "Eria",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Eriosyce",
    "genus": "Eriosyce",
    "family": "Cactaceae",
    "class": "",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Varanus salvator",
    "genus": "Varanus",
    "family": "Varanidae",
    "class": "Reptilia",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "taxon": "Melocactus peruvianus",
    "genus": "Melocactus",
    "family": "Cactaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Accipiter soloensis",
    "genus": "Accipiter",
    "family": "Accipitridae",
    "class": "Aves",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Acriopsis indica",
    "genus": "Acriopsis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Acropora aculeus",
    "genus": "Acropora",
    "family": "Acroporidae",
    "class": "Anthozoa",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Acropora batunai",
    "genus": "Acropora",
    "family": "Acroporidae",
    "class": "Anthozoa",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Acropora palmerae",
    "genus": "Acropora",
    "family": "Acroporidae",
    "class": "Anthozoa",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Acropora russelli",
    "genus": "Acropora",
    "family": "Acroporidae",
    "class": "Anthozoa",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Acropora valida",
    "genus": "Acropora",
    "family": "Acroporidae",
    "class": "Anthozoa",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Acropora variabilis",
    "genus": "Acropora",
    "family": "Acroporidae",
    "class": "Anthozoa",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Acropora willisae",
    "genus": "Acropora",
    "family": "Acroporidae",
    "class": "Anthozoa",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Acropora yongei",
    "genus": "Acropora",
    "family": "Acroporidae",
    "class": "Anthozoa",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Aerides multiflora",
    "genus": "Aerides",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Agrostophyllum",
    "genus": "Agrostophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Amazona xanthops",
    "genus": "Amazona",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Anthracoceros montani",
    "genus": "Anthracoceros",
    "family": "Bucerotidae",
    "class": "Aves",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Appendicula clemensiae",
    "genus": "Appendicula",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Appendicula fenixii",
    "genus": "Appendicula",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Aquila heliaca",
    "genus": "Aquila",
    "family": "Accipitridae",
    "class": "Aves",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Ara militaris",
    "genus": "Ara",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Arachnis breviscapa",
    "genus": "Arachnis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Aratinga erythrogenys",
    "genus": "Aratinga",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Astrochelys radiata",
    "genus": "Astrochelys",
    "family": "Testudinidae",
    "class": "Reptilia",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Berardius bairdii",
    "genus": "Berardius",
    "family": "Ziphiidae",
    "class": "Mammalia",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Boa constrictor",
    "genus": "Boa",
    "family": "Boidae",
    "class": "Reptilia",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Boa constrictor occidentalis",
    "genus": "Boa",
    "family": "Boidae",
    "class": "Reptilia",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Brachylophus fasciatus",
    "genus": "Brachylophus",
    "family": "Iguanidae",
    "class": "Reptilia",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Brachylophus vitiensis",
    "genus": "Brachylophus",
    "family": "Iguanidae",
    "class": "Reptilia",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Bromheadia finlaysoniana",
    "genus": "Bromheadia",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Bulbophyllum affine",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Bulbophyllum apertum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Bulbophyllum echinolabium",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Bulbophyllum gerlandianum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Bulbophyllum grandiflorum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Bulbophyllum helenae",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Bulbophyllum moniliforme",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Bulbophyllum pahudii",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Bulbophyllum repens",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Bulbophyllum tenuifolium",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Bulbophyllum trigonosepalum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Bulbophyllum violaceolabellum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Cacatua leadbeateri",
    "genus": "Cacatua",
    "family": "Cacatuidae",
    "class": "Aves",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Calanthe mindorensis",
    "genus": "Calanthe",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Calanthe speciosa",
    "genus": "Calanthe",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Calumma glawi",
    "genus": "Calumma",
    "family": "Chamaeleonidae",
    "class": "Reptilia",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Calumma hilleniusi",
    "genus": "Calumma",
    "family": "Chamaeleonidae",
    "class": "Reptilia",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Calumma linotum",
    "genus": "Calumma",
    "family": "Chamaeleonidae",
    "class": "Reptilia",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Capricornis sumatraensis",
    "genus": "Capricornis",
    "family": "Bovidae",
    "class": "Mammalia",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Carcharhinus longimanus",
    "genus": "Carcharhinus",
    "family": "Carcharhinidae",
    "class": "Elasmobranchii",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Carduelis cucullata",
    "genus": "Carduelis",
    "family": "Fringillidae",
    "class": "Aves",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Caulastraea",
    "genus": "Caulastraea",
    "family": "Faviidae",
    "class": "Anthozoa",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Ceratostylis heterophylla",
    "genus": "Ceratostylis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Ceratostylis ramosa",
    "genus": "Ceratostylis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Cercopithecus dryas",
    "genus": "Cercopithecus",
    "family": "Cercopithecidae",
    "class": "Mammalia",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Cereus hankeanus",
    "genus": "Cereus",
    "family": "Cactaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Cereus repandus",
    "genus": "Cereus",
    "family": "Cactaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Chamaeleo",
    "genus": "Chamaeleo",
    "family": "Chamaeleonidae",
    "class": "Reptilia",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Chlorocebus sabaeus",
    "genus": "Chlorocebus",
    "family": "Cercopithecidae",
    "class": "Mammalia",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Circaetus gallicus",
    "genus": "Circaetus",
    "family": "Accipitridae",
    "class": "Aves",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Circus melanoleucos",
    "genus": "Circus",
    "family": "Accipitridae",
    "class": "Aves",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Cirrhopetalum multiflorum",
    "genus": "Cirrhopetalum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Cleisostoma saggitattum",
    "genus": "Cleisostoma",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Cleistocactus buchtienii",
    "genus": "Cleistocactus",
    "family": "Cactaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Coelogyne lawrenceana",
    "genus": "Coelogyne",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Coelogyne macdonaldii",
    "genus": "Coelogyne",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Coelogyne nitida",
    "genus": "Coelogyne",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Coelogyne ovalis",
    "genus": "Coelogyne",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Coelogyne pulverula",
    "genus": "Coelogyne",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Coelogyne punctulata",
    "genus": "Coelogyne",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Coelogyne speciosa",
    "genus": "Coelogyne",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Coelogyne trinervis",
    "genus": "Coelogyne",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Coracopsis vasa",
    "genus": "Coracopsis",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Corallium elatius",
    "genus": "Corallium",
    "family": "Coralliidae",
    "class": "Anthozoa",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Coryanthes",
    "genus": "Coryanthes",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Coscinaraea columna",
    "genus": "Coscinaraea",
    "family": "Siderastreidae",
    "class": "Anthozoa",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Crocodylus intermedius",
    "genus": "Crocodylus",
    "family": "Crocodylidae",
    "class": "Reptilia",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Cycas beddomei",
    "genus": "Cycas",
    "family": "Cycadaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Cycas debaoensis",
    "genus": "Cycas",
    "family": "Cycadaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Cycas micholitzii",
    "genus": "Cycas",
    "family": "Cycadaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Cycloseris",
    "genus": "Cycloseris",
    "family": "Fungiidae",
    "class": "Anthozoa",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Cymbidium elegans",
    "genus": "Cymbidium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Delphinidae",
    "genus": "",
    "family": "Delphinidae",
    "class": "Mammalia",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Dendrobium antennatum",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Dendrobium blumei",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Dendrobium bracteosum",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Dendrobium carronii",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Dendrobium dickasonii",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Dendrobium erosum",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Dendrobium fimbriatum",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Dendrobium formosum",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Dendrobium infundibulum",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Dendrobium linguella",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Dendrobium macranthum",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Dendrobium nobile",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Dendrobium ravanii",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Dendrobium salaccense",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Dendrobium sibuyanense",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Dendrobium spectabile",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Dendrochilum propinquum",
    "genus": "Dendrochilum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Dendrochilum pumilum",
    "genus": "Dendrochilum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Dendrochilum rhombophorum",
    "genus": "Dendrochilum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Dendrochilum tortile",
    "genus": "Dendrochilum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Dendrochilum unicallosum",
    "genus": "Dendrochilum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Dicerorhinus sumatrensis",
    "genus": "Dicerorhinus",
    "family": "Rhinocerotidae",
    "class": "Mammalia",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Dichaea",
    "genus": "Dichaea",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Dilochia wallichii",
    "genus": "Dilochia",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Dugong dugon",
    "genus": "Dugong",
    "family": "Dugongidae",
    "class": "Mammalia",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Dypsis decaryi",
    "genus": "Dypsis",
    "family": "Palmae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Dyscophus",
    "genus": "Dyscophus",
    "family": "Microhylidae",
    "class": "Amphibia",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Echinophyllia",
    "genus": "Echinophyllia",
    "family": "Pectiniidae",
    "class": "Anthozoa",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Echinopsis chrysantha",
    "genus": "Echinopsis",
    "family": "Cactaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Echinopsis mamillosa",
    "genus": "Echinopsis",
    "family": "Cactaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Echinopsis pampana",
    "genus": "Echinopsis",
    "family": "Cactaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Echinopsis thionantha",
    "genus": "Echinopsis",
    "family": "Cactaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Equus przewalskii",
    "genus": "Equus",
    "family": "Equidae",
    "class": "Mammalia",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Eriosyce aurata",
    "genus": "Eriosyce",
    "family": "Cactaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Eulophia graminea",
    "genus": "Eulophia",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Euphyllia",
    "genus": "Euphyllia",
    "family": "Caryophylliidae",
    "class": "Anthozoa",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Faviidae",
    "genus": "",
    "family": "Faviidae",
    "class": "Anthozoa",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Flabellum",
    "genus": "Flabellum",
    "family": "Flabellidae",
    "class": "Anthozoa",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Furcifer viridis",
    "genus": "Furcifer",
    "family": "Chamaeleonidae",
    "class": "Reptilia",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Gazella dorcas",
    "genus": "Gazella",
    "family": "Bovidae",
    "class": "Mammalia",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Gomesa",
    "genus": "Gomesa",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Gonystylus",
    "genus": "Gonystylus",
    "family": "Thymelaeaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Goodyera viridiflora",
    "genus": "Goodyera",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Grosourdya tripercus",
    "genus": "Grosourdya",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Grus grus",
    "genus": "Grus",
    "family": "Gruidae",
    "class": "Aves",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Gymnocalycium bodenbenderianum",
    "genus": "Gymnocalycium",
    "family": "Cactaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Haageocereus versicolor",
    "genus": "Haageocereus",
    "family": "Cactaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Heliofungia actiniformis",
    "genus": "Heliofungia",
    "family": "Fungiidae",
    "class": "Anthozoa",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Heliopora",
    "genus": "Heliopora",
    "family": "Helioporidae",
    "class": "Anthozoa",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Herpolitha limax",
    "genus": "Herpolitha",
    "family": "Fungiidae",
    "class": "Anthozoa",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Hieraaetus pennatus",
    "genus": "Hieraaetus",
    "family": "Accipitridae",
    "class": "Aves",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Hippocampus bargibanti",
    "genus": "Hippocampus",
    "family": "Syngnathidae",
    "class": "Actinopteri",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Hippopus porcellanus",
    "genus": "Hippopus",
    "family": "Tridacnidae",
    "class": "Bivalvia",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Hylobates",
    "genus": "Hylobates",
    "family": "Hylobatidae",
    "class": "Mammalia",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Hyperoodon planifrons",
    "genus": "Hyperoodon",
    "family": "Ziphiidae",
    "class": "Mammalia",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Inia geoffrensis",
    "genus": "Inia",
    "family": "Iniidae",
    "class": "Mammalia",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Kogia",
    "genus": "Kogia",
    "family": "Physeteridae",
    "class": "Mammalia",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Lemur catta",
    "genus": "Lemur",
    "family": "Lemuridae",
    "class": "Mammalia",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Leopardus tigrinus",
    "genus": "Leopardus",
    "family": "Felidae",
    "class": "Mammalia",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Leptoseris",
    "genus": "Leptoseris",
    "family": "Agariciidae",
    "class": "Anthozoa",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Leucopsar rothschildi",
    "genus": "Leucopsar",
    "family": "Sturnidae",
    "class": "Aves",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Liparis bootanensis",
    "genus": "Liparis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Lissodelphis peronii",
    "genus": "Lissodelphis",
    "family": "Delphinidae",
    "class": "Mammalia",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Lutra",
    "genus": "Lutra",
    "family": "Mustelidae",
    "class": "Mammalia",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Lutra lutra",
    "genus": "Lutra",
    "family": "Mustelidae",
    "class": "Mammalia",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Malaxis latifolia",
    "genus": "Malaxis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Mesoplodon layardii",
    "genus": "Mesoplodon",
    "family": "Ziphiidae",
    "class": "Mammalia",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Mesoplodon mirus",
    "genus": "Mesoplodon",
    "family": "Ziphiidae",
    "class": "Mammalia",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Montipora capricornis",
    "genus": "Montipora",
    "family": "Acroporidae",
    "class": "Anthozoa",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Mustela sibirica",
    "genus": "Mustela",
    "family": "Mustelidae",
    "class": "Mammalia",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Myrmechis gracilis",
    "genus": "Myrmechis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Myrmecophila tibicinis",
    "genus": "Myrmecophila",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Neofelis nebulosa",
    "genus": "Neofelis",
    "family": "Felidae",
    "class": "Mammalia",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Neofinetia falcata",
    "genus": "Neofinetia",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Nepenthes mindanaoensis",
    "genus": "Nepenthes",
    "family": "Nepenthaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Nepenthes mirabilis",
    "genus": "Nepenthes",
    "family": "Nepenthaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Nervilia plicata",
    "genus": "Nervilia",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Ninox",
    "genus": "Ninox",
    "family": "Strigidae",
    "class": "Aves",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Oberonia anceps",
    "genus": "Oberonia",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Octomeria",
    "genus": "Octomeria",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Ophiophagus hannah",
    "genus": "Ophiophagus",
    "family": "Elapidae",
    "class": "Reptilia",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Orcaella heinsohni",
    "genus": "Orcaella",
    "family": "Delphinidae",
    "class": "Mammalia",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Ornithoptera alexandrae",
    "genus": "Ornithoptera",
    "family": "Papilionidae",
    "class": "Insecta",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Pachyphyllum",
    "genus": "Pachyphyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Pachyseris speciosa",
    "genus": "Pachyseris",
    "family": "Agariciidae",
    "class": "Anthozoa",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Pandinus dictator",
    "genus": "Pandinus",
    "family": "Scorpionidae",
    "class": "Arachnida",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Panisea uniflora",
    "genus": "Panisea",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Paphiopedilum callosum",
    "genus": "Paphiopedilum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Paphiopedilum hybrid",
    "genus": "Paphiopedilum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Paphiopedilum villosum",
    "genus": "Paphiopedilum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Papio papio",
    "genus": "Papio",
    "family": "Cercopithecidae",
    "class": "Mammalia",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Papio ursinus",
    "genus": "Papio",
    "family": "Cercopithecidae",
    "class": "Mammalia",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Pavona",
    "genus": "Pavona",
    "family": "Agariciidae",
    "class": "Anthozoa",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Pavona clavus",
    "genus": "Pavona",
    "family": "Agariciidae",
    "class": "Anthozoa",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Pectinia",
    "genus": "Pectinia",
    "family": "Pectiniidae",
    "class": "Anthozoa",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Pectinia alcicornis",
    "genus": "Pectinia",
    "family": "Pectiniidae",
    "class": "Anthozoa",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Peristeria elata",
    "genus": "Peristeria",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Perodicticus potto",
    "genus": "Perodicticus",
    "family": "Lorisidae",
    "class": "Mammalia",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Phaius borneensis",
    "genus": "Phaius",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Phaius fragilis",
    "genus": "Phaius",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Phalaenopsis celebensis",
    "genus": "Phalaenopsis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Phalaenopsis fuscata",
    "genus": "Phalaenopsis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Phalaenopsis taenialis",
    "genus": "Phalaenopsis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Phalaenopsis veitchiana",
    "genus": "Phalaenopsis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Phalaenopsis venosa",
    "genus": "Phalaenopsis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Phelsuma pusilla",
    "genus": "Phelsuma",
    "family": "Gekkonidae",
    "class": "Reptilia",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Phocoena spinipinnis",
    "genus": "Phocoena",
    "family": "Phocoenidae",
    "class": "Mammalia",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Phreatia sulcata",
    "genus": "Phreatia",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Phreatia vanoverberghii",
    "genus": "Phreatia",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Phyllomedusa sauvagii",
    "genus": "Phyllomedusa",
    "family": "Hylidae",
    "class": "Amphibia",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Pinalia bractescens",
    "genus": "Pinalia",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Pinalia ovata",
    "genus": "Pinalia",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Pipile pipile",
    "genus": "Pipile",
    "family": "Cracidae",
    "class": "Aves",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Pitta kochi",
    "genus": "Pitta",
    "family": "Pittidae",
    "class": "Aves",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Pomatocalpa fuscum",
    "genus": "Pomatocalpa",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Pomatocalpa kunstleri",
    "genus": "Pomatocalpa",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Pontoporia blainvillei",
    "genus": "Pontoporia",
    "family": "Iniidae",
    "class": "Mammalia",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Pristidae",
    "genus": "",
    "family": "Pristidae",
    "class": "Elasmobranchii",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Psammocora profundacella",
    "genus": "Psammocora",
    "family": "Siderastreidae",
    "class": "Anthozoa",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Psittacidae hybrid",
    "genus": "",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Psittacula krameri",
    "genus": "Psittacula",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Pterocnemia pennata",
    "genus": "Pterocnemia",
    "family": "Rheidae",
    "class": "Aves",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Pteropus",
    "genus": "Pteropus",
    "family": "Pteropodidae",
    "class": "Mammalia",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Pteropus hypomelanus",
    "genus": "Pteropus",
    "family": "Pteropodidae",
    "class": "Mammalia",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Pteropus leucopterus",
    "genus": "Pteropus",
    "family": "Pteropodidae",
    "class": "Mammalia",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Rebutia canigueralii",
    "genus": "Rebutia",
    "family": "Cactaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Rebutia fiebrigii",
    "genus": "Rebutia",
    "family": "Cactaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Rebutia heliosa",
    "genus": "Rebutia",
    "family": "Cactaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Renanthera coccinea",
    "genus": "Renanthera",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Renanthera imschootiana",
    "genus": "Renanthera",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Rhincodon typus",
    "genus": "Rhincodon",
    "family": "Rhincodontidae",
    "class": "Elasmobranchii",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Robiquetia spathulata",
    "genus": "Robiquetia",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Saccolabium",
    "genus": "Saccolabium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Sandalolitha",
    "genus": "Sandalolitha",
    "family": "Fungiidae",
    "class": "Anthozoa",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Smitinandia",
    "genus": "Smitinandia",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Sobralia",
    "genus": "Sobralia",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Sotalia guianensis",
    "genus": "Sotalia",
    "family": "Delphinidae",
    "class": "Mammalia",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Speothos venaticus",
    "genus": "Speothos",
    "family": "Canidae",
    "class": "Mammalia",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Stephanophyllia",
    "genus": "Stephanophyllia",
    "family": "Micrabaciidae",
    "class": "Anthozoa",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Streptopelia turtur",
    "genus": "Streptopelia",
    "family": "Columbidae",
    "class": "Aves",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Stylaster",
    "genus": "Stylaster",
    "family": "Stylasteridae",
    "class": "Hydrozoa",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Stylaster marshae",
    "genus": "Stylaster",
    "family": "Stylasteridae",
    "class": "Hydrozoa",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Tephrocactus verschaffeltii",
    "genus": "Tephrocactus",
    "family": "Cactaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Thrixspermum rostratum",
    "genus": "Thrixspermum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Trachoma phillipsii",
    "genus": "Trachoma",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Tridacna maxima",
    "genus": "Tridacna",
    "family": "Tridacnidae",
    "class": "Bivalvia",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Trioceros montium",
    "genus": "Trioceros",
    "family": "Chamaeleonidae",
    "class": "Reptilia",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Trioceros quadricornis",
    "genus": "Trioceros",
    "family": "Chamaeleonidae",
    "class": "Reptilia",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Tropidia curculigoides",
    "genus": "Tropidia",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Tubipora",
    "genus": "Tubipora",
    "family": "Tubiporidae",
    "class": "Anthozoa",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Turbinaria peltata",
    "genus": "Turbinaria",
    "family": "Dendrophylliidae",
    "class": "Anthozoa",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Tyto alba",
    "genus": "Tyto",
    "family": "Tytonidae",
    "class": "Aves",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Uncia uncia",
    "genus": "Uncia",
    "family": "Felidae",
    "class": "Mammalia",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Vanda coerulea",
    "genus": "Vanda",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Vanda hindsii",
    "genus": "Vanda",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Vanda tessellata",
    "genus": "Vanda",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Vanda tricolor",
    "genus": "Vanda",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Varanus bengalensis",
    "genus": "Varanus",
    "family": "Varanidae",
    "class": "Reptilia",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Vultur gryphus",
    "genus": "Vultur",
    "family": "Cathartidae",
    "class": "Aves",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Zamia fischeri",
    "genus": "Zamia",
    "family": "Zamiaceae",
    "class": "",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "taxon": "Kinixys",
    "genus": "Kinixys",
    "family": "Testudinidae",
    "class": "Reptilia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Javania",
    "genus": "Javania",
    "family": "Flabellidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Hystrix cristata",
    "genus": "Hystrix",
    "family": "Hystricidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Hymenorchis",
    "genus": "Hymenorchis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Hylocereus undatus",
    "genus": "Hylocereus",
    "family": "Cactaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Hylocereus triangularis",
    "genus": "Hylocereus",
    "family": "Cactaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Hylobates moloch",
    "genus": "Hylobates",
    "family": "Hylobatidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Hydnophora microconos",
    "genus": "Hydnophora",
    "family": "Merulinidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Aonyx cinerea",
    "genus": "Aonyx",
    "family": "Mustelidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Oeceoclades maculata",
    "genus": "Oeceoclades",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Hydnophora exesa",
    "genus": "Hydnophora",
    "family": "Merulinidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Hoodia gordonii",
    "genus": "Hoodia",
    "family": "Apocynaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Hoodia",
    "genus": "Hoodia",
    "family": "Apocynaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Homalopsis buccata",
    "genus": "Homalopsis",
    "family": "Colubridae",
    "class": "Reptilia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Oncidium ornithorhynchum",
    "genus": "Oncidium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Anota violacea",
    "genus": "",
    "family": "",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Hippopus",
    "genus": "Hippopus",
    "family": "Tridacnidae",
    "class": "Bivalvia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Hippocampus spinosissimus",
    "genus": "Hippocampus",
    "family": "Syngnathidae",
    "class": "Actinopteri",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Heteropsammia cochlea",
    "genus": "Heteropsammia",
    "family": "Dendrophylliidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Anguilla anguilla",
    "genus": "Anguilla",
    "family": "Anguillidae",
    "class": "Actinopteri",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Heteropsammia",
    "genus": "Heteropsammia",
    "family": "Dendrophylliidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Hetaeria oblongifolia",
    "genus": "Hetaeria",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Harpia harpyja",
    "genus": "Harpia",
    "family": "Accipitridae",
    "class": "Aves",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Hapalemur griseus",
    "genus": "Hapalemur",
    "family": "Lemuridae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Oreocereus doelzianus",
    "genus": "Oreocereus",
    "family": "Cactaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Haliaeetus albicilla",
    "genus": "Haliaeetus",
    "family": "Accipitridae",
    "class": "Aves",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Ornithochilus difformis",
    "genus": "Ornithochilus",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Angraecum subulatum",
    "genus": "Angraecum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Gyps rueppellii",
    "genus": "Gyps",
    "family": "Accipitridae",
    "class": "Aves",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Gypaetus barbatus",
    "genus": "Gypaetus",
    "family": "Accipitridae",
    "class": "Aves",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Gymnocalycium gibbosum",
    "genus": "Gymnocalycium",
    "family": "Cactaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Guibourtia demeusei",
    "genus": "Guibourtia",
    "family": "Leguminosae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Grus vipio",
    "genus": "Grus",
    "family": "Gruidae",
    "class": "Aves",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Oryx leucoryx",
    "genus": "Oryx",
    "family": "Bovidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Grus americana",
    "genus": "Grus",
    "family": "Gruidae",
    "class": "Aves",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Graphorkis lurida",
    "genus": "Graphorkis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Grammatophyllum hybrid",
    "genus": "Grammatophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Gorilla gorilla",
    "genus": "Gorilla",
    "family": "Hominidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Goniopora stokesi",
    "genus": "Goniopora",
    "family": "Poritidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Otus mirus",
    "genus": "Otus",
    "family": "Strigidae",
    "class": "Aves",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Oulastrea crispata",
    "genus": "Oulastrea",
    "family": "Faviidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Oulophyllia bennettae",
    "genus": "Oulophyllia",
    "family": "Faviidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Oxystophyllum",
    "genus": "Oxystophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Oxystophyllum elmeri",
    "genus": "Oxystophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Angraecum moandense",
    "genus": "Angraecum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Pachyseris",
    "genus": "Pachyseris",
    "family": "Agariciidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Goniastrea retiformis",
    "genus": "Goniastrea",
    "family": "Faviidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Angraecum",
    "genus": "Angraecum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Goniastrea pectinata",
    "genus": "Goniastrea",
    "family": "Faviidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Gomphichis",
    "genus": "Gomphichis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Andrias davidianus",
    "genus": "Andrias",
    "family": "Cryptobranchidae",
    "class": "Amphibia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Glomera amboinensis",
    "genus": "Glomera",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Panisea",
    "genus": "Panisea",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Ancistrorhynchus clandestinus",
    "genus": "Ancistrorhynchus",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Glaucidium brasilianum",
    "genus": "Glaucidium",
    "family": "Strigidae",
    "class": "Aves",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Geodorum terrestre",
    "genus": "Geodorum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Geodorum",
    "genus": "Geodorum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Gardineroseris planulata",
    "genus": "Gardineroseris",
    "family": "Agariciidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Panthera tigris altaica",
    "genus": "Panthera",
    "family": "Felidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Furcifer tuzetae",
    "genus": "Furcifer",
    "family": "Chamaeleonidae",
    "class": "Reptilia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Fungia scutaria",
    "genus": "Fungia",
    "family": "Fungiidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Paphiopedilum barbatum",
    "genus": "Paphiopedilum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Paphiopedilum bellatulum",
    "genus": "Paphiopedilum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Ancistrorhynchus cephalotes",
    "genus": "Ancistrorhynchus",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Fungia paumotensis",
    "genus": "Fungia",
    "family": "Fungiidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Paphiopedilum delenatii",
    "genus": "Paphiopedilum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Paphiopedilum exul",
    "genus": "Paphiopedilum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Paphiopedilum glanduliferum",
    "genus": "Paphiopedilum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Paphiopedilum glaucophyllum",
    "genus": "Paphiopedilum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Fungia horrida",
    "genus": "Fungia",
    "family": "Fungiidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Paphiopedilum haynaldianum",
    "genus": "Paphiopedilum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Paphiopedilum hennisianum",
    "genus": "Paphiopedilum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Paphiopedilum hirsutissimum",
    "genus": "Paphiopedilum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Anacropora",
    "genus": "Anacropora",
    "family": "Acroporidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Paphiopedilum insigne",
    "genus": "Paphiopedilum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Paphiopedilum lawrenceanum",
    "genus": "Paphiopedilum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Paphiopedilum niveum",
    "genus": "Paphiopedilum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Paphiopedilum parishii",
    "genus": "Paphiopedilum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Paphiopedilum sanderianum",
    "genus": "Paphiopedilum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Fungia fungites",
    "genus": "Fungia",
    "family": "Fungiidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Amazona ventralis",
    "genus": "Amazona",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Amazona rhodocorytha",
    "genus": "Amazona",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Vidua orientalis",
    "genus": "Vidua",
    "family": "Ploceidae",
    "class": "Aves",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Paracyathus",
    "genus": "Paracyathus",
    "family": "Caryophylliidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Paradoxurus hermaphroditus",
    "genus": "Paradoxurus",
    "family": "Viverridae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Frondaria",
    "genus": "Frondaria",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Ferocactus eastwoodiae",
    "genus": "Ferocactus",
    "family": "Cactaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Felis silvestris",
    "genus": "Felis",
    "family": "Felidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Pardofelis marmorata",
    "genus": "Pardofelis",
    "family": "Felidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Felis nigripes",
    "genus": "Felis",
    "family": "Felidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Parodia haselbergii",
    "genus": "Parodia",
    "family": "Cactaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Felidae hybrid",
    "genus": "",
    "family": "Felidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Pavo cristatus",
    "genus": "Pavo",
    "family": "Phasianidae",
    "class": "Aves",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Amazona mercenaria",
    "genus": "Amazona",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Pavona cactus",
    "genus": "Pavona",
    "family": "Agariciidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Alouatta caraya",
    "genus": "Alouatta",
    "family": "Atelidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Felidae",
    "genus": "",
    "family": "Felidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Pavona divaricata",
    "genus": "Pavona",
    "family": "Agariciidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Pavona minuta",
    "genus": "Pavona",
    "family": "Agariciidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Pavona varians",
    "genus": "Pavona",
    "family": "Agariciidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Pavona venosa",
    "genus": "Pavona",
    "family": "Agariciidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Favites stylifera",
    "genus": "Favites",
    "family": "Faviidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Aloe versicolor",
    "genus": "Aloe",
    "family": "Liliaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Aloe polyphylla",
    "genus": "Aloe",
    "family": "Liliaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Pectinia lactuca",
    "genus": "Pectinia",
    "family": "Pectiniidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Favia rotundata",
    "genus": "Favia",
    "family": "Faviidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Favia",
    "genus": "Favia",
    "family": "Faviidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Falco tinnunculus",
    "genus": "Falco",
    "family": "Falconidae",
    "class": "Aves",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Falco naumanni",
    "genus": "Falco",
    "family": "Falconidae",
    "class": "Aves",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Turbinaria mesenterina",
    "genus": "Turbinaria",
    "family": "Dendrophylliidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Vulpes vulpes",
    "genus": "Vulpes",
    "family": "Canidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Falco biarmicus",
    "genus": "Falco",
    "family": "Falconidae",
    "class": "Aves",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Euphyllia divisa",
    "genus": "Euphyllia",
    "family": "Caryophylliidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Aloe hybrid",
    "genus": "Aloe",
    "family": "Liliaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Phaius callosus",
    "genus": "Phaius",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Euphorbia decaryi",
    "genus": "Euphorbia",
    "family": "Euphorbiaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Turbinicarpus",
    "genus": "Turbinicarpus",
    "family": "Cactaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Phaius hybrid",
    "genus": "Phaius",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Phaius mishmensis",
    "genus": "Phaius",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Euphorbia cylindrifolia",
    "genus": "Euphorbia",
    "family": "Euphorbiaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Eulemur mongoz",
    "genus": "Eulemur",
    "family": "Lemuridae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Espostoa mirabilis",
    "genus": "Espostoa",
    "family": "Cactaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Erycina pusilla",
    "genus": "Erycina",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Erycina pumilio",
    "genus": "Erycina",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Eria spicata",
    "genus": "Eria",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Eria ramosii",
    "genus": "Eria",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Eretmochelys imbricata imbricata",
    "genus": "Eretmochelys",
    "family": "Cheloniidae",
    "class": "Reptilia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Equus hemionus",
    "genus": "Equus",
    "family": "Equidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Aloe fragilis",
    "genus": "Aloe",
    "family": "Liliaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Epidendrum fimbriatum",
    "genus": "Epidendrum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Eos histrio",
    "genus": "Eos",
    "family": "Loriidae",
    "class": "Aves",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Encyclia baculus",
    "genus": "Encyclia",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Encyclia",
    "genus": "Encyclia",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Phalaenopsis fimbriata",
    "genus": "Phalaenopsis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Alligator mississippiensis",
    "genus": "Alligator",
    "family": "Alligatoridae",
    "class": "Reptilia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Encephalartos turneri",
    "genus": "Encephalartos",
    "family": "Zamiaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Encephalartos sclavoi",
    "genus": "Encephalartos",
    "family": "Zamiaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Encephalartos munchii",
    "genus": "Encephalartos",
    "family": "Zamiaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Encephalartos kisambo",
    "genus": "Encephalartos",
    "family": "Zamiaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Encephalartos cerinus",
    "genus": "Encephalartos",
    "family": "Zamiaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Eira barbara",
    "genus": "Eira",
    "family": "Mustelidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Phalaenopsis mannii",
    "genus": "Phalaenopsis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Echinopsis obrepanda",
    "genus": "Echinopsis",
    "family": "Cactaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Echinopsis cinnabarina",
    "genus": "Echinopsis",
    "family": "Cactaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Echinopora gemmacea",
    "genus": "Echinopora",
    "family": "Faviidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Echinocactus horizonthalonius",
    "genus": "Echinocactus",
    "family": "Cactaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Dyscophus antongilii",
    "genus": "Dyscophus",
    "family": "Microhylidae",
    "class": "Amphibia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Dracaena paraguayensis",
    "genus": "Dracaena",
    "family": "Teiidae",
    "class": "Reptilia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Dracaena",
    "genus": "Dracaena",
    "family": "Teiidae",
    "class": "Reptilia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Distichopora",
    "genus": "Distichopora",
    "family": "Stylasteridae",
    "class": "Hydrozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Dipodium",
    "genus": "Dipodium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Diplocaulobium",
    "genus": "Diplocaulobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Dilochia",
    "genus": "Dilochia",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Alisterus amboinensis",
    "genus": "Alisterus",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Acanthephippium pictum",
    "genus": "Acanthephippium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Agrostophyllum philippinense",
    "genus": "Agrostophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Diglyphosa latifolia",
    "genus": "Diglyphosa",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Phalanger orientalis",
    "genus": "Phalanger",
    "family": "Phalangeridae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Dienia ophrydis",
    "genus": "Dienia",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Didymoplexiella siamensis",
    "genus": "Didymoplexiella",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Phelsuma barbouri",
    "genus": "Phelsuma",
    "family": "Gekkonidae",
    "class": "Reptilia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Dicksoniaceae",
    "genus": "",
    "family": "Dicksoniaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Phelsuma dubia",
    "genus": "Phelsuma",
    "family": "Gekkonidae",
    "class": "Reptilia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Diaphananthe pellucida",
    "genus": "Diaphananthe",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Phelsuma guttata",
    "genus": "Phelsuma",
    "family": "Gekkonidae",
    "class": "Reptilia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Phelsuma klemmeri",
    "genus": "Phelsuma",
    "family": "Gekkonidae",
    "class": "Reptilia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Dendrochilum warrenii",
    "genus": "Dendrochilum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Dendrochilum pallidiflavens",
    "genus": "Dendrochilum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Dendrochilum macgregorii",
    "genus": "Dendrochilum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Dendrochilum hastatum",
    "genus": "Dendrochilum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Phelsuma modesta",
    "genus": "Phelsuma",
    "family": "Gekkonidae",
    "class": "Reptilia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Dendrochilum hampelii",
    "genus": "Dendrochilum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Phelsuma parva",
    "genus": "Phelsuma",
    "family": "Gekkonidae",
    "class": "Reptilia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Phelsuma pronki",
    "genus": "Phelsuma",
    "family": "Gekkonidae",
    "class": "Reptilia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Vultur",
    "genus": "Vultur",
    "family": "Cathartidae",
    "class": "Aves",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Dendrochilum graminifolium",
    "genus": "Dendrochilum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Phelsuma seippi",
    "genus": "Phelsuma",
    "family": "Gekkonidae",
    "class": "Reptilia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Phelsuma vanheygeni",
    "genus": "Phelsuma",
    "family": "Gekkonidae",
    "class": "Reptilia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Dendrochilum exiguum",
    "genus": "Dendrochilum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Phocoena dioptrica",
    "genus": "Phocoena",
    "family": "Phocoenidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Phocoena hybrid",
    "genus": "Phocoena",
    "family": "Phocoenidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Dendrochilum elmeri",
    "genus": "Dendrochilum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Agapornis pullarius",
    "genus": "Agapornis",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Dendrochilum cymbiforme",
    "genus": "Dendrochilum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Dendrochilum cordatum",
    "genus": "Dendrochilum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Dendrobium williamsonii",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Dendrobium virgineum",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Pholidota chinensis",
    "genus": "Pholidota",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Dendrobium venustum",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Pholidota pallida",
    "genus": "Pholidota",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Dendrobium usterioides",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Dendrobium trigonopus",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Phragmipedium longifolium",
    "genus": "Phragmipedium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Dendrobium transparens",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Agapornis",
    "genus": "Agapornis",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Aerides rosea",
    "genus": "Aerides",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Phyllangia",
    "genus": "Phyllangia",
    "family": "Caryophylliidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Aerangis ellisii",
    "genus": "Aerangis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Dendrobium thyrsiflorum",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Physeteridae",
    "genus": "",
    "family": "Physeteridae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Physogyra",
    "genus": "Physogyra",
    "family": "Caryophylliidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Dendrobium senile",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Pilosocereus lanuginosus",
    "genus": "Pilosocereus",
    "family": "Cactaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Aerangis biloba",
    "genus": "Aerangis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Pinalia floribunda",
    "genus": "Pinalia",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Aerangis",
    "genus": "Aerangis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Pinalia xanthocheila",
    "genus": "Pinalia",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Dendrobium sarawakense",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Dendrobium purpureostelidium",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Dendrobium pulchellum",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Dendrobium pristinum",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Dendrobium omissum",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Dendrobium moniliforme",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Dendrobium longicornu",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Adenia olaboensis",
    "genus": "Adenia",
    "family": "Passifloraceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Dendrobium lineale",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Adenia",
    "genus": "Adenia",
    "family": "Passifloraceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Dendrobium leonis",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Platygyra pini",
    "genus": "Platygyra",
    "family": "Faviidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Plectrelminthus caudatus",
    "genus": "Plectrelminthus",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Dendrobium lasianthera",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Dendrobium kinabaluense",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Plesiastrea",
    "genus": "Plesiastrea",
    "family": "Faviidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Dendrobium junctilobum",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Plocoglottis",
    "genus": "Plocoglottis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Dendrobium johnsoniae",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Plocoglottis bicallosa",
    "genus": "Plocoglottis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Dendrobium gratiosissimum",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Plocoglottis copelandii",
    "genus": "Plocoglottis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Plocoglottis mindorensis",
    "genus": "Plocoglottis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Plocoglottis plicata",
    "genus": "Plocoglottis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Dendrobium graminifolium",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Dendrobium farmeri",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Dendrobium delacourii",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Dendrobium cinnabarinum",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Dendrobium christyanum",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Dendrobium aloifolium",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Dendrobium aduncum",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Podochilus plumosus",
    "genus": "Podochilus",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Dendrobium acuminatissimum",
    "genus": "Dendrobium",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Dactylotrochus cervicornis",
    "genus": "Dactylotrochus",
    "family": "Caryophylliidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Cystorchis",
    "genus": "Cystorchis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Cyrtosia nana",
    "genus": "Cyrtosia",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Cyrtorchis ringens",
    "genus": "Cyrtorchis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Cyrtorchis",
    "genus": "Cyrtorchis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Cyphastrea japonica",
    "genus": "Cyphastrea",
    "family": "Faviidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Cynarina lacrymalis",
    "genus": "Cynarina",
    "family": "Mussidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Polycyathus",
    "genus": "Polycyathus",
    "family": "Caryophylliidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Cyclopsitta diophthalma",
    "genus": "Cyclopsitta",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Polystachya galeata",
    "genus": "Polystachya",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Polystachya golungensis",
    "genus": "Polystachya",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Polystachya modesta",
    "genus": "Polystachya",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Polystachya obanensis",
    "genus": "Polystachya",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Polystachya odorata",
    "genus": "Polystachya",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Polystachya parviflora",
    "genus": "Polystachya",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Cycloderma aubryi",
    "genus": "Cycloderma",
    "family": "Trionychidae",
    "class": "Reptilia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Ziphius",
    "genus": "Ziphius",
    "family": "Ziphiidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Addax nasomaculatus",
    "genus": "Addax",
    "family": "Bovidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Cycas cairnsiana",
    "genus": "Cycas",
    "family": "Cycadaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Pongo abelii",
    "genus": "Pongo",
    "family": "Hominidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Ctenactis echinata",
    "genus": "Ctenactis",
    "family": "Fungiidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Ponthieva",
    "genus": "Ponthieva",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Ada ocanensis",
    "genus": "Ada",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Cryptostylis taiwaniana",
    "genus": "Cryptostylis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Porites cylindrica",
    "genus": "Porites",
    "family": "Poritidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Porites porites",
    "genus": "Porites",
    "family": "Poritidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Porites rus",
    "genus": "Porites",
    "family": "Poritidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Porpax",
    "genus": "Porpax",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Crocodylus acutus",
    "genus": "Crocodylus",
    "family": "Crocodylidae",
    "class": "Reptilia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Crocodylidae",
    "genus": "",
    "family": "Crocodylidae",
    "class": "Reptilia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Cribbia confusa",
    "genus": "Cribbia",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Cordylus ukingensis",
    "genus": "Cordylus",
    "family": "Cordylidae",
    "class": "Reptilia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Copiapoa solaris",
    "genus": "Copiapoa",
    "family": "Cactaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Conepatus humboldtii",
    "genus": "Conepatus",
    "family": "Mephitidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Columba livia",
    "genus": "Columba",
    "family": "Columbidae",
    "class": "Aves",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Coelogyne swaniana",
    "genus": "Coelogyne",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Acampe praemorsa",
    "genus": "Acampe",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Coelogyne stricta",
    "genus": "Coelogyne",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Coelogyne miniata",
    "genus": "Coelogyne",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Psammocora",
    "genus": "Psammocora",
    "family": "Siderastreidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Acropora tenuis",
    "genus": "Acropora",
    "family": "Acroporidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Psammocora stellata",
    "genus": "Psammocora",
    "family": "Siderastreidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Psephotus dissimilis",
    "genus": "Psephotus",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Psephotus haematonotus",
    "genus": "Psephotus",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Psephotus pulcherrimus",
    "genus": "Psephotus",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Pseudeos fuscata",
    "genus": "Pseudeos",
    "family": "Loriidae",
    "class": "Aves",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Coelogyne holochila",
    "genus": "Coelogyne",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Pseudoryx nghetinhensis",
    "genus": "Pseudoryx",
    "family": "Bovidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Acropora speciosa",
    "genus": "Acropora",
    "family": "Acroporidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Coelogyne guamensis",
    "genus": "Coelogyne",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Cleistocactus dependens",
    "genus": "Cleistocactus",
    "family": "Cactaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Civettictis civetta",
    "genus": "Civettictis",
    "family": "Viverridae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Ciconia boyciana",
    "genus": "Ciconia",
    "family": "Ciconiidae",
    "class": "Aves",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Psittacula echo",
    "genus": "Psittacula",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Ciconia",
    "genus": "Ciconia",
    "family": "Ciconiidae",
    "class": "Aves",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Acropora simplex",
    "genus": "Acropora",
    "family": "Acroporidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Chrysalidocarpus lutescens",
    "genus": "Chrysalidocarpus",
    "family": "Palmae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Psittacus erithacus timneh",
    "genus": "Psittacus",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Chlamydotis undulata",
    "genus": "Chlamydotis",
    "family": "Otididae",
    "class": "Aves",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Psychopsis",
    "genus": "Psychopsis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Psygmorchis",
    "genus": "Psygmorchis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Chinchilla",
    "genus": "Chinchilla",
    "family": "Chinchillidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Chelonoidis niger",
    "genus": "Chelonoidis",
    "family": "Testudinidae",
    "class": "Reptilia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Chelonoidis carbonarius",
    "genus": "Chelonoidis",
    "family": "Testudinidae",
    "class": "Reptilia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Cheirostylis",
    "genus": "Cheirostylis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Chamaeleonidae",
    "genus": "",
    "family": "Chamaeleonidae",
    "class": "Reptilia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Chamaeleo dilepis",
    "genus": "Chamaeleo",
    "family": "Chamaeleonidae",
    "class": "Reptilia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Chamaeangis vesicata",
    "genus": "Chamaeangis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Acropora secale",
    "genus": "Acropora",
    "family": "Acroporidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Cervus elaphus barbarus",
    "genus": "Cervus",
    "family": "Cervidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Cerdocyon thous",
    "genus": "Cerdocyon",
    "family": "Canidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Cercopithecus wolfi",
    "genus": "Cercopithecus",
    "family": "Cercopithecidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Acropora sarmentosa",
    "genus": "Acropora",
    "family": "Acroporidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Pteropus dasymallus",
    "genus": "Pteropus",
    "family": "Pteropodidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Acropora rosaria",
    "genus": "Acropora",
    "family": "Acroporidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Pteropus insularis",
    "genus": "Pteropus",
    "family": "Pteropodidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Acropora robusta",
    "genus": "Acropora",
    "family": "Acroporidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Pteropus mariannus",
    "genus": "Pteropus",
    "family": "Pteropodidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Cercopithecus mona",
    "genus": "Cercopithecus",
    "family": "Cercopithecidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Pteropus speciosus",
    "genus": "Pteropus",
    "family": "Pteropodidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Cercopithecus mitis",
    "genus": "Cercopithecus",
    "family": "Cercopithecidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Ptilinopus marchei",
    "genus": "Ptilinopus",
    "family": "Columbidae",
    "class": "Aves",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Cercopithecus diana",
    "genus": "Cercopithecus",
    "family": "Cercopithecidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Cercopithecus denti",
    "genus": "Cercopithecus",
    "family": "Cercopithecidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Cercopithecus ascanius",
    "genus": "Cercopithecus",
    "family": "Cercopithecidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Pygathrix nemaeus",
    "genus": "Pygathrix",
    "family": "Cercopithecidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Cercocebus galeritus",
    "genus": "Cercocebus",
    "family": "Cercopithecidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Pyrrhura",
    "genus": "Pyrrhura",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Ceratozamia hildae",
    "genus": "Ceratozamia",
    "family": "Zamiaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Cephalorhynchus heavisidii",
    "genus": "Cephalorhynchus",
    "family": "Delphinidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Pyrrhura lepida",
    "genus": "Pyrrhura",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Cephalorhynchus commersonii",
    "genus": "Cephalorhynchus",
    "family": "Delphinidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Cephalantheropsis halconensis",
    "genus": "Cephalantheropsis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Cattleya skinneri",
    "genus": "Cattleya",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Python",
    "genus": "Python",
    "family": "Pythonidae",
    "class": "Reptilia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Cattleya labiata",
    "genus": "Cattleya",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Python brongersmai",
    "genus": "Python",
    "family": "Pythonidae",
    "class": "Reptilia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Cattleya intermedia",
    "genus": "Cattleya",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Python molurus molurus",
    "genus": "Python",
    "family": "Pythonidae",
    "class": "Reptilia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Python natalensis",
    "genus": "Python",
    "family": "Pythonidae",
    "class": "Reptilia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Python regius",
    "genus": "Python",
    "family": "Pythonidae",
    "class": "Reptilia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Catasetum pileatum",
    "genus": "Catasetum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Caryophyllia spinicarens",
    "genus": "Caryophyllia",
    "family": "Caryophylliidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Caryophyllia",
    "genus": "Caryophyllia",
    "family": "Caryophylliidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Capricornis milneedwardsii",
    "genus": "Capricornis",
    "family": "Bovidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Caperea marginata",
    "genus": "Caperea",
    "family": "Neobalaenidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Candoia paulsoni",
    "genus": "Candoia",
    "family": "Boidae",
    "class": "Reptilia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Rangaeris",
    "genus": "Rangaeris",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Rangaeris muscicola",
    "genus": "Rangaeris",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Rangaeris rhipsalisocia",
    "genus": "Rangaeris",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Calyptrochilum emarginatum",
    "genus": "Calyptrochilum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Calyptrochilum christyanum",
    "genus": "Calyptrochilum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Rebutia breviflora",
    "genus": "Rebutia",
    "family": "Cactaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Acropora retusa",
    "genus": "Acropora",
    "family": "Acroporidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Rebutia cylindrica",
    "genus": "Rebutia",
    "family": "Cactaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Calyptrochilum",
    "genus": "Calyptrochilum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Acropora pulchra",
    "genus": "Acropora",
    "family": "Acroporidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Acropora prostrata",
    "genus": "Acropora",
    "family": "Acroporidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Calumma peltierorum",
    "genus": "Calumma",
    "family": "Chamaeleonidae",
    "class": "Reptilia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Calumma guibei",
    "genus": "Calumma",
    "family": "Chamaeleonidae",
    "class": "Reptilia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Calumma globifer",
    "genus": "Calumma",
    "family": "Chamaeleonidae",
    "class": "Reptilia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Calumma gallus",
    "genus": "Calumma",
    "family": "Chamaeleonidae",
    "class": "Reptilia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Calumma furcifer",
    "genus": "Calumma",
    "family": "Chamaeleonidae",
    "class": "Reptilia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Renanthera citrina",
    "genus": "Renanthera",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Acanthastrea",
    "genus": "Acanthastrea",
    "family": "Mussidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Calumma fallax",
    "genus": "Calumma",
    "family": "Chamaeleonidae",
    "class": "Reptilia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Zeuxine longilabris",
    "genus": "Zeuxine",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Calumma ambreense",
    "genus": "Calumma",
    "family": "Chamaeleonidae",
    "class": "Reptilia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Calanthe pulchra",
    "genus": "Calanthe",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Calanthe maquilingensis",
    "genus": "Calanthe",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Calanthe mannii",
    "genus": "Calanthe",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Acropora nana",
    "genus": "Acropora",
    "family": "Acroporidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Calanthe lyroglossa",
    "genus": "Calanthe",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Calanthe halconensis",
    "genus": "Calanthe",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Calanthe davaensis",
    "genus": "Calanthe",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Calanthe cardioglossa",
    "genus": "Calanthe",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Caiman",
    "genus": "Caiman",
    "family": "Alligatoridae",
    "class": "Reptilia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Caecobarbus geertsii",
    "genus": "Caecobarbus",
    "family": "Cyprinidae",
    "class": "Actinopteri",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Cacatua tenuirostris",
    "genus": "Cacatua",
    "family": "Cacatuidae",
    "class": "Aves",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Bulbophyllum xylophyllum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Bulbophyllum wendlandianum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Rhipsalis teres",
    "genus": "Rhipsalis",
    "family": "Cactaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Bulbophyllum viresens",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Rhynchopsitta",
    "genus": "Rhynchopsitta",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Bulbophyllum uniflorum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Bulbophyllum tortum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Rhynchostylis hybrid",
    "genus": "Rhynchostylis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Bulbophyllum thaiorum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Bulbophyllum siamense",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Bulbophyllum sempiternum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Bulbophyllum scaberulum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Robiquetia amesiana",
    "genus": "Robiquetia",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Bulbophyllum sanitii",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Bulbophyllum purpurascens",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Acropora microphthalma",
    "genus": "Acropora",
    "family": "Acroporidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Rucervus duvaucelii",
    "genus": "Rucervus",
    "family": "Cervidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Acropora loripes",
    "genus": "Acropora",
    "family": "Acroporidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Saguinus oedipus",
    "genus": "Saguinus",
    "family": "Cebidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Salvator merianae",
    "genus": "Salvator",
    "family": "Teiidae",
    "class": "Reptilia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Acropora indonesia",
    "genus": "Acropora",
    "family": "Acroporidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Sandalolitha robusta",
    "genus": "Sandalolitha",
    "family": "Fungiidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Sanzinia madagascariensis",
    "genus": "Sanzinia",
    "family": "Boidae",
    "class": "Reptilia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Sarcanthus",
    "genus": "Sarcanthus",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Bulbophyllum puguahaanense",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Bulbophyllum plumatum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Bulbophyllum planibulbe",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Bulbophyllum phalaenopsis",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Scaphyglottis",
    "genus": "Scaphyglottis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Bulbophyllum patella",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Bulbophyllum orthoglossum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Bulbophyllum oreonastes",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Bulbophyllum nigericum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Scolymia",
    "genus": "Scolymia",
    "family": "Mussidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Scuticaria",
    "genus": "Scuticaria",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Sedirea japonica",
    "genus": "Sedirea",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Bulbophyllum nemorale",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Seriatopora",
    "genus": "Seriatopora",
    "family": "Pocilloporidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Bulbophyllum multiflorum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Bulbophyllum lupulinum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Bulbophyllum lucidum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Ziphiidae",
    "genus": "",
    "family": "Ziphiidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Smitinandia micrantha",
    "genus": "Smitinandia",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Varanus bitatawa",
    "genus": "Varanus",
    "family": "Varanidae",
    "class": "Reptilia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Solenidiopsis",
    "genus": "Solenidiopsis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Solenosmilia",
    "genus": "Solenosmilia",
    "family": "Caryophylliidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Acropora fenneri",
    "genus": "Acropora",
    "family": "Acroporidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Sousa",
    "genus": "Sousa",
    "family": "Delphinidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Bulbophyllum longisepalum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Sousa plumbea",
    "genus": "Sousa",
    "family": "Delphinidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Bulbophyllum lipense",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Spathoglottis affinis",
    "genus": "Spathoglottis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Bulbophyllum levanae",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Spathoglottis kimballiana",
    "genus": "Spathoglottis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Bulbophyllum graveolens",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Varanus exanthematicus",
    "genus": "Varanus",
    "family": "Varanidae",
    "class": "Reptilia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Sphenotrochus gilchristi",
    "genus": "Sphenotrochus",
    "family": "Turbinoliidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Bulbophyllum globulosum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Stangeria eriopus",
    "genus": "Stangeria",
    "family": "Stangeriaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Bulbophyllum gimagaanense",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Bulbophyllum escritorii",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Bulbophyllum erosipetalum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Bulbophyllum depressum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Bulbophyllum dayanum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Bulbophyllum dasypetalum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Staurochilus tamesii",
    "genus": "Staurochilus",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Bulbophyllum cruentum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Bulbophyllum contortisepalum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Bulbophyllum comatum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Stenella clymene",
    "genus": "Stenella",
    "family": "Delphinidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Bulbophyllum colubrimodum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Bulbophyllum cocoinum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Bulbophyllum cochleatum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Bulbophyllum canlaonense",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Stenoptera",
    "genus": "Stenoptera",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Bulbophyllum antennatum",
    "genus": "Bulbophyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Varanus flavescens",
    "genus": "Varanus",
    "family": "Varanidae",
    "class": "Reptilia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Bucerotidae",
    "genus": "",
    "family": "Bucerotidae",
    "class": "Aves",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Stereochilus ringens",
    "genus": "Stereochilus",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Sternoclyta cyanopectus",
    "genus": "Sternoclyta",
    "family": "Trochilidae",
    "class": "Aves",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Acropora clathrata",
    "genus": "Acropora",
    "family": "Acroporidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Strix woodfordii",
    "genus": "Strix",
    "family": "Strigidae",
    "class": "Aves",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Buceros rhinoceros",
    "genus": "Buceros",
    "family": "Bucerotidae",
    "class": "Aves",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Bubo",
    "genus": "Bubo",
    "family": "Strigidae",
    "class": "Aves",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Acropora bushyensis",
    "genus": "Acropora",
    "family": "Acroporidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Varanus komodoensis",
    "genus": "Varanus",
    "family": "Varanidae",
    "class": "Reptilia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Stylasteridae",
    "genus": "",
    "family": "Stylasteridae",
    "class": "Hydrozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Stylophora",
    "genus": "Stylophora",
    "family": "Pocilloporidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Browningia hertlingiana",
    "genus": "Browningia",
    "family": "Cactaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Branta canadensis leucopareia",
    "genus": "Branta",
    "family": "Anatidae",
    "class": "Aves",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Symphyllia",
    "genus": "Symphyllia",
    "family": "Mussidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Tainia",
    "genus": "Tainia",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Bovidae hybrid",
    "genus": "",
    "family": "Bovidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Bos gaurus",
    "genus": "Bos",
    "family": "Bovidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Tapirus indicus",
    "genus": "Tapirus",
    "family": "Tapiridae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Borzicactus icosagonus",
    "genus": "Borzicactus",
    "family": "Cactaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Tauraco persa",
    "genus": "Tauraco",
    "family": "Musophagidae",
    "class": "Aves",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Borzicactus fieldianus",
    "genus": "Borzicactus",
    "family": "Cactaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Acropora awi",
    "genus": "Acropora",
    "family": "Acroporidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Borzicactus",
    "genus": "Borzicactus",
    "family": "Cactaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Bolyeria multocarinata",
    "genus": "Bolyeria",
    "family": "Bolyeriidae",
    "class": "Reptilia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Bolusiella maudiae",
    "genus": "Bolusiella",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Thalamophyllia",
    "genus": "Thalamophyllia",
    "family": "Caryophylliidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Boidae",
    "genus": "",
    "family": "Boidae",
    "class": "Reptilia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Thelasis",
    "genus": "Thelasis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Blossfeldia",
    "genus": "Blossfeldia",
    "family": "Cactaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Blastomussa",
    "genus": "Blastomussa",
    "family": "Mussidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Bathypathes",
    "genus": "Bathypathes",
    "family": "Schizopathidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Batagur baska",
    "genus": "Batagur",
    "family": "Geoemydidae",
    "class": "Reptilia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Thrixspermum angustatum",
    "genus": "Thrixspermum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Balanophyllia europaea",
    "genus": "Balanophyllia",
    "family": "Dendrophylliidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Babyrousa babyrussa",
    "genus": "Babyrousa",
    "family": "Suidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Thrixspermum hybrid",
    "genus": "Thrixspermum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Aztekium ritteri",
    "genus": "Aztekium",
    "family": "Cactaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Axis porcinus annamiticus",
    "genus": "Axis",
    "family": "Cervidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Varanus niloticus",
    "genus": "Varanus",
    "family": "Varanidae",
    "class": "Reptilia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Axis kuhlii",
    "genus": "Axis",
    "family": "Cervidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Thunia",
    "genus": "Thunia",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Axis calamianensis",
    "genus": "Axis",
    "family": "Cervidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Atelopus zeteki",
    "genus": "Atelopus",
    "family": "Bufonidae",
    "class": "Amphibia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Astya",
    "genus": "Astya",
    "family": "Stylasteridae",
    "class": "Hydrozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Astrophytum myriostigma",
    "genus": "Astrophytum",
    "family": "Cactaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Astrophytum asterias",
    "genus": "Astrophytum",
    "family": "Cactaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Acropora abrolhosensis",
    "genus": "Acropora",
    "family": "Acroporidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Trachyphyllia geoffroyi",
    "genus": "Trachyphyllia",
    "family": "Trachyphylliidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Trias",
    "genus": "Trias",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Astroides calycularis",
    "genus": "Astroides",
    "family": "Dendrophylliidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Trichoglossus",
    "genus": "Trichoglossus",
    "family": "Loriidae",
    "class": "Aves",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Astreopora",
    "genus": "Astreopora",
    "family": "Acroporidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Asio capensis",
    "genus": "Asio",
    "family": "Strigidae",
    "class": "Aves",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Ascoglossum",
    "genus": "Ascoglossum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Ascocentrum",
    "genus": "Ascocentrum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Arundina bambusifolia",
    "genus": "Arundina",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Trichoglottis hybrid",
    "genus": "Trichoglottis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Ariocarpus retusus",
    "genus": "Ariocarpus",
    "family": "Cactaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Trichoglottis loheriana",
    "genus": "Trichoglottis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Trichoglottis luzonensis",
    "genus": "Trichoglottis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Trichoglottis mimica",
    "genus": "Trichoglottis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Ariocarpus fissuratus",
    "genus": "Ariocarpus",
    "family": "Cactaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Trichotosia",
    "genus": "Trichotosia",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Trichotosia lagunensis",
    "genus": "Trichotosia",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Arctocephalus",
    "genus": "Arctocephalus",
    "family": "Otariidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Aratinga",
    "genus": "Aratinga",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Arachnis hybrid",
    "genus": "Arachnis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Arachnis",
    "genus": "Arachnis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Acrantophis dumerili",
    "genus": "Acrantophis",
    "family": "Boidae",
    "class": "Reptilia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Appendicula torta",
    "genus": "Appendicula",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Appendicula pendula",
    "genus": "Appendicula",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Tridactyle",
    "genus": "Tridactyle",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Tridactyle armeniaca",
    "genus": "Tridactyle",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Tridactyle tridactylites",
    "genus": "Tridactyle",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Tridactyle tridentata",
    "genus": "Tridactyle",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Trioceros bitaeniatus",
    "genus": "Trioceros",
    "family": "Chamaeleonidae",
    "class": "Reptilia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Masdevallia ustulata",
    "genus": "Masdevallia",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Matucana madisoniorum",
    "genus": "Matucana",
    "family": "Cactaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Masdevallia",
    "genus": "Masdevallia",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Matucana ritteri",
    "genus": "Matucana",
    "family": "Cactaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Manta birostris",
    "genus": "Manta",
    "family": "Myliobatidae",
    "class": "Elasmobranchii",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Manis tetradactyla",
    "genus": "Manis",
    "family": "Manidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Melanochelys tricarinata",
    "genus": "Melanochelys",
    "family": "Geoemydidae",
    "class": "Reptilia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Manis gigantea",
    "genus": "Manis",
    "family": "Manidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Manis",
    "genus": "Manis",
    "family": "Manidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Aa",
    "genus": "Aa",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Melursus ursinus",
    "genus": "Melursus",
    "family": "Ursidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Mammillaria orcuttii",
    "genus": "Mammillaria",
    "family": "Cactaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Mesoplodon",
    "genus": "Mesoplodon",
    "family": "Ziphiidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Mesoplodon bidens",
    "genus": "Mesoplodon",
    "family": "Ziphiidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Mesoplodon bowdoini",
    "genus": "Mesoplodon",
    "family": "Ziphiidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Mesoplodon carlhubbsi",
    "genus": "Mesoplodon",
    "family": "Ziphiidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Mammillaria albicoma",
    "genus": "Mammillaria",
    "family": "Cactaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Mammillaria",
    "genus": "Mammillaria",
    "family": "Cactaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Mesoplodon ginkgodens",
    "genus": "Mesoplodon",
    "family": "Ziphiidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Malleola eburnea",
    "genus": "Malleola",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Madracis asanoi",
    "genus": "Madracis",
    "family": "Pocilloporidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Trioceros cristatus",
    "genus": "Trioceros",
    "family": "Chamaeleonidae",
    "class": "Reptilia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Trioceros ituriensis",
    "genus": "Trioceros",
    "family": "Chamaeleonidae",
    "class": "Reptilia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Mesoplodon perrini",
    "genus": "Mesoplodon",
    "family": "Ziphiidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Mesoplodon peruvianus",
    "genus": "Mesoplodon",
    "family": "Ziphiidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Mesoplodon stejnegeri",
    "genus": "Mesoplodon",
    "family": "Ziphiidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Madracis",
    "genus": "Madracis",
    "family": "Pocilloporidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Microcebus murinus",
    "genus": "Microcebus",
    "family": "Cheirogaleidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Microcycas calocoma",
    "genus": "Microcycas",
    "family": "Zamiaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Macaca",
    "genus": "Macaca",
    "family": "Cercopithecidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Lynx pardinus",
    "genus": "Lynx",
    "family": "Felidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Micropera pallida",
    "genus": "Micropera",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Lycopodium clavatum",
    "genus": "Lycopodium",
    "family": "Lycopodiaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Mila caespitosa",
    "genus": "Mila",
    "family": "Cactaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Ludisia",
    "genus": "Ludisia",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Millepora dichotoma",
    "genus": "Millepora",
    "family": "Milleporidae",
    "class": "Hydrozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Millepora tenera",
    "genus": "Millepora",
    "family": "Milleporidae",
    "class": "Hydrozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Loxodonta",
    "genus": "Loxodonta",
    "family": "Elephantidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Monachus schauinslandi",
    "genus": "Monachus",
    "family": "Phocidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Lophelia",
    "genus": "Lophelia",
    "family": "Caryophylliidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Montastrea colemani",
    "genus": "Montastrea",
    "family": "Faviidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Montastrea multipunctata",
    "genus": "Montastrea",
    "family": "Faviidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Montastrea salebrosa",
    "genus": "Montastrea",
    "family": "Faviidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Montastrea valenciennesi",
    "genus": "Montastrea",
    "family": "Faviidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Lontra provocax",
    "genus": "Lontra",
    "family": "Mustelidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Achatinella",
    "genus": "Achatinella",
    "family": "Achatinellidae",
    "class": "Gastropoda",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Montipora digitata",
    "genus": "Montipora",
    "family": "Acroporidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Montipora setosa",
    "genus": "Montipora",
    "family": "Acroporidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Lontra longicaudis",
    "genus": "Lontra",
    "family": "Mustelidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Mustela nigripes",
    "genus": "Mustela",
    "family": "Mustelidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Accipiter minullus",
    "genus": "Accipiter",
    "family": "Accipitridae",
    "class": "Aves",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Lobophyllia robusta",
    "genus": "Lobophyllia",
    "family": "Mussidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Mycteria cinerea",
    "genus": "Mycteria",
    "family": "Ciconiidae",
    "class": "Aves",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Myiopsitta monachus",
    "genus": "Myiopsitta",
    "family": "Psittacidae",
    "class": "Aves",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Myoxanthus",
    "genus": "Myoxanthus",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Trioceros wiedersheimi",
    "genus": "Trioceros",
    "family": "Chamaeleonidae",
    "class": "Reptilia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Lobophyllia",
    "genus": "Lobophyllia",
    "family": "Mussidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Trionyx",
    "genus": "Trionyx",
    "family": "Trionychidae",
    "class": "Reptilia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Naja kaouthia",
    "genus": "Naja",
    "family": "Elapidae",
    "class": "Reptilia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Lissodelphis borealis",
    "genus": "Lissodelphis",
    "family": "Delphinidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Liparis somae",
    "genus": "Liparis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Nanger dama",
    "genus": "Nanger",
    "family": "Bovidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Appendicula laxifolia",
    "genus": "Appendicula",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Appendicula cornuta",
    "genus": "Appendicula",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Liparis nervosa",
    "genus": "Liparis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Neoraimondia herzogiana",
    "genus": "Neoraimondia",
    "family": "Cactaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Liparis epiphytica",
    "genus": "Liparis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Liparis elegantula",
    "genus": "Liparis",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Leptoseris yabei",
    "genus": "Leptoseris",
    "family": "Agariciidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Nepenthes ampullaria",
    "genus": "Nepenthes",
    "family": "Nepenthaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Leptopsammia pruvoti",
    "genus": "Leptopsammia",
    "family": "Dendrophylliidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Leptastrea",
    "genus": "Leptastrea",
    "family": "Faviidae",
    "class": "Anthozoa",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Nepenthes eustachya",
    "genus": "Nepenthes",
    "family": "Nepenthaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Nepenthes hybrid",
    "genus": "Nepenthes",
    "family": "Nepenthaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Nepenthes khasiana",
    "genus": "Nepenthes",
    "family": "Nepenthaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Lepilemur ruficaudatus",
    "genus": "Lepilemur",
    "family": "Lepilemuridae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Apostasia",
    "genus": "Apostasia",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Apalone spinifera atra",
    "genus": "Apalone",
    "family": "Trionychidae",
    "class": "Reptilia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Nepenthes pectinata",
    "genus": "Nepenthes",
    "family": "Nepenthaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Lepanthes",
    "genus": "Lepanthes",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Nepenthes rafflesiana",
    "genus": "Nepenthes",
    "family": "Nepenthaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Nepenthes sanguinea",
    "genus": "Nepenthes",
    "family": "Nepenthaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Nepenthes thorelii",
    "genus": "Nepenthes",
    "family": "Nepenthaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Latimeria chalumnae",
    "genus": "Latimeria",
    "family": "Latimeriidae",
    "class": "Coelacanthi",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Lampsilis satur",
    "genus": "Lampsilis",
    "family": "Unionidae",
    "class": "Bivalvia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Nephelaphyllum",
    "genus": "Nephelaphyllum",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Lagenorhynchus australis",
    "genus": "Lagenorhynchus",
    "family": "Delphinidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Nervilia aragoana",
    "genus": "Nervilia",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Tropidia",
    "genus": "Tropidia",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Tropidia angulosa",
    "genus": "Tropidia",
    "family": "Orchidaceae",
    "class": "",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Kinyongia adolfifriderici",
    "genus": "Kinyongia",
    "family": "Chamaeleonidae",
    "class": "Reptilia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Nomascus concolor",
    "genus": "Nomascus",
    "family": "Hylobatidae",
    "class": "Mammalia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Kinixys belliana",
    "genus": "Kinixys",
    "family": "Testudinidae",
    "class": "Reptilia",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "taxon": "Accipiter gularis",
    "genus": "Accipiter",
    "family": "Accipitridae",
    "class": "Aves",
    "cnt": 1,
    "percent": 0.0010410160316468874
  }
]

module.exports = data