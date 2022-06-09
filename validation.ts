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

    }

    title(e: string) {

    }

    constructor() { } 
}