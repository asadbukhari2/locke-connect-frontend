import React, { useState } from "react";
import {
  CardText,
  FloatingSocialIcon,
  ProperCardWrraper,
} from "./PropertyCard.styles";
import img1 from "../../../public/SliderImages/img1.jpg";
import locationImg from "../../../public/locationIcon.svg";
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { GoShareAndroid } from "react-icons/go";
import Image from "next/image";
import Link from "next/link";
const PropertyCard = ({
  key,
  price,
  name,
  location,
  dimension,
  beds,
  bath,
  img,
  isFav,
  link,
  className,
}) => {
  const [fav, setFav] = useState(false);
  return (
    <ProperCardWrraper key={key} className={className}>
      <div className="imgWrapper">
        <Link href={link}>
          <Image src={img} alt="img1" />
        </Link>
      </div>
      <CardText className="cardText">
        <span className="price">{price}</span>
        <span className="name">{name}</span>
        <span className="location">
          <Image src={locationImg} alt="location" />
          <p>{location}</p>
        </span>
        <ul className="info">
          <li>
            <span className="text">{dimension}</span>
          </li>
          <li>
            <span className="text">{beds}</span>
          </li>
          <li>
            <span className="text">{bath}</span>
          </li>
        </ul>
      </CardText>
      <FloatingSocialIcon>
        <GoShareAndroid className="share" size="20" color="#c7c7c7" />
      </FloatingSocialIcon>
      <FloatingSocialIcon right="50px" onClick={() => setFav(!fav)}>
        {fav ? <FaHeart size="20" /> : <FaRegHeart size="16" />}
      </FloatingSocialIcon>
    </ProperCardWrraper>
  );
};

export default PropertyCard;
