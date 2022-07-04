import { IHandlerEvent } from "./interfaces/IHandlerEvent";

export class EmailSentHandlerEvent implements IHandlerEvent {
  public async run(): Promise<void> {
    console.log('email enviado!')
  }
}

export class RegisterInDatabaseHandlerEvent implements IHandlerEvent {
  public async run(): Promise<void> {
    console.log('registrado no banco de dados!')
  }
}

export class SaveInAuditLogHandlerEvent implements IHandlerEvent {
  public async run(): Promise<void> {
    console.log('log salvo!')
  }
}

export class SentNewPostToAllUsersHandlerEvent implements IHandlerEvent {
  public async run(payload: any): Promise<void> {
    console.log('post enviado para todos usuarios!', payload)
  }
}