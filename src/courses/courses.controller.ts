import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  // @Post()
  // createCourse(@Body() createCourseDto: CreateCourseDto) {
  //   return this.coursesService.createCourse(createCourseDto);
  // }

  @Get()
  async getCourses() {
    const courses = await this.coursesService.getCourses();
    return courses;
  }

  @Get(':courseId')
  async getCourse(@Param('courseId') courseId: string) {
    const course = await this.coursesService.getCourse(+courseId);
    return course;
  }

  // @Patch(':courseId')
  // updateCourse(@Param('courseId') courseId: string, @Body() updateCourseDto: UpdateCourseDto) {
  //   return this.coursesService.updateCourse(+courseId, updateCourseDto);
  // }

  @Delete(':courseId')
  async removeCourse(@Param('courseId') courseId: string) {
    const courses = await this.coursesService.removeCourse(+courseId);
    return courses;
  }
}
