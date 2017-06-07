
var Greeter = React.createClass({
    get_default_props:function(){
        return {
            name: 'React',
            message: 'Default message not working'
        };
       },
    render:function(){
       var name = this.props.name;
       var message = this.props.message;
        return (
            <div>
              <h1>Mello {name}</h1>
              <p>{message}</p>
            </div>
        );
    }
});
var firstName = "brendan";

ReactDOM.render(
    <Greeter name={firstName} ></Greeter>,
    document.getElementById('app')
);
