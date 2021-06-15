import { Inject, Injectable } from '@angular/core';
// import { RandomOrg } from 'random-org';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
require('dotenv').config();

@Injectable({
  providedIn: 'root',
})
export class RandomService {
  url: string = 'https://api.random.org/json-rpc/1/invoke';
  api_key: string = environment.API_KEY;

  constructor(
    private http: HttpClient // public random: RandomOrg // @Inject({ apiKey: processapi-key' })
  ) {}

  generateRandom() {
    // Gero um numero aleatório
    // this.random
    //   .generateIntegers({ min: 1, max: 99, n: 1 })
    //   .then(function (result) {
    //     console.log(result.random.data); // [55, 3]
    //     let value = result.random.data[0];
    //     console.log(value);
    //   });
    this.http.get;
  }

  // Faz um Http POST para Random-Org e gera um numero aleatorio
  sendPostRequest() {
    const headers = new HttpHeaders()
      // .set('cache-control', 'no-cache')
      .set('content-type', 'application/json-rpc');
    // .set('postman-token', 'b408a67d-5f78-54fc-2fb7-00f6e9cefbd1');

    const body = {
      jsonrpc: '2.0',
      method: 'generateIntegers',
      params: {
        apiKey: this.api_key,
        n: 1,
        min: 1,
        max: 6,
        replacement: false,
      },
      id: 3076,
    };

    return this.http.post(this.url, body, { headers: headers });
    // .subscribe((res) => res);
  }
}
