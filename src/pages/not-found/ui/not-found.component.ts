import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
})
export class NotFoundComponent {
  public readonly router: Router = inject(Router);

  navigateHome(): void {
    this.router.navigate(['/']);
  }
}
