import axios, { AxiosInstance } from 'axios';
import * as qs from 'qs';
import * as crypto from 'crypto-js';
import { AcquireAllMarketDataResponse, AcquireKLineDataResponse, AcquireLatestTransactionDataResponse, AcquireMarketInformationResponse, AcquireMarketListResponse, AcquireMarketStatisticsResponse, AcquireSingleMarketInformationResponse } from './coinexInfo';

export default class CoinexMarket {
  private client: AxiosInstance = axios.create({
    baseURL: 'https://api.coinex.com/v1/',
  });

  public async acquireMarketList(
  ): Promise<AcquireMarketListResponse> {
    const resp = await this.client.get<AcquireMarketListResponse>('market/list',
      {
        headers: {
          'content-type': 'application/json',
        },
      });
    return resp.data;
  }

  public async acquireMarketInformation(
  ): Promise<AcquireMarketInformationResponse> {
    const resp = await this.client.get<AcquireMarketInformationResponse>('market/info',
      {
        headers: {
          'content-type': 'application/json',
        },
      });
    return resp.data;
  }

  public async acquireSingleMarketInformation(
    market:string,
  ): Promise<AcquireSingleMarketInformationResponse> {
    const resp = await this.client.get<AcquireSingleMarketInformationResponse>(`market/detail?market=${market}`,
      {
        headers: {
          'content-type': 'application/json',
        },
      });
    return resp.data;
  }

  // Acquire latest transaction data，return up to 1000
  public async acquireLatestTransactionData(
    market: string,
    lastId?:number,
    limit?: number,
  ): Promise<AcquireLatestTransactionDataResponse> {
    const params = {
      'market': market,
      'last_id': lastId,
      'limit': limit,
    };
    const resp = await this.client.get<AcquireLatestTransactionDataResponse>(`market/deals?${qs.stringify(params)}`,
      {
        headers: {
          'content-type': 'application/json',
        },
      });
    return resp.data;
  }

  public async acquireKLineData(
    market: string,
    period: string,
    limit?: number,
  ): Promise<AcquireKLineDataResponse> {
    const params = {
      'market': market,
      'type': period,
      'limit': limit,
    };
    const resp = await this.client.get(`market/kline?${qs.stringify(params)}`,
      {
        headers: {
          'content-type': 'application/json',
        },
      });
    /* eslint-disable */
    resp.data.data = resp.data.data.map((data: any[]) => {
      return ({
        time: data[0],
        opening: data[1],
        closing: data[2],
        highest: data[3],
        lowest: data[4],
        volume: data[5],
        amount: data[6],
        market: data[7],
      })
    });
    /* eslint-enable */
    return resp.data as AcquireKLineDataResponse;
  }

  // Acquire real-time market data
  public async acquireMarketStatistics(
    market:string,
  ): Promise<AcquireMarketStatisticsResponse> {
    const resp = await this.client.get<AcquireMarketStatisticsResponse>(`market/ticker?market=${market}`,
      {
        headers: {
          'content-type': 'application/json',
        },
      });
    return resp.data;
  }

  // Acquire all market data
  public async acquireAllMarketData(
  ): Promise<AcquireAllMarketDataResponse> {
    const resp = await this.client.get<AcquireAllMarketDataResponse>('market/ticker/all',
      {
        headers: {
          'content-type': 'application/json',
        },
      });
    return resp.data;
  }
}
