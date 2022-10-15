import React, { useState } from 'react';
import { RiSearch2Line } from 'react-icons/ri';
import { BiBell } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { getAsyncCoins } from "../../components/CoinsData/CoinSlice";

const Navigation = () => {

    const [searchValue, setSearchValue] = useState("");

    const dispatch = useDispatch();

    const search = () => {
        dispatch(getAsyncCoins(searchValue.toLowerCase()));
    }

    const enterSearch = (e) => {
        if (e.key === "Enter") {
            search();
        }
    }

    return (
        <header className='bg-[#1b1f24] flex md:flex-row flex-col relative mt-2 text-white items-center w-[98%] h-[10%] p-2 justify-start md:justify-between'>
            <div className='flex text-2xl items-center justify-start w-[100%] md:w-[55%] h-full'>
                <div className='md:text-2xl text-xl flex items-center justify-start px-4 h-full w-[150px]'><p>ارز دیجیتال</p></div>
                <div className='flex items-start justify-start'>
                    <div onClick={search} className='w-10 text-xl cursor-pointer rounded-r text-[#dfdfe0] h-9 bg-[#121418] flex items-center justify-center'>
                        <RiSearch2Line />
                    </div>
                    <input onChange={(e) => setSearchValue(e.target.value)} onKeyPress={enterSearch} type="text" className='bg-[#121418] h-9 w-[100%] text-lg p-2 outline-none rounded-l' placeholder="جستجو..." />
                </div>
            </div>
            <div className='md:w-1/6 w-full mt-5 md:mt-0 h-full flex items-center justify-end md:justify-between px-4 '>
                <BiBell className='text-2xl ml-5 md:ml-0' />
                <img className='w-9 h-9 rounded-full flex items-center justify-center' src="https://static.vecteezy.com/packs/media/vectors/term-bg-1-666de2d9.jpg" alt="" />
            </div>
        </header>
    );
}

export default Navigation;