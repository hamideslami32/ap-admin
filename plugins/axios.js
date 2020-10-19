import BaseApi from "@/api/baseApi"

export default function (ctx) {
    BaseApi.prototype.axios = ctx.$axios
}
