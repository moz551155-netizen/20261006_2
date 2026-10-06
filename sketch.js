// 宣告完整的臺灣各縣市名產題庫
const questionBank = [
  // 建立宜蘭縣名產題目
  {
    // 設定題目文字
    question: "哪一項是宜蘭縣三星鄉著名的農產品？",
    // 設定答案選項
    options: ["三星蔥", "麻豆文旦", "池上米", "東港黑鮪魚"],
    // 設定正確答案索引
    answer: 0,
    // 設定答案解說
    explanation: "三星蔥是宜蘭縣三星鄉最具代表性的名產之一。"
  },

  // 建立臺南市名產題目
  {
    // 設定題目文字
    question: "哪一項是臺南市麻豆地區著名的水果名產？",
    // 設定答案選項
    options: ["金煌芒果", "麻豆文旦", "鳳梨酥", "阿里山高山茶"],
    // 設定正確答案索引
    answer: 1,
    // 設定答案解說
    explanation: "麻豆文旦是臺南市麻豆地區非常著名的柚子名產。"
  },

  // 建立屏東縣名產題目
  {
    // 設定題目文字
    question: "哪一項是屏東縣東港鎮著名的海鮮名產？",
    // 設定答案選項
    options: ["黑鮪魚", "新竹米粉", "三星蔥", "金門高粱酒"],
    // 設定正確答案索引
    answer: 0,
    // 設定答案解說
    explanation: "屏東縣東港以黑鮪魚及其他新鮮海產聞名。"
  },

  // 建立嘉義縣名產題目
  {
    // 設定題目文字
    question: "哪一項是嘉義縣阿里山地區著名的飲品？",
    // 設定答案選項
    options: ["阿里山高山茶", "金門貢糖", "彰化肉圓", "澎湖仙人掌果"],
    // 設定正確答案索引
    answer: 0,
    // 設定答案解說
    explanation: "阿里山高山茶是嘉義縣阿里山地區的重要特色名產。"
  },

  // 建立金門縣名產題目
  {
    // 設定題目文字
    question: "哪一項是金門縣具有代表性的名產？",
    // 設定答案選項
    options: ["金門高粱酒", "宜蘭鴨賞", "新竹貢丸", "花蓮剝皮辣椒"],
    // 設定正確答案索引
    answer: 0,
    // 設定答案解說
    explanation: "金門高粱酒是金門縣最具代表性的名產之一。"
  },

  // 建立新竹市名產題目
  {
    // 設定題目文字
    question: "哪一項是新竹市著名的傳統米製食品？",
    // 設定答案選項
    options: ["新竹米粉", "東港櫻花蝦", "鳳梨釋迦", "澎湖黑糖糕"],
    // 設定正確答案索引
    answer: 0,
    // 設定答案解說
    explanation: "新竹米粉是新竹市最具知名度的傳統名產之一。"
  },

  // 建立彰化縣名產題目
  {
    // 設定題目文字
    question: "哪一項是彰化縣著名的傳統小吃？",
    // 設定答案選項
    options: ["彰化肉圓", "淡水阿給", "基隆鼎邊趖", "花蓮扁食"],
    // 設定正確答案索引
    answer: 0,
    // 設定答案解說
    explanation: "彰化肉圓是彰化縣非常具代表性的傳統小吃。"
  },

  // 建立花蓮縣名產題目
  {
    // 設定題目文字
    question: "哪一項是花蓮縣常見的特色名產？",
    // 設定答案選項
    options: ["花蓮剝皮辣椒", "臺中太陽餅", "金門貢糖", "宜蘭牛舌餅"],
    // 設定正確答案索引
    answer: 0,
    // 設定答案解說
    explanation: "花蓮剝皮辣椒具有獨特的香辣風味，是花蓮常見名產。"
  },

  // 建立臺中市名產題目
  {
    // 設定題目文字
    question: "哪一項是臺中市著名的糕餅名產？",
    // 設定答案選項
    options: ["臺中太陽餅", "臺南椪餅", "宜蘭蔥油餅", "嘉義方塊酥"],
    // 設定正確答案索引
    answer: 0,
    // 設定答案解說
    explanation: "臺中太陽餅是臺中市最具代表性的糕餅名產之一。"
  },

  // 建立澎湖縣名產題目
  {
    // 設定題目文字
    question: "哪一項是澎湖縣的特色名產？",
    // 設定答案選項
    options: ["黑糖糕", "萬巒豬腳", "新埔柿餅", "北港花生糖"],
    // 設定正確答案索引
    answer: 0,
    // 設定答案解說
    explanation: "澎湖黑糖糕使用黑糖製作，是澎湖著名的傳統糕點。"
  },

  // 建立新北市名產題目
  {
    // 設定題目文字
    question: "哪一項是新北市淡水地區著名的小吃？",
    // 設定答案選項
    options: ["淡水阿給", "東坡肉", "嘉義雞肉飯", "池上便當"],
    // 設定正確答案索引
    answer: 0,
    // 設定答案解說
    explanation: "淡水阿給是新北市淡水地區最具代表性的特色小吃。"
  },

  // 建立苗栗縣名產題目
  {
    // 設定題目文字
    question: "哪一項是苗栗縣常見的客家特色飲品？",
    // 設定答案選項
    options: ["客家擂茶", "臺東洛神花茶", "臺南鹽酥蝦", "宜蘭糕渣"],
    // 設定正確答案索引
    answer: 0,
    // 設定答案解說
    explanation: "客家擂茶是苗栗等客家地區常見的傳統特色飲品。"
  },

  // 建立臺東縣名產題目
  {
    // 設定題目文字
    question: "哪一項是臺東縣常見的特色農產？",
    // 設定答案選項
    options: ["鳳梨釋迦", "麻豆文旦", "北港麻油", "新竹貢丸"],
    // 設定正確答案索引
    answer: 0,
    // 設定答案解說
    explanation: "鳳梨釋迦是臺東縣非常著名的特色水果。"
  },

  // 建立嘉義市名產題目
  {
    // 設定題目文字
    question: "哪一項是嘉義市著名的傳統美食？",
    // 設定答案選項
    options: ["火雞肉飯", "淡水魚丸", "萬巒豬腳", "新竹米粉"],
    // 設定正確答案索引
    answer: 0,
    // 設定答案解說
    explanation: "嘉義火雞肉飯是嘉義市最具代表性的傳統美食之一。"
  },

  // 建立屏東縣另一項名產題目
  {
    // 設定題目文字
    question: "哪一項是屏東縣萬巒地區著名的美食？",
    // 設定答案選項
    options: ["萬巒豬腳", "宜蘭鴨賞", "臺中太陽餅", "澎湖黑糖糕"],
    // 設定正確答案索引
    answer: 0,
    // 設定答案解說
    explanation: "萬巒豬腳是屏東縣萬巒地區最具代表性的特色美食。"
  }
];

