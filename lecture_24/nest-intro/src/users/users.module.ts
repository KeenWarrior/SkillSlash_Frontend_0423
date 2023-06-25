import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersGateway } from './users.gateway';

@Module({
  providers: [UsersGateway, UsersService]
})
export class UsersModule {}
