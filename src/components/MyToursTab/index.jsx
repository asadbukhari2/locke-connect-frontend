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

function MyToursTab() {
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

  const actionBtns = () => (
    <div className="actionBtnList">
      <li>
        <Button sm variant="secondary" onClick={() => setModal(true)}>
          <Image src={scheduleIcon} alt="img" />
          {t('Reschedule')}
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
      '3rd December at 12:30 PM - 1:00 PM',
      <Status className="visted">Visted</Status>,
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
      '3rd December at 12:30 PM - 1:00 PM',
      <Status className="upcoming">Upcoming</Status>,
      actionBtns(),
    ],
  ];

  const columnNames = [t('Property And Location'), t('Visit Date / Time'), t('Status'), ''];

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
      <Modal open={modal} setOpen={setModal} top="90px">
        <DateSlider
          setOpen={setModal}
          open={modal}
          title={t('Reschedule')}
          discreption={t('Reschedule a free tour of this home')}
          button={t('Reschedule A Tour')}
        />
      </Modal>

      <TableLayout
        title={t('My Tours')}
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

export default MyToursTab;
