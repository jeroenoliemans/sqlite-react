// ajax request helper
function get(url, type = 'GET', data) {
    return new Promise((resolve, reject) => {
        let req = new XMLHttpRequest();

        req.open(type, url, true);
        req.setRequestHeader('Accept', 'application/json');
        req.setRequestHeader("Content-type", "application/json");
        
        req.onload = () => {
            if (req.status == 200) {
                resolve(req.response);
            } else {
                reject(console.log(req.statusText));
            }
        };

        req.onerror = () => {
            reject(console.log('Network Error'));
        };

        (type === 'POST' || type === 'PUT') ? req.send(JSON.stringify(data)) : req.send();
    });
}

const apiDomain = 'http://localhost:8044/';

const services = {
    getSlogans: () => {
        return get(`${apiDomain}api/slogans`);
    },
    addSlogan: (slogan) => {
        return get(`${apiDomain}api/slogan`, 'POST', {slogan: slogan});
    },
    updateSlogan: (dbId, newSloganText) => {
        return get(`${apiDomain}api/slogan/${dbId}`, 'PUT', {slogan: newSloganText});
    },
    getSlogan: (dbId) => {
        return get(`${apiDomain}api/slogan/${dbId}`);
    },
    deleteSlogan: (dbId) => {
        return get(`${apiDomain}api/slogan/${dbId}`, 'DELETE');
    }
};

export default services;
