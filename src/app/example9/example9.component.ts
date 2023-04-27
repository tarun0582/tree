import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatRadioChange } from '@angular/material/radio';
import { OrgItemConfig, Enabled, PageFitMode, ConnectorAnnotationConfig, AnnotationType, Colors, ConnectorPlacementType, ConnectorShapeType, LineType, Size } from 'ngx-basic-primitives';
import { OpenModalComponent } from '../open-modal/open-modal.component';
@Component({
  selector: 'app-example9',
  templateUrl: './example9.component.html',
  styleUrls: ['./example9.component.scss']
})
export class Example9Component {
  constructor(private dialogBox:MatDialog){}
  PageFitMode = PageFitMode;
  Enabled = Enabled;
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
      normalLevelShift: 12,
      normalItemsInterval: 12
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
  normalLevelShift = 12;
  normalItemsInterval = 12;

  onChange(event: MatRadioChange) {
    var template = this.scales.find(item => item.defaultTemplateName == event.value);
    this.defaultTemplateName = template!.defaultTemplateName;
    this.normalLevelShift = template!.normalLevelShift;
    this.normalItemsInterval = template!.normalItemsInterval;
  }

  items = [
    new OrgItemConfig({ id: 0, parent: null, isVisible: true, description: "Chief Executive Officer (CEO)", context: { email: "davidalt@name.com", phone: "(352) 206-7599"}, image: this.demo_img, itemTitleColor: "#4169e1", title: "David Dalton" }),
    new OrgItemConfig({ id: 1, parent: 0, isVisible: true, description: "Co-Presidents, Platform Products & Services Division", context: { email: "jeanwhit@name.com", phone: "(505) 791-1689" }, image: this.demo_img, itemTitleColor: "#4b0082", title: "Jeanna White" }),
    new OrgItemConfig({ id: 2, parent: 0, isVisible: true, description: "Sr. VP, Server & Tools Division", context: { email: "jameholt@name.com", phone: "(262) 215-7998" }, image: this.demo_img, itemTitleColor: "#4b0082",  title: "James Holt" }),
    new OrgItemConfig({ id: 3, parent: 0, isVisible: true, description: "VP, Server & Tools Marketing and Solutions", context: { email: "thomwill@name.com", phone: "(904) 547-5342" }, image: this.demo_img, itemTitleColor: "#4b0082", title: "Thomas Williams" }),
    new OrgItemConfig({ id: 4, parent: 0, isVisible: true, description: "VP, Software & Enterprise Management Division", context: { email: "sarakemp@name.com", phone: "(918) 257-4218" }, image: this.demo_img, itemTitleColor: "#4b0082",  title: "Sara Kemp" }),
    new OrgItemConfig({ id: 5, parent: 1, isVisible: true, description: "Sr. VP, Software Server System", context: { email: "georduon@name.com", phone: "(434) 406-2189" }, image: this.demo_img, itemTitleColor: "#4b0082", title: "George Duong" }),
    new OrgItemConfig({ id: 6, parent: 1, isVisible: true, description: "VP, Developer Division", context: { email: "ashlrue@name.com", phone: "(515) 324-4969" }, image: this.demo_img, itemTitleColor: "#4b0082", title: "Ashley Rue" }),
    new OrgItemConfig({ id: 7, parent: 2, isVisible: true, description: "VP, Enterprise Access and Security Products Division (EASP)", context: { email: "bonnwede@name.com", phone: "(412) 265-2782" }, image: this.demo_img, itemTitleColor: "#4b0082", title: "Bonnie Wedel" }),
    new OrgItemConfig({ id: 8, parent: 2, isVisible: true, description: "GM, Core File Solutions", context: { email: "melihous@name.com", phone: "(630) 887-1188" }, image: this.demo_img, itemTitleColor: "#4b0082", title: "Melissa Houser" }),
    new OrgItemConfig({ id: 9, parent: 3, isVisible: true, description: "GM, Software Server Solutions Group", context: { email: "abbilaws@name.com", phone: "530-322-6413" }, image: this.demo_img, itemTitleColor: "#4b0082", title: "Abbie Lawson" }),
    new OrgItemConfig({ id: 10, parent: 3, isVisible: true, description: "GM, Connected Systems Division", context: { email: "erneputn@name.com", phone: "(626) 831-0555" }, image: this.demo_img, itemTitleColor: "#4b0082", title: "Ernest Putnam" }),
    new OrgItemConfig({ id: 11, parent: 4, isVisible: true, description: "CFO, Platforms Products & Services", context: { email: "celecrum@name.com", phone: "(419) 578-6479" }, image: this.demo_img, itemTitleColor: "#4b0082", title: "Celestina Crum" }),
    new OrgItemConfig({ id: 12, parent: 4, isVisible: true, description: "GM, Pricing", context: { email: "cindturn@name.com", phone: "(530) 934-4295"}, image: this.demo_img, itemTitleColor: "#4b0082", title: "Cindy Turner" }),
  //
    new OrgItemConfig({ id: 13, parent: 5, isVisible: true, description: "Jr.-Presidents, Platform Products & Services Division", context: { email: "jeanwhit@name.com", phone: "(505) 791-1689" }, image: this.demo_img, itemTitleColor: "#4b0082", title: "Jeanna White" }),
    new OrgItemConfig({ id: 14, parent: 5, isVisible: true, description: "Jr. VP, Server & Tools Division", context: { email: "jameholt@name.com", phone: "(262) 215-7998" }, image: this.demo_img, itemTitleColor: "#4b0082",  title: "James Holt" }),
    new OrgItemConfig({ id: 15, parent: 6, isVisible: true, description: "D. VP, Server & Tools Marketing and Solutions", context: { email: "thomwill@name.com", phone: "(904) 547-5342" }, image: this.demo_img, itemTitleColor: "#4b0082", title: "Thomas Williams" }),
    new OrgItemConfig({ id: 16, parent: 7, isVisible: true, description: "D. VP, Software & Enterprise Management Division", context: { email: "sarakemp@name.com", phone: "(918) 257-4218" }, image: this.demo_img, itemTitleColor: "#4b0082",  title: "Sara Kemp" }),
    new OrgItemConfig({ id: 17, parent: 8, isVisible: true, description: "Jr. VP, Software Server System", context: { email: "georduon@name.com", phone: "(434) 406-2189" }, image: this.demo_img, itemTitleColor: "#4b0082", title: "George Duong" }),
    new OrgItemConfig({ id: 18, parent: 9, isVisible: true, description: "D. VP, Developer Division", context: { email: "ashlrue@name.com", phone: "(515) 324-4969" }, image: this.demo_img, itemTitleColor: "#4b0082", title: "Ashley Rue" }),
    new OrgItemConfig({ id: 19, parent: 8, isVisible: true, description: "D. VP, Enterprise Access and Security Products Division (EASP)", context: { email: "bonnwede@name.com", phone: "(412) 265-2782" }, image: this.demo_img, itemTitleColor: "#4b0082", title: "Bonnie Wedel" }),
    new OrgItemConfig({ id: 20, parent: 9, isVisible: true, description: " Core File Solutions", context: { email: "melihous@name.com", phone: "(630) 887-1188" }, image: this.demo_img, itemTitleColor: "#4b0082", title: "Melissa Houser" }),
    new OrgItemConfig({ id: 21, parent: 8, isVisible: true, description: " Software Server Solutions Group", context: { email: "abbilaws@name.com", phone: "530-322-6413" }, image: this.demo_img, itemTitleColor: "#4b0082", title: "Abbie Lawson" }),
  
  
  ];

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
}
