import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

export const NewPost: NextPage = () => {
  const router = useRouter();
  return (
    <div className='mt-5 d-flex justify-content-center'>
      <div>
        <h1>投稿一覧</h1>
        <button
          className='btn btn-primary mt-3 me-3'
          onClick={() => router.push('/posts/new')}
        >
          投稿を作成する
        </button>
        <ul className='mt-5'>
          <li>
            <a href='http://' target='_blank' rel='noopener noreferrer'>
              投稿1
            </a>
          </li>
          <li>
            <a href='http://' target='_blank' rel='noopener noreferrer'>
              投稿2
            </a>
          </li>
          <li>
            <a href='http://' target='_blank' rel='noopener noreferrer'>
              投稿3
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NewPost;
