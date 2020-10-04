import dayjs from 'dayjs'

export class Order {
  constructor(order) {
      this.order = order
  }

  get firstOrder() {
    return this.order.orderItems[0]
  }

  get issueDate() {
    return dayjs(this.order.createdAt).format('YYYY/MM/DD')
  }

  get price() {
    let price = 0
    this.order.orderItems.forEach(order => {
      price += order.price
    })

    return price
  }

}
