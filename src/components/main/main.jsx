import React from "react";
import style from './main.module.css';


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: null
        };
        this.updateValue = this.updateValue.bind(this);
        this.deletePost = this.deletePost.bind(this);
    };

    async componentDidMount() {

        const url = 'https://jsonplaceholder.typicode.com/posts';

        const response = await fetch(url);

        const data = await response.json();

        this.setState({ posts: data });

    };

    async updateValue(e) {

        const urlToPost = `https://jsonplaceholder.typicode.com/posts/${e.target.id}`;

        const responseToPost = await fetch(urlToPost, {
            method: 'PATCH',
            body: JSON.stringify({
                title: e.target.value,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
        });

        const urltoPosts = 'https://jsonplaceholder.typicode.com/posts';

        const responseToPosts = await fetch(urltoPosts);

        const data = await responseToPosts.json();

        this.setState({ posts: data });
        
    };

    async deletePost(e) {

        const urlToDelete = `https://jsonplaceholder.typicode.com/posts/${e.target.id}`;

        const responseToDelete = fetch(urlToDelete, {method: 'DELETE'});

        const urlToPosts = 'https://jsonplaceholder.typicode.com/posts';

        const responseToPosts = await fetch(urlToPosts);

        const data = await responseToPosts.json();

        this.setState({ posts: data });
    };

    render() {
        
        return (
            <div className={style.main}>
                <div className={style.main__posts}>
                    {this.state.posts
                        ? this.state.posts.map(item => {
                            return (
                                <div className={style.main__post} key={item.id} id={item.id}>
                                    <input type="text" value={item.title} id={item.id} userid={item.userId} body={item.body} onChange={this.updateValue} />
                                    <div>{item.id}</div>
                                    <button id={item.id} onClick={this.deletePost}>Delete</button>
                                </div>
                            )
                        })
                        : <div>Loading...</div>
                    }
                </div>
            </div>

        )

    };

};

export default Main;