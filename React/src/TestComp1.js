import React from "react";


class TestComp1 extends React.Component{
    render (){
        return <div>
            {this.props.Fname}
        </div>
    }

    componentDidMount() {
            console.log('Nikita Lama');
    }

    componentWillUnmount() {
        console.log('New App');
    }

    componentDidUpdate() {
        console.log('React');
    }

}
export default TestComp1;