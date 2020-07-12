const unprotectedUrls = ['/login', '/register']
const COOKIE_TOKEN = 'token'

export default function(ctx) {
    const path = ctx.route.path
    const token = ctx.$storage.getCookie(COOKIE_TOKEN)

    if (!unprotectedUrls.includes(path) && !token) {
        ctx.redirect(302, '/login')
    } else if (unprotectedUrls.includes(path) && token) {
        ctx.redirect(302, '/')
    }
}