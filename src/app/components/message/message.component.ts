import { Component, OnInit } from '@angular/core';
import {Stomp} from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

	private stompClient = null;
	messages: string[] = [];
	username : string;
	message : string;

  	constructor() { }

	ngOnInit(): void {
	}

	connect() {
		const serverUrl = 'http://localhost:8081/no-auth/ws-chat';
		const ws = new SockJS(serverUrl);
		this.stompClient = Stomp.over(ws);
		const _this = this;
		// tslint:disable-next-line:only-arrow-functions
		this.stompClient.connect({}, function() {

			_this.stompClient.subscribe('/topic/group', (payload) => {

				var sms = JSON.parse(payload.body);

				_this.messages.push(sms.content);
			});

			var chatMessage = {
				sender: "Nhut",
				content: "Hi",
				messageType: 'JOIN'
			};
			_this.stompClient.send("/app/chat.addUser",
				{},
				JSON.stringify(chatMessage)
			)
		});
	}
	  
	sendMessage() {
		var chatMessage = {
			sender: this.username,
			content: this.message,
			messageType: 'CHAT'
		};
		this.stompClient.send('/app/chat.sendMessage' , {}, JSON.stringify(chatMessage));
	}
}
