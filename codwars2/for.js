// Перебрать инлдексы массива и для каждого индека тоесть обекта добавить 1 ключ-значениеы
var questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
  }, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 09                                            
}];

for(let i = 0; i < questions.length; i++){
    questions[i].usersAnswer = 0
}