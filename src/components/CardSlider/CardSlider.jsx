import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards, Navigation, Autoplay } from 'swiper/modules';

import img6 from '../../../public/SliderImages/user6.png';
import share from '../../../public/SliderImages/share.png';
import comment from '../../../public/SliderImages/comment.png';
import addidas from '../../../public/SliderImages/brand.png';
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

export default function CardSlider({ agents }) {
  const [people, setPeople] = useState(agents);
  const [shareContacts, setShareContacts] = useState(false);
  const { t } = useTranslation();
  const { user } = useContextHook(AuthContext, ['user']);

  useEffect(() => {
    const updatedPeoples = agents.map(person => ({
      ...person,
      isFav: user.likedPeoples.includes(person.id),
    }));
    setPeople(updatedPeoples);
  }, [agents]);

  const handelFavourite = async id => {
    try {
      const userToFav = { id };
      setPeople(prev => prev.map(elem => (elem.id == id ? { ...elem, isFav: !elem.isFav } : elem)));
      const response = await peoplesService.toggleFavouritePeople(userToFav);
      if (!response?.success) {
        setPeople(prev => prev.map(elem => (elem.id == id ? { ...elem, isFav: false } : elem)));
      }
      console.log(response);
    } catch (error) {
      console.log(error);
      setPeople(prev => prev.map(elem => (elem.id == id ? { ...elem, isFav: false } : elem)));
    }
  };

  const router = useRouter();
  return (
    <>
      <Modal open={shareContacts} setOpen={setShareContacts} width="900px">
        <ShareContact />
      </Modal>
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
                        <span className="icon" onClick={() => setShareContacts(true)}>
                          <Image src={share} alt="share" />
                        </span>
                        <span className="icon" onClick={() => router.push('/chat')}>
                          <Image src={comment} alt="comment" />
                        </span>
                      </div>
                      <div className="brand">
                        <Image src={addidas} alt="addidas" />
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
