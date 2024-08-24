var lives = 9
var individual_words = [
  "apple",
  "table",
  "phone",
  "green",
  "fruit",
  "elephant",
  "umbrella",
  "study"
];

function initialise() {
  location.reload()
}

var a = Math.floor(Math.random() * individual_words.length)
var secret_word = individual_words[a]

var clue = []
var index = 0

while (index < (secret_word.length)) {
  clue.push("?");
  index = index + 1;
}
var heart_symbol = "❤️";
var True_or_Flase = false;

document.getElementById("p1").innerHTML = clue.join(" ");
let heards = ""
for (let i = 0; i < lives; i++) {
  heards = heards + heart_symbol
}
document.getElementById("p2").innerHTML = "你的生命: " + heards;

function update_clue(guessed_letter, secret_word, clue) {
  index = 0
  while (index < (secret_word.length)) {
    if (guessed_letter == secret_word[index]) {
      clue[index] = guessed_letter
    }
    index = index + 1
  }
}

function submit() {
  document.getElementById("p1").innerHTML = clue.join(" ");
  let heards = ""
  for (let i = 0; i < lives; i++) {
    heards = heards + heart_symbol
  }
  document.getElementById("p2").innerHTML = "你的生命: " + heards;
  var guess = document.getElementById("input").value
  document.getElementById("input").value = ""
  

  if (guess == secret_word) {
    True_or_Flase = true
  } else {
    if (secret_word.indexOf(guess) != -1) {
      update_clue(guess, secret_word, clue)
    } else {
      document.getElementById("p4").innerHTML = "Incorrect. You lose a life";
      lives = lives - 1
    }
  }
  document.getElementById("p1").innerHTML = clue.join(" ");
  heards = ""
  for (let i = 0; i < lives; i++) {
    heards = heards + heart_symbol
  }
  document.getElementById("p2").innerHTML = "你的生命: " + heards;
  if (True_or_Flase) {
    document.getElementById("p1").innerHTML = secret_word
    document.getElementById("p4").innerHTML = "你赢了！神秘单词是：" + secret_word;
    setTimeout(initialise, 8000);
  } else {
    if (lives == 0) {
      document.getElementById("p4").innerHTML = "你输了，神秘单词是：" + secret_word
      setTimeout(initialise, 8000);
    } else if(secret_word.indexOf(guess) != -1){
      document.getElementById("p4").innerHTML = "猜对了！";
    }else{
      document.getElementById("p4").innerHTML = "猜错了，减一条命";
    }
  }
}
