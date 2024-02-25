import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards, Navigation, Autoplay } from 'swiper/modules';

import img6 from '../../../public/SliderImages/user6.png';
import share from '../../../public/SliderImages/share.png';
import comment from '../../../public/SliderImages/comment.png';
import { CardText, SliderMain, SliderWrapper } from './Card.styles';
import Image from 'next/image';
import { FaHeart, FaRegHeart } from 'react-icons/fa6';
import { useRouter } from 'next/router';
import ShareContact from '../chat/ChatModal/ShareContact';
import Modal from '../Modal';
import { AuthContext } from '@/context/authContext';
import { useContextHook } from 'use-context-hook';
import peoplesService from '@/services/peoples';
import { useTranslation } from '@/helpers/useTranslation';
import ShareContactLink from '../ShareContact';
import { useDispatch, useSelector } from 'react-redux';
import { getMessages, setCurrentConversation, setMessages } from '@/features/messageSlice';


export default function CardSlider({ agents }) {
  const [people, setPeople] = useState(agents);
  const [shareContacts, setShareContacts] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState(null);

  const { t } = useTranslation();
  const { user ,setUser,handleShareContact} = useContextHook(AuthContext, ['user','setUser','handleShareContact']);
  const { conversations } = useSelector(state => state.chat);
  const dispatch = useDispatch();

  useEffect(() => {
    const updatedPeoples = agents.map(person => ({
      ...person,
      isFav: user?.likedPeoples?.includes(person.id),
    }));
    setPeople(updatedPeoples);
  }, [agents]);

  const handelFavourite = async id => {
    try {
      const userToFav = { id };
      setPeople(prev => prev.map(elem => (elem.id == id ? { ...elem, isFav: !elem.isFav } : elem)));
      const response = await peoplesService.toggleFavouritePeople(userToFav);
      if (response?.success) {
        setPeople(prev => prev.map(elem => (elem.id == id ? { ...elem, isFav: false } : elem)));
        if(response?.message=='Added'){
          const arr=[...user?.likedPeoples,id]
          setUser((prev)=>({...prev,likedPeoples:arr}))

        }else{
         const userLikedPeoples=user?.likedPeoples?.filter((v)=>v !==id);
          setUser((prev)=>({...prev,likedPeoples:userLikedPeoples}))

        }
      }
    } catch (error) {
      console.log(error);
      setPeople(prev => prev.map(elem => (elem.id == id ? { ...elem, isFav: false } : elem)));
    }
  };

  const router = useRouter();
  const conversationHandler = async detail => {
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
        router.push('/chat');
        //in case of conversation already exists
        dispatch(setCurrentConversation(conversation));
        const { author, reviever, _id } = conversation;
        dispatch(getMessages({ author, reviever, conversationId: _id }));
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
      }
    } catch (error) {
      console.log(error);
      Toast({ type: 'error', message: error.message });
    }
  };
  return (
    <>
      <Modal open={shareContacts} setOpen={setShareContacts} width="900px">
        <ShareContact handleSelectContact={handleShareContact} outsideChat />
        {/* <ShareContactLink agent={selectedAgent} /> */}
      </Modal>
      {/* <Modal open={true} width="600px">
        <ShareContactLink onClick={e => console.log(e)} />
      </Modal> */}
      <SliderMain>
        <Swiper
          effect={'cards'}
          navigation={true}
          slideShadows={false}
          rotate={true}
          modules={[EffectCards, Navigation, Autoplay]}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          initialSlide={2}
          mousewheel={{ invert: false }}>
          {people.map(elem => (
            <SwiperSlide key={elem.id}>
              <div className="slideWrap">
                <SliderWrapper $img={elem.photoURL ? elem.photoURL : img6.src} key={elem.id}>
                  <CardText>
                    <span className="name">{elem.displayName !== '' ? elem.displayName : 'John Doe'}</span>
                    <span className="info">
                      <span>
                        {t('License')} : {elem.licenseNumber}{' '}
                      </span>
                      <span className="dot">
                        <svg xmlns="http://www.w3.org/2000/svg" width="3" height="4" viewBox="0 0 3 4" fill="none">
                          <circle cx="1.5" cy="2" r="1.5" fill="white" />
                        </svg>
                      </span>
                      <span>
                        {t('Since')} : {elem.creation}
                      </span>
                    </span>
                    <div className="socialIocn">
                      <div className="iconWrapp">
                        <span className="icon" onClick={() => handelFavourite(elem.id)}>
                          {elem.isFav ? <FaHeart size="16" /> : <FaRegHeart size="16" />}
                        </span>
                        <span
                          className="icon"
                          onClick={() => {
                            setShareContacts(true);
                            setSelectedAgent(elem);
                          }}>
                          <Image src={share} alt="share" />
                        </span>
                        <span className="icon" onClick={() =>{conversationHandler(elem)}}>
                          <Image src={comment} alt="comment" />
                        </span>
                      </div>
                     
                    </div>
                  </CardText>
                </SliderWrapper>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </SliderMain>
    </>
  );
}
