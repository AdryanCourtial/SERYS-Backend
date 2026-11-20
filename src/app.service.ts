import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return { status: 'Ok', test_env: process.env.TEST_ENV ?? 'erreur' };
  }
}
