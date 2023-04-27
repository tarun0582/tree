import { Component } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { FamItemConfig, Enabled, PageFitMode, ConnectorAnnotationConfig, AnnotationType, ConnectorShapeType, Size, Colors, ConnectorPlacementType, LineType, NeighboursSelectionMode, GroupByType } from 'ngx-basic-primitives';
@Component({
  selector: 'app-example10',
  templateUrl: './example10.component.html',
  styleUrls: ['./example10.component.scss']
})
export class Example10Component {
  PageFitMode = PageFitMode;
  Enabled = Enabled;
  templateName = "md";
  defaultTemplateName = "md";
  normalLevelShift = 8;
  normalItemsInterval = 4;
  GroupByType = GroupByType;
  NeighboursSelectionMode = NeighboursSelectionMode;
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

  onChange(event: MatRadioChange) {
    var template = this.scales.find(item => item.defaultTemplateName == event.value);
    this.defaultTemplateName = template!.defaultTemplateName;
    this.normalLevelShift = template!.normalLevelShift;
    this.normalItemsInterval = template!.normalItemsInterval;
  }

  items = [
    new FamItemConfig({ id: 0, parents: [],  description: "Chief Executive Officer (CEO)", context: { email: "davidalt@name.com", phone: "(352) 206-7599"}, image: "./assets/photos/q.png", itemTitleColor: "#4169e1", title: "David Dalton" }),
    new FamItemConfig({ id: 1, parents: [0],  description: "Co-Presidents, Platform Products & Services Division", context: { email: "jeanwhit@name.com", phone: "(505) 791-1689" }, image: "./assets/photos/w.png", itemTitleColor: "#4b0082", title: "Jeanna White" }),
    new FamItemConfig({ id: 2, parents: [0],  description: "Sr. VP, Server & Tools Division", context: { email: "jameholt@name.com", phone: "(262) 215-7998" }, image: "./assets/photos/e.png", itemTitleColor: "#4b0082",  title: "James Holt" }),
    new FamItemConfig({ id: 3, parents: [0],  description: "VP, Server & Tools Marketing and Solutions", context: { email: "thomwill@name.com", phone: "(904) 547-5342" }, image: "./assets/photos/r.png", itemTitleColor: "#4b0082", title: "Thomas Williams" }),
    new FamItemConfig({ id: 4, parents: [0],  description: "VP, Software & Enterprise Management Division", context: { email: "sarakemp@name.com", phone: "(918) 257-4218" }, image: "./assets/photos/g.png", itemTitleColor: "#4b0082",  title: "Sara Kemp" }),
    new FamItemConfig({ id: 5, parents: [1],  description: "Sr. VP, Software Server System", context: { email: "georduon@name.com", phone: "(434) 406-2189" }, image: "./assets/photos/x.png", itemTitleColor: "#4b0082", title: "George Duong" }),
    new FamItemConfig({ id: 6, parents: [1],  description: "VP, Developer Division", context: { email: "ashlrue@name.com", phone: "(515) 324-4969" }, image: "./assets/photos/n.png", itemTitleColor: "#4b0082", title: "Ashley Rue" }),
    new FamItemConfig({ id: 7, parents: [2],  description: "VP, Enterprise Access and Security Products Division (EASP)", context: { email: "bonnwede@name.com", phone: "(412) 265-2782" }, image: "./assets/photos/i.png", itemTitleColor: "#4b0082", title: "Bonnie Wedel" }),
    new FamItemConfig({ id: 8, parents: [2],  description: "GM, Core File Solutions", context: { email: "melihous@name.com", phone: "(630) 887-1188" }, image: "./assets/photos/p.png", itemTitleColor: "#4b0082", title: "Melissa Houser" }),
    new FamItemConfig({ id: 9, parents: [3],  description: "GM, Software Server Solutions Group", context: { email: "abbilaws@name.com", phone: "530-322-6413" }, image: "./assets/photos/a.png", itemTitleColor: "#4b0082", title: "Abbie Lawson" }),
    
  ];
  annotations = [
    new ConnectorAnnotationConfig({
      annotationType: AnnotationType.Connector,
      fromItem: 8,
      toItem: 19,
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
      fromItem: 20,
      toItem: 5,
      size: new Size(40, 20),
      connectorShapeType: ConnectorShapeType.OneWay,
      color: Colors.Blue,
      offset: 0,
      lineWidth: 2,
      lineType: LineType.Dotted,
      connectorPlacementType: ConnectorPlacementType.Offbeat,
      selectItems: false
    })

  ]


}
