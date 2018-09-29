import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/*Interface */
import { Detail } from '../interface/Detail';

@Injectable()
export class DetailService {

  constructor(private http: HttpClient) {
    console.log('ok');
  }

  client_ID = '37a647fa01b940ca823c09f2a09a72b1';
  secret_ID = '0dda83bd7c304e6a96153702a254cdb3'
  id_Cient = 'BQC5TJHv-DiTFZ74ajXFZxvDc8oYepos6etlmm563Ym-csdYxU5ayldywm6TykKhmkzfsuIWHGV-E7DARUQJR0hga6Qs4en9KC5BKdlZbHZGVXaB0brd7yTz1QhDYO6evMtjBWrxEJKzzNvw5NdYR-zR';

  headerDict = {
    'Authorization': 'Bearer  ' + this.id_Cient,
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }

  requestOptions = {
    headers: new HttpHeaders(this.headerDict)
  }
  getDetail(id: string) {
    return this.http.get<any>('https://api.spotify.com/v1/artists/' + id, this.requestOptions);
  }

}
