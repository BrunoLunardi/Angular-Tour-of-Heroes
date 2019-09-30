// Obtém mensagens via service
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = [];

  //adiciona mensagem ao cache
  add(message: string) {
    this.messages.push(message);
  }

  //limpa o cache
  clear() {
    this.messages = [];
  }

}
