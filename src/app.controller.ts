import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getRootRoute() {
    return '404 Page Not Found';
  }

  @Get('/bye')
  getByeThere() {
  	return 'Bai!';
  }
}
