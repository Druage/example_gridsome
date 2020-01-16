// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Layout from '~/layouts/Layout.vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faImage } from '@fortawesome/free-regular-svg-icons'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false;

library.add(
    faInstagram,
    faFacebook,
    faImage
);


export default function (Vue, {router, head, isClient}) {
    // Set default layout as a global component
    Vue.component('Layout', Layout);
    Vue.component('font-awesome', FontAwesomeIcon);
}
