import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {

  activeItem: string | null = null; // Track the active item

  constructor() { }

  // Method to determine if the specified item is active
  isActive(item: string): boolean {
    return this.activeItem === item;
  }

  // Method to set the specified item as active
  setActive(item: string): void {
    this.activeItem = item;
  }

  ngOnInit(): void {
  }

  setActiveClass(event: MouseEvent) {
    const listItems = document.querySelectorAll('.list');
    listItems.forEach((item) => item.classList.remove('active'));
    (event.target as HTMLElement).classList.add('active');
  }

}