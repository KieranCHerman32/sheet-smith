// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
	production: false,
	ssVer: '.dev',
	features: {
		RPGFilter: false
	},
  firebase: {
    projectId: 'sheet-smith',
    appId: '1:499448333634:web:9c0ad534ed0aa966ee34db',
    databaseURL: 'https://sheet-smith-default-rtdb.firebaseio.com',
    storageBucket: 'sheet-smith.appspot.com',
    locationId: 'us-central',
    apiKey: 'AIzaSyCS_Qfq0Gty7NGCEg8hHiFdUAlJiyBJTtg',
    authDomain: 'sheet-smith.firebaseapp.com',
    messagingSenderId: '499448333634',
    measurementId: 'G-F50BGQY61E',
  }
};
