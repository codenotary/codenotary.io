/* eslint-disable */

export default ({ app }) => {
    if (process.env.NODE_ENV !== 'production') {
        return;
    }

    (function(){
        window.ldfdr = window.ldfdr || {};
        (function(d, s, ss, fs){
        fs = d.getElementsByTagName(s)[0];

        function ce(src){
            var cs  = d.createElement(s);
            cs.src = src;
            setTimeout(function(){fs.parentNode.insertBefore(cs,fs)}, 1);
        }

        ce(ss);
        })(document, 'script', 'https://sc.lfeeder.com/lftracker_v1_Xbp1oaEkZGX7EdVj.js');
    })();

}
