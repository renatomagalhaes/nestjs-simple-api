import { HttpException, Injectable } from '@nestjs/common';
import { COURSES } from './courses.mock';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CoursesService {
  courses = COURSES;

  createCourse(course): Promise<any> {
    return new Promise(resolve => {
      this.courses.push(course);
      resolve(this.courses)
    })
  }

  getCourses(): Promise<any> {
    return new Promise(resolve => {
      resolve(this.courses);
    })
  }

  getCourse(courseId: number): Promise<any> {
    let id = Number(courseId);
    return new Promise(resolve => {
      const course = this.courses.find(course => course.id === id)
      if (!course) {
        throw new HttpException(`O curso com esse ID #${id} não existe!`, 404);
      }
      resolve(course);
    })
  }

  updateCourse(courseId: number, updateCourseDto: UpdateCourseDto) {
    return `This action updates a #${courseId} course`;
  }

  removeCourse(courseId: number): Promise<any> {
    let id = Number(courseId);
    return new Promise(resolve => {
      let index = this.courses.findIndex(course => course.id === id);
      if (index === -1) {
        throw new HttpException(`O curso com esse ID #${id} não existe`, 404);
      }
      this.courses.splice(index, 1);
      resolve(this.courses)
    })
  }
}
