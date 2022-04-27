import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculateSalary'
})
export class CalculateSalaryPipe implements PipeTransform {

  getSalary(skillLevel:number,salary:number=1):number
  {
    if(skillLevel<2) {
      return salary;
    }
    return this.getSalary(skillLevel-1,salary*skillLevel);
  }

  transform(skill: number): number {
    console.log("Calculating Salary",)
    return this.getSalary(skill);
  }

}
