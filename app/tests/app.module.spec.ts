/**
 * Created by yxzhang on 1/30/17.
 */
var reflect = require('reflect-metadata');
import { AppModule } from '../app.module';
let appModule;

describe('AppModule', () => {
    beforeEach(() => {
        appModule = new AppModule();
    });

    it('should be a valid module', () => {
        expect(appModule).toBeTruthy();
    });
});