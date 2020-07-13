const unprotectedUrls = ['/login/','/login', '/register/', '/register']
const COOKIE_TOKEN = 'token'

export default function(ctx) {
    const path = ctx.route.path
    const token = ctx.$storage.getCookie(COOKIE_TOKEN)

    const isProtected = !unprotectedUrls.includes(path)
    console.log({path})
    console.log({isProtected})
    if (!token && isProtected) {
        console.log('redirect to login')
        ctx.redirect(302, '/login')
    } else if (token && !isProtected) {
        console.log('redirect to home')
        ctx.redirect(302, '/')
    }
}