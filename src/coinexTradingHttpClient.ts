import axios, { AxiosInstance } from 'axios';
import * as qs from 'qs';
import * as crypto from 'crypto-js';

import { AquireOrderStatusResponse, CancelAllOrdersResponse, CancelMultipleOrderResponse, CancelOrderResponse, IOCOrderResponse, LimitOrderResponse, MarketOrderResponse, StopLimitOrderResponse } from './coinexInfo';

export default class CoinexTrading {
  private client: AxiosInstance = axios.create({
    baseURL: 'https://api.coinex.com/v1/order/',
  });

  private sign(body: { [key:string]: any }, secretKey: string): string {
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

  public async limitOrder(
    accessId: string,
    secretKey: string,
    symbol: string,
    side: string,
    amount: string,
    price: string,
    sourceId?: string,
    option?: string,
    accountId?: string,
    clientId?: string,
    hide?: boolean,
  ): Promise<LimitOrderResponse> {
    const body: { [key: string] : any } = {
      'access_id': accessId,
      'market': symbol,
      'type': side,
      'amount': amount,
      'price': price,
      'tonce': Date.now(),
      'source_id': sourceId,
      'option': option,
      'account_id': accountId,
      'client_id': clientId,
      'hide': hide,
    };

    const auth = this.sign(body, secretKey);
    const resp = await this.client.post<LimitOrderResponse>('limit',
      body,
      {
        headers: {
          'content-type': 'application/json',
          authorization: auth,
        },
      });
    return resp.data;
  }

  public async stopLimitOrder(
    accessId: string,
    secretKey: string,
    symbol: string,
    side: string,
    amount: string,
    price: string,
    stopPrice: string,
    sourceId?: string,
    option?: string,
    accountId?: string,
    clientId?: string,
    hide?: boolean,
  ): Promise<StopLimitOrderResponse> {
    const body: { [key: string] : any } = {
      'access_id': accessId,
      'market': symbol,
      'type': side,
      'amount': amount,
      'price': price,
      'stop_price': stopPrice,
      'tonce': Date.now(),
      'source_id': sourceId,
      'option': option,
      'account_id': accountId,
      'client_id': clientId,
      'hide': hide,
    };

    const auth = this.sign(body, secretKey);
    const resp = await this.client.post<StopLimitOrderResponse>('stop/limit',
      body,
      {
        headers: {
          'content-type': 'application/json',
          authorization: auth,
        },
      });
    return resp.data;
  }

  public async marketOrder(
    accessId: string,
    secretKey: string,
    symbol: string,
    side: string,
    amount: string,
    sourceId?: string,
    accountId?: string,
    clientId?: string,
    hide?: boolean,
  ): Promise<MarketOrderResponse> {
    const body: { [key: string] : any } = {
      'access_id': accessId,
      'market': symbol,
      'type': side,
      'amount': amount,
      'tonce': Date.now(),
      'source_id': sourceId,
      'account_id': accountId,
      'client_id': clientId,
      'hide': hide,
    };

    const auth = this.sign(body, secretKey);
    const resp = await this.client.post<MarketOrderResponse>('market',
      body,
      {
        headers: {
          'content-type': 'application/json',
          authorization: auth,
        },
      });
    return resp.data;
  }

  // place immediate-or-cancel order
  public async IOCOrder(
    accessId: string,
    secretKey: string,
    symbol: string,
    side: string,
    amount: string,
    price: string,
    sourceId?: string,
    accountId?: string,
    clientId?: string,
  ): Promise<IOCOrderResponse> {
    const body: { [key: string] : any } = {
      'access_id': accessId,
      'market': symbol,
      'type': side,
      'amount': amount,
      'price': price,
      'tonce': Date.now(),
      'source_id': sourceId,
      'account_id': accountId,
      'client_id': clientId,
    };

    const auth = this.sign(body, secretKey);
    const resp = await this.client.post<IOCOrderResponse>('ioc',
      body,
      {
        headers: {
          'content-type': 'application/json',
          authorization: auth,
        },
      });
    return resp.data;
  }

  public async cancelOrder(
    accessId: string,
    secretKey: string,
    id: number,
    symbol: string,
    side: string,
    accountId?: string,
  ): Promise<CancelOrderResponse> {
    const body: { [key: string] : any } = {
      'access_id': accessId,
      'id': id,
      'market': symbol,
      'type': side,
      'tonce': Date.now(),
      'account_id': accountId,
    };

    const auth = this.sign(body, secretKey);
    const resp = await this.client.delete<CancelOrderResponse>(`pending?${qs.stringify(body)}`,
      {
        headers: {
          'content-type': 'application/json',
          authorization: auth,
        },
      });
    return resp.data;
  }

  public async cancelMultipleOrder(
    accessId: string,
    secretKey: string,
    batchIds: string,
    symbol: string,
    accountId?: string,
  ): Promise<CancelMultipleOrderResponse> {
    const body: { [key: string] : any } = {
      'access_id': accessId,
      'batch_ids': batchIds,
      'market': symbol,
      'tonce': Date.now(),
      'account_id': accountId,
    };

    const auth = this.sign(body, secretKey);
    const resp = await this.client.delete<CancelMultipleOrderResponse>(`pending/batch?${qs.stringify(body)}`,
      {
        headers: {
          'content-type': 'application/json',
          authorization: auth,
        },
      });
    return resp.data;
  }

  public async cancelAllOrders(
    accessId: string,
    secretKey: string,
    symbol: string,
    accountId?: string,
  ): Promise<CancelAllOrdersResponse> {
    const body: { [key: string] : any } = {
      'access_id': accessId,
      'market': symbol,
      'tonce': Date.now(),
      'account_id': accountId,
    };

    const auth = this.sign(body, secretKey);
    const resp = await this.client.delete<CancelAllOrdersResponse>(`pending?${qs.stringify(body)}`,
      {
        headers: {
          'content-type': 'application/json',
          authorization: auth,
        },
      });
    return resp.data;
  }

  public async aquireOrderStatus(
    accessId: string,
    secretKey: string,
    id: string,
    symbol: string,
  ): Promise<AquireOrderStatusResponse> {
    const body: { [key: string] : any } = {
      'access_id': accessId,
      'id': id,
      'market': symbol,
      'tonce': Date.now(),
    };

    const auth = this.sign(body, secretKey);
    const resp = await this.client.get<AquireOrderStatusResponse>(`status?${qs.stringify(body)}`,
      {
        headers: {
          'content-type': 'application/json',
          authorization: auth,
        },
      });
    return resp.data;
  }
}
