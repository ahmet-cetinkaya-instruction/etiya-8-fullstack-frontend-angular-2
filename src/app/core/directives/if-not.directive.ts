import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIfNot]',
  standalone: true,
})
export class IfNotDirective {
  @Input('appIfNot') set condition(value: boolean) {
    if (value === false) {
      this.viewContainer.clear();
      this.viewContainer.createEmbeddedView(this.template);
    } else this.viewContainer.clear();
  } // setter

  constructor(
    private template: TemplateRef<HTMLElement>,
    private viewContainer: ViewContainerRef
  ) {
  }
}
