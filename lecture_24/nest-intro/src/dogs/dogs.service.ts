import { Injectable } from "@nestjs/common";
import { CreateDogDto } from "./dto/create-dog.dto";
import { UpdateDogDto } from "./dto/update-dog.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Dog } from "./entities/dog.entity";
import { Model } from "mongoose";

@Injectable()
export class DogsService {
  constructor(@InjectModel(Dog.name) private dogModel: Model<Dog>) {}

  create(createDogDto: CreateDogDto): Promise<Dog> {
    return this.dogModel.create(createDogDto);
  }

  findAll(): Promise<Dog[]> {
    return this.dogModel.find();
  }

  findOne(id: string): Promise<Dog> {
    return this.dogModel.findById(id);
  }

  update(id: string, updateDogDto: UpdateDogDto): Promise<Dog> {
    return this.dogModel.findByIdAndUpdate(id, updateDogDto, {
      new: true,
    });
  }

  remove(id: string) {
    return this.dogModel.findByIdAndRemove(id);
  }
}
