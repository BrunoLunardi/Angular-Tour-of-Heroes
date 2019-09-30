import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import para usar component heroes.component via rota
import { HeroesComponent } from './heroes/heroes.component';
//import para usar component dashboard.component via rota
import { DashboardComponent }   from './dashboard/dashboard.component';
//import para usar component hero-detail.component via rota
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';

const routes: Routes = [
  //cria uma rota com o nome heroes para o component HeroesComponent
  { path: 'heroes', component: HeroesComponent },
  //cria uma rota com o nome dashboard para o component DashboardComponent
  { path: 'dashboard', component: DashboardComponent },
  //quando inicia a aplicação (url raiz) será redirecionado para a rota abaixo
    //toda rota com caminho vazio (sem path) será redirecionado para a rota /dashboard
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  //rota para acessar detalhes de um heroe
  { path: 'detail/:id', component: HeroDetailComponent },
];

//metadado para inicializar o router e inicializar o listening para alterações no navegador
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }