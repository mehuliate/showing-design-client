import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps-withscopedautocomp';

Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyDkTK3C30AfGNpMNjOUbfTEejMV_YiuuBg',
        libraries: 'places'
    }
});