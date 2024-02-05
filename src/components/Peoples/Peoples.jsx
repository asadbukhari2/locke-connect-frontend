import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { TfiMenuAlt } from 'react-icons/tfi';
import { TbMapPin } from 'react-icons/tb';
import { StyledProperty, StyledPropertyCards, FilterHeader, FilterWrap, LoaderHolder } from './Peoples.styles';
import SearchLocation from '../SearchLocation';
import { CardTextPeople, PeopleCardWrapper } from '../CardSlider/Card.styles';

import img6 from '../../../public/SliderImages/user6.png';
import heart from '../../../public/SliderImages/heart.png';
import share from '../../../public/SliderImages/share.png';
import comment from '../../../public/SliderImages/comment.png';
import addidas from '../../../public/SliderImages/brand.png';

import Image from 'next/image';
import { FaHeart, FaRegHeart } from 'react-icons/fa6';
import UserDetail from '../UserDetailComp';
import Modal from '../Modal';
import PeopleFilter from '../UserSearchFilter/Peoplefilter';
import Pagination from '../Pagination';
import peoplesService from '@/services/peoples';
import Loaders from '../Loaders';
import { NoRecordFound } from '../NoRecordFound/NoRecord.styles';
import { getMessages, setCurrentConversation, setMessages } from '@/features/messageSlice';

import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useContextHook } from 'use-context-hook';
import { AuthContext } from '@/context/authContext';
import Toast from '../Toast';
import ShareContact from '../chat/ChatModal/ShareContact';
import { debounce } from '@/helpers/common';
export const FilterItem = ['New York', 'For Buy', 'Duplex', '$250-500k', 'Last 3 Weeks', 'Apartments'];

const Peoples = () => {
  const [searchQuery, setSearchQuery] = useState({
    page: 1,
    pageSize: 8,
    address: '',
  });
  const [shareContacts, setShareContacts] = useState(false);

  const [filterData, setFilterData] = useState(FilterItem);
  const [modalData, setModalData] = useState(null);

  const [filterDropDown, setFilterDropDown] = useState(false);

  const { peoples_data, peoples_loading } = peoplesService.GetPeoples(searchQuery);

  const [modal, setModal] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();

  const { user } = useContextHook(AuthContext, ['user']);

  const { conversations } = useSelector(state => state.chat);

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
        setModal(false);
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
        setModal(false);
      }
    } catch (error) {
      console.log(error);
      Toast({ type: 'error', message: error.message });
    }
  };

  function handelProperFilter() {
    setFilterDropDown(!filterDropDown);
  }
  function handelFilter(item) {
    setFilterData(prev => prev.filter(elem => elem !== item));
  }

  const getUserDetails = async id => {
    const user = peoples_data.peoples.find(ppl => ppl.id === id);
    setModalData(user);
  };
  function handelFav(id) {
    setPeople(prev => prev.map(elem => (elem.id == id ? { ...elem, isFav: !elem.isFav } : elem)));
  }

  const handelFavourite = async id => {
    const userToFav = { id };
    const reponse = await peoplesService.toggleFavouritePeople(userToFav);
    console.log(reponse);
  };

  const debouncedHandleSearchChange = debounce(e => {
    setSearchQuery(prev => ({ ...prev, address: e }));
  }, 500);

  const handleSearchChange = e => {
    debouncedHandleSearchChange(e);
  };

  return (
    <>
      <Modal open={modal} setOpen={setModal}>
        <UserDetail setModal={setModal} detail={modalData} />
      </Modal>
      <Modal open={shareContacts} setOpen={setShareContacts} width="900px">
        <ShareContact />
      </Modal>
      <StyledProperty id="peopleFilter">
        <FilterHeader>
          <div className="wrap">
            <div className="heading-box">
              <h2>Peoples</h2>
              <span className="text">Total {peoples_data.totalItems} peoples</span>
            </div>
            <ul className="btn-list">
              <li>
                <button type="button" className="active">
                  <TfiMenuAlt size="18" />
                </button>
              </li>
              <li onClick={() => router.push('/map')}>
                <button type="button">
                  <TbMapPin size="18" />
                </button>
              </li>
            </ul>
          </div>
          <FilterWrap open={filterDropDown}>
            <SearchLocation
              handelFilter={handelProperFilter}
              placeholder="Search Peoples"
              onChangeHandler={handleSearchChange}
            />
            <div className="handelDropDown">
              <PeopleFilter setPopUp={setFilterDropDown} />
            </div>

            {/* <ul className="filter-list">
              {filterData.map((elem, ind) => (
                <li key={ind}>
                  <span className="text">{elem}</span>
                  <button className="btn-close" type="button" onClick={() => handelFilter(elem)}>
                    <MdClose size="14" />
                  </button>
                </li>
              ))}
            </ul> */}
          </FilterWrap>
        </FilterHeader>
        <StyledPropertyCards>
          {peoples_loading ? (
            <LoaderHolder>
              <Loaders viewLoader={peoples_loading} />
            </LoaderHolder>
          ) : peoples_data?.peoples?.length ? (
            peoples_data?.peoples.map(elem => (
              <PeopleCardWrapper $img={elem.photoURL ? elem.photoURL : img6.src} key={elem.id}>
                <button
                  className="btn"
                  type="button"
                  onClick={() => {
                    if (elem.id !== user.id) {
                      setModal(true);
                      getUserDetails(elem.id);
                    }
                  }}></button>
                <CardTextPeople>
                  <span className="name">{elem.displayName !== '' ? elem.displayName : 'John Doe'}</span>
                  <span className="info">
                    <span>License : {elem.licenseNumber} </span>
                    <span className="dot">
                      <svg xmlns="http://www.w3.org/2000/svg" width="3" height="4" viewBox="0 0 3 4" fill="none">
                        <circle cx="1.5" cy="2" r="1.5" fill="white" />
                      </svg>{' '}
                    </span>
                    <span>Since : {elem.creation}</span>
                  </span>
                  {elem.id !== user.id && (
                    <div className="socialIocn">
                      <div className="iconWrapp">
                        <span className="icon" onClick={() => handelFavourite(elem.id)}>
                          {elem.isFav ? <FaHeart size="16" /> : <FaRegHeart size="16" />}
                        </span>
                        <span className="icon" onClick={() => setShareContacts(true)}>
                          <Image src={share} alt="share" />
                        </span>
                        <span
                          className="icon"
                          onClick={() => {
                            conversationHandler(elem);
                          }}>
                          <Image src={comment} alt="comment" />
                        </span>
                      </div>
                      <div className="brand">
                        <Image src={addidas} alt="addidas" />
                      </div>
                    </div>
                  )}
                </CardTextPeople>
              </PeopleCardWrapper>
            ))
          ) : (
            <NoRecordFound>No Agents Found</NoRecordFound>
          )}
        </StyledPropertyCards>

        {!!peoples_data?.peoples?.length && (
          <Pagination
            page={searchQuery.page}
            pageSize={searchQuery.pageSize}
            totalCount={peoples_data.totalItems}
            totalPages={peoples_data.totalItems ? Math.ceil(peoples_data.totalItems / searchQuery.pageSize) : 2}
            onPageChange={val => {
              setSearchQuery(prev => ({ ...prev, page: val }));
            }}
          />
        )}
      </StyledProperty>
    </>
  );
};

export default Peoples;
