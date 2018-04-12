import { NgModule } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
    declarations: [
        FormComponent
    ],
    exports: [
        FormComponent
    ]
})
export class FormModule {

}