import { GetUserInfo } from './UserInfo.js';

const userInfo = new GetUserInfo('https://jsonplaceholder.typicode.com', 1);

userInfo.getTodo().then(dataTodo => console.log(dataTodo));
userInfo.getUser().then(dataUser => console.log(dataUser));