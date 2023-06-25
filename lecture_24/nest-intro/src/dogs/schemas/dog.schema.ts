import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type DogDocument = HydratedDocument<Dog>;

@Schema()
export class Dog {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;
}

export const DogSchema = SchemaFactory.createForClass(Dog);
