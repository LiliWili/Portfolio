import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HomeComponent } from "./components/home/home.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { RedesComponent } from "./components/redes/redes.component";
import { ContatoComponent } from "./components/contato/contato.component";
import { FooterComponent } from "./components/footer/footer.component";
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-root',
  imports: [NavbarComponent,
    MatGridListModule, 
    MatCardModule,
    HomeComponent, 
    SkillsComponent, 
    RedesComponent, 
    ContatoComponent, 
    FooterComponent,
    MatToolbarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
