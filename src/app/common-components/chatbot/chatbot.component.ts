import { Component, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-chatbot',
  standalone: false,
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent implements AfterViewChecked {

  messages: { user: string, text: string }[] = [];
  userInput: string = '';
  defaultQuestions: string[] = [
    "What is the admission process?",
    "How can I reset my password?",
  ];

  @ViewChild('messagesContainer') private messagesContainer!: ElementRef;

  constructor(private ds: DataService) {}

  ngAfterViewChecked() {
    // this.scrollToBottom();
  }

  // sendMessage(question?: string) {
  //   if (question) {
  //     this.userInput = question;
  //   }

  //   if (this.userInput.trim()) {
  //     // Display user message
  //     this.messages.push({ user: 'user', text: this.userInput });

  //     // Send user message to backend
  //     this.ds.sendMessage(this.userInput).subscribe(response => {
  //       // Display bot response
  //       this.messages.push({ user: 'bot', text: response.reply });
  //     });

  //     // Clear the input
  //     this.userInput = '';
  //   }
  // }

  private scrollToBottom(): void {
    try {
      this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
    } catch (err) {
      console.error('Scroll error:', err);
    }
  }
}
