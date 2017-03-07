/**
 * Created by yxzhang on 1/30/17.
 */
var reflect = require('reflect-metadata');
import { AppComponent } from "../app.component";
let app;

describe('AppComponent', () => {

    beforeEach(function () {
        app = new AppComponent();
    });

    it('should be a valid component', () => {
        expect(app).toBeTruthy();
    });
});