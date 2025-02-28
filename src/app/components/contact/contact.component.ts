import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [FormsModule],
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  @Input() contactEmail: string = ''; // Input for contact email
  @Output() formSubmitted = new EventEmitter<{ name: string; email: string; message: string }>(); // Output event

  formData = {
    name: '',
    email: '',
    message: '',
  };

  // Handle form submission
  onSubmit() {
    if (this.formData.name && this.formData.email && this.formData.message) {
      this.formSubmitted.emit(this.formData); // Emit the form data
      this.formData = { name: '', email: '', message: '' }; // Reset form
    } else {
      alert('Please fill out all fields.');
    }
  }
}