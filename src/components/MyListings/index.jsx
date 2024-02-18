/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import TableLayout from '../TableLayout';
import Table from '../Table';
import Image from 'next/image';
import deleteIcon from '../../../public/delete-icon.svg';
import heartIcon from '../../../public/heart-icon.svg';
import img01 from '../../../public/img04.png';
import Button from '../Button';
import { TbMapPin } from 'react-icons/tb';
import { useTranslation } from '@/helpers/useTranslation';
import Modal from '../Modal';
import ViewOffers from '../chat/ChatModal/ViewOffers';

function MyListings() {
  const [modal, setModal] = useState(false);
  const { t } = useTranslation();

  const [loading, setLoading] = useState(false);
  const [totalCount, setTotalCount] = useState(20);
  const [searchQuery, setSearchQuery] = useState({
    page: 1,
    pageSize: 10,
    startDate: '',
    endDate: '',
  });

  const actionBtns = () => (
    <div className="actionBtnList">
      <li>
        <Button sm variant="secondary" onClick={() => setModal(true)}>
          {t('View Offer')}
        </Button>
      </li>
      <li>
        <Button outline>
          <Image src={deleteIcon} alt="img" />
        </Button>
      </li>
    </div>
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
      '$50,5000',
      '6x8 sqft',
      '4 Beds',
      '2 Baths',
      actionBtns(),
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
      '$50,5000',
      '6x8 sqft',
      '4 Beds',
      '2 Baths',
      actionBtns(),
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
      '$50,5000',
      '6x8 sqft',
      '4 Beds',
      '2 Baths',
      actionBtns(),
    ],
  ];

  const columnNames = [t('Property And Location'), t('Price'), t('Size'), t('Beds'), t('Baths'), ''];

  return (
    <>
      <Modal open={modal} setOpen={setModal} width="1000px">
        <ViewOffers />
      </Modal>
      <TableLayout
        title={t('My Listings')}
        currentPage={searchQuery.page}
        totalCount={totalCount ?? 0}
        pageSize={searchQuery.pageSize}
        noNegativeMargin>
        <Table loading={loading} columnNames={columnNames} rowsData={rows} noPadding />
      </TableLayout>
    </>
  );
}

export default MyListings;
