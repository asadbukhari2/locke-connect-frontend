import React, { useMemo, useState } from 'react';
import {
  ChatModalContent,
  StyledChatModal,
  UploadDocumentWrapper,
} from './ChatModal.styles';
import CheckBox from '@/components/CheckBox';
import pdf from '../../../../public/pdfColor.svg';
import Image from 'next/image';
import Button from '@/components/Button';
import { MdAdd } from 'react-icons/md';
import peoplesService from '@/services/peoples';
import { getFileType } from '@/helpers/common';
import Toast from '@/components/Toast';
import Loaders from '@/components/Loaders';
import { NoRecordFound } from '@/components/NoRecordFound/NoRecord.styles';

const UploadDoc = ({ handleSelectFiles, onClose }) => {
  const [checkedItems, setCheckedItems] = useState({});
  const [searchQuery, setSearchQuery] = useState({
    page: 1,
    pageSize: 100,
    startDate: '',
    endDate: '',
    filterText: '',
  });

  const { documents_data, documents_loading } =
    peoplesService.GetDocuments(searchQuery);

  const { documents, totalCount } = useMemo(() => {
    return {
      documents: documents_data?.items?.map((itm) => ({
        id: itm?.id,
        file_type: getFileType(itm?.doc_type),
        name: itm?.file_name,
        date: itm?.date ? `${itm?.date} at ${itm?.time}` : '--',
        url: itm?.url,
      })),
      totalCount: documents_data?.totalItems,
    };
  }, [documents_data]);

  const handleCheckBoxChange = ({ fieldName, isChecked }) => {
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [fieldName]: isChecked,
    }));
  };

  const handleSelectAllChange = (isChecked) => {
    const newCheckedItems = documents.reduce((acc, item) => {
      acc[item?.id] = isChecked;
      return acc;
    }, {});

    setCheckedItems(newCheckedItems);
  };

  const handleSendDocuments = async () => {
    try {
      if (!checkedItems) {
        Toast({ type: 'error', message: 'Please select a document.' });
        onClose();
        return;
      }
      const checkedItemKeys = Object.keys(checkedItems).filter(
        (key) => checkedItems[key]
      );

      const checkedItemsData = documents.filter((document) =>
        checkedItemKeys.includes(document.id)
      );
      handleSelectFiles(checkedItemsData);
      onClose();
    } catch (error) {
      Toast({ type: 'error', message: error?.message });
    }
  };

  return (
    <StyledChatModal>
      <strong className='title'>Attach document</strong>
      <ChatModalContent>
        <UploadDocumentWrapper>
          {!!documents?.length && (
            <CheckBox
              type='rounded'
              label='Select all'
              fieldName='selectAll'
              className='selectAll'
              onChange={({ isChecked }) => handleSelectAllChange(isChecked)}
            />
          )}

          <ul>
            {documents_loading ? (
              <Loaders loading={documents_loading} height={100} />
            ) : documents?.length ? (
              documents?.map((item) => (
                <li key={item?.id}>
                  <CheckBox
                    onChange={handleCheckBoxChange}
                    type='rounded'
                    label={
                      <>
                        <Image src={pdf} alt='file' />
                        {item?.name}
                      </>
                    }
                    fieldName={item?.id}
                    checked={checkedItems[item?.id] || false}
                  />
                </li>
              ))
            ) : (
              <NoRecordFound>No Documents Found</NoRecordFound>
            )}
          </ul>
        </UploadDocumentWrapper>
      </ChatModalContent>
      {!!documents?.length && (
        <div className='buttonWrapper'>
          <Button
            variant='primary'
            onClick={() => {
              handleSendDocuments();
            }}
          >
            <MdAdd size='22' />
            Add Document
          </Button>
        </div>
      )}
    </StyledChatModal>
  );
};

export default UploadDoc;
