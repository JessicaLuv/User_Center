import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import '@umijs/max';
import React from 'react';
import {NOTION_LINK} from "@/constants";
const Footer: React.FC = () => {
  const defaultMessage = 'Charlotte Luv';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'luv',
          title: 'luv导航',
          href: 'https://pro.ant.design',
          blankTarget: true,
        },
        {
          key: 'notion',
          title: 'Notion',
          href: NOTION_LINK,
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined />Luv GitHub</>,
          href: 'https://github.com/JessicaLuv/Charlotte',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
