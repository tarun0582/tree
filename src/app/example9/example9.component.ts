import { Component, OnInit,AfterViewInit,ChangeDetectorRef, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatRadioChange } from '@angular/material/radio';
import { OrgItemConfig, Enabled, PageFitMode, ConnectorAnnotationConfig, AnnotationType, Colors, ConnectorPlacementType, ConnectorShapeType, LineType, Size, FamItemConfig } from 'ngx-basic-primitives';
import { OpenModalComponent } from '../open-modal/open-modal.component';
import { HttpService } from '../core/services/http.service';

@Component({
  selector: 'app-example9',
  templateUrl: './example9.component.html',
  styleUrls: ['./example9.component.scss']
})
export class Example9Component implements OnInit,AfterViewInit{
  showGraph=true;
  ChangeDetector=inject(ChangeDetectorRef)
https: any;

  constructor(private dialogBox:MatDialog, private httpService:HttpService){
    this.httpService.getData().subscribe((res:any)=>{
      console.log(res,"backend data")
      this.chart_data =res?.data;
      console.log(this.chart_data,"items")
      const mapped = Object.keys(this.chart_data).map(key => ({type: key, value:this.chart_data[key]}));
      console.log(mapped[0].value)
      const modifiedEmployees = mapped[0].value.map((employee: { employeeId: any; mentorId: any; }) => {
     return {
      ...employee,
       id: employee.employeeId,
       employeeId: undefined,
       parents: employee.mentorId,
       mentorId: undefined
  };
});
console.log(modifiedEmployees,"modifiedEmployees")

      for(let i of modifiedEmployees){
      this.x= new FamItemConfig(i)
      
       this.items.push(this.x);

      }
        this.showGraph=true;
      console.log(this.items,"this is final data required")

    })


  }
  PageFitMode = PageFitMode;
  Enabled = Enabled;
  chart_data :any;
demo_img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIu7NVGB9njd1UdsO_qQTu85esp8JoMHVQjA&usqp=CAU'
  templateName = "md";
  scales = [
    {
      caption: "Extra Small",
      defaultTemplateName: "xs",
      normalLevelShift: 8,
      normalItemsInterval: 4
    },
    {
      caption: "Small",
      defaultTemplateName: "sm",
      normalLevelShift: 10,
      normalItemsInterval: 8,
    },
    {
      caption: "Medium",
      defaultTemplateName: "md",
      normalLevelShift: 120,
      normalItemsInterval: 120
    },
    {
      caption: "Large",
      defaultTemplateName: "lg",
      normalLevelShift: 14,
      normalItemsInterval: 16,
    },
    {
      caption: "Extra Large",
      defaultTemplateName: "xl",
      normalLevelShift: 16,
      normalItemsInterval: 20
    }
  ];
  defaultTemplateName = "md";
  normalLevelShift = 120;
  normalItemsInterval = 12;

  onChange(event: MatRadioChange) {
    var template = this.scales.find(item => item.defaultTemplateName == event.value);
    this.defaultTemplateName = template!.defaultTemplateName;
    this.normalLevelShift = template!.normalLevelShift;
    this.normalItemsInterval = template!.normalItemsInterval;
  }

 

  annotations = [
    new ConnectorAnnotationConfig({
      annotationType: AnnotationType.Connector,
      fromItem: 8,
      toItem: 4,
      size: new Size(40, 20),
      connectorShapeType: ConnectorShapeType.OneWay,
      color: Colors.Red,
      offset: 0,
      lineWidth: 2,
      lineType: LineType.Dotted,
      connectorPlacementType: ConnectorPlacementType.Straight,
      selectItems: false
    }),
    new ConnectorAnnotationConfig({
      annotationType: AnnotationType.Connector,
      fromItem: 10,
      toItem: 3,
      size: new Size(20, 20),
      connectorShapeType: ConnectorShapeType.OneWay,
      color: Colors.Red,
      offset: 0,
      lineWidth: 2,
      lineType: LineType.Dotted,
      connectorPlacementType: ConnectorPlacementType.Straight,
      selectItems: false
    })

  ]
  openDialogBox(event:any){
    console.log(event.context)
    const dialog =this.dialogBox.open(OpenModalComponent,{
      height:'450px',
      width:'450px',
      data:{

        name:event.context.title,
        description:event.context.description,
        image:event.context.image,
        email:event.context.context.email,
        phone:event.context.context.phone
      }
      
    })

  
  }
  values:any;
  x:any
items:any[]=[];
  ngOnInit(): void {
    
    
    

  }

  ngAfterViewInit(): void {
    this.ChangeDetector.detectChanges();
  }


}