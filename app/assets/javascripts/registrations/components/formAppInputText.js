Vue.component('form-app-input-text', {
  template: '<div>' +
    '<div><input type="text" v-model="inputValue" class="form-control" :placeholder="placeholder"></div>' +
    '<small class="text-danger" v-if="/Kana$/.test(column)" v-show="!validationKana">カタカナで入力してください</small>' +
    '<small class="text-danger" v-else v-show="!validationPresence">入力してください</small>' +
    '</div>',
  props: {
    column: String,
    user: Object,
    placeholder: String
  },
  data: function () {
    return {
      inputValue: ''
    }
  },
  computed: {
    validationPresence: function () {
      this.user[this.column] = this.inputValue.trim();
      this.$emit('update-status-from-child', this.user);
      return this.inputValue.trim();
    },
    validationKana: function () {
      var kanaPattern = /^[\u30a0-\u30ff]+$/;
      var result = kanaPattern.test(this.inputValue.trim());
      this.user[this.column] = result;
      this.$emit('update-status-from-child', this.user);
      return result;
    }
  }
});
