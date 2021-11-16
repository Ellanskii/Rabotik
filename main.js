/**
 * подключаем методы апи
 */
import { postMessageToChat } from './api'

// создаём общую шину для событий DOM
const events = new BroadcastChannel('events')

// общая шина для сообщений в чате
const chat = new BroadcastChannel('chat')
// отправка сообщения из канала чата в настоящий чат
chat.onmessage = (message) => postMessageToChat(message.data)

document.addEventListener('rabota', handleEvent)



function handleEvent({ detail: message }) {
  // чисто для демонстрации и удобства разработки
  // сейчас в проде там много инфы, не только id и время
  console.table(message)
  // даём всем сценариям узнать, что случилось событие
  events.postMessage(message)
}
