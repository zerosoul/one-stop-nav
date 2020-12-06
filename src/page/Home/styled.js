import styled from 'styled-components';

const StyledWrapper = styled.section`
  margin: 0 auto;
  width: 8.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 414px) {
    width: 5.28rem;
  }
  .search {
    padding-top: 0.2rem;
    padding-bottom: 0.3rem;
    width: 100%;
  }
  .widgets {
    width: 100%;
    .swiper-container {
      padding: 0 0.3rem;
      &.search_mode {
        display: none;
      }
      .swiper-slide {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
      .swiper-pagination {
        bottom: -0.2rem;
      }
    }
  }
`;

export default StyledWrapper;
