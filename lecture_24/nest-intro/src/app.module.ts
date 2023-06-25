import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { DogsModule } from "./dogs/dogs.module";
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://localhost:27017/nestjsdemo"),
    DogsModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
