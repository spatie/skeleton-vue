import { ExampleComponent } from '../src';
import Vue from 'vue/dist/vue.js';

describe('ExampleComponent', () => {
    Vue.component('ExampleComponent', ExampleComponent);

    beforeEach(() => {
        document.body.innerHTML = `
            <div id="app">
                <ExampleComponent></ExampleComponent>
            </div>
        `;
    });

    it('can mount', async () => {
        await createVm();

        expect(document.body.innerHTML).toMatchSnapshot();
    });
});

async function createVm() {
    const vm = new Vue({
        el: '#app',
    });

    await Vue.nextTick(() => {});

    return { app: vm, component: vm.$children[0] };
}
