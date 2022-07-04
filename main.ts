import { EventDispatcher } from './src/EventDispatcher'
import { Event } from './src/Event'
import { 
  EmailSentHandlerEvent, 
  RegisterInDatabaseHandlerEvent, 
  SaveInAuditLogHandlerEvent ,
  SentNewPostToAllUsersHandlerEvent
} from './src/HandlerEvent'

const user1 = {
  name: 'John Doe',
  email: 'john@doe.com',
}

const post1 = {
  title: 'Hello World',
  text: 'Hello World text...'
}

const dispatcher = new EventDispatcher()

const userCreatedEvent = Event.create({ 
  name: 'userCreated',
  data: user1
})

const postCreatedEvent = Event.create({ 
  name: 'postCreated',
  data: post1
})

const emailsent = new EmailSentHandlerEvent()
const registerindatabase = new RegisterInDatabaseHandlerEvent()
const auditlog = new SaveInAuditLogHandlerEvent()

const sentpost = new SentNewPostToAllUsersHandlerEvent()

userCreatedEvent.addHandler(emailsent)
userCreatedEvent.addHandler(registerindatabase)
userCreatedEvent.addHandler(auditlog)

postCreatedEvent.addHandler(sentpost)

dispatcher.addEvent(userCreatedEvent)
dispatcher.addEvent(postCreatedEvent)

dispatcher.notify()