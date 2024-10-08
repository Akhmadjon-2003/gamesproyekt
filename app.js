const answers =[
  {
    id: 1,
    score: 2,
    title: "Uning balandligi ham, eni va bo’yi ham yo’q, lekin uni o’lchasa bo’ladi. U nima?",
  },
  {
    id: 2,
    score: 3,
    title: "Jorj Vashington, Sherlok Xolms, Vilyam Shekspir, Lyudvig Van Betxoven, Napoleon Bonapart, Aleksandr Pushkin – ushbu ro’yxatda kim “ortiqcha”?",
  },
  {
    id: 3,
    score: 1,
    title: " Undan qanchalik ko’p olaversangiz, u shunchalik kattalashib boraveradi. U nima?",
  },
  {
    id: 4,
    score: 1,
    title: " Stolda 70 dona oq qog’oz turibdi. Har 10 soniyada 10 ta qog’ozni sanash mumkin. Bu holda 50 ta qog’oz sanab olish uchun nechi soniya vaqt ketadi?",
  },
  {
    id: 5,
    score: 3,
    title: "Nimani 10 daqiqadan ortiq ushlab turishning iloji yo’q, garchi u o’ta yengil bo’lsa ham?",
  },
  {
    id: 6,
    score: 1,
    title: " Shoh vaziriga menga nok olma anor keltir — deb buyurdi. Zukko vazir bitta meva keltirdi. Bu qaysi meva edi?",
  },
  {
    id: 7,
    score: 1,
    title: "Shifoxonadan to’rt muchchasi sog’ bo’lgan odamni qo’lda ko’tarib olib chiqishdi. U mutlaqo sog’lom bo’lsa, nega ko’tarib olib chiqishmoqda?",
  },
  {
    id: 8,
    score: 1,
    title: "Elektropoezd sharqqa tomon 80 km/soat tezlik bilan harakatlanmoqda. Shamol esa sharqdan g’arbga qarab 15 km/soat tezlik bilan esmoqda. Poyezddan chiqayotgan tutun qaysi tomonga qarab harakatlanadi?",
  },
  {
    id: 9,
    score: 3,
    title: "Bir oilada 5 qiz bor ekan. 1- kitob o’qiyapti, 2- shaxmat o’ynayapti, 3- ovqat yeyapti, 4- yig’ishtiryapti, 5- nima qilyapti?",
  },
  {
    id: 10,
    score: 1,
    title: " Qanday holda 12 sonini teng ikkiga bo’lsak, 7 chiqadi?",
  },
  {
    id: 11,
    score: 1,
    title: "O’rmonga qachongacha kirish mumkin?",
  },
  {
    id: 12,
    score: 2,
    title: "Ot o’z bo’yniga bog’langan qo’ng’iroqning ovozini eshitmaslik uchun necha km/soat tezlikda chopishi kerak?",
  },
  {
    id: 13,
    score: 2,
    title: "Ular qanchalik ko’p bo’lsa, vazni shunchalik kamayib ketaveradi?",
  },
  {
    id: 14,
    score: 2,
    title: "Yuliy Sezar o’z qo’shinlariga qalqon va qilichlarini qimmatbaho narsalar bilan bezatishni buyurgan. Nima uchun?",
  },
  {
    id: 15,
    score: 3,
    title: "Nega odamlar orqaga burilib qarashadi?",
  },
  {
    id: 16,
    score: 1,
    title: "Quyon o’rmondagi hayvonlarga shunday savol berdi: «Agar men ayiqdan og’irroq bo’lsam-u, lekin chumolidan yengilroq bo’lsam, oramizda kim eng yengil bo’ladi?».",
  },
  {
    id: 17,
    score: 1,
    title: " Ikki ota va ikki o’g’il yo’lda ketayotib, 3 ta olma topib olishdi. Ularning har biriga bittadan olma tegdi. Bu qanday sodir bo’ldi?",
  },
  {
    id: 18,
    score: 3,
    title: "Mashhur sehrgar xonaning o’rtasiga qo’l zo’rg’a sig’adigan shisha qo’yib uning ichiga kira olishini aytdi. U buni qanday uddalashi mumkin?",
  },

]
const answerNumberEl = document.querySelectorAll('.box')
const answerTitleEl = document.querySelector('#answer-title')
const trueBtnEl = document.querySelector('#btn-true')
const falseBtnEl = document.querySelector('#btn-false')
const team1ScoreEl = document.querySelector('#team1-score')
const team2ScoreEl = document.querySelector('#team2-score')

let count = 1
let score1 = 0
let score2 = 0

function fetchAnswers() {
  answerNumberEl.forEach((item, index) => {
    item.addEventListener('click', () => {
      answerTitleEl.innerHTML = answers[index].title
      item.style.background = 'white'
    })
  })
}

// function checkedAnswer() {
//   trueBtnEl.addEventListener('click', () => {
//     if(count % 2 == 1) {
//       const indexAnswer = answers.findIndex((item) => item.title === answerTitleEl.innerHTML)
//       score1 +=answers[indexAnswer].score
//       team1ScoreEl.innerHTML = score1
//       answerTitleEl.innerHTML = ''
//       count++
//     }else {
//       const indexAnswer = answers.findIndex((item) => item.title === answerTitleEl.innerHTML)
//       score2 +=answers[indexAnswer].score
//       team2ScoreEl.innerHTML = score2
//       answerTitleEl.innerHTML = ''
//       count++
//     }
//   })
// }

// function falseCheckedAnswer() {
//   falseBtnEl.addEventListener('click', () => {
//     answerTitleEl.innerHTML = ''
//       count++
//   })
// }

fetchAnswers()
// checkedAnswer()
// falseCheckedAnswer()
