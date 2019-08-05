import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#3F51B5',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#3F51B5',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};
class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      help: '',
      contact: '',
    };
  }


  componentWillMount() {
    const { steps } = this.props;
    const { name, help, contact } = steps;

    this.setState({ name, help, contact });
  }

  render() {
    const { name, help, contact } = this.state;
    return (
      <div style={{ width: '100%' }}>
        <h3>Summary</h3>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{name.value}</td>
            </tr>
            <tr>
              <td>Help</td>
              <td>{help.value}</td>
            </tr>
            <tr>
              <td>Contact</td>
              <td>{contact.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

class ChatBoat extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
      <ChatBot floating={true}  headerTitle='Utility' recognitionEnable={true} 
        steps={[
          {
            id: '1',
            message: 'What is your name?',
            trigger: 'name',
          },
          {
            id: 'name',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: 'Hi {previousValue}! How Can We Help You?',
            trigger: 'help',
          },
          {
            id: 'help',
            options: [
              { value: 'Book an Order', label: 'bookOrder', trigger: '5' },
              { value: 'Contact Us', label: 'contactUs', trigger: '7' },
            ],
          },
          {
            id: '5',
            message: 'To Book an Order signUp if you have not account before and then Book Order',
            // trigger: 'help',
          },
          {
            id: '7',
            message: "If you want to contact with us Please Visit the Contact Us Page.",
            // trigger: 'contactUs',
          },
          // {
          //   id: '7',
          //   message: 'Great! Check out your summary',
          //   trigger: 'review',
          // },
          {
            id: 'review',
            component: <Review />,
            asMessage: true,
            trigger: 'update',
          },
          {
            id: 'update',
            message: 'Would you like to update some field?',
            trigger: 'update-question',
          },
          {
            id: 'update-question',
            options: [
              { value: 'yes', label: 'Yes', trigger: 'update-yes' },
              { value: 'no', label: 'No', trigger: 'end-message' },
            ],
          },
          {
            id: 'update-yes',
            message: 'What field would you like to update?',
            trigger: 'update-fields',
          },
          {
            id: 'update-fields',
            options: [
              { value: 'name', label: 'Name', trigger: 'update-name' },
              { value: 'gender', label: 'Gender', trigger: 'update-gender' },
              { value: 'age', label: 'Age', trigger: 'update-age' },
            ],
          },
          {
            id: 'update-name',
            update: 'name',
            trigger: '7',
          },
          {
            id: 'update-gender',
            update: 'gender',
            trigger: '7',
          },
          {
            id: 'update-age',
            update: 'age',
            trigger: '7',
          },
          {

            id: 'end-message',
            message: 'Thanks! Your data was submitted successfully!',
            end: true,
          },
        ]}
      />
      </ThemeProvider>
    );
  }
}

export default ChatBoat;