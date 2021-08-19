[@dallaal/node-coinex](../README.md) / [Exports](../modules.md) / CoinexTrading

# Class: CoinexTrading

## Hierarchy

- `Coinex`

  ↳ **`CoinexTrading`**

## Table of contents

### Constructors

- [constructor](CoinexTrading.md#constructor)

### Properties

- [client](CoinexTrading.md#client)

### Methods

- [IOCOrder](CoinexTrading.md#iocorder)
- [aquireOrderStatus](CoinexTrading.md#aquireorderstatus)
- [cancelAllOrders](CoinexTrading.md#cancelallorders)
- [cancelMultipleOrder](CoinexTrading.md#cancelmultipleorder)
- [cancelOrder](CoinexTrading.md#cancelorder)
- [limitOrder](CoinexTrading.md#limitorder)
- [marketOrder](CoinexTrading.md#marketorder)
- [sign](CoinexTrading.md#sign)
- [stopLimitOrder](CoinexTrading.md#stoplimitorder)

## Constructors

### constructor

• **new CoinexTrading**()

#### Inherited from

Coinex.constructor

## Properties

### client

• `Private` **client**: `AxiosInstance`

#### Defined in

[coinexTradingHttpClient.ts:8](https://github.com/dallaal/node-coinex/blob/ded8e0c/src/coinexTradingHttpClient.ts#L8)

## Methods

### IOCOrder

▸ **IOCOrder**(`accessId`, `secretKey`, `symbol`, `side`, `amount`, `price`, `sourceId?`, `accountId?`, `clientId?`): `Promise`<[`IOCOrderResponse`](../modules.md#iocorderresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessId` | `string` |
| `secretKey` | `string` |
| `symbol` | `string` |
| `side` | `string` |
| `amount` | `string` |
| `price` | `string` |
| `sourceId?` | `string` |
| `accountId?` | `string` |
| `clientId?` | `string` |

#### Returns

`Promise`<[`IOCOrderResponse`](../modules.md#iocorderresponse)\>

#### Defined in

[coinexTradingHttpClient.ts:128](https://github.com/dallaal/node-coinex/blob/ded8e0c/src/coinexTradingHttpClient.ts#L128)

___

### aquireOrderStatus

▸ **aquireOrderStatus**(`accessId`, `secretKey`, `id`, `symbol`): `Promise`<[`AquireOrderStatusResponse`](../modules.md#aquireorderstatusresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessId` | `string` |
| `secretKey` | `string` |
| `id` | `string` |
| `symbol` | `string` |

#### Returns

`Promise`<[`AquireOrderStatusResponse`](../modules.md#aquireorderstatusresponse)\>

#### Defined in

[coinexTradingHttpClient.ts:241](https://github.com/dallaal/node-coinex/blob/ded8e0c/src/coinexTradingHttpClient.ts#L241)

___

### cancelAllOrders

▸ **cancelAllOrders**(`accessId`, `secretKey`, `symbol`, `accountId?`): `Promise`<[`CancelAllOrdersResponse`](../modules.md#cancelallordersresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessId` | `string` |
| `secretKey` | `string` |
| `symbol` | `string` |
| `accountId?` | `string` |

#### Returns

`Promise`<[`CancelAllOrdersResponse`](../modules.md#cancelallordersresponse)\>

#### Defined in

[coinexTradingHttpClient.ts:217](https://github.com/dallaal/node-coinex/blob/ded8e0c/src/coinexTradingHttpClient.ts#L217)

___

### cancelMultipleOrder

▸ **cancelMultipleOrder**(`accessId`, `secretKey`, `batchIds`, `symbol`, `accountId?`): `Promise`<[`CancelMultipleOrderResponse`](../modules.md#cancelmultipleorderresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessId` | `string` |
| `secretKey` | `string` |
| `batchIds` | `string` |
| `symbol` | `string` |
| `accountId?` | `string` |

#### Returns

`Promise`<[`CancelMultipleOrderResponse`](../modules.md#cancelmultipleorderresponse)\>

#### Defined in

[coinexTradingHttpClient.ts:191](https://github.com/dallaal/node-coinex/blob/ded8e0c/src/coinexTradingHttpClient.ts#L191)

___

### cancelOrder

▸ **cancelOrder**(`accessId`, `secretKey`, `id`, `symbol`, `side`, `accountId?`): `Promise`<[`CancelOrderResponse`](../modules.md#cancelorderresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessId` | `string` |
| `secretKey` | `string` |
| `id` | `number` |
| `symbol` | `string` |
| `side` | `string` |
| `accountId?` | `string` |

#### Returns

`Promise`<[`CancelOrderResponse`](../modules.md#cancelorderresponse)\>

#### Defined in

[coinexTradingHttpClient.ts:163](https://github.com/dallaal/node-coinex/blob/ded8e0c/src/coinexTradingHttpClient.ts#L163)

___

### limitOrder

▸ **limitOrder**(`accessId`, `secretKey`, `symbol`, `side`, `amount`, `price`, `sourceId?`, `option?`, `accountId?`, `clientId?`, `hide?`): `Promise`<[`LimitOrderResponse`](../modules.md#limitorderresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessId` | `string` |
| `secretKey` | `string` |
| `symbol` | `string` |
| `side` | `string` |
| `amount` | `string` |
| `price` | `string` |
| `sourceId?` | `string` |
| `option?` | `string` |
| `accountId?` | `string` |
| `clientId?` | `string` |
| `hide?` | `boolean` |

#### Returns

`Promise`<[`LimitOrderResponse`](../modules.md#limitorderresponse)\>

#### Defined in

[coinexTradingHttpClient.ts:12](https://github.com/dallaal/node-coinex/blob/ded8e0c/src/coinexTradingHttpClient.ts#L12)

___

### marketOrder

▸ **marketOrder**(`accessId`, `secretKey`, `symbol`, `side`, `amount`, `sourceId?`, `accountId?`, `clientId?`, `hide?`): `Promise`<[`MarketOrderResponse`](../modules.md#marketorderresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessId` | `string` |
| `secretKey` | `string` |
| `symbol` | `string` |
| `side` | `string` |
| `amount` | `string` |
| `sourceId?` | `string` |
| `accountId?` | `string` |
| `clientId?` | `string` |
| `hide?` | `boolean` |

#### Returns

`Promise`<[`MarketOrderResponse`](../modules.md#marketorderresponse)\>

#### Defined in

[coinexTradingHttpClient.ts:92](https://github.com/dallaal/node-coinex/blob/ded8e0c/src/coinexTradingHttpClient.ts#L92)

___

### sign

▸ `Protected` **sign**(`body`, `secretKey`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | `Object` |
| `secretKey` | `string` |

#### Returns

`string`

#### Inherited from

Coinex.sign

#### Defined in

[coinex.ts:5](https://github.com/dallaal/node-coinex/blob/ded8e0c/src/coinex.ts#L5)

___

### stopLimitOrder

▸ **stopLimitOrder**(`accessId`, `secretKey`, `symbol`, `side`, `amount`, `price`, `stopPrice`, `sourceId?`, `option?`, `accountId?`, `clientId?`, `hide?`): `Promise`<[`StopLimitOrderResponse`](../modules.md#stoplimitorderresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessId` | `string` |
| `secretKey` | `string` |
| `symbol` | `string` |
| `side` | `string` |
| `amount` | `string` |
| `price` | `string` |
| `stopPrice` | `string` |
| `sourceId?` | `string` |
| `option?` | `string` |
| `accountId?` | `string` |
| `clientId?` | `string` |
| `hide?` | `boolean` |

#### Returns

`Promise`<[`StopLimitOrderResponse`](../modules.md#stoplimitorderresponse)\>

#### Defined in

[coinexTradingHttpClient.ts:51](https://github.com/dallaal/node-coinex/blob/ded8e0c/src/coinexTradingHttpClient.ts#L51)
