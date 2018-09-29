import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable()
export class DataService {
  client_ID = '37a647fa01b940ca823c09f2a09a72b1';
  secret_ID = '0dda83bd7c304e6a96153702a254cdb3'
  id_Cient = 'BQC5TJHv-DiTFZ74ajXFZxvDc8oYepos6etlmm563Ym-csdYxU5ayldywm6TykKhmkzfsuIWHGV-E7DARUQJR0hga6Qs4en9KC5BKdlZbHZGVXaB0brd7yTz1QhDYO6evMtjBWrxEJKzzNvw5NdYR-zR'
  constructor(private http: HttpClient) {

  }
/*
curl -X "GET" "https://api.spotify.com/v1/albums?ids=382ObEPsp2rxGrnsizN5TX%2C1A2GTWGtFfWp7KSQTwWOyo%2C2noRn2Aes5aoNVsU6iWThc&market=ES" -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer BQC5TJHv-DiTFZ74ajXFZxvDc8oYepos6etlmm563Ym-csdYxU5ayldywm6TykKhmkzfsuIWHGV-E7DARUQJR0hga6Qs4en9KC5BKdlZbHZGVXaB0brd7yTz1QhDYO6evMtjBWrxEJKzzNvw5NdYR-zR"
*/
  headerDict = {
    'Authorization': 'Bearer  ' + this.id_Cient,
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }

  requestOptions = {
    headers: new HttpHeaders(this.headerDict)
  }
  body = 'user-read-private user-read-email';
  obtenerDatos() {
    return this.http.get<any>('https://api.spotify.com/v1/albums?ids=382ObEPsp2rxGrnsizN5TX%2C1A2GTWGtFfWp7KSQTwWOyo%2C2noRn2Aes5aoNVsU6iWThc&market=ES',  this.requestOptions );
  }
}
