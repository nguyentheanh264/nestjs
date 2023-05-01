import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const PORT = 3333;
  await app.listen(PORT, () => {
    console.log(`app start with port ${PORT}`);
  });
}

bootstrap();
