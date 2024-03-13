interface User {
    readonly dbId: number
    email: string,
    userId: number
    googleId?: string,
    startTrial: () => string
    // startTrial() : string
    getCoupon(couponname: string, value: number): number
}

// reopeing interface
interface User {
    githubToken: string
}

// inheritance
interface Admin extends User {
    role: 'admin' | 'ta' | 'learner'
}

const mahir: User = {
    email: 'ma@ma.com',
    userId: 2211,
    dbId: 22,
    githubToken: 'abc',
    startTrial: () => {
        return 'trial started'
    },
    getCoupon: (name: 'mahir', off: 10) => {
        return 10
    }
}

mahir.email = 'bla@blah.com'

const sahir: Admin = {
    email: 'ma@ma.com',
    userId: 2211,
    dbId: 22,
    githubToken: 'abc',
    startTrial: () => {
        return 'trial started'
    },
    getCoupon: (name: 'mahir', off: 10) => {
        return 10
    },
    role: 'admin'
}
