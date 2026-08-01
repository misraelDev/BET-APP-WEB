// angular import
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// project import
import { LoadingBarComponent } from './components/ui/loading-bar/loading-bar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [],
  imports: [RouterOutlet, LoadingBarComponent]
})
export class AppComponent {
  // public props
  title = 'mantis-free-version';
}
