[@dallaal/node-coinex](../README.md) / [Exports](../modules.md) / CoinexMarket

# Class: CoinexMarket

## Table of contents

### Constructors

- [constructor](CoinexMarket.md#constructor)

### Properties

- [client](CoinexMarket.md#client)

### Methods

- [acquireAllMarketData](CoinexMarket.md#acquireallmarketdata)
- [acquireKLineData](CoinexMarket.md#acquireklinedata)
- [acquireLatestTransactionData](CoinexMarket.md#acquirelatesttransactiondata)
- [acquireMarketInformation](CoinexMarket.md#acquiremarketinformation)
- [acquireMarketList](CoinexMarket.md#acquiremarketlist)
- [acquireMarketStatistics](CoinexMarket.md#acquiremarketstatistics)
- [acquireSingleMarketInformation](CoinexMarket.md#acquiresinglemarketinformation)

## Constructors

### constructor

• **new CoinexMarket**()

## Properties

### client

• `Private` **client**: `AxiosInstance`

#### Defined in

[coinexMarketHttpClient.ts:6](https://github.com/dallaal/node-coinex/blob/ba2ea2e/src/coinexMarketHttpClient.ts#L6)

## Methods

### acquireAllMarketData

▸ **acquireAllMarketData**(): `Promise`<[`AcquireAllMarketDataResponse`](../modules.md#acquireallmarketdataresponse)\>

#### Returns

`Promise`<[`AcquireAllMarketDataResponse`](../modules.md#acquireallmarketdataresponse)\>

#### Defined in

[coinexMarketHttpClient.ts:111](https://github.com/dallaal/node-coinex/blob/ba2ea2e/src/coinexMarketHttpClient.ts#L111)

___

### acquireKLineData

▸ **acquireKLineData**(`market`, `period`, `limit?`): `Promise`<[`AcquireKLineDataResponse`](../modules.md#acquireklinedataresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `market` | `string` |
| `period` | `string` |
| `limit?` | `number` |

#### Returns

`Promise`<[`AcquireKLineDataResponse`](../modules.md#acquireklinedataresponse)\>

#### Defined in

[coinexMarketHttpClient.ts:64](https://github.com/dallaal/node-coinex/blob/ba2ea2e/src/coinexMarketHttpClient.ts#L64)

___

### acquireLatestTransactionData

▸ **acquireLatestTransactionData**(`market`, `lastId?`, `limit?`): `Promise`<[`AcquireLatestTransactionDataResponse`](../modules.md#acquirelatesttransactiondataresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `market` | `string` |
| `lastId?` | `number` |
| `limit?` | `number` |

#### Returns

`Promise`<[`AcquireLatestTransactionDataResponse`](../modules.md#acquirelatesttransactiondataresponse)\>

#### Defined in

[coinexMarketHttpClient.ts:45](https://github.com/dallaal/node-coinex/blob/ba2ea2e/src/coinexMarketHttpClient.ts#L45)

___

### acquireMarketInformation

▸ **acquireMarketInformation**(): `Promise`<[`AcquireMarketInformationResponse`](../modules.md#acquiremarketinformationresponse)\>

#### Returns

`Promise`<[`AcquireMarketInformationResponse`](../modules.md#acquiremarketinformationresponse)\>

#### Defined in

[coinexMarketHttpClient.ts:21](https://github.com/dallaal/node-coinex/blob/ba2ea2e/src/coinexMarketHttpClient.ts#L21)

___

### acquireMarketList

▸ **acquireMarketList**(): `Promise`<[`AcquireMarketListResponse`](../modules.md#acquiremarketlistresponse)\>

#### Returns

`Promise`<[`AcquireMarketListResponse`](../modules.md#acquiremarketlistresponse)\>

#### Defined in

[coinexMarketHttpClient.ts:10](https://github.com/dallaal/node-coinex/blob/ba2ea2e/src/coinexMarketHttpClient.ts#L10)

___

### acquireMarketStatistics

▸ **acquireMarketStatistics**(`market`): `Promise`<[`AcquireMarketStatisticsResponse`](../modules.md#acquiremarketstatisticsresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `market` | `string` |

#### Returns

`Promise`<[`AcquireMarketStatisticsResponse`](../modules.md#acquiremarketstatisticsresponse)\>

#### Defined in

[coinexMarketHttpClient.ts:98](https://github.com/dallaal/node-coinex/blob/ba2ea2e/src/coinexMarketHttpClient.ts#L98)

___

### acquireSingleMarketInformation

▸ **acquireSingleMarketInformation**(`market`): `Promise`<[`AcquireSingleMarketInformationResponse`](../modules.md#acquiresinglemarketinformationresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `market` | `string` |

#### Returns

`Promise`<[`AcquireSingleMarketInformationResponse`](../modules.md#acquiresinglemarketinformationresponse)\>

#### Defined in

[coinexMarketHttpClient.ts:32](https://github.com/dallaal/node-coinex/blob/ba2ea2e/src/coinexMarketHttpClient.ts#L32)
