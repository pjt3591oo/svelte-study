// $로 시작하면 /src을 의미
// src/lib/database 경로를 의미
import db from '$lib/database';

// GET /blog/:slug
export async function get({params}) {
  const {slug} = params;
  const posts = [{
    title: 'Hello World1',
    id: 0,
  }, {
    title: 'Hello World2',
    id: 1,
  }, {
    title: 'Hello World3',
    id: 2,
  }, {
    title: 'Hello World4',
    id: 3,
  }];

  if(posts) {
    return {
      body: {
        posts
      }
    }
  }
}

// POST /blog/:slug 
export async function post(request) {
  // console.log(request);
  return {
    
  }
}