// 設定每輪測驗的題目數量
const QUESTIONS_PER_ROUND = 5;

// 宣告目前測驗題目
let currentQuestions = [];

// 宣告上一輪完整作答紀錄
let lastRoundRecords = [];

// 宣告目前題目索引
let currentQuestion = 0;

// 宣告目前分數
let score = 0;

// 宣告是否已經作答
let answered = false;

// 宣告使用者目前選擇的答案
let selectedAnswer = -1;

// 宣告是否顯示結果頁
let finished = false;

// 宣告是否顯示回顧頁
let reviewing = false;

// 宣告回顧清單捲動位置
let reviewScrollY = 0;

// 宣告回顧清單最大捲動距離
let reviewMaxScroll = 0;

// 宣告是否正在拖曳回顧清單
let reviewDragging = false;

// 宣告上一次觸控或滑鼠垂直位置
let reviewLastPointerY = 0;

// 宣告背景泡泡陣列
let bubbles = [];

// 宣告答案選項配色
const optionColors = ["#FF8FAB", "#FFB703", "#8ECAE6", "#90BE6D"];

// p5.js 初始化函式
function setup() {
  // 建立符合視窗大小的全螢幕畫布
  createCanvas(windowWidth, windowHeight);

  // 設定 p5.js 使用 Google Fonts 的 Chiron GoRound TC 字型
  textFont("Chiron GoRound TC");

  // 設定文字水平與垂直置中
  textAlign(CENTER, CENTER);

  // 設定矩形以中心點定位
  rectMode(CENTER);

  // 設定畫布像素密度
  pixelDensity(displayDensity());

  // 建立背景泡泡
  createBubbles();

  // 建立第一輪測驗
  createNewRound([]);
}

// p5.js 每一幀執行的函式
function draw() {
  // 繪製背景
  drawBackground();

  // 繪製背景泡泡
  drawBubbles();

  // 判斷目前是否在回顧頁
  if (reviewing) {
    // 繪製回顧頁
    drawReviewScreen();
  } else if (finished) {
    // 繪製結果頁
    drawResultScreen();
  } else {
    // 繪製測驗頁
    drawQuizScreen();
  }
}

