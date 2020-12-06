import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Widget from './Widget';
import IconSearch from '../asset/img/icon.search.png';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* width: 100%; */
  .input {
    position: relative;
    width: 3rem;
    height: 0.3rem;
    display: flex;

    input {
      width: 100%;
      background: none;
      border-radius: 0.08rem;
      border: 0.01rem solid #c4c7ce;
      padding: 0.05rem 0.24rem;

      font-size: 0.14rem;
      &:focus {
        border: 0.01rem solid #4e6ef3;
      }
      &::placeholder {
        transition: all 0.3s ease;
        transform: translateX(50%);
      }
    }
    &:before {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translateX(-100%) translateY(-50%);
      display: block;
      width: 0.2rem;
      height: 0.2rem;
      background-image: url(${IconSearch});
      background-size: contain;
      transition: all 0.3s ease;
    }
    &:focus-within {
      &:before {
        left: 0.04rem;
        transform: translateX(0) translateY(-50%);
      }
      input::placeholder {
        transform: translateX(0);
      }
    }
  }
  .result {
    margin-top: 0.4rem;
    display: flex;
    flex-wrap: wrap;
    > div {
      margin-right: 0.2rem;
    }
  }
  .empty {
    font-size: 0.2rem;
    color: #555;
    padding: 0.5rem 0;
  }
`;
export default function Search({ input = '', updateInput, data = [] }) {
  const [items, setItems] = useState([]);
  const handleInput = (evt) => {
    updateInput(evt.target.value);
  };
  useEffect(() => {
    if (input) {
      let newItems = data.filter((d) => {
        return d.title.toLowerCase().indexOf(input.toLowerCase()) > -1;
      });
      setItems(newItems);
    } else {
      setItems([]);
    }
  }, [input, data]);
  return (
    <StyledWrapper>
      <div className="input">
        <input placeholder="搜索" value={input} onChange={handleInput} />
      </div>
      {items.length != 0 && (
        <div className="result">
          {items.map((item) => {
            return <Widget key={item.url} data={item} />;
          })}
        </div>
      )}
      {input && items.length == 0 && <div className="empty">无结果</div>}
    </StyledWrapper>
  );
}
