import { Controller, Delete, Get, Patch, Post, Req, Res } from "@nestjs/common";
import { AppService } from "./app.service";
import { TempService } from "./temp.service";
import { response } from "express";

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly tempService: TempService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/temp")
  getTempHello(): string {
    return this.tempService.getTempHello();
  }

  @Post("/")
  addSomething(@Req() request: Request): String {
    console.log(request.body);
    return JSON.stringify(request.body);
  }
}
