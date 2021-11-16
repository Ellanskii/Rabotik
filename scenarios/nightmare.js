// Значительная часть будет везде повторяться, можно создать класс сценария
const events = new BroadcastChannel('events')
events.onmessage = handleMessage
const chat = new BroadcastChannel('chat')

/**
 * этот сценарий проверяет, что пользователь ткнул минимум трижды в вакансию ночью
 * если да – пишет в чат "привет, полуночник"
 */
let counter = 0
let isUser = true // какое-то ещё условие

function handleMessage ({ data }) {
  const { id, timestamp } = data
  // проверяем, что событие имеет отношение к данному сценарию
  if (id === 'VACANCY_CLICK') {
    // да, вот подтверждение
    console.log('Это включился сценарий nightmare.js')
    // тогда увеличиваем счётчик
    counter++

    // и делаем наши проверочки
    if (
      counter >= 3 && 
      isUser && 
      timestamp > 0 // что-то про ночь
      // ещё условие
      ) {
        chat.postMessage("привет, полуночник")
    }
  }
}



