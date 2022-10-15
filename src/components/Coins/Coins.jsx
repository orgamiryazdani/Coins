
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getAsyncCoins } from "../../components/CoinsData/CoinSlice";
import Loading from "../../common/loading/Loading";
import NotFund from "../../common/NotFund/NotFund";
import { MdOutlineNavigateNext } from "react-icons/md";


const Coins = () => {

    const dispatch = useDispatch();
    const { coins, loading, error } = useSelector((state) => state.coins);

    useEffect(() => {
        dispatch(getAsyncCoins());
    }, [])

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <NotFund />
    }

    return (
        <menu className="w-[95%] mt-2 h-[88vh] bg-[#121418] mb-5 md:mb-0 rounded py-5 flex items-center justify-center">
            <div className='w-[95%] pl-4 h-full overflow-y-auto'>
                <div className='flex items-center justify-end text-[#949494] text-lg w-full h-10 '>
                    <div className='w-[54%] flex items-center justify-between  h-full'>
                        <p className='w-[34%] text-right'>ارز</p>
                        <p className='w-[34%] hidden md:block text-center'>نماد</p>
                        <p className='w-[34%] text-left'>قیمت</p>
                    </div>
                </div>
                {
                    coins.length > 0 ? coins.map((coin) => (
                        <NavLink to={`/chart-coins/${coin.id}`}>
                            <div key={coin.id} className="md:text-lg text-xs text-white border-t border-[#232428] cursor-pointer py-6 flex items-center justify-between  w-full h-11">
                                <div className='w-1/6 md:w-1/4 h-full flex items-center justify-start'>
                                    <img className='w-8 h-8 rounded-full' src={coin.image.large} alt="imageCoin" />
                                </div>
                                <div className='w-2/6 md:w-1/4 h-full flex items-center justify-end'>
                                    <p>{coin.id}</p>
                                </div>
                                <div className='w-1/4 hidden h-full md:flex items-center justify-end'>
                                    <p> {coin.symbol.toUpperCase()}</p>
                                </div>
                                <div className='w-3/6 md:w-1/4 h-full flex items-center justify-end'>
                                    <div className={`flex ${coin.market_data.price_change_percentage_24h < 0 ? "text-red-500" : "text-green-500"}`}>
                                        <p className='dir text-xs'>{coin.market_data.price_change_percentage_24h}</p>
                                        <MdOutlineNavigateNext className={coin.market_data.price_change_percentage_24h < 0 ? "rotate-90" : "rotate-[270deg]"} />
                                    </div>
                                    <span>{coin.market_data.current_price.usd} $ </span>
                                </div>
                            </div>
                        </NavLink>
                    )
                    ) : <p>amir</p>
                }
            </div>
        </menu>
    );
}

export default Coins;
