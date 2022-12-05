import capitalize from "../index.js";

if (capitalize('hello') !== 'ello') {
  throw new Error ('Функция работает не иерно!');
}
