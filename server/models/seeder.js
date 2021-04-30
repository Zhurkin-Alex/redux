const mongoose = require("mongoose")
const Question = require('./Question.js')




async function seeder() {

  await Question.create({
    topic: "Животные",
    question: "Какой зверек бежит, выставляя вперед задние лапы?",
    answer: "заяц",
    points: 200,
    answered: ''
  })
  await Question.create({
    topic: "Животные",
    question: "У какого животного все время растут зубы?",
    answer: "бобер",
    points: 400,
    answered: ''
  })
  await Question.create({
    topic: "Животные",
    question: "Из чего состоит горб у верблюда?",
    answer: "из жира",
    points: 600,
    answered: ''
  })
  await Question.create({
    topic: "Животные",
    question: "Самая крупная змея?",
    answer: "удав Анаконда",
    points: 800,
    answered: ''
  })
  await Question.create({
    topic: "Животные",
    question: "Скопление лошадей?",
    answer: "табун",
    points: 1000,
    answered: ''
  })
}

seeder()
