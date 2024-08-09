import React from 'react';
import data from '../../public/__mocks__/card_mocks.json';
import DashboardLayout from 'app/_components/DashboardLayout';
import { cardDataType } from 'app/types/types';

interface Props {
  dashboardCardData: cardDataType[];
}

const Page: React.FC<Props> = ({ dashboardCardData }) => {
  return (
    <div>
      <DashboardLayout dashboardCardData={dashboardCardData} />
    </div>
  );
}

// default prop olarak veriyi geçin
Page.defaultProps = {
  dashboardCardData: data,
};

export default Page;
