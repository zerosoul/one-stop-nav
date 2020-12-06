import { useState, useEffect } from 'react';
import LOGOS from './mock_data';
const useContextMenu = () => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ left: 0, top: 0 });
  const showMenu = (pos) => {
    setPosition(pos);
    setVisible(true);
  };
  const hideMenu = () => {
    setVisible(false);
  };
  useEffect(() => {
    document.onclick = () => {
      hideMenu();
    };
    return () => {
      document.onclick = null;
    };
  }, []);
  return { menuVisible: visible, position, showMenu, hideMenu };
};
const useAppData = () => {
  const initialData = JSON.parse(localStorage.getItem('WEB_APP_DATA') || 'null') || LOGOS;
  const [data, setData] = useState(initialData);
  const updateLocalData = (newData) => {
    localStorage.setItem('WEB_APP_DATA', JSON.stringify(newData));
  };
  const addApp = ({ title, url, icon, themeColor }) => {
    setData((prev) => {
      let newData = [...prev, { title, url, icon, themeColor }];
      updateLocalData(newData);
      return newData;
    });
  };
  const removeApp = (url) => {
    setData((prev) => {
      let newData = prev.filter((item) => {
        return item.url != url;
      });
      updateLocalData(newData);
      return newData;
    });
  };
  return { data, addApp, removeApp };
};
export { useContextMenu, useAppData };
