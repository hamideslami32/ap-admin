import Vue from 'vue'
import { Flight } from '~/script/models/Flight'
import { Order } from '~/script/models/Order'

class Orders {

    constructor(ctx) {
        this.axios = ctx.app.$axios
        this.redirect = ctx.redirect
        this.orders = null
        this.order = null
    }

    async getOrders(limit = 20, offset = 0) {
      let message = {}
      try {
          let orders = await this.axios.$get('/order/all', {
            params: {
              limit,
              offset
            }
          })

          orders = orders.map(order => new Order(order))

          orders.forEach(order => {
            order.order.orderItems.forEach(item => {
              item.flights = item.flights.map(flight => new Flight(flight))
            })
          })

          this.orders = orders
          message.status = 'success'
          message.text = 'orders is ready'
      } catch (error) {
            console.log({error})
            message.status = 'error'
            message.text = 'something is wrong'
      }
      return message
    }

    async getOrder(orderId) {
      let message = {}
      try {
          let order = await this.axios.$get(`/order/${orderId}`)

          order = new Order(order)

          order.orderItems.forEach(item => {
            item.flights = item.flights.map(flight => new Flight(flight))
          })

          this.order = order

          message.status = 'success'
          message.text = 'order is ready'
      } catch (error) {
            console.log({error})
            message.status = 'error'
            message.text = 'something is wrong'
      }
      return message
    }

    orders() {
      return this.orders
    }

}

export default async function (ctx, inject) {
    const orders = Vue.observable(new Orders(ctx))
    inject('orders', orders)
}
