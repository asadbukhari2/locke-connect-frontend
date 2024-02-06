import React from 'react';
import TodayTip from '../TodayTip';
import { Aside } from './Sidebar.styles';
import ChatWidget from '../ChatWidget/ChatWidget';
import NotificationWidget from '../NotificationWidget/NotificationWidget';
import MortgageCalculator from '../MortgageCalculator';
import { usePathname } from 'next/navigation';
import ChatAside from '../chat/ChatAside';

function Sidebar({ setRateModal }) {
  const router = usePathname();
  const homeSideBar = ['/', '/my-profile', '/selling', '/chat', '/agent-profile', '/notification'].includes(router);

  return (
    <Aside>
      {/* only For Chat */}
      {router?.includes('/chat') && <ChatAside />}
      {/* only For Chat */}

      {/* Home Page */}
      {homeSideBar && <>{router?.includes('/chat') ? '' : <NotificationWidget $marginB />}</>}
      {/* Home Page */}

      {/* Property Detail */}
      {router?.includes('/property-detail') && <MortgageCalculator />}

      {/* Property Detail */}
      {router?.includes('/chat') ? '' : <ChatAside sidebar={true} />}

      {homeSideBar && <TodayTip heading="Loan Products & Todays Rate" setRateModal={setRateModal} />}
    </Aside>
  );
}

export default Sidebar;
