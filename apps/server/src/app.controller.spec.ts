import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return user data', async () => {
      const user = await appController.getUser();

      expect(user).toEqual({
        id: 1,
        fullName: 'John Doe',
        isAccountConfirmed: true,
      });
    });
  });
});
