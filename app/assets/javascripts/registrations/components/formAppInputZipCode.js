Vue.component('input-zip-code', {
  template: '<div>' +
    '<div><input type="text" v-model="zipCode" class="form-control" :placeholder="placeholder"></div>' +
    '<small class="text-danger" v-show="!validationZipCode">正しい形式で入力してください</small>' +
    '</div>',
  props: {
    column: String,
    user: Object,
    placeholder: String
  },
  data: function () {
    return {
      zipCode: ''
    }
  },
  computed: {
    validationZipCode: function () {
      var zipCode = this.zipCode.trim();
      var digit = (this.column === 'zipCode3digit') ? 3 : 4;
      var pattern = /^\d+$/;
      var result = (pattern.test(zipCode) && zipCode.length === digit);
      this.user[this.column] = result;
      this.$emit('update-status-from-child', this.user);
      return result;
    }
  }
});
