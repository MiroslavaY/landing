$(function() {
    "use strict";
    // Custom JS


    function check(str) {

        let ob = {};
        for (let i = 0, len = str.length; i < len; i++) {

            if (ob.hasOwnProperty(str[i])) {
                ob[str[i]] += 1;
            }
            else {
                ob[str[i]] = 1;
            }


        }
        return JSON.stringify(ob);

    }
})();