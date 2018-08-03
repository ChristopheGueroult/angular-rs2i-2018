import { BehaviorSubject } from 'rxjs';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Auth } from '../../interfaces/auth';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../../core/services/auth.service';


@Component({
  selector: 'app-form-connect',
  templateUrl: './form-connect.component.html',
  styleUrls: ['./form-connect.component.css']
})
export class FormConnectComponent implements OnInit {

  public form: FormGroup;
  public faEye = faEye;
  public type: string;
  public show: boolean;
  public msg: BehaviorSubject<String>;
  @Output() auth: EventEmitter<Auth> = new EventEmitter();
  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.createForm();
    this.show = false;
    this.type = 'password';
    this.msg = this.authService.msg$;
  }

  private createForm(): void {
    this.form = this.fb.group({
      login: [
        '',
        Validators.compose([Validators.required, Validators.minLength(5)])
      ],
      pass: [
        '',
        Validators.compose([Validators.required, Validators.minLength(4)])
      ]
    });
  }

  public process() {
    console.log(this.form.value);
    this.auth.emit(this.form.value);
    this.form.reset();
  }

  public isError(fieldName: string): boolean {
    return this.form.get(fieldName).invalid && this.form.get(fieldName).touched;
  }

  public toggle() {
    this.show = !this.show;
    if (this.show) {
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }

}
