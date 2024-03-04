import React from 'react'
import './main.css'
import { FaCalendarAlt, FaRupeeSign, FaThumbsUp, FaUser, FaVideo } from 'react-icons/fa'
import hello from '../../assets/hello.svg'
import Chart from '../charts/Chart'

const Main = () => {
  return (
    <main>
        <div className='main_container'>
            <div className='main_title'>
                    <img src={hello} alt='hello' />
                    <div className='main_greeting'>
                        <h1>Hello Tit</h1>
                        <p>Welcome to your admin dashboard</p>
                    </div>
            </div>
            <div className='main_cards'>
                <div className='card'>
                <FaUser className='i text-lightblue' style={{color:"lightblue"}} />
                <div className='card_inner'>
                    <p className='text-primary-p'>
                        Number of Member
                    </p>
                    <span className='font-bold text_tile'>578</span>
                </div>
                </div>

                <div className='card'>
                <FaCalendarAlt className='i text-red' />
                <div className='card_inner'>
                    <p className='text-primary-p'>Times of Watching</p>
                    <span className='font-bold text-title'>2465</span>
                </div>
                </div>

                <div className='card'>
                <FaVideo className='i text-red' />
                <div className='card_inner'>
                    <p className='text-primary-p'>Number of Videos</p>
                    <span className='font-bold text-title'>340</span>
                </div>
                </div>
                
                <div className='card'>
                <FaThumbsUp className='i text-red' />
                <div className='card_inner'>
                    <p className='text-primary-p'>Number of Likes</p>
                    <span className='font-bold text-title'>645</span>
                </div>
                </div>
            </div>

            <div className='charts'>
                <div className='charts_left'>
                    <div className='charts_left_title'>
                        <div>
                            <h1>Daily Reports</h1>
                            <p>Dindigul, TamilNadu, IND</p>
                        </div>
                        <FaRupeeSign />
                    </div>
                    <Chart />
                </div>
                <div className='charts_right'>
                    <div className='charts_right_title'>
                        <div>
                            <h1>Status Reports</h1>
                            <p>Dindigul, TamilNadu, IND</p>
                        </div>
                        <FaRupeeSign />
                    </div>

                    <div className='charts_right_cards'>
                        <div className='card1'>
                            <h1>Income</h1>
                            <p>₹ 75,300</p>
                        </div>
                        <div className='card2'>
                            <h1>Sales</h1>
                            <p>₹ 1,24,800</p>
                        </div>
                        <div className='card3'>
                            <h1>Users</h1>
                            <p>3900</p>
                        </div>
                        <div className='card1'>
                            <h1>Orders</h1>
                            <p>1881</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </main>
  )
}

export default Main