export default [
    {
        title: 'Home',
        to: '/',
        icon: 'mdi-home'
    },
    {
        divider: true,
        title: 'Orders'
    },
    {
        title: 'Orders',
        icon: 'mdi-file-document-outline',
        to: '/orders',
        children: [
            {
                title: 'Flight',
                to: '/orders/flight',
            },
            {
                title: 'Hotel',
                to: '/orders/hotel'
            }
        ]
    },
    {
        title: 'Users',
        icon: 'mdi-account',
        children: [
            {
                title: 'Users',
                to: '/users',
            },
        ]
    },
    {
        title: 'Administration',
        icon: 'mdi-cog',
        children: [
            {
                title: 'Admins',
                to: '/admins',
            },
            {
                title: 'Roles',
                to: '/roles',
            }
        ]
    }
]
