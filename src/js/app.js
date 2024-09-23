export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [400, 'Некорректный запрос'],
      [404, 'Не найдено'],
      [500, 'Bнутренняя ошибка сервера'],
    ]);
  }

  translate(code) {
    if (!this.errors.has(code)) {
      return 'Unknown error';
    }

    return this.errors.get(code);
  }
}
