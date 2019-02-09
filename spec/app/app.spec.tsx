import * as React from "react";
import App from "../../src/App";
import {RenderResult, render} from "react-testing-library";
import {expect} from "chai";

describe('the app',  () => {
    it('should render the app', async () => {
        const container: RenderResult = await render(<App/>);
        const app = container.queryByTestId('app');
        expect(app).to.exist
    });
});
