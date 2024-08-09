import React from 'react'
import data from '../../public/__mocks__/card_mocks.json'
import Card from 'app/_components/Card'
import { cardData } from 'app/types/types'
import DashboardLayout from 'app/_components/DashboardLayout'

type data = {
  dashCardData: cardData
}

const page:React.FC<data> = () => {
  return (
    <div><DashboardLayout dashCardData={data}/></div>
  )
}

export default page