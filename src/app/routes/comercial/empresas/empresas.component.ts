import {Component} from '@angular/core';


@Component({
  selector: 'app',
  template: `
    <form [formGroup]="form" (ngSubmit)="submit(model)">
      <formly-form [form]="form" [fields]="fields" [model]="model">
        <button type="submit" class="btn btn-default">Submit</button>
      </formly-form>
    </form>
  `,
})
export class EmpresasComponent {
  
}