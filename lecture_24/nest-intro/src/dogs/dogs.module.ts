import { Module } from '@nestjs/common';
import { DogsService } from './dogs.service';
import { DogsController } from './dogs.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Dog } from './entities/dog.entity';
import { DogSchema } from './schemas/dog.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Dog.name, schema: DogSchema }])],
  controllers: [DogsController],
  providers: [DogsService]
})
export class DogsModule {}
