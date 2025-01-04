import { Component } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent {
    radius:number=0;
    result:number=0
    

    submit1()
{         
          this.result=2*(this.radius);
          
    }

    submit2()
{         
          this.result=2*3.14*(this.radius);
          
    }
    submit3()
{         
          this.result=3.14*(this.radius*this.radius);
          
    }
}
