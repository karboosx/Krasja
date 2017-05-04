/**
 * Created by Rafal on 04.05.2017.
 */

export default {
  data: {},
  getData (vue) {
    if (JSON.stringify(this.data) === '{}') {
      vue.$http.get('static/json/data.json').then(response => {
        this.data = response.body
      })
    }
  }
}
