import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { RouterComponent } from './router/router.component'; // Corrija o caminho conforme necessário
import { FormcadastroComponent } from './account/formcadastro/formcadastro.component';


const routes: Routes = [
  { path: '', component: RouterComponent, children: [
      { path: 'login', component: LoginComponent },
      { path: 'cadastro', component: FormcadastroComponent }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
