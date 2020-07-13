const unprotectedUrls = ['/login', '/register']
const COOKIE_TOKEN = 'token'

export default function(ctx) {
    let path = ctx.route.path
    const token = ctx.$storage.getCookie(COOKIE_TOKEN)

    function normalize (p) {
        const regex = /\/$/gm
        const subst = ''
        
        const result = p.replace(regex, subst)
        
        return result
    }
    
    path = normalize(path)

    const isProtected = !unprotectedUrls.includes(path)

    if (!token && isProtected) {
        ctx.redirect(302, '/login')
    } else if (token && !isProtected) {
        ctx.redirect(302, '/')
    }
}