// 建立新一輪測驗
function createNewRound(previousQuestions) {
  // 複製並洗牌題庫
  const shuffledBank = shuffleArray(questionBank.slice());

  // 取得上一輪題目識別編號
  const previousIds = previousQuestions.map((question) => question.bankId);

  // 優先挑選上一輪沒有出現的題目
  let availableQuestions = shuffledBank.filter((question) => {
    return !previousIds.includes(questionBank.indexOf(question));
  });

  // 若不同題目不足五題，則使用完整洗牌題庫
  if (availableQuestions.length < QUESTIONS_PER_ROUND) {
    availableQuestions = shuffledBank;
  }

  // 取出五題並重新排列選項
  currentQuestions = availableQuestions
    .slice(0, QUESTIONS_PER_ROUND)
    .map((question) => prepareQuestion(question));

  // 重設目前題目
  currentQuestion = 0;

  // 重設目前分數
  score = 0;

  // 重設作答狀態
  answered = false;

  // 清除選擇答案
  selectedAnswer = -1;

  // 關閉結果頁
  finished = false;

  // 關閉回顧頁
  reviewing = false;

  // 重設回顧捲動位置
  reviewScrollY = 0;
}

// 準備單一題目
function prepareQuestion(question) {
  // 建立包含原始索引的選項資料
  const indexedOptions = question.options.map((label, index) => {
    return {
      // 保存選項文字
      label: label,

      // 保存原始選項索引
      originalIndex: index
    };
  });

  // 將選項隨機洗牌
  const shuffledOptions = shuffleArray(indexedOptions);

  // 找出洗牌後正確答案索引
  const newAnswerIndex = shuffledOptions.findIndex((option) => {
    return option.originalIndex === question.answer;
  });

  // 回傳新的題目資料
  return {
    // 保存題庫識別編號
    bankId: questionBank.indexOf(question),

    // 保存題目文字
    question: question.question,

    // 保存洗牌後選項
    options: shuffledOptions.map((option) => option.label),

    // 保存洗牌後正確答案索引
    answer: newAnswerIndex,

    // 保存答案解說
    explanation: question.explanation
  };
}

// 保存上一輪作答紀錄
function saveLastRound() {
  // 將目前題目轉換成作答紀錄
  lastRoundRecords = currentQuestions.map((question) => {
    // 取得使用者答案
    const userAnswer = question.userAnswer ?? -1;

    // 回傳單題作答紀錄
    return {
      // 保存題目文字
      question: question.question,

      // 複製選項
      options: question.options.slice(),

      // 保存使用者答案
      userAnswer: userAnswer,

      // 保存正確答案
      correctAnswer: question.answer,

      // 保存答題結果
      isCorrect: userAnswer === question.answer,

      // 保存答案解說
      explanation: question.explanation
    };
  });
}

// 洗牌函式
function shuffleArray(array) {
  // 從陣列最後一個元素開始處理
  for (let i = array.length - 1; i > 0; i--) {
    // 產生隨機索引
    const randomIndex = floor(random(i + 1));

    // 暫存目前元素
    const temporaryValue = array[i];

    // 交換元素
    array[i] = array[randomIndex];

    // 放回暫存元素
    array[randomIndex] = temporaryValue;
  }

  // 回傳洗牌後的陣列
  return array;
}

// 建立背景泡泡
function createBubbles() {
  // 清空背景泡泡
  bubbles = [];

  // 建立多個泡泡
  for (let i = 0; i < 18; i++) {
    // 新增泡泡資料
    bubbles.push({
      // 設定水平位置
      x: random(width),

      // 設定垂直位置
      y: random(height),

      // 設定泡泡大小
      size: random(25, 90),

      // 設定泡泡速度
      speed: random(0.2, 0.7),

      // 設定泡泡透明度
      alpha: random(25, 70)
    });
  }
}

// 繪製背景
function drawBackground() {
  // 設定背景顏色
  background("#FFF4D6");

  // 設定不填滿圖形
  noFill();

  // 設定裝飾線條顏色
  stroke("#FFD6A5");

  // 設定裝飾線條粗細
  strokeWeight(2);

  // 繪製左上裝飾圓
  ellipse(width * 0.08, height * 0.12, width * 0.16);

  // 繪製右上裝飾圓
  ellipse(width * 0.92, height * 0.16, width * 0.2);

  // 繪製左下裝飾圓
  ellipse(width * 0.12, height * 0.9, width * 0.22);

  // 繪製右下裝飾圓
  ellipse(width * 0.9, height * 0.85, width * 0.18);

  // 清除裝飾線條
  noStroke();
}

// 繪製背景泡泡
function drawBubbles() {
  // 逐一處理所有泡泡
  for (const bubble of bubbles) {
    // 設定泡泡顏色
    fill(255, 255, 255, bubble.alpha);

    // 繪製泡泡
    ellipse(bubble.x, bubble.y, bubble.size);

    // 讓泡泡向上移動
    bubble.y -= bubble.speed;

    // 當泡泡離開畫面時回到底部
    if (bubble.y < -bubble.size) {
      bubble.y = height + bubble.size;
    }
  }
}

