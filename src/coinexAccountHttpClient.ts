import axios, { AxiosInstance } from 'axios';
import * as qs from 'qs';
import * as crypto from 'crypto-js';

import { GetDepositAddressResponse, InquireAccountInfoResponse, InquireWithdrawalListResponse, WithdrawResponse } from './coinexInfo';

export default class CoinexAccount {
  private client: AxiosInstance = axios.create({
    baseURL: 'https://api.coinex.com/v1/',
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

  public async inquireAccountInfo(
    accessId: string,
    secretKey: string,
  ): Promise<InquireAccountInfoResponse> {
    const body: { [key: string] : any } = {
      'access_id': accessId,
      'tonce': Date.now(),
    };

    const auth = this.sign(body, secretKey);
    const resp = await this.client.get<InquireAccountInfoResponse>(`balance/info?${qs.stringify(body)}`,
      {
        headers: {
          'content-type': 'application/json',
          authorization: auth,
        },
      });
    return resp.data;
  }

  public async withdraw(
    accessId: string,
    secretKey: string,
    coinType: string,
    coinAddress: string,
    transferMethod: string,
    actualAmount: string,
    smartContractName?: string,
  ): Promise<WithdrawResponse> {
    const body: { [key: string] : any } = {
      'access_id': accessId,
      'tonce': Date.now(),
      'coint_type': coinType,
      'smart_contract_name': smartContractName,
      'coin_address': coinAddress,
      'transfer_method': transferMethod,
      'actual_amount': actualAmount,
    };

    const auth = this.sign(body, secretKey);
    const resp = await this.client.post<WithdrawResponse>('balance/coin/withdraw',
      body,
      {
        headers: {
          'content-type': 'application/json',
          authorization: auth,
        },
      });
    return resp.data;
  }

  // WARNING: the return type is probably not compatible with
  // the provided response type in the official document
  public async inquireWithdrawalList(
    accessId: string,
    secretKey: string,
    coinType?: string,
    coinWithdrawId?: string,
    page?: string,
    limit?: string,
  ): Promise<InquireWithdrawalListResponse> {
    const body: { [key: string] : any } = {
      'access_id': accessId,
      'tonce': Date.now(),
      'coint_type': coinType,
      'coin_withdraw_id': coinWithdrawId,
      'page': page,
      'Limit': limit,
    };

    const auth = this.sign(body, secretKey);
    const resp = await this.client.get<InquireWithdrawalListResponse>(`balance/coin/withdraw?${qs.stringify(body)}`,
      {
        headers: {
          'content-type': 'application/json',
          authorization: auth,
        },
      });
    return resp.data;
  }

  public async getDepositAddress(
    accessId: string,
    secretKey: string,
    smartContractName?: number,
    isSplit?: number,
  ): Promise<GetDepositAddressResponse> {
    const body: { [key: string] : any } = {
      'access_id': accessId,
      'tonce': Date.now(),
      'smart_contract_name': smartContractName,
      'is_split': isSplit,
    };

    const auth = this.sign(body, secretKey);
    const resp = await this.client.get<GetDepositAddressResponse>(`balance/coin/withdraw?${qs.stringify(body)}`,
      {
        headers: {
          'content-type': 'application/json',
          authorization: auth,
        },
      });
    return resp.data;
  }
}
