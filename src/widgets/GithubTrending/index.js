import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Developer from './developer';
import Repo from './repo';
import Loading from './loading';

const StyledWrapper = styled.div`
  /* position: relative; */
  background: #fff;
  overflow: scroll;
  height: 100%;
  ul {
    display: flex;
    flex-direction: column;
    font-size: 0.18rem;
    list-style: none;
    padding-left: 0;
  }
  .list {
    /* border: 1px solid #ccc; */
    padding-bottom: 0.4rem;
    margin: 0;
  }
  .tabs {
    z-index: 999;
    position: absolute;
    bottom: 0.1rem;
    left: 0.1rem;
    flex-direction: row;
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid #888;
    margin: 0;
    .tab {
      background-color: #fff;
      cursor: pointer;
      padding: 0.06rem;
      transition: all 0.5s;
      &.active {
        background-color: #333;
        a {
          color: #fff;
        }
      }
      a {
        color: #000;
      }
    }
  }
`;
const RepoList = ({ data }) => {
  return (
    <ul id="LIST_TOP" className="list">
      {data.map((r, idx) => {
        return (
          <Repo
            isFirst={idx == 0}
            repo={r}
            key={r.url}
            className="animate__animated animate__flipInX"
            style={{ animationDelay: `${idx * 0.3}s`, animationDuration: '.5s' }}
          ></Repo>
        );
      })}
    </ul>
  );
};
const DeveloperList = ({ data = [] }) => {
  return (
    <ul id="LIST_TOP" className="list">
      {data.map((d, idx) => {
        return (
          <Developer
            className="animate__animated animate__fadeInUp"
            style={{ animationDelay: `${idx * 0.3}s`, animationDuration: '.5s' }}
            developer={d}
            key={d.username}
          ></Developer>
        );
      })}
    </ul>
  );
};

export default function GithubTrending() {
  const [repos, setRepos] = useState([]);
  const [devs, setDevs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [type, setType] = useState('developers');
  useEffect(() => {
    const reqData = async () => {
      const resp = await fetch(`https://hackertab.pupubird.com/${type}`);
      const data = await resp.json();
      setLoading(false);
      if (type == 'developers') {
        setDevs(data);
      } else {
        setRepos(data);
      }
    };
    reqData();
  }, [type]);
  const handleTabClick = (t) => {
    console.log({ t });
    setType(t);
    setLoading(true);
  };
  return (
    <StyledWrapper>
      {loading && <Loading />}
      <ul className="tabs">
        <li
          onClick={handleTabClick.bind(null, 'repositories')}
          className={`tab ${type == 'repositories' && 'active'}`}
        >
          <a href="#LIST_TOP">热门仓库</a>
        </li>
        <li
          onClick={handleTabClick.bind(null, 'developers')}
          className={`tab ${type == 'developers' && 'active'}`}
        >
          <a href="#LIST_TOP">热门开发者</a>
        </li>
      </ul>
      {type == 'developers' ? <DeveloperList data={devs} /> : <RepoList data={repos} />}
    </StyledWrapper>
  );
}
