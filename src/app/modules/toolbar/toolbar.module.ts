import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { ToolbarRoutingModule } from "./toolbar-routing.module";
import { MatButtonModule } from "@angular/material/button";



@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    CommonModule,
    ToolbarRoutingModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [ToolbarComponent]
})
export class ToolbarModule { }
