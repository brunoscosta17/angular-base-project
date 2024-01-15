import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  @Input() type: string = 'text';
  @Input() formControlName: string = '';
  @Input() label: string = '';
  @Input() id: string = '';
  @Input() placeholder: string = '';
  @Input() model: string = '';
  @Input() disabled: boolean = false;
  @Input() readOnly: boolean = false;

  @Input() errors: Array<any> = [];

  @Output() modelChange = new EventEmitter<any>();
  @Output() submitValue = new EventEmitter<any>();

  inputChange(value: any) {
    this.type === 'number' ? this.modelChange.emit(Number(value)) : this.modelChange.emit(value);
  }

  enterPressed(event: any) {
    this.submitValue.emit(event.target.value);
  }

}
