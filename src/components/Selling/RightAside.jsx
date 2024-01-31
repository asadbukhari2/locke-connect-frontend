import React from 'react';
import { RightAsideStyles } from './Selling.styles';
import Recommended from '../Recommended';

const RightAside = () => {
  return (
    <RightAsideStyles>
      <Recommended />
      <div className='terms_condition'>
        <span className='text'>Disclosure</span>
        <span className='text'>
          1.
          <p>
            The following are terms of a legal agreement between you, the person
            viewing and/or using this Internet site ("User") and the operator of
            this Internet site ("Provider.") By accessing, browsing and/or using
            this Internet site ("Site"), User acknowledges that User has read,
            understood, and agrees to be bound by these terms and to comply with
            all applicable laws and regulations, including but not limited to
            U.S. export and re-export control laws and regulations. If User does
            not agree to these terms, User is not authorized to use this Site.
            The material provided on this Site is protected by law, including,
            but not limited to, United States Copyright law and international
            treaties.
          </p>
        </span>
        <span className='text'>
          2.
          <p>
            User must be a prospective purchaser or seller of real estate with a
            bona fide interest in the purchase or sale of such real estate.
          </p>
        </span>
        <span className='text'>
          3.
          <p>
            All real estate data provided on this Site is strictly for the
            personal, private, non-commercial use of User and is not made
            available for redistribution, retransmission, reformatting,
            modification or copying. User may not sell or use any of the real
            estate data on this Site for any purpose other than attempting to
            evaluate houses or properties for sale or purchase by User. User
            acknowledges that the real estate data on this Site is provided by
            MetroList Services, Inc.
          </p>
        </span>
        <span className='text'>
          4.
          <p>
            a California corporation ("MetroList"), and User acknowledges the
            validity of MetroList's copyright as to such data. User expressly
            acknowledges and agrees that MetroList is a third-party beneficiary
            of these Terms of Use, and that MetroList will be entitled to
            enforce these Terms of Use against User. To the fullest extent
            permitted by law, the data on this Site is provided "as is," without
            warranty or representation of any kind, either express or implied,
            as to the nature, quality, characteristics or value of any property
            or information to which the data pertains.neither provider nor
            metrolist makes any warranties, express or implied, regarding the
            data displayed on this site, including, but not limited to, the
            implied warranties of merchantability and fitness for a particular
            purpose, or as to the timeliness, accuracy and/or completeness of
            the data. neither provider nor metrolist shall be liable for any
            incidental, special, consequential, indirect, special, punitive or
            exemplary damages whatsoever (including without limitation,
          </p>
        </span>
      </div>
    </RightAsideStyles>
  );
};

export default RightAside;
