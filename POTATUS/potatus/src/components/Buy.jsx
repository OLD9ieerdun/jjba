import React from 'react'
import './components.css'
import FirstCard from './cards/FirstCard'
import SecondCard from './cards/SecondCard'
import ThirdCard from './cards/ThirdCard'
import FourthCard from './cards/FourthCard'
import FifthCard from './cards/FifthCard'
import SixthCard from './cards/SixthCard'

const Buy = () => {
  return (
    <div>
      <div className='Buy-Content'>
        <div className='Buy-List'>
          <div className='Cards'>
            <FirstCard/>
            <SecondCard/>
          </div>
          <div className='Cards'>
            <ThirdCard/>
            <FourthCard/>
          </div>
          <div className='Cards'>
            <FifthCard/>
            <SixthCard/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Buy