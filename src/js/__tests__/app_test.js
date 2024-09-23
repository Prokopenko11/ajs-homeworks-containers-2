import ErrorRepository from '../app';

test('testing translate method', () => {
  const errors = new ErrorRepository();
  const result = errors.translate(500);
  expect(result).toBe('Bнутренняя ошибка сервера');
});

test('testing translate method whith unknown code', () => {
  const errors = new ErrorRepository();
  const result = errors.translate(501);
  expect(result).toBe('Unknown error');
});
