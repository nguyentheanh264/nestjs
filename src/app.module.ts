import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseEntity } from './course/course.entity/course.entity';
import { CourseModule } from './course/course.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'backend_nestjs',
      entities: [CourseEntity],
      synchronize: true, // migration
    }),
    CourseModule,
  ],
})
export class AppModule {}
