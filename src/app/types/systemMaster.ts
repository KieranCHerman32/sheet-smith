import { charSheet } from './sheets/charSheet';

export interface sheetMaster {
	systemType: string;
	systemNm: string;
	systemAbbr: string;
	editions?: sheetMaster[];
	sheets?: charSheet[];
}
