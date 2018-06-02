"use strict";

const urlParser = require('url-parse')

hexo.extend.tag.register('telegramImage', function (args) {
 
    let parse = urlParser(args, true),
        pathname = parse.pathname
    
    return `<script async src="https://telegram.org/js/telegram-widget.js?2" data-telegram-post="${pathname}" data-width="100%"></script>`

});
