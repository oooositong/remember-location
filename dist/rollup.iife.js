var RememberLocation = (function () {
    'use strict';

    // import debounce from "lodash/debounce";

    class RememberLocation {

        constructor() {
            if (!this.checkEnv()) {
                return;
            }
            this.CACHE_KEY = 'RememberScroll';
            this.pageKey = location.pathname;
            this.pageScrollData = null;
            this.scrollY = 0;

            this.startMonitoring();
        }

        recoverPageOffset() {
            this.loadCache();
            setTimeout(() => {
                console.log('Relocation: ', this.scrollY);
                window.scroll(0, this.scrollY);
            }, 100);
        }

        loadCache() {
            this.pageScrollData = JSON.parse(localStorage.getItem(this.CACHE_KEY) || '{}');
            if (this.pageScrollData) {
                this.scrollY = this.pageScrollData[this.pageKey];
            }
            console.log('Loaded LocalStorage.');
        }

        persistData() {
            console.log('Persisted location.');
            this.pageScrollData[this.pageKey] = this.scrollY;
            localStorage.setItem(this.CACHE_KEY, JSON.stringify(this.pageScrollData));
        }

        onScroll() {
            this.scrollY = window.scrollY;
        }

        checkEnv() {
            if (typeof window === 'undefined') {
                console.log('No browser environment.');
                return false;
            }

            return true;
        }

        startMonitoring() {

            // window.addEventListener('scroll', debounce(this.onScroll.bind(this), 500));

            window.addEventListener('scroll', this.onScroll.bind(this));

            window.addEventListener('load', this.recoverPageOffset.bind(this));

            window.addEventListener('beforeunload', this.persistData.bind(this));
        }
    }

    return RememberLocation;

}());
