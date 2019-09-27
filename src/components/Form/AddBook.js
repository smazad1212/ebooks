import React, { Component } from 'react'
import {
  Form,
  Button,
  Upload,
  Icon,
  Input
} from 'antd'

import addBook from './AddBook.module.css'

class AddBook extends Component {
  state = {
    title: '',
    author: '',
    genre: '',
    cover: {},
    file: {}
  }

  componentDidMount() {
    document.title = 'Add New Book'
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log(this.state)
  }

  handleChange = event => {
    let field = event.target.id
    let value = event.target.value
    this.setState({ [field]: value })
  }

  onPictureUpload = e => {
    this.setState({ cover: e.file })
  }

  onFileUpload = e => {
    this.setState({ file: e.file })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 8 },
    }
    const { title, author, genre } = this.state
    return (
      <div className={addBook.container}>
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item label="Title">
            <Input placeholder="Enter title" id="title" onChange={this.handleChange} value={title} />
          </Form.Item>

          <Form.Item label="Author">
            <Input placeholder="Enter author" id="author" onChange={this.handleChange} value={author} />
          </Form.Item>

          <Form.Item label="Genre">
            <Input placeholder="Enter genre" id="genre" onChange={this.handleChange} value={genre} />
          </Form.Item>

          <Form.Item label="Cover" extra='Accepted file types: .jpg, .jpeg, .png'>
            {getFieldDecorator('upload', {
              valuePropName: 'fileList',
              getValueFromEvent: this.onPictureUpload,
            })(
              <Upload accept='.jpg, .jpeg, .png'>
                <Button>
                  <Icon type="upload" /> Upload book cover
                </Button>
              </Upload>,
            )}
          </Form.Item>

          <Form.Item label="Upload Book" extra='Accepted file types: .pdf, .doc, .docx'>
            {getFieldDecorator('dragger', {
              valuePropName: 'fileList',
              getValueFromEvent: this.onFileUpload,
            })(
              <Upload.Dragger accept='.pdf, .doc, .docx'>
                <p className="ant-upload-drag-icon">
                  <Icon type="inbox" />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
              </Upload.Dragger>,
            )}
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 4 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>

            <Button className={addBook.cancelBtn} onClick={() => this.props.history.push('/')}>
              Cancel
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

const AddBookForm = Form.create()(AddBook)

export default AddBookForm