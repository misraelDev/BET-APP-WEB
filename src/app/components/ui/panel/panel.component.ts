import { CommonModule } from '@angular/common';
import { Component, ContentChild, ElementRef, TemplateRef, input } from '@angular/core';

@Component({ selector: 'app-card', standalone: true, imports: [CommonModule], templateUrl: './panel.component.html', styles: [] })
export class PanelComponent {
  cardTitle = input<string>();
  cardClass = input<string>();
  showContent = input(true);
  blockClass = input<string>();
  headerClass = input<string>();
  showHeader = input(true);
  padding = input(20);
  @ContentChild('headerOptionsTemplate') headerOptionsTemplate!: TemplateRef<ElementRef>;
  @ContentChild('headerTitleTemplate') headerTitleTemplate!: TemplateRef<ElementRef>;
}
