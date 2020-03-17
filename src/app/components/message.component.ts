import { OnInit, Component } from '@angular/core';
import { MessageService} from '../services/message.service'
@Component({
    selector: 'app-message',
    template: `
    <div *ngIf='messageService.messages.length'>
        <h2>Messages</h2>
        <button class='clear'
            (click)='messageService.clear()'>clear</button>
        <div *ngFor='let message of messageService.messages'>{{message}}</div>
    </div> 
    `,
    styleUrls: ['./message.component.css']
})
export class Message implements OnInit {
    

    constructor(public messageService: MessageService) {

    }

    ngOnInit() {
        
    }


}