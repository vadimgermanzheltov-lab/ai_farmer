const EMBEDDED_DATA = {
  appConfig: {
    appName: "Умный птичник",
    subtitle: "AI-консультант по домашней птице для спокойного старта",
    welcomeMessage:
      "Здравствуйте! Это «Умный птичник». Выберите сценарий ниже, отвечайте в основном кнопками, а в конце получите понятный план по птице, содержанию, кормлению и базовой экономике.",
    startButtons: [
      { id: "choose_poultry", label: "Выбрать птицу", emoji: "🐔" },
      { id: "calculate_farm", label: "Рассчитать хозяйство", emoji: "📐" },
      { id: "feeding", label: "Подобрать кормление", emoji: "🌾" },
      { id: "economics", label: "Прикинуть экономику", emoji: "💰" },
      { id: "problems", label: "Проблемы и болезни", emoji: "🩺" },
      { id: "beginner", label: "Я новичок", emoji: "👨‍🌾" },
      { id: "free_question", label: "Задать свой вопрос", emoji: "❓" }
    ],
    disclaimer:
      "Информация носит справочный характер. Консультант не ставит диагнозы, не назначает лечение и не заменяет ветеринарного специалиста.",
    fallbackMessage:
      "Сейчас приложение может работать в демонстрационном режиме по встроенным шаблонам, а AI-режим включается отдельно при публикации.",
    visuals: {
      enabled: true,
      assetsFile: "/data/visual_assets.json",
      heroImage: "/images/chickens.svg",
      maxImagesPerScreen: 3
    }
  },
  poultryCatalog: {
    chickens: {
      name: "Куры",
      bestFor: ["яйца", "мясо", "универсальное содержание"],
      difficulty: "низкая",
      goodForBeginners: true,
      pros: ["понятный уход", "доступные корма", "много информации для новичков", "быстрый практический результат"],
      cons: ["нужна защита от хищников", "важны световой режим и чистота", "зимой требуется теплое помещение"],
      recommendedBreeds: {
        eggs: ["Ломан Браун", "Хайсекс Браун", "Русская белая"],
        meat: ["Кобб-500", "Росс-308"],
        universal: ["Кучинская юбилейная", "Адлерская серебристая", "Плимутрок"]
      }
    },
    ducks: {
      name: "Утки",
      bestFor: ["мясо", "яйца", "быстрый рост"],
      difficulty: "средняя",
      goodForBeginners: true,
      pros: ["быстро растут", "хорошо используют выгул", "мясное направление понятно для новичков"],
      cons: ["больше влаги и грязи", "нужна хорошая подстилка", "требуется удобный доступ к воде"],
      recommendedBreeds: {
        meat: ["Пекинская", "Муларды", "Башкирская"],
        eggs: ["Индийские бегуны"],
        universal: ["Башкирская", "Мускусная"]
      }
    },
    geese: {
      name: "Гуси",
      bestFor: ["мясо", "содержание на выгуле"],
      difficulty: "средняя",
      goodForBeginners: false,
      pros: ["хорошо подходят для просторного участка", "могут использовать пастбище", "крупная птица"],
      cons: ["нужно больше места", "шумные", "не лучший старт для маленького участка"],
      recommendedBreeds: {
        meat: ["Линдовская", "Холмогорская", "Крупная серая"],
        universal: ["Линдовская", "Кубанская"]
      }
    },
    turkeys: {
      name: "Индюки",
      bestFor: ["мясо"],
      difficulty: "высокая",
      goodForBeginners: false,
      pros: ["крупная птица", "ценное мясо", "перспективно для продажи"],
      cons: ["требовательны к условиям", "птенцы чувствительны", "нужен более внимательный уход"],
      recommendedBreeds: {
        meat: ["БИГ-6", "Бронзовая широкогрудая", "Белая широкогрудая"]
      }
    },
    quails: {
      name: "Перепела",
      bestFor: ["яйца", "маленькое помещение", "быстрый старт"],
      difficulty: "средняя",
      goodForBeginners: true,
      pros: ["можно содержать на небольшой площади", "быстро начинают нестись", "удобны для мини-проекта"],
      cons: ["нужны клетки", "важны температура и свет", "требуется регулярный уход"],
      recommendedBreeds: {
        eggs: ["Японский перепел", "Английский белый"],
        meat: ["Фараон", "Техасский белый"],
        universal: ["Эстонский"]
      }
    }
  },
  housingNorms: {
    chickens: {
      indoorAreaM2PerBird: 0.35,
      runAreaM2PerBird: 1.2,
      feedGramsPerDayPerBird: 120,
      nestsPerBirds: 4,
      roostCmPerBird: 25,
      water: "чистая вода постоянно",
      notes: ["для несушек важен световой режим", "зимой нужен сухой и защищенный от сквозняков курятник"]
    },
    ducks: {
      indoorAreaM2PerBird: 0.5,
      runAreaM2PerBird: 2,
      feedGramsPerDayPerBird: 180,
      water: "постоянный доступ к воде для питья; купание желательно, но не всегда обязательно",
      notes: ["подстилку нужно менять чаще из-за влажности", "важна защита от сырости"]
    },
    geese: {
      indoorAreaM2PerBird: 0.8,
      runAreaM2PerBird: 5,
      feedGramsPerDayPerBird: 250,
      water: "постоянный доступ к воде; просторный выгул крайне желателен",
      notes: ["лучше подходят для участков с большим выгулом", "могут быть шумными"]
    },
    turkeys: {
      indoorAreaM2PerBird: 0.8,
      runAreaM2PerBird: 3,
      feedGramsPerDayPerBird: 250,
      water: "чистая вода постоянно",
      notes: ["для молодняка особенно важны тепло и сухость", "требуется больше внимания, чем для кур"]
    },
    quails: {
      indoorAreaM2PerBird: 0.03,
      runAreaM2PerBird: 0,
      feedGramsPerDayPerBird: 30,
      water: "чистая вода постоянно, лучше ниппельные поилки",
      notes: ["обычно содержатся в клетках", "важны стабильная температура и освещение"]
    }
  },
  recommendationTemplates: {
    commonFinalStructure: [
      "Краткий вывод",
      "Рекомендуемый вариант",
      "Расчет или ориентировочные параметры",
      "Что подготовить",
      "Частые ошибки",
      "Следующий шаг"
    ],
    choose_poultry: {
      title: "Ваша рекомендация по выбору птицы"
    },
    calculate_farm: {
      title: "Расчет мини-хозяйства"
    },
    feeding: {
      title: "Базовая схема кормления"
    },
    problems: {
      title: "Чек-лист первичной проверки",
      mandatoryWarning:
        "Это не диагноз и не назначение лечения. При ухудшении состояния, падеже, выраженной вялости, отказе от воды или подозрении на инфекцию обратитесь к ветеринарному специалисту."
    },
    beginner: {
      title: "План запуска для новичка"
    }
  },
  safetyRules: {
    rules: [
      "Не ставить диагнозы птице.",
      "Не назначать лекарства и дозировки.",
      "Не обещать гарантированную яйценоскость, рост или прибыль.",
      "По вопросам болезни давать только безопасный чек-лист наблюдений и условий содержания.",
      "При тревожных симптомах рекомендовать ветеринарного специалиста.",
      "Все расчеты площади, корма и продуктивности формулировать как ориентировочные."
    ],
    redFlags: [
      "массовая гибель птицы",
      "кровь",
      "судороги",
      "полный отказ от воды",
      "сильная вялость",
      "подозрение на инфекцию",
      "быстрое ухудшение состояния"
    ],
    safeHealthResponse:
      "Я не могу поставить диагноз или назначить лечение. Могу помочь проверить условия содержания: корм, воду, температуру, свет, чистоту, стресс и возраст птицы. При тревожных симптомах лучше обратиться к ветеринарному специалисту."
  },
  scenarios: {
    choose_poultry: {
      title: "Выбрать птицу",
      goal: "Подобрать вид птицы и примерные породы или кроссы",
      questions: [
        {
          id: "purpose",
          text: "Для какой цели вы хотите разводить птицу?",
          type: "buttons",
          options: [
            { value: "eggs", label: "Яйца" },
            { value: "meat", label: "Мясо" },
            { value: "universal", label: "И яйца, и мясо" },
            { value: "sale", label: "Для продажи" }
          ]
        },
        {
          id: "experience",
          text: "Какой у вас опыт?",
          type: "buttons",
          options: [
            { value: "beginner", label: "Новичок" },
            { value: "some", label: "Есть небольшой опыт" },
            { value: "farmer", label: "Фермер" }
          ]
        },
        {
          id: "countRange",
          text: "Сколько птиц планируете содержать на старте?",
          type: "buttons",
          options: [
            { value: "up_to_10", label: "До 10" },
            { value: "10_30", label: "10–30" },
            { value: "more_30", label: "Более 30" }
          ]
        },
        {
          id: "warmHousing",
          text: "Есть ли теплое помещение для зимнего содержания?",
          type: "buttons",
          options: [
            { value: "yes", label: "Да" },
            { value: "no", label: "Нет" },
            { value: "planned", label: "Планирую построить" }
          ]
        }
      ]
    },
    calculate_farm: {
      title: "Рассчитать хозяйство",
      goal: "Рассчитать базовые параметры помещения, выгула, корма и оборудования",
      questions: [
        {
          id: "birdType",
          text: "Какую птицу планируете содержать?",
          type: "buttons",
          options: [
            { value: "chickens", label: "Куры" },
            { value: "ducks", label: "Утки" },
            { value: "geese", label: "Гуси" },
            { value: "turkeys", label: "Индюки" },
            { value: "quails", label: "Перепела" }
          ]
        },
        {
          id: "count",
          text: "Сколько голов планируете?",
          type: "buttons_with_custom",
          options: [
            { value: 10, label: "10" },
            { value: 20, label: "20" },
            { value: 50, label: "50" },
            { value: 100, label: "100" },
            { value: "custom", label: "Другое" }
          ]
        },
        {
          id: "farmGoal",
          text: "Какая цель хозяйства?",
          type: "buttons",
          options: [
            { value: "family", label: "Для семьи" },
            { value: "sale", label: "Для продажи" },
            { value: "test", label: "Тестовый запуск" }
          ]
        }
      ]
    },
    feeding: {
      title: "Подобрать кормление",
      goal: "Дать базовую схему кормления",
      questions: [
        {
          id: "birdType",
          text: "Какую птицу кормим?",
          type: "buttons",
          options: [
            { value: "chickens", label: "Куры" },
            { value: "ducks", label: "Утки" },
            { value: "geese", label: "Гуси" },
            { value: "turkeys", label: "Индюки" },
            { value: "quails", label: "Перепела" }
          ]
        },
        {
          id: "age",
          text: "Какой возраст птицы?",
          type: "buttons",
          options: [
            { value: "chicks", label: "Птенцы" },
            { value: "young", label: "Молодняк" },
            { value: "adult", label: "Взрослая птица" }
          ]
        },
        {
          id: "feedingGoal",
          text: "Какая основная цель кормления?",
          type: "buttons",
          options: [
            { value: "eggs", label: "Яйценоскость" },
            { value: "meat", label: "Рост на мясо" },
            { value: "maintenance", label: "Обычное содержание" }
          ]
        }
      ]
    },
    problems: {
      title: "Проблемы и болезни",
      goal: "Собрать симптомы и дать безопасный чек-лист проверки без диагноза",
      questions: [
        {
          id: "problemType",
          text: "Что происходит?",
          type: "buttons",
          options: [
            { value: "no_eggs", label: "Перестали нестись" },
            { value: "thin_shell", label: "Тонкая скорлупа" },
            { value: "low_appetite", label: "Плохо едят" },
            { value: "lethargic", label: "Вялые" },
            { value: "slow_growth", label: "Медленно растут" },
            { value: "other", label: "Другое" }
          ]
        },
        {
          id: "age",
          text: "Какой возраст птицы?",
          type: "buttons",
          options: [
            { value: "under_6_months", label: "До 6 месяцев" },
            { value: "6_12_months", label: "6–12 месяцев" },
            { value: "over_1_year", label: "Старше года" }
          ]
        },
        {
          id: "changes",
          text: "Были ли недавно изменения в корме, свете, температуре или условиях?",
          type: "buttons",
          options: [
            { value: "feed", label: "Меняли корм" },
            { value: "light", label: "Меняли свет" },
            { value: "temperature", label: "Были перепады температуры" },
            { value: "no", label: "Нет изменений" },
            { value: "not_sure", label: "Не уверен" }
          ]
        }
      ]
    },
    beginner: {
      title: "Я новичок",
      goal: "Выдать простой план запуска домашней мини-фермы",
      questions: [
        {
          id: "desiredResult",
          text: "Что хотите получить в первую очередь?",
          type: "buttons",
          options: [
            { value: "home_eggs", label: "Домашние яйца" },
            { value: "family_meat", label: "Мясо для семьи" },
            { value: "small_income", label: "Небольшой заработок" },
            { value: "try_farm", label: "Попробовать мини-ферму" }
          ]
        },
        {
          id: "place",
          text: "Где планируете содержать птицу?",
          type: "buttons",
          options: [
            { value: "dacha", label: "Дача" },
            { value: "private_house", label: "Частный дом" },
            { value: "village", label: "Деревня/ферма" }
          ]
        },
        {
          id: "startSize",
          text: "С какого масштаба готовы начать?",
          type: "buttons",
          options: [
            { value: "5_10", label: "5–10 голов" },
            { value: "10_30", label: "10–30 голов" },
            { value: "more_30", label: "Больше 30" }
          ]
        }
      ]
    },
    economics: {
      title: "Прикинуть экономику",
      goal: "Сравнить стартовые затраты, ежемесячные расходы, доходы или экономию и грубо оценить точку безубыточности",
      questions: [
        {
          id: "birdType",
          text: "Для какой птицы прикидываем экономику?",
          type: "buttons",
          options: [
            { value: "chickens", label: "Куры" },
            { value: "ducks", label: "Утки" },
            { value: "geese", label: "Гуси" },
            { value: "turkeys", label: "Индюки" },
            { value: "quails", label: "Перепела" }
          ]
        },
        {
          id: "count",
          text: "Сколько голов берём в расчёт?",
          type: "buttons_with_custom",
          options: [
            { value: 10, label: "10" },
            { value: 20, label: "20" },
            { value: 50, label: "50" },
            { value: 100, label: "100" },
            { value: "custom", label: "Другое" }
          ]
        },
        {
          id: "economyModel",
          text: "Какой вариант сравнения нужен?",
          type: "buttons",
          options: [
            { value: "eggs_sale", label: "Продажа яйца" },
            { value: "meat_sale", label: "Продажа мяса" },
            { value: "family_budget", label: "Экономия для семьи" }
          ]
        }
      ]
    }
  },
  visualAssets: {
    poultryImages: {
      chickens: { title: "Куры", imageUrl: "/images/chickens.svg", alt: "Иллюстрация кур-несушек" },
      broilers: { title: "Бройлеры", imageUrl: "/images/broilers.svg", alt: "Иллюстрация мясного направления птицы" },
      ducks: { title: "Утки", imageUrl: "/images/ducks.svg", alt: "Иллюстрация уток" },
      geese: { title: "Гуси", imageUrl: "/images/geese.svg", alt: "Иллюстрация гусей" },
      turkeys: { title: "Индюки", imageUrl: "/images/turkeys.svg", alt: "Иллюстрация индюков" },
      quails: { title: "Перепела", imageUrl: "/images/quails.svg", alt: "Иллюстрация перепелов" }
    },
    housingImages: {
      small_coop: { title: "Малый курятник", imageUrl: "/images/small_coop.svg", alt: "Иллюстрация малого курятника" },
      medium_coop: { title: "Средний курятник", imageUrl: "/images/medium_coop.svg", alt: "Иллюстрация среднего курятника" },
      walk_area: { title: "Выгул", imageUrl: "/images/walk_area.svg", alt: "Иллюстрация зоны выгула" },
      feeders: { title: "Кормушки и поилки", imageUrl: "/images/feeders.svg", alt: "Иллюстрация кормушек и поилок" }
    }
  }
};

