var fetchUserByName=function(e){return console.log("Робимо запит на сервер..."),new Promise((function(n,o){setTimeout((function(){Math.random()<.5?n({firstName:e,lastName:"Francis",age:30}):o("Користувача з таким ім'ям не знайдено")}),1e3)}))};fetchUserByName("Anna").then(console.log).catch(console.warn);
//# sourceMappingURL=promisification.76869884.js.map
