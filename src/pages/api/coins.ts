import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // lakukan fetch data dari API CoinMarketCap
    const response = await fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=4&convert=USD`, {
      headers: {
        'X-CMC_PRO_API_KEY': process.env.X_CMC_PRO_API_KEY || ''
      }
    })
    const data = await response.json()
    const formattedData = data.data.map((crypto:any) => {
        return {
            chips: crypto.symbol,
            name: crypto.name,
            value: crypto.quote.USD.price,
            precentage: crypto.quote.USD.percent_change_24h
        }
    })
    res.status(200).json(formattedData)
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' })
  }
}