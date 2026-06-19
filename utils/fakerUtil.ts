import { faker } from '@faker-js/faker';
import type { RegisterUser } from '../pages/RegisterPage';

export class FakerUtil {
  static getRandomEmail(): string {
    return faker.internet.email().toLowerCase();
  }

  static getRandomPassword(): string {
    return faker.internet.password({ length: 12, memorable: true, pattern: /[A-Za-z0-9!@#\$%\^&\*]/ });
  }

  static createRegisterUser(): RegisterUser {
    return {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: this.getRandomEmail(),
      telephone: faker.string.numeric(10),
      password: this.getRandomPassword(),
      subscribe: true,
    };
  }
}
