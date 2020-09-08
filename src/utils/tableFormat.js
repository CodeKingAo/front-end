import http from '../common/http'
const formatObj = {}
export default {
  methods: {
    getTableFormatData(code) {
      http.api({
        root: APP_HTTP_ROOT_ADMIN,
        url: "/sys/dict/queryByCode",
        method: "GET",
        params: {
          code
        },
        successCallback: res => {
          if (res.code == 0) {
            formatObj[code] = res.list;
          } else {
            // console.log(res.msg)
          }
        }
      });
    },
    formatCode(code, row, column, cellValue, index) {
      if (!formatObj[code]) return ''
      let data = formatObj[code].filter(item => item.value == cellValue)
      if (data.length) {
        return data[0].name
      } else {
        return ''
      }
    }
  }
}