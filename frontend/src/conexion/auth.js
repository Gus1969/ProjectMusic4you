//import axios from 'axios'

export const register = (user) => {
    const post = fetch("http://localhost:3001/user", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((final) => {
        return final;
      });
    return post;
  };

  export const siteLogin = (user) => {
      console.log(user)
    const post = fetch("http://localhost:3001/user/login", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((final) => {
          return final;
        });
        console.log(post)
      return post;
    };
  