// 繪製作答畫面
function drawQuizScreen() {
  // 取得目前題目
  const quiz = currentQuestions[currentQuestion];

  // 計算內容寬度
  const contentWidth = min(width * 0.9, 760);

  // 計算水平中心
  const centerX = width / 2;

  // 計算卡片垂直位置
  const cardY = height / 2 + 25;

  // 計算卡片高度
  const cardHeight = min(height * 0.78, 680);

  // 設定標題顏色
  fill("#6D597A");

  // 設定標題大小
  textSize(constrain(width * 0.055, 25, 48));

  // 設定標題粗細
  textStyle(BOLD);

  // 繪製標題
  text("臺灣名產大挑戰！", centerX, height * 0.08);

  // 設定副標題大小
  textSize(constrain(width * 0.025, 14, 21));

  // 設定副標題粗細
  textStyle(NORMAL);

  // 繪製副標題
  text("一起探索各縣市的美味特產吧！", centerX, height * 0.135);

  // 設定卡片陰影顏色
  fill(0, 0, 0, 25);

  // 繪製卡片陰影
  rect(centerX + 5, cardY + 7, contentWidth, cardHeight, 28);

  // 設定卡片顏色
  fill("#FFFFFF");

  // 繪製主要卡片
  rect(centerX, cardY, contentWidth, cardHeight, 28);

  // 設定題號顏色
  fill("#FB8500");

  // 設定題號大小
  textSize(constrain(width * 0.03, 16, 24));

  // 設定題號粗細
  textStyle(BOLD);

  // 繪製題號
  text(`第 ${currentQuestion + 1} 題／共 ${currentQuestions.length} 題`, centerX, cardY - cardHeight * 0.39);

  // 設定進度條背景色
  fill("#FFE5B4");

  // 繪製進度條背景
  rect(centerX, cardY - cardHeight * 0.31, contentWidth * 0.75, 13, 8);

  // 設定進度條顏色
  fill("#FF8FAB");

  // 計算進度條寬度
  const progressWidth = contentWidth * 0.75 * (currentQuestion + 1) / currentQuestions.length;

  // 繪製進度條
  rect(
    centerX - contentWidth * 0.375 + progressWidth / 2,
    cardY - cardHeight * 0.31,
    progressWidth,
    13,
    8
  );

  // 設定題目顏色
  fill("#3D405B");

  // 設定題目大小
  textSize(constrain(width * 0.037, 19, 30));

  // 設定題目粗細
  textStyle(BOLD);

  // 繪製題目
  text(quiz.question, centerX, cardY - cardHeight * 0.18, contentWidth * 0.82, 90);

  // 計算選項寬度
  const optionWidth = min(contentWidth * 0.78, 530);

  // 計算選項高度
  const optionHeight = constrain(height * 0.065, 44, 58);

  // 計算選項間距
  const optionGap = 10;

  // 計算第一個選項位置
  const firstOptionY = cardY - cardHeight * 0.035;

  // 逐一繪製答案選項
  for (let i = 0; i < quiz.options.length; i++) {
    // 計算目前選項位置
    const optionY = firstOptionY + i * (optionHeight + optionGap);

    // 繪製答案選項
    drawOption(quiz.options[i], i, centerX, optionY, optionWidth, optionHeight);
  }

  // 判斷是否已作答
  if (answered) {
    // 繪製答案回饋
    drawAnswerFeedback(quiz, centerX, cardY, contentWidth, cardHeight);

    // 繪製下一題按鈕
    drawNextButton();
  }
}

// 繪製單一答案選項
function drawOption(label, index, x, y, optionWidth, optionHeight) {
  // 取得預設選項顏色
  let backgroundColor = optionColors[index];

  // 判斷是否已經作答
  if (answered) {
    // 取得正確答案索引
    const correctAnswer = currentQuestions[currentQuestion].answer;

    // 將正確答案設為綠色
    if (index === correctAnswer) {
      backgroundColor = "#70C1B3";
    }

    // 將使用者答錯的選項設為紅色
    if (index === selectedAnswer && index !== correctAnswer) {
      backgroundColor = "#F28482";
    }
  }

  // 設定陰影顏色
  fill(0, 0, 0, 18);

  // 繪製選項陰影
  rect(x + 3, y + 4, optionWidth, optionHeight, 16);

  // 設定選項顏色
  fill(backgroundColor);

  // 繪製選項
  rect(x, y, optionWidth, optionHeight, 16);

  // 設定文字顏色
  fill("#FFFFFF");

  // 設定文字大小
  textSize(constrain(width * 0.027, 16, 22));

  // 設定文字粗細
  textStyle(BOLD);

  // 繪製選項文字
  text(`${String.fromCharCode(65 + index)}. ${label}`, x, y);
}