const appRoot = document.getElementById("app");
let messageHighlightTimeout = null;

const state = {
  data: null,
  env: {},
  messages: [],
  activeScenarioId: null,
  questionIndex: 0,
  answers: {},
  preferredBird: null,
  freeQuestionMode: false,
  draftMessage: "",
  activeCards: {},
  pendingFlow: null,
  lastRecommendationContext: null,
  userProfile: buildDefaultProfile(),
  isBusy: true,
  statusText: "Загружаю демо-данные",
  lastMessageCount: 0
};

const birdDescriptions = {
  chickens: "Простой старт для яиц, семьи и домашнего хозяйства.",
  ducks: "Подходят для мясного направления и активного выгула.",
  geese: "Нужны простор и уверенный старт, но хорошо идут на мясо.",
  turkeys: "Перспективный вариант для опытного владельца и продажи.",
  quails: "Удобны для компактного проекта и быстрого запуска."
};

const ECONOMICS_ASSUMPTIONS = {
  chickens: {
    youngBirdCost: 420,
    feedPricePerKg: 34,
    eggPrice: 12,
    eggsPerBirdMonthly: 22,
    meatRevenuePerBird: 950,
    meatCycleMonths: 2.5,
    coopBaseSmall: 18000,
    coopBaseMedium: 42000,
    equipmentPerBird: 220,
    beddingMonthlyPerBird: 35,
    utilitiesMonthlyBase: 900
  },
  ducks: {
    youngBirdCost: 520,
    feedPricePerKg: 32,
    eggPrice: 13,
    eggsPerBirdMonthly: 16,
    meatRevenuePerBird: 1500,
    meatCycleMonths: 3,
    coopBaseSmall: 22000,
    coopBaseMedium: 48000,
    equipmentPerBird: 240,
    beddingMonthlyPerBird: 45,
    utilitiesMonthlyBase: 1000
  },
  geese: {
    youngBirdCost: 700,
    feedPricePerKg: 30,
    eggPrice: 0,
    eggsPerBirdMonthly: 0,
    meatRevenuePerBird: 2600,
    meatCycleMonths: 4,
    coopBaseSmall: 26000,
    coopBaseMedium: 56000,
    equipmentPerBird: 300,
    beddingMonthlyPerBird: 55,
    utilitiesMonthlyBase: 1200
  },
  turkeys: {
    youngBirdCost: 750,
    feedPricePerKg: 36,
    eggPrice: 0,
    eggsPerBirdMonthly: 0,
    meatRevenuePerBird: 3200,
    meatCycleMonths: 4.5,
    coopBaseSmall: 30000,
    coopBaseMedium: 62000,
    equipmentPerBird: 340,
    beddingMonthlyPerBird: 60,
    utilitiesMonthlyBase: 1400
  },
  quails: {
    youngBirdCost: 180,
    feedPricePerKg: 48,
    eggPrice: 6,
    eggsPerBirdMonthly: 24,
    meatRevenuePerBird: 280,
    meatCycleMonths: 2,
    coopBaseSmall: 12000,
    coopBaseMedium: 26000,
    equipmentPerBird: 160,
    beddingMonthlyPerBird: 18,
    utilitiesMonthlyBase: 700
  }
};

const freeQuestionHints = {
  idle: "Можно нажать на готовую плашку или задать свой вопрос простыми словами.",
  scenario: "Если хотите, можно уточнить детали по текущему сценарию обычным текстом.",
  custom: "Можно ввести свое количество голов числом, например: 37.",
  free: "Например: что лучше для дачи, куры или перепела?"
};

function buildDefaultProfile() {
  return {
    selectedBirdId: null,
    selectedBreed: null,
    count: null,
    countRange: null,
    purpose: null,
    economyModel: null
  };
}

init();

async function init() {
  const [appConfig, scenarios, poultryCatalog, housingNorms, recommendationTemplates, safetyRules, visualAssets, env] =
    await Promise.all([
      loadJson("./data/app_config.json", EMBEDDED_DATA.appConfig),
      loadJson("./data/scenarios.json", EMBEDDED_DATA.scenarios),
      loadJson("./data/poultry_catalog.json", EMBEDDED_DATA.poultryCatalog),
      loadJson("./data/housing_norms.json", EMBEDDED_DATA.housingNorms),
      loadJson("./data/recommendation_templates.json", EMBEDDED_DATA.recommendationTemplates),
      loadJson("./data/safety_rules.json", EMBEDDED_DATA.safetyRules),
      loadJson("./data/visual_assets.json", EMBEDDED_DATA.visualAssets),
      loadEnvFile()
    ]);

  state.data = {
    appConfig,
    scenarios,
    poultryCatalog,
    housingNorms,
    recommendationTemplates,
    safetyRules,
    visualAssets
  };
  state.env = env;
  state.isBusy = false;
  state.statusText = getRuntimeStatus();

  resetConversation();
}

