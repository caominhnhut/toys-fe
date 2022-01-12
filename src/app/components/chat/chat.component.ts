import { Component, OnInit } from '@angular/core';
import {Stomp} from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  private stompClient = null;
  messages : string[] = [];
  userOneName : string;
  userTwoName: string;
  message: string;
  channelId: string;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  connect() {		
    
    const serverUrl = 'http://localhost:8081/no-auth/ws-private-chat';
		const ws = new SockJS(serverUrl);
		this.stompClient = Stomp.over(ws);
		const _this = this;
    _this.channelId = this.establishPrivateChatChannel()
		// tslint:disable-next-line:only-arrow-functions
		this.stompClient.connect({}, function() {

			_this.stompClient.subscribe('/topic/private.chat.'+_this.channelId, (payload) => {

				var sms = JSON.parse(payload.body);

        console.log("chat - sms: ", sms.body.content)

				_this.messages.push(sms.body.content);
			});
		});
	}

  establishPrivateChatChannel() {

    console.log(this.userOneName+this.userTwoName);
    return this.userOneName + this.userTwoName;

    // var chatChannelIntilization = {
		// 	"userOneId": this.userOneName,
    //   "userTwoId": this.userTwoName
		// };

    // console.log("chatChannelIntilization: ", chatChannelIntilization)

    //return this.dataService.sendPostRequest('/no-auth/message/channel', chatChannelIntilization);

  }

  sendMessage() {
		var privateMessage = {
			userOneName: this.userOneName,
			userTwoName: this.userTwoName,
			content: this.message
		};
    console.log("privateMessage", privateMessage)
		this.stompClient.send('/app/private.chat.sendMessage.'+this.channelId , {}, JSON.stringify(privateMessage));
	}
}
