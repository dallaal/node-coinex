import * as crypto from 'crypto-js';
import * as qs from 'qs';

export default class Coinex {
  protected sign(body: { [key:string]: any }, secretKey: string): string {
    /* eslint-disable */
    const ordered: { [key: string] : any } = Object.keys(body).sort().reduce(
      (obj: { [key: string] : any }, key: string) => {
        obj[key] = body[key];
        return obj;
      },
      {},
    );
    /* eslint-enable */
    ordered.secret_key = secretKey;
    return crypto.MD5(qs.stringify(ordered)).toString().toUpperCase();
  }
}
