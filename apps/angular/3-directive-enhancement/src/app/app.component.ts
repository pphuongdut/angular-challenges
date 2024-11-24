import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgForWithEmptyDirective } from './ng-for-empty.directive';

interface Person {
  name: string;
}

@Component({
  standalone: true,
  imports: [NgFor, NgForWithEmptyDirective],
  selector: 'app-root',
  template: `
    <div *ngFor="let person of persons; empty: emptyList">
      {{ person.name }}
    </div>
    <ng-template #emptyList>The list is empty !!</ng-template>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  persons: Person[] = [];
}
