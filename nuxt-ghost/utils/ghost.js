import GhostContentAPI from '@tryghost/content-api'
import {
  API_KEY
} from "../config/constants";

// we have this function accept variables to be accessible to config.js
const ghost = (url, key) => {
  return new GhostContentAPI({
    url: "http://localhost:2368",
    key: API_KEY,
    version: 'v2'
  })
}

const postsPerPage = 5

const postIndexFields = [
  'id',
  'uuid',
  'title',
  'slug',
  'feature_image',
  'featured',
  'published_at',
  'custom_excerpt',
  'excerpt' // excerpt doesn't seem to work in field definition (bug?)
]

const ghostAPI = () => {
  // called as function to make sure env variables are available
  return ghost("http://localhost:2368", API_KEY)
}

export {
  ghostAPI,
  postsPerPage,
  postIndexFields
}
