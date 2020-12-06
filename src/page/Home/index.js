// import { Link } from 'react-router-dom';
import { useState } from 'react';
import StyledWrapper from './styled';
import Search from '../../component/Search';
// // import Account from '../../component/Account';
import ContextMenu from '../../component/ContextMenu';
import Widget from '../../component/Widget';
import Modal from '../../component/Modal';
import PreviewModal from '../../component/PreviewModal';
import { useContextMenu, useAppData } from '../../hooks';
export default function Home() {
  const { data, addApp, removeApp } = useAppData();
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
        <Search />
      </div>
      <div className="widgets animate__animated animate__fadeInUp">
        {data.map((logo) => {
          return (
            <Widget
              onClick={togglePModalVisible.bind(null, logo)}
              key={logo.title}
              showMenu={showMenu}
              updateCurrAPP={setCurrAPP}
              data={logo}
            />
          );
        })}
        <Widget add onClick={toggleModalVisible} />
        {/* 填充物 */}
        {new Array(4).fill(1).map((item, idx) => {
          return <div style={{ width: '1.4rem', height: '1.05rem' }} key={idx} />;
        })}
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
