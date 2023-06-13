import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.css'],
})
export class MomentFormComponent {
  @Input() btnText!: string;

  momentForm!: FormGroup;

  ngOnInit(): void {
    this.momentForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required]),
      description: new FormControl(''),
      image: new FormControl('', [Validators.required]),
    });
  }

  get title() {
    return this.momentForm.get('title')!
  }

  get image() {
    return this.momentForm.get('image')!
  }

  submit() {
    console.log('Enviando');
  }
}
