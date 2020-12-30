
import loadingComponent from './index.vue'
import Vue from 'vue'
const LoadingConstructor = Vue.extend(loadingComponent);

let wrapper = document.createElement('div')
wrapper.id = 'loading-wrapper';

const instance = new LoadingConstructor({
    el: wrapper
});

instance.show = false;
const loading = {
    start() {
        instance.show = true;
        document.body.appendChild(instance.$el)
    },
    finish() {
        instance.close();
    }
}


const Loading = {
    install: () => {
        if (!Vue.$loading) {
            Vue.$loading = loading;
        }
        Vue.mixin({
            created() {
                this.$loading = Vue.$loading;
            }
        })
    }
}
export default Loading;