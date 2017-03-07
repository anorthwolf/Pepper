/**
 * Created by yxzhang on 12/07/16.
 */
import { NgModule } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { LoginFormComponent } from "./login-form/login-form.component";
import { NoteListComponent } from "./note-list/note-list.component";
import { ContactListComponent } from "./contact-list/contact-list.component";
import { NotificationDemoComponent } from "./notification-demo/notification-demo.component";

@NgModule({
    imports: [
        NativeScriptFormsModule
    ],
    declarations: [
        LoginFormComponent,
        NoteListComponent,
        ContactListComponent
    ],
    exports: [
        LoginFormComponent,
        NoteListComponent,
        ContactListComponent
    ]
})
export class ComponentsModule {}