// 繪製答案回饋
function drawAnswerFeedback(quiz, centerX, cardY, contentWidth, cardHeight) {
  // 判斷答案是否正確
  const isCorrect = selectedAnswer === quiz.answer;

  // 計算回饋區高度
  const feedbackHeight = constrain(height * 0.13, 82, 112);

  // 計算回饋區垂直位置
  const feedbackY = cardY + cardHeight * 0.335;

  // 設定回饋背景顏色
  fill(isCorrect ? "#E1F7E7" : "#FFE4E1");

  // 繪製加高後的回饋背景
  rect(centerX, feedbackY, contentWidth * 0.78, feedbackHeight, 18);

  // 設定回饋文字顏色
  fill(isCorrect ? "#25855A" : "#C44536");

  // 設定回饋文字大小
  textSize(constrain(width * 0.025, 14, 19));

  // 設定回饋文字粗細
  textStyle(BOLD);

  // 繪製正確或錯誤文字
  text(
    isCorrect ? "答對了！太棒啦！" : "答錯了，再接再厲！",
    centerX,
    feedbackY - feedbackHeight * 0.2
  );

  // 設定解說文字顏色
  fill("#5C677D");

  // 設定解說文字大小
  textSize(constrain(width * 0.019, 12, 15));

  // 設定解說文字粗細
  textStyle(NORMAL);

  // 繪製答案解說
  text(
    quiz.explanation,
    centerX,
    feedbackY + feedbackHeight * 0.22,
    contentWidth * 0.7,
    42
  );
}

// 繪製下一題按鈕
function drawNextButton() {
  // 計算按鈕寬度
  const buttonWidth = min(width * 0.28, 180);

  // 設定按鈕高度
  const buttonHeight = 52;

  // 計算按鈕水平位置
  const buttonX = width - buttonWidth / 2 - 25;

  // 計算按鈕垂直位置
  const buttonY = height - buttonHeight / 2 - 25;

  // 設定陰影顏色
  fill(0, 0, 0, 25);

  // 繪製按鈕陰影
  rect(buttonX + 3, buttonY + 4, buttonWidth, buttonHeight, 16);

  // 設定按鈕顏色
  fill("#FF8FAB");

  // 繪製按鈕
  rect(buttonX, buttonY, buttonWidth, buttonHeight, 16);

  // 設定按鈕文字顏色
  fill("#FFFFFF");

  // 設定按鈕文字大小
  textSize(constrain(width * 0.025, 15, 20));

  // 設定按鈕文字粗細
  textStyle(BOLD);

  // 繪製按鈕文字
  text(currentQuestion === currentQuestions.length - 1 ? "看結果！" : "下一題 ➜", buttonX, buttonY);
}

// 繪製測驗結果頁
function drawResultScreen() {
  // 計算卡片寬度
  const cardWidth = min(width * 0.88, 620);

  // 計算卡片高度
  const cardHeight = min(height * 0.78, 600);

  // 計算畫面中心
  const centerX = width / 2;

  // 計算垂直中心
  const centerY = height / 2;

  // 設定陰影顏色
  fill(0, 0, 0, 25);

  // 繪製卡片陰影
  rect(centerX + 5, centerY + 7, cardWidth, cardHeight, 30);

  // 設定卡片顏色
  fill("#FFFFFF");

  // 繪製結果卡片
  rect(centerX, centerY, cardWidth, cardHeight, 30);

  // 設定標題顏色
  fill("#FB8500");

  // 設定標題大小
  textSize(constrain(width * 0.07, 32, 58));

  // 設定標題粗細
  textStyle(BOLD);

  // 繪製標題
  text("測驗完成！🎉", centerX, centerY - cardHeight * 0.3);

  // 設定分數顏色
  fill("#6D597A");

  // 設定分數大小
  textSize(constrain(width * 0.11, 55, 90));

  // 繪製分數
  text(`${score}／${currentQuestions.length}`, centerX, centerY - cardHeight * 0.08);

  // 設定鼓勵文字顏色
  fill("#5C677D");

  // 設定鼓勵文字大小
  textSize(constrain(width * 0.03, 16, 24));

  // 設定鼓勵文字內容
  const message = score === currentQuestions.length
    ? "太厲害了！你是名產小達人！"
    : score >= 3
      ? "表現很棒！再挑戰一次吧！"
      : "繼續加油，認識更多臺灣名產吧！";

  // 繪製鼓勵文字
  text(message, centerX, centerY + cardHeight * 0.08);

  // 繪製回顧按鈕
  drawResultButton("回顧題目", centerX, centerY + cardHeight * 0.23, "#8ECAE6");

  // 繪製再作答按鈕
  drawResultButton("再作答一次", centerX, centerY + cardHeight * 0.38, "#FF8FAB");
}

