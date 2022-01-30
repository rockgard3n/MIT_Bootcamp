"use strict";

class Person extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    details: {
      name: "Maradona",
      residence: {
        city: "Tigre",
        country: "Argentina",
      },
      profession: "soccer",
    },
  };

  render() {
    return <Details person={this.state} />;
  }
}

const Details = (props) => {
  // TODO: destructure props
    const {
    person: {
      details: {
        name: name,
        residence: { city: city, country: country },
        profession: profession,
      },
    },
  } = props;
  return (
    <div style={{ margin: "1em" }}>
      <div id="name">Name: {name}</div>
      <div id="city">City: {city}</div>
      <div id="country">Country: {country}</div>
      <div id="profession">Profession: {profession}</div>
    </div>
  );
};

ReactDOM.render(React.createElement(Person), document.getElementById("root"));
