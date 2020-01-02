// ajax request helper
function get(url, api = false) {

    return new Promise(function(resolve, reject) {
        let req = new XMLHttpRequest();

        req.open('GET', url);

        // set headers
        if (api) {
            req.setRequestHeader('Accept', 'application/json');
        }

        req.onload = function() {
            if (req.status == 200) {
                resolve(req.response);
            } else {
                reject(console.log(req.statusText));
            }
        };

        req.onerror = function() {
            reject(console.log('Network Error'));
        };

        req.send();
    });
}

const apiDomain = 'http://localhost:8044/';

const services = {
    getSlogans: () => {
        return get(`${apiDomain}api/slogans`);
    },
    addSlogan: (slogan) => {
        // param post
        //return post(`${apiDomain}/api/slogan`);
    },
    getSlogan: (id) => {
        return get(`${apiDomain}/api/slogan/${id}`);
    },
    deleteSlogan: (id) => {
        //return delete(`${apiDomain}/api/slogan/${id}`);
    }
};

export default services;
