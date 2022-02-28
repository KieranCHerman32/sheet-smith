import { NgModule } from '@angular/core';
import {
	getAnalytics,
	provideAnalytics,
	ScreenTrackingService,
	UserTrackingService,
} from '@angular/fire/analytics';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getPerformance, providePerformance } from '@angular/fire/performance';
import {
	getRemoteConfig,
	provideRemoteConfig,
} from '@angular/fire/remote-config';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { MainnavComponent } from './mainnav/mainnav.component';
import { SideNavContentComponent } from './side-nav-content/side-nav-content.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
	imports: [
		BrowserAnimationsModule,
		BrowserModule,
		MatFormFieldModule,
		MatIconModule,
		MatSelectModule,
		MatSidenavModule,
		MatTableModule,
		MatToolbarModule,
		MatDividerModule,
		MatButtonModule,
		FormsModule,
		FontAwesomeModule,
		AngularFireModule.initializeApp(environment.firebase),
		// AnalyticsModule,
		AngularFirestoreModule,
		provideFirebaseApp(() => initializeApp(environment.firebase)),
		provideAnalytics(() => getAnalytics()),
		provideAuth(() => getAuth()),
		provideDatabase(() => getDatabase()),
		provideFirestore(() => getFirestore()),
		provideFunctions(() => getFunctions()),
		provideMessaging(() => getMessaging()),
		providePerformance(() => getPerformance()),
		provideRemoteConfig(() => getRemoteConfig()),
		provideStorage(() => getStorage()),
  AppRoutingModule,
	],
	providers: [
		ScreenTrackingService,
		UserTrackingService,
		ScreenTrackingService,
		UserTrackingService,
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
