const dummyData = [
  {
    "exporter": "PH",
    "cnt": 33435,
    "percent": 34.80637101811368
  },
  {
    "exporter": "ZW",
    "cnt": 25359,
    "percent": 26.399125546533416
  },
  {
    "exporter": "CO",
    "cnt": 5097,
    "percent": 5.306058713304185
  },
  {
    "exporter": "MG",
    "cnt": 5088,
    "percent": 5.296689569019363
  },
  {
    "exporter": "LA",
    "cnt": 1868,
    "percent": 1.9446179471163856
  },
  {
    "exporter": "CA",
    "cnt": 1854,
    "percent": 1.9300437226733291
  },
  {
    "exporter": "GL",
    "cnt": 1554,
    "percent": 1.617738913179263
  },
  {
    "exporter": "NA",
    "cnt": 1527,
    "percent": 1.589631480324797
  },
  {
    "exporter": "PE",
    "cnt": 1508,
    "percent": 1.569852175723506
  },
  {
    "exporter": "RU",
    "cnt": 1356,
    "percent": 1.4116177389131792
  },
  {
    "exporter": "PY",
    "cnt": 1227,
    "percent": 1.2773266708307307
  },
  {
    "exporter": "CD",
    "cnt": 1089,
    "percent": 1.1336664584634604
  },
  {
    "exporter": "NG",
    "cnt": 1045,
    "percent": 1.0878617530709973
  },
  {
    "exporter": "HT",
    "cnt": 979,
    "percent": 1.0191546949823027
  },
  {
    "exporter": "FJ",
    "cnt": 978,
    "percent": 1.0181136789506557
  },
  {
    "exporter": "ZA",
    "cnt": 807,
    "percent": 0.8400999375390381
  },
  {
    "exporter": "US",
    "cnt": 785,
    "percent": 0.8171975848428066
  },
  {
    "exporter": "IT",
    "cnt": 752,
    "percent": 0.7828440557984593
  },
  {
    "exporter": "IN",
    "cnt": 653,
    "percent": 0.6797834686654175
  },
  {
    "exporter": "EG",
    "cnt": 597,
    "percent": 0.6214865708931917
  },
  {
    "exporter": "TH",
    "cnt": 438,
    "percent": 0.45596502186133664
  },
  {
    "exporter": "MZ",
    "cnt": 394,
    "percent": 0.41016031646887363
  },
  {
    "exporter": "ZZ",
    "cnt": 385,
    "percent": 0.40079117218405164
  },
  {
    "exporter": "TZ",
    "cnt": 372,
    "percent": 0.3872579637726421
  },
  {
    "exporter": "BW",
    "cnt": 351,
    "percent": 0.3653966271080575
  },
  {
    "exporter": "SB",
    "cnt": 335,
    "percent": 0.34874037060170726
  },
  {
    "exporter": "CN",
    "cnt": 316,
    "percent": 0.3289610660004164
  },
  {
    "exporter": "IS",
    "cnt": 303,
    "percent": 0.3154278575890069
  },
  {
    "exporter": "SA",
    "cnt": 293,
    "percent": 0.305017697272538
  },
  {
    "exporter": "VN",
    "cnt": 266,
    "percent": 0.27691026441807204
  },
  {
    "exporter": "NZ",
    "cnt": 262,
    "percent": 0.2727462002914845
  },
  {
    "exporter": "JP",
    "cnt": 240,
    "percent": 0.24984384759525297
  },
  {
    "exporter": "FR",
    "cnt": 227,
    "percent": 0.23631063918384343
  },
  {
    "exporter": "KZ",
    "cnt": 223,
    "percent": 0.2321465750572559
  },
  {
    "exporter": "SR",
    "cnt": 218,
    "percent": 0.22694149489902143
  },
  {
    "exporter": "PK",
    "cnt": 203,
    "percent": 0.21132625442431813
  },
  {
    "exporter": "DE",
    "cnt": 178,
    "percent": 0.18530085363314594
  },
  {
    "exporter": "MN",
    "cnt": 173,
    "percent": 0.1800957734749115
  },
  {
    "exporter": "MX",
    "cnt": 171,
    "percent": 0.17801374141161774
  },
  {
    "exporter": "AU",
    "cnt": 167,
    "percent": 0.1738496772850302
  },
  {
    "exporter": "IR",
    "cnt": 162,
    "percent": 0.16864459712679575
  },
  {
    "exporter": "GB",
    "cnt": 162,
    "percent": 0.16864459712679575
  },
  {
    "exporter": "TG",
    "cnt": 154,
    "percent": 0.16031646887362067
  },
  {
    "exporter": "AR",
    "cnt": 151,
    "percent": 0.15719342077867998
  },
  {
    "exporter": "NO",
    "cnt": 142,
    "percent": 0.14782427649385801
  },
  {
    "exporter": "GN",
    "cnt": 103,
    "percent": 0.10722465125962939
  },
  {
    "exporter": "IL",
    "cnt": 100,
    "percent": 0.10410160316468874
  },
  {
    "exporter": "CH",
    "cnt": 99,
    "percent": 0.10306058713304185
  },
  {
    "exporter": "CL",
    "cnt": 93,
    "percent": 0.09681449094316052
  },
  {
    "exporter": "EC",
    "cnt": 93,
    "percent": 0.09681449094316052
  },
  {
    "exporter": "CF",
    "cnt": 71,
    "percent": 0.07391213824692901
  },
  {
    "exporter": "CM",
    "cnt": 68,
    "percent": 0.07078909015198834
  },
  {
    "exporter": "XX",
    "cnt": 66,
    "percent": 0.06870705808869457
  },
  {
    "exporter": "BR",
    "cnt": 56,
    "percent": 0.05829689777222569
  },
  {
    "exporter": "BS",
    "cnt": 55,
    "percent": 0.05725588174057881
  },
  {
    "exporter": "MY",
    "cnt": 54,
    "percent": 0.056214865708931916
  },
  {
    "exporter": "OM",
    "cnt": 52,
    "percent": 0.054132833645638145
  },
  {
    "exporter": "SD",
    "cnt": 47,
    "percent": 0.048927753487403705
  },
  {
    "exporter": "HK",
    "cnt": 47,
    "percent": 0.048927753487403705
  },
  {
    "exporter": "LR",
    "cnt": 44,
    "percent": 0.04580470539246304
  },
  {
    "exporter": "BJ",
    "cnt": 44,
    "percent": 0.04580470539246304
  },
  {
    "exporter": "DK",
    "cnt": 43,
    "percent": 0.04476368936081616
  },
  {
    "exporter": "ID",
    "cnt": 42,
    "percent": 0.04372267332916927
  },
  {
    "exporter": "SN",
    "cnt": 40,
    "percent": 0.041640641265875494
  },
  {
    "exporter": "LK",
    "cnt": 38,
    "percent": 0.03955860920258172
  },
  {
    "exporter": "BE",
    "cnt": 35,
    "percent": 0.03643556110764106
  },
  {
    "exporter": "ES",
    "cnt": 31,
    "percent": 0.032271496981053506
  },
  {
    "exporter": "CU",
    "cnt": 30,
    "percent": 0.03123048094940662
  },
  {
    "exporter": "GY",
    "cnt": 30,
    "percent": 0.03123048094940662
  },
  {
    "exporter": "HN",
    "cnt": 26,
    "percent": 0.027066416822819073
  },
  {
    "exporter": "ML",
    "cnt": 26,
    "percent": 0.027066416822819073
  },
  {
    "exporter": "GH",
    "cnt": 25,
    "percent": 0.026025400791172184
  },
  {
    "exporter": "AE",
    "cnt": 24,
    "percent": 0.024984384759525295
  },
  {
    "exporter": "SG",
    "cnt": 24,
    "percent": 0.024984384759525295
  },
  {
    "exporter": "BI",
    "cnt": 23,
    "percent": 0.02394336872787841
  },
  {
    "exporter": "UY",
    "cnt": 23,
    "percent": 0.02394336872787841
  },
  {
    "exporter": "AT",
    "cnt": 23,
    "percent": 0.02394336872787841
  },
  {
    "exporter": "SV",
    "cnt": 22,
    "percent": 0.02290235269623152
  },
  {
    "exporter": "ST",
    "cnt": 22,
    "percent": 0.02290235269623152
  },
  {
    "exporter": "ZM",
    "cnt": 22,
    "percent": 0.02290235269623152
  },
  {
    "exporter": "UA",
    "cnt": 21,
    "percent": 0.021861336664584636
  },
  {
    "exporter": "LS",
    "cnt": 21,
    "percent": 0.021861336664584636
  },
  {
    "exporter": "PG",
    "cnt": 20,
    "percent": 0.020820320632937747
  },
  {
    "exporter": "DO",
    "cnt": 19,
    "percent": 0.01977930460129086
  },
  {
    "exporter": "SO",
    "cnt": 19,
    "percent": 0.01977930460129086
  },
  {
    "exporter": "TW",
    "cnt": 17,
    "percent": 0.017697272537997084
  },
  {
    "exporter": "LY",
    "cnt": 15,
    "percent": 0.01561524047470331
  },
  {
    "exporter": "FK",
    "cnt": 14,
    "percent": 0.014574224443056423
  },
  {
    "exporter": "MW",
    "cnt": 14,
    "percent": 0.014574224443056423
  },
  {
    "exporter": "TR",
    "cnt": 14,
    "percent": 0.014574224443056423
  },
  {
    "exporter": "NC",
    "cnt": 14,
    "percent": 0.014574224443056423
  },
  {
    "exporter": "MU",
    "cnt": 14,
    "percent": 0.014574224443056423
  },
  {
    "exporter": "AQ",
    "cnt": 14,
    "percent": 0.014574224443056423
  },
  {
    "exporter": "GD",
    "cnt": 13,
    "percent": 0.013533208411409536
  },
  {
    "exporter": "KR",
    "cnt": 12,
    "percent": 0.012492192379762648
  },
  {
    "exporter": "NL",
    "cnt": 11,
    "percent": 0.01145117634811576
  },
  {
    "exporter": "BM",
    "cnt": 11,
    "percent": 0.01145117634811576
  },
  {
    "exporter": "VE",
    "cnt": 11,
    "percent": 0.01145117634811576
  },
  {
    "exporter": "FO",
    "cnt": 11,
    "percent": 0.01145117634811576
  },
  {
    "exporter": "MC",
    "cnt": 11,
    "percent": 0.01145117634811576
  },
  {
    "exporter": "PT",
    "cnt": 11,
    "percent": 0.01145117634811576
  },
  {
    "exporter": "NI",
    "cnt": 10,
    "percent": 0.010410160316468874
  },
  {
    "exporter": "KH",
    "cnt": 9,
    "percent": 0.009369144284821987
  },
  {
    "exporter": "UG",
    "cnt": 9,
    "percent": 0.009369144284821987
  },
  {
    "exporter": "BH",
    "cnt": 8,
    "percent": 0.0083281282531751
  },
  {
    "exporter": "CZ",
    "cnt": 8,
    "percent": 0.0083281282531751
  },
  {
    "exporter": "GW",
    "cnt": 8,
    "percent": 0.0083281282531751
  },
  {
    "exporter": "PF",
    "cnt": 8,
    "percent": 0.0083281282531751
  },
  {
    "exporter": "VG",
    "cnt": 8,
    "percent": 0.0083281282531751
  },
  {
    "exporter": "TM",
    "cnt": 7,
    "percent": 0.007287112221528212
  },
  {
    "exporter": "WS",
    "cnt": 7,
    "percent": 0.007287112221528212
  },
  {
    "exporter": "VC",
    "cnt": 7,
    "percent": 0.007287112221528212
  },
  {
    "exporter": "GQ",
    "cnt": 7,
    "percent": 0.007287112221528212
  },
  {
    "exporter": "PW",
    "cnt": 6,
    "percent": 0.006246096189881324
  },
  {
    "exporter": "KE",
    "cnt": 6,
    "percent": 0.006246096189881324
  },
  {
    "exporter": "BZ",
    "cnt": 6,
    "percent": 0.006246096189881324
  },
  {
    "exporter": "AF",
    "cnt": 6,
    "percent": 0.006246096189881324
  },
  {
    "exporter": "CV",
    "cnt": 5,
    "percent": 0.005205080158234437
  },
  {
    "exporter": "TO",
    "cnt": 5,
    "percent": 0.005205080158234437
  },
  {
    "exporter": "SE",
    "cnt": 5,
    "percent": 0.005205080158234437
  },
  {
    "exporter": "DM",
    "cnt": 5,
    "percent": 0.005205080158234437
  },
  {
    "exporter": "GA",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "exporter": "RW",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "exporter": "MV",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "exporter": "AM",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "exporter": "TD",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "exporter": "IM",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "exporter": "CR",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "exporter": "MR",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "exporter": "PA",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "exporter": "GT",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "exporter": "BD",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "exporter": "SZ",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "exporter": "TN",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "exporter": "KM",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "exporter": "VU",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "exporter": "GM",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "exporter": "PC",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "exporter": "SK",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "exporter": "HU",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "exporter": "SC",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "exporter": "KY",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "exporter": "CI",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "exporter": "GS",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "exporter": "NP",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "exporter": "PL",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "exporter": "MM",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "exporter": "CG",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "exporter": "JM",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "exporter": "AO",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "exporter": "MH",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "exporter": "JO",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "exporter": "BF",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "exporter": "ME",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "exporter": "AN",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "exporter": "FI",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "exporter": "KI",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "exporter": "BO",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "exporter": "UZ",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "exporter": "NE",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "exporter": "MA",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "exporter": "YE",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "exporter": "KG",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "exporter": "CK",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "exporter": "QA",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "exporter": "MT",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "exporter": "LC",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "exporter": "CY",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "exporter": "FM",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "exporter": "XV",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "exporter": "GR",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "exporter": "ZC",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "exporter": "ET",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "exporter": "BG",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "exporter": "PR",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "exporter": "SI",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "exporter": "SX",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "exporter": "AZ",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "exporter": "BA",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "exporter": "LT",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "exporter": "EE",
    "cnt": 1,
    "percent": 0.0010410160316468874
  }
]

const data = {
  '2014': dummyData,
  '2015': dummyData,
  '2016': dummyData,
  '2017': dummyData
}

module.exports = data