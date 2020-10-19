import {Order} from "@/script/models/Order"
import {Flight} from "@/script/models/Flight"
import BaseApi from "@/api/baseApi"

export const orderApi = new class OrderApi extends BaseApi {
    getOrders(limit = 20, offset = 0) {
        return this.axios.$get('/order/all', {
            params: {
                limit,
                offset
            }
        }).then(res => {
            res.items = res.items.map(order => {
                order.orderItems.forEach(item => {
                    item.flights = item.flights.map(flight => new Flight(flight))
                })
                return new Order(order)
            })
            return res
        })
    }

    getOrder(orderId) {
        return this.axios.$get(`/order/${orderId}`).then(res => {
            res.orderItems.forEach(item => {
                item.flights = item.flights.map(flight => new Flight(flight))
            })
            return new Order(res)
        })
    }
}
