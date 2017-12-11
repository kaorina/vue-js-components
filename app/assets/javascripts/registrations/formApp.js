$(function () {
  new Vue({
    el: '#registrations-app',
    data: {
      user: {
        type: Object
      },
      status: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      updateStatus: function () {
        var _this = this;
        _this.status = Object.keys(_this.user).every(function (key) {
          return _this.user[key];
        });
      }
    }
  });
});
