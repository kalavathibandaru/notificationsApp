const Notification = (props) => {
  const { text, ImageUrl, styling } = props;
  const containerList = `flex-container ${styling}`;
  return (
    <div className={containerList}>
      <img className="image" src={ImageUrl} />
      <p className="paragraph">{text}</p>
    </div>
  );
};

const element = (
  <div className="bg-container">
    <h1 className="heading"> Notifications </h1>
    <Notification
      text="Information Message"
      ImageUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      styling="blue-container"
    />

    <Notification
      text="Success Message"
      ImageUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      styling="green-container"
    />

    <Notification
      text="Warning Message"
      ImageUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      styling="yellow-container"
    />

    <Notification
      text="Error Message"
      ImageUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      styling="red-container"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
