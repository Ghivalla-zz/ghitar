const SHOP_DATA = {
  effects: {
    id: 1,
    title: 'Effects',
    routeName: 'Effects',
    items: [
      {
        id: 1,
        name: 'BOSS RC-3',
        imageUrl: 'https://www.woodbrass.com/images/woodbrass/ROLAND+RC+3.JPG',
        price: 133
      },
      {
        id: 2,
        name: 'IBANEZ TUBE SCREAMER TUBE SCREAMER TS9',
        imageUrl: 'https://www.woodbrass.com/images/woodbrass/2550300553003.JPG',
        price: 128
      },
      {
        id: 3,
        name: 'DUNLOP CRY BABY 1999 GCB95N',
        imageUrl: 'https://www.woodbrass.com/images/woodbrass/CRY+BABY.JPG',
        price: 99
      },
      {
        id: 4,
        name: 'ELECTRO HARMONIX BIG MUFF US',
        imageUrl: 'https://www.woodbrass.com/images/woodbrass/EHX+BIGMUFFUS.JPG',
        price: 88
      },
      {
        id: 5,
        name: 'STRYMON BIG SKY REVERB',
        imageUrl: 'https://www.woodbrass.com/images/woodbrass/STRYMON+BIGSKY.JPG',
        price: 499
      },
      {
        id: 6,
        name: 'DUNLOP JIMI HENDRIX FUZZ FACE',
        imageUrl: 'https://www.woodbrass.com/images/woodbrass/MDU+JHF1.JPG',
        price: 189
      },
      {
        id: 7,
        name: 'PROCO RAT2 DISTORTION PEDAL',
        imageUrl: 'https://www.woodbrass.com/images/woodbrass/PROCO+PRORAT+RAT+2+DISTORSION.JPG',
        price: 78
      },
      {
        id: 8,
        name: 'DIGITECH WHAMMY5',
        imageUrl: 'https://www.woodbrass.com/images/woodbrass/DIGITECH+WHAMMY5.JPG',
        price: 150
      },
      {
        id: 9,
        name: 'DUNLOP M102 DYNACOMP',
        imageUrl: 'https://www.woodbrass.com/images/woodbrass/DUNLOP+PED+DYNA+COMP.JPG',
        price: 99
      }
    ]
  },
  amps: {
    id: 2,
    title: 'Amps',
    routeName: 'amps',
    items: [
      {
        id: 10,
        name: 'MARSHALL 1959 SUPER LEAD PLEXI',
        imageUrl: 'https://www.woodbrass.com/images/woodbrass/MMV-1959SLP.JPG',
        price: 2269
      },
      {
        id: 11,
        name: 'FENDER 65 TWIN REVERB',
        imageUrl: 'https://www.woodbrass.com/images/woodbrass/F021-7360-000.JPG',
        price: 1739
      },
      {
        id: 12,
        name: 'MESA BOOGIE DUAL RECTIFIER CHROME PANEL',
        imageUrl: 'https://www.woodbrass.com/images/woodbrass/MMB-2DR1X.JPG',
        price: 3398
      },
      {
        id: 13,
        name: 'VOX AC30C2 CUSTOM',
        imageUrl: 'https://www.woodbrass.com/images/woodbrass/MVO+AC30C2.JPG',
        price: 799
      },
      {
        id: 14,
        name: 'MARSHALL JCM800 2203',
        imageUrl: 'https://www.woodbrass.com/images/woodbrass/MMV-2203.JPG',
        price: 1652
      },
      {
        id: 15,
        name: 'FENDER HOT ROD DELUXE IV BLACK 230V EU',
        imageUrl: 'https://www.woodbrass.com/images/woodbrass/FENDER+2231206000.JPG',
        price: 849
      },
      {
        id: 16,
        name: 'ORANGE ROCKERVERB RK50C112',
        imageUrl: 'https://www.woodbrass.com/images/woodbrass/ORANGE+OR3RK50C112.JPG',
        price: 2275
      },
      {
        id: 17,
        name: 'MESA BOOGIE NEW MARK V (FIVE) 90,45,10W',
        imageUrl: 'https://www.woodbrass.com/images/woodbrass/MMB+1MV1X.JPG',
        price: 4085
      }
    ]
  },
  accessories: {
    id: 3,
    title: 'Accessories',
    routeName: 'accessories',
    items: [
      {
        id: 18,
        name: 'GIBSON HISTORIC REPLICA LES PAUL CASE HAND-AGED',
        imageUrl: 'https://www.woodbrass.com/images/woodbrass/GIBSON+ASCSCASE+AG.JPG',
        price: 549
      },
      {
        id: 19,
        name: 'FENDER G&G PRECISION BASS STANDARD HARDSHELL CASE, BLACK WITH BLACK',
        imageUrl: 'https://www.woodbrass.com/images/woodbrass/FMIC+0996161306.JPG',
        price: 299
      },
      {
        id: 20,
        name: 'DUNLOP 418P100 PACK 12 TORTEX STANDARD 1 MM',
        imageUrl: 'https://www.woodbrass.com/images/woodbrass/ADU+418P100.JPG',
        price: 5
      },
      {
        id: 21,
        name: 'LEVY S 6.4 CM SNAKE LEATHER BROWN',
        imageUrl: 'https://www.woodbrass.com/images/woodbrass/LEVYS+LPC17ES-BRN.JPG',
        price: 209
      },
      {
        id: 22,
        name: 'DNA GUITAR GEAR D&A HYDRA STAND FOR 3 GUITARS',
        imageUrl: 'https://www.woodbrass.com/images/woodbrass/DNAGUITARGEAR+HYDRA.JPG',
        price: 159
      }
    ]
  },
  guitars: {
    id: 4,
    title: 'Guitars',
    routeName: 'guitars',
    items: [
      {
        id: 23,
        name: 'GIBSON 1963 LES PAUL SG CUSTOM',
        imageUrl: 'https://www.woodbrass.com/images/woodbrass/GBI+SGC63VOCWGM1.JPG',
        price: 5999
      },
      {
        id: 24,
        name: 'GIBSON 1957 LES PAUL CUSTOM',
        imageUrl: 'https://www.woodbrass.com/images/woodbrass/GBI+LPB357VOEBBG1.JPG',
        price: 6399
      },
      {
        id: 25,
        name: 'GIBSON 60 LES PAUL STANDARD ROYAL',
        imageUrl: 'https://www.woodbrass.com/images/woodbrass/GBI+LPR60VORYTNH1.JPG',
        price: 6299
      },
      {
        id: 26,
        name: 'GIBSON CS-356 FADED CHERRY',
        imageUrl: 'https://www.woodbrass.com/images/woodbrass/GBI+CS356FCGH1.JPG',
        price: 4205
      },
      {
        id: 27,
        name: 'FENDER AMERICAN ELITE TELECASTER',
        imageUrl: 'https://www.woodbrass.com/images/woodbrass/FMIC+0114212710.JPG',
        price: 1844
      },
      {
        id: 28,
        name: 'FENDER AMERICAN PROFESSIONAL STRATOCASTER',
        imageUrl: 'https://www.woodbrass.com/images/woodbrass/FMIC+0113012705.JPG',
        price: 1435
      },
      {
        id: 29,
        name: 'PAUL REED SMITH CUSTOM 24 FLOYD',
        imageUrl: 'https://www.woodbrass.com/images/woodbrass/ADAGIO+055369.JPG',
        price: 4649
      }
    ]
  },
  basses: {
    id: 5,
    title: 'Basses',
    routeName: 'basses',
    items: [
      {
        id: 30,
        name: 'YAMAHA BBNE2 NATHAN EAST BLACK',
        imageUrl: 'https://www.woodbrass.com/images/woodbrass/YAMAHA+GBBNE2BL.JPG',
        price: 4259
      },
      {
        id: 31,
        name: 'MUSIC MAN STE5HHH-WH-WH-R-W-W-C',
        imageUrl: 'https://www.woodbrass.com/images/woodbrass/GMM+STE5HH+WH+R+W+C.JPG',
        price: 2765
      },
      {
        id: 32,
        name: 'FENDER AMERICAN ORIGINAL 70S JAZZ BASS MN NAT',
        imageUrl: 'https://www.woodbrass.com/images/woodbrass/FENDER+0190142821.JPG',
        price: 2199
      },
      {
        id: 33,
        name: 'GIBSON THUNDERBIRD BASS EBONY',
        imageUrl: 'https://www.woodbrass.com/images/woodbrass/GBI+BAT400EBCH1.JPG',
        price: 2199
      },
      {
        id: 34,
        name: 'FENDER AMERICAN PROFESSIONAL JAZZ BASS',
        imageUrl: 'https://www.woodbrass.com/images/woodbrass/FMIC+0193950700.JPG',
        price: 2049
      },
      {
        id: 35,
        name: 'FENDER AMERICAN ORIGINAL 60S',
        imageUrl: 'https://www.woodbrass.com/images/woodbrass/FENDER+0190120800.JPG',
        price: 1725
      }
    ]
  }
}
export default SHOP_DATA;