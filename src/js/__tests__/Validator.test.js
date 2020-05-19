import Validator from '../Validator';

describe('Validator', () => test.each([
  ['skyWalker', 'skyWalker', 'skyWalker'],
  ['AR4ANGEL', 'AR4ANGEL', 'AR4ANGEL'],
  ['AL', 'AL', 'AL'],
  ['C3PO', 'C3PO', 'C3PO'],
  ['E-two-E-four', 'E-two-E-four', 'E-two-E-four'],
  ['OB-_-1-_-CannotB', 'OB-_-1-_-CannotB', 'OB-_-1-_-CannotB'],
  ['ma573r', 'ma573r', 'ma573r'],
  ['e404pagen0tf0und', 'e404pagen0tf0und', 'e404pagen0tf0und'],
  ['Kai10_00Ren', 'Kai10_00Ren', 'Kai10_00Ren'],
])(
  ('name = %s'),
  (level, name, result) => {
    const test = new Validator();
    expect(test.validateUsername(name)).toBe(result);
  },
));

describe('Validator fail', () => test.each([
  ['#8)', '#8)', new Error('Имя должно начинаться с буквы латинского алфавита')],
  ['_Osip Zahar_', '_Osip Zahar_', new Error('Имя должно начинаться с буквы латинского алфавита')],
  ['_E2_', '_E2_', new Error('Имя должно начинаться с буквы латинского алфавита')],
  ['R2D2', 'R2D2', new Error('Имя не должно содержать больше трёх цифр подряд или заканчиваться цифрой')],
  ['антон', 'антон', new Error('Имя должно начинаться с буквы латинского алфавита')],
  ['Kai1000Ren', 'Kai1000Ren', new Error('Имя не должно содержать больше трёх цифр подряд или заканчиваться цифрой')],
  ['bантон', 'bантон', new Error('Имя не должно содержать кирилицу, пробелы, а так же символы $!@#%^&*?!.,\'":;~`')],
  ['R2D R2D', 'R2D R2D', new Error('Имя не должно содержать кирилицу, пробелы, а так же символы $!@#%^&*?!.,\'":;~`')],
  ['e404pag$en0tf0sund', 'e404pag$en0tf0sund', new Error('Имя не должно содержать кирилицу, пробелы, а так же символы $!@#%^&*?!.,\'":;~`')],
])(
  ('name = %s'),
  (level, name, result) => {
    const test = new Validator();
    expect(() => test.validateUsername(name)).toThrow(result);
  },
));
