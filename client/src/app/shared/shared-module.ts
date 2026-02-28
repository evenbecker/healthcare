import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgbNavModule, NgbPaginationModule, NgbToastModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
//import {  HttpClientModule } from '@angular/common/http';
import { SortableHeaderDirective } from "./directives/sortable-header";
import { Header } from "./components/header/header";
import { GlobalToast } from "./components/global-toast/global-toast";
import { ConfirmDialog } from "./components/confirm-dialog/confirm-dialog";




@NgModule({
  declarations: [
    GlobalToast,
    ConfirmDialog,
    //SortableHeaderDirective,
    Header
  ],
  imports: [
    SortableHeaderDirective,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    //HttpClientModule,
    NgbTooltipModule,
    NgbPaginationModule,
    NgbToastModule,
    NgbNavModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    //HttpClientModule,
    NgbTooltipModule,
    NgbPaginationModule,
    NgbToastModule,
    NgbNavModule,
    GlobalToast,
    SortableHeaderDirective,
    Header
  ]
})
export class SharedModule { }
