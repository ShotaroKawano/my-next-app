// import React, { useState, useEffect } from 'react';
// import { NextPage } from 'next';

// export const NewPost: NextPage = () => {
//   const [text, setText] = useState('');
//   // 編集中かどうかはstateで管理
//   const [isEdited, setIsEdited] = useState(false);

//   const handlePopstate = () => {
//     const isDiscardedOK = confirm(
//       '保存されていないデータは削除されますが、よろしいですか？',
//     );
//     if (isDiscardedOK) {
//       // OKの場合、historyAPIで戻るを実行します。
//       window.history.back();
//       setIsEdited(false);
//     }
//     // キャンセルの場合、 ダミー履歴を挿入して「戻る」を1回分吸収できる状態にする
//     history.pushState(null, '', null);
//   };

//   useEffect(() => {
//     // 編集中になったとき、現在のページを履歴に挿入し、handlePopstateをイベント登録
//     if (isEdited) {
//       // ダミー履歴を挿入して「戻る」を1回分吸収できる状態にする
//       history.pushState(null, '', null);
//       window.addEventListener('popstate', handlePopstate, false);
//     }
//     // 他のページに影響しないようclear
//     return () => {
//       window.removeEventListener('popstate', handlePopstate, false);
//     };
//   }, [isEdited]);

//   return (
//     <div
//       className='d-flex justify-content-center'
//       style={{ marginTop: '15vh' }}
//     >
//       <div>
//         <h1>投稿画面</h1>
//         <form>
//           <textarea
//             rows={10}
//             cols={60}
//             value={text}
//             onChange={e => {
//               setText(e.target.value);
//               setIsEdited(true);
//             }}
//           ></textarea>
//         </form>
//         <div className='d-flex justify-content-end'>
//           <button
//             className='btn btn-primary mt-3 me-3'
//             // 保存したときは、編集中フラグをfalseにする
//             onClick={() => setIsEdited(false)}
//           >
//             保存する
//           </button>
//           <button className='btn btn-primary mt-3'>投稿する</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewPost;

import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

export const NewPost: NextPage = () => {
  const [text, setText] = useState('');
  // 編集中かどうかはstateで管理
  const [isEdited, setIsEdited] = useState(false);

  const router = useRouter();

  const setHandlePopstate = () => {
    // ダミーの履歴を挿入し、ブラウザバックを1回分吸収する
    history.pushState(null, '', null);
    router.beforePopState(() => {
      const isDiscardedOK = confirm(
        '保存されていないデータは削除されますが、よろしいですか？',
      );
      // OKの場合、historyAPIで戻るを実行します。
      if (isDiscardedOK) {
        setIsEdited(false);
        router.back();
        return true;
      }
      // キャンセルの場合、 ダミー履歴を挿入して「戻る」を1回分吸収できる状態にする
      history.pushState(null, '', null);
      return false;
    });
  };

  // trueをreturnしてページ遷移が正常に動作すうように戻す
  const clearHandlePopstate = () => {
    router.beforePopState(() => true);
  };

  useEffect(() => {
    // 編集中になったとき、現在のページを履歴に挿入し、handlePopstateをイベント登録
    if (isEdited) {
      setHandlePopstate();
    } else {
      clearHandlePopstate();
    }
    // 他のページに影響しないようclear
    return () => clearHandlePopstate();
  }, [isEdited]);

  // 以下は方法1と同じ
  return (
    <div
      className='d-flex justify-content-center'
      style={{ marginTop: '15vh' }}
    >
      <div>
        <h1>投稿画面</h1>
        <form>
          <textarea
            rows={10}
            cols={60}
            value={text}
            onChange={e => {
              setText(e.target.value);
              setIsEdited(true);
            }}
          ></textarea>
        </form>
        <div className='d-flex justify-content-end'>
          <button
            className='btn btn-primary mt-3 me-3'
            // 保存したときは、編集中フラグをfalseにする
            onClick={() => setIsEdited(false)}
          >
            保存する
          </button>
          <button className='btn btn-primary mt-3'>投稿する</button>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
