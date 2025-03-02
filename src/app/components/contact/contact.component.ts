import { Component, Input, Output, EventEmitter, Signal, signal } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  @Input() contactEmail: string = '';
  @Output() formSubmitted = new EventEmitter<{ name: string; email: string; message: string }>(); // Output event


  name = signal('');
  email = signal('');
  message = signal('');

  // input 
  updateName(event: Event) {
    this.name.set((event.target as HTMLInputElement).value);
  }
  updateEmail(event: Event) {
    this.email.set((event.target as HTMLInputElement).value);
  }
  updateMessage(event: Event) {
    this.message.set((event.target as HTMLTextAreaElement).value);
  }

  // form submission
  onSubmit() {
    if (this.name() && this.email() && this.message()) {
      this.formSubmitted.emit({
        name: this.name(),
        email: this.email(),
        message: this.message(),
      });

      // Reset 
      this.name.set('');
      this.email.set('');
      this.message.set('');
    } else {
      alert('Please fill out all fields.');
    }
  }
}
