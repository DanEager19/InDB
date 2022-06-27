export class Validate {
    constructor() { } 

    public username(u: string): string[] {
        let result: string[] = ['', '']
        const rExp: RegExp = /^[a-zA-Z0-9.-_]$/;

        if (u.length < 5) {
            result[0] = 'Username must be at least 4 characters';
        }
        if (!rExp.test(u)) {
            result[1] ='Username invalid. Can only contain letters, numbers, periods, dashes, or underscores.';
        } 

        return result;
    }

    public email(e: string): string {
        const rExp: RegExp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(!rExp.test(e)) {
            return 'Please enter a valid email';
        } else {
            return '';
        }
    }

    public password(p: string): string[] {
        /*
        for (let i in passwords) {
            if(passwords[i] != '') {
                console.log(passwords[i]);
            }
        }
        */
        let result: string[] = ['', '', '', ''];
        const rExpLetter: RegExp = /\w/,
            rExpDigit: RegExp = /\d/,
            rExpSpecial: RegExp = /[!@#%&|?]/;
        
        if (p.length < 9) {
            result[0] = 'Password must be at least 8 characters.';
        }
        if (!rExpLetter.test(p)) {
            result[1] = 'Password must contain at least one letter.';
        }
        if (!rExpDigit.test(p)) {
            result[2] = 'Password must contain at least one digit.';
        }
        if (!rExpSpecial.test(p)) {
            result[3] = 'Password must contain one ! @ # % & | or ?.';
        }

        return result;
    }

    public id(i: string): string {
        const rExp: RegExp = /^[a-z0-9_]$/
        if (!rExp.test(i)) {
            return 'ID can only contain lowercase letters, numbers, and underscores.';
        } else {
            return '';
        }
    }

    public link(l: string): string {
        const rExp: RegExp = /^[a-z0-9-]$/;
        if (!rExp.test(l)) {
            return 'ID can only contain lowercase letters, numbers, and dashes.';
        } else {
            return '';
        }
    }
    public empty(e: string): string {
        if (e === '' || e === null) {
            return 'Input cannot be empty';
        } else {
            return '';
        }
    }
}
