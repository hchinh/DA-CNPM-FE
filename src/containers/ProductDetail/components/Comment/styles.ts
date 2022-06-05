import styled from 'styled-components';

export const CommentStyles = styled.div`
  .comment {
    padding: 0 60px;
  }
  .comment-item {
    background-color: #ffffff;
    border-radius: 10px;
    padding: 5px;
    margin: 10px 0;
  }
  .comment-info {
    & > .comment-creater {
      display: flex;
      align-items: center;
      font-weight: bold;
      margin-bottom: 5px;

      & > img {
        width: 50px;
        border-radius: 10px;
      }
    }

    & > .comment-create-time {
      margin-left: 50px;
      color: #ccc;
      margin-top: -15px;
    }
  }
  .comment-item-content {
    margin-left: 15px;
    padding-bottom: 8px;
    border-bottom: solid 1px #ccc;
  }

  .ant-row .ant-form-item {
    margin-bottom: 10px;
  }

  .ant-comment-content-author-name {
    color: #000;
    font-weight: bold;
  }
`;
