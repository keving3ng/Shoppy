import React from "react";
import Card from "../elements/Card";

class CardList extends React.Component {
  state = { data: this.props.data };
  componentDidMount() {
    console.log(this.state.date);
  }
  render() {
    return (
      <div className="ui four cards">
        {this.state.data.map(item => {
          return <Card key={item["name"]} item={item} />;
        })}
      </div>
    );
  }
}

export default CardList;