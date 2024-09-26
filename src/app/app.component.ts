import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { HighlightPipe } from './highlight.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FontAwesomeModule, FormsModule, DatePipe, CommonModule, HighlightPipe],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faCoffee = faCoffee;
  title = 'first-angular-app';
  searchText: string = '';  // This stores the search query
  vacations: any[] = [];
  filteredVacations: any[] = []; // This will store the filtered vacation requests

  constructor() {
    // Mock data for vacations
    this.vacations = [
      {
        name: 'Rami Kalid',
        submissionDate: '1/3/2024',
        duration: '2 Weeks (1/4/2023 - 14/4/2023)',
        salary: 2500,
        image: '../assets/images/image_1.webp',
      },
      {
        name: 'Ahmad Sami',
        submissionDate: '1/3/2024',
        duration: '2 Weeks (1/4/2023 - 14/4/2023)',
        salary: 2500,
        image: '../assets/images/image_1.webp',
      },
      {
        name: 'Fadi Kalid',
        submissionDate: '1/3/2024',
        duration: '2 Weeks (1/4/2023 - 14/4/2023)',
        salary: 2500,
        image: '../assets/images/image_1.webp',
      },
      {
        name: 'Fadi Kalid',
        submissionDate: '1/3/2024',
        duration: '2 Weeks (1/4/2023 - 14/4/2023)',
        salary: 2500,
        image: '../assets/images/image_1.webp',
      },
      {
        name: 'Fadi Kalid',
        submissionDate: '1/3/2024',
        duration: '2 Weeks (1/4/2023 - 14/4/2023)',
        salary: 2500,
        image: '../assets/images/image_1.webp',
      },
      {
        name: 'Fadi Kalid',
        submissionDate: '1/3/2024',
        duration: '2 Weeks (1/4/2023 - 14/4/2023)',
        salary: 2500,
        image: '../assets/images/image_1.webp',
      },
      {
        name: 'Rami Kalid',
        submissionDate: '1/3/2024',
        duration: '2 Weeks (1/4/2023 - 14/4/2023)',
        salary: 2500,
        image: '../assets/images/image_1.webp',
      },
    ];

    // Set filteredVacations to all vacations initially
    this.filteredVacations = [...this.vacations];
  }

  // This method is called when the user types in the search box
  onSearchChange() {
    if (this.searchText) {
      // Filter the vacations array based on the search text
      this.filteredVacations = this.vacations.filter((vacation) =>
        vacation.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    } else {
      // If search text is empty, reset the filtered vacations
      this.filteredVacations = [...this.vacations];
    }
  }

  // Toggle select all functionality for checkboxes
  toggleSelectAll(event: any) {
    const checkboxes = document.querySelectorAll('.vacation-checkbox');
    checkboxes.forEach((checkbox: any) => {
      checkbox.checked = event.target.checked;
    });
  }
}
