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
    }
]
