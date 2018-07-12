const dummyData = [
  {
    "importer": "US",
    "cnt": 24015,
    "percent": 25
  },
  {
    "importer": "JP",
    "cnt": 13362,
    "percent": 13.910056214865708
  },
  {
    "importer": "CN",
    "cnt": 12306,
    "percent": 12.810743285446597
  },
  {
    "importer": "DE",
    "cnt": 6893,
    "percent": 7.175723506141995
  },
  {
    "importer": "TW",
    "cnt": 2500,
    "percent": 2.6025400791172184
  },
  {
    "importer": "SG",
    "cnt": 2196,
    "percent": 2.2860712054965644
  },
  {
    "importer": "MX",
    "cnt": 1998,
    "percent": 2.079950031230481
  },
  {
    "importer": "DK",
    "cnt": 1884,
    "percent": 1.9612742036227357
  },
  {
    "importer": "NZ",
    "cnt": 1884,
    "percent": 1.9612742036227357
  },
  {
    "importer": "AE",
    "cnt": 1872,
    "percent": 1.948782011242973
  },
  {
    "importer": "HK",
    "cnt": 1802,
    "percent": 1.875910889027691
  },
  {
    "importer": "ZA",
    "cnt": 1761,
    "percent": 1.8332292317301686
  },
  {
    "importer": "RU",
    "cnt": 1693,
    "percent": 1.7624401415781803
  },
  {
    "importer": "CA",
    "cnt": 1662,
    "percent": 1.7301686445971267
  },
  {
    "importer": "ES",
    "cnt": 1579,
    "percent": 1.6437643139704352
  },
  {
    "importer": "TH",
    "cnt": 1349,
    "percent": 1.404330626691651
  },
  {
    "importer": "FR",
    "cnt": 1278,
    "percent": 1.330418488444722
  },
  {
    "importer": "GB",
    "cnt": 1184,
    "percent": 1.2325629814699146
  },
  {
    "importer": "AU",
    "cnt": 1099,
    "percent": 1.1440766187799292
  },
  {
    "importer": "IT",
    "cnt": 1001,
    "percent": 1.0420570476785342
  },
  {
    "importer": "KR",
    "cnt": 940,
    "percent": 0.9785550697480742
  },
  {
    "importer": "UA",
    "cnt": 854,
    "percent": 0.8890276910264419
  },
  {
    "importer": "CH",
    "cnt": 819,
    "percent": 0.8525921299188007
  },
  {
    "importer": "AT",
    "cnt": 596,
    "percent": 0.6204455548615448
  },
  {
    "importer": "ID",
    "cnt": 572,
    "percent": 0.5954611701020196
  },
  {
    "importer": "CZ",
    "cnt": 538,
    "percent": 0.5600666250260254
  },
  {
    "importer": "MY",
    "cnt": 499,
    "percent": 0.5194669997917968
  },
  {
    "importer": "BE",
    "cnt": 427,
    "percent": 0.44451384551322093
  },
  {
    "importer": "NL",
    "cnt": 399,
    "percent": 0.41536539662710803
  },
  {
    "importer": "VN",
    "cnt": 391,
    "percent": 0.40703726837393295
  },
  {
    "importer": "PL",
    "cnt": 338,
    "percent": 0.35186341869664794
  },
  {
    "importer": "IN",
    "cnt": 258,
    "percent": 0.26858213616489696
  },
  {
    "importer": "HU",
    "cnt": 257,
    "percent": 0.26754112013325004
  },
  {
    "importer": "SA",
    "cnt": 254,
    "percent": 0.2644180720383094
  },
  {
    "importer": "PK",
    "cnt": 244,
    "percent": 0.2540079117218405
  },
  {
    "importer": "BR",
    "cnt": 233,
    "percent": 0.24255673537372477
  },
  {
    "importer": "AR",
    "cnt": 233,
    "percent": 0.24255673537372477
  },
  {
    "importer": "KZ",
    "cnt": 209,
    "percent": 0.21757235061419947
  },
  {
    "importer": "QA",
    "cnt": 206,
    "percent": 0.21444930251925878
  },
  {
    "importer": "SK",
    "cnt": 202,
    "percent": 0.21028523839267124
  },
  {
    "importer": "TR",
    "cnt": 199,
    "percent": 0.2071621902977306
  },
  {
    "importer": "KW",
    "cnt": 197,
    "percent": 0.20508015823443682
  },
  {
    "importer": "LK",
    "cnt": 196,
    "percent": 0.20403914220278993
  },
  {
    "importer": "DO",
    "cnt": 163,
    "percent": 0.16968561315844263
  },
  {
    "importer": "CR",
    "cnt": 157,
    "percent": 0.16343951696856132
  },
  {
    "importer": "MD",
    "cnt": 147,
    "percent": 0.15302935665209244
  },
  {
    "importer": "SE",
    "cnt": 137,
    "percent": 0.14261919633562356
  },
  {
    "importer": "PT",
    "cnt": 137,
    "percent": 0.14261919633562356
  },
  {
    "importer": "NO",
    "cnt": 136,
    "percent": 0.14157818030397668
  },
  {
    "importer": "BG",
    "cnt": 135,
    "percent": 0.1405371642723298
  },
  {
    "importer": "IR",
    "cnt": 126,
    "percent": 0.1311680199875078
  },
  {
    "importer": "XX",
    "cnt": 122,
    "percent": 0.12700395586092025
  },
  {
    "importer": "ZW",
    "cnt": 106,
    "percent": 0.11034769935457006
  },
  {
    "importer": "BH",
    "cnt": 105,
    "percent": 0.10930668332292318
  },
  {
    "importer": "UZ",
    "cnt": 105,
    "percent": 0.10930668332292318
  },
  {
    "importer": "MG",
    "cnt": 81,
    "percent": 0.08432229856339787
  },
  {
    "importer": "RO",
    "cnt": 73,
    "percent": 0.07599417031022278
  },
  {
    "importer": "MA",
    "cnt": 71,
    "percent": 0.07391213824692901
  },
  {
    "importer": "TN",
    "cnt": 66,
    "percent": 0.06870705808869457
  },
  {
    "importer": "GR",
    "cnt": 63,
    "percent": 0.0655840099937539
  },
  {
    "importer": "PY",
    "cnt": 63,
    "percent": 0.0655840099937539
  },
  {
    "importer": "LT",
    "cnt": 62,
    "percent": 0.06454299396210701
  },
  {
    "importer": "MP",
    "cnt": 59,
    "percent": 0.061419945867166356
  },
  {
    "importer": "LB",
    "cnt": 59,
    "percent": 0.061419945867166356
  },
  {
    "importer": "PW",
    "cnt": 54,
    "percent": 0.056214865708931916
  },
  {
    "importer": "PR",
    "cnt": 52,
    "percent": 0.054132833645638145
  },
  {
    "importer": "KP",
    "cnt": 52,
    "percent": 0.054132833645638145
  },
  {
    "importer": "OM",
    "cnt": 51,
    "percent": 0.05309181761399125
  },
  {
    "importer": "FI",
    "cnt": 50,
    "percent": 0.05205080158234437
  },
  {
    "importer": "JO",
    "cnt": 41,
    "percent": 0.04268165729752238
  },
  {
    "importer": "LU",
    "cnt": 40,
    "percent": 0.041640641265875494
  },
  {
    "importer": "EG",
    "cnt": 38,
    "percent": 0.03955860920258172
  },
  {
    "importer": "NA",
    "cnt": 37,
    "percent": 0.03851759317093483
  },
  {
    "importer": "GU",
    "cnt": 37,
    "percent": 0.03851759317093483
  },
  {
    "importer": "CO",
    "cnt": 37,
    "percent": 0.03851759317093483
  },
  {
    "importer": "IS",
    "cnt": 36,
    "percent": 0.037476577139287946
  },
  {
    "importer": "SI",
    "cnt": 36,
    "percent": 0.037476577139287946
  },
  {
    "importer": "GH",
    "cnt": 35,
    "percent": 0.03643556110764106
  },
  {
    "importer": "HR",
    "cnt": 34,
    "percent": 0.03539454507599417
  },
  {
    "importer": "FJ",
    "cnt": 34,
    "percent": 0.03539454507599417
  },
  {
    "importer": "TM",
    "cnt": 31,
    "percent": 0.032271496981053506
  },
  {
    "importer": "TZ",
    "cnt": 30,
    "percent": 0.03123048094940662
  },
  {
    "importer": "ML",
    "cnt": 29,
    "percent": 0.030189464917759732
  },
  {
    "importer": "BW",
    "cnt": 29,
    "percent": 0.030189464917759732
  },
  {
    "importer": "FO",
    "cnt": 29,
    "percent": 0.030189464917759732
  },
  {
    "importer": "PE",
    "cnt": 28,
    "percent": 0.029148448886112847
  },
  {
    "importer": "RE",
    "cnt": 28,
    "percent": 0.029148448886112847
  },
  {
    "importer": "AF",
    "cnt": 27,
    "percent": 0.028107432854465958
  },
  {
    "importer": "PH",
    "cnt": 24,
    "percent": 0.024984384759525295
  },
  {
    "importer": "ZM",
    "cnt": 22,
    "percent": 0.02290235269623152
  },
  {
    "importer": "AZ",
    "cnt": 22,
    "percent": 0.02290235269623152
  },
  {
    "importer": "FM",
    "cnt": 22,
    "percent": 0.02290235269623152
  },
  {
    "importer": "UY",
    "cnt": 20,
    "percent": 0.020820320632937747
  },
  {
    "importer": "PA",
    "cnt": 20,
    "percent": 0.020820320632937747
  },
  {
    "importer": "BS",
    "cnt": 18,
    "percent": 0.018738288569643973
  },
  {
    "importer": "TJ",
    "cnt": 18,
    "percent": 0.018738288569643973
  },
  {
    "importer": "VG",
    "cnt": 17,
    "percent": 0.017697272537997084
  },
  {
    "importer": "MO",
    "cnt": 16,
    "percent": 0.0166562565063502
  },
  {
    "importer": "IE",
    "cnt": 16,
    "percent": 0.0166562565063502
  },
  {
    "importer": "SY",
    "cnt": 16,
    "percent": 0.0166562565063502
  },
  {
    "importer": "MH",
    "cnt": 16,
    "percent": 0.0166562565063502
  },
  {
    "importer": "MC",
    "cnt": 15,
    "percent": 0.01561524047470331
  },
  {
    "importer": "IL",
    "cnt": 15,
    "percent": 0.01561524047470331
  },
  {
    "importer": "LY",
    "cnt": 15,
    "percent": 0.01561524047470331
  },
  {
    "importer": "GP",
    "cnt": 15,
    "percent": 0.01561524047470331
  },
  {
    "importer": "NE",
    "cnt": 13,
    "percent": 0.013533208411409536
  },
  {
    "importer": "YU",
    "cnt": 13,
    "percent": 0.013533208411409536
  },
  {
    "importer": "EE",
    "cnt": 12,
    "percent": 0.012492192379762648
  },
  {
    "importer": "LV",
    "cnt": 12,
    "percent": 0.012492192379762648
  },
  {
    "importer": "CY",
    "cnt": 11,
    "percent": 0.01145117634811576
  },
  {
    "importer": "SD",
    "cnt": 11,
    "percent": 0.01145117634811576
  },
  {
    "importer": "MU",
    "cnt": 10,
    "percent": 0.010410160316468874
  },
  {
    "importer": "JM",
    "cnt": 9,
    "percent": 0.009369144284821987
  },
  {
    "importer": "DZ",
    "cnt": 8,
    "percent": 0.0083281282531751
  },
  {
    "importer": "CL",
    "cnt": 8,
    "percent": 0.0083281282531751
  },
  {
    "importer": "VE",
    "cnt": 8,
    "percent": 0.0083281282531751
  },
  {
    "importer": "KH",
    "cnt": 8,
    "percent": 0.0083281282531751
  },
  {
    "importer": "GE",
    "cnt": 8,
    "percent": 0.0083281282531751
  },
  {
    "importer": "PF",
    "cnt": 7,
    "percent": 0.007287112221528212
  },
  {
    "importer": "NC",
    "cnt": 6,
    "percent": 0.006246096189881324
  },
  {
    "importer": "MZ",
    "cnt": 6,
    "percent": 0.006246096189881324
  },
  {
    "importer": "BN",
    "cnt": 6,
    "percent": 0.006246096189881324
  },
  {
    "importer": "SU",
    "cnt": 6,
    "percent": 0.006246096189881324
  },
  {
    "importer": "SO",
    "cnt": 6,
    "percent": 0.006246096189881324
  },
  {
    "importer": "GL",
    "cnt": 6,
    "percent": 0.006246096189881324
  },
  {
    "importer": "SZ",
    "cnt": 6,
    "percent": 0.006246096189881324
  },
  {
    "importer": "AO",
    "cnt": 6,
    "percent": 0.006246096189881324
  },
  {
    "importer": "PG",
    "cnt": 5,
    "percent": 0.005205080158234437
  },
  {
    "importer": "UG",
    "cnt": 5,
    "percent": 0.005205080158234437
  },
  {
    "importer": "SN",
    "cnt": 5,
    "percent": 0.005205080158234437
  },
  {
    "importer": "VU",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "importer": "AM",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "importer": "GT",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "importer": "CI",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "importer": "GA",
    "cnt": 4,
    "percent": 0.00416406412658755
  },
  {
    "importer": "AS",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "importer": "CX",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "importer": "EC",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "importer": "MT",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "importer": "TO",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "importer": "SB",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "importer": "NP",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "importer": "SV",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "importer": "BM",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "importer": "MV",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "importer": "BD",
    "cnt": 3,
    "percent": 0.003123048094940662
  },
  {
    "importer": "AI",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "importer": "ME",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "importer": "GG",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "importer": "WS",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "importer": "RS",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "importer": "NU",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "importer": "MW",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "importer": "GF",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "importer": "AN",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "importer": "YE",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "importer": "NR",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "importer": "KY",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "importer": "KE",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "importer": "BA",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "importer": "NG",
    "cnt": 2,
    "percent": 0.002082032063293775
  },
  {
    "importer": "KN",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "importer": "GM",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "importer": "TV",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "importer": "LS",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "importer": "SL",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "importer": "IQ",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "importer": "PN",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "importer": "CW",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "importer": "BB",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "importer": "ZC",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "importer": "ET",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "importer": "CV",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "importer": "TG",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "importer": "CU",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "importer": "CM",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "importer": "MM",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "importer": "HN",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "importer": "IM",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "importer": "TT",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "importer": "CK",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "importer": "MK",
    "cnt": 1,
    "percent": 0.0010410160316468874
  },
  {
    "importer": "AD",
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