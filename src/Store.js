//potentially this can cannot to a db or any other source and it only needs to be changed here.
import {server} from "./config";

const Store = () => {
    const updateItems = (resource, body, callback) => {
        fetch(`${server}/${resource}`, {
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
        fetch(`${server}/${resource}`)
            .then(function (response) {
                return response.json();
            })
            .then(callback);
    }
    return { updateItems, getItems }
}

export default Store;
