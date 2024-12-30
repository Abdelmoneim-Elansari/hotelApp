import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReplaceComma } from './pipe/replace-comma.pipe';
import { StartRatingComponent } from './components/start-rating/start-rating.component';



@NgModule({
  declarations: [
    ReplaceComma,
    StartRatingComponent 
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ], 
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ReplaceComma,
    StartRatingComponent 
  ]
})
export class SharedModule {}
 