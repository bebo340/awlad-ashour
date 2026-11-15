const products = [
  {
    id: 1,
    name: "TRINX TEMPO 1.4",
    category: "سرعات",
    image: "images/products/trinx-tempo-1-4.jpg",
    description:
      "عجلة ترينكس 1.4 رود من أعلى العجل الموجود في السوق المصري، نازلة من شركة ترينكس العالمية، وتناسب جميع الأعمار.",
    specs: {
      "البراند": "TRINX",
      "الموديل": "TEMPO 1.4",
      "النوع": "Road Bike - رود",
      "مناسبة": "جميع الأعمار"
    }
  },
  {
    id: 2,
    name: "TRNX",
    category: "سرعات",
    image: "images/products/bike1.jpg",
    description:
      "عجله ترينكس جينيور مقاس 20 تركب من عمر ست سنين لو بيعرف يسوق الى 15 سنه خامات عاليه جدا كل قطعه فيها اورجينال نازله من شركه عالميه سبعه سرعات خلفيه",
    specs: {
      "البراند": "TRINX",
      "الموديل": "GONUOR",
      "النوع": "عجله اطفال سرعات",
      "مناسبة": "من 6 الي 15 سنه"
    }
  },
  {
    id: 3,
    name: "MARSHALL",
    category: "سرعات",
    image: "images/products/bike2.jpg",
    description:
      "عجله مارشال سرعات مقاس 20 جنط الومنيوم مرسيدس كشاف امامي اصدار 2026 سبع سرعات خلفيه كاوتش 20 في 300 كل قطعه فيها اصليه اورجينال",
    specs: {
      "البراند": "DRAGON",
      "الموديل": "MARSHALL",
      "النوع": "عجله اطفال سرعات",
      "مناسبة": " من 6 الي 15 سنه"
    }
  },
  {
    id: 4,
    name: "TOMAX",
    category: "سرعات",
    image: "images/products/bike3.jpg",
    description:
      "عجله توماكس الومنيوم مقاس 29 نازله من شركه جالكسي العالميه 21 سرعه شاسيه دول لحامات حاجه تحفه",
    specs: {
      "البراند": "GALAXY",
      "الموديل": "TOMAX",
      "النوع": "عجله سرعات",
      "مناسبة": " من 18 فما فوق"
    }
  },
  {
    id: 5,
    name: "TRINX",
    category: "سرعات",
    image: "images/products/bike4.jpg",
    description:
      "عجله ترينكسX2pro مقاس 29 نازله من شركه ترينكس العالميه سيستيم كاسيت ثمان سرعات كل قطعه فيها شمانو واورجينال",
    specs: {
      "البراند": "TRINX",
      "الموديل": "TRINX",
      "النوع": "عجله سرعات",
      "مناسبة": " من 15 فما فوق"
    }
  },
  {
    id: 6,
    name: "MARSHALL",
    category: "دبابه",
    image: "images/products/bike5.jpg",
    description:
      "عجله دبابه مقاس 20 مارشال نازله من شركه دراجون العالميه عجله ممتازه جدا تركب من سن ثمان سنين لو بيعرف يسوق الى 30 سنه 21 سرعه خامات عاليه جدا",
    specs: {
      "البراند": "DRAGON",
      "الموديل": "MARSHALL",
      "النوع": "عجله دبابه",
      "مناسبة": " من 10 فما فوق"
    }
  },
  {
    id: 7,
    name: "GOODBOY",
    category: "اطفال 4-8",
    image: "images/products/bike6.jpg",
    description:
      "عجله 16 اطفال جود بوي نازله من شركه جالاكسي العالميه يركب من سن اربع سنين الى ثمان سنين",
    specs: {
      "البراند": "GALAXY",
      "الموديل": "GOODBOY",
      "النوع": "عجله اطفال",
      "مناسبة": " من 5 الي 8 سنين"
    }
  },
  {
    id: 8,
    name: "XNIRT",
    category: "اطفال 4-8",
    image: "images/products/bike7.jpg",
    description:
      "عجله اكسنرت مقاس 16 تركب من سن اربع سنين الى ثمان سنين خامات عاليه جدا كرسي ملحوم في الشاسيه من اعلى العجل ال 16 اللي موجود في السوق",
    specs: {
      "البراند": "",
      "الموديل": "XNIRT",
      "النوع": "عجله اطفال",
      "مناسبة": " من 5 الي 8 سنين"
    }
  },
   {
    id: 9,
    name: "BOSTER",
    category: "اطفال 6-12",
    image: "images/products/bike8.jpg",
    description:
      "عجله 16 نيجر بوستر تعادل في الحجم مقاس 20 العاديه تركب من سن ست سنين لو بيعرف يسوق الى 15 سنه جنط المونيوم وخامات عاليه جدا",
    specs: {
      "البراند": "",
      "الموديل": "BOSTER",
      "النوع": "عجله اطفال",
      "مناسبة": " من 8 الي 12"
    }
  },
  {
    id: 10,
    name: "ROROO",
    category: "اطفال 4-8",
    image: "images/products/bike9.jpg",
    description:
      "عجله رورو بناتي مقاس 16 خامات عاليه جدا نازله من شركه ميزون العالميه تركب من سن اربع سنين الى ثمان سنين",
    specs: {
      "البراند": "MEZOON",
      "الموديل": "RORO",
      "النوع": "عجله اطفال",
      "مناسبة": " من 5 الي 8 سنين"
    }
  },
  {
    id: 11,
    name: "XNIRT",
    category: "اطفال 6-12",
    image: "images/products/bike10.jpg",
    description:
      "عجله اكسنترت 20 اطفال من اعلى العجل ال 20 اللي موجود في السوق كرسي ملحوم في الشاسيه تركب من سن خمس سنين الى 11 سنه",
    specs: {
      "البراند": "",
      "الموديل": "XNIRT",
      "النوع": "عجله اطفال",
      "مناسبة": " من 8 الي 12"
    }
  },
  {
    id: 12,
    name: "RIO",
    category: "اطفال 6-12",
    image: "images/products/bike11.jpg",
    description:
      "عجله ريو مقاس 20 جنط الومنيوم خامات عاليه جدا تركب من سن خمس سنين الى 11 سنه",
    specs: {
      "البراند": "",
      "الموديل": "RIO",
      "النوع": "عجله اطفال",
      "مناسبة": " من 8 الي 12"
    }
  },
  {
    id: 13,
    name: "MARSHALL",
    category: "دبابه",
    image: "images/products/bike12.jpg",
    description:
      "عجله دبابه مقاس 26 من اعلى العجل اللي موجود في مصر دراجون نازله من شركه مارشال 21 سرعه خامات عاليه جدا كورس ملحوم في الشاسيه تناسب جميع الاعمار لو بيعرف يسوق",
    specs: {
      "البراند": "Dragon",
      "الموديل": "MARSHALL",
      "النوع": "عجله دبابه",
      "مناسبة": " من 18 فما فوق"
    }
  },
  {
    id: 14,
    name: "DRAGON",
    category: "دبابه",
    image: "images/products/bike13.jpg",
    description:
      "عجله دبابه مقاس 26 من اعلى العجل الدبابه اللي موجود في السوق المصري نازله من شركه دراجون العالميه تناسب جميع الاعمار لو بيعرف يسوق",
    specs: {
      "البراند": "DRAGON",
      "الموديل": "DRAGON",
      "النوع": "عجله دبابه",
      "مناسبة": " من 18 فما فوق"
    }
  },
  {
    id: 15,
    name: "SHEMANO",
    category: "سرعات",
    image: "images/products/bike14.jpg",
    description:
      "عجله شيمانو مقاس 26 سرعات 21 خامات عاليه جدا جنط مرسيدس الومنيوم بتنزل بجميع الهدايا زمزميه وشنطه وكرسي خلفي منجد تناسب من سن 10 سنين لو بيعرف يسوق الى اي حد كبير",
    specs: {
      "البراند": "SHEMANO",
      "الموديل": "SHEMANO",
      "النوع": "عجله سرعات",
      "مناسبة": " من 10 فما فوق"
    }
  },
  {
    id: 16,
    name: "SHEMANO",
    category: "حركات",
    image: "images/products/bike15.jpg",
    description:
      "عجله شيمانو ونيجر مقاس 20 بتعادل في الحجم 24 العاديه معاها اربعه كوبايه هديه من اعلى العجله النيجر اللي موجود في السوق المصري تركب من سن سبع سنين الى 30 سنه",
    specs: {
      "البراند": "SHEMANO",
      "الموديل": "SHEMANO",
      "النوع": "عجله حركات",
      "مناسبة": " من 7 الي 30 سنه"
    }
  },
  {
    id: 17,
    name: "AYA MOON",
    category: "سرعات",
    image: "images/products/bike16.jpg",
    description:
      "عجله موديل ياباني مقاس 26 تنفع لبنوته او لراجل كبير او شبابي عادي خالص من اعلى العجل اللي موجود في السوق المصري تركب من سن ثمان سنين لو بيعرف يسوق الى جميع الاعمار",
    specs: {
      "البراند": "AYA MOON",
      "الموديل": "ياباني",
      "النوع": "عجله سرعات",
      "مناسبة": " من 8 فما فوق"
    }
  },
  {
    id: 18,
    name: "XNIRT",
    category: "حركات",
    image: "images/products/bike17.jpg",
    description:
      "عجله اكسنرت 20 نيجر بتعادل في الحجم ال 24 العاديه يعتبر اعلى عجله نيجر في السوق المصري معاها اربعه كوبايه هديه تركب من سن سبع سنين لو بيعرف يسوق الى 30 سنه",
    specs: {
      "البراند": "",
      "الموديل": "XNIRT",
      "النوع": "عجله حركات",
      "مناسبة": " من 7 فما فوق"
    }
  },
  {
    id: 19,
    name: "ROADIX",
    category: "حركات",
    image: "images/products/bike18.jpg",
    description:
      "عجله رودكس نازله من شركه ترينكس 20 نيجر تركب من سن 8 سنين الى 30 سنه معاها اربعه كوبايه هديه تعادل في الحجم ال 24 العاديه",
    specs: {
      "البراند": "TRINX",
      "الموديل": "ROADIX",
      "النوع": "عجله حركات",
      "مناسبة": " من 8 فما فوق"
    }
  },
  {
    id: 20,
    name: "TINEX",
    category: "حركات",
    image: "images/products/bike19.jpg",
    description:
      "عجله تاينكس 20 نيجر جنط سلوك خامات عاليه جدا كورس جل اصلي تركب من سن سبع سنين الى 15 سنه",
    specs: {
      "البراند": "",
      "الموديل": "TINEX",
      "النوع": "عجله حركات",
      "مناسبة": " من 7 الي 15 سنه"
    }
  },
  {
    id: 21,
    name: "CSK",
    category: "حركات",
    image: "images/products/bike20.jpg",
    description:
      "عجله سي اس كي مقاس 24 نيجر بتعادل في الحجم 26 العاديه معاها اربعه كوبايه هديه جنط المونيوم عالي الجوده خامات عاليه جدا نازله من شركه جالكسي العالميه تصلح لجميع الاعمار",
    specs: {
      "البراند": "GALAXY",
      "الموديل": "CSK",
      "النوع": "عجله حركات",
      "مناسبة": " لجميع الاعمار"
    }
  },
  {
    id: 22,
    name: "CSK",
    category: "حركات",
    image: "images/products/bike21.jpg",
    description:
      "عجل 20 سي اس كي نيجر تعادل في الحجم ال 24 العاديه خامات عاليه جدا مستورده بالكامل نازله من شركه جالكسي العالميه معاها اربعه كوبايه هديه تركب من سن سبع سنين لو بيعرف يسوق الى 30 سنه",
    specs: {
      "البراند": "GALAXY",
      "الموديل": "CSK",
      "النوع": "عجله حركات",
      "مناسبة": " من 7 الي 30 سنه"
    }
  },
  {
    id: 23,
    name: "TOMAX",
    category: "سرعات",
    image: "images/products/bike22.jpg",
    description:
      "عجله توماكس الومنيوم مقاس 26 بدون لحامات نازله من شركه جالكسي العالميه ما شاء الله قيمه مقابل سعر تناسب من سن ثمان سنوات الى جميع الاعمار",
    specs: {
      "البراند": "GALAXY",
      "الموديل": "TOMAX",
      "النوع": "عجله سرعات",
      "مناسبة": "من 8 الي جميع الاعمار"
    }
  },
  {
    id: 24,
    name: "ROLLEX",
    category: "سرعات",
    image: "images/products/bike23.jpg",
    description:
      "عجله رولكس مقاس 26 جنط الومنيوم 10 ريشه وفي منها جنط المونيوم 3 ريشه مرسيدس بنفس السعر ونفس المواصفات تصلح لجميع الاعمار",
    specs: {
      "البراند": "",
      "الموديل": "ROLLEX",
      "النوع": "عجله سرعات",
      "مناسبة": "لجميع الاعمار"
    }
  },
  {
    id: 25,
    name: "MAXIMUM",
    category: "اطفال 4-8",
    image: "images/products/bike24.jpg",
    description:
      "عجله مكسيمو 16 اطفال تركب من سن اربع سنين الى ثمان سنين خامات عاليه جدا مستورده بالكامل نازله من شركه ميزون العالميه",
    specs: {
      "البراند": "MEZOON",
      "الموديل": "ROLLEX",
      "النوع": "عجله اطفال",
      "مناسبة": "من 4 الي 8 سنوات"
    }
  },
  {
    id: 26,
    name: "ROROO",
    category: "اطفال 6-12",
    image: "images/products/bike25.jpg",
    description:
      "عجله رورو 20 بناتي ممتازه جدا خامات عاليه جنوط الومنيوم سلك تركب من سن خمس سنين لو بيعرف يسوق الى 11 سنه",
    specs: {
      "البراند": "",
      "الموديل": "ROROO",
      "النوع": "عجله اطفال",
      "مناسبة": "من 5 الي 11"
    }
  },
  {
    id: 27,
    name: "RACE ROLKET",
    category: "دبابه",
    image: "images/products/bike26.jpg",
    description:
      "عجله دبابه مقاس 26 ريس روكيت نازله من شركه مارشال العالميه كاوتش عالمي وقطع غيار اصليه تصلح لجميع الاعمار خامات عاليه جدا",
    specs: {
      "البراند": "MARSHALL",
      "الموديل": "RALE ROLKET",
      "النوع": "عجله دبابه",
      "مناسبة": "لجميع الاعمار"
    }
  },
  {
    id: 28,
    name: "GALAXYS",
    category: "سرعات",
    image: "images/products/bike27.jpg",
    description:
      "عجله جالكسي MT16 مقاس 26 موديل 2027 الشاسيه ستيل حديد معالج ضد الصدى 21 سرعه كل قطعه فيها اورجينال",
    specs: {
      "البراند": "GALAXY",
      "الموديل": "GALAXY",
      "النوع": "عجله سرعات",
      "مناسبة": "من 12 فما فوق"
    }
  },
  {
    id: 29,
    name: "SUPER JUMPO",
    category: "اطفال 6-12",
    image: "images/products/bike28.jpg",
    description:
      "عجله سوبر جامبو مقاس 20 اطفال خامات عاليه جدا وجنوط المونيا سلك تركب من سن خمس سنين الى 11 سنه",
    specs: {
      "البراند": "",
      "الموديل": "SUPER JUMPO",
      "النوع": "عجله اطفال",
      "مناسبة": "من 5 الي 11 سنه"
    }
  },
  {
    id: 30,
    name: "CREPEER",
    category: "حركات",
    image: "images/products/bike29.jpg",
    description:
      "عجله كليبر 20 نيجر متعادل في الحجم ال 24 العاديه تركب من سن سبع سنين لو بيعرف يسوق الى 30 سنه خامات عاليه جدا مستورده بالكامل",
    specs: {
      "البراند": "",
      "الموديل": "CRPEER",
      "النوع": "عجله حركات",
      "مناسبة": "من 7 الي 30"
    }
  },
  {
    id: 31,
    name: "MEZOON",
    category: "حركات",
    image: "images/products/bike30.jpg",
    description:
      "عجله ميزون 20 نيجر جنط 10 ريشه نازله من شركه مكسيمو مستورده بالكامل معاها اثنين كوبايه هديه خلفي بتعادل في الحجم ال 24 العاديه تصلح لسن سبع سنين الى 30 سنه",
    specs: {
      "البراند": "MAXIMUM",
      "الموديل": "MEZOON",
      "النوع": "عجله حركات",
      "مناسبة": "من 7 الي 30"
    }
  },
  {
    id: 32,
    name: "SHIMANO",
    category: "حركات",
    image: "images/products/bike31.jpg",
    description:
      "عجله 26 نيجر بتعادل في الحجم مقاس 29 خامات عاليه جدا من اعلى العجل اللي موجود في السوق المصري جنط الومنيوم مرسيدس اربعه كوبايه هديه تصلح لجميع الاعمار",
    specs: {
      "البراند": "SHIMANO",
      "الموديل": "SHIMANO",
      "النوع": "عجله حركات",
      "مناسبة": "لجميع الاعمار"
    }
  },
  {
    id: 33,
    name: "DRAGON",
    category: "سرعات",
    image: "images/products/bike32.jpg",
    description:
      "عجله دراجون او ريس روكيت مقاس 26 24 سرعه خامات عاليه جدا نازله من شركه مارشال العالميه تصلح لجميع الاعمار كرسي ممحون في الشاسيه وثبت امامي",
    specs: {
      "البراند": "MARSHALL",
      "الموديل": "DRAGON",
      "النوع": "عجله سرعات",
      "مناسبة": "من 12 فما فوق"
    }
  },
  {
    id: 34,
    name: "AVIA",
    category: "اسكوتر كهرباء",
    image: "images/products/bike33.jpg",
    description:
      "سكوتر كهربا بيمشي عجله وبيمشي سكوتر حاجه كده اختراع بطاريه 20 امبير موتور 500 وات مستورد بالكامل كرسي خلفي لو حد هيركب وراك يصلح لجميع الاعمار من سن سبع سنين يركبوا",
    specs: {
      "البراند": "",
      "الموديل": "AVIA",
      "النوع": "اسكوتر كهرباء",
      "مناسبة": "من 7 الي مافوق"
    }
  },
  {
    id: 35,
    name: "RABIIT",
    category: "اسكوتر كهرباء",
    image: "images/products/bike34.jpg",
    description:
      "سكوتر استاند ابو حواء الاصلي بطاريه 36 موتور 250 ماكس مام 500 وات مستورد بالكامل يصلح لجميع الاعمار من سن سبع سنين يركبوا",
    specs: {
      "البراند": "",
      "الموديل": "RABIIT",
      "النوع": "اسكوتر كهرباء",
      "مناسبة": "من 7 الي مافوق"
    }
  },
  {
    id: 36,
    name: "RABIIT",
    category: "اسكوتر كهرباء",
    image: "images/products/bike35.jpg",
    description:
      "سكوتر استاند مستورد بالكامل مضاف اليه كرسي وحده تخزين شنطه كبيره سرعته بتصل ل 40 كيلو متر في الساعه يمشيك حوالي 25 كيلو في الشحنه حاجه كده ما شاء الله اختراع",
    specs: {
      "البراند": "",
      "الموديل": "RABIIT",
      "النوع": "اسكوتر كهرباء",
      "مناسبة": "من 7 الي مافوق"
    }
  },
  {
    id: 37,
    name: "GOODBOY",
    category: "اطفال 2-5",
    image: "images/products/bike36.jpg",
    description:
      "عجل وجود بوي مقاس 12 تركب من سن سنتين الى خمس سنين مستورده بالكامل نازله من شركه جالكسي العالميه",
    specs: {
      "البراند": "GALAXY",
      "الموديل": "GOODBOY",
      "النوع": "عجله اطفال",
      "مناسبة": "من 2 الي5 سنين"
    }
  },
   {
    id: 38,
    name: "SUPER JUMPO",
    category: "اطفال 2-5",
    image: "images/products/bike37.jpg",
    description:
      "عجله مقاس 12 سوبر جامبو مستورده بالكامل خامات عاليه جدا تركب من سن سنتين الى خمس سنين",
    specs: {
      "البراند": "",
      "الموديل": "SUPER JUMPO",
      "النوع": "عجله اطفال",
      "مناسبة": "من 2 الي5 سنين"
    }
  },
  {
    id: 39,
    name: "TRINX",
    category: "سرعات",
    image: "images/products/bike38.jpg",
    description:
      "عجله ترينكس مقاس 24 كي 014 مستورده بالكامل نازله من شركه ترينكس العالميه تركب من سن ست سنين الى 15 سنه",
    specs: {
      "البراند": "TRINX",
      "الموديل": "TRINX K014",
      "النوع": "عجله سرعات",
      "مناسبة": "من 6 الي 15"
    }
  },
  {
    id: 40,
    name: "BIKE STAR",
    category: "سرعات",
    image: "images/products/bike39.jpg",
    description:
      "عجله بايك ستار سرعات مقاس 26 شبابي خامات عاليه جدا مستورده بالكامل 21 سرعه تصلح لجميع الاعمار",
    specs: {
      "البراند": "",
      "الموديل": "BIKE STAR",
      "النوع": "عجله سرعات",
      "مناسبة": "لجميع الاعمار"
    }
  },
  {
    id: 41,
    name: "ROLEX",
    category: "عجل عادي",
    image: "images/products/bike40.jpg",
    description:
      "عجله رولكس مقاس 26 عاديه نازله من شركه مارشيل العالميه كل قطعه فيها اوريجينال مزوده بكورس خلفي ملحوم في الشاسيه",
    specs: {
      "البراند": "MARSHALL",
      "الموديل": "ROLEX",
      "النوع": "عجله عاديه",
      "مناسبة": "لجميع الاعمار"
    }
  },
  {
    id: 42,
    name: "TRINX",
    category: "عجل عادي",
    image: "images/products/bike41.jpg",
    description:
      "عجله ترينكس مونتين عاديه خالص نازله من شركه ترينكس العالميه تي 0 1 سرعه واحده فرامل ديسك خامات عاليه جدا تصلح لجميع الاعمار",
    specs: {
      "البراند": "TRINX",
      "الموديل": "TRINX",
      "النوع": "عجله عاديه",
      "مناسبة": "لجميع الاعمار"
    }
  },
  {
    id: 43,
    name: "RODAX",
    category: "اطفال 2-5",
    image: "images/products/bike42.jpg",
    description:
      "عجله رودكس مقاس 12 نازله من شركه تيرينكس العالميه تركب من سن سنتين الى خمس سنين",
    specs: {
      "البراند": "TRINX",
      "الموديل": "RODAX",
      "النوع": "عجله اطفال",
      "مناسبة": "من 2 الي 5"
    }
  },
  {
    id: 44,
    name: "BICY STAR",
    category: "اطفال 2-5",
    image: "images/products/bike43.jpg",
    description:
      "عجله بايت ستار بناتي مقاس 12 تركب من عمر سنتين الى خمس سنوات جنوط المونيوم ثبت معدن خامه عاليه جدا",
    specs: {
      "البراند": "",
      "الموديل": "BICY STAR",
      "النوع": "عجله اطفال",
      "مناسبة": "من 2 الي 5"
    }
  },
  {
    id: 45,
    name: "GALAXY",
    category: "سرعات",
    image: "images/products/bike44.jpg",
    description:
      "عجله جالكسي اي 6 برو مقاس 29 اصدار 2027 صوره المونيوم 21 سرعه اوريجينال بالكامل تركب لحد وزن 120 كيلو وطول 2 م",
    specs: {
      "البراند": "GALAXY",
      "الموديل": "GALAXY A5 RPO",
      "النوع": "عجله سرعات",
      "مناسبة": "لجميع الاعمار"
    }
  },
  {
    id: 46,
    name: "GALAXY",
    category: "سرعات",
    image: "images/products/bike45.jpg",
    description:
      "عجله جالكسي اي 6 برو مقاس 26 اصدار 2027 سرر المونيوم 21 سرعه اوريجينال بالكامل تركب لحد وزن 120 كيلو وطول لحد 175 سم",
    specs: {
      "البراند": "GALAXY",
      "الموديل": "GALAXY A5 RPO",
      "النوع": "عجله سرعات",
      "مناسبة": "لجميع الاعمار"
    }
  },
  {
    id: 47,
    name: "GALAXY",
    category: "سرعات",
    image: "images/products/bike46.jpg",
    description:
      "عجله جالكسي ام 60 برو ماكس مقاس 26 مواصفات عالميه سيستم كاسيت ثمان سرعات سرر المونيوم كل قطعه فيها اورجينال تشيل لحد وزن 120 كيلو او اكتر تركب لحد طول 175 سم",
    specs: {
      "البراند": "GALAXY",
      "الموديل": "GALAXY M60 PRO",
      "النوع": "عجله سرعات",
      "مناسبة": "لجميع الاعمار"
    }
  },
  {
    id: 48,
    name: "GALAXY",
    category: "سرعات",
    image: "images/products/bike46.jpg",
    description:
      "عجله جالكسي ام 60 برو ماكس مقاس 29 مواصفات عالميه سيستم كاسيت ثمان سرعات صوره الالومنيوم كل قطعه فيها اورجينال تشيل لحد وزن 150 كيلو تركب لحد طول 2 م",
    specs: {
      "البراند": "GALAXY",
      "الموديل": "GALAXY M60 PRO",
      "النوع": "عجله سرعات",
      "مناسبة": "لجميع الاعمار"
    }
  },
  {
    id: 48,
    name: "RACE ROCKET",
    category: "عجل عادي",
    image: "images/products/bike47.jpg",
    description:
      "عجله ريس روكيت مقاس 26 عاديه خالص بدون سرعات مستورده بالكامل تصلح لجميع الاعمار",
    specs: {
      "البراند": "",
      "الموديل": "RACE ROCKET",
      "النوع": "عجله عاديه",
      "مناسبة": "لجميع الاعمار"
    }
  },
   {
    id: 49,
    name: "TRINX",
    category: "سرعات",
    image: "images/products/bike48.jpg",
    description:
      "عجله ترينكسM6060 مقاس 26 ستيم ثمان سرعات كاسيت مجموع السرعات 24 سرعه اعلى عجله في السوق المصري",
    specs: {
      "البراند": "TRINX",
      "الموديل": "TRINX",
      "النوع": "عجله سرعات",
      "مناسبة": "لجميع الاعمار"
    }
  },
   {
    id: 50,
    name: "TRINX",
    category: "سرعات",
    image: "images/products/bike49.jpg",
    description:
      "عجله ترينكسM6060 مقاس 29 تركب لحد طول 2 م سيستيم كاسيت 8 سبيد مجموع السرعات بتاعتها 24 ساعه اعلى عجله في السوق المصري",
    specs: {
      "البراند": "TRINX",
      "الموديل": "TRINX",
      "النوع": "عجله سرعات",
      "مناسبة": "لجميع الاعمار"
    }
  },
   {
    id: 51,
    name: "TRINX",
    category: "سرعات",
    image: "images/products/bike50.jpg",
    description:
      "عجله ترينكس مقاس 26 موديل M116 سرعات شيمانو 21 سرعه اوريجينال موديل 2027",
    specs: {
      "البراند": "TRINX",
      "الموديل": "TRINX",
      "النوع": "عجله سرعات",
      "مناسبة": "لجميع الاعمار"
    }
  },
  {
    id: 52,
    name: "PHONEX",
    category: "سرعات",
    image: "images/products/bike52.jpg",
    description:
      "عجله فونيكس2655 مقاس 26 شاسيه ستايل مميز 21 بسرعه شيمانو اوريجينال نازله من شركه فونيكس العالميه",
    specs: {
      "البراند": "PHONEX",
      "الموديل": "PHONEX",
      "النوع": "عجله سرعات",
      "مناسبة": "لجميع الاعمار"
    }
  },
   {
    id: 54,
    name: "DRAGON",
    category: "حركات",
    image: "images/products/bike53.jpg",
    description:
      "عجله نيجر مقاس 20 مارشال نازله من شركه دراجون العالميه تركب من سن 8 سنين الى 30 سنه",
    specs: {
      "البراند": "DRAGON",
      "الموديل": "DRAGON",
      "النوع": "عجله حركات",
      "مناسبة": "من 8 الي 30 سنه"
    }
  },
   {
    id: 55,
    name: "MARSHALL",
    category: "حركات",
    image: "images/products/bike54.jpg",
    description:
      "عجله مارشال جنط 3 ريشه شاسيه مدمج كل قطعه فيها مستورده تركب من سن 8 سنين الى 30 سنه",
    specs: {
      "البراند": "MARSHALL",
      "الموديل": "MARSHALL",
      "النوع": "عجله حركات",
      "مناسبة": "من 8 الي 30 سنه"
    }
  },
   {
    id: 56,
    name: "RACE ROCKET",
    category: "اطفال 6-12",
    image: "images/products/bike55.jpg",
    description:
      "عجله بناتي مقاس 20 ريس روكيت خامات عاليه جدا مستورده بالكامل تركب من سن سبع سنين لو بيعرف يسوق الى 11 سنه",
    specs: {
      "البراند": "",
      "الموديل": "RACE ROCKET",
      "النوع": "عجله اطفال",
      "مناسبة": " من 8 الي 12"
    }
  },
  {
    id: 57,
    name: "ROADIX",
    category: "اطفال 2-5",
    image: "images/products/bike56.jpg",
    description:
      "عجله بناتي مقاس 12 برودكس مستورده بالكامل خامات عاليه جدا تركب من سن سنتين الى خمس سنين",
    specs: {
      "البراند": "",
      "الموديل": "ROADIX",
      "النوع": "عجله اطفال",
      "مناسبة": "من 2 الي 5"
    }
  },
  {
    id: 58,
    name: "CREEPER",
    category: "اطفال 4-8",
    image: "images/products/bike57.jpg",
    description:
      "عجله بناتي مقاس 16 ماركه كليبر من اعلى العجل الاطفال اللي موجود في السوق المصري جنوط الومنيوم وفرامل فيل زي بتاع الموتوسيكل تركب من سن اربع سنين الى ثمان سنين",
    specs: {
      "البراند": "CREEPER",
      "الموديل": "CREEPER",
      "النوع": "عجله اطفال",
      "مناسبة": "من 4 الي 8 سنوات"
    }
  },
  {
    id: 59,
    name: "HELLO BABY",
    category: "اطفال 4-8",
    image: "images/products/bike58.jpg",
    description:
      "عجله بناتي مقاس 16 Hello Baby مستورده بالكامل سبت امامي وكرسي خلفي رقبه جادون وجنط المونيوم خامات عاليه جدا تركب من سن اربع سنين الى ثمان سنوات",
    specs: {
      "البراند": "",
      "الموديل": "HELLO BABY",
      "النوع": "عجله اطفال",
      "مناسبة": "من 4 الي 8 سنوات"
    }
  },
  {
    id: 60,
    name: "TOMAX",
    category: "سرعات",
    image: "images/products/bike59.jpg",
    description:
      "عجله تومكس مقاس 26 جنط الومنيوم نازله من شركه جالكسي العالميه ثبت امامي وكرسي خلفي 21 سرعه كل قطعه فيها اوريجينال",
    specs: {
      "البراند": "GALAXY",
      "الموديل": "TOMAX",
      "النوع": "عجله سرعات",
      "مناسبة": "لجميع الاعمار"
    }
  },
  {
    id: 61,
    name: "PHONEX",
    category: "سرعات",
    image: "images/products/bike60.jpg",
    description:
      "عجله موديل ياباني فونيكس مقاس 26 🔥7 سرعات خلفيه اوريجينال شيمانو سبت امامي وكرسي خلفي كرسي طبي اوريجينال نازله من شركه فونيكس العالميه",
    specs: {
      "البراند": "PHONEX",
      "الموديل": "PHONEX",
      "النوع": "عجله سرعات",
      "مناسبة": "لجميع الاعمار"
    }
  },
   {
    id: 62,
    name: "GALAXY",
    category: "سرعات",
    image: "images/products/bike61.jpg",
    description:
    "عجله جالكسي مقاس 24 موديل A5 تركب من سن 8 سنين لو بيعرف يسوق المونيوم بالكامل 21 سرعه اوريجينال نازله من شركه جالكسي العالميه",
    specs: {
      "البراند": "GALAXY",
      "الموديل": "GALAXY A5",
      "النوع": "عجله سرعات",
      "مناسبة": "لجميع الاعمار"
    }
  },
  {
    id: 63,
    name: "TOPLAYER",
    category: "حركات",
    image: "images/products/bike62.jpg",
    description:
      "عجله نيجر مقاس 16 توب لاير نازله من شركه جالكسي العالميه جنط المونيوم ثبت امامي وكرس خلفي تركب من سن ست سنين لو بيعرف يسوق الى 15 سنه كل قطعه فيها اوريجينال",
    specs: {
      "البراند": "GALAXY",
      "الموديل": "TOPLAYER",
      "النوع": "عجله حركات",
      "مناسبة": "من 6 الي 15 سنه"
    }
  },
  {
    id: 64,
    name: "MARSHALL",
    category: "حركات",
    image: "images/products/bike63.jpg",
    description:
      "عجله نيجر مقاس 16 مارشال نازله من شركه دراجون العالميه جنط الومنيوم وسبعه امامي وكرسي خلفي موضوع كبير قوي تركب من سن ست سنين لو بيعرف يسوق الى 15 سنه",
    specs: {
      "البراند": "DRAGON",
      "الموديل": "MARSHALL",
      "النوع": "عجله حركات",
      "مناسبة": "من 6 الي 15 سنه"
    }
  },
   {
    id: 65,
    name: "FERARRI",
    category: "اطفال 6-12",
    image: "images/products/bike64.jpg",
    description:
      "عجله فيراري مقاس 20 نازله من شركه ترينكس العالميه سرعات 7 خلفي سنجل امامي كشاف امامي ليد ديزاين جديد من نوع زي ما عودتنا شركه فيراري تركب من سن سبع سنين الى 13 سنه",
    specs: {
      "البراند": "TRINX",
      "الموديل": "FERARRY",
      "النوع": "عجله اطفال",
      "مناسبة": " من 8 الي 12"
    }
  },




 
 

  // لإضافة عجلة جديدة:
  // انسخ الكائن السابق وضع فاصلة بعده، ثم غيّر البيانات والصورة.
];

