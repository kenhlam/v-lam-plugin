
import Button from './button';
import Switch from './switch';

const components = [
    Button,
    Switch
];


const install = function (Vue, opts = {}) {

    components.forEach(component => {
        Vue.component(component.name, component);
    });


    //   Vue.prototype.$ELEMENT = {
    //     size: opts.size || '',
    //     zIndex: opts.zIndex || 2000
    //   };

    //   Vue.prototype.$loading = Loading.service;
    //   Vue.prototype.$msgbox = MessageBox;
    //   Vue.prototype.$alert = MessageBox.alert;
    //   Vue.prototype.$confirm = MessageBox.confirm;
    //   Vue.prototype.$prompt = MessageBox.prompt;
    //   Vue.prototype.$notify = Notification;
    //   Vue.prototype.$message = Message;

};


if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    version: '1.0.0',
    install,
    Button,
    Switch
};
