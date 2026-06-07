(function () {
  const appRoot = document.getElementById("app");

  if (!appRoot) {
    return;
  }

  const fallbackData = {
    appConfig: {
      appName: "Умный птичник",
      subtitle: "Помощник по домашней птице для спокойного старта",
      welcomeMessage:
        "Здравствуйте! Я помогу выбрать птицу, рассчитать хозяйство, подобрать кормление и прикинуть простую экономику.",
      disclaimer:
        "Информация носит справочный характер. Сервис не ставит диагнозы, не назначает лечение и не заменяет ветеринарного специалиста.",
      startButtons: [
        { id: "choose_poultry", label: "Выбрать птицу", emoji: "🐔" },
        { id: "calculate_farm", label: "Рассчитать хозяйство", emoji: "📐" },
        { id: "feeding", label: "Подобрать кормление", emoji: "🌾" },
        { id: "economics", label: "Прикинуть экономику", emoji: "💰" },
        { id: "problems", label: "Проблемы и болезни", emoji: "🩺" },
        { id: "beginner", label: "Я новичок", emoji: "👨‍🌾" },
        { id: "free_question", label: "Задать свой вопрос", emoji: "✍️" }
      ]
    },
    scenarios: {},
    poultryCatalog: {},
    housingNorms: {},
    recommendationTemplates: {},
    safetyRules: {
      safeHealthResponse:
        "Я не ставлю диагнозы и не назначаю лечение. Могу помочь с бытовой проверкой условий содержания и подсказать, когда лучше обратиться к ветеринарному специалисту."
    },
    visualAssets: {
      poultryImages: {},
      housingImages: {}
    }
  };

  const economicsAssumptions = {
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

  const state = {
    data: fallbackData,
    messages: [],
    activeScenarioId: null,
    questionIndex: 0,
    answers: {},
    draftMessage: "",
    freeQuestionMode: false,
    pendingAction: null,
    activeCards: {},
    userProfile: {
      birdType: null,
      breed: null,
      count: null,
      purpose: null,
      economyModel: null
    },
    lastMessageCount: 0
  };

  boot().catch(function (error) {
    console.error("Boot error", error);
    showFatalError();
  });

  async function boot() {
    applyInitialConversation();
    render();

    const data = await loadAllData();
    state.data = data;
    applyInitialConversation();
    render();
  }

  async function loadAllData() {
    const results = await Promise.all([
      loadJson("/data/app_config.json", fallbackData.appConfig),
      loadJson("/data/scenarios.json", fallbackData.scenarios),
      loadJson("/data/poultry_catalog.json", fallbackData.poultryCatalog),
      loadJson("/data/housing_norms.json", fallbackData.housingNorms),
      loadJson("/data/recommendation_templates.json", fallbackData.recommendationTemplates),
      loadJson("/data/safety_rules.json", fallbackData.safetyRules),
      loadJson("/data/visual_assets.json", fallbackData.visualAssets)
    ]);

    return {
      appConfig: results[0],
      scenarios: results[1],
      poultryCatalog: results[2],
      housingNorms: results[3],
      recommendationTemplates: results[4],
      safetyRules: results[5],
      visualAssets: results[6]
    };
  }

  async function loadJson(path, fallback) {
    try {
      const response = await fetch(path, { cache: "no-store" });
      if (!response.ok) {
        throw new Error("HTTP " + response.status);
      }
      return await response.json();
    } catch (error) {
      return fallback;
    }
  }

  function applyInitialConversation() {
    state.messages = [
      {
        role: "assistant",
        label: state.data.appConfig.appName || "Умный птичник",
        text:
          state.data.appConfig.welcomeMessage ||
          "Здравствуйте! Я помогу пройти короткий маршрут по птице, условиям содержания, кормлению и базовой экономике."
      },
      {
        role: "system",
        label: "Как пользоваться",
        text:
          "1. Выберите сценарий плиткой ниже. 2. Отвечайте в основном кнопками. 3. В конце получите план и сможете продолжить маршрут дальше."
      }
    ];
    state.activeScenarioId = null;
    state.questionIndex = 0;
    state.answers = {};
    state.freeQuestionMode = false;
    state.pendingAction = null;
    state.draftMessage = "";
  }

  function render() {
    const scenario = getCurrentScenario();
    const question = getCurrentQuestion();

    appRoot.innerHTML = [
      '<div class="app-shell">',
      renderSidebar(),
      '<section class="chat-shell">',
      '<div class="chat-topbar">',
      '<div class="chat-title">',
      "<strong>" + escapeHtml(scenario ? scenario.title : state.data.appConfig.appName) + "</strong>",
      "<span>" +
        escapeHtml(
          scenario
            ? scenario.goal
            : "Короткие сценарии, понятные кнопки и итоговый план для старта"
        ) +
        "</span>",
      "</div>",
      '<button class="reset-button" data-action="reset">Начать заново</button>',
      "</div>",
      '<div class="messages" id="messages">',
      state.messages.map(renderMessage).join(""),
      "</div>",
      renderActionPanel(question),
      renderComposer(),
      "</section>",
      "</div>"
    ].join("");

    attachEvents();
    wireImageFallbacks();
    scrollMessages();
  }

  function renderSidebar() {
    return [
      '<aside class="sidebar">',
      '<div class="eyebrow">Демо-версия • ' + escapeHtml(state.data.appConfig.appName) + "</div>",
      "<h1>" + escapeHtml(state.data.appConfig.appName) + "</h1>",
      '<p class="subtitle">' + escapeHtml(state.data.appConfig.subtitle || "") + "</p>",
      '<div class="guide-card">',
      "<strong>Как пользоваться</strong>",
      '<div class="guide-steps">',
      '<div class="guide-step">1. Выберите сценарий: птица, хозяйство, кормление, экономика или старт для новичка.</div>',
      '<div class="guide-step">2. Отвечайте крупными плитками, а текст используйте для уточнений.</div>',
      '<div class="guide-step">3. После плана продолжайте маршрут: породы, расчёт, корма и экономика.</div>',
      "</div>",
      "</div>",
      '<div class="sidebar-note">' + escapeHtml(state.data.appConfig.disclaimer || "") + "</div>",
      "</aside>"
    ].join("");
  }

  function renderMessage(message) {
    return [
      '<article class="message ' + escapeHtml(message.role) + '">',
      message.label ? '<div class="message-label">' + escapeHtml(message.label) + "</div>" : "",
      "<p>" + escapeHtml(message.text || "") + "</p>",
      message.recommendation ? renderRecommendationCard(message.recommendation) : "",
      message.visuals ? renderVisuals(message.visuals) : "",
      "</article>"
    ].join("");
  }

  function renderVisuals(items) {
    return [
      '<div class="visual-grid compact">',
      items
        .slice(0, 3)
        .map(function (item) {
          return [
            '<article class="visual-card">',
            '<img src="' + escapeHtml(normalizeImage(item.imageUrl)) + '" alt="' + escapeHtml(item.alt || item.title) + '" />',
            '<div class="visual-fallback">' + escapeHtml(item.title || "Иллюстрация") + "</div>",
            '<div class="visual-body">',
            "<strong>" + escapeHtml(item.title || "") + "</strong>",
            item.description ? "<p>" + escapeHtml(item.description) + "</p>" : "<p>Подходящая иллюстрация для этого шага.</p>",
            "</div>",
            "</article>"
          ].join("");
        })
        .join(""),
      "</div>"
    ].join("");
  }

  function renderRecommendationCard(recommendation) {
    return [
      '<div class="plan-card">',
      '<div class="plan-header"><strong>Ваш план</strong><span>' + escapeHtml(recommendation.title) + "</span></div>",
      '<p class="plan-intro">' + escapeHtml(recommendation.summary) + "</p>",
      '<div class="section-list">',
      recommendation.sections.map(renderPlanSection).join(""),
      "</div>",
      recommendation.warning ? '<div class="warning-box">' + escapeHtml(recommendation.warning) + "</div>" : "",
      recommendation.visuals && recommendation.visuals.length ? renderVisuals(recommendation.visuals) : "",
      recommendation.followUps && recommendation.followUps.length
        ? renderFollowUps(recommendation.followUps)
        : "",
      "</div>"
    ].join("");
  }

  function renderPlanSection(section) {
    const content = Array.isArray(section.content)
      ? "<ul>" + section.content.map(function (item) { return "<li>" + escapeHtml(item) + "</li>"; }).join("") + "</ul>"
      : "<p>" + escapeHtml(section.content) + "</p>";

    return [
      '<section class="plan-section">',
      "<strong>" + escapeHtml(section.title) + "</strong>",
      content,
      "</section>"
    ].join("");
  }

  function renderFollowUps(items) {
    return [
      '<div class="followup-block">',
      '<div class="followup-title">Продолжить диалог</div>',
      '<div class="option-grid">',
      items
        .map(function (item) {
          return [
            '<button class="quick-button followup-button" data-action="follow-up" data-follow-up="' + escapeHtml(item.action) + '">',
            "<strong>" + escapeHtml(item.title) + "</strong>",
            "<span>" + escapeHtml(item.description) + "</span>",
            "</button>"
          ].join("");
        })
        .join(""),
      "</div>",
      "</div>"
    ].join("");
  }

  function renderActionPanel(question) {
    if (state.pendingAction) {
      return [
        '<div class="action-panel">',
        '<div class="panel-title"><strong>' + escapeHtml(state.pendingAction.title) + "</strong><span>" + escapeHtml(state.pendingAction.subtitle || "Выберите следующий шаг") + "</span></div>",
        '<div class="option-grid">',
        state.pendingAction.options
          .map(function (option) {
            return [
              '<button class="quick-button" data-action="pending-option" data-value="' + escapeHtml(String(option.value)) + '">',
              "<strong>" + escapeHtml(option.label) + "</strong>",
              "<span>" + escapeHtml(option.description || "Выбрать") + "</span>",
              "</button>"
            ].join("");
          })
          .join(""),
        "</div>",
        "</div>"
      ].join("");
    }

    if (question) {
      return [
        '<div class="action-panel">',
        '<div class="panel-title"><strong>' + escapeHtml(question.text) + "</strong><span>Шаг " + (state.questionIndex + 1) + " из " + getCurrentScenario().questions.length + "</span></div>",
        '<div class="option-grid">',
        question.options
          .map(function (option) {
            return [
              '<button class="quick-button" data-action="answer-option" data-value="' + escapeHtml(String(option.value)) + '">',
              "<strong>" + escapeHtml(option.label) + "</strong>",
              "<span>Выбрать этот вариант</span>",
              "</button>"
            ].join("");
          })
          .join(""),
        "</div>",
        question.type === "buttons_with_custom"
          ? '<div class="custom-answer"><input id="custom-count-input" type="number" min="1" step="1" placeholder="Свое количество голов" /><button class="custom-submit" data-action="custom-count">Сохранить число</button></div>'
          : "",
        "</div>"
      ].join("");
    }

    if (state.freeQuestionMode) {
      return [
        '<div class="action-panel">',
        '<div class="panel-title"><strong>Свободный вопрос</strong><span>Можно написать вопрос обычным текстом</span></div>',
        '<button class="ghost-button" data-action="close-free-mode">Вернуться к сценариям</button>',
        "</div>"
      ].join("");
    }

    return [
      '<div class="action-panel">',
      '<div class="panel-title"><strong>Выберите сценарий</strong><span>Быстрый старт через крупные плитки</span></div>',
      '<div class="option-grid">',
      (state.data.appConfig.startButtons || [])
        .map(function (button) {
          return [
            '<button class="quick-button" data-action="start-scenario" data-scenario="' + escapeHtml(button.id) + '">',
            "<strong>" + escapeHtml((button.emoji ? button.emoji + " " : "") + button.label) + "</strong>",
            "<span>" + escapeHtml(describeStartButton(button.id)) + "</span>",
            "</button>"
          ].join("");
        })
        .join(""),
      "</div>",
      "</div>"
    ].join("");
  }

  function renderComposer() {
    return [
      '<div class="composer">',
      '<div class="composer-inner">',
      '<textarea id="composer-input" placeholder="' + escapeHtml(getComposerPlaceholder()) + '">' + escapeHtml(state.draftMessage) + "</textarea>",
      '<button class="send-button" data-action="send-text">Отправить</button>',
      "</div>",
      '<div class="composer-hint">' + escapeHtml(getComposerHint()) + "</div>",
      "</div>"
    ].join("");
  }

  function attachEvents() {
    const composer = document.getElementById("composer-input");
    if (composer) {
      composer.addEventListener("input", function (event) {
        state.draftMessage = event.target.value;
      });
      composer.addEventListener("keydown", function (event) {
        if (event.key === "Enter" && !event.shiftKey) {
          event.preventDefault();
          handleSendText();
        }
      });
    }

    appRoot.querySelectorAll("[data-action]").forEach(function (node) {
      node.addEventListener("click", function () {
        const action = node.getAttribute("data-action");

        if (action === "reset") {
          resetAll();
          return;
        }
        if (action === "start-scenario") {
          startScenario(node.getAttribute("data-scenario"));
          return;
        }
        if (action === "answer-option") {
          answerCurrentQuestion(node.getAttribute("data-value"));
          return;
        }
        if (action === "custom-count") {
          submitCustomCount();
          return;
        }
        if (action === "send-text") {
          handleSendText();
          return;
        }
        if (action === "close-free-mode") {
          state.freeQuestionMode = false;
          render();
          return;
        }
        if (action === "follow-up") {
          runFollowUp(node.getAttribute("data-follow-up"));
          return;
        }
        if (action === "pending-option") {
          handlePendingOption(node.getAttribute("data-value"));
        }
      });
    });
  }

  function wireImageFallbacks() {
    appRoot.querySelectorAll(".visual-card img").forEach(function (img) {
      img.addEventListener(
        "error",
        function () {
          const card = img.closest(".visual-card");
          if (card) {
            card.classList.add("is-broken");
          }
        },
        { once: true }
      );
    });
  }

  function scrollMessages() {
    const messages = document.getElementById("messages");
    if (!messages) {
      return;
    }
    messages.scrollTop = messages.scrollHeight;
    state.lastMessageCount = state.messages.length;
  }

  function getCurrentScenario() {
    return state.activeScenarioId ? state.data.scenarios[state.activeScenarioId] : null;
  }

  function getCurrentQuestion() {
    const scenario = getCurrentScenario();
    if (!scenario || !scenario.questions) {
      return null;
    }
    return scenario.questions[state.questionIndex] || null;
  }

  function startScenario(scenarioId) {
    if (scenarioId === "free_question") {
      state.freeQuestionMode = true;
      state.activeScenarioId = null;
      state.questionIndex = 0;
      state.answers = {};
      state.pendingAction = null;
      pushSystemMessage("Напишите вопрос простыми словами, и я отвечу без перегруза.");
      render();
      return;
    }

    const scenario = state.data.scenarios[scenarioId];
    if (!scenario) {
      pushSystemMessage("Сценарий пока не найден. Попробуйте соседний вариант.");
      render();
      return;
    }

    state.activeScenarioId = scenarioId;
    state.questionIndex = 0;
    state.answers = {};
    state.pendingAction = null;
    state.freeQuestionMode = false;

    prefillScenarioAnswers(scenarioId);
    pushAssistantMessage("Сценарий: " + scenario.title + ". Пройдём короткий маршрут и соберём понятный план.");
    render();
  }

  function prefillScenarioAnswers(scenarioId) {
    if ((scenarioId === "calculate_farm" || scenarioId === "feeding" || scenarioId === "economics") && state.userProfile.birdType) {
      const firstQuestion = state.data.scenarios[scenarioId] && state.data.scenarios[scenarioId].questions[0];
      if (firstQuestion && firstQuestion.id === "birdType") {
        state.answers.birdType = state.userProfile.birdType;
        state.questionIndex = 1;
      }
    }

    if ((scenarioId === "calculate_farm" || scenarioId === "economics") && state.userProfile.count) {
      const scenario = state.data.scenarios[scenarioId];
      const countQuestion = scenario && scenario.questions[state.questionIndex];
      if (countQuestion && countQuestion.id === "count") {
        state.answers.count = state.userProfile.count;
        state.questionIndex += 1;
      }
    }
  }

  function answerCurrentQuestion(rawValue) {
    const question = getCurrentQuestion();
    if (!question) {
      return;
    }

    if (rawValue === "custom") {
      const input = document.getElementById("custom-count-input");
      if (input) {
        input.focus();
      }
      pushSystemMessage("Введите своё количество голов в поле ниже и сохраните число.");
      render();
      return;
    }

    const value = normalizeAnswerValue(rawValue);
    const label = findOptionLabel(question, rawValue);

    state.answers[question.id] = value;
    rememberProfile(question.id, value);
    pushUserMessage(label);

    state.questionIndex += 1;
    const nextQuestion = getCurrentQuestion();
    if (nextQuestion) {
      pushAssistantMessage(nextQuestion.text);
      render();
      return;
    }

    completeScenario();
  }

  function submitCustomCount() {
    const input = document.getElementById("custom-count-input");
    const value = Number(input && input.value);
    if (!Number.isFinite(value) || value <= 0) {
      pushSystemMessage("Введите целое положительное число, например 37.");
      render();
      return;
    }

    answerCurrentQuestion(String(value));
  }

  function completeScenario() {
    const scenarioId = state.activeScenarioId;
    const recommendation = buildRecommendation(scenarioId, state.answers);
    pushAssistantMessage("Готово. Ниже собрал краткий и практичный план.", {
      recommendation: recommendation
    });
    state.activeScenarioId = null;
    state.questionIndex = 0;
    state.answers = {};
    render();
  }

  function buildRecommendation(scenarioId, answers) {
    if (scenarioId === "choose_poultry") {
      return buildChoosePoultryRecommendation(answers);
    }
    if (scenarioId === "calculate_farm") {
      return buildFarmRecommendation(answers);
    }
    if (scenarioId === "feeding") {
      return buildFeedingRecommendation(answers);
    }
    if (scenarioId === "economics") {
      return buildEconomicsRecommendation(answers);
    }
    if (scenarioId === "problems") {
      return buildProblemsRecommendation(answers);
    }
    if (scenarioId === "beginner") {
      return buildBeginnerRecommendation(answers);
    }

    return {
      title: "План",
      summary: "Собрал базовую рекомендацию по вашему сценарию.",
      sections: [{ title: "Что дальше", content: "Попробуйте запустить другой сценарий и уточнить условия." }]
    };
  }

  function buildChoosePoultryRecommendation(answers) {
    const birdId = pickBirdByAnswers(answers);
    const bird = state.data.poultryCatalog[birdId];
    const visual = getBirdVisual(birdId);
    const purposeKey = mapPurposeToBreedKey(answers.purpose);
    const breeds = (bird.recommendedBreeds && (bird.recommendedBreeds[purposeKey] || bird.recommendedBreeds.universal || bird.recommendedBreeds.eggs || bird.recommendedBreeds.meat)) || [];

    state.userProfile.birdType = birdId;
    state.userProfile.purpose = answers.purpose;

    return {
      title: "Рекомендация по выбору птицы",
      summary:
        "Для ваших условий лучше начать с варианта, который легче в уходе, понятнее по расходам и даёт быстрый практический результат.",
      sections: [
        {
          title: "Краткий вывод",
          content: "Оптимальный старт для вас: " + bird.name + "."
        },
        {
          title: "Рекомендуемый вариант",
          content: breeds.length
            ? ["Подходящие породы или кроссы: " + breeds.join(", "), "Сложность старта: " + bird.difficulty + ".", "Для новичка: " + (bird.goodForBeginners ? "да" : "скорее лучше с опытом") + "."]
            : ["Основной вариант: " + bird.name + "."]
        },
        {
          title: "Почему подходит",
          content: bird.pros.slice(0, 3)
        },
        {
          title: "Что подготовить",
          content: [
            "Сухое и защищённое помещение.",
            "Поилки, кормушки и запас подстилки.",
            answers.warmHousing === "no" ? "Продумайте тёплое содержание на холодный сезон." : "Проверьте вентиляцию и защиту от сквозняков."
          ]
        },
        {
          title: "Частые ошибки",
          content: bird.cons.slice(0, 3)
        },
        {
          title: "Следующий шаг",
          content: "Выберите породу, затем переходите к расчёту хозяйства и кормлению."
        }
      ],
      visuals: visual ? [visual] : [],
      followUps: [
        { action: "choose_breeds", title: "Выбрать породы", description: "Собрать короткий список пород под ваш вариант." },
        { action: "calculate_farm", title: "Рассчитать хозяйство", description: "Прикинуть площадь, выгул и корм." },
        { action: "feeding", title: "Подобрать кормление", description: "Перейти к базовой схеме кормления." },
        { action: "economics", title: "Прикинуть экономику", description: "Сравнить расходы и возможный результат." }
      ]
    };
  }

  function buildFarmRecommendation(answers) {
    const birdId = answers.birdType || state.userProfile.birdType || "chickens";
    const count = Number(answers.count || state.userProfile.count || 10);
    const bird = state.data.poultryCatalog[birdId];
    const norms = state.data.housingNorms[birdId] || {};
    const indoor = round1((norms.indoorAreaM2PerBird || 0.3) * count);
    const outdoor = round1((norms.runAreaM2PerBird || 1) * count);
    const feedDayKg = round1(((norms.feedGramsPerDayPerBird || 100) * count) / 1000);
    const feedMonthKg = round1(feedDayKg * 30);
    const nests = norms.nestsPerBirds ? Math.max(1, Math.ceil(count / norms.nestsPerBirds)) : null;
    const roost = norms.roostCmPerBird ? Math.ceil((norms.roostCmPerBird * count) / 100) : null;

    state.userProfile.birdType = birdId;
    state.userProfile.count = count;

    return {
      title: "Расчёт мини-хозяйства",
      summary: "Ниже ориентировочный расчёт по площади, выгулу, корму и базовому оборудованию.",
      sections: [
        {
          title: "Краткий вывод",
          content: "Для " + count + " голов птицы " + bird.name.toLowerCase() + " стоит сразу заложить запас по площади и корму."
        },
        {
          title: "Расчёт / параметры",
          content: [
            "Площадь помещения: примерно " + formatNumber(indoor) + " м².",
            outdoor > 0 ? "Площадь выгула: примерно " + formatNumber(outdoor) + " м²." : "Выгул обычно не является основным форматом для этого вида.",
            "Корм в день: около " + formatNumber(feedDayKg) + " кг.",
            "Корм в месяц: около " + formatNumber(feedMonthKg) + " кг."
          ].concat(
            nests ? ["Гнёзда: примерно " + nests + "."] : [],
            roost ? ["Насесты: примерно " + roost + " пог. м."] : []
          )
        },
        {
          title: "Что подготовить",
          content: [
            "Поилки и кормушки с небольшим запасом.",
            "Подстилку и место для хранения корма.",
            norms.water ? "Постоянный доступ к воде: " + norms.water + "." : "Постоянный доступ к чистой воде."
          ]
        },
        {
          title: "Частые ошибки",
          content: (norms.notes || []).slice(0, 3)
        },
        {
          title: "Следующий шаг",
          content: "После расчёта переходите к кормлению и экономике, чтобы увидеть полную картину старта."
        }
      ],
      visuals: filterVisuals([
        getHousingVisual("small_coop"),
        getHousingVisual("walk_area"),
        getHousingVisual("feeders")
      ]),
      followUps: [
        { action: "feeding", title: "Подобрать кормление", description: "Собрать базовый рацион." },
        { action: "economics", title: "Прикинуть экономику", description: "Сравнить стартовые и ежемесячные расходы." }
      ]
    };
  }

  function buildFeedingRecommendation(answers) {
    const birdId = answers.birdType || state.userProfile.birdType || "chickens";
    const bird = state.data.poultryCatalog[birdId];
    const age = answers.age;
    const goal = answers.feedingGoal;

    return {
      title: "Базовая схема кормления",
      summary: "Это спокойная стартовая схема без перегруза и без ветеринарных назначений.",
      sections: [
        {
          title: "Краткий вывод",
          content: "Для " + bird.name.toLowerCase() + " важнее всего стабильный режим, вода и подходящий базовый рацион по возрасту."
        },
        {
          title: "Основные компоненты рациона",
          content: buildFeedingComponents(age, goal)
        },
        {
          title: "Частота кормления",
          content: buildFeedingFrequency(age)
        },
        {
          title: "Что обязательно должно быть всегда",
          content: [
            "Чистая вода.",
            "Свежий корм без сырости и плесени.",
            goal === "eggs" ? "Источник кальция и минеральной поддержки." : "Минеральные добавки по базовой схеме содержания."
          ]
        },
        {
          title: "Частые ошибки",
          content: [
            "Резко менять рацион.",
            "Давать корм без режима.",
            "Забывать про воду и чистоту кормушек."
          ]
        },
        {
          title: "Следующий шаг",
          content: "Сопоставьте рацион с количеством голов и затем прикиньте экономику."
        }
      ],
      followUps: [
        { action: "calculate_farm", title: "Рассчитать хозяйство", description: "Сверить корм с количеством голов." },
        { action: "economics", title: "Прикинуть экономику", description: "Посчитать базовые расходы на корм." }
      ]
    };
  }

  function buildEconomicsRecommendation(answers) {
    const birdId = answers.birdType || state.userProfile.birdType || "chickens";
    const count = Number(answers.count || state.userProfile.count || 10);
    const model = answers.economyModel || state.userProfile.economyModel || "family_budget";
    const bird = state.data.poultryCatalog[birdId];
    const norms = state.data.housingNorms[birdId] || {};
    const assumptions = economicsAssumptions[birdId] || economicsAssumptions.chickens;
    const feedMonthKg = round1((((norms.feedGramsPerDayPerBird || 100) * count) / 1000) * 30);
    const startup =
      (count <= 20 ? assumptions.coopBaseSmall : assumptions.coopBaseMedium) +
      assumptions.equipmentPerBird * count +
      assumptions.youngBirdCost * count;
    const monthlyCost =
      assumptions.feedPricePerKg * feedMonthKg +
      assumptions.beddingMonthlyPerBird * count +
      assumptions.utilitiesMonthlyBase;

    let monthlyResult = 0;
    let resultText = "";

    if (model === "eggs_sale") {
      monthlyResult = assumptions.eggPrice * assumptions.eggsPerBirdMonthly * count - monthlyCost;
      resultText =
        "При продаже яйца ориентировочный ежемесячный результат может быть около " +
        formatCurrency(monthlyResult) +
        ".";
    } else if (model === "meat_sale") {
      const cycleRevenue = assumptions.meatRevenuePerBird * count;
      const cycleCost = monthlyCost * assumptions.meatCycleMonths;
      monthlyResult = cycleRevenue - cycleCost;
      resultText =
        "За один цикл выращивания ориентировочный результат может быть около " +
        formatCurrency(monthlyResult) +
        ".";
    } else {
      monthlyResult = assumptions.eggPrice * Math.max(assumptions.eggsPerBirdMonthly, 12) * count - monthlyCost;
      resultText =
        "Как семейная модель это даёт ориентир по экономии или частичному возврату расходов около " +
        formatCurrency(monthlyResult) +
        " в месяц.";
    }

    state.userProfile.birdType = birdId;
    state.userProfile.count = count;
    state.userProfile.economyModel = model;

    return {
      title: "Упрощённая экономика",
      summary: "Это грубая оценка для старта, чтобы сравнить расходы, доходы и точку безубыточности без сложной бухгалтерии.",
      sections: [
        {
          title: "Краткий вывод",
          content: "Для " + bird.name.toLowerCase() + " на " + count + " голов важно отдельно смотреть стартовые вложения и ежемесячную нагрузку."
        },
        {
          title: "Расходы",
          content: [
            "Стартовые вложения: около " + formatCurrency(startup) + ".",
            "Ежемесячные расходы: около " + formatCurrency(monthlyCost) + ".",
            "Корм в месяц: примерно " + formatNumber(feedMonthKg) + " кг."
          ]
        },
        {
          title: "Доходы / экономия",
          content: resultText
        },
        {
          title: "Точка безубыточности",
          content:
            monthlyResult > 0
              ? "При таком ориентире вложения могут отбиваться примерно за " + estimatePayback(startup, monthlyResult, model, assumptions.meatCycleMonths) + "."
              : "При этих вводных проект выглядит напряжённым по экономике, поэтому лучше уменьшить старт или пересмотреть модель."
        },
        {
          title: "Что подготовить",
          content: [
            "Сделать запас по корму и подстилке на первый месяц.",
            "Сразу заложить непредвиденные мелкие расходы.",
            "Сравнить минимум два сценария: семейный и продажный."
          ]
        },
        {
          title: "Следующий шаг",
          content: "Сверьте расчёт с реальной площадью и затем выберите удобный маршрут по содержанию и кормлению."
        }
      ],
      followUps: [
        { action: "calculate_farm", title: "Рассчитать хозяйство", description: "Сверить экономику с площадью и выгулом." },
        { action: "feeding", title: "Подобрать кормление", description: "Проверить рацион и нагрузку на корм." }
      ]
    };
  }

  function buildProblemsRecommendation(answers) {
    return {
      title: "Чек-лист первичной проверки",
      summary: "Ниже только безопасный бытовой чек-лист. Это не диагноз и не назначение лечения.",
      sections: [
        {
          title: "Возможные бытовые причины",
          content: buildProblemReasons(answers.problemType, answers.changes)
        },
        {
          title: "Что проверить в первую очередь",
          content: [
            "Корм и свежесть воды.",
            "Световой режим и температуру.",
            "Чистоту подстилки, кормушек и поилок.",
            "Нет ли скученности, сырости или сквозняков."
          ]
        },
        {
          title: "Когда срочно обращаться к ветеринару",
          content: [
            "Есть падёж или резкое ухудшение состояния.",
            "Птица отказывается от воды.",
            "Вялость выраженная и не проходит после проверки условий.",
            "Есть подозрение на инфекцию."
          ]
        },
        {
          title: "Что не стоит делать самостоятельно",
          content: [
            "Не назначать лекарства наугад.",
            "Не давать дозировки без специалиста.",
            "Не считать это диагнозом по одному симптому."
          ]
        }
      ],
      warning:
        (state.data.recommendationTemplates.problems && state.data.recommendationTemplates.problems.mandatoryWarning) ||
        state.data.safetyRules.safeHealthResponse
    };
  }

  function buildBeginnerRecommendation(answers) {
    const birdId = pickBeginnerBird(answers);
    const bird = state.data.poultryCatalog[birdId];
    const visual = getBirdVisual(birdId);

    state.userProfile.birdType = birdId;

    return {
      title: "План запуска для новичка",
      summary: "Ниже самый спокойный старт, чтобы войти в птицеводство без лишнего риска и перегруза.",
      sections: [
        {
          title: "Рекомендуемый старт",
          content: "Лучше начать с варианта " + bird.name + " и небольшого масштаба."
        },
        {
          title: "План подготовки на 30 дней",
          content: [
            "Неделя 1: выбрать птицу, место и базовый масштаб.",
            "Неделя 2: подготовить помещение, поилки, кормушки и подстилку.",
            "Неделя 3: закупить стартовый корм и всё проверить по воде и вентиляции.",
            "Неделя 4: завести первую птицу и вести спокойный режим наблюдения."
          ]
        },
        {
          title: "Минимальный список покупок",
          content: [
            "Поилки и кормушки.",
            "Подстилка и запас корма.",
            "Простой инвентарь для уборки.",
            "Освещение и защита от сырости."
          ]
        },
        {
          title: "Ошибки новичков",
          content: [
            "Начинать слишком большим объёмом.",
            "Покупать птицу до подготовки помещения.",
            "Менять рацион и условия слишком резко."
          ]
        },
        {
          title: "Следующий шаг",
          content: "Выберите породу под этот старт и затем переходите к расчёту хозяйства."
        }
      ],
      visuals: visual ? [visual] : [],
      followUps: [
        { action: "choose_breeds", title: "Выбрать породы", description: "Собрать подходящие породы под старт." },
        { action: "calculate_farm", title: "Рассчитать хозяйство", description: "Прикинуть площадь, корм и оборудование." }
      ]
    };
  }

  function runFollowUp(action) {
    if (action === "choose_breeds") {
      openBreedPicker();
      return;
    }
    if (action === "calculate_farm" || action === "feeding" || action === "economics") {
      startScenario(action);
      return;
    }
  }

  function openBreedPicker() {
    const birdId = state.userProfile.birdType;
    const bird = state.data.poultryCatalog[birdId];

    if (!bird || !bird.recommendedBreeds) {
      pushSystemMessage("Сначала лучше выбрать птицу, а затем переходить к породам.");
      render();
      return;
    }

    const purposeKey = mapPurposeToBreedKey(state.userProfile.purpose);
    const breeds = bird.recommendedBreeds[purposeKey] || bird.recommendedBreeds.universal || bird.recommendedBreeds.eggs || bird.recommendedBreeds.meat || [];

    state.pendingAction = {
      type: "breed",
      title: "Выберите породу",
      subtitle: "Сохраним выбор и продолжим маршрут дальше",
      options: breeds.map(function (breed) {
        return {
          value: breed,
          label: breed,
          description: "Сохранить этот вариант"
        };
      })
    };
    render();
  }

  function handlePendingOption(value) {
    if (!state.pendingAction) {
      return;
    }

    if (state.pendingAction.type === "breed") {
      state.userProfile.breed = value;
      pushUserMessage(value);
      pushAssistantMessage("Порода сохранена. Теперь можно перейти к расчёту хозяйства, кормлению или экономике.");
      state.pendingAction = {
        type: "next_step",
        title: "Что делаем дальше?",
        subtitle: "Выбор птицы уже сохранён",
        options: [
          { value: "calculate_farm", label: "Рассчитать хозяйство", description: "Площадь, выгул, корм и оборудование." },
          { value: "feeding", label: "Подобрать кормление", description: "Собрать базовую схему кормления." },
          { value: "economics", label: "Прикинуть экономику", description: "Сравнить расходы и ориентир по результату." }
        ]
      };
      render();
      return;
    }

    if (state.pendingAction.type === "next_step") {
      state.pendingAction = null;
      startScenario(value);
    }
  }

  function handleSendText() {
    const text = String(state.draftMessage || "").trim();
    if (!text) {
      return;
    }

    pushUserMessage(text);
    state.draftMessage = "";

    if (state.freeQuestionMode) {
      pushAssistantMessage(answerFreeQuestion(text));
    } else {
      pushAssistantMessage(
        "Понял. Если хотите идти по шагам, выберите сценарий плиткой ниже. Если вопрос про симптомы, я дам только безопасный чек-лист без диагноза и лекарств."
      );
    }

    render();
  }

  function answerFreeQuestion(text) {
    const lower = text.toLowerCase();
    if (containsHealthTopic(lower)) {
      return state.data.safetyRules.safeHealthResponse;
    }
    if (lower.indexOf("что лучше") !== -1 || lower.indexOf("кур") !== -1 || lower.indexOf("переп") !== -1) {
      return "Для спокойного старта чаще всего выбирают кур-несушек, а перепела хороши, если места мало и нужен компактный проект.";
    }
    if (lower.indexOf("сколько места") !== -1) {
      return "Точный расчёт лучше собрать через сценарий «Рассчитать хозяйство»: там сразу будет площадь помещения, выгула и корм.";
    }
    if (lower.indexOf("корм") !== -1) {
      return "Для кормления удобнее пройти сценарий «Подобрать кормление»: он учитывает вид птицы, возраст и цель.";
    }
    return "Могу помочь по выбору птицы, условиям содержания, кормлению, базовой экономике и безопасной первичной проверке частых проблем.";
  }

  function resetAll() {
    state.userProfile = {
      birdType: null,
      breed: null,
      count: null,
      purpose: null,
      economyModel: null
    };
    state.pendingAction = null;
    state.activeCards = {};
    applyInitialConversation();
    render();
  }

  function rememberProfile(questionId, value) {
    if (questionId === "birdType") {
      state.userProfile.birdType = value;
    }
    if (questionId === "count") {
      state.userProfile.count = Number(value);
    }
    if (questionId === "purpose") {
      state.userProfile.purpose = value;
    }
    if (questionId === "feedingGoal") {
      state.userProfile.purpose = value;
    }
    if (questionId === "economyModel") {
      state.userProfile.economyModel = value;
    }
  }

  function pushAssistantMessage(text, extra) {
    const message = { role: "assistant", label: state.data.appConfig.appName || "Умный птичник", text: text };
    if (extra) {
      Object.keys(extra).forEach(function (key) {
        message[key] = extra[key];
      });
    }
    state.messages.push(message);
  }

  function pushUserMessage(text) {
    state.messages.push({ role: "user", label: "Вы", text: text });
  }

  function pushSystemMessage(text) {
    state.messages.push({ role: "system", label: "Подсказка", text: text });
  }

  function pickBirdByAnswers(answers) {
    if (answers.purpose === "eggs") {
      return answers.experience === "beginner" ? "chickens" : "quails";
    }
    if (answers.purpose === "meat") {
      return answers.countRange === "up_to_10" ? "ducks" : "chickens";
    }
    if (answers.purpose === "sale") {
      return answers.experience === "farmer" ? "turkeys" : "chickens";
    }
    if (answers.warmHousing === "no") {
      return "ducks";
    }
    return "chickens";
  }

  function pickBeginnerBird(answers) {
    if (answers.desiredResult === "home_eggs") {
      return "chickens";
    }
    if (answers.desiredResult === "family_meat") {
      return "ducks";
    }
    if (answers.desiredResult === "small_income") {
      return "chickens";
    }
    return "quails";
  }

  function buildFeedingComponents(age, goal) {
    if (age === "chicks") {
      return [
        "Стартовый корм по возрасту.",
        "Мелкая и чистая подача без залеживания.",
        "Постоянная вода и аккуратный режим кормления."
      ];
    }
    if (age === "young") {
      return [
        "Корм для активного роста.",
        goal === "meat" ? "Акцент на стабильный рост и набор массы." : "Ровный рацион без резких скачков.",
        "Минеральная поддержка по базовой схеме содержания."
      ];
    }
    return [
      goal === "eggs" ? "Рацион с упором на яйценоскость и кальций." : "Базовый полноценный рацион для взрослой птицы.",
      "Зерновая и комбикормовая часть без перекорма.",
      "Постоянный доступ к воде."
    ];
  }

  function buildFeedingFrequency(age) {
    if (age === "chicks") {
      return ["Кормить чаще и небольшими порциями.", "Следить, чтобы корм не залеживался."];
    }
    if (age === "young") {
      return ["Режим регулярный, без хаотичных подсыпаний.", "Ориентироваться на возраст и состояние птицы."];
    }
    return ["Поддерживать стабильный режим кормления каждый день.", "Не сдвигать график резко без необходимости."];
  }

  function buildProblemReasons(problemType, changes) {
    const reasons = [];
    if (problemType === "no_eggs") {
      reasons.push("световой режим", "стресс", "смена корма", "возраст птицы");
    } else if (problemType === "thin_shell") {
      reasons.push("нехватка кальция", "перекос по рациону", "стресс");
    } else if (problemType === "low_appetite") {
      reasons.push("испорченный корм", "грязная вода", "жара или холод");
    } else if (problemType === "lethargic") {
      reasons.push("перегрев", "скученность", "сырость", "общее ухудшение условий");
    } else if (problemType === "slow_growth") {
      reasons.push("слабый рацион", "мало места", "неподходящий режим содержания");
    } else {
      reasons.push("стресс", "корм", "вода", "температура", "плотность посадки");
    }

    if (changes && changes !== "no") {
      reasons.push("недавние изменения условий: " + mapChangeText(changes));
    }
    return reasons;
  }

  function mapChangeText(value) {
    return {
      feed: "меняли корм",
      light: "меняли свет",
      temperature: "были перепады температуры",
      no: "без заметных изменений",
      not_sure: "точной уверенности нет"
    }[value] || value;
  }

  function getBirdVisual(birdId) {
    return state.data.visualAssets.poultryImages && state.data.visualAssets.poultryImages[birdId]
      ? state.data.visualAssets.poultryImages[birdId]
      : null;
  }

  function getHousingVisual(id) {
    return state.data.visualAssets.housingImages && state.data.visualAssets.housingImages[id]
      ? state.data.visualAssets.housingImages[id]
      : null;
  }

  function filterVisuals(items) {
    return items.filter(Boolean);
  }

  function mapPurposeToBreedKey(value) {
    return {
      eggs: "eggs",
      meat: "meat",
      universal: "universal",
      sale: "universal"
    }[value] || "universal";
  }

  function normalizeAnswerValue(value) {
    if (/^\d+$/.test(String(value))) {
      return Number(value);
    }
    return value;
  }

  function findOptionLabel(question, rawValue) {
    const option = (question.options || []).find(function (item) {
      return String(item.value) === String(rawValue);
    });
    return option ? option.label : String(rawValue);
  }

  function getComposerPlaceholder() {
    if (state.freeQuestionMode) {
      return "Напишите свой вопрос";
    }
    return "Можно уточнить вопрос текстом";
  }

  function getComposerHint() {
    if (state.freeQuestionMode) {
      return "Например: что лучше для дачи, куры или перепела?";
    }
    return "Основной путь в приложении — через крупные плитки и короткие шаги.";
  }

  function describeStartButton(id) {
    return {
      choose_poultry: "Подберу вид птицы, подходящие породы и спокойный старт.",
      calculate_farm: "Посчитаю помещение, выгул, корм и базовое оборудование.",
      feeding: "Соберу простую схему кормления без перегруза.",
      economics: "Сравню стартовые затраты, ежемесячные расходы и ориентир по окупаемости.",
      problems: "Дам безопасный чек-лист первичной проверки.",
      beginner: "Сделаю понятный план запуска для первого старта.",
      free_question: "Можно спросить свободным текстом."
    }[id] || "Выберите подходящий сценарий.";
  }

  function normalizeImage(path) {
    if (!path) {
      return "";
    }
    if (path.indexOf("/public/") === 0) {
      return path.replace("/public", "");
    }
    return path;
  }

  function containsHealthTopic(text) {
    return ["бол", "симптом", "вял", "не ест", "не пьет", "скорлуп", "нестись"].some(function (word) {
      return text.indexOf(word) !== -1;
    });
  }

  function estimatePayback(startup, monthlyResult, model, cycleMonths) {
    if (model === "meat_sale") {
      const cycles = startup / Math.max(monthlyResult, 1);
      return "примерно " + formatNumber(cycles) + " цикла";
    }
    const months = startup / Math.max(monthlyResult, 1);
    return "примерно " + formatNumber(months) + " мес.";
  }

  function formatNumber(value) {
    return new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 1 }).format(value);
  }

  function formatCurrency(value) {
    return new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB",
      maximumFractionDigits: 0
    }).format(Math.round(value));
  }

  function round1(value) {
    return Math.round(value * 10) / 10;
  }

  function escapeHtml(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function showFatalError() {
    appRoot.innerHTML =
      '<div style="max-width: 960px; margin: 40px auto; padding: 24px; font-family: Trebuchet MS, Segoe UI, sans-serif; color: #283126;">' +
      "<h1>Умный птичник</h1>" +
      "<p>Интерфейс запустился с ошибкой. Обновите страницу или выполните новый деплой с обновлённым app.js.</p>" +
      "</div>";
  }
})();
