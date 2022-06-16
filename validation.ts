//Totsugeki
export class validate {

    username(u: string): boolean {
        const rExp: RegExp = /^[a-zA-Z0-9.-]$/;
        return rExp.test(u);
    }

    email(e: string): boolean {
        const rExp: RegExp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return rExp.test(e)
    }

    password(p: string): boolean {
        const rExp: RegExp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]$/;
        return rExp.test(p);
    }

    id(i: string) {

    }

    title(t: string) {

    }

    link(l: string): boolean {
        const rExp: RegExp = /^[a-z0-9-]$/;
        return rExp.test(l);
    }

    date(d: string) {
        const rExp: RegExp = /^(\d{2},?)+\/+(\d{2},?)+\/+(\d{4},?)$/
        return rExp.test(d);
    }

    other(o: string) {

    }

    constructor() { } 
}

