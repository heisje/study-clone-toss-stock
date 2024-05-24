import { useEffect, useState } from "react";
import styled from "styled-components";
import { SvgIcon, SVGIconType } from "@/components/SvgIcon";

type sizeType =
  | "xxsmall"
  | "xsmall"
  | "small"
  | "medium"
  | "large"
  | "xlarge"
  | "xxlarge";

const sizes: Record<sizeType, string> = {
  xxsmall: "1.25rem",
  xsmall: "1.87rem",
  small: "2.25rem",
  medium: "2.5rem",
  large: "3.5rem",
  xlarge: "5rem",
  xxlarge: "6.625rem",
};

interface AvatarProps {
  size?: sizeType;
  image: string;
  countryCode?: countryCodeType;
  fallbackDelay?: number;
}

export type countryCodeType = "US" | "KR";

const countryCodeToIconId: Record<countryCodeType, SVGIconType> = {
  US: "usa",
  KR: "korea",
};

const AvatarContainer = styled.div<{ size: sizeType }>`
  display: inline-block;
  position: relative;

  width: ${({ size }) => sizes[size]};
  height: ${({ size }) => sizes[size]};
`;

const ImageContainer = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const SvgContainer = styled(SvgIcon)`
  object-fit: cover;
  border-radius: 50%;
  background-color: var(--blue-grey-tone-grey02);
`;

const BadgeContainer = styled.div`
  position: absolute;
  width: 33%;
  height: 33%;
  bottom: 0;
  right: 0;
  border-radius: 50%;
`;

export const Avator = ({
  size = "medium",
  image,
  countryCode,
  fallbackDelay = 100,
}: AvatarProps) => {
  const [currentImage, setCurrentImage] = useState<string | null>(image);

  useEffect(() => {
    const img = new Image();
    img.src = image;
    img.onload = () => {
      setCurrentImage(image);
    };
    img.onerror = () => {
      setTimeout(() => {
        setCurrentImage(null); // 에러 후 일정 시간 대기
      }, fallbackDelay);
    };
  }, [image, fallbackDelay]);

  return (
    <AvatarContainer size={size}>
      {currentImage ? (
        <ImageContainer src={currentImage} alt="Profile" />
      ) : (
        <SvgContainer iconId={"default_profile"} size={sizes[size]} />
      )}
      {countryCode && (
        <BadgeContainer>
          <SvgIcon iconId={countryCodeToIconId[countryCode]} />
        </BadgeContainer>
      )}
    </AvatarContainer>
  );
};