const grid = document.getElementById("productsGrid");
const categoryBoxes = document.querySelectorAll(".category-box");
const cartButton = document.getElementById("cartButton");
const cartCount = document.getElementById("cartCount");
const cartModal = document.getElementById("cartModal");
const closeCart = document.getElementById("closeCart");
const cartItems = document.getElementById("cartItems");
const emptyCart = document.getElementById("emptyCart");
const sendCartWhatsapp = document.getElementById("sendCartWhatsapp");
const modalAddCart = document.getElementById("modalAddCart");

let cart = [];
let currentProductId = null;
const showAllButton = document.getElementById("showAll");
const modal = document.getElementById("productModal");
const closeModal = document.getElementById("closeModal");

function renderProducts(list = products) {
  grid.innerHTML = list.map(p => `
    <article class="card">
      <img class="card-img" src="${p.image}" alt="${p.name}">
      <div class="card-body">
        <span class="tag">${p.category}</span>
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <button class="btn primary" onclick="openProduct(${p.id})">عرض التفاصيل</button>
      </div>
    </article>
  `).join("");
}


function addToCart(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCart();
  openCart();
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  updateCart();
}

function updateCart() {
  const count = cart.reduce((total, item) => total + item.quantity, 0);
  cartCount.textContent = count;

  if (cart.length === 0) {
    cartItems.innerHTML = "";
    emptyCart.style.display = "block";
    sendCartWhatsapp.style.display = "none";
    return;
  }

  emptyCart.style.display = "none";
  sendCartWhatsapp.style.display = "block";

  cartItems.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}">
      <div>
        <div class="cart-item-name">${item.name}</div>
        <small>الكمية: ${item.quantity}</small>
      </div>
      <button class="remove-item" onclick="removeFromCart(${item.id})">حذف</button>
    </div>
  `).join("");
}

function openCart() {
  cartModal.classList.add("show");
  cartModal.setAttribute("aria-hidden", "false");
}

function closeCartModal() {
  cartModal.classList.remove("show");
  cartModal.setAttribute("aria-hidden", "true");
}

cartButton.addEventListener("click", openCart);
closeCart.addEventListener("click", closeCartModal);

cartModal.addEventListener("click", e => {
  if (e.target === cartModal) closeCartModal();
});

sendCartWhatsapp.addEventListener("click", () => {
  if (cart.length === 0) return;

  let message = "السلام عليكم، عايز أطلب العجل الآتي من أولاد عاشور:%0A%0A";

  cart.forEach((item, index) => {
    message += `${index + 1}- ${item.name} (${item.category}) × ${item.quantity}%0A`;
    message += `الوصف: ${item.description}%0A%0A`;
  });

  message += "الاسم:%0A";
  message += "العنوان:%0A";
  message += "ملاحظات:%0A";

  window.open(`https://wa.me/201024960877?text=${message}`, "_blank");
});

