import React from 'react';
//
// const SearchBar = () => {
//     return <input />
// };

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <input
                    value={this.props.term}
                    onChange={(event) => this.props.onChange(event.target.value)}
                />
                <div>value : {this.props.term}</div>
            </div>
        )
    }
}

export default SearchBar;
