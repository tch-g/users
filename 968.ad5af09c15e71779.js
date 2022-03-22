"use strict";(self.webpackChunkusers=self.webpackChunkusers||[]).push([[968],{968:(Pn,ut,u)=>{u.r(ut),u.d(ut,{SetModule:()=>Tn});var A=u(808),r=u(223);u(76),u(306),u(742),u(421),u(669),u(403),u(268),u(810),u(4);let Qt=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({}),n})();const tt=new r.OlP("NgModelWithFormControlWarning");let pe=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({imports:[[Qt]]}),n})(),Mn=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({imports:[pe]}),n})(),Dn=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:tt,useValue:t.warnOnNgModelWithFormControl}]}}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({imports:[pe]}),n})();var m=u(582),En=u(520);let at=(()=>{class n{constructor(t){this.http=t}getUsers(){return this.http.get("https://jsonplaceholder.typicode.com/users")}getPosts(){return this.http.get("https://jsonplaceholder.typicode.com/posts")}find(t){return this.http.get(`https://jsonplaceholder.typicode.com/users/${t}`)}findPost(t){return this.http.get(`https://jsonplaceholder.typicode.com/posts/?userId=${t}`)}}return n.\u0275fac=function(t){return new(t||n)(r.LFG(En.eN))},n.\u0275prov=r.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const On=function(n){return["/",n,"users"]};function Fn(n,e){if(1&n&&(r.TgZ(0,"div")(1,"button",3),r._uU(2),r.qZA(),r._UZ(3,"br")(4,"br"),r.qZA()),2&n){const t=e.$implicit;r.xp6(1),r.Q6J("routerLink",r.VKq(2,On,t.id)),r.xp6(1),r.Oqu(t.name)}}let wn=(()=>{class n{constructor(t){this.apiService=t}ngOnInit(){this.apiService.getUsers().subscribe(t=>{this.users=t})}}return n.\u0275fac=function(t){return new(t||n)(r.Y36(at))},n.\u0275cmp=r.Xpm({type:n,selectors:[["app-list"]],decls:5,vars:1,consts:[[1,"container"],[1,"first","d-flex","justify-content-center"],[4,"ngFor","ngForOf"],["type","button",1,"btn","btn-primary","ms-2",3,"routerLink"]],template:function(t,o){1&t&&(r.TgZ(0,"div",0)(1,"h1"),r._uU(2,"List User"),r.qZA(),r.TgZ(3,"div",1),r.YNc(4,Fn,5,4,"div",2),r.qZA()()),2&t&&(r.xp6(4),r.Q6J("ngForOf",o.users))},directives:[A.sg,m.rH],styles:["h1[_ngcontent-%COMP%]{color:green;text-align:center}div.first[_ngcontent-%COMP%]{margin-top:40px;text-align:center}button[_ngcontent-%COMP%]{margin-top:10px}"]}),n})();function Nn(n,e){if(1&n&&(r.TgZ(0,"div")(1,"div"),r._uU(2),r.qZA(),r.TgZ(3,"div"),r._uU(4),r.qZA(),r.TgZ(5,"div"),r._uU(6),r.qZA()()),2&n){const t=e.$implicit;r.xp6(2),r.Oqu(t.id),r.xp6(2),r.Oqu(t.title),r.xp6(2),r.Oqu(t.body)}}let Sn=(()=>{class n{constructor(t,o,i){this.apiService=t,this.router=o,this.route=i}ngOnInit(){this.userId=this.route.snapshot.params.usersId,this.apiService.findPost(this.userId).subscribe(t=>{this.posts=t})}list(){this.router.navigate(["list"])}}return n.\u0275fac=function(t){return new(t||n)(r.Y36(at),r.Y36(m.F0),r.Y36(m.gz))},n.\u0275cmp=r.Xpm({type:n,selectors:[["app-posts"]],decls:4,vars:1,consts:[[1,"d-flex","justify-content-center","m-2"],["type","button",1,"btn","btn-secondary",3,"click"],[4,"ngFor","ngForOf"]],template:function(t,o){1&t&&(r.TgZ(0,"div",0)(1,"button",1),r.NdJ("click",function(){return o.list()}),r._uU(2,"Back List"),r.qZA()(),r.YNc(3,Nn,7,3,"div",2)),2&t&&(r.xp6(3),r.Q6J("ngForOf",o.posts))},directives:[A.sg],styles:[""]}),n})();const Gn=function(n){return["/",n,"posts"]},xn=[{path:"",redirectTo:"list"},{path:"list",component:wn},{path:":usersId/users",component:(()=>{class n{constructor(t,o,i){this.apiService=t,this.router=o,this.route=i}ngOnInit(){this.id=this.route.snapshot.params.usersId,this.apiService.find(this.id).subscribe(t=>{this.users=t})}back(){this.router.navigate(["list"])}}return n.\u0275fac=function(t){return new(t||n)(r.Y36(at),r.Y36(m.F0),r.Y36(m.gz))},n.\u0275cmp=r.Xpm({type:n,selectors:[["app-users"]],decls:76,vars:17,consts:[[1,"first","m-2"],["type","button",1,"btn","btn-secondary",3,"click"],["type","button",1,"btn","btn-success","ms-4",3,"routerLink"]],template:function(t,o){1&t&&(r.TgZ(0,"div",0)(1,"button",1),r.NdJ("click",function(){return o.back()}),r._uU(2,"Back"),r.qZA(),r.TgZ(3,"button",2),r._uU(4,"Post"),r.qZA(),r._UZ(5,"br")(6,"br"),r.TgZ(7,"h3"),r._uU(8,"user"),r.qZA(),r.TgZ(9,"div")(10,"div")(11,"b"),r._uU(12," name:"),r.qZA(),r._uU(13),r.qZA(),r.TgZ(14,"div")(15,"b"),r._uU(16," username: "),r.qZA(),r._uU(17),r.qZA(),r.TgZ(18,"div")(19,"b"),r._uU(20," email:"),r.qZA(),r._uU(21),r.qZA(),r.TgZ(22,"div")(23,"b"),r._uU(24," address:"),r.qZA(),r._UZ(25,"br"),r.TgZ(26,"b"),r._uU(27," street:"),r.qZA(),r._uU(28),r.qZA(),r.TgZ(29,"div")(30,"b"),r._uU(31," suite:"),r.qZA(),r._uU(32),r.qZA(),r.TgZ(33,"div")(34,"b"),r._uU(35," city: "),r.qZA(),r._uU(36),r.qZA(),r.TgZ(37,"div")(38,"b"),r._uU(39," zipcode: "),r.qZA(),r._uU(40),r.qZA(),r.TgZ(41,"div")(42,"b"),r._uU(43," geo:"),r.qZA(),r._UZ(44,"br"),r.TgZ(45,"b"),r._uU(46," lat:"),r.qZA(),r._uU(47),r.qZA(),r.TgZ(48,"div")(49,"b"),r._uU(50," lng: "),r.qZA(),r._uU(51),r.qZA(),r.TgZ(52,"div")(53,"b"),r._uU(54," phone:"),r.qZA(),r._uU(55),r.qZA(),r.TgZ(56,"div")(57,"b"),r._uU(58," website:"),r.qZA(),r._uU(59),r.qZA(),r.TgZ(60,"div")(61,"b"),r._uU(62," company: "),r.qZA(),r._UZ(63,"br"),r.TgZ(64,"b"),r._uU(65,"name: "),r.qZA(),r._uU(66),r.qZA(),r.TgZ(67,"div")(68,"b"),r._uU(69," catchPhrase:"),r.qZA(),r._uU(70),r.qZA(),r.TgZ(71,"div")(72,"b"),r._uU(73," bs: "),r.qZA(),r._uU(74),r.qZA()(),r._UZ(75,"br"),r.qZA()),2&t&&(r.xp6(3),r.Q6J("routerLink",r.VKq(15,Gn,o.users.id)),r.xp6(10),r.hij(" ",o.users.name,""),r.xp6(4),r.Oqu(o.users.username),r.xp6(4),r.hij(" ",o.users.email,""),r.xp6(7),r.hij(" ",o.users.address.street,""),r.xp6(4),r.hij(" ",o.users.address.suite,""),r.xp6(4),r.Oqu(o.users.address.city),r.xp6(4),r.Oqu(o.users.address.zipcode),r.xp6(7),r.hij(" ",o.users.address.geo.lat,""),r.xp6(4),r.Oqu(o.users.address.geo.lng),r.xp6(4),r.hij(" ",o.users.phone,""),r.xp6(4),r.hij(" ",o.users.website,""),r.xp6(7),r.Oqu(o.users.company.name),r.xp6(4),r.hij(" ",o.users.company.catchPhrase,""),r.xp6(4),r.Oqu(o.users.company.bs))},directives:[m.rH],styles:[".first[_ngcontent-%COMP%]{text-align:center}p[_ngcontent-%COMP%]{margin:0}"]}),n})()},{path:":usersId/posts",component:Sn}];let Bn=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({imports:[[m.Bz.forChild(xn)],m.Bz]}),n})(),Tn=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({imports:[[A.ez,Mn,Dn,Bn]]}),n})()}}]);