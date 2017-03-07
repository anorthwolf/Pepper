/**
 * Created by yxzhang on 1/30/17.
 */
var reflect = require('reflect-metadata');
import { AppRoutingModule } from '../app-routing.module';
let appRoutingModule;

describe('AppRoutingModule', () => {
    beforeEach(() => {
        appRoutingModule = new AppRoutingModule();
    });

    it('should be a valid module', () => {
        expect(appRoutingModule).toBeTruthy();
    });
});