// 繪製結果頁按鈕
function drawResultButton(label, x, y, color) {
  // 計算按鈕寬度
  const buttonWidth = min(width * 0.62, 330);

  // 設定按鈕高度
  const buttonHeight = 56;

  // 設定陰影顏色
  fill(0, 0, 0, 22);

  // 繪製按鈕陰影
  rect(x + 3, y + 4, buttonWidth, buttonHeight, 17);

  // 設定按鈕顏色
  fill(color);

  // 繪製按鈕
  rect(x, y, buttonWidth, buttonHeight, 17);

  // 設定文字顏色
  fill("#FFFFFF");

  // 設定文字大小
  textSize(constrain(width * 0.03, 17, 23));

  // 設定文字粗細
  textStyle(BOLD);

  // 繪製按鈕文字
  text(label, x, y);
}

// 繪製回顧頁
function drawReviewScreen() {
  // 計算內容寬度
  const contentWidth = min(width * 0.92, 760);

  // 計算卡片高度
  const cardHeight = height * 0.78;

  // 計算卡片垂直位置
  const cardY = height / 2 + 25;

  // 設定標題顏色
  fill("#6D597A");

  // 設定標題大小
  textSize(constrain(width * 0.055, 25, 48));

  // 設定標題粗細
  textStyle(BOLD);

  // 繪製標題
  text("答題回顧 📋", width / 2, height * 0.08);

  // 設定副標題顏色
  fill("#5C677D");

  // 設定副標題大小
  textSize(constrain(width * 0.025, 14, 20));

  // 設定副標題粗細
  textStyle(NORMAL);

  // 繪製副標題
  text("看看這一輪的答題結果與正確答案", width / 2, height * 0.135);

  // 設定卡片陰影顏色
  fill(0, 0, 0, 25);

  // 繪製卡片陰影
  rect(width / 2 + 5, cardY + 7, contentWidth, cardHeight, 28);

  // 設定卡片顏色
  fill("#FFFFFF");

  // 繪製回顧卡片
  rect(width / 2, cardY, contentWidth, cardHeight, 28);

  // 計算清單頂部位置
  const listTop = cardY - cardHeight / 2 + 24;

  // 計算清單底部位置
  const listBottom = cardY + cardHeight / 2 - 88;

  // 儲存目前繪圖狀態
  push();

  // 儲存畫布裁切狀態
  drawingContext.save();

  // 建立清單裁切區域
  drawingContext.beginPath();

  // 設定清單裁切矩形
  drawingContext.rect(
    width / 2 - contentWidth / 2 + 10,
    listTop,
    contentWidth - 20,
    listBottom - listTop
  );

  // 套用清單裁切區域
  drawingContext.clip();

  // 計算清單內容起始位置
  const contentStartY = listTop + reviewScrollY;

  // 逐一繪製回顧項目
  lastRoundRecords.forEach((record, index) => {
    // 計算目前項目位置
    const itemY = contentStartY + index * 180;

    // 繪製目前回顧項目
    drawReviewItem(record, index, width / 2, itemY, contentWidth - 44);
  });

  // 還原畫布裁切狀態
  drawingContext.restore();

  // 還原繪圖狀態
  pop();

  // 計算清單內容總高度
  const contentHeight = lastRoundRecords.length * 180 + 20;

  // 計算最大捲動距離
  reviewMaxScroll = max(0, contentHeight - (listBottom - listTop));

  // 繪製回到結果按鈕
  drawBackToResultButton();
}

// 繪製單一回顧項目
function drawReviewItem(record, index, centerX, y, itemWidth) {
  // 設定單一項目高度
  const itemHeight = 160;

  // 設定項目背景顏色
  fill(record.isCorrect ? "#F0FBF6" : "#FFF2F0");

  // 繪製項目背景
  rect(centerX, y + itemHeight / 2, itemWidth, itemHeight, 18);

  // 設定標題顏色
  fill(record.isCorrect ? "#25855A" : "#C44536");

  // 設定標題大小
  textSize(constrain(width * 0.024, 14, 19));

  // 設定標題粗細
  textStyle(BOLD);

  // 繪製題號與結果
  text(
    `第 ${index + 1} 題　${record.isCorrect ? "答對 ✓" : "答錯 ✗"}`,
    centerX,
    y + 22
  );

  // 設定題目顏色
  fill("#3D405B");

  // 設定題目大小
  textSize(constrain(width * 0.021, 12, 17));

  // 設定題目粗細
  textStyle(BOLD);

  // 繪製題目
  text(record.question, centerX, y + 52, itemWidth * 0.86, 36);

  // 取得使用者答案文字
  const userAnswerText = record.userAnswer >= 0
    ? `${String.fromCharCode(65 + record.userAnswer)}. ${record.options[record.userAnswer]}`
    : "未作答";

  // 取得正確答案文字
  const correctAnswerText = `${String.fromCharCode(65 + record.correctAnswer)}. ${record.options[record.correctAnswer]}`;

  // 設定答案文字顏色
  fill("#5C677D");

  // 設定答案文字大小
  textSize(constrain(width * 0.019, 11, 15));

  // 設定答案文字粗細
  textStyle(NORMAL);

  // 繪製使用者答案
  text(`你的答案：${userAnswerText}`, centerX, y + 94, itemWidth * 0.86, 24);

  // 繪製正確答案
  text(`正確答案：${correctAnswerText}`, centerX, y + 122, itemWidth * 0.86, 24);
}

