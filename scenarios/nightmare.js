// Значительная часть будет везде повторяться, можно создать класс сценария
const events = new BroadcastChannel('events')
events.onmessage = handleMessage
const chat = new BroadcastChannel('chat')

/**
 * этот сценарий проверяет, что пользователь ткнул минимум трижды в вакансию ночью
 * если да – пишет в чат "привет, полуночник"
 */
let counter = 0
let isUser = true

const conditions = Promise.all([
  (counter > 2),
  isUser,
  false
  // условие 3
  // условие 4
])

function handleMessage ({ data }) {
  const { id, timestamp } = data
  // проверяем, что событие имеет отношение к данному сценарию
  if (id === 'VACANCY_CLICK' && timestamp > 0) { // проверку на ночь я опустил
    // да, вот подтверждение
    console.log('Это включился сценарий nightmare.js')

    // тогда увеличиваем счётчик
    counter++

    // и делаем наши проверочки
    conditions
      .then(chat.postMessage("привет, полуночник")) // если все условия выполнены – постим сообщение в чат
      .catch(console.table) // или смотрим, что пошло не так
  }
}



