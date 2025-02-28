import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [FormsModule], // Add FormsModule to imports
})
export class ContactComponent {
  // Form data model
  formData = {
    name: '',
    email: '',
    message: '',
  };

  // Function to handle form submission
  /* onSubmit() {
    console.log('Form Data:', this.formData);
    alert('Message sent successfully!');
    this.formData = { name: '', email: '', message: '' }; // Reset form
  } */
}