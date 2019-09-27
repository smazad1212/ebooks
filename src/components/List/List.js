import React from 'react'
import { Table, Button } from 'antd'

import list from './List.module.css'

const List = (
  {
    history
  }) => {
  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      render: (title, record) => (
        <span>
          <img src={record.cover} alt={title} className={list.bookCover} />
          <span>{title}</span>
        </span>
      ),
    },
    {
      title: 'Author',
      dataIndex: 'author',
    },
    {
      title: 'Genre',
      dataIndex: 'genre',
    },
    {
      title: 'Download',
      render: link => (
        <a href='/'>Download</a>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      cover: 'https://picsum.photos/200',
      title: 'Warriors And Cats',
      author: 'John Brown',
      genre: 'Mystery',
      downloadLink: 'https://picsum.photos/200'
    },
    {
      key: '2',
      cover: 'https://picsum.photos/200/300',
      title: 'Bow Of The Forest',
      author: 'Jim Green',
      genre: 'Horror',
      downloadLink: 'https://picsum.photos/200'
    },
    {
      key: '3',
      cover: 'https://picsum.photos/200',
      title: 'Running In The Depths',
      author: 'Joe Black',
      genre: 'Romance',
      downloadLink: 'https://picsum.photos/200'
    },
  ];

  return (
    <div className={list.container}>
      <Table
        className={list.table}
        columns={columns}
        dataSource={data}
        bordered
        pagination={false}
      />
      <Button type="primary" icon='plus' onClick={() => history.push('/add')}>Add New</Button>
    </div>
  );
};

export default List;