function openProduct(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;

  currentProductId = id;
  document.getElementById("modalImage").src = p.image;
  document.getElementById("modalImage").alt = p.name;
  document.getElementById("modalCategory").textContent = p.category;
  document.getElementById("modalName").textContent = p.name;
  document.getElementById("modalDescription").textContent = p.description;

  document.getElementById("modalSpecs").innerHTML =
    Object.entries(p.specs).map(([key, value]) =>
      `<div class="spec"><span>${key}</span><strong>${value}</strong></div>`
    ).join("");

  const message =
    `السلام عليكم، عايز أعرف تفاصيل عجلة ${p.name}.\n\n` +
    `الوصف: ${p.description}`;

  document.getElementById("modalWhatsapp").href =
    `https://wa.me/201024960877?text=${encodeURIComponent(message)}`;

  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
}

function closeProduct() {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
}

closeModal.addEventListener("click", closeProduct);
modal.addEventListener("click", e => {
  if (e.target === modal) closeProduct();
});

modalAddCart.addEventListener("click", () => {
  if (currentProductId !== null) {
    addToCart(currentProductId);
  }
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeProduct();
});

categoryBoxes.forEach(box => {
  box.addEventListener("click", () => {
    const category = box.dataset.category;
    categoryBoxes.forEach(b => b.classList.remove("active"));
    box.classList.add("active");

    // دعم اختلاف كتابة أقسام الأطفال بالعربي
    const normalizeCategory = value => String(value)
      .replace(/[إأآ]/g, "ا")
      .replace(/ى/g, "ي")
      .replace(/ة/g, "ه")
      .replace(/\s+/g, " ")
      .trim();

    const aliases = {
      "أطفال 3-5": ["أطفال 3-5", "اطفال 3-5", "أطفال من 3 إلى 5", "اطفال من 3 الى 5", "أطفال من 3 الى 5"],
      "أطفال 5-8": ["أطفال 5-8", "اطفال 5-8", "أطفال من 5 إلى 8", "اطفال من 5 الى 8", "أطفال من 5 الى 8"],
      "أطفال 8-10": ["أطفال 8-10", "اطفال 8-10", "أطفال من 8 إلى 10", "اطفال من 8 الى 10", "أطفال من 8 الى 10"]
    };

    const allowed = (aliases[category] || [category]).map(normalizeCategory);
    const filtered = products.filter(p =>
      allowed.includes(normalizeCategory(p.category))
    );
    renderProducts(filtered);

    document.querySelector(".products-title").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

showAllButton.addEventListener("click", () => {
  categoryBoxes.forEach(b => b.classList.remove("active"));
  renderProducts(products);
});

updateCart();
renderProducts();
