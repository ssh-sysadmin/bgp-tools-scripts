// ==UserScript==
// @name         BGP.tools - Shodan integration
// @namespace    https://ewpratten.com
// @version      1.0
// @description  Shodan integration for BGP.tools
// @author       Evan Pratten <ewpratten@gmail.com>
// @match        https://bgp.tools/as/*
// @match        https://bgp.tools/prefix/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bgp.tools
// @require      https://raw.githubusercontent.com/Ewpratten/bgp-tools-scripts/master/scripts/utils.js
// ==/UserScript==

// Entry
(function () {
    'use strict';

    // Per-page changes
    switch (get_page_type()) {
        case "as":
            add_top_tab_item(`Shodan`, `https://www.shodan.io/search?query=asn:AS${get_page_id()}`);
            break;
        case "prefix":
            var prefix_urlencode = encodeURI(get_page_id());
            add_top_tab_item(`Shodan`, `https://www.shodan.io/search?query=net%3A%22${prefix_urlencode}%22`);
            break;
    }

})();