function resetConversation() {
  state.activeScenarioId = null;
  state.questionIndex = 0;
  state.answers = {};
  state.preferredBird = null;
  state.freeQuestionMode = false;
  state.draftMessage = "";
  state.activeCards = {};
  state.pendingFlow = null;
  state.lastRecommendationContext = null;
  state.userProfile = buildDefaultProfile();
  state.messages = [
    {
      role: "assistant",
      label: "Умный птичник",
      text: state.data.appConfig.welcomeMessage
    },
    {
      role: "system",
      label: "Как пользоваться",
      text: "1. Выберите сценарий кнопкой ниже. 2. Отвечайте в основном плитками. 3. Получите план и продолжайте маршрут дальше: породы, хозяйство, курятник, кормление и экономика."
    }
  ];
  render();
}

function loadJson(path, fallback) {
  return fetch(normalizeAssetPath(path))
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      return response.json();
    })
    .catch(() => fallback);
}

function loadEnvFile() {
  return fetch("./.env")
    .then((response) => {
      if (!response.ok) {
        throw new Error("env unavailable");
      }
      return response.text();
    })
    .then(parseEnv)
    .catch(() => ({}));
}

function parseEnv(text) {
  return text.split(/\r?\n/).reduce((acc, line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) {
      return acc;
    }
    const index = trimmed.indexOf("=");
    const key = trimmed.slice(0, index).trim();
    const rawValue = trimmed.slice(index + 1).trim();
    const value = rawValue.replace(/^['"]|['"]$/g, "");
    acc[key] = value;
    return acc;
  }, {});
}

function normalizeAssetPath(path) {
  if (!path) {
    return "";
  }
  if (path.startsWith("./") || path.startsWith("../")) {
    return path;
  }
  if (path.startsWith("/images/")) {
    return `./public${path}`;
  }
  if (path.startsWith("/data/")) {
    return `.${path}`;
  }
  return path;
}

function hasOpenRouterConfig() {
  return hasClientSideOpenRouterConfig() || canUseHostedAi();
}

function hasClientSideOpenRouterConfig() {
  return Boolean(state.env.VITE_OPENROUTER_API_KEY);
}

function canUseHostedAi() {
  if (typeof window === "undefined") {
    return false;
  }
  return window.location.protocol === "http:" || window.location.protocol === "https:";
}

function getRuntimeStatus() {
  if (hasClientSideOpenRouterConfig()) {
    return "Локальный AI-режим";
  }
  if (canUseHostedAi()) {
    return "Готов к AI-режиму на Netlify";
  }
  return "Локальный демо-режим";
}

function render() {
  const currentScenario = getCurrentScenario();
  const currentQuestion = getCurrentQuestion();
  const placeholder = getComposerPlaceholder(currentQuestion);
  const actionPanel = renderActionPanel(currentScenario, currentQuestion);

  appRoot.innerHTML = `
    <div class="app-shell">
      ${renderSidebar()}
      <section class="chat-shell">
        <div class="chat-topbar">
          <div class="chat-title">
            <strong>${escapeHtml(currentScenario?.title || "Умный птичник")}</strong>
            <span>${escapeHtml(currentScenario?.goal || "Короткие сценарии, связанные шаги и понятный план для старта")}</span>
          </div>
          <button class="reset-button" data-action="reset">Начать заново</button>
        </div>
        <div class="messages" id="messages">
          ${state.messages.map((message, index) => renderMessage(message, index)).join("")}
        </div>
        ${actionPanel}
        <div class="composer">
          <div class="composer-inner">
            <textarea id="composer-input" placeholder="${escapeHtml(placeholder)}">${escapeHtml(state.draftMessage)}</textarea>
            <button class="send-button" data-action="send-text">${state.isBusy ? "Подождите" : "Отправить"}</button>
          </div>
          <div class="composer-hint">${escapeHtml(getComposerHint(currentQuestion))}</div>
        </div>
      </section>
    </div>
  `;

  attachEvents();
  wireImageFallbacks();
  scrollMessages();
}

function renderSidebar() {
  const config = state.data.appConfig;
  return `
    <aside class="sidebar">
      <div class="eyebrow">Демо-версия • ${escapeHtml(config.appName)}</div>
      <h1>${escapeHtml(config.appName)}</h1>
      <p class="subtitle">${escapeHtml(config.subtitle)}</p>
      <div class="guide-card">
        <strong>Как пользоваться</strong>
        <div class="guide-steps">
          <div class="guide-step">1. Выберите сценарий: птица, хозяйство, кормление, экономика или старт для новичка.</div>
          <div class="guide-step">2. Отвечайте кнопками, а текст используйте для уточнений или своего количества голов.</div>
          <div class="guide-step">3. После плана продолжайте маршрут дальше: породы, хозяйство, курятник, корма и экономика.</div>
        </div>
      </div>
      <div class="sidebar-note">${escapeHtml(config.disclaimer)}</div>
    </aside>
  `;
}

function renderMessage(message, messageIndex) {
  const visuals = message.visuals ? renderVisualGrid(message.visuals, message.visualMode || "compact", message.visualAction) : "";
  const recommendation = message.recommendation ? renderRecommendationCard(message.recommendation) : "";
  return `
    <article class="message ${message.role}" data-message-index="${messageIndex}">
      ${message.label ? `<div class="message-label">${escapeHtml(message.label)}</div>` : ""}
      <p>${escapeHtml(message.text || "")}</p>
      ${visuals}
      ${recommendation}
    </article>
  `;
}

function renderVisualGrid(items, mode = "compact", action = "") {
  return `
    <div class="visual-grid ${escapeHtml(mode)}">
      ${items
        .map((item, index) => {
          const cardKey = `visual-${mode}-${item.id || item.title || index}`;
          const isActive = Boolean(state.activeCards[cardKey]);
          const actionAttrs =
            action === "selectBird"
              ? ` data-action="prefer-bird" data-bird="${escapeHtml(item.id)}" tabindex="0" role="button"`
              : ` data-action="toggle-card" data-card-key="${escapeHtml(cardKey)}" tabindex="0" role="button" aria-pressed="${isActive ? "true" : "false"}"`;
          const actionButton =
            action === "selectBird"
              ? `<button type="button" class="select-bird">Выбрать</button>`
              : "";
          return `
            <article class="visual-card is-clickable ${isActive ? "is-active" : ""}" data-card-id="${escapeHtml(item.id || item.title)}"${actionAttrs}>
              <img src="${escapeHtml(normalizeAssetPath(item.imageUrl))}" alt="${escapeHtml(item.alt || item.title)}" />
              <div class="visual-fallback">${escapeHtml(item.title)}</div>
              <div class="visual-body">
                <strong>${escapeHtml(item.title)}</strong>
                <p>${escapeHtml(item.description || "")}</p>
                ${actionButton}
              </div>
            </article>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderRecommendationCard(recommendation) {
  const sections = recommendation.sections
    .map((section, index) => {
      const cardKey = `plan-section-${index}-${slugify(section.title)}`;
      const isActive = Boolean(state.activeCards[cardKey]);
      const content = Array.isArray(section.content)
        ? `<ul>${section.content.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`
        : `<p>${escapeHtml(section.content)}</p>`;
      return `
        <section
          class="plan-section is-clickable ${isActive ? "is-active" : ""}"
          data-action="toggle-card"
          data-card-key="${escapeHtml(cardKey)}"
          tabindex="0"
          role="button"
          aria-pressed="${isActive ? "true" : "false"}"
        >
          <strong>${escapeHtml(section.title)}</strong>
          ${content}
        </section>
      `;
    })
    .join("");

  return `
    <div class="plan-card">
      <div class="plan-header">
        <strong>Ваш план</strong>
        <span>${escapeHtml(recommendation.title)}</span>
      </div>
      <p class="plan-intro">${escapeHtml(recommendation.summary)}</p>
      <div class="section-list">${sections}</div>
      ${recommendation.aiNote ? `<div class="ai-note">${escapeHtml(recommendation.aiNote)}</div>` : ""}
      ${recommendation.warning ? `<div class="warning-box">${escapeHtml(recommendation.warning)}</div>` : ""}
      ${
        recommendation.visuals?.length
          ? renderVisualGrid(recommendation.visuals.slice(0, 3), "plan")
          : ""
      }
      ${
        recommendation.followUps?.length
          ? `
            <div class="followup-block">
              <div class="followup-title">Продолжить диалог</div>
              <div class="option-grid">
                ${recommendation.followUps
                  .map(
                    (item) => `
                      <button
                        type="button"
                        class="quick-button followup-button"
                        data-action="run-follow-up"
                        data-follow-up="${escapeHtml(item.action)}"
                      >
                        <strong>${escapeHtml(item.title)}</strong>
                        <span>${escapeHtml(item.description)}</span>
                      </button>
                    `
                  )
                  .join("")}
              </div>
            </div>
          `
          : ""
      }
    </div>
  `;
}

function renderActionPanel(currentScenario, currentQuestion) {
  if (state.isBusy) {
    return `
      <div class="action-panel">
        <div class="status-pill">Собираю ответ по вашему сценарию</div>
      </div>
    `;
  }

  if (currentQuestion) {
    return `
      <div class="action-panel">
        <div class="panel-title">
          <strong>${escapeHtml(currentQuestion.text)}</strong>
          <span>Шаг ${state.questionIndex + 1} из ${currentScenario.questions.length}</span>
        </div>
        <div class="option-grid">
          ${currentQuestion.options
            .map(
              (option) => `
                <button
                  class="quick-button"
                  data-action="answer-option"
                  data-value="${escapeHtml(String(option.value))}"
                >
                  <strong>${escapeHtml(option.label)}</strong>
                  <span>Выбрать этот вариант</span>
                </button>
              `
            )
            .join("")}
        </div>
        ${
          currentQuestion.type === "buttons_with_custom"
            ? `
              <div class="custom-answer">
                <input id="custom-count-input" type="number" min="1" step="1" placeholder="Свое количество голов" />
                <button class="custom-submit" data-action="answer-custom-count">Сохранить число</button>
              </div>
            `
            : ""
        }
      </div>
    `;
  }

  if (!currentQuestion && state.pendingFlow) {
    return `
      <div class="action-panel">
        <div class="panel-title">
          <strong>${escapeHtml(state.pendingFlow.title)}</strong>
          <span>${escapeHtml(state.pendingFlow.subtitle || "Выберите следующий шаг")}</span>
        </div>
        <div class="option-grid">
          ${state.pendingFlow.options
            .map(
              (option) => `
                <button
                  class="quick-button"
                  data-action="pending-option"
                  data-value="${escapeHtml(String(option.value))}"
                >
                  <strong>${escapeHtml(option.label)}</strong>
                  <span>${escapeHtml(option.description || "Выбрать")}</span>
                </button>
              `
            )
            .join("")}
        </div>
      </div>
    `;
  }

  return `
    <div class="action-panel">
      <div class="panel-title">
        <strong>${state.freeQuestionMode ? "Свободный вопрос" : "Выберите сценарий"}</strong>
        <span>${state.freeQuestionMode ? "Можно писать текстом" : "Быстрый старт через крупные плашки"}</span>
      </div>
      ${
        state.freeQuestionMode
          ? `<button class="ghost-button" data-action="close-free-mode">Вернуться к сценариям</button>`
          : `
            <div class="option-grid">
              ${state.data.appConfig.startButtons
                .map(
                  (button) => `
                    <button class="quick-button" data-action="start-scenario" data-scenario="${escapeHtml(button.id)}">
                      <strong>${escapeHtml(`${button.emoji} ${button.label}`)}</strong>
                      <span>${escapeHtml(getStartButtonDescription(button.id))}</span>
                    </button>
                  `
                )
                .join("")}
            </div>
          `
      }
    </div>
  `;
}

function attachEvents() {
  const composer = document.getElementById("composer-input");
  composer?.addEventListener("input", (event) => {
    state.draftMessage = event.target.value;
  });
  composer?.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSendText();
    }
  });

  appRoot.querySelectorAll("[data-action]").forEach((node) => {
    node.addEventListener("click", async () => {
      const action = node.dataset.action;
      if (action === "reset") {
        resetConversation();
        return;
      }
      if (action === "start-scenario") {
        startScenario(node.dataset.scenario);
        return;
      }
      if (action === "answer-option") {
        const currentQuestion = getCurrentQuestion();
        if (currentQuestion?.id === "count" && node.dataset.value === "custom") {
          document.getElementById("custom-count-input")?.focus();
          pushSystemMessage("Введите свое количество голов в поле ниже и нажмите «Сохранить число». ");
          render();
          return;
        }
        answerCurrentQuestion(node.dataset.value);
        return;
      }
      if (action === "answer-custom-count") {
        const input = document.getElementById("custom-count-input");
        const value = Number(input?.value);
        if (!Number.isFinite(value) || value <= 0) {
          pushSystemMessage("Введите целое положительное число, например 37.");
          render();
          return;
        }
        answerCurrentQuestion(value);
        return;
      }
      if (action === "pending-option") {
        handlePendingOption(node.dataset.value);
        return;
      }
      if (action === "send-text") {
        await handleSendText();
        return;
      }
      if (action === "prefer-bird") {
        const birdId = node.dataset.bird;
        state.preferredBird = birdId;
        pushUserMessage(`Предпочтительно: ${state.data.poultryCatalog[birdId].name}`);
        pushAssistantMessage("Учту это как предпочтение и подберу вариант под ваши ответы.");
        render();
        return;
      }
      if (action === "toggle-card") {
        toggleCard(node.dataset.cardKey);
        return;
      }
      if (action === "run-follow-up") {
        runFollowUp(node.dataset.followUp);
        return;
      }
      if (action === "close-free-mode") {
        state.freeQuestionMode = false;
        render();
      }
    });
  });

  appRoot.querySelectorAll('[role="button"][data-action]').forEach((node) => {
    node.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        node.click();
      }
    });
  });
}

