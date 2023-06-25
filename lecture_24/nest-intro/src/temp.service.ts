import { Injectable } from '@nestjs/common';

@Injectable()
export class TempService {
  getTempHello(): string {
    return 'Hello my Temp World!';
  }
}
