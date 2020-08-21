/* eslint-disable */
export default ({ app }) => {
    window.cfields = { 1: 'feedback' };

    window._show_thank_you = function (id, message, trackcmp_url, email) {
        var form = document.getElementById('_form_' + id + '_');
        var thank_you = form.querySelector('._form-thank-you');
        form.querySelector('._form-content').style.display = 'none';
        thank_you.innerHTML = message;
        thank_you.style.display = 'block';
        const vgoAlias = typeof visitorGlobalObjectAlias === 'undefined' ? 'vgo' : visitorGlobalObjectAlias;
        var visitorObject = window[vgoAlias];
        if (email && typeof visitorObject !== 'undefined') {
            visitorObject('setEmail', email);
            visitorObject('update');
        } else if (typeof (trackcmp_url) != 'undefined' && trackcmp_url) {
            // Site tracking URL to use after inline form submission.
            _load_script(trackcmp_url);
        }
        if (typeof window._form_callback !== 'undefined') {
            window._form_callback(id);
        }
    };

    window._show_error = function (id, message, html) {
        var form = document.getElementById('_form_' + id + '_');
        var err = document.createElement('div');
        var button = form.querySelector('button');
        var old_error = form.querySelector('._form_error');
        if (old_error) {
            old_error.parentNode.removeChild(old_error);
        }
        err.innerHTML = message;
        err.className = '_error-inner _form_error _no_arrow';
        var wrapper = document.createElement('div');
        wrapper.className = '_form-inner';
        wrapper.appendChild(err);
        button.parentNode.insertBefore(wrapper, button);
        document.querySelector('[id^="_form"][id$="_submit"]').disabled = false;
        if (html) {
            var div = document.createElement('div');
            div.className = '_error-html';
            div.innerHTML = html;
            err.appendChild(div);
        }
    };

    window._load_script = function (url, callback) {
        var head = document.querySelector('head');
        var script = document.createElement('script');
        var r = false;
        script.type = 'text/javascript';
        script.charset = 'utf-8';
        script.src = url;
        if (callback) {
            script.onload = script.onreadystatechange = function () {
                if (!r && (!this.readyState || this.readyState == 'complete')) {
                    r = true;
                    callback();
                }
            };
        }
        head.appendChild(script);
    };
}
