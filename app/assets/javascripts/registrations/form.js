$(function () {
  new Vue({
    el: '#registrations',
    data: {
      user: {
        familyName: '',
        firstName: '',
        familyNameKana: '',
        firstNameKana: ''
      },
      address: {
        zipCode3digit: '',
        zipCode4digit: '',
        prefecture: '',
        city: '',
        buildingName: ''
      }
    },
    computed: {
      isValid: function () {
        var validation = this.validation;
        return Object.keys(validation).every(function (key) {
          return validation[key];
        });
      },
      validation: function () {
        var user = this.user;
        var address = this.address;
        var kanaPattern = /^[\u30a0-\u30ff]+$/;
        return {
          name: user.familyName.trim() && user.firstName.trim(),
          furigana: kanaPattern.test(user.familyNameKana.trim()) && kanaPattern.test(user.firstNameKana.trim()),
          zipCode: this.validationZipcode,
          address: address.prefecture.trim() && address.city.trim() && address.buildingName.trim()
        };
      },
      validationZipcode: function () {
        var zipCode3 = this.address.zipCode3digit.trim();
        var zipCode4 = this.address.zipCode4digit.trim();
        var p = /^\d+$/;
        return (p.test(zipCode3) && p.test(zipCode4)) && (zipCode3.length === 3 && zipCode4.length === 4);
      }
    }
  });
});
