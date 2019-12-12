import { Component, OnInit } from '@angular/core';
import { StockPriceService } from 'src/app/services/stock-price.service';

@Component({
  selector: 'stock-price',
  templateUrl: './stock-price.component.html',
  styleUrls: ['./stock-price.component.css']
})
export class StockPriceComponent implements OnInit {

  constructor(
    private stockPriceService: StockPriceService
  ) { }

  ngOnInit() {
  }

  downloadTemplate(filename) {
    this.stockPriceService.downloadTemplate(filename).subscribe( (res) => {
      console.log(res)
      const blob = new Blob([res.body], {type: res.type});
      const objectUrl = URL.createObjectURL(blob);
        const link = document.createElement('a');
        document.body.appendChild(link);
        link.setAttribute('style', 'display:none');
        link.setAttribute('href', objectUrl);
        link.setAttribute('download', filename);
        link.click();
        URL.revokeObjectURL(objectUrl);
    })
  }

}
