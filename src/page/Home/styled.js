import styled from 'styled-components';

const StyledWrapper = styled.section`
  margin: 0 auto;
  width: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 414px) {
    width: 4.68rem;
  }
  .search {
    padding-top: 0.5rem;
    padding-bottom: 0.6rem;
    width: 100%;
  }
  .widgets {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    /* margin-right: 0.24rem; */
    justify-content: space-between;
  }
`;

export default StyledWrapper;
