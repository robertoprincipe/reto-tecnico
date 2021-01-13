import axios from 'axios';
import * as path from './path';

const absolutePath = (_path: string) => {
    return path.HOST + _path;
}

/*
const header = () => {
    const bearer = `Bearer ${localStorage.getItem('auth_token')}`;
    return {
        headers:{
            'Authorization': bearer,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    }
}
*/

export const dataUser = () => {
    return new Promise((resolve, reject) => {
        const _absolutePath = absolutePath(path.DATA_USER);
        //const _header = header();
        //const body = { id };
        //axios.post(_absolutePath, body, _header).then((res: any) => {
        axios.post(_absolutePath).then((res: any) => {            
            resolve(res);
        }).catch((err: any) => {
            reject(err);
        })
    });
}