//Totsugeki
export class validation {

    username(u: string) {
        const rExp: RegExp = /Hello/;
        if(rExp.test(u) === true) {
            return true;
        } else {
            return false;
        }
    }

    email(e: string) {

    }

    password(p: string) {
        if(p.length < 8) {
            return false;
        } 
    }

    title(e: string) {

    }

    constructor() { } 
}