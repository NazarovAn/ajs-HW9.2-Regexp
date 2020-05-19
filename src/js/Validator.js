export default class Validator {
  constructor() {
    this.result = '';
  }

  validateUsername(name) {
    if (!name.search(/[a-z]/i)) {
      this.result = name;
    } else {
      throw new Error('Имя должно начинаться с буквы латинского алфавита');
    }

    if (!name.match(/\d$|\d{4}/)) {
      this.result = name;
    } else {
      throw new Error('Имя не должно содержать больше трёх цифр подряд или заканчиваться цифрой');
    }

    if (!name.match(/[\s$!@#%^&*?!.,'":;~`]|[а-я]/)) {
      this.result = name;
    } else {
      throw new Error('Имя не должно содержать кирилицу, пробелы, а так же символы $!@#%^&*?!.,\'":;~`');
    }

    return this.result;
  }
}
