import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID DMdSnltjz0Ww8L9Cg8P8bQPBSWV2a-PHXMDWPOEyxpw'
  }
});