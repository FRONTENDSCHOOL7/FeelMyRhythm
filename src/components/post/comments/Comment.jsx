import React, { useEffect, useState } from 'react';
import * as S from './Comment.styled';
import { atomMyInfo } from '../../../store/store';
import { useRecoilValue } from 'recoil';
import { useNavigate, useParams } from 'react-router-dom';
import { commentDeleteAPI, commentReportAPI } from '../../../apis/comment/commentAPI';
import moment from 'moment';
import 'moment/locale/ko';
import Modal from '../../common/Modal/Modal';
import basicProfile from '../../../assets/images/common/basic-profile.svg';

export default function Comment({ data }) {
  const navigate = useNavigate();
  const { id: postId } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const { author, createdAt, content, id } = data || {};

  const goProfile = (username) => {
    navigate(`/profile/${username}`);
  };

  const commentTime = (createdAt) => {
    return moment(createdAt).fromNow();
  };

  const handleOnModal = () => {
    setIsModalOpen(true);
  };

  return (
    <S.CommentLayout>
      {data && (
        <>
          <S.CommentBox>
            <S.CommentInfo>
              {data?.img}
              <S.CommentProfile onClick={() => goProfile(author?.accountname)}>
                <S.ProfileImg
                  src={!author?.image || String(author?.image).includes('Ellipse.png') ? basicProfile : author?.image}
                />
                <S.TitleContent>{author?.username}</S.TitleContent>
              </S.CommentProfile>
              <S.TimeBox>·{commentTime(createdAt)}</S.TimeBox>
              <S.MoreBtn onClick={handleOnModal} />
            </S.CommentInfo>
            <S.CommentContent>{content}</S.CommentContent>
          </S.CommentBox>
          <Modal
            modalState={'comment'}
            postModal={true}
            postUser={author.accountname}
            commentId={id}
            isOpen={isModalOpen}
            onClose={toggleModal}></Modal>
        </>
      )}
    </S.CommentLayout>
  );
}
