import { useState } from 'react';
import styled from 'styled-components';
import IconDefault from '../asset/img/icon.HTML5.png';
import { getPrefixPath } from '../util';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  font-size: 0.2rem;
  position: relative;
  padding-bottom: 0.32rem;
  .icon {
    width: 1.4rem;
    height: 1.05rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ bgColor }) => bgColor};
    /* box-shadow: 0rem 0.08rem 0.3rem 0rem #ececec, 0rem 0.02rem 0.04rem 0rem rgba(213, 213, 213, 0.5); */
    border-radius: 0.04rem;
    /* border: 0.01rem solid #e8e8e8; */
    border: none;
    transition: all 1s ease-in-out;
    img {
      height: 0.4rem;
      transition: all 0.2s;
    }
  }
  &:hover .icon {
    /* box-shadow: 0rem 0.08rem 0.16rem 0rem #ececec, */
    /* 0rem 0.02rem 0.04rem 0rem rgba(213, 213, 213, 0.5), 0rem 0.04rem 0.24rem 0rem #a8a8a8; */
    img {
      transform: scale(1.2);
    }
  }
  .title {
    margin: 0.1rem 0 0 0;
    font-size: 0.14rem;
    font-weight: 400;
    color: #444;
    line-height: 0.2rem;
    text-align: center;
    width: 1.4rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  &.add {
    .icon {
      background: #f9f9f9;
      position: relative;
      &:before,
      &:after {
        content: '';
        position: absolute;
        display: block;
        background-color: #999;
      }
      &:before {
        width: 0.28rem;
        height: 2px;
      }
      &:after {
        width: 2px;
        height: 0.28rem;
      }
    }
  }
`;

export default function Widget({ data = {}, updateCurrAPP, showMenu = null, add, ...rest }) {
  const { themeColor = '#333', icon = '', title = '标题', url = '' } = data;
  const [ico, setIco] = useState(icon);
  const handleImageError = () => {
    setIco(IconDefault);
  };
  const handleContextMenu = (evt) => {
    evt.preventDefault();
    if (showMenu) {
      // let scrollTop = document.documentElement.scrollTop || document.body.scrollTop; // 获取垂直滚动条位置
      // let scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft; // 获取水平滚动条位置
      // let left = evt.clientX + scrollLeft;
      // let top = evt.clientY + scrollTop;
      let left = evt.clientX;
      let top = evt.clientY;
      console.log({ left, top });
      showMenu({ left, top });
      updateCurrAPP(data);
    }
    return false;
  };

  return (
    <StyledWrapper
      className={add && 'add'}
      bgColor={themeColor}
      onContextMenu={handleContextMenu}
      {...rest}
    >
      <div className="icon">
        {!add && (
          <img
            onError={handleImageError}
            src={ico ? ico : `${getPrefixPath(url)}favicon.ico`}
            alt="logo"
          />
        )}
      </div>

      <h2 className="title">{add ? '添加导航' : title}</h2>
    </StyledWrapper>
  );
}