function wireImageFallbacks() {
  appRoot.querySelectorAll(".visual-card img").forEach((img) => {
    img.addEventListener(
      "error",
      () => {
        img.closest(".visual-card")?.classList.add("is-broken");
      },
      { once: true }
    );
  });
}

function scrollMessages() {
  requestAnimationFrame(() => {
    const messagesEl = document.getElementById("messages");
    if (!messagesEl) {
      return;
    }

    const shouldFollowConversation = state.messages.length !== state.lastMessageCount;
    const lastMessage = messagesEl.querySelector(".message:last-of-type");

    if (shouldFollowConversation && lastMessage) {
      if (messageHighlightTimeout) {
        clearTimeout(messageHighlightTimeout);
        messageHighlightTimeout = null;
      }

      messagesEl.querySelectorAll(".message.is-newest").forEach((node) => {
        node.classList.remove("is-newest");
      });

      lastMessage.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest"
      });

      lastMessage.classList.add("is-newest");
      messageHighlightTimeout = window.setTimeout(() => {
        lastMessage.classList.remove("is-newest");
      }, 1800);
    } else if (shouldFollowConversation) {
      messagesEl.scrollTop = messagesEl.scrollHeight;
    }

    state.lastMessageCount = state.messages.length;
  });
}

function getCurrentScenario() {
  return state.activeScenarioId ? state.data.scenarios[state.activeScenarioId] : null;
}

function getCurrentQuestion() {
  const scenario = getCurrentScenario();
  if (!scenario) {
    return null;
  }
  return scenario.questions[state.questionIndex] || null;
}

function startScenario(scenarioId, options = {}) {
  if (scenarioId === "free_question") {
    state.activeScenarioId = null;
    state.questionIndex = 0;
    state.answers = {};
    state.preferredBird = null;
    state.freeQuestionMode = true;
    state.pendingFlow = null;
    pushUserMessage("Хочу задать свой вопрос");
    pushAssistantMessage("Напишите вопрос внизу. Я отвечу простыми словами и без ветеринарных назначений.");
    render();
    return;
  }

  const scenario = state.data.scenarios[scenarioId];
  state.activeScenarioId = scenarioId;
  state.questionIndex = 0;
  state.answers = { ...(options.presetAnswers || {}) };
  state.preferredBird = options.keepPreferredBird ? state.preferredBird : null;
  state.freeQuestionMode = false;
  state.draftMessage = "";
  state.pendingFlow = null;
  if (!options.silentStart) {
    pushUserMessage(options.userText || scenario.title);
    pushAssistantMessage(options.introText || `Сценарий: ${scenario.goal}`);
  }

  if (scenarioId === "choose_poultry") {
    pushAssistantMessage("Для ориентира вот три популярных старта. Можно отметить один как предпочтительный, а дальше я уточню детали.", {
      visuals: buildStarterBirdCards(),
      visualAction: "selectBird"
    });
  }

  const firstQuestionIndex = scenario.questions.findIndex((question) => !(question.id in state.answers));
  state.questionIndex = firstQuestionIndex === -1 ? scenario.questions.length - 1 : firstQuestionIndex;
  const nextQuestion = scenario.questions[state.questionIndex];
  if (nextQuestion) {
    pushAssistantMessage(nextQuestion.text);
  }
  render();
}

function openPendingFlow(flow) {
  state.pendingFlow = flow;
  render();
}

function clearPendingFlow() {
  state.pendingFlow = null;
}

function handlePendingOption(rawValue) {
  if (!state.pendingFlow) {
    return;
  }

  const option = state.pendingFlow.options.find((item) => String(item.value) === String(rawValue));
  const label = option?.label || String(rawValue);

  if (state.pendingFlow.id === "breed_select") {
    const birdId = state.pendingFlow.context.birdId;
    state.userProfile.selectedBirdId = state.pendingFlow.context.birdId;
    state.userProfile.selectedBreed = label;
    pushUserMessage(label);
    pushAssistantMessage(`Запомнил породу: ${label}. Теперь логично перейти к расчету хозяйства под этот вариант.`);
    clearPendingFlow();
    startScenario("calculate_farm", {
      presetAnswers: { birdType: birdId },
      userText: "Рассчитать хозяйство",
      introText: "Продолжаем цепочку: сначала посчитаем помещение, выгул и корм под выбранную птицу."
    });
    return;
  }

  clearPendingFlow();
  pushUserMessage(label);
  render();
}

function buildStarterBirdCards() {
  return ["chickens", "ducks", "quails"].map((birdId) => {
    const visual = state.data.visualAssets.poultryImages[birdId];
    return {
      id: birdId,
      title: visual.title,
      imageUrl: visual.imageUrl,
      alt: visual.alt,
      description: birdDescriptions[birdId]
    };
  });
}

function answerCurrentQuestion(rawValue) {
  const scenario = getCurrentScenario();
  const question = getCurrentQuestion();
  if (!scenario || !question) {
    return;
  }

  const value = question.id === "count" ? normalizeCountValue(rawValue) : rawValue;
  const label = getOptionLabel(scenario, question.id, value);
  state.answers[question.id] = value;
  pushUserMessage(label);

  const nextIndex = state.questionIndex + 1;
  if (nextIndex < scenario.questions.length) {
    state.questionIndex = nextIndex;
    pushAssistantMessage(scenario.questions[nextIndex].text);
    render();
    return;
  }

  finalizeScenario();
}

function normalizeCountValue(value) {
  if (typeof value === "number") {
    return value;
  }
  const numeric = Number(value);
  return Number.isFinite(numeric) && numeric > 0 ? numeric : value;
}

function getOptionLabel(scenario, questionId, value) {
  const question = scenario.questions.find((item) => item.id === questionId);
  const option = question?.options.find((item) => String(item.value) === String(value));
  if (option) {
    return option.label;
  }
  return questionId === "count" ? `${value} голов` : String(value);
}

async function finalizeScenario() {
  state.isBusy = true;
  pushAssistantMessage("Собираю итоговую рекомендацию по вашим ответам.");
  render();

  const scenarioId = state.activeScenarioId;
  const answersSnapshot = { ...state.answers };
  const recommendation = await buildRecommendation(scenarioId, answersSnapshot);
  state.isBusy = false;
  syncProfileFromScenario(scenarioId, answersSnapshot, recommendation);
  state.lastRecommendationContext = {
    scenarioId,
    answers: answersSnapshot,
    recommendation
  };
  pushAssistantMessage("Готово. Ниже собрал ваш план в удобном формате.", {
    recommendation
  });

  state.activeScenarioId = null;
  state.questionIndex = 0;
  state.answers = {};
  state.preferredBird = null;
  state.draftMessage = "";
  render();
}

function syncProfileFromScenario(scenarioId, answers, recommendation) {
  if (scenarioId === "choose_poultry") {
    state.userProfile.selectedBirdId = recommendation.meta?.birdId || state.userProfile.selectedBirdId;
    state.userProfile.countRange = answers.countRange || state.userProfile.countRange;
    state.userProfile.purpose = answers.purpose || state.userProfile.purpose;
    return;
  }

  if (scenarioId === "calculate_farm") {
    state.userProfile.selectedBirdId = answers.birdType || state.userProfile.selectedBirdId;
    state.userProfile.count = Number(answers.count) || state.userProfile.count;
    return;
  }

  if (scenarioId === "feeding") {
    state.userProfile.selectedBirdId = answers.birdType || state.userProfile.selectedBirdId;
    return;
  }

  if (scenarioId === "economics") {
    state.userProfile.selectedBirdId = answers.birdType || state.userProfile.selectedBirdId;
    state.userProfile.count = Number(answers.count) || state.userProfile.count;
    state.userProfile.economyModel = answers.economyModel || state.userProfile.economyModel;
    return;
  }

  if (scenarioId === "beginner") {
    state.userProfile.selectedBirdId = recommendation.meta?.birdId || state.userProfile.selectedBirdId;
  }
}

