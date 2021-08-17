export type LimitOrderResponse = {
  'code': number,
  'data': {
    'amount': string, // order count
    'asset_fee': string, // asset fee
    'avg_price': string, // average order price
    'create_time': number, // order placing time
    'deal_amount': string, // executed amount
    'deal_fee': string, // transaction fee
    'deal_money': string, // executed value
    'fee_asset': string, // fee asset
    'fee_discount': string, // fee discount
    'id': number, // order no.
    'left': string, // unexecuted amount
    'maker_fee_rate': string, // maker rate
    'market': string, // market
    'money_fee': string, // money fee
    'order_type': string, // order type: limit: limit order;market: market order;
    'price': string, // order price
    'source_id': string, // user-defined no.
    'status': string, // order status: done:executed;part_deal:partly executed;not_deal:unexecuted;
    'taker_fee_rate': string, // taker rate
    'type': string, // order type: sell: sell;buy: buy;
    'client_id': string, // client_id: return what you give
  },
  'message': string,
};

export type StopLimitOrderResponse = {
  'code': number,
  'data': {
    'status': string,
  },
  'message': string,
};

export type MarketOrderResponse = {
  'code': number,
  'data': {
    'amount': string, // order count
    'asset_fee': string, // asset fee
    'avg_price': string, // average order price
    'create_time': number, // order placing time
    'deal_amount': string, // executed amount
    'deal_fee': string, // deal fee
    'deal_money': string, // executed value
    'fee_asset': string, // fee asset
    'fee_discount': string, // fee discount
    'finished_time': number, // finished time
    'id': number, // order no.
    'left': string, // unexecuted amount
    'maker_fee_rate': string, // maker rate
    'market': string, // market
    'money_fee': string, // money fee
    'order_type': string, // order type: limit: limit order;market: market order;
    'price': string, // order price
    'stock_fee': string, // stock fee
    'source_id': string, // user-defined no.
    'status': string, // order status: done:executed;part_deal:partly executed;not_deal:unexecuted;
    'taker_fee_rate': string, // taker rate
    'type': string, // order type: sell: sell;buy: buy;
    'client_id': string, // client id: return what you give
  },
  'message': string,
};

export type IOCOrderResponse = {
  'code': number,
  'data': {
    'amount': string, // order count
    'asset_fee': string, // asset fee
    'avg_price': string, // average order price
    'create_time': number, // order placing time
    'deal_amount': string, // executed amount
    'deal_fee': string, // transaction fee
    'deal_money': string, // executed value
    'fee_asset': string, // fee asset
    'fee_discount': string, // fee discount
    'id': number, // order no.
    'left': string, // unexecuted amount
    'maker_fee_rate': string, // maker rate
    'market': string, // market
    'money_fee': string, // money fee
    'order_type': string, // order type: limit: limit order;market: market order;
    'price': string, // order price
    'source_id': string, // user-defined no.
    'status': string, // order status: done:executed;part_deal:partly executed;not_deal:unexecuted;
    'taker_fee_rate': string, // taker rate
    'type': string, // order type: sell: sell;buy: buy;
    'client_id': string, // client_id: return what you give
  },
  'message': string,
};

export type CancelOrderResponse = {
  'code': number,
  'data': {
    'amount': string, // order count
    'asset_fee': string // asset fee
    'avg_price': string, // average order price
    'create_time': string, // order placing time
    'deal_amount': string, // executed amount
    'deal_fee': string, // transaction fee
    'deal_money': string, // executed value
    'fee_asset': string, // fee asset
    'fee_discount': string, // fee discount
    'id': number, // order no.
    'left': string, // unexecuted amount
    'maker_fee_rate': string, // maker rate
    'market': string, // market
    'money_fee': string, // money fee
    'order_type': string, // order type: limit: limit order;market: market order;
    'price': string, // order price
    'source_id': string, // user-defined no.
    'status': string, // order status: done:executed;part_deal:partly executed;not_deal:unexecuted;
    'taker_fee_rate': string, // taker rate
    'type': string, // order type: sell: sell;buy: buy;
    'client_id': string, // client_id: return what you give
  },
  'message': string,
};

