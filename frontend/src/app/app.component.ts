import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div style="text-align:center" class="content">
      <h1>Welcome to {{title}}!</h1>
      <span style="display: block">A aplicação {{title}} está rodando com sucesso!</span>
      <img width="300" alt="Angular Logo" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSZzHw1UlzFSWnKyJC0NZS413qWiw9bPCcXhk43DpIJRAYvaz1B9Pc3QWEo1Yvu"/>
    </div>

    <router-outlet />
  `,
  styles: [],  
})
export class AppComponent {
  title = 'frontend';
}
