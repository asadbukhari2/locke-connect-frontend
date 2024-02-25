import React, { useState } from 'react';
import us from '../../../public/us.png';
import china from '../../../public/china.png';
import spain from '../../../public/spanish.png';
import message from '../../../public/message.svg';
import share from '../../../public/share.svg';
import location from '../../../public/locationIcon.svg';
import heart from '../../../public/heartdanger.svg';
import Image from 'next/image';
import Button from '../Button';
import { UserDetailText, UserDetailWrapper } from './UserDetail.styles';
import { useContextHook } from 'use-context-hook';
import { AuthContext } from '@/context/authContext';
import { useDispatch, useSelector } from 'react-redux';
import { getMessages, setCurrentConversation, setMessages } from '@/features/messageSlice';
import { useRouter } from 'next/router';
import Toast from '../Toast';
import BoughtSold from '../BoughtSold';
import { FaHeart } from 'react-icons/fa6';
import { useTranslation } from '@/helpers/useTranslation';
const Commission = ['Seller 2.5 ; Seller Pays', 'Buyer 25% ; Seller Pays Or Buyer Pays', 'Negotiable'];
const language = [
  { img: us, lang: 'English',value:'english' },
  { img: china, lang: 'Chinese',value:'chinese' },
  { img: spain, lang: 'Spanish',value:'spanish' },
];


const UserDetail = ({ setModal, detail }) => {
  console.log({detail})
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const router = useRouter();

  const { user } = useContextHook(AuthContext, ['user']);

  const { conversations } = useSelector(state => state.chat);

  const conversationHandler = async () => {
    try {
      const detailId = detail.id;
      const userId = user.id;

      const existingConversationIndex = conversations.findIndex(
        conv => conv.participants.includes(detailId) && conv.participants.includes(userId),
      );
      const conversation = conversations?.find(
        itm => itm?.participants?.includes(detailId) && itm?.participants.includes(userId),
      );
      if (existingConversationIndex !== -1) {
        setModal(false);
        //in case of conversation already exists
        dispatch(setCurrentConversation(conversation));
        const { author, reviever, _id } = conversation;
        dispatch(getMessages({ author, reviever, conversationId: _id }));
        router.push('/chat');
      } else {
        const newConversation = {
          saved: false,
          messages: [],
          initBy: userId,
          isActive: true,
          receiver: detailId,
          photoURL: detail.photoURL,
          participants: [detailId, userId],
          channelName: detail.displayName,
          lastMessage: { text: 'No Message' },
        };

        dispatch(setCurrentConversation(newConversation));
        dispatch(setMessages([]));
        router.replace('/chat');
        setModal(false);
      }
    } catch (error) {
      console.log(error);
      Toast({ type: 'error', message: error.message });
    }
  };
  const [fav, setFav] = useState(false);
  return (
    <UserDetailWrapper>
      <div className="detail">
        <div className="imageWrapper">
          <Image src={detail.photoURL} alt="user" width={359} height={448} />
        </div>
        <BoughtSold className="BoughtSold" bought={detail?.housesBought?? 0} sold={detail?.housesSold?? 0} />
      </div>
      <div className="TextWrapper">
        <UserDetailText>
          <div className="name">
            <h2>{detail.displayName}</h2>
            <p>
              {t('License')} #{detail.licenseNumber} ({detail?.agentType??'Agent'})
            </p>
          </div>
          <div className="userInfo">
            <span>{t('About me')}</span>
            <p>{detail.about}</p>
          </div>
          <div className="userService">
            <span>{t('Services included')}</span>
            <ul>
              {detail?.services?.map((elem, ind) => (
                <li key={ind}>{elem}</li>
              ))}
                {!detail?.services?.length && (
                'N/A'
              )}
            </ul>
          </div>
          <div className="userService">
            <span>{t('Language skills')}</span>
            <ul>
              {language?.filter((itm)=>detail?.languages?.includes(itm?.value))?.map((elem, ind) => (
                <li key={ind}>
                  <figure className="img">
                    <Image src={elem.img} alt="state" />
                  </figure>
                  {elem.lang}
                </li>
              ))}
              {!detail?.languages?.length && (
                'N/A'
              )}
            </ul>
          </div>
          <div className="userService">
            <span>{t('Home closed in')}</span>
            <ul>
              {detail?.homeClosedIn?.map((elem, ind) => (
                <li key={ind}>
                  <Image src={location} alt="state" />
                  {elem}
                </li>
              ))}
                {!detail?.homeClosedIn?.length && (
                'N/A'
              )}
            </ul>
          </div>
          <div className="userService">
            <span>{t('Commission')}</span>
            <ul>
              {detail?.comission?.filter(v=>v?.value)?.map((elem, ind) => (
                <li key={ind}>{elem?.type}: {elem?.value?? 0}%</li>
              ))}
               {!detail?.comission?.length && (
                'N/A'
              )}
            </ul>
          </div>
        
        </UserDetailText>
        <div className="buttonWrapper">
          <Button variant="primary" onClick={conversationHandler}>
            <Image src={message} alt="message" />
            {t('Send Message')}
          </Button>
          <Button outline>
            <Image src={share} alt="share" />
            {t('Share')}
          </Button>
          <Button outline className="like lastButton" onClick={() => setFav(!fav)}>
            {fav ? <FaHeart size={25} color="var(--danger-500)" /> : <Image src={heart} alt="fav" />}
          </Button>
        </div>
      </div>
    </UserDetailWrapper>
  );
};

export default UserDetail;
