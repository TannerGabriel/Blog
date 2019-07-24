import { Controller, Get, Post, UseInterceptors, UploadedFile, UploadedFiles, Res, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  @UseInterceptors(FilesInterceptor('image'))
  UploadedFile(@UploadedFiles() file) {
    console.log(file);
  }

  @Get(':imgpath')
  seeUploadedFile(@Param('imgpath') image, @Res() res) {
    return res.sendFile(image, {root: 'files'});
  }
}
