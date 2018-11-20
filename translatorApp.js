////////////////////////////////////////////////////////////////////////////////////
////// PBW Web Architects, LLC.
////// Microsoft Translator Web Site Integrator
////// ver1.0.0.0
////////////////////////////////////////////////////////////////////////////////////


var translatorApp = function(translatorApp) {
    'use strict';

    translatorApp.Translate = function(to){
        Microsoft.Translator.Widget.Translate('en', to, translatorApp.OnProgress, translatorApp.OnError, translatorApp.OnComplete, translatorApp.OnRestoreOriginal, 8000);
        Microsoft.Translator.Widget.domTranslator.showHighlight = false;
        Microsoft.Translator.Widget.domTranslator.showTooltips = false;
    };

    translatorApp.OnProgress = function(value) {
        $('#counter').html(Math.round(value));
    };

    translatorApp.OnError = function(error) {
        console.log("Translation Error: " + error);
    };

    translatorApp.OnComplete = function() {
        $('#counter').addClass('text-success');
    };

    //fires when the user clicks on the exit box of the floating widget
    translatorApp.OnRestoreOriginal = function() {
        console.log("The page was reverted to the original language. This message is not part of the widget.");
    };

    return translatorApp;
}({});