export type CancelMultipleOrderResponse = {
  'code': number,
  'data': [
    {
      'code': number,
      'data': {
        'amount': string, // order count
        'asset_fee': string, // asset fee
        'avg_price': string, // average order price
        'create_time': number, // order placing time
        'deal_amount': string, // deal amount
        'deal_fee': string, // transaction fee
        'deal_money': string, // executed value
        'fee_asset': string, // fee asset
        'fee_discount': string, // fee discount
        'id': number, // order no.
        'left': string, // unexecuted amount
        'maker_fee_rate': string, // maker rate
        'market': string, // market
        'money_fee': string, // money fee
        'order_type': string, // order type: limit: limit order;market: market order;
        'price': string, // order price
        'source_id': string, // user-defined no.
        'status': string, // order status: done:executed;part_deal:partly executed;not_deal:unexecuted;
        'taker_fee_rate': string, // taker rate
        'type': string, // order type: sell: sell;buy: buy;
        'client_id': string, // client_id: return what you give
      },
      'message': string,
    },
  ]
  'message': string,
};

export type CancelAllOrdersResponse = {
  'code': number,
  'data': {
  },
  'message': string,
};

export type AquireOrderStatusResponse = {
  'code': number,
  'data': {
    'amount': string, // order count
    'asset_fee': string // asset fee
    'avg_price': string, // average order price
    'create_time': number, // order placing time
    'deal_amount': string, // executed amount
    'deal_fee': string, // transaction fee
    'deal_money': string, // executed value
    'fee_asset': string, // fee asset
    'fee_discount': string, // fee discount
    'id': number, // order no.
    'left': string, // unexecuted amount
    'maker_fee_rate': string, // maker rate
    'market': string, // market
    'money_fee': string, // money fee
    'order_type': string, // order type: limit: limit order;market: market order;
    'price': string, // order price
    'source_id': string, // user-defined no.
    'status': string, // order status: done:executed;part_deal:partly executed;not_deal:unexecuted;
    'taker_fee_rate': string, // taker rate
    'type': string, // order type: sell: sell;buy: buy;
    'client_id': string, // client_id: return what you give
  },
  'message': string,
};

export type InquireAccountInfoResponse = {
  'code': number,
  'data':{
    [asset: string]: {
      'available': string, // Available asset
      'frozen': string, // Frozen asset
    },
  },
  'message': string,
};

export type WithdrawResponse = {
  'code': number,
  'data': {
    'actual_amount': string,
    'amount': string,
    'coin_address': string,
    'coin_type': string,
    'coin_withdraw_id': number,
    'confirmations': number,
    'create_time': number,
    'status': string,
    'tx_fee': string,
    'tx_id': string
  },
  'message': string,
};

export type InquireWithdrawalListResponse = {
  'code': number,
  'data': [
    {
      'actual_amount': string,
      'amount': string,
      'coin_address': string,
      'coin_type': string,
      'coin_withdraw_id': number,
      'confirmations': number,
      'create_time': number,
      'status': string,
      'tx_fee': string,
      'tx_id': string
    },
  ],
  'message': string,
};

export type GetDepositAddressResponse = {
  'code': number,
  'data': {
    'coin_address': string,
    'create_time': number,
    'deposit_address_id': number,
    'is_bitcoin_cash': boolean,
    'status': string
  },
  'message': string,
};

export type AcquireMarketListResponse = {
  'code': number,
  'data': string[],
  'message': string,
};

export type AcquireMarketInformationResponse = {
  'code': number,
  'message': string,
  'data': {
    [key:string]: {
      'taker_fee_rate': string,
      'pricing_name': string,
      'trading_name': string,
      'min_amount': string,
      'name': string,
      'trading_decimal': number,
      'maker_fee_rate': string,
      'pricing_decimal': number,
    }
  }
};

export type AcquireSingleMarketInformationResponse = {
  code: number,
  data: {
    name: string,
    min_amount: string,
    maker_fee_rate: string,
    taker_fee_rate: string,
    pricing_name: string,
    pricing_decimal: number,
    trading_name: string,
    trading_decimal: number,
  },
  message: string,
};

export type AcquireLatestTransactionDataResponse = {
  code: number,
  data: [
    {
      id: number,
      type: string,
      price: string,
      amount: string,
      date: number,
      date_ms: number,
    },
  ],
  message: string,
};

export type AcquireKLineDataResponse = {
  code: number,
  data: [
    {
      time: number,
      opening: string,
      closing: string,
      highest: string,
      lowest: string,
      volume: string,
      amount: string,
      market: string,
    },
  ],
  message: string,
};

export type AcquireMarketStatisticsResponse = {
  date: number,
  ticker: {
    vol: string,
    low: string,
    open: string,
    high: string,
    last: string,
    buy: string,
    buy_amount: string,
    sell: string,
    sell_amount: string,
  }
};

export type AcquireAllMarketDataResponse = {
  code: number,
  data: {
    date: number,
    ticker: {
      [key: string]: {
        vol: string,
        low: string,
        open: string,
        high: string,
        last: string,
        buy: string,
        buy_amount: string,
        sell: string,
        sell_amount: string,
      },
    }
  }
  message: string,
};
