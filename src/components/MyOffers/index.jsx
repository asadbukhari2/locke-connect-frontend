/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import TableLayout from '../TableLayout';
import Table from '../Table';
import Image from 'next/image';
import deleteIcon from '../../../public/delete-icon.svg';
import scheduleIcon from '../../../public/schedule-icon.svg';
import img01 from '../../../public/img04.png';
import Button from '../Button';
import { TbMapPin } from 'react-icons/tb';
import { Status } from './MyToursTab.styles';
import Modal from '../Modal';
import DateSlider from '../DateSlider/DateSlider';
import { StatusType } from '../Constants';
import Select from '../DropDown/PropertyDropDown';
import { useTranslation } from '@/helpers/useTranslation';
import ModalBooking from '../ModalAdvanceOption/ModalBooking';

function MyOfferTab() {
  const { t } = useTranslation();

  const [loading, setLoading] = useState(false);
  const [totalCount, setTotalCount] = useState(20);
  const [modal, setModal] = useState(false);

  const [searchQuery, setSearchQuery] = useState({
    page: 1,
    pageSize: 10,
    startDate: '',
    endDate: '',
  });
  const acceptModal = {
    title: 'Accepted!',
    discreption: 'One of our representative will contact with you very soon again',
  };
  const cancelModal = {
    title: 'Canceled!',
    discreption: 'Your offer is now canceled!',
  };
  const actionBtns = text => (
    <>
      <div className="actionBtnList">
        <li>
          <Button sm variant={text == 'Accept' ? 'success' : 'secondary'} onClick={() => setModal(true)}>
            <Image src={scheduleIcon} alt="img" />
            {t(text)}
          </Button>
        </li>
        <li>
          <Button outline>
            <Image src={deleteIcon} alt="img" />
          </Button>
        </li>
      </div>
    </>
  );
  const rows = [
    [
      <div className="info-box">
        <div className="img-box">
          <Image src={img01} alt="img" />
        </div>
        <div className="text-box">
          <strong className="title">Riche Luxury Mansion</strong>
          <span className="address">
            <TbMapPin />
            St.Constitution Drive, West
          </span>
        </div>
      </div>,
      '$1,300,000',
      <Status className="visted">Accepted</Status>,
      actionBtns('Accept'),
    ],
    [
      <div className="info-box">
        <div className="img-box">
          <Image src={img01} alt="img" />
        </div>
        <div className="text-box">
          <strong className="title">Riche Luxury Mansion</strong>
          <span className="address">
            <TbMapPin />
            St.Constitution Drive, West
          </span>
        </div>
      </div>,
      '$1,300,000',
      <Status className="upcoming">Submitted</Status>,
      actionBtns('Modify'),
    ],
    [
      <div className="info-box">
        <div className="img-box">
          <Image src={img01} alt="img" />
        </div>
        <div className="text-box">
          <strong className="title">Riche Luxury Mansion</strong>
          <span className="address">
            <TbMapPin />
            St.Constitution Drive, West
          </span>
        </div>
      </div>,
      '$1,300,000',
      <Status className="countered">Countered</Status>,
      actionBtns('Counter'),
    ],
    [
      <div className="info-box">
        <div className="img-box">
          <Image src={img01} alt="img" />
        </div>
        <div className="text-box">
          <strong className="title">Riche Luxury Mansion</strong>
          <span className="address">
            <TbMapPin />
            St.Constitution Drive, West
          </span>
        </div>
      </div>,
      '$1,300,000',
      <Status className="rejected">Rejected</Status>,
      actionBtns('Resubmit'),
    ],
  ];

  const columnNames = [t('Property And Location'), t('Price'), t('Status'), ''];

  const FilterBtns = () => (
    <>
      <Select
        className="selectProfile"
        title={t('Select Status')}
        option={StatusType}
        onChange={val => console.log(val, 'val')}
      />
    </>
  );

  return (
    <>
      <Modal open={modal} setOpen={setModal} width="274px">
        <ModalBooking setOpen={setModal} data={cancelModal} />
      </Modal>
      <TableLayout
        title={t('My Offers')}
        filterBtns={FilterBtns}
        currentPage={searchQuery.page}
        totalCount={totalCount ?? 0}
        pageSize={searchQuery.pageSize}
        noNegativeMargin>
        <Table loading={loading} columnNames={columnNames} rowsData={rows} noPadding />
      </TableLayout>
    </>
  );
}

export default MyOfferTab;
