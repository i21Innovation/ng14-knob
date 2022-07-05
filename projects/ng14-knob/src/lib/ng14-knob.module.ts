import { NgModule } from '@angular/core';
import { Ng14KnobComponent } from './ng14-knob.component';

import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    Ng14KnobComponent
  ],
  imports: [ FormsModule
  ],
  exports: [
    Ng14KnobComponent
  ]
})
export class Ng14KnobModule { }
