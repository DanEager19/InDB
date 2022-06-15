//Totsugeki
export class validate {

    username(u: string) {
        const rExp: RegExp = /Hello/;
        if(rExp.test(u) === true) {
            return true;
        } else {
            return false;
        }
    }

    email(e: string): boolean {
        const rExp: RegExp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return rExp.test(e)
    }

    password(p: string): string {
        if(p.length < 8) {
            return "Password Length Insufficent. Please provide a password at least 8 characters long.";
        } 
    }

    id(i: string) {

    }

    title(t: string) {

    }

    link(l: string) {

    }

    date(d: string) {

    }

    other(o: string) {

    }

    constructor() { } 
}