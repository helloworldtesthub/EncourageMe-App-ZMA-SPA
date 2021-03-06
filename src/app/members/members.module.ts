import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MemberDirectoryComponent } from './member-directory/member-directory.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule,
            MatSidenavModule,
            MatProgressSpinnerModule,
            MatGridListModule,
            MatSortModule,
            MatTabsModule,
            MatIconModule,
            MatButtonModule,
            MatCheckboxModule,
            MatCardModule,
            MatInputModule,
            MatToolbarModule,
            MatSnackBarModule,
            MatTableModule,
            MatPaginatorModule,
            MatRadioModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatBottomSheetModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { MembersRoutingModule } from './members-routing.module';
import { MemberProfileComponent } from './member-profile/member-profile.component';

import { MemberSettingsComponent } from './member-settings/member-settings.component';
import { MessagesModule } from '../messages/messages.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DirectoryComponent } from './directory/directory.component';
import { GroupDirectoryComponent } from './group-directory/group-directory.component';
import { TabViewModule } from 'primeng/tabview';
import { FileUploadModule } from 'primeng/fileupload';
import { PicUploadComponent } from '../file-upload/pic-upload/pic-upload.component';

@NgModule({
    declarations: [
        MemberDirectoryComponent,
        MemberProfileComponent,
        MemberSettingsComponent,
        DirectoryComponent,
        GroupDirectoryComponent,
        PicUploadComponent
    ],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatTabsModule,
        MatIconModule,
        MatButtonModule,
        MatCheckboxModule,
        MatCardModule,
        MatInputModule,
        MatToolbarModule,
        MatSnackBarModule,
        MatIconModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatGridListModule,
        MatProgressSpinnerModule,
        MatSidenavModule,
        MatDialogModule,
        ReactiveFormsModule,
        AngularFontAwesomeModule,
        MembersRoutingModule,
        FileUploadModule,
        MessagesModule,
        MatSlideToggleModule,
        MatRadioModule,
        FormsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        TabViewModule,
        MatBottomSheetModule
    ]
})
export class MembersModule {

}
