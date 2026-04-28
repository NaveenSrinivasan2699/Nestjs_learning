import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentService {
    getStudent():string{
        return "service enabled"
    }
}
