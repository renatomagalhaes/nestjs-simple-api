import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Post()
  async createCourse(@Body() createCourseDto: CreateCourseDto) {
    const course = await this.coursesService.createCourse(createCourseDto);
    return course;
  }

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

  @Patch(':courseId')
  updateCourse(@Param('courseId') courseId: string, @Body() updateCourseDto: UpdateCourseDto) {
    return this.coursesService.updateCourse(+courseId, updateCourseDto);
  }

  @Delete(':courseId')
  async removeCourse(@Param('courseId') courseId: string) {
    const courses = await this.coursesService.removeCourse(+courseId);
    return courses;
  }
}
