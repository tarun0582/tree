import { Component } from '@angular/core';
import { FamItemConfig, Enabled, PageFitMode, GroupByType, AnnotationType, AdviserPlacementType, ConnectorShapeType, LineType, ConnectorPlacementType, Colors, Size } from 'ngx-basic-primitives';
import { ConnectorAnnotationConfig,LabelAnnotationConfig } from 'ngx-basic-primitives';
@Component({
  selector: 'app-example7',
  templateUrl: './example7.component.html',
  styleUrls: ['./example7.component.scss']
})
export class Example7Component {
  PageFitMode = PageFitMode;
  Enabled = Enabled;
  GroupByType = GroupByType;

  // items = [
  //   new FamItemConfig({ id: 1, parents: [], title: "1", label: "1", description: "", image: "./assets/photos/z.png" }),
  //   new FamItemConfig({ id: 2, parents: [1, 101, 102, 103], title: "2", label: "2", description: "", image: "./assets/photos/a.png" }),
  //   new FamItemConfig({ id: 3, parents: [1, 101, 102, 103], title: "3", label: "3", description: "", image: "./assets/photos/b.png" }),
  //   new FamItemConfig({ id: 4, parents: [1, 101, 102, 103], title: "4", label: "4", description: "", image: "./assets/photos/c.png" }),
  //   new FamItemConfig({ id: 6, parents: [1, 101, 102, 103], title: "6", label: "6", description: "", image: "./assets/photos/e.png" }),
  //   new FamItemConfig({ id: 7, parents: [1, 101, 102, 103], title: "7", label: "7", description: "", image: "./assets/photos/f.png" }),
  //   new FamItemConfig({ id: 8, parents: [1, 101, 102, 103], title: "8", label: "8", description: "", image: "./assets/photos/g.png" }),
  //   new FamItemConfig({ id: 10, parents: [1, 101, 102, 103], title: "10", label: "10", description: "", image: "./assets/photos/i.png" }),
  //   new FamItemConfig({ id: 11, parents: [1, 101, 102, 103], title: "11", label: "11", description: "", image: "./assets/photos/b.png" }),
  //   new FamItemConfig({ id: 12, parents: [11], title: "12", label: "12", description: "", image: "./assets/photos/b.png" }),
  //   new FamItemConfig({ id: 33, parents: [2, 3, 4, 6, 7, 8, 10, 12,10], title: "33", label: "33", description: "", image: "./assets/photos/m.png" })
  // ];

  items= [
    new FamItemConfig({
      id:1,
      parents:[],
      title:'CEO',
      label:'1',
      description:'My Name is CEO',
      image:'https://img.freepik.com/free-photo/confident-business-team-with-leader_1098-3228.jpg',
    }),
    new FamItemConfig({
      id:2,
      parents:[1],
      title:'Senior Executive',
      label:'2',
      description:'I am Senior Executive',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbSoRnzYM3H6bACZKd7yteW7ZISarEcAD8LA&usqp=CAU'
    }),
    new FamItemConfig({
      id:3,
      parents:[1],
      title:'Senior Technical Executive',
      label:'3',
      description:'I am Senior Technical Executive',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIu7NVGB9njd1UdsO_qQTu85esp8JoMHVQjA&usqp=CAU'
    }),
    new FamItemConfig({
      id:4,
      parents:[2],
      title:'Junior Executive',
      label:'3',
      description:'I am l Executive',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIu7NVGB9njd1UdsO_qQTu85esp8JoMHVQjA&usqp=CAU'
    }),
    new FamItemConfig({
      id:5,
      parents:[2],
      title:'Junior Executive',
      label:'3',
      description:'I am  Executive',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIu7NVGB9njd1UdsO_qQTu85esp8JoMHVQjA&usqp=CAU'
    }),
    new FamItemConfig({
      id:6,
      parents:[3],
      title:'Junior Technical Executive',
      label:'3',
      description:'I am Technical Executive',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIu7NVGB9njd1UdsO_qQTu85esp8JoMHVQjA&usqp=CAU'
    }),
    new FamItemConfig({
      id:7,
      parents:[3],
      title:'Junior Technical Executive',
      label:'3',
      description:'I am  Technical Executive',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIu7NVGB9njd1UdsO_qQTu85esp8JoMHVQjA&usqp=CAU'
    }),
    new FamItemConfig({
      id:8,
      parents:[5,3],
      title:'Trainee Executive',
      label:'3',
      description:'I am Trainee Executive',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIu7NVGB9njd1UdsO_qQTu85esp8JoMHVQjA&usqp=CAU'
    }),
    new FamItemConfig({
      id:10,
      parents:[6,7],
      title:'Trainee Executive',
      label:'3',
      description:'I am Trainee Executive',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIu7NVGB9njd1UdsO_qQTu85esp8JoMHVQjA&usqp=CAU'
    }),
    new FamItemConfig({
      id:9,
      parents:[7],
      title:'Trainee Executive',
      label:'3',
      description:'I am Trainee Executive',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIu7NVGB9njd1UdsO_qQTu85esp8JoMHVQjA&usqp=CAU'
    }),



  ]
  annotations = [
    new ConnectorAnnotationConfig({
      annotationType: AnnotationType.Connector,
      fromItem: 8,
      toItem: 3,
      size: new Size(40, 20),
      connectorShapeType: ConnectorShapeType.OneWay,
      color: Colors.Red,
      offset: 0,
      lineWidth: 2,
      lineType: LineType.Dashed,
      connectorPlacementType: ConnectorPlacementType.Offbeat,
      selectItems: false
    })

  ]


  data(e:any){
    console.log(e)
  }



}
