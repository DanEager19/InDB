//Totsugeki
export class validate {

    public username(u: string): string {
        const rExp: RegExp = /^[a-zA-Z0-9.-_]{4,}$/;
        if (u.length < 5) {
            return 'Username must be at least 4 characters';
        } else if (!rExp.test(u)) {
            return 'Username invalid. Can only contain letters, numbers, periods, dashes, or underscores.'
        } else {
            return '';
        }
    }

    public email(e: string){
        const rExp: RegExp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(!rExp.test(e)) {
            return 'Please enter a valid email';
        } else {
            return '';
        }
    }

    password(p: string): any {
        const rExpLetter: RegExp = /\w/,
            rExpDigit: RegExp = /\d/,
            rExpSpecial: RegExp = /[!@#%&|?]/;
        
        let result: string[] = ['', '', '', '']
        
        if (p.length < 9) {
            result[0] = 'Password must be at least 8 characters.'
        }
        if (!rExpLetter.test(p)) {
            result[1] = 'Password must contain at least one letter.'
        }
        if (!rExpDigit.test(p)) {
            result[2] = 'Password must contain at least one digit.'
        }
        if (!rExpSpecial.test(p)) {
            result[3] = 'Password must contain one ! @ # % & | or ?.'
        }

        return result;
    }

    id(i: string) {

    }

    title(t: string) {

    }

    link(l: string) {
        const rExp: RegExp = /^[a-z0-9-]$/;
        return rExp.test(l);
    }

    date(d: string) {
        const rExp: RegExp = /^(\d{1,2})+\/+(\d{1,2})+\/+(\d{4})$/
        return rExp.test(d);
    }

    other(o: string) {

    }

    constructor() { } 
}