// 繪製回到結果按鈕
function drawBackToResultButton() {
  // 計算按鈕寬度
  const buttonWidth = min(width * 0.62, 330);

  // 設定按鈕高度
  const buttonHeight = 52;

  // 計算按鈕水平位置
  const buttonX = width / 2;

  // 計算按鈕垂直位置
  const buttonY = height - buttonHeight / 2 - 25;

  // 設定按鈕陰影顏色
  fill(0, 0, 0, 22);

  // 繪製按鈕陰影
  rect(buttonX + 3, buttonY + 4, buttonWidth, buttonHeight, 16);

  // 設定按鈕顏色
  fill("#8ECAE6");

  // 繪製按鈕
  rect(buttonX, buttonY, buttonWidth, buttonHeight, 16);

  // 設定文字顏色
  fill("#FFFFFF");

  // 設定文字大小
  textSize(constrain(width * 0.027, 16, 21));

  // 設定文字粗細
  textStyle(BOLD);

  // 繪製按鈕文字
  text("回到結果", buttonX, buttonY);
}

// 處理滑鼠左鍵點擊
function mousePressed() {
  // 忽略非左鍵點擊
  if (mouseButton !== LEFT) {
    return;
  }

  // 判斷目前是否在回顧頁
  if (reviewing) {
    // 處理回顧頁點擊
    handleReviewClick();

    // 記錄拖曳起始位置
    reviewLastPointerY = mouseY;

    // 開啟拖曳狀態
    reviewDragging = true;

    // 結束函式
    return;
  }

  // 判斷目前是否在結果頁
  if (finished) {
    // 處理結果頁點擊
    handleResultClick();

    // 結束函式
    return;
  }

  // 判斷目前是否尚未作答
  if (!answered) {
    // 處理答案選項點擊
    handleOptionClick();

    // 結束函式
    return;
  }

  // 處理下一題點擊
  handleNextClick();
}

// 處理滑鼠放開
function mouseReleased() {
  // 關閉回顧拖曳狀態
  reviewDragging = false;
}

// 處理滑鼠拖曳
function mouseDragged() {
  // 只有回顧頁拖曳時才處理
  if (!reviewing || !reviewDragging) {
    return false;
  }

  // 計算垂直移動距離
  const deltaY = mouseY - reviewLastPointerY;

  // 更新回顧清單位置
  reviewScrollY = constrain(reviewScrollY + deltaY, -reviewMaxScroll, 0);

  // 記錄目前滑鼠位置
  reviewLastPointerY = mouseY;

  // 阻止預設拖曳行為
  return false;
}

// 處理滑鼠滾輪
function mouseWheel(event) {
  // 只有回顧頁才處理滾輪
  if (!reviewing) {
    return;
  }

  // 更新回顧清單捲動位置
  reviewScrollY = constrain(reviewScrollY - event.delta, -reviewMaxScroll, 0);

  // 阻止瀏覽器預設滾動
  return false;
}

// 處理觸控開始
function touchStarted() {
  // 判斷是否在回顧頁且有觸控
  if (reviewing && touches.length > 0) {
    // 記錄觸控位置
    reviewLastPointerY = touches[0].y;

    // 開啟拖曳狀態
    reviewDragging = true;
  }

  // 阻止瀏覽器預設觸控行為
  return false;
}

// 處理觸控移動
function touchMoved() {
  // 判斷是否正在回顧頁拖曳
  if (!reviewing || !reviewDragging || touches.length === 0) {
    return false;
  }

  // 取得目前觸控位置
  const currentTouchY = touches[0].y;

  // 計算觸控移動距離
  const deltaY = currentTouchY - reviewLastPointerY;

  // 更新清單捲動位置
  reviewScrollY = constrain(reviewScrollY + deltaY, -reviewMaxScroll, 0);

  // 記錄目前觸控位置
  reviewLastPointerY = currentTouchY;

  // 阻止瀏覽器預設觸控行為
  return false;
}

// 處理觸控結束
function touchEnded() {
  // 關閉拖曳狀態
  reviewDragging = false;

  // 阻止瀏覽器預設觸控行為
  return false;
}

