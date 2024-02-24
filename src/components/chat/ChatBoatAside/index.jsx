import React from 'react';
import { SidbarTabWrapper, StyledChatBoatAside } from './ChatBoatAside.styles';
import { useContextHook } from 'use-context-hook';
import { MyContext } from '@/context/card';

const ChatBoatAside = () => {
  const { tabs, setTabs, activeTab, setActiveTab, currentTab, setCurrentTab } = useContextHook(MyContext, [
    'tabs',
    'setTabs',
    'activeTab',
    'setActiveTab',
   
  ]);
  return (
    <StyledChatBoatAside>
      {Array.from({ length: tabs?.length }, (v, i) => (
        <SidbarTabWrapper $active={activeTab == i} onClick={()=> setActiveTab(i)}>
          <span className="title">Dolor sit amet consecteur</span>
          <span className="heading">lorem ipsum dolor</span>
          <div className="discreption">
            <p>Unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem</p>
          </div>
        </SidbarTabWrapper>
      ))}
    </StyledChatBoatAside>
  );
};

export default ChatBoatAside;
