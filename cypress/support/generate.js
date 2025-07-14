import { faker } from '@faker-js/faker';

function generateUser() {
  const randomNumber = Math.random().toString().slice(2, 6);
  const rawUsername = faker.internet.userName();
  const cleanUsername = rawUsername.replace(/[^a-zA-Z0-9_]/g, '');
  const username = `${cleanUsername}_${randomNumber}`;
  const email = `${username}@mail.com`;
  const password = '12345Qwert!';

  return { email, password, username };
}

export { generateUser };
