import 'whatwg-fetch';

let http = {
    Ajax: function (url, options) {
        return fetch(url, {
            body: JSON.stringify(options.data),
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
            },
            method: 'POST',
            mode: 'cors',
            redirect: 'follow',
            referrer: 'no-referrer'
        }).then(response => {
            return response.json();
        }).catch((err) => {
            console.log(err);
        });
    }
};

export default http;