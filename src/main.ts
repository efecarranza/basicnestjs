import { NestFactory } from '@nestjs/core';
import { Controller, Module, Get } from '@nestjs/common';

@Controller()
class AppController {
  @Get()
  getRootRoute() {
    return '404 Page Not Found';
  }
}

@Module({
  controllers: [AppController],
})
class AppModule {

}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(3000);
}

bootstrap();

