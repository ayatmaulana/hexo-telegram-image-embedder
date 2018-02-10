"use strict";

const urlParser = require('parse-url')

hexo.extend.helper.register('telegram_image_embeder', function ( c ) {
 
    let parse = urlParser(c)
    
    return `<script async src="https://telegram.org/js/telegram-widget.js?2" data-telegram-post="${parse.pathname}" data-width="100%"></script>`

});
