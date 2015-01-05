/**
 * Created by Christoffer on 20-10-2014.
 */


var joomlaapp = angular.module('joomlaapp', ['onsen', 'ngSanitize',
                                                      'ngResource',
                                                      'ngTouch',
                                                      'ngAnimate']);


/* Encode sql string with JSON and URL encode for the Joomla! to be able to interpret it */


function encode_sql (sql){
    return JSON.stringify(encodeURIComponent(sql).replace(/%20/g, '+'));
}


function getUrlParameter(sPageURL, sParam)
{
//    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++)
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam)
        {
            return sParameterName[1];
        }
    }
}

/* Opens link in external browser via "inAppBrowserPlugin */
/* If the link is not prefixed with http://, it will be added */
function openExternalBrowser(webpage) {
    if (!webpage.match(/^[a-zA-Z]+:\/\//))
    {
        webpage = 'http://' + webpage;
    }
    window.open(encodeURI(webpage), '_system', 'location=yes');
}

function onDeviceReady () {
    document.addEventListener("menubutton", menuKeyDown, true);
}


/* Handling Android menu button */
function menuKeyDown() {
    menu.toggleMenu();
}