var Users = [{name : '소녀시대', age:20}, {name : '걸스데이', age:23}];
console.log(Users);

Users.unshift({name : '티아라', age:23});
console.log(Users);

Users.shift();
console.log(Users);

Users.unshift({name : '티아라', age:23});
delete Users[1];
console.log(Users);

Users.splice(1,2);
console.log(Users);

Users.unshift({name : '티아라', age:23}, {name : '애프터스쿨', age:25});

var Users2 = Users.slice(1, 2);
console.dir(Users2);

var Users3 = Users2.slice(1);
console.dir(Users3);
