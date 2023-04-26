import { Component } from '@angular/core';
import { FamItemConfig, Enabled, PageFitMode, GroupByType } from 'ngx-basic-primitives';

@Component({
  selector: 'app-simple-chart',
  templateUrl: './simple-chart.component.html',
  styleUrls: ['./simple-chart.component.scss']
})
export class SimpleChartComponent {

  title = 'First Family Chart';

  PageFitMode = PageFitMode;
  Enabled = Enabled;
  GroupByType = GroupByType;

  photos = {
    a: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAA8CAIAAACrV36WAAAAAXNSR0IArs4c6QAAAARn' + 
    'QU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGnSURBVGhD7dnBbQJBDAVQk1o2QjlQwKYGzpSwKQfq4IxIC' + 
    'RTB9jLZHCJFwWv7/7EiDt6zmX2yPYMHNq01eb7n5flI36JiIXWpbFW2kAwgsdVblS0kA0hs9db/ZWs+vW/Wno9PxPE3dh' + 
    'ls6Od+HI1XT1d64Sb8R5utEulwdbA8VY+LZ/kqkfF456pBHxDz5Xxze/p2vsxukBbAshTVOE0PO4B2cUlWKrgUTKsrV0e' + 
    'ut3RVU/cm5aKKqPXVbjuIDPtDUh2JImq1+jmjkupIFNFStXadHncWXkecpb3393me4oJZnionXyjLV6W4QFZEleHCWNG+' + 
    '0eKggQJiRVV6vhAXwoqrul0AC1H1uuIsTLUyukYH1jBL7WJ8lgq6oqwkVXSQDrLSVEFXjJWoirlCrFRVyBVhJasirgCr6' + 
    '5tEv7a5A5jL0tcN7vNl9OVcHqtXRbocVr+Kc9k3H/3qPL69Ise7dh0SsS+2JmtFddgvdy/gGbY7Jdp2GRcyrlu1BfUjxt' + 
    'iPRm/lqVbGHOMHnU39zQm0I/UbBLA+GVosJHGVrcoWkgEktnoLydYXkF/LiXG21MwAAAAASUVORK5CYII='
  };

  items = [
    new FamItemConfig({ id: 1, title: "Thomas Williams", label: "Thomas Williams", description: "1st husband", image: this.photos.a }),
    new FamItemConfig({ id: 2, title: "Mary Spencer", label: "Mary Spencer", description: "The Mary",image: this.photos.a }),
    new FamItemConfig({ id: 3, title: "David Kirby", label: "David Kirby", description: "2nd Husband", image: this.photos.a }),
    new FamItemConfig({ id: 4, parents: [1, 2], title: "Brad Williams", label: "Brad Williams", description: "1st son", image: this.photos.a }),
    new FamItemConfig({ id: 5, parents: [2, 3], title: "Mike Kirby", label: "Mike Kirby", description: "2nd son, having 2 spouses", image: this.photos.a}),
    new FamItemConfig({ id: 6, title: "Lynette Maloney", label: "Lynette Maloney", description: "Spouse I", image: this.photos.a }),
    new FamItemConfig({ id: 11, parents: [5, 6], title: "Steven Powell", label: "Steven Powell", description: "1st son", image: this.photos.a }),
    new FamItemConfig({ id: 7, title: "Sara Kemp", label: "Sara Kemp", description: "Spouse II", image: this.photos.a }),
    new FamItemConfig({ id: 12, parents: [5, 7], title: "John Smith", label: "John Smith", description: "2ns son", image: this.photos.a }),
    new FamItemConfig({ id: 8, parents: [7], title: "Leon Kemp", label: "Leon Kemp", description: "", image: this.photos.a })
  ];
  }