import { normalizePath } from '~/utils/helpers'

const unprotectedUrls = ['/login', '/register', '/login/otp']
const COOKIE_TOKEN = 'token'

export default function(ctx) {
    let path = ctx.route.path
    const token = ctx.$storage.getCookie(COOKIE_TOKEN)

    path = normalizePath(path)

    const isProtected = !unprotectedUrls.includes(path)

    if (!token && isProtected) {
        ctx.redirect(302, '/login/otp')
    } else if (token && !isProtected) {
        ctx.redirect(302, '/')
    }
}
