import { Component, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  modalRef?: BsModalRef;

  constructor(private formBuilder: FormBuilder, private modalService: BsModalService) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      rememberMe: [false]
    });
  }

  onSubmit(template: TemplateRef<any>): void {
    if (this.loginForm.invalid) {
      this.modalRef = this.modalService.show(template);
      return;
    }

    // lógica de login
  }
}
