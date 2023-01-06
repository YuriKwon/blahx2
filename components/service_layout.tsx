// 각 페이지를 구성할 때 쓰일 것임
// Next header -> 메타 정보를 담고 있음

import Head from 'next/head';

interface Props {
  title: string;
  children: React.ReactNode;
}

// title 초기값 설정
export const ServiceLayout = function ({ title = 'blah x2', children }: Props) {
  return (
    <div>
      {/* Head: html 상단에 들어가는 메타 정보 */}
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </div>
  );
};
