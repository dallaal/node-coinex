[@dallaal/node-coinex](../README.md) / [Exports](../modules.md) / CoinexAccount

# Class: CoinexAccount

## Hierarchy

- `Coinex`

  ↳ **`CoinexAccount`**

## Table of contents

### Constructors

- [constructor](CoinexAccount.md#constructor)

### Properties

- [client](CoinexAccount.md#client)

### Methods

- [getDepositAddress](CoinexAccount.md#getdepositaddress)
- [inquireAccountInfo](CoinexAccount.md#inquireaccountinfo)
- [inquireWithdrawalList](CoinexAccount.md#inquirewithdrawallist)
- [sign](CoinexAccount.md#sign)
- [withdraw](CoinexAccount.md#withdraw)

## Constructors

### constructor

• **new CoinexAccount**()

#### Inherited from

Coinex.constructor

## Properties

### client

• `Private` **client**: `AxiosInstance`

#### Defined in

[coinexAccountHttpClient.ts:8](https://github.com/dallaal/node-coinex/blob/ded8e0c/src/coinexAccountHttpClient.ts#L8)

## Methods

### getDepositAddress

▸ **getDepositAddress**(`accessId`, `secretKey`, `smartContractName?`, `isSplit?`): `Promise`<[`GetDepositAddressResponse`](../modules.md#getdepositaddressresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessId` | `string` |
| `secretKey` | `string` |
| `smartContractName?` | `string` |
| `isSplit?` | `number` |

#### Returns

`Promise`<[`GetDepositAddressResponse`](../modules.md#getdepositaddressresponse)\>

#### Defined in

[coinexAccountHttpClient.ts:93](https://github.com/dallaal/node-coinex/blob/ded8e0c/src/coinexAccountHttpClient.ts#L93)

___

### inquireAccountInfo

▸ **inquireAccountInfo**(`accessId`, `secretKey`): `Promise`<[`InquireAccountInfoResponse`](../modules.md#inquireaccountinforesponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessId` | `string` |
| `secretKey` | `string` |

#### Returns

`Promise`<[`InquireAccountInfoResponse`](../modules.md#inquireaccountinforesponse)\>

#### Defined in

[coinexAccountHttpClient.ts:12](https://github.com/dallaal/node-coinex/blob/ded8e0c/src/coinexAccountHttpClient.ts#L12)

___

### inquireWithdrawalList

▸ **inquireWithdrawalList**(`accessId`, `secretKey`, `coinType?`, `coinWithdrawId?`, `page?`, `limit?`): `Promise`<[`InquireWithdrawalListResponse`](../modules.md#inquirewithdrawallistresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessId` | `string` |
| `secretKey` | `string` |
| `coinType?` | `string` |
| `coinWithdrawId?` | `string` |
| `page?` | `string` |
| `limit?` | `string` |

#### Returns

`Promise`<[`InquireWithdrawalListResponse`](../modules.md#inquirewithdrawallistresponse)\>

#### Defined in

[coinexAccountHttpClient.ts:65](https://github.com/dallaal/node-coinex/blob/ded8e0c/src/coinexAccountHttpClient.ts#L65)

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

### withdraw

▸ **withdraw**(`accessId`, `secretKey`, `coinType`, `coinAddress`, `transferMethod`, `actualAmount`, `smartContractName?`): `Promise`<[`WithdrawResponse`](../modules.md#withdrawresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessId` | `string` |
| `secretKey` | `string` |
| `coinType` | `string` |
| `coinAddress` | `string` |
| `transferMethod` | `string` |
| `actualAmount` | `string` |
| `smartContractName?` | `string` |

#### Returns

`Promise`<[`WithdrawResponse`](../modules.md#withdrawresponse)\>

#### Defined in

[coinexAccountHttpClient.ts:32](https://github.com/dallaal/node-coinex/blob/ded8e0c/src/coinexAccountHttpClient.ts#L32)
