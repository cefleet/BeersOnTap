//potentially this can cannot to a db or any other source and it only needs to be changed here.
import {server} from "./config";

console.log(window.location.href);

let url = server;
if(!window.location.href.includes("file:") && server !== window.location.href){
    url = window.location.href;
}

const Store = () => {
    const updateItems = (resource, body, callback) => {
        fetch(`${url}${resource}`, {
            method: 'post',
            body: JSON.stringify(body),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(function (response) {
            return response.json();
        })
            .then(callback);
    }

    const getItems = (resource, callback) => {
        fetch(`${url}${resource}`)
            .then(function (response) {
                return response.json();
            })
            .then(callback);
    }
    return { updateItems, getItems }
}

export default Store;
