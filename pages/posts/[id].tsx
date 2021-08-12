import React from 'react';
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';

interface Props {
  posts: number[];
}

const PostShow: NextPage = () => {
  return <div></div>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = ['/posts/1', '/posts/2', '/posts/3'];
  return { paths, fallback: 'blocking' };
};

// export const getStaticProps: GetStaticProps<Props> = async ctx => {
//   const posts = [1, 2, 3];
//   return {
//     props: { posts },
//     revalidate: 30,
//   };
// };

export default PostShow;
