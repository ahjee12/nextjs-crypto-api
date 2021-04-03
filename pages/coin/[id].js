import React from 'react'
import Layout from '../../components/Layout'
import styles from './Coin.module.css'

// pages에 index.js 링크 페이지 [id] Layout
const Coin = ({coin}) => {
    return (
        <Layout>
            <div className={styles.coin_page}>
                <div className={styles.coin_container}>
                    <img className={styles.coin_image} src={coin.image.large} alt={coin.name} />
                    <h1 className={styles.coin_name}>{coin.name}</h1>
                    <p className={styles.coin_ticker}>{coin.symbol}</p>
                    <p className={styles.coin_current}>{coin.market_data.current_price.usd}</p>
                </div>
            </div>
        </Layout>
    )
} 

export default Coin

export async function getServerSideProps(context){
    const {id} = context.query 
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`)

    const data = await res.json()

    return{
        props: {
            coin: data
        }
    }
}