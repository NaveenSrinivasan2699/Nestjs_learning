import { Module } from '@nestjs/common';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';

@Module({
  controllers: [StudentController, StudentController],
  providers: [StudentService, StudentService],
})
export class StudentModule {}
