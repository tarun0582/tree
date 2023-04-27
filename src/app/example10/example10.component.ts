import { Component } from '@angular/core';
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
  normalLevelShift = 12;
  normalItemsInterval = 12;
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

  onChange(event: any) {
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
    new FamItemConfig({ id: 10, parents: [3], description: "GM, Connected Systems Division", context: { email: "erneputn@name.com", phone: "(626) 831-0555" }, image: "./assets/photos/s.png", itemTitleColor: "#4b0082", title: "Ernest Putnam" }),
    new FamItemConfig({ id: 11, parents: [4], description: "CFO, Platforms Products & Services", context: { email: "celecrum@name.com", phone: "(419) 578-6479" }, image: "./assets/photos/h.png", itemTitleColor: "#4b0082", title: "Celestina Crum" }),
    new FamItemConfig({ id: 12, parents: [4], description: "GM, Pricing", context: { email: "cindturn@name.com", phone: "(530) 934-4295"}, image: "./assets/photos/j.png", itemTitleColor: "#4b0082", title: "Cindy Turner" }),
    new FamItemConfig({ id: 19, parents: [2], description: "VP, Security Technology Unit (STU)", groupTitleColor: "#4169e1", image: "./assets/photos/y.png", itemTitleColor: "#4b0082", title: "Robert Morgan" }),
    new FamItemConfig({ id: 20, parents: [2], description: "GM, Software Serviceability", groupTitleColor: "#4169e1", image: "./assets/photos/a.png", itemTitleColor: "#4b0082", title: "Ida Benefield" }),
    new FamItemConfig({ id: 21, parents: [4], description: "GM, Core Operating System Test", groupTitleColor: "#4169e1", image: "./assets/photos/d.png", itemTitleColor: "#4b0082", title: "Vada Duhon" }),
    new FamItemConfig({ id: 22, parents: [4], description: "GM, Global Platform Technologies and Services", groupTitleColor: "#4169e1", image: "./assets/photos/f.png", itemTitleColor: "#4b0082", title: "William Loyd" }),
    new FamItemConfig({ id: 23, parents: [6], description: "Sr. VP, NAME & Personal Services Division", groupTitleColor: "#4169e1", image: "./assets/photos/g.png", itemTitleColor: "#4b0082", title: "Craig Blue" }),
    new FamItemConfig({ id: 24, parents: [6], description: "VP, NAME Communications Services and Member Platform", groupTitleColor: "#4169e1", image: "./assets/photos/h.png", itemTitleColor: "#4b0082", title: "Joel Crawford" }),
    new FamItemConfig({ id: 25, parents: [8], description: "VP & CFO, NAME",groupTitleColor: "#4169e1", image: "./assets/photos/o.png", itemTitleColor: "#4b0082", title: "Barbara Lang" }),
    new FamItemConfig({ id: 26, parents: [8], description: "VP, NAME Operations", groupTitleColor: "#4169e1", image: "./assets/photos/d.png", itemTitleColor: "#4b0082", title: "Barbara Faulk" }),
    new FamItemConfig({ id: 27, parents: [18], description: "VP, NAME Global Sales & Marketing", groupTitleColor: "#4169e1", image: "./assets/photos/z.png", itemTitleColor: "#4b0082", title: "Stewart Williams" }),
    new FamItemConfig({ id: 28, parents: [18], description: "Sr. VP, NAME Information Services & Merchant Platform", groupTitleColor: "#4169e1", image: "./assets/photos/y.png", itemTitleColor: "#4b0082", title: "Robert Lemieux" })
    
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
      color: Colors.Red,
      offset: 0,
      lineWidth: 2,
      lineType: LineType.Dotted,
      connectorPlacementType: ConnectorPlacementType.Offbeat,
      selectItems: false
    })

  ]


}