async function handleSendText() {
  const rawText = state.draftMessage.trim();
  if (!rawText || state.isBusy) {
    return;
  }

  const currentQuestion = getCurrentQuestion();
  if (currentQuestion?.id === "count") {
    const numeric = Number(rawText);
    if (Number.isFinite(numeric) && numeric > 0) {
      state.draftMessage = "";
      answerCurrentQuestion(numeric);
      return;
    }
  }

  state.isBusy = true;
  pushUserMessage(rawText);
  state.draftMessage = "";
  render();

  const answer = await answerFreeQuestion(rawText);
  state.isBusy = false;
  pushAssistantMessage(answer.text, answer.recommendation ? { recommendation: answer.recommendation } : {});
  render();
}

async function answerFreeQuestion(questionText) {
  const isHealth = detectHealthTopic(questionText);
  const baseText = isHealth ? state.data.safetyRules.safeHealthResponse : buildFallbackFreeAnswer(questionText);

  if (!hasOpenRouterConfig()) {
    return { text: baseText };
  }

  try {
    const aiText = await askOpenRouter({
      systemPrompt: buildSystemPrompt(),
      userPrompt: buildFreeQuestionPrompt(questionText, baseText)
    });
    return { text: aiText || baseText };
  } catch {
    return { text: baseText };
  }
}

function detectHealthTopic(text) {
  const normalized = text.toLowerCase();
  return [
    "бол",
    "леч",
    "симптом",
    "вял",
    "понос",
    "не ест",
    "падает",
    "кров",
    "температур",
    "перестали нестись"
  ].some((token) => normalized.includes(token));
}

function buildFallbackFreeAnswer(questionText) {
  const normalized = questionText.toLowerCase();
  if (normalized.includes("куры") && normalized.includes("перепел")) {
    return "Если нужен более простой старт для семьи, обычно легче начинать с кур. Если места мало и важен компактный формат, удобнее перепела. Следующий шаг: оцените, сколько у вас места под помещение и выгул.";
  }
  if (normalized.includes("утк")) {
    return "Для уток важно сразу предусмотреть сухую подстилку, удобные поилки и запас по уборке. Следующий шаг: проверьте, есть ли у вас сухой участок под выгул и место для частой замены подстилки.";
  }
  if (normalized.includes("корм")) {
    return "Базовый ориентир такой: полноценный корм по возрасту, чистая вода постоянно и без резкой смены рациона. Следующий шаг: напишите вид птицы и возраст, и я уточню схему.";
  }
  return "Могу помочь выбрать птицу, прикинуть площадь, кормление или подготовку к старту. Следующий шаг: уточните вид птицы, цель и примерное количество голов.";
}

async function buildRecommendation(scenarioId, answers) {
  const recommendation = generateLocalRecommendation(scenarioId, answers);
  if (!hasOpenRouterConfig()) {
    return recommendation;
  }

  try {
    const aiNote = await askOpenRouter({
      systemPrompt: buildSystemPrompt(),
      userPrompt: buildScenarioPrompt(scenarioId, answers, recommendation)
    });
    if (aiNote) {
      recommendation.aiNote = aiNote;
    }
  } catch {
    recommendation.aiNote = "OpenRouter сейчас недоступен, поэтому итог собран по локальным шаблонам и нормам.";
  }

  return recommendation;
}

function generateLocalRecommendation(scenarioId, answers) {
  switch (scenarioId) {
    case "choose_poultry":
      return generateChooseRecommendation(answers);
    case "calculate_farm":
      return generateFarmRecommendation(answers);
    case "feeding":
      return generateFeedingRecommendation(answers);
    case "economics":
      return generateEconomicsRecommendation(answers);
    case "problems":
      return generateProblemsRecommendation(answers);
    case "beginner":
      return generateBeginnerRecommendation(answers);
    default:
      return {
        title: "Демо-ответ",
        summary: "Сценарий не распознан. Попробуйте начать заново.",
        sections: []
      };
  }
}

function generateChooseRecommendation(answers) {
  const birdId = pickBestBird(answers);
  const bird = state.data.poultryCatalog[birdId];
  const breedKey = mapChoosePurposeToBreedKey(answers.purpose, birdId);
  const breeds = bird.recommendedBreeds[breedKey] || Object.values(bird.recommendedBreeds)[0] || [];
  const warmHint =
    answers.warmHousing === "no"
      ? "Сразу закладывайте более защищенный и сухой вариант помещения."
      : "Можно стартовать спокойнее, если помещение уже подготовлено.";

  return {
    title: state.data.recommendationTemplates.choose_poultry.title,
    summary: `${bird.name} выглядят самым ровным стартом под ваши цели: ${bird.bestFor.slice(0, 2).join(", ")}.`,
    sections: [
      {
        title: "1. Краткий вывод",
        content: `С учетом ваших ответов самым практичным вариантом выглядят ${bird.name.toLowerCase()}.`
      },
      {
        title: "2. Рекомендуемый вариант",
        content: [
          `Основной выбор: ${bird.name}.`,
          `Подходящие породы или кроссы: ${breeds.join(", ")}.`,
          `Сложность старта: ${bird.difficulty}.`
        ]
      },
      {
        title: "3. Расчет и ориентиры",
        content: [
          `Лучше начинать с масштаба: ${mapCountRangeText(answers.countRange)}.`,
          warmHint,
          `Сильные стороны варианта: ${bird.pros.slice(0, 2).join(", ")}.`
        ]
      },
      {
        title: "4. Что подготовить",
        content: [
          "Сухое помещение без сквозняков.",
          "Поилки, кормушки и запас подстилки.",
          "Защиту от хищников и отдельное место под карантин новых птиц."
        ]
      },
      {
        title: "5. Частые ошибки",
        content: [
          "Покупать птицу до подготовки помещения.",
          "Начинать сразу с большого стада без отработанного ухода.",
          `Игнорировать слабые места варианта: ${bird.cons.slice(0, 2).join(", ")}.`
        ]
      },
      {
        title: "6. Следующий шаг",
        content: `Сначала выберите 1–2 породы из списка и проверьте, готовы ли помещение, поилки и корм на первую неделю.`
      }
    ],
    visuals: buildPlanVisuals([birdId, selectHousingVisualByScale(answers.countRange)], "choose"),
    followUps: [
      {
        action: "choose_breeds",
        title: "Выбрать породы",
        description: "Покажу подходящие породы или кроссы и коротко объясню разницу."
      },
      {
        action: "next_to_farm",
        title: "Перейти к хозяйству",
        description: "Сразу продолжим маршрут и посчитаем помещение, выгул и корм."
      }
    ],
    meta: {
      birdId,
      breedKey,
      breeds
    }
  };
}

function pickBestBird(answers) {
  const scores = Object.keys(state.data.poultryCatalog).reduce((acc, birdId) => {
    acc[birdId] = 0;
    return acc;
  }, {});

  applyScores(scores, answers.purpose, {
    eggs: { chickens: 4, quails: 3, ducks: 1 },
    meat: { ducks: 4, turkeys: 3, geese: 2, chickens: 1 },
    universal: { chickens: 5, ducks: 2, geese: 1, quails: 1 },
    sale: { chickens: 3, quails: 2, ducks: 2, turkeys: 2 }
  });
  applyScores(scores, answers.experience, {
    beginner: { chickens: 2, ducks: 2, quails: 1, turkeys: -2, geese: -1 },
    some: { chickens: 1, ducks: 1, quails: 1 },
    farmer: { turkeys: 2, geese: 2, ducks: 1 }
  });
  applyScores(scores, answers.countRange, {
    up_to_10: { chickens: 2, quails: 2, ducks: 1, geese: -1, turkeys: -1 },
    "10_30": { chickens: 2, ducks: 2, quails: 1 },
    more_30: { chickens: 2, ducks: 2, geese: 2, turkeys: 2 }
  });
  applyScores(scores, answers.warmHousing, {
    yes: { quails: 1, chickens: 1, turkeys: 1 },
    no: { ducks: 1, geese: 1, quails: -2, chickens: -1 },
    planned: { chickens: 1, ducks: 1 }
  });

  if (state.preferredBird) {
    scores[state.preferredBird] += 2;
  }

  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}

function applyScores(scores, key, scoreMap) {
  const increments = scoreMap[key] || {};
  Object.entries(increments).forEach(([birdId, delta]) => {
    scores[birdId] += delta;
  });
}

function mapChoosePurposeToBreedKey(purpose, birdId) {
  if (purpose === "sale" && birdId === "turkeys") {
    return "meat";
  }
  if (purpose === "sale" && birdId === "quails") {
    return "eggs";
  }
  if (purpose === "sale") {
    return "universal";
  }
  return purpose;
}

function mapCountRangeText(range) {
  return {
    up_to_10: "до 10 голов",
    "10_30": "10–30 голов",
    more_30: "более 30 голов"
  }[range] || "выбранный вами масштаб";
}

