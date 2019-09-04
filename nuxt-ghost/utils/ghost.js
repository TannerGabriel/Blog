import GhostContentAPI from '@tryghost/content-api'
import {
  API_KEY
} from "../config/constants";

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
  'published_at',
  'html',
  'excerpt'
]

const ghostAPI = () => {
  return ghost("http://localhost:2368", API_KEY)
}

export {
  ghostAPI,
  postsPerPage,
  postIndexFields
}
