import {SampleComponent} from './sample-component'

describe('sample-component', () => {
    let sampleComponent;
    beforeEach(() => {
        sampleComponent = new SampleComponent();
    });

    it('builds', () => {
        expect(sampleComponent).toBeTruthy();
    });

})