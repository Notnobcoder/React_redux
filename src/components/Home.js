import React from 'react'
import "../App.css"

export const Home = () => {
  return (
    <div className='home'>
        <div >
            <img className='addtocart' src="https://static.thenounproject.com/png/845467-200.png" alt="" />
        </div>
        <h1>Phone store</h1>

        <div className='homec'>
            <div className="image">
                <img className='img' src="https://cdn.vox-cdn.com/thumbor/SJcmPEheS_cbdujd4zbIPTpuXfg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13315959/akrales_181019_3014_0770.jpg" alt="" />
            </div>
            <div>
                <span>
                    iphone
                </span>
                <span>
                    price :$1000
                </span>
                <button>add to cart</button>
            </div>
        </div>
    </div>
  )
}
