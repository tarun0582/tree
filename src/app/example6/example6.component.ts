import { Component } from '@angular/core';
import { FamItemConfig, Enabled, PageFitMode, GroupByType, AnnotationType } from 'ngx-basic-primitives';
import { LabelAnnotationConfig } from 'ngx-basic-primitives';
@Component({
  selector: 'app-example6',
  templateUrl: './example6.component.html',
  styleUrls: ['./example6.component.scss']
})
export class Example6Component {
  PageFitMode = PageFitMode;
  Enabled = Enabled;
  GroupByType = GroupByType;

  items = [
    new FamItemConfig({ id: 1, parents: [], title: "1", label: "1", description: "", image: "./assets/photos/z.png" }),
    new FamItemConfig({ id: 2, parents: [1, 101, 102, 103], title: "2", label: "2", description: "", image: "./assets/photos/a.png" }),
    new FamItemConfig({ id: 3, parents: [1, 101, 102, 103], title: "3", label: "3", description: "", image: "./assets/photos/b.png" }),
    new FamItemConfig({ id: 4, parents: [1, 101, 102, 103], title: "4", label: "4", description: "", image: "./assets/photos/c.png" }),
    new FamItemConfig({ id: 6, parents: [1, 101, 102, 103], title: "6", label: "6", description: "", image: "./assets/photos/e.png" }),
    new FamItemConfig({ id: 7, parents: [1, 101, 102, 103], title: "7", label: "7", description: "", image: "./assets/photos/f.png" }),
    new FamItemConfig({ id: 8, parents: [1, 101, 102, 103], title: "8", label: "8", description: "", image: "./assets/photos/g.png" }),
    new FamItemConfig({ id: 10, parents: [1, 101, 102, 103], title: "10", label: "10", description: "", image: "./assets/photos/i.png" }),
    new FamItemConfig({ id: 11, parents: [1, 101, 102, 103], title: "11", label: "11", description: "", image: "./assets/photos/b.png" }),
    new FamItemConfig({ id: 12, parents: [11], title: "12", label: "12", description: "", image: "./assets/photos/b.png" }),
    new FamItemConfig({ id: 33, parents: [2, 3, 4, 6, 7, 8, 10, 12,10], title: "33", label: "33", description: "", image: "./assets/photos/m.png" })
  ];

  annotations = [
    new LabelAnnotationConfig({ annotationType: AnnotationType.Label, fromItem: 1, toItems: [2], title: "1->2" }),
    new LabelAnnotationConfig({ annotationType: AnnotationType.Label, fromItem: 1, toItems: [3], title: "1->3" }),
    new LabelAnnotationConfig({ annotationType: AnnotationType.Label, fromItem: 1, toItems: [4], title: "1->4" }),
    new LabelAnnotationConfig({ annotationType: AnnotationType.Label, fromItem: 1, toItems: [6], title: "1->6" }),
    new LabelAnnotationConfig({ annotationType: AnnotationType.Label, fromItem: 1, toItems: [7], title: "1->7" }),
    new LabelAnnotationConfig({ annotationType: AnnotationType.Label, fromItem: 1, toItems: [8], title: "1->8" }),
    new LabelAnnotationConfig({ annotationType: AnnotationType.Label, fromItem: 1, toItems: [10], title: "1->10" }),
    new LabelAnnotationConfig({ annotationType: AnnotationType.Label, fromItem: 33, toItems: [2], title: "33->2" }),
    new LabelAnnotationConfig({ annotationType: AnnotationType.Label, fromItem: 33, toItems: [3], title: "33->3" }),
    new LabelAnnotationConfig({ annotationType: AnnotationType.Label, fromItem: 33, toItems: [4], title: "33->4" }),
    new LabelAnnotationConfig({ annotationType: AnnotationType.Label, fromItem: 33, toItems: [6,10], title: "33->6" }),
    new LabelAnnotationConfig({ annotationType: AnnotationType.Label, fromItem: 33, toItems: [7], title: "33->7" }),
    new LabelAnnotationConfig({ annotationType: AnnotationType.Label, fromItem: 33, toItems: [8], title: "33->8" })
  ];
}
