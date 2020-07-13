const unprotectedUrls = ['/login', '/register']
const COOKIE_TOKEN = 'token'

export default function(ctx) {
    const path = ctx.route.path
    const token = ctx.$storage.getCookie(COOKIE_TOKEN)

    const isProtected = !unprotectedUrls.includes(path)
    if (!token && isProtected) {
        ctx.redirect(302, '/login')
    }
    if (token && !isProtected) {
        ctx.redirect(302, '/')
    }
}