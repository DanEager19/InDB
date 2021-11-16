import* as React from "react";
const map = new Map();

class Genres extends React.Component {
    state = {count: 1}

    increment = () => {
        this.setState({
            count: this.state.count + 1
        }); 
    }

    decrement = () => {
        if (this.state.count > 1) {
            this.setState({
                count: this.state.count - 1
            }); 
        }
    }
    render() {
        const arr = this.state.count
        const genreArray = arr.map((index) => 
            <div className="row p-2" key={index}>
                <input type="text" id="genres" placeholder="Genres" name="genres"/>
            </div>
        );
        return (
            <div className="col">
                <div className="row-3 p-2">
                    <label htmlFor="genres">Genres:</label>
                </div>
                {genreArray}
                <div className="row p-2">
                    <button onClick={this.increment}>+</button>
                </div>
            </div>
        )
    }
}
export default Genres;