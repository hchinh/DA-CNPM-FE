import styled from 'styled-components';

export default styled.div`
  .slider {
    height: 100vh;
  }
  .sliderImg {
    background-image: url('https://gvn360.com/wp-content/uploads/2020/07/d6f28492b786d1ee2fdc5296f4c21848-1.jpg');
    height: 100vh;
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover;
  }
  .modal {
    background-color: rgba(0, 0, 0, 0.4);
    height: 100%;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .header {
    font-size: 64px;
    color: #fff;
    margin-bottom: 43px;
    font-family: 'Merienda';
  }
  .title {
    font-size: 35px;
    color: #fff;
    font-family: 'Merienda';
  }

  /* Reponsvie */
  @media (min-width: 768px) and (max-width: 1024px) {
    .slider {
      height: 64vh;
    }
  }
  @media (max-width: 764px) {
    .slider {
      height: 81vh;
    }
  }
`;
