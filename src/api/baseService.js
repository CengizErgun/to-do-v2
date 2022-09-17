import axios from "axios";
import { API_URL } from "../env/config";

export const baseService = {

    getAll: async (url) => {

        let response = [];
        await axios.get(API_URL + url)
            .then((res) => {
                response = res.data;
            })
            .catch((err) => {
                console.log('Error', err);
            });

        return response;

    },
    getById: async (url, id) => {

        let response = {};
        await axios.get(API_URL + url + "/" + id)
            .then((res) => {
                response = res.data;
            })
            .catch((err) => {
                console.log('Error', err);
            });

        return response;

    },
    delete: async (url, id) => {

        let response = {};

        await axios.delete(API_URL + url + "/" + id)
            .then((res) => {
                response = res.data;
            })
            .catch((err) => {
                console.log('Error', err);
            })

        return response
    },
    add: async (url, data) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                isCompleted: false,
                content: data
            })
        };
        const response = await fetch(API_URL + url, requestOptions);
        const result = await response.json();
        return result
    },

    update: async (url, id, data, content) => {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                ...data,
                content: content
                })
        };
        const response = await fetch(API_URL + url + '/' + id, requestOptions)
        const result = await response.json() 
        return result
    }

}