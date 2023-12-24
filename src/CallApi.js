import React, { Component } from 'react';

class CallApi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
        }
    }
    componentDidMount() {
        const apiKey = '796128b1c3b1477b917dfa3b4dc61ae0';
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                this.setState({ articles: data.articles });
            })
            .catch((error) => console.error('Error fetching data: ', error));
    }
 
    render() {
        const { articles } = this.state;
 
        return (
            <div>
                <h1>headlines</h1>
                <ul>
                    {articles.map((article, index) => (
                        <li key={index}>
                            <h2>{article.title}</h2>
                            <p>{article.description}</p>
                        </li>
                    )
                    )}
                </ul>
            </div>
        )
    }
}
export default CallApi; 