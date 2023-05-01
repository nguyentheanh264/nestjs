import {
  Body,
  Controller,
  Post,
  Param,
  Put,
  Get,
  Delete,
  Query,
} from '@nestjs/common';
import { CourseDto } from './course.dto';
import { CourseService } from './course.service';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Post()
  createCourse(@Body() course: CourseDto): Promise<CourseDto> {
    return this.courseService.save(course);
  }

  @Put('/:id')
  updateCourse(
    @Param('id') id: string,
    @Body() course: CourseDto,
  ): Promise<{ result: string }> {
    return this.courseService.update(id, course);
  }

  @Get('/:id')
  getById(@Param('id') id: number) {
    return this.courseService.findOne(id);
  }

  @Get()
  findAll(@Query() { page, size }) {
    return this.courseService.findAll({ page, size });
  }

  @Delete('/:id')
  deleteCourseById(@Param('id') id: number) {
    return this.courseService.softDelete(id);
  }
}