function generateFarmRecommendation(answers) {
  const birdId = answers.birdType;
  const bird = state.data.poultryCatalog[birdId];
  const norms = state.data.housingNorms[birdId];
  const count = Number(answers.count) || 10;
  const indoorArea = round1(norms.indoorAreaM2PerBird * count);
  const runArea = round1(norms.runAreaM2PerBird * count);
  const feedKgDay = round1((norms.feedGramsPerDayPerBird * count) / 1000);
  const feedKgMonth = round1(feedKgDay * 30);
  const nests = norms.nestsPerBirds ? Math.ceil(count / norms.nestsPerBirds) : null;
  const roostMeters = norms.roostCmPerBird ? round1((norms.roostCmPerBird * count) / 100) : null;

  return {
    title: state.data.recommendationTemplates.calculate_farm.title,
    summary: `Для ${count} голов "${bird.name}" лучше сразу закладывать небольшой запас по площади и оборудованию.${state.userProfile.selectedBreed ? ` Выбранная порода: ${state.userProfile.selectedBreed}.` : ""}`,
    sections: [
      {
        title: "1. Краткий вывод",
        content: `Под ваш расчет лучше готовить помещение примерно ${formatNumber(indoorArea)} м² и ориентироваться на стабильный режим кормления и воды.`
      },
      {
        title: "2. Рекомендуемый вариант",
        content: [
          `${bird.name} для цели "${mapGoalText(answers.farmGoal)}".`,
          `Лучше брать помещение с запасом 10–15% к минимальной норме.`,
          `Уровень сложности: ${bird.difficulty}.`
        ]
      },
      {
        title: "3. Расчет и параметры",
        content: [
          `Площадь помещения: примерно ${formatNumber(indoorArea)} м².`,
          `Площадь выгула: ${runArea > 0 ? `примерно ${formatNumber(runArea)} м²` : "обычно не требуется, если это клеточное содержание"}.`,
          `Корм: около ${formatNumber(feedKgDay)} кг в день и ${formatNumber(feedKgMonth)} кг в месяц.`,
          nests ? `Гнезда: около ${nests} шт.` : "Гнезда: не требуются как обязательный элемент.",
          roostMeters ? `Насесты: примерно ${formatNumber(roostMeters)} м.` : "Насесты: не являются ключевым элементом для этого вида."
        ]
      },
      {
        title: "4. Что подготовить",
        content: buildEquipmentList(birdId, count, norms)
      },
      {
        title: "5. Частые ошибки",
        content: [
          "Брать минимальную площадь без запаса.",
          "Недооценивать расход корма и подстилки.",
          norms.notes[0],
          norms.notes[1]
        ]
      },
      {
        title: "6. Следующий шаг",
        content: "Сделайте схему помещения на бумаге: где будут кормушки, поилки, зона отдыха и место хранения корма."
      }
    ],
    visuals: buildCalculationVisuals(count, runArea),
    followUps: [
      {
        action: "choose_coop",
        title: "Выбрать курятник",
        description: "Соберу быстрый ориентир по помещению, выгулу и размещению оборудования."
      },
      {
        action: "choose_feeding",
        title: "Подобрать кормление",
        description: "Продолжим с базовой схемой кормления для этого вида птицы."
      },
      {
        action: "open_economics",
        title: "Прикинуть экономику",
        description: "Сравним стартовые расходы, ежемесячные затраты и грубую точку безубыточности."
      }
    ],
    meta: {
      birdId,
      count,
      indoorArea,
      runArea
    }
  };
}

function buildEquipmentList(birdId, count, norms) {
  const list = [
    `Не менее 2 поилок и 2 кормушек на старт для ${count} голов.`,
    "Запас сухой подстилки минимум на первые 2 недели.",
    `Постоянный доступ к воде: ${norms.water}.`
  ];
  if (birdId === "chickens") {
    list.push("Гнезда и насесты лучше поставить сразу, а не добавлять позже.");
  }
  if (birdId === "quails") {
    list.push("Клетки или батареи с защитой от сквозняков и стабильным светом.");
  }
  if (birdId === "ducks" || birdId === "geese") {
    list.push("Отдельную сухую зону, чтобы птица не разводила сырость по всему помещению.");
  }
  return list;
}

function buildCalculationVisuals(count, runArea) {
  const visuals = [];
  const housingKey = count <= 20 ? "small_coop" : "medium_coop";
  visuals.push(toHousingVisual(housingKey, "Ориентир по помещению для вашего масштаба."));
  if (runArea > 0) {
    visuals.push(toHousingVisual("walk_area", "Выгул стоит сразу заложить с запасом и сухой зоной."));
  }
  visuals.push(toHousingVisual("feeders", "Кормушки и поилки лучше предусмотреть с первого дня."));
  return visuals.slice(0, 3);
}

function generateEconomicsRecommendation(answers) {
  const birdId = answers.birdType;
  const bird = state.data.poultryCatalog[birdId];
  const norms = state.data.housingNorms[birdId];
  const model = answers.economyModel;
  const count = Number(answers.count) || 10;
  const economics = ECONOMICS_ASSUMPTIONS[birdId];
  const feedKgMonth = round1(((norms.feedGramsPerDayPerBird * count) / 1000) * 30);
  const coopCost = count <= 20 ? economics.coopBaseSmall : economics.coopBaseMedium;
  const startupCosts = Math.round(coopCost + economics.equipmentPerBird * count + economics.youngBirdCost * count);
  const monthlyCosts = Math.round(
    feedKgMonth * economics.feedPricePerKg +
      economics.beddingMonthlyPerBird * count +
      economics.utilitiesMonthlyBase
  );

  const result = buildEconomicsModel(model, birdId, count, startupCosts, monthlyCosts, economics);

  return {
    title: "Упрощенная экономика",
    summary: `Это грубый ориентир для "${bird.name}" на ${count} голов. Он помогает сравнить стартовые вложения, текущие расходы и понять, когда хозяйство начнет отбиваться.`,
    sections: [
      {
        title: "1. Краткий вывод",
        content: result.summary
      },
      {
        title: "2. Рекомендуемый вариант",
        content: [
          `Модель расчета: ${mapEconomyModelText(model)}.`,
          `Вид птицы: ${bird.name}.`,
          state.userProfile.selectedBreed ? `Сохраненная порода: ${state.userProfile.selectedBreed}.` : "Порода не влияет на расчет критично, поэтому взят усредненный вариант."
        ]
      },
      {
        title: "3. Расчет и параметры",
        content: [
          `Стартовые вложения: около ${formatCurrency(startupCosts)}.`,
          `Текущие расходы: около ${formatCurrency(monthlyCosts)} в месяц.`,
          ...result.metrics
        ]
      },
      {
        title: "4. Что подготовить",
        content: [
          "Запас корма минимум на первый месяц.",
          "Резерв 10–15% на непредвиденные траты.",
          "Понимание, куда будете сбывать яйцо или мясо, если расчет делается под продажу."
        ]
      },
      {
        title: "5. Частые ошибки",
        content: [
          "Считать только корм и забывать про помещение, подстилку и оборудование.",
          "Переоценивать цену продажи и недооценивать простой стада.",
          "Ждать окупаемость без плана сбыта или без учета сезонности."
        ]
      },
      {
        title: "6. Следующий шаг",
        content: "Проверьте свои реальные цены на корм, молодняк и продажу продукции и подставьте их в этот ориентир как следующий слой точности."
      }
    ],
    followUps: [
      {
        action: "choose_coop",
        title: "Вернуться к курятнику",
        description: "Сопоставим экономику с типом помещения и масштабом."
      },
      {
        action: "choose_feeding",
        title: "Связать с кормлением",
        description: "Следом можно посмотреть схему кормления и понять, где основные расходы."
      }
    ],
    visuals: buildPlanVisuals([birdId, count <= 20 ? "small_coop" : "medium_coop"], "economics"),
    meta: {
      birdId,
      count,
      model,
      startupCosts,
      monthlyCosts
    }
  };
}

function buildEconomicsModel(model, birdId, count, startupCosts, monthlyCosts, economics) {
  if (model === "eggs_sale" && economics.eggsPerBirdMonthly <= 0) {
    return {
      summary: "Для этого вида птицы модель продажи яйца обычно не является основной, поэтому такой сценарий лучше считать как мясной или семейный.",
      metrics: [
        `Стартовые вложения: ориентировочно ${formatCurrency(startupCosts)}.`,
        `Текущие расходы: ориентировочно ${formatCurrency(monthlyCosts)} в месяц.`,
        "Для более реалистичной оценки переключитесь на продажу мяса или на семейную экономию."
      ]
    };
  }

  if (model === "eggs_sale" && economics.eggsPerBirdMonthly > 0) {
    const monthlyIncome = Math.round(count * 0.85 * economics.eggsPerBirdMonthly * economics.eggPrice);
    const monthlyProfit = monthlyIncome - monthlyCosts;
    return {
      summary:
        monthlyProfit > 0
          ? `При продаже яйца хозяйство может давать около ${formatCurrency(monthlyProfit)} в месяц после текущих расходов.`
          : "При таких вводных яйцо вряд ли быстро перекроет текущие расходы, если не улучшить цену продажи или масштаб.",
      metrics: [
        `Доход от яйца: около ${formatCurrency(monthlyIncome)} в месяц.`,
        `Остаток после текущих расходов: ${formatCurrency(monthlyProfit)} в месяц.`,
        monthlyProfit > 0
          ? `Грубая точка безубыточности по стартовым вложениям: примерно ${formatPaybackMonths(startupCosts / monthlyProfit)}.`
          : "Точка безубыточности не просматривается в плюс при таких вводных."
      ]
    };
  }

  if (model === "meat_sale") {
    const cycleRevenue = Math.round(count * economics.meatRevenuePerBird);
    const cycleCosts = Math.round(monthlyCosts * economics.meatCycleMonths);
    const cycleProfit = cycleRevenue - cycleCosts;
    return {
      summary:
        cycleProfit > 0
          ? `В мясном цикле один оборот может приносить около ${formatCurrency(cycleProfit)} до учета ваших дополнительных рисков и потерь.`
          : "При таком масштабе один мясной цикл выглядит очень плотным по затратам и может не отбивать себя без хорошей цены продажи.",
      metrics: [
        `Выручка за цикл: около ${formatCurrency(cycleRevenue)}.`,
        `Текущие расходы за цикл: около ${formatCurrency(cycleCosts)}.`,
        `Остаток за цикл: ${formatCurrency(cycleProfit)}.`,
        cycleProfit > 0
          ? `Грубая окупаемость стартовых вложений: примерно ${formatPaybackCycles(startupCosts / cycleProfit)}.`
          : "Окупаемость стартовых вложений не просматривается в плюс при таком сценарии."
      ]
    };
  }

  const familySavings =
    birdId === "chickens" || birdId === "quails" || birdId === "ducks"
      ? Math.round(count * 0.8 * Math.max(economics.eggsPerBirdMonthly, 12) * Math.max(economics.eggPrice, 10))
      : Math.round((count * economics.meatRevenuePerBird) / Math.max(economics.meatCycleMonths, 3));
  const familyBalance = familySavings - monthlyCosts;
  return {
    summary:
      familyBalance > 0
        ? `Для семьи хозяйство может перекрывать часть покупок и условно экономить около ${formatCurrency(familyBalance)} в месяц.`
        : "Для семьи это скорее способ получить свой продукт и опыт, чем быстрый способ сэкономить деньги.",
    metrics: [
      `Условная экономия на покупках: около ${formatCurrency(familySavings)} в месяц.`,
      `Текущие расходы: около ${formatCurrency(monthlyCosts)} в месяц.`,
      `Разница: ${formatCurrency(familyBalance)} в месяц.`,
      familyBalance > 0
        ? `Грубая окупаемость стартовых вложений: примерно ${formatPaybackMonths(startupCosts / familyBalance)}.`
        : "Окупаемость стартовых вложений для семейного сценария здесь вторична."
    ]
  };
}

