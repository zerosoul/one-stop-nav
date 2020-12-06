// import { Link } from 'react-router-dom';
import { useState } from 'react';
// Import Swiper React components
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
import StyledWrapper from './styled';
import Search from '../../component/Search';
// // import Account from '../../component/Account';
import ContextMenu from '../../component/ContextMenu';
import Widget from '../../component/Widget';
import Modal from '../../component/Modal';
import PreviewModal from '../../component/PreviewModal';
import { useContextMenu, useAppData } from '../../hooks';
import { splitToChunks } from '../../util';

SwiperCore.use([Navigation, Pagination]);

export default function Home() {
  const { data, addApp, removeApp } = useAppData();
  const [searchInput, setSearchInput] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [previewModalVisible, setPreviewModalVisible] = useState(false);
  const [currAPP, setCurrAPP] = useState(null);
  const { menuVisible, position: menuPosition, showMenu } = useContextMenu(false);

  const togglePModalVisible = (app) => {
    setPreviewModalVisible((prev) => {
      if (prev == false) {
        setCurrAPP(app);
      }
      return !prev;
    });
  };
  const toggleModalVisible = (evt) => {
    evt.preventDefault();
    setModalVisible((prev) => !prev);
  };
  return (
    <StyledWrapper>
      {/* <Account /> */}
      {menuVisible && <ContextMenu remove={removeApp} url={currAPP.url} {...menuPosition} />}
      <div className="search animate__animated animate__fadeInDown">
        <Search input={searchInput} updateInput={setSearchInput} data={data} />
      </div>
      <div className={`widgets animate__animated animate__fadeInUp`}>
        <Swiper
          className={searchInput && 'search_mode'}
          spaceBetween={50}
          pagination={{ clickable: true }}
          // onSlideChange={({ activeIndex }) => {
          //   setCurrIdx(activeIndex);
          // }}
          // onSwiper={setCurrSwiper}
        >
          {splitToChunks(data).map((items, idx) => {
            return (
              <SwiperSlide key={idx}>
                {items.map((item) => {
                  return (
                    <Widget
                      onClick={togglePModalVisible.bind(null, item)}
                      key={item.title}
                      showMenu={showMenu}
                      updateCurrAPP={setCurrAPP}
                      data={item}
                    />
                  );
                })}
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/* <Widget add onClick={toggleModalVisible} /> */}
        {/* 填充物 */}
        {/* {new Array(4).fill(1).map((item, idx) => {
          return <div style={{ width: '1.4rem', height: '1.05rem' }} key={idx} />;
        })} */}
      </div>
      <Modal add={addApp} visible={modalVisible} toggleVisible={toggleModalVisible} />
      <PreviewModal
        visible={previewModalVisible}
        app={currAPP || {}}
        toggleVisible={togglePModalVisible}
      />
    </StyledWrapper>
  );
}
