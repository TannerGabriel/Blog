import { Controller, Get, Post, UseInterceptors, UploadedFile, UploadedFiles, Res, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

const imageFileFilter = (req, file, callback) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    return callback(new Error('Only image files are allowed!'), false);
  }
  callback(null, true);
};

const editFileName = (req, file, cb) => {
  const name = file.originalname.split('.')[0];
  const fileExtName = extname(file.originalname);
  const randomName = Array(4).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
  cb(null, `${name}-${randomName}${fileExtName}`);
};

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  @UseInterceptors(FileInterceptor('image', {
    storage: diskStorage({
      destination: './files',
      filename: editFileName,
    }),
    fileFilter: imageFileFilter,
  }))
  async uploadedFile(@UploadedFile() file) {
    const response = {
      originalname: file.originalname,
      filename: file.filename,
    };
    return response;
  }

  @Post('multiple')
  @UseInterceptors(FilesInterceptor('image', 20, {
    storage: diskStorage({
      destination: './files',
      filename: editFileName,
    }),
    fileFilter: imageFileFilter,
  }))
  async uploadMultipleFiles(@UploadedFiles() files) {
    const response = [];
    files.forEach(file => {
      const fileReponse = {
        originalname: file.originalname,
        filename: file.filename,
      };
      response.push(fileReponse);
    });
    return response;
  }

  @Get(':imgpath')
  seeUploadedFile(@Param('imgpath') image, @Res() res) {
    return res.sendFile(image, {root: './files'});
  }
}
