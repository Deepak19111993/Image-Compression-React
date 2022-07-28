import styled from "styled-components";

export const CompressorWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
  padding: 0 15px;
  /* height: 100vh; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    height: auto;
    padding: 40px 15px;
  }
  .inner-block {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0 100px;
    @media screen and (max-width: 767px) {
      flex-direction: column;
      padding: 0 0 50px;
    }
    .btn-wrapper {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin: 0 40px;
      @media screen and (max-width: 767px) {
        margin: 10px 0 0;
        order: 3;
      }
      button {
        min-width: 200px;
        cursor: pointer !important;
        background: rgba(10, 124, 171, 1);
        height: 45px;
        border-radius: 4px;
        border: none;
        outline: none;
        color: #fff;
        font-size: 14px;
        text-transform: uppercase;
        transition: all 0.2s;
        @media screen and (max-width: 767px) {
          height: 40px;
          font-size: 13px;
        }
        &:hover {
          background: rgba(10, 124, 171, 0.9);
        }
      }
      .upload-btn {
        min-width: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 45px;
        background: rgba(10, 124, 171, 1);
        border-radius: 4px;
        border: none;
        outline: none;
        font-size: 14px;
        color: #fff;
        text-transform: uppercase;
        position: relative;
        cursor: pointer !important;
        overflow: hidden;
        transition: all 0.2s;
        @media screen and (max-width: 767px) {
          height: 40px;
          font-size: 13px;
        }
        &:hover {
          background: rgba(10, 124, 171, 0.9);
        }
        input[type="file"] {
          position: absolute;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          opacity: 0;
          cursor: pointer !important;
        }
      }
    }
    .upload-img {
      width: 300px;
      height: 300px;
      object-fit: cover;
      @media screen and (max-width: 1440px) {
        width: 250px;
        height: 250px;
      }
      @media screen and (max-width: 991px) {
        width: 200px;
        height: 200px;
      }
      @media screen and (max-width: 767px) {
        width: 230px;
        height: 230px;
        margin-bottom: 20px;
      }
      @media screen and (max-width: 575px) {
        width: 200px;
        height: 200px;
      }
    }
  }
  h2 {
    margin-bottom: 100px;
    font-size: 30px;
    @media screen and (max-width: 1440px) {
      margin-bottom: 50px;
    }
    @media screen and (max-width: 767px) {
      margin-bottom: 30px;
    }
  }
  .grid-img {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 5px;
    img {
      width: calc(100% / 4 - 4px);
      @media screen and (max-width: 767px) {
        width: calc(100% / 3 - 4px);
      }
    }
  }
  .degree-wrapper {
    margin-bottom: 50px;
    input {
      height: 45px;
      border: 1px solid #ccc;
      border-radius: 4px;
      max-width: 400px;
      width: 100%;
      margin: 0 auto;
      padding: 0 15px;
      font-size: 16px;
      color: #000;
      display: flex;
      align-items: center;
      &::placeholder {
        font-size: 16px;
        color: #000;
      }
    }
    .degree-result {
      text-align: center;
      font-size: 18px;
      margin: 20px 0;
    }
  }
`;
