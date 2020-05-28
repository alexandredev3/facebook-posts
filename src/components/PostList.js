import React, { Component } from 'react';

import Header from './Header.js';
import Post from './Post';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        },
        date: "28 maio 2020",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png"
            },
            content: "Morbi eget orci id justo porttitor laoreet vel non nulla. Nulla aliquet, nulla vel convallis elementum, purus mi aliquet sapien, non lacinia dui elit eu augue. Nunc eu lorem placerat justo malesuada porta. Proin malesuada, diam eu porttitor pellentesque, felis purus consectetur metus, ut elementum quam elit quis turpis. Cras quis elit sapien, Phasellus venenatis aliquet dolor lobortis suscipit. Nulla facilisi. Donec dui nisl, sodales at est vitae, feugiat gravida sapien."
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Alexandre Costa",
          avatar: "https://avatars3.githubusercontent.com/u/61118233?s=460&u=0d696b0bf604b68066dc7ee9057d34a22d2a4a76&v=4"
        },
        date: "23 mai 2020",
        content: "Vivamus est metus, pretium non lobortis et, dictum fringilla augue?",
        comments: [
          {
            id: 1,
            author: {
              name: "Danielle Panabaker",
              avatar: "https://pbs.twimg.com/profile_images/1045683183910604800/O3R6rwMN_400x400.jpg"
            },
            content: "Morbi eget orci id justo porttitor laoreet vel non nulla. Nulla aliquet, nulla vel convallis elementum, purus mi aliquet sapien, non lacinia dui elit eu augue. Nunc eu lorem placerat justo malesuada porta. Proin malesuada, diam eu porttitor pellentesque, felis purus consectetur metus, ut elementum quam elit quis turpis."
          },
          {
            id: 2,
            author: {
              name: "Fernando Silva",
              avatar: "https://lh3.googleusercontent.com/proxy/eZopWcVXm8bJm--hxSbNfAlgVXeBjXBrSgI8JM5NGmAUXdNmzjmzzpEaUnuM8o57PQwzY7KoAjH18KgLUe7esHcx5AyU5omBEPVFKcklEcFCUTSbeAQ_SsbKlZpYNjnccsU"
            },
            content: "Morbi eget orci id justo porttitor laoreet vel non nulla. Nulla aliquet, nulla vel convallis elementum, purus mi aliquet sapien, non lacinia dui elit eu augue. Nunc eu lorem placerat justo malesuada porta. Proin malesuada, diam eu porttitor pellentesque, felis purus consectetur metus, ut elementum quam elit quis turpis. Cras quis elit sapien, Phasellus venenatis aliquet dolor lobortis suscipit. Nulla facilisi. Donec dui nisl, sodales at est vitae, feugiat gravida sapien."
          }
        ]
      }
    ]
  }

  render() {
    return (
      <>
        <Header />
        <div>
          {this.state.posts.map(post => 
            <Post 
              key={post.id}
              data={post}
            />
          )}
        </div>
      </>
    );
  }
}

export default PostList;