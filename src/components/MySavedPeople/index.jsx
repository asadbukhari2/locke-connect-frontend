/* eslint-disable react/jsx-key */
import React, { useMemo, useState } from 'react';
import TableLayout from '../TableLayout';
import Table from '../Table';
import Image from 'next/image';
import deleteIcon from '../../../public/delete-icon.svg';
import heartIcon from '../../../public/heart-icon.svg';
import chatIcon from '../../../public/chat-icon.svg';
import shareIcon from '../../../public/share-icon.svg';
import crownIcon from '../../../public/crown-icon.svg';
import img01 from '../../../public/img05.png';
import Button from '../Button';
import peoplesService from '@/services/peoples';
import Toast from '../Toast';
import { AuthContext } from '@/context/authContext';
import { useContextHook } from 'use-context-hook';
import { useTranslation } from '@/helpers/useTranslation';

function MySavedPeople() {
  const [searchQuery, setSearchQuery] = useState({
    page: 1,
    pageSize: 3,
  });
  const { t } = useTranslation();

  const { refetch, setRefetch } = useContextHook(AuthContext, ['refetch', 'setRefetch']);

  const { fav_peoples_data, fav_peoples_loading } = peoplesService.GetMyFavouritePeoples(searchQuery, refetch);

  const handleRemoveFromFav = async _ => {
    try {
      const response = await peoplesService.toggleFavouritePeople({ id: _.id });
      console.log(response);
      if (response.success) {
        Toast({ type: 'success', message: response.message });
      }
      setRefetch();
    } catch (error) {
      Toast({ type: 'error', message: error.message });
      setRefetch();
    }
  };

  const actionBtns = itm => (
    <div className="actionBtnList">
      {/* <li>
        <Button sm variant="danger">
          <Image src={heartIcon} alt="img" />
        </Button>
      </li> */}
      {/* <li>
        <Button outline>
          <Image src={shareIcon} alt="img" />
        </Button>
      </li> */}
      {/* <li>
        <Button outline>
          <Image src={chatIcon} alt="img" />
        </Button>
      </li> */}
      <li onClick={() => handleRemoveFromFav(itm)}>
        <Button outline>
          <Image src={deleteIcon} alt="img" />
        </Button>
      </li>
      {/* <li>
        <Button sm outline>
          View Profile
        </Button>
      </li> */}
    </div>
  );

  const columnNames = [t('Name And License'), t('Joined Since'), t('Agent Type'), ''];

  const { favPeoples, totalCount } = useMemo(() => {
    return {
      favPeoples: fav_peoples_data?.items?.map(itm => [
        <div className="info-box">
          <div className="img-box">
            <Image src={itm.photoURL} alt="img" width={50} height={50} />
          </div>
          <div className="text-box">
            <strong className="title">{itm.displayName}</strong>
            <span className="subtitle">{t('License')} : #{itm.licenseNumber}</span>
          </div>
        </div>,
        itm.joined ?? '----',
        <div className="agentType">
          <Image src={crownIcon} width="24" alt="img" />
          {itm.agentType}
        </div>,
        actionBtns(itm),
      ]),
      totalCount: fav_peoples_data?.totalItems,
    };
  }, [fav_peoples_data]);

  return (
    <>
      <TableLayout
        title={t("My Saved People")}
        onChangeFilters={filters => {
          setSearchQuery(_ => ({
            ..._,
            ...filters,
          }));
        }}
        currentPage={searchQuery.page}
        totalCount={totalCount ?? 0}
        pageSize={searchQuery.pageSize}
        totalPages={totalCount ? Math.ceil(totalCount / searchQuery.pageSize) : 2}
        noNegativeMargin>
        <Table loading={fav_peoples_loading} columnNames={columnNames} rowsData={favPeoples} noPadding />
      </TableLayout>
    </>
  );
}

export default MySavedPeople;
