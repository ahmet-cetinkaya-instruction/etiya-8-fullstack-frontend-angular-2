import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective implements OnInit {
  @Input('appHighlight') bgColor: string = 'yellow';
  @Input() color = 'black';

  constructor(private element: ElementRef<HTMLElement>) {}

  ngOnInit() {
    console.log(this.bgColor);

    const span = document.createElement('span');
    span.style.backgroundColor = 'yellow';
    span.style.color = 'black';
    span.innerText = 'On sale! ';
    this.element.nativeElement.appendChild(span);

    this.element.nativeElement.style.color = this.color;
    this.element.nativeElement.style.backgroundColor = this.bgColor;

    this.element.nativeElement.onclick = () => {
      alert('You clicked me!');
    }
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.element.nativeElement.style.backgroundColor = 'lightblue';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.element.nativeElement.style.backgroundColor = this.bgColor;
  }
}
