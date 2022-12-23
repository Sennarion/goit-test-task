import styled from 'styled-components';
import bgSmallImage from '../../images/picture@1x.png';
import bgLargeImage from '../../images/picture@2x.png';

export const UserItem = styled.li`
  display: flex;
  width: 454px;
  height: 547px;
  position: relative;
  background: url(${bgSmallImage}) top 34px center / 357px 194px no-repeat,
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background: url(${bgLargeImage}) top 34px center / 357px 194px no-repeat,
      linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  }

  box-shadow: -3px 8px 24px rgba(0, 0, 0, 0.23);
  border-radius: 24px;
`;

export const UserInfo = styled.div`
  position: relative;
  width: 100%;
  align-self: flex-end;
  padding: 74px 48px 48px;
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  line-height: calc(29 / 24);
  text-transform: uppercase;
  color: #ebd8ff;

  &:before {
    content: '';
    position: absolute;
    top: -8px;
    left: 0;
    display: block;
    width: 100%;
    height: 8px;
    background: #ebd8ff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06), inset 0px -2px 4px #ae7be3,
      inset 0px 4px 3px #fbf8ff;
  }
`;

export const UserText = styled.p`
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 32px;
  }
`;

export const Logo = styled.img`
  position: absolute;
  top: 24px;
  left: 24px;
`;

export const Ellipse = styled.div`
  width: 92px;
  height: 92px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ebd8ff;
  box-shadow: 0px 5.11111px 5.11111px rgba(0, 0, 0, 0.06),
    inset 0px -2.55556px 5.11111px #ae7be3,
    inset 0px 5.11111px 3.83333px #fbf8ff;
  border-radius: 50%;
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
`;

export const Avatar = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background-color: #5736a3;
  box-shadow: 0px -2px 5px 0px rgba(174, 123, 227, 1);
`;
