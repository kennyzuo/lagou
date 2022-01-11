import Vue from "vue"
import dayjs from "dayjs"

// {{ exp | filter }}
Vue.filter("date", (val, format = "YYYY-MM-DD hh:mm:ss") => {
  return dayjs(val).format(format)
})
