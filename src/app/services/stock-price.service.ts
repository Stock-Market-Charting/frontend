import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockPriceService {

  private baseUrl = '/stock-price-service/api/v1/stock-prices';

  constructor(private apiService: ApiService) { }

  downloadTemplate(filename): Observable<any> {
    return this.apiService.download(`${this.baseUrl}/templates?filename=${filename}`)
  }
}
