import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'counter-alone',
  standalone: true,
  //imports: [CommonModule],
  templateUrl: './counter-alone.component.html',
  styles: ``,
})
export class CounterAloneComponent {

  @Input()
  public counter: number = 10;
}