function generateFeedingRecommendation(answers) {
  const bird = state.data.poultryCatalog[answers.birdType];
  const norms = state.data.housingNorms[answers.birdType];
  const frequency = {
    chicks: "5–6 раз в день малыми порциями",
    young: "3–4 раза в день",
    adult: "2–3 раза в день в стабильном режиме"
  }[answers.age];

  const components = getFeedingComponents(answers.birdType, answers.age, answers.feedingGoal);
  return {
    title: state.data.recommendationTemplates.feeding.title,
    summary: `Для вида "${bird.name}" важнее всего корм по возрасту, чистая вода и спокойная смена рациона без резких скачков.`,
    sections: [
      {
        title: "1. Краткий вывод",
        content: `На вашем этапе лучше держаться простой схемы: полноценный корм по возрасту, вода постоянно и без резкой замены состава.`
      },
      {
        title: "2. Рекомендуемый вариант",
        content: [
          `Вид птицы: ${bird.name}.`,
          `Возраст: ${mapAgeText(answers.age)}.`,
          `Цель: ${mapFeedingGoalText(answers.feedingGoal)}.`
        ]
      },
      {
        title: "3. Расчет и параметры",
        content: [
          `Основа рациона: ${components.join(", ")}.`,
          `Частота кормления: ${frequency}.`,
          `Вода: ${norms.water}.`
        ]
      },
      {
        title: "4. Что подготовить",
        content: [
          "Корм по возрасту или стабильную базовую смесь.",
          "Отдельную емкость для минеральных добавок, если это применимо.",
          "Чистые поилки и запас корма минимум на 5–7 дней."
        ]
      },
      {
        title: "5. Частые ошибки",
        content: [
          "Резко менять рацион без переходного периода.",
          "Давать корм не по возрасту птицы.",
          "Оставлять грязную воду или пустые поилки."
        ]
      },
      {
        title: "6. Следующий шаг",
        content: `Проверьте, совпадает ли ваш текущий корм с возрастом птицы, и составьте режим кормления хотя бы на ближайшие 3 дня.`
      }
    ],
    visuals: buildPlanVisuals([answers.birdType, "feeders"], "feeding")
  };
}

function getFeedingComponents(birdId, age, goal) {
  const base = [];
  if (age === "chicks") {
    base.push("стартовый корм", "чистая вода", "мелкая фракция корма");
  }
  if (age === "young") {
    base.push("ростовой корм", "зерновая часть", "белковая добавка");
  }
  if (age === "adult") {
    base.push("полнорационный корм", "зерносмесь", "минеральные добавки");
  }
  if (goal === "eggs") {
    base.push("кальций или ракушка");
  }
  if (goal === "meat") {
    base.push("стабильная энергетическая часть рациона");
  }
  if (birdId === "ducks" || birdId === "geese") {
    base.push("свежая зелень по сезону");
  }
  if (birdId === "quails") {
    base.push("корм с подходящей мелкой фракцией");
  }
  return [...new Set(base)];
}

function generateProblemsRecommendation(answers) {
  const issue = mapProblemText(answers.problemType);
  const checks = buildProblemChecks(answers);
  return {
    title: state.data.recommendationTemplates.problems.title,
    summary: `По ситуации "${issue}" сначала лучше проверить бытовые причины и условия содержания, а не искать диагноз самостоятельно.`,
    sections: [
      {
        title: "1. Краткий вывод",
        content: `Сначала исключите самые частые бытовые причины: корм, свет, воду, температуру, стресс и возраст птицы.`
      },
      {
        title: "2. Рекомендуемый вариант",
        content: [
          `Симптом: ${issue}.`,
          `Возрастная группа: ${mapProblemAgeText(answers.age)}.`,
          `Недавние изменения: ${mapChangeText(answers.changes)}.`
        ]
      },
      {
        title: "3. Расчет и параметры",
        content: [
          "Проверьте корм, воду, свет, чистоту подстилки и плотность посадки.",
          "Сравните состояние птицы за последние 2–3 дня, а не по одному кормлению.",
          "Фиксируйте изменения коротко: что изменили, когда и как отреагировала птица."
        ]
      },
      {
        title: "4. Что подготовить",
        content: checks
      },
      {
        title: "5. Частые ошибки",
        content: [
          "Сразу искать лекарство без проверки условий содержания.",
          "Резко менять несколько факторов одновременно.",
          "Откладывать обращение к специалисту при ухудшении состояния."
        ]
      },
      {
        title: "6. Следующий шаг",
        content: "Сегодня составьте короткий чек-лист: вода, корм, свет, температура, чистота, поведение и были ли новые птицы в стаде."
      }
    ],
    warning: state.data.recommendationTemplates.problems.mandatoryWarning,
    visuals: buildPlanVisuals(["feeders", "walk_area"], "problems")
  };
}

function buildProblemChecks(answers) {
  const map = {
    no_eggs: ["Длину светового дня.", "Полноценность рациона и наличие кальция.", "Нет ли стресса, линьки или перепадов температуры."],
    thin_shell: ["Качество корма.", "Наличие минеральной добавки.", "Доступ к чистой воде и стабильный световой режим."],
    low_appetite: ["Свежесть корма.", "Нет ли жары, сырости или стресса.", "Не забиты ли поилки и кормушки."],
    lethargic: ["Температуру, воду и вентиляцию.", "Не выглядит ли птица обезвоженной.", "Нет ли признаков быстрого ухудшения."],
    slow_growth: ["Достаточность корма по возрасту.", "Плотность посадки.", "Есть ли у птицы доступ к воде без конкуренции."],
    other: ["Все базовые условия содержания.", "Были ли новые птицы или резкая смена режима.", "Не появилась ли выраженная слабость или отказ от воды."]
  };
  const checks = map[answers.problemType] || map.other;
  if (answers.changes !== "no") {
    checks.push("Верните в память, что именно изменилось последним, и оценивайте влияние по одному фактору.");
  }
  return checks;
}

function generateBeginnerRecommendation(answers) {
  const starter = chooseBeginnerStarter(answers);
  const bird = state.data.poultryCatalog[starter.birdId];
  return {
    title: state.data.recommendationTemplates.beginner.title,
    summary: `Для старта без перегрузки лучше идти небольшими шагами: ${starter.countText} ${bird.name.toLowerCase()} с заранее подготовленным помещением и понятным режимом ухода.`,
    sections: [
      {
        title: "1. Краткий вывод",
        content: `Самый спокойный старт для ваших условий: ${starter.countText} ${bird.name.toLowerCase()}.`
      },
      {
        title: "2. Рекомендуемый вариант",
        content: [
          `Основная цель: ${mapDesiredResultText(answers.desiredResult)}.`,
          `Лучший старт: ${starter.countText} ${bird.name.toLowerCase()}.`,
          `Почему подходит: ${starter.reason}.`
        ]
      },
      {
        title: "3. Расчет и параметры",
        content: [
          `Первые 30 дней лучше держать простой ритм: корм, вода, уборка, наблюдение.`,
          `Не расширяйте стадо, пока не отработаете базовый уход на первой группе.`,
          `Сложность варианта: ${bird.difficulty}.`
        ]
      },
      {
        title: "4. Что подготовить",
        content: [
          "Помещение или клетку, поилки, кормушки, подстилку.",
          "Стартовый запас корма минимум на неделю.",
          "План уборки и источник чистой воды."
        ]
      },
      {
        title: "5. Частые ошибки",
        content: [
          "Начинать с слишком большого количества голов.",
          "Покупать птицу до полной подготовки места.",
          "Браться сразу за несколько видов птицы."
        ]
      },
      {
        title: "6. Следующий шаг",
        content: `На этой неделе определитесь с помещением и составьте список покупок под ${starter.countText} голов.`
      }
    ],
    visuals: buildPlanVisuals([starter.birdId, selectHousingVisualByScale(answers.startSize)], "beginner"),
    followUps: [
      {
        action: "next_to_farm",
        title: "Рассчитать хозяйство",
        description: "Продолжим от старта к помещению, выгулу и оборудованию."
      },
      {
        action: "open_economics",
        title: "Прикинуть экономику",
        description: "Сразу посмотрим, сколько может стоить такой старт и когда он начнет отбиваться."
      }
    ],
    meta: {
      birdId: starter.birdId,
      starterCountText: starter.countText
    }
  };
}

function chooseBeginnerStarter(answers) {
  if (answers.desiredResult === "home_eggs") {
    if (answers.place === "dacha" && answers.startSize === "5_10") {
      return { birdId: "quails", countText: "5–10", reason: "занимают мало места и дают быстрый практический результат" };
    }
    return { birdId: "chickens", countText: "5–10", reason: "это самый понятный и предсказуемый старт для домашних яиц" };
  }
  if (answers.desiredResult === "family_meat") {
    return { birdId: "ducks", countText: answers.startSize === "5_10" ? "5–10" : "10–20", reason: "их проще понять в мясном направлении, чем более требовательную птицу" };
  }
  if (answers.desiredResult === "small_income") {
    return { birdId: "chickens", countText: "10–20", reason: "легче выстроить предсказуемый режим и реализовывать яйца или молодку" };
  }
  return { birdId: "chickens", countText: answers.startSize === "more_30" ? "10–20" : "5–10", reason: "они позволяют спокойно протестировать мини-ферму без лишней сложности" };
}

function buildPlanVisuals(ids, source) {
  return ids
    .filter(Boolean)
    .map((id) => {
      if (state.data.visualAssets.poultryImages[id]) {
        const visual = state.data.visualAssets.poultryImages[id];
        return {
          id: `${source}-${id}`,
          title: visual.title,
          imageUrl: visual.imageUrl,
          alt: visual.alt,
          description: birdDescriptions[id] || "Наглядный ориентир для вашего выбора."
        };
      }
      return toHousingVisual(id, "Наглядный ориентир для подготовки пространства.");
    })
    .slice(0, 2);
}

function toggleCard(cardKey) {
  if (!cardKey) {
    return;
  }
  state.activeCards[cardKey] = !state.activeCards[cardKey];
  render();
}

