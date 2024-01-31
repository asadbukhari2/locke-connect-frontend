import React from "react";
import { Imagesgallery, StyledPropertyModal } from "./PropertyModal.styles";
import { MdOutlineClose } from "react-icons/md";
import Image from "next/image";
import property1 from "../../../../public/propertyCard/property1.jpg";
import property2 from "../../../../public/propertyCard/property2.jpg";
import property3 from "../../../../public/propertyCard/property3.jpg";
import property4 from "../../../../public/propertyCard/property4.jpg";
import property5 from "../../../../public/propertyCard/property5.jpg";
import property6 from "../../../../public/propertyCard/property6.jpg";

export const PropertyDetail = [
  {
    id: 1,
    price: "$50,500",
    name: "Riche Luxury Mansion",
    location: "St.Constitution Drive, West",
    dimension: "6x8 m²",
    beds: "4 Beds",
    bath: "2 Baths",
    img: property1,
    isFav: false,
  },
  {
    id: 2,
    price: "$50,500",
    name: "Riche Luxury Mansion",
    location: "St.Constitution Drive, West",
    dimension: "6x8 m²",
    beds: "4 Beds",
    bath: "2 Baths",
    img: property2,
    isFav: false,
  },
  {
    id: 3,
    price: "$50,500",
    name: "Riche Luxury Mansion",
    location: "St.Constitution Drive, West",
    dimension: "6x8 m²",
    beds: "4 Beds",
    bath: "2 Baths",
    img: property3,
    isFav: false,
  },
  {
    id: 4,
    price: "$50,500",
    name: "Riche Luxury Mansion",
    location: "St.Constitution Drive, West",
    dimension: "6x8 m²",
    beds: "4 Beds",
    bath: "2 Baths",
    img: property4,
    isFav: false,
  },
  {
    id: 5,
    price: "$50,500",
    name: "Riche Luxury Mansion",
    location: "St.Constitution Drive, West",
    dimension: "6x8 m²",
    beds: "4 Beds",
    bath: "2 Baths",
    img: property5,
    isFav: false,
  },
  {
    id: 6,
    price: "$50,500",
    name: "Riche Luxury Mansion",
    location: "St.Constitution Drive, West",
    dimension: "6x8 m²",
    beds: "4 Beds",
    bath: "2 Baths",
    img: property6,
    isFav: false,
  },
  {
    id: 1,
    price: "$50,500",
    name: "Riche Luxury Mansion",
    location: "St.Constitution Drive, West",
    dimension: "6x8 m²",
    beds: "4 Beds",
    bath: "2 Baths",
    img: property1,
    isFav: false,
  },
  {
    id: 2,
    price: "$50,500",
    name: "Riche Luxury Mansion",
    location: "St.Constitution Drive, West",
    dimension: "6x8 m²",
    beds: "4 Beds",
    bath: "2 Baths",
    img: property2,
    isFav: false,
  },
  {
    id: 3,
    price: "$50,500",
    name: "Riche Luxury Mansion",
    location: "St.Constitution Drive, West",
    dimension: "6x8 m²",
    beds: "4 Beds",
    bath: "2 Baths",
    img: property3,
    isFav: false,
  },
  {
    id: 4,
    price: "$50,500",
    name: "Riche Luxury Mansion",
    location: "St.Constitution Drive, West",
    dimension: "6x8 m²",
    beds: "4 Beds",
    bath: "2 Baths",
    img: property4,
    isFav: false,
  },
  {
    id: 5,
    price: "$50,500",
    name: "Riche Luxury Mansion",
    location: "St.Constitution Drive, West",
    dimension: "6x8 m²",
    beds: "4 Beds",
    bath: "2 Baths",
    img: property5,
    isFav: false,
  },
  {
    id: 6,
    price: "$50,500",
    name: "Riche Luxury Mansion",
    location: "St.Constitution Drive, West",
    dimension: "6x8 m²",
    beds: "4 Beds",
    bath: "2 Baths",
    img: property6,
    isFav: false,
  },
];
const PhotoModal = () => {
  return (
    <StyledPropertyModal>
      <div className="title">
        <span>Photo</span>
      </div>
      <Imagesgallery>
        {PropertyDetail.map((elem, ind) => (
          <div key={ind} className="imgWrapper">
            <Image src={elem.img} alt="img1" />
          </div>
        ))}
      </Imagesgallery>
    </StyledPropertyModal>
  );
};

export default PhotoModal;
