import React, {Component} from 'react'
import { Table, Button } from 'antd'
import axios from 'axios'

import list from './List.module.css'

class List extends Component {
  state = {
    loading: true,
    books: [],
    error: false
  }

  componentDidMount() {
    axios.get('http://localhost:4000/api/books').then(res => {
      let data = res.data
      this.setState({
        books: data,
        loading: false,
        error: false
      })
    })
      .catch(error => {
        this.setState({
          loading: false,
          error: true
        })
      })
  }

  render() {
    const { loading, books, error } = this.state

    const columns = [
      {
        title: 'Title',
        dataIndex: 'title',
        render: (title, record) => (
          <span>
          <img src={record.cover} alt='' className={list.bookCover} />
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
    ]

    if (loading) {
      return <div>Loading . . .</div>
    }

    if (error) {
      return <div>Something went wrong!</div>
    }

    return (
      <div className={list.container}>
        <Table
          className={list.table}
          columns={columns}
          dataSource={books}
          rowKey='_id'
          bordered
          pagination={false}
        />
        <Button type="primary" icon='plus' onClick={() => this.props.history.push('/add')}>Add New</Button>
      </div>
    )
  }
}

export default List