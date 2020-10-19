import dayjs from 'dayjs'

export class Order {
    constructor(order) {
        Object.assign(this, order)
    }

    get firstOrder() {
        return this.orderItems[0]
    }

    get issueDate() {
        return dayjs(this.createdAt).format('YYYY/MM/DD')
    }

    get price() {
        let price = 0
        this.orderItems.forEach(order => {
            price += order.price
        })

        return price
    }
}