function runFollowUp(action) {
  const context = state.lastRecommendationContext;
  if (!context) {
    pushSystemMessage("Сначала получите итоговый план, а потом можно продолжить диалог по нему.");
    render();
    return;
  }

  if (action === "choose_breeds") {
    const birdId = context.recommendation.meta?.birdId;
    const breeds = context.recommendation.meta?.breeds || [];
    const birdName = state.data.poultryCatalog[birdId]?.name || "этого варианта";
    pushUserMessage("Выбрать породы");
    if (breeds.length) {
      pushAssistantMessage(`Для варианта "${birdName}" выберите породу или кросс. Я запомню выбор и сразу переведу вас к расчету хозяйства.`);
      openPendingFlow({
        id: "breed_select",
        title: "Выберите породу",
        subtitle: "Сохраним выбор и продолжим маршрут",
        context: { birdId },
        options: breeds.map((breed) => ({
          value: breed,
          label: breed,
          description: "Сохранить этот вариант и перейти к следующему шагу"
        }))
      });
      return;
    }
    pushAssistantMessage(`Могу помочь подобрать породы для "${birdName}", но для точного списка лучше сначала уточнить цель содержания и масштаб старта.`);
    render();
    return;
  }

  if (action === "next_to_farm") {
    const rememberedBirdId = context.recommendation.meta?.birdId || state.userProfile.selectedBirdId;
    startScenario("calculate_farm", {
      presetAnswers: rememberedBirdId ? { birdType: rememberedBirdId } : {},
      userText: "Рассчитать хозяйство",
      introText: "Продолжаем маршрут: теперь прикинем помещение, выгул, корм и оборудование."
    });
    return;
  }

  if (action === "choose_coop") {
    const meta = context.recommendation.meta || {};
    const birdId = meta.birdId || context.answers.birdType || state.userProfile.selectedBirdId;
    const birdName = state.data.poultryCatalog[birdId]?.name || "птицы";
    const scaleText =
      context.answers.countRange
        ? mapCountRangeText(context.answers.countRange)
        : meta.count
          ? `${meta.count} голов`
          : "ваш масштаб";
    const housingHint =
      scaleText === "до 10 голов" || String(scaleText).includes("10")
        ? "Для такого старта обычно хватает малого курятника или компактного утепленного помещения."
        : "Для такого масштаба лучше сразу смотреть на средний курятник с запасом по проходам и кормушкам.";
    pushUserMessage("Выбрать курятник");
    pushAssistantMessage(
      `Для ${birdName.toLowerCase()} и масштаба "${scaleText}" ориентируйтесь на сухое помещение без сквозняков и удобный доступ к воде и корму. ${housingHint} Если хотите, следующим сообщением могу отдельно расписать схему размещения внутри.`
    );
    render();
    return;
  }

  if (action === "choose_feeding") {
    const birdId = context.recommendation.meta?.birdId || context.answers.birdType || state.userProfile.selectedBirdId;
    const birdName = state.data.poultryCatalog[birdId]?.name || "птицы";
    startScenario("feeding", {
      presetAnswers: birdId ? { birdType: birdId } : {},
      userText: "Подобрать кормление",
      introText: `Продолжаем по цепочке: теперь соберем базовую схему кормления для ${birdName.toLowerCase()}.`
    });
    return;
  }

  if (action === "open_economics") {
    const birdId = context.recommendation.meta?.birdId || context.answers.birdType || state.userProfile.selectedBirdId;
    const count = context.recommendation.meta?.count || state.userProfile.count;
    startScenario("economics", {
      presetAnswers: {
        ...(birdId ? { birdType: birdId } : {}),
        ...(count ? { count } : {})
      },
      userText: "Прикинуть экономику",
      introText: "Теперь прикинем упрощенную экономику: стартовые вложения, текущие затраты и возможную окупаемость."
    });
    return;
  }
}

function toHousingVisual(id, description) {
  const visual = state.data.visualAssets.housingImages[id];
  return {
    id,
    title: visual.title,
    imageUrl: visual.imageUrl,
    alt: visual.alt,
    description
  };
}

function selectHousingVisualByScale(scale) {
  return scale === "more_30" || scale === "10_30" ? "medium_coop" : "small_coop";
}

function mapGoalText(goal) {
  return {
    family: "для семьи",
    sale: "для продажи",
    test: "тестовый запуск"
  }[goal] || goal;
}

function mapEconomyModelText(model) {
  return {
    eggs_sale: "продажа яйца",
    meat_sale: "продажа мяса",
    family_budget: "экономия для семьи"
  }[model] || model;
}

function mapAgeText(age) {
  return {
    chicks: "птенцы",
    young: "молодняк",
    adult: "взрослая птица"
  }[age] || age;
}

function mapFeedingGoalText(goal) {
  return {
    eggs: "яйценоскость",
    meat: "рост на мясо",
    maintenance: "обычное содержание"
  }[goal] || goal;
}

function mapProblemText(type) {
  return {
    no_eggs: "перестали нестись",
    thin_shell: "тонкая скорлупа",
    low_appetite: "плохо едят",
    lethargic: "вялые",
    slow_growth: "медленно растут",
    other: "другая проблема"
  }[type] || type;
}

function mapProblemAgeText(age) {
  return {
    under_6_months: "до 6 месяцев",
    "6_12_months": "6–12 месяцев",
    over_1_year: "старше года"
  }[age] || age;
}

function mapChangeText(change) {
  return {
    feed: "меняли корм",
    light: "меняли световой режим",
    temperature: "были перепады температуры",
    no: "заметных изменений не было",
    not_sure: "точной уверенности нет"
  }[change] || change;
}

function mapDesiredResultText(result) {
  return {
    home_eggs: "домашние яйца",
    family_meat: "мясо для семьи",
    small_income: "небольшой заработок",
    try_farm: "попробовать мини-ферму"
  }[result] || result;
}

function getStartButtonDescription(id) {
  const descriptions = {
    choose_poultry: "Подберу вид птицы, породы и базовый старт.",
    calculate_farm: "Посчитаю площадь, корм и минимальное оборудование.",
    feeding: "Соберу простую схему кормления без перегруза.",
    economics: "Сравню стартовые затраты, расходы, доходы и окупаемость.",
    problems: "Дам безопасный чек-лист первичной проверки.",
    beginner: "Сделаю понятный план запуска на старте.",
    free_question: "Можно спросить свободным текстом."
  };
  return descriptions[id] || "";
}

function getComposerPlaceholder(currentQuestion) {
  if (state.freeQuestionMode) {
    return "Напишите свой вопрос";
  }
  if (currentQuestion?.id === "count") {
    return "Введите количество голов, если нужен свой вариант";
  }
  if (currentQuestion) {
    return "Можно уточнить вопрос или выбрать кнопку выше";
  }
  return "Например: что выбрать для дачи, куры или перепела?";
}

function getComposerHint(currentQuestion) {
  if (state.freeQuestionMode) {
    return freeQuestionHints.free;
  }
  if (currentQuestion?.id === "count") {
    return freeQuestionHints.custom;
  }
  if (currentQuestion) {
    return freeQuestionHints.scenario;
  }
  return freeQuestionHints.idle;
}

function pushAssistantMessage(text, extra = {}) {
  state.messages.push({
    role: "assistant",
    label: "Умный птичник",
    text,
    ...extra
  });
}

function pushUserMessage(text) {
  state.messages.push({
    role: "user",
    label: "Вы",
    text
  });
}

function pushSystemMessage(text) {
  state.messages.push({
    role: "system",
    label: "Подсказка",
    text
  });
}

function buildSystemPrompt() {
  return [
    "Ты — Умный птичник, дружелюбный консультант для начинающих владельцев домашней птицы.",
    "Говори простым русским языком.",
    "Используй локальные данные как основной источник.",
    "Не ставь диагнозы.",
    "Не назначай лекарства и дозировки.",
    "Все цифры называй ориентировочными.",
    "Если тема касается здоровья птицы, давай только бытовой чек-лист и совет обратиться к ветеринарному специалисту."
  ].join("\n");
}

function buildScenarioPrompt(scenarioId, answers, recommendation) {
  return [
    `Сценарий: ${state.data.scenarios[scenarioId].title}.`,
    `Ответы пользователя: ${JSON.stringify(answers, null, 2)}.`,
    "Ниже локальная рекомендация. Сожми ее в 5-7 предложений простым языком без повторов.",
    "Не выдумывай новые точные цифры и не добавляй ветеринарные назначения.",
    JSON.stringify(recommendation, null, 2)
  ].join("\n");
}

function buildFreeQuestionPrompt(questionText, fallbackText) {
  return [
    `Вопрос пользователя: ${questionText}`,
    "Ответь кратко, просто и безопасно.",
    "Если вопрос про болезнь или симптомы, не ставь диагноз и не назначай лечение.",
    `Можно опереться на такой безопасный базовый ответ: ${fallbackText}`
  ].join("\n");
}

async function askOpenRouter({ systemPrompt, userPrompt }) {
  const functionUrl = getOpenRouterFunctionUrl();

  if (functionUrl) {
    const response = await fetch(functionUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        systemPrompt,
        userPrompt,
        siteUrl: getPublicSiteUrl()
      })
    });

    if (!response.ok) {
      throw new Error(`Hosted AI error ${response.status}`);
    }

    const data = await response.json();
    return data.content?.trim() || "";
  }

  const apiKey = state.env.VITE_OPENROUTER_API_KEY;
  if (!apiKey) {
    throw new Error("missing ai backend");
  }

  const model = state.env.VITE_OPENROUTER_MODEL || "openai/gpt-4o-mini";
  const siteUrl = state.env.VITE_SITE_URL || getPublicSiteUrl() || "http://localhost:8000";
  const siteName = state.env.VITE_SITE_NAME || "Smart Poultry House Demo";

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "HTTP-Referer": siteUrl,
      "X-OpenRouter-Title": siteName
    },
    body: JSON.stringify({
      model,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt }
      ],
      temperature: 0.4,
      max_tokens: 500
    })
  });

  if (!response.ok) {
    throw new Error(`OpenRouter error ${response.status}`);
  }

  const data = await response.json();
  return data.choices?.[0]?.message?.content?.trim() || "";
}

function getOpenRouterFunctionUrl() {
  if (!canUseHostedAi()) {
    return null;
  }
  return `${window.location.origin}/.netlify/functions/openrouter`;
}

function getPublicSiteUrl() {
  if (typeof window === "undefined") {
    return "";
  }
  return window.location.origin === "null" ? "" : window.location.origin;
}

function round1(value) {
  return Math.round(value * 10) / 10;
}

function formatNumber(value) {
  return new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 1 }).format(value);
}

function formatCurrency(value) {
  const sign = value < 0 ? "-" : "";
  return `${sign}${new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 0 }).format(Math.abs(Math.round(value)))} ₽`;
}

function formatPaybackMonths(months) {
  return months <= 1 ? "меньше месяца" : `около ${formatNumber(months)} мес.`;
}

function formatPaybackCycles(cycles) {
  return cycles <= 1 ? "меньше одного цикла" : `около ${formatNumber(cycles)} циклов`;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function slugify(value) {
  return String(value ?? "")
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-zа-я0-9_-]+/gi, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}
