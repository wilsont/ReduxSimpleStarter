import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyDsJ39rlrIVQ37NR9NDsAuDsDHAWUBRhrM';

class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.onChange = this.onChange.bind(this);

        this.state = {
            videos: [],
            term: '',
        }
    }

    onChange(term) {
        this.setState({term});

        YTSearch({key: API_KEY, term: term}, (videos) => {
            console.log(videos);
            this.setState({videos})
        });
    }

    render() {
        return <div>
            <SearchBar
                term={this.state.term}
                onChange={this.onChange}
            />

            {this.state.videos.length > 0 &&
                <VideoDetail video={this.state.videos[0]} />
            }

            <VideoList
                videos={this.state.videos}
            />
        </div>;
    }
}

ReactDOM.render(
    <App />
  , document.querySelector('.container')
);
