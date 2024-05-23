import axios from "axios";

export interface HttpAdapter{
    get<T>(url: string):Promise<T>;
}

export class PokeApiFetchAdapter implements HttpAdapter{
    async get<T>(url: string) {
        const resp = await fetch(url);
        const data:T = await resp.json();
        return data;
    }
}


export class PokeapiAdapter implements HttpAdapter {
    private readonly axios = axios

    async get<T>(url: string) {
        //peticion get
        const { data } = await this.axios.get<T>(url);
        return data;
    }

    // async post(url: string, data: any) {
    //     //peticion post
    //     return;
    // }

    // async patch(url: string, data: any) {
    //     //peticion post
    //     return;
    // }

    // async delete(url: string) {
    //     //peticion post
    //     return;
    // }

}