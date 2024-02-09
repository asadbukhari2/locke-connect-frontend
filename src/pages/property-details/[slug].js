import React, { useEffect, useState } from 'react';
import TopHead from '@/components/TopHead';
import PropertySlider from '@/components/PropertySlider';
import Recommended from '@/components/Recommended';
import HomeInfo from '@/components/HomeInfo';
import HomeFacts from '@/components/HomeFacts';
import AccordionWrap from '@/components/AccordionWrap';
import HomeDetails from '@/components/HomeDetails';
import Neighborhood from '@/components/Neighborhood';
import PropertyHistory from '@/components/PropertyHistory';
import SchoolNearby from '@/components/SchoolNearby';
import PropertySaleSlider from '@/components/PropertySaleSlider';
import DateSlider from '@/components/DateSlider/DateSlider';
import Modal from '@/components/Modal';
import ModalBooking from '@/components/ModalAdvanceOption/ModalBooking';
import EditProfileModal from '@/components/EditProfileModal';
import { useTranslation } from '@/helpers/useTranslation';
const PropertyDetails = () => {
  const [scroll, setScroll] = useState(false);
  const [modal, setModal] = useState(false);
  const { t } = useTranslation();
  useEffect(() => {
    function handleScroll() {
      // Check the scroll position to determine if the shadow should be shown
      if (window.scrollY > 80) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    }
    handleScroll();
    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scroll]);

  return (
    <>
      <Modal open={modal} setOpen={setModal}>
        <ModalBooking setOpen={setModal} />
      </Modal>
      <TopHead />
      <div className="detail-wrap">
        <div className={scroll ? `detail-col padding` : 'detail-col'}>
          <PropertySlider />
          <HomeInfo />
          <HomeFacts />
          <AccordionWrap />
          <HomeDetails />
          <SchoolNearby />
          <Neighborhood />
          <PropertyHistory />
          <PropertySaleSlider title={t('Similar homes for sale')} />
          <PropertySaleSlider title={t('Recently sold nearby')} />
        </div>
        <aside className={scroll ? `fixed-scroll fix` : 'fixed-scroll'}>
          <Recommended />
          <DateSlider setOpen={setModal} open={modal} />
        </aside>
      </div>
    </>
  );
};

export default PropertyDetails;
