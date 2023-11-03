import React from 'react';
import * as S from './searchPost.styled';
import UserPosts from '../searchpost/UserPosts';

export default function SearchPost({ searchResults = [] }) {
  const contents = searchResults.map((post) => {
    const content = post.content || String(post.image).split('🈳')[2];
    return content.toLowerCase();
  });

  return (
    <S.SearchLayout>
      <UserPosts searchResults={contents} />
    </S.SearchLayout>
  );
}
