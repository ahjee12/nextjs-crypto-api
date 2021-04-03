import Coins from "./Coins";

// pages index.js에서 export한 api filteredCoins 가져와서 coinList에 넣음
// export default function CoinList({filteredCoins}) {
//     console.log(filteredCoins)
//     return (
//         <>
//             {filteredCoins.map(coin =>{
//                 return (
//                     <Coins 
//                         key = {coin.id}
//                         name = {coin.name}
//                         id = {coin.id}
//                         symbol = {coin.symbol}

//                         price = {coin.current_price}
//                         marketcap = {coin.market_cap}
//                         volume = {coin.total_volume}
//                         image = {coin.image}
//                         priceChange = {coin.price_change_percentage_24h}
//                     />
//                 )
//             })}
//         </>
//     )
    
// }

const CoinList = ({filteredCoins}) =>{
    console.log(filteredCoins)
        return (
            <>
                {filteredCoins.map(coin =>{
                    return (
                        <Coins 
                            key = {coin.id}
                            name = {coin.name}
                            id = {coin.id}
                            symbol = {coin.symbol}
    
                            price = {coin.current_price}
                            marketcap = {coin.market_cap}
                            volume = {coin.total_volume}
                            image = {coin.image}
                            priceChange = {coin.price_change_percentage_24h}
                        />
                    )
                })}
            </>
        )
}

export default CoinList