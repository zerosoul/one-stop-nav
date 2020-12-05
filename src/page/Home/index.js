// import { Link } from 'react-router-dom';
import { useState } from 'react';
import StyledWrapper from './styled';
import BSearch from '../../component/BaiduSearch';
// // import Account from '../../component/Account';
import ContextMenu from '../../component/ContextMenu';
import Widget from '../../component/Widget';
import Modal from '../../component/Modal';
import PreviewModal from '../../component/PreviewModal';
import { useContextMenu } from '../../hooks';
const LOGOS = [
  {
    title: '中国色🇨🇳',
    // icon: 'https://works.yangerxiao.com/honeyed-words-generator/favicon.ico',
    themeColor: '#f9906f',
    url: 'https://colors.ichuantong.cn/'
  },
  {
    title: '土味情话',
    // icon: 'https://works.yangerxiao.com/honeyed-words-generator/favicon.ico',
    themeColor: '#f3b2f2',
    url: 'https://works.yangerxiao.com/honeyed-words-generator/'
  },
  {
    title: '前端图标连连看',
    // icon: 'https://works.yangerxiao.com/tech-logo-memo-game/favicon.ico',
    themeColor: '#5b6782',
    url: 'https://works.yangerxiao.com/tech-logo-memo-game/'
  },
  {
    title: '生命进程',
    // icon: 'https://works.yangerxiao.com/life-progress/favicon.ico',
    themeColor: '#fff',
    url: 'https://works.yangerxiao.com/life-progress/'
  },
  {
    title: '呼吸调节器',
    // icon: 'https://works.yangerxiao.com/breathe-relaxer/favicon.ico',
    themeColor: '#dae6ed',
    url: 'https://works.yangerxiao.com/breathe-relaxer/'
  },
  {
    title: '图片压缩',
    // icon: 'https://works.yangerxiao.com/icfe/favicon.ico',
    themeColor: '#ccd0df',
    url: 'https://works.yangerxiao.com/icfe/'
  },
  {
    title: 'React弹幕类库',
    // icon: 'https://works.yangerxiao.com/swordman-music-list/favicon.ico',
    themeColor: '#39f7cc',
    url: 'https://zerosoul.github.io/rc-bullets/'
  },
  {
    title: '杨二的博客',
    // icon: 'https://works.yangerxiao.com/swordman-music-list/favicon.ico',
    themeColor: '#ffdead',
    url: 'https://blog.yangerxiao.com/'
  },
  {
    title: '沧海一声笑歌曲集',
    // icon: 'https://works.yangerxiao.com/swordman-music-list/favicon.ico',
    themeColor: '#fff',
    url: 'https://works.yangerxiao.com/swordman-music-list/'
  },
  {
    title: '防疫的五件小事',
    // icon: 'https://works.yangerxiao.com/do-the-five/favicon.ico',
    themeColor: '#fbf5ea',
    url: 'https://works.yangerxiao.com/do-the-five/'
  },
  {
    title: 'Github社交图生成工具',
    // icon: 'https://works.yangerxiao.com/do-the-five/favicon.ico',
    themeColor: '#f5f5f5',
    url:
      'https://works.yangerxiao.com/github-social-image-generator/?repo=https://github.com/zerosoul/github-social-image-generator&utm_source=hacpai.com'
  },
  {
    title: '中文打乱小工具',
    // icon: 'https://works.yangerxiao.com/do-the-five/favicon.ico',
    themeColor: '#f5f5f5',
    url: 'https://works.yangerxiao.com/chinese-word-chaos/'
  },
  {
    title: 'CSS箭头代码生成器',
    // icon: 'https://works.yangerxiao.com/do-the-five/favicon.ico',
    themeColor: '#1b2f36',
    url: 'https://works.yangerxiao.com/css-arrow-generator/'
  },
  {
    title: 'HTML颜色手册',
    // icon: 'https://works.yangerxiao.com/do-the-five/favicon.ico',
    themeColor: '#3cb371',
    url: 'https://works.yangerxiao.com/html-color-cheatsheet/'
  },
  {
    title: '健身激励器',
    // icon: 'https://works.yangerxiao.com/do-the-five/favicon.ico',
    themeColor: '#fa6f57',
    url: 'https://works.yangerxiao.com/oh-my-goal/'
  },
  {
    title: '密码生成器',
    // icon: 'https://works.yangerxiao.com/do-the-five/favicon.ico',
    themeColor: '#4c706a',
    url: 'https://works.yangerxiao.com/strong-password-generator/'
  },
  {
    title: '极简计时器',
    // icon: 'https://works.yangerxiao.com/do-the-five/favicon.ico',
    themeColor: '#fff',
    url: 'https://works.yangerxiao.com/mini-stopwatch/'
  },
  {
    title: 'Github标星统计',
    // icon: 'https://stars.yangerxiao.com/favicon.ico',
    themeColor: '#fbf5ea',
    url: 'https://stars.yangerxiao.com/'
  }
];
export default function Home() {
  const [modalVisible, setModalVisible] = useState(false);
  const [pModalVisible, setPModalVisible] = useState(false);
  const [currUrl, setCurrUrl] = useState('');
  const { menuVisible, position, showMenu } = useContextMenu(false);
  const togglePModalVisible = (url) => {
    setPModalVisible((prev) => {
      if (prev == false) {
        setCurrUrl(url);
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
      {menuVisible && <ContextMenu {...position} />}
      <div className="search animate__animated animate__fadeInDown">
        <BSearch />
      </div>
      <div className="widgets animate__animated animate__fadeInUp">
        {LOGOS.map((logo) => {
          return (
            <Widget
              onClick={togglePModalVisible.bind(null, logo.url)}
              key={logo.title}
              showMenu={showMenu}
              {...logo}
            />
          );
        })}
        <Widget add onClick={toggleModalVisible} />
        {/* 填充物 */}
        {new Array(4).fill(1).map((item, idx) => {
          return <div style={{ width: '1.4rem', height: '1.05rem' }} key={idx} />;
        })}
      </div>
      <button
        onClick={toggleModalVisible}
        className="add_widget animate__animated animate__zoomIn animate__delay-1s"
      >
        添加小组件
      </button>
      <Modal visible={modalVisible} toggleVisible={toggleModalVisible} />
      <PreviewModal visible={pModalVisible} url={currUrl} toggleVisible={togglePModalVisible} />
    </StyledWrapper>
  );
}
