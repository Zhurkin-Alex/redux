const mongoose = require("mongoose")
const Question = require('./Question.js')
const Topic = require('./Topic.js')


mongoose.connect('mongodb://localhost:27017/MyGame', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,

})


async function seeder() {

  await Topic.create({
    title: 'Животные',
    questions: [

      {
        question: "Какой зверек бежит, выставляя вперед задние лапы?",
        answer: "заяц",
        points: 200,
        answered: ''
      },
      {

        question: "У какого животного все время растут зубы?",
        answer: "бобер",
        points: 400,
        answered: ''
      },
      {

        question: "Из чего состоит горб у верблюда?",
        answer: "из жира",
        points: 600,
        answered: ''
      },
      {

        question: "Самая крупная змея?",
        answer: "удав Анаконда",
        points: 800,
        answered: ''
      },
      {

        question: "Скопление лошадей?",
        answer: "табун",
        points: 1000,
        answered: ''
      }
    ]
  })

  await Topic.create({
    title: 'История',
    questions: [

      {
        question: "Когда была Отечественная война??",
        answer: "1812",
        points: 200,
        answered: ' '
      },
      {
        topic: "История",
        question: "Когда произошел распад СССР",
        answer: "1991",
        points: 400,
        answered: ''
      },
      {
        question: "Когда была принята Декларация о государственном суверенитете России?",
        answer: "12 июня 1990 года",
        points: 600,
        answered: ''
      },
      {
        question: "Как называлась политика реформ М.С. Горбачева?",
        answer: "Михаил Сергеевич Горбачев",
        points: 800,
        answered: ''
      },
      {
        question: "Как звали последнего российского императора?",
        answer: "Николай II",
        points: 1000,
        answered: ''
      }
    ]
  })
  await Topic.create({
    title: 'Космос',
    questions: [

      {
        question: "Кто является первой женщиной-космонавтом?",
        answer: "Валентина Терешкова",
        points: 200,
        answered: ''
      },
      {
        question: "Какой ученый является изобретателем космической ракеты?",
        answer: "Циолковский",
        points: 400,
        answered: ''
      },
      {
        topic: "Космос",
        question: "Какой астронавт был вторым(вслед за Леоновым) вышедшим в открытый космос?",
        answer: "Эдвард Уайт",
        points: 600,
        answered: ''
      },
      {
        question: "Как называется ближайшая к Солнцу планета?",
        answer: "Меркурий",
        points: 800,
        answered: ''
      },
      {

        question: "Какие планеты солнечной системы вращаются в направлении, противоположном Земле? ",
        answer: "Венера и Уран",
        points: 1000,
        answered: ''
      }
    ]
  })
}








seeder()
