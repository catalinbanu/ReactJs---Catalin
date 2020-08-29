import React from "react";
import { connect } from "react-redux";
import { addUser } from "../../redux/actions/actions";

interface IProps {
  addUser: any;
}

interface IState {
  input: string;
}

class AddUser extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  async readURL() {
    const url = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(url);
    const user = await response.json();
    this.setState({ input: user });
  }

  handleAddUser = (input) => {
    this.props.addUser(this.state.input);
    this.setState({ input });
  };

  render() {
    return (
      <div>
        <button className="add-user" onClick={this.handleAddUser}>
          Add User
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (content) => dispatch(addUser(content)),
  };
};

export default connect(null, mapDispatchToProps)(AddUser);
