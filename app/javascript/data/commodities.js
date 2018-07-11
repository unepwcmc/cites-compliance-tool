const data = [
  {
    "term": "live",
    "cnt": 40461,
    "percent": 42.12054965646471
  },
  {
    "term": "tusks",
    "cnt": 6610,
    "percent": 6.881115969185926
  },
  {
    "term": "ivory carvings",
    "cnt": 6123,
    "percent": 6.374141161773891
  },
  {
    "term": "trophies",
    "cnt": 6033,
    "percent": 6.280449718925672
  },
  {
    "term": "leather products (small)",
    "cnt": 5617,
    "percent": 5.847387049760567
  },
  {
    "term": "skins",
    "cnt": 5140,
    "percent": 5.350822402665001
  },
  {
    "term": "specimens",
    "cnt": 3157,
    "percent": 3.2864876119092234
  },
  {
    "term": "skin pieces",
    "cnt": 2582,
    "percent": 2.687903393712263
  },
  {
    "term": "logs",
    "cnt": 2410,
    "percent": 2.5088486362689983
  },
  {
    "term": "carvings",
    "cnt": 1647,
    "percent": 1.7145534041224235
  },
  {
    "term": "meat",
    "cnt": 1593,
    "percent": 1.6583385384134917
  },
  {
    "term": "feet",
    "cnt": 1431,
    "percent": 1.4896939412866959
  },
  {
    "term": "teeth",
    "cnt": 1227,
    "percent": 1.2773266708307307
  },
  {
    "term": "ears",
    "cnt": 1142,
    "percent": 1.1888403081407455
  },
  {
    "term": "tails",
    "cnt": 992,
    "percent": 1.0326879033937122
  },
  {
    "term": "leather products (large)",
    "cnt": 940,
    "percent": 0.9785550697480742
  },
  {
    "term": "skulls",
    "cnt": 823,
    "percent": 0.8567561940453883
  },
  {
    "term": "sawn wood",
    "cnt": 690,
    "percent": 0.7183010618363522
  },
  {
    "term": "oil",
    "cnt": 659,
    "percent": 0.6860295648552988
  },
  {
    "term": "pupae",
    "cnt": 570,
    "percent": 0.5933791380387258
  },
  {
    "term": "raw corals",
    "cnt": 560,
    "percent": 0.582968977722257
  },
  {
    "term": "extract",
    "cnt": 544,
    "percent": 0.5663127212159067
  },
  {
    "term": "powder",
    "cnt": 513,
    "percent": 0.5340412242348532
  },
  {
    "term": "bodies",
    "cnt": 475,
    "percent": 0.4944826150322715
  },
  {
    "term": "bones",
    "cnt": 475,
    "percent": 0.4944826150322715
  },
  {
    "term": "timber",
    "cnt": 361,
    "percent": 0.37580678742452633
  },
  {
    "term": "leaves",
    "cnt": 294,
    "percent": 0.3060587133041849
  },
  {
    "term": "stems",
    "cnt": 280,
    "percent": 0.2914844888611285
  },
  {
    "term": "derivatives",
    "cnt": 239,
    "percent": 0.24880283156360608
  },
  {
    "term": "shells",
    "cnt": 210,
    "percent": 0.21861336664584635
  },
  {
    "term": "horn carvings",
    "cnt": 195,
    "percent": 0.20299812617114305
  },
  {
    "term": "wax",
    "cnt": 178,
    "percent": 0.18530085363314594
  },
  {
    "term": "baleen",
    "cnt": 145,
    "percent": 0.15094732458879867
  },
  {
    "term": "caviar",
    "cnt": 136,
    "percent": 0.14157818030397668
  },
  {
    "term": "hair",
    "cnt": 133,
    "percent": 0.13845513220903602
  },
  {
    "term": "leather items",
    "cnt": 118,
    "percent": 0.12283989173433271
  },
  {
    "term": "garments",
    "cnt": 110,
    "percent": 0.11451176348115762
  },
  {
    "term": "sides",
    "cnt": 108,
    "percent": 0.11242973141786383
  },
  {
    "term": "feathers",
    "cnt": 101,
    "percent": 0.10514261919633562
  },
  {
    "term": "horns",
    "cnt": 84,
    "percent": 0.08744534665833854
  },
  {
    "term": "dried plants",
    "cnt": 83,
    "percent": 0.08640433062669164
  },
  {
    "term": "claws",
    "cnt": 74,
    "percent": 0.07703518634186966
  },
  {
    "term": "flowers",
    "cnt": 71,
    "percent": 0.07391213824692901
  },
  {
    "term": "bone carvings",
    "cnt": 70,
    "percent": 0.07287112221528212
  },
  {
    "term": "chips",
    "cnt": 69,
    "percent": 0.07183010618363522
  },
  {
    "term": "shoes",
    "cnt": 62,
    "percent": 0.06454299396210701
  },
  {
    "term": "unspecified",
    "cnt": 59,
    "percent": 0.061419945867166356
  },
  {
    "term": "eggs",
    "cnt": 52,
    "percent": 0.054132833645638145
  },
  {
    "term": "ivory pieces",
    "cnt": 49,
    "percent": 0.05100978555069748
  },
  {
    "term": "trunk",
    "cnt": 44,
    "percent": 0.04580470539246304
  },
  {
    "term": "cultures",
    "cnt": 40,
    "percent": 0.041640641265875494
  },
  {
    "term": "carapaces",
    "cnt": 38,
    "percent": 0.03955860920258172
  },
  {
    "term": "bone pieces",
    "cnt": 30,
    "percent": 0.03123048094940662
  },
  {
    "term": "bark",
    "cnt": 27,
    "percent": 0.028107432854465958
  },
  {
    "term": "cloth",
    "cnt": 22,
    "percent": 0.02290235269623152
  },
  {
    "term": "scales",
    "cnt": 20,
    "percent": 0.020820320632937747
  },
  {
    "term": "skeletons",
    "cnt": 20,
    "percent": 0.020820320632937747
  },
  {
    "term": "medicine",
    "cnt": 18,
    "percent": 0.018738288569643973
  },
  {
    "term": "hair products",
    "cnt": 17,
    "percent": 0.017697272537997084
  },
  {
    "term": "jewellery",
    "cnt": 12,
    "percent": 0.012492192379762648
  },
  {
    "term": "wood product",
    "cnt": 8,
    "percent": 0.0083281282531751
  },
  {
    "term": "veneer",
    "cnt": 8,
    "percent": 0.0083281282531751
  },
  {
    "term": "timber pieces",
    "cnt": 7,
    "percent": 0.007287112221528212
  },
  {
    "term": "piano keys",
    "cnt": 7,
    "percent": 0.007287112221528212
  },
  {
    "term": "genitalia",
    "cnt": 7,
    "percent": 0.007287112221528212
  },
  {
    "term": "seeds",
    "cnt": 6,
    "percent": 0.006246096189881324
  },
  {
    "term": "horn pieces",
    "cnt": 6,
    "percent": 0.006246096189881324
  },
  {
    "term": "fins",
    "cnt": 5,
    "percent": 0.005205080158234437
  },
  {
    "term": "eggs (live)",
    "cnt": 5,
    "percent": 0.005205080158234437
  },
  {
    "term": "horn products",
    "cnt": 5,
    "percent": 0.005205080158234437
  },
  {
    "term": "fibres",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "term": "plates",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "term": "sets of piano keys",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "term": "rug",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "term": "ivory scraps",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "term": "jewellery - ivory",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "term": "roots",
    "cnt": 1,
    "percent": 0.0010410160316468874
  }
]

module.exports = data