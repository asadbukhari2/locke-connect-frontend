import React from 'react';
import { ChatProfileWrapper, StyledChatAside } from './ChatAside.styles';
import Badge from '@/components/Badge';
import ChatProfile from '../ChatProfile';
import Input from '@/components/TextField';
import magnifier from '../../../../public/magnifier.svg';
import Image from 'next/image';

import { useSelector } from 'react-redux';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { useRouter } from 'next/router';
import Loaders from '@/components/Loaders';
import { NoRecordFound } from '@/components/NoRecordFound/NoRecord.styles';
import { useTranslation } from '@/helpers/useTranslation';
import Button from '@/components/Button';
import shine from '../../../../public/shine.png';
const ChatAside = ({ sidebar }) => {
  const router = useRouter();
  const { t } = useTranslation();

  const { conversations, loading } = useSelector(state => state.chat);
  return (
    <StyledChatAside>
      <>
        {!sidebar && (
          <Button lg onClick={() => router.push('/chatBoat')}>
            <Image src={shine} alt="shine" />
            Talk to Locke AIbert
          </Button>
        )}
        {!sidebar && <Input hasIcon={<Image src={magnifier} alt="search" />} />}
        <div className="title">
          {t('Chat')}
          {!loading && <Badge $variant="dark" child={conversations?.length} />}
        </div>
        <ChatProfileWrapper $height={sidebar}>
          {loading ? (
            <Loaders loading={loading} height={100} />
          ) : !conversations?.length ? (
            <NoRecordFound>{t('No Chats Found')}</NoRecordFound>
          ) : (
            conversations?.map(conversation => <ChatProfile key={conversation.id} data={conversation} />)
          )}
        </ChatProfileWrapper>
        {sidebar && (
          <div className="viewAll" onClick={() => router.push('/chat')}>
            <p>{t('View All')}</p>
            <IoIosArrowRoundForward size="25" className="ico" />
          </div>
        )}
      </>
      hamza
    </StyledChatAside>
  );
};

export default ChatAside;
