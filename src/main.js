import Vue from 'vue';
import OldPage from './components/OldPage.vue';
import wrap from '@vue/web-component-wrapper';

const CustomElement = wrap(Vue, OldPage);

window.customElements.define('old-page', CustomElement);