// 處理答案選項點擊
function handleOptionClick() {
  // 取得目前題目
  const quiz = currentQuestions[currentQuestion];

  // 計算內容寬度
  const contentWidth = min(width * 0.9, 760);

  // 計算水平中心
  const centerX = width / 2;

  // 計算卡片垂直位置
  const cardY = height / 2 + 25;

  // 計算卡片高度
  const cardHeight = min(height * 0.78, 680);

  // 計算選項寬度
  const optionWidth = min(contentWidth * 0.78, 530);

  // 計算選項高度
  const optionHeight = constrain(height * 0.065, 44, 58);

  // 計算選項間距
  const optionGap = 10;

  // 計算第一個選項位置
  const firstOptionY = cardY - cardHeight * 0.035;

  // 逐一檢查四個選項
  for (let i = 0; i < quiz.options.length; i++) {
    // 計算目前選項位置
    const optionY = firstOptionY + i * (optionHeight + optionGap);

    // 判斷是否點擊選項
    if (isInsideRect(mouseX, mouseY, centerX, optionY, optionWidth, optionHeight)) {
      // 記錄使用者選擇
      selectedAnswer = i;

      // 將答案寫入題目資料
      quiz.userAnswer = i;

      // 設定為已作答
      answered = true;

      // 判斷答案是否正確
      if (selectedAnswer === quiz.answer) {
        // 增加分數
        score++;
      }

      // 結束檢查
      break;
    }
  }
}

// 處理下一題按鈕
function handleNextClick() {
  // 計算按鈕寬度
  const buttonWidth = min(width * 0.28, 180);

  // 設定按鈕高度
  const buttonHeight = 52;

  // 計算按鈕位置
  const buttonX = width - buttonWidth / 2 - 25;

  // 計算按鈕垂直位置
  const buttonY = height - buttonHeight / 2 - 25;

  // 判斷是否點擊下一題按鈕
  if (!isInsideRect(mouseX, mouseY, buttonX, buttonY, buttonWidth, buttonHeight)) {
    // 沒有點擊按鈕時結束函式
    return;
  }

  // 判斷是否為最後一題
  if (currentQuestion === currentQuestions.length - 1) {
    // 保存上一輪作答結果
    saveLastRound();

    // 顯示結果頁
    finished = true;

    // 結束函式
    return;
  }

  // 進入下一題
  currentQuestion++;

  // 重設作答狀態
  answered = false;

  // 清除選擇答案
  selectedAnswer = -1;
}

// 處理結果頁按鈕
function handleResultClick() {
  // 計算結果卡片高度
  const cardHeight = min(height * 0.78, 600);

  // 計算水平中心
  const centerX = width / 2;

  // 計算垂直中心
  const centerY = height / 2;

  // 計算按鈕寬度
  const buttonWidth = min(width * 0.62, 330);

  // 設定按鈕高度
  const buttonHeight = 56;

  // 計算回顧按鈕位置
  const reviewY = centerY + cardHeight * 0.23;

  // 計算重新作答按鈕位置
  const retryY = centerY + cardHeight * 0.38;

  // 判斷是否點擊回顧按鈕
  if (isInsideRect(mouseX, mouseY, centerX, reviewY, buttonWidth, buttonHeight)) {
    // 確認有上一輪紀錄
    if (lastRoundRecords.length > 0) {
      // 開啟回顧頁
      reviewing = true;

      // 重設捲動位置
      reviewScrollY = 0;
    }

    // 結束函式
    return;
  }

  // 判斷是否點擊再作答按鈕
  if (isInsideRect(mouseX, mouseY, centerX, retryY, buttonWidth, buttonHeight)) {
    // 保存目前題組
    const previousQuestions = currentQuestions.slice();

    // 建立不同的新題組
    createNewRound(previousQuestions);
  }
}

// 處理回顧頁按鈕
function handleReviewClick() {
  // 計算按鈕寬度
  const buttonWidth = min(width * 0.62, 330);

  // 設定按鈕高度
  const buttonHeight = 52;

  // 計算按鈕位置
  const buttonX = width / 2;

  // 計算按鈕垂直位置
  const buttonY = height - buttonHeight / 2 - 25;

  // 判斷是否點擊回到結果按鈕
  if (isInsideRect(mouseX, mouseY, buttonX, buttonY, buttonWidth, buttonHeight)) {
    // 關閉回顧頁
    reviewing = false;

    // 重設捲動位置
    reviewScrollY = 0;
  }
}

// 判斷點擊位置是否位於矩形內
function isInsideRect(pointX, pointY, centerX, centerY, rectWidth, rectHeight) {
  // 回傳是否位於矩形範圍內
  return (
    pointX >= centerX - rectWidth / 2 &&
    pointX <= centerX + rectWidth / 2 &&
    pointY >= centerY - rectHeight / 2 &&
    pointY <= centerY + rectHeight / 2
  );
}

// 當視窗尺寸改變時重新調整畫布
function windowResized() {
  // 重新調整畫布大小
  resizeCanvas(windowWidth, windowHeight);

  // 重新建立背景泡泡
  createBubbles();
}