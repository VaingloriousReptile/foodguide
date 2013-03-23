(function(){var I,aa,la=30,q=16*la,la=q/16,ba=3*q,n=6*q,p=10*q,u=15*q,A=20*q,ma=40*q,Sa=0.6666*la,g={butter:{name:"Butter",fat:1,dairy:1,health:40,hunger:25,perish:ma,stack:40},butterflywings:{name:"Butterfly Wings",isveggie:!0,decoration:2,health:20,hunger:9.375,perish:n,stack:40},deerclopseyeball:{name:"Deerclops Eyeball",uncookable:!0,health:60,hunger:75,sanity:-15},bird_egg:{name:"Egg",egg:1,health:0,hunger:9.375,sanity:0,perish:p,stack:40,rot:"rottenegg"},bird_egg_cooked:{name:"Cooked Egg",egg:1,
precook:1,health:0,hunger:12.5,sanity:0,perish:n,stack:40},rottenegg:{name:"Rotten Egg",uncookable:!0,health:-1,hunger:-10,stack:40},fish:{name:"Fish",ismeat:!0,meat:0.5,fish:1,health:20,hunger:12.5,perish:ba,stack:40},fish_cooked:{name:"Cooked Fish",ismeat:!0,meat:0.5,fish:1,precook:1,health:40,hunger:12.5,perish:n,stack:40},froglegs:{name:"Frog Legs",ismeat:!0,meat:0.5,health:1,hunger:12.5,perish:n,sanity:-10,stack:40},froglegs_cooked:{name:"Cooked Frog Legs",ismeat:!0,meat:0.5,precook:1,health:3,
hunger:12.5,perish:p,sanity:-10,stack:40},flowerhat:{name:"Garland",health:3,hunger:0,sanity:10,perish:n,stack:1,uncookable:!0},hambat:{name:"Ham Bat",health:-8,hunger:25,sanity:-15,perish:p,stack:1,uncookable:!0},honey:{name:"Honey",sweetener:!0,health:3,hunger:9.375,perish:ma,stack:40},honeycomb:{name:"Honeycomb",sweetener:!0},mandrake:{name:"Mandrake",veggie:1,magic:1,health:60,hunger:75,stack:40},mandrake_cooked:{name:"Cooked Mandrake",uncookable:!0,veggie:1,magic:1,precook:1,health:100,hunger:150,
stack:40},monstermeat:{name:"Monster Meat",ismeat:!0,meat:1,monster:!0,health:-20,hunger:18.75,sanity:-15,perish:n,stack:20,dry:"monstermeat_dried",drytime:q},monstermeat_cooked:{name:"Cooked Monster Meat",ismeat:!0,meat:1,monster:!0,precook:1,health:-3,hunger:18.75,sanity:-10,perish:u,stack:20},monstermeat_dried:{name:"Monster Jerky",ismeat:!0,meat:1,monster:!0,dried:1,health:-3,hunger:18.75,sanity:-5,perish:A,stack:20},meat:{name:"Meat",ismeat:!0,meat:1,health:1,hunger:25,sanity:-10,perish:n,stack:20,
dry:"meat_dried",drytime:2*q},meat_cooked:{name:"Cooked Meat",ismeat:!0,meat:1,precook:1,health:3,hunger:25,sanity:0,perish:p,stack:20},meat_dried:{name:"Jerky",ismeat:!0,meat:1,dried:1,health:20,hunger:25,sanity:15,perish:A,stack:20},morsel:{name:"Morsel",ismeat:!0,meat:0.5,health:0,hunger:12.5,sanity:-10,perish:n,stack:40,drytime:q,dry:"smallmeat_dried"},morsel_cooked:{name:"Cooked Morsel",ismeat:!0,meat:0.5,precook:1,health:1,hunger:12.5,sanity:0,perish:p,stack:40},smallmeat_dried:{name:"Small Jerky",
ismeat:!0,meat:0.5,dried:1,health:8,hunger:12.5,sanity:10,perish:A,stack:40},drumstick:{name:"Drumstick",ismeat:!0,ideal:!0,meat:0.5,health:0,hunger:12.5,sanity:-10,perish:n,stack:20,drytime:q,dry:"smallmeat_dried"},drumstick_cooked:{name:"Fried Drumstick",ismeat:!0,meat:0.5,precook:1,health:1,hunger:12.5,perish:p,stack:20},red_mushroom:{name:"Red Mushroom",veggie:0.5,health:-20,hunger:12.5,sanity:0,perish:p,stack:40,comment:"Bug may prevent using in crock pot"},green_mushroom:{name:"Green Mushroom",
veggie:0.5,health:0,hunger:12.5,sanity:-50,perish:p,stack:40,comment:"Bug may prevent using in crock pot"},blue_mushroom:{name:"Blue Mushroom",veggie:0.5,health:20,hunger:12.5,sanity:-15,perish:p,stack:40,comment:"Bug may prevent using in crock pot"},petals:{name:"Petals",uncookable:!0,health:1,hunger:0,sanity:-2.5,perish:n,stack:40},petals_evil:{name:"Dark Petals",uncookable:!0,health:0,hunger:0,sanity:-5,perish:n,stack:40},seeds:{name:"Seeds",uncookable:!0,health:0,hunger:4.6875,perish:ma,stack:40},
seeds_cooked:{name:"Toasted Seeds",uncookable:!0,health:1,hunger:4.6875,perish:p,stack:40},spoiled_food:{name:"Rot",uncookable:!0,health:-1,hunger:-10,stack:40},tallbirdegg:{name:"Tallbird Egg",egg:4,health:3,hunger:25},tallbirdegg_cooked:{name:"Fried Tallbird Egg",egg:4,precook:1,health:0,hunger:37.5,perish:n},trunk_summer:{name:"Koalefant Trunk",uncookable:!0,ismeat:!0,health:30,hunger:37.5,perish:n,stack:20},trunk_summer_cooked:{name:"Koalefant Trunk Steak",uncookable:!0,ismeat:!0,health:40,hunger:75,
perish:u,stack:20},twigs:{name:"Twigs",inedible:1},carrot:{name:"Carrot",isveggie:!0,veggie:1,health:1,hunger:12.5,perish:p,sanity:0,stack:40},carrot_cooked:{name:"Roasted Carrot",isveggie:!0,veggie:1,precook:1,health:3,hunger:12.5,perish:n,sanity:0,stack:40},corn:{name:"Corn",ideal:!0,isveggie:!0,veggie:1,health:3,hunger:25,perish:p,sanity:0,stack:40},corn_cooked:{name:"Popcorn",isveggie:!0,veggie:1,precook:1,health:3,hunger:12.5,perish:u,sanity:0,stack:40},pumpkin:{name:"Pumpkin",isveggie:!0,veggie:1,
health:3,hunger:37.5,perish:p,sanity:0,stack:20},pumpkin_cooked:{name:"Hot Pumpkin",isveggie:!0,veggie:1,precook:1,health:8,hunger:37.5,perish:n,sanity:0,stack:20},eggplant:{name:"Eggplant",isveggie:!0,veggie:1,health:8,hunger:25,perish:p,sanity:0,stack:20},eggplant_cooked:{name:"Braised Eggplant",isveggie:!0,veggie:1,precook:1,health:20,hunger:25,perish:n,sanity:0,stack:20},durian:{name:"Durian",isfruit:!0,monster:1,fruit:1,health:-3,hunger:25,perish:p,sanity:-5,stack:20},durian_cooked:{name:"Extra Smelly Durian",
isfruit:!0,monster:1,fruit:1,precook:1,health:0,hunger:25,perish:n,sanity:-5,stack:20},pomegranate:{name:"Pomegranate",isfruit:!0,fruit:1,health:3,hunger:9.375,perish:n,sanity:0,stack:40},pomegranate_cooked:{name:"Sliced Pomegranate",isfruit:!0,fruit:1,precook:1,health:20,hunger:12.5,perish:ba,sanity:0,stack:40},dragonfruit:{name:"Dragon Fruit",isfruit:!0,fruit:1,health:3,hunger:9.375,perish:n,sanity:0,stack:40},dragonfruit_cooked:{name:"Prepared Dragon Fruit",isfruit:!0,fruit:1,precook:1,health:20,
hunger:12.5,perish:ba,sanity:0,stack:40},berries:{name:"Berries",isfruit:!0,fruit:0.5,health:0,hunger:9.375,perish:n,sanity:0,stack:40},berries_cooked:{name:"Roasted Berries",isfruit:!0,fruit:0.5,precook:1,health:1,hunger:12.5,perish:ba,sanity:0,stack:40}},Ta=function(){return this.op+this.qty},Ua={"=":function(a){return a===this.qty},">":function(a){return a>this.qty},"<":function(a){return a<this.qty},">=":function(a){return a>=this.qty},"<=":function(a){return a<=this.qty}},na={test:function(a){return!!a},
toString:function(){return""}},t=function(a,b){return{op:a,qty:b,test:Ua[a],toString:Ta}},Va=function(a,b,c){return this.item1.test(a,b,c)||this.item2.test(a,b,c)},Wa=function(){return this.item1+" or "+this.item2},ya=function(a,b){return{item1:a,item2:b,test:Va,toString:Wa,cancel:a.cancel||b.cancel}},Xa=function(a,b,c){return!this.item.test(a,b,c)},Ya=function(){return"not "+this.item},k=function(a){return{item:a,test:Xa,toString:Ya,cancel:!0}},Za=function(a,b){return(b[this.name]||0)+(b[this.name+
"_cooked"]||0)},$a=function(){return"[*"+g[this.name].name+"|"+g[this.name].img+" "+g[this.name].name+"]"+(g[this.name].cook?"[*"+g[this.name].cook.name+"|"+g[this.name].cook.img+"]":"")+(g[this.name].raw?"[*"+g[this.name].raw.name+"|"+g[this.name].raw.img+"]":"")+(this.qty?this.qty:"")},G=function(a,b){return{name:a,qty:b||na,test:Za,toString:$a}},ab=function(a,b){return b[this.name]},bb=function(){return"[*"+g[this.name].name+"|"+g[this.name].img+" "+g[this.name].name+"]"+(this.qty?this.qty:"")},
y=function(a,b){return{name:a,qty:b||na,test:ab,toString:bb}},cb=function(a,b,c){return c[this.tag]},db=function(){return"[tag:"+this.tag+"|"+this.tag+"]"+(this.qty?this.qty:"")},e=function(a,b){return{tag:a,qty:b||na,test:cb,toString:db}},j={butterflymuffin:{name:"Butter Muffin",test:function(a,b,c){return b.butterflywings&&!c.meat&&c.veggie},requires:"Butterfly Wings, veggie",requirements:[G("butterflywings"),k(e("meat")),e("veggie")],priority:1,weight:1,foodtype:"veggie",health:20,hunger:37.5,
perish:u,sanity:5,cooktime:2},frogglebunwich:{name:"Froggle Bunwich",test:function(a,b,c){return(b.froglegs||b.froglegs_cooked)&&c.veggie},requirements:[G("froglegs"),e("veggie")],priority:1,foodtype:"meat",health:20,hunger:37.5,perish:u,sanity:5,cooktime:2},taffy:{name:"Taffy",test:function(a,b,c){return c.sweetener&&3<=c.sweetener&&!c.meat},requirements:[e("sweetener",t(">=",3),k(e("meat")))],priority:10,foodtype:"veggie",health:-3,hunger:25,perish:u,sanity:15,cooktime:2},pumpkincookie:{name:"Pumpkin Cookie",
test:function(a,b,c){return(b.pumpkin||b.pumpkin_cooked)&&c.sweetener&&2<=c.sweetener},requirements:[G("pumpkin"),e("sweetener",t(">=",2))],priority:10,foodtype:"veggie",health:0,hunger:37.5,perish:p,sanity:15,cooktime:2},stuffedeggplant:{name:"Stuffed Eggplant",test:function(a,b,c){return(b.eggplant||b.eggplant_cooked)&&c.veggie&&1<c.veggie},requirements:[G("eggplant"),e("veggie",t(">",1))],priority:1,foodtype:"veggie",health:3,hunger:37.5,perish:u,sanity:5,cooktime:2},fishsticks:{name:"Fishsticks",
test:function(a,b,c){return c.fish&&b.twigs&&c.inedible&&1>=c.inedible},requirements:[e("fish"),y("twigs"),e("inedible"),e("inedible",t("<=",1))],priority:10,foodtype:"meat",health:40,hunger:37.5,perish:p,sanity:5,cooktime:2},honeynuggets:{name:"Honey Nuggets",test:function(a,b,c){return b.honey&&c.meat&&1.5>=c.meat&&!c.inedible},requirements:[y("honey"),e("meat",t("<=",1.5)),k(e("inedible"))],priority:2,foodtype:"meat",health:20,hunger:37.5,perish:u,sanity:5,cooktime:2},honeyham:{name:"Honey Ham",
test:function(a,b,c){return b.honey&&c.meat&&1.5<c.meat&&!c.inedible},requirements:[y("honey"),e("meat",t(">",1.5)),k(e("inedible"))],priority:2,foodtype:"meat",health:30,hunger:75,perish:u,sanity:5,cooktime:2},dragonpie:{name:"Dragonpie",test:function(a,b,c){return(b.dragonfruit||b.dragonfruit_cooked)&&!c.meat},requirements:[G("dragonfruit"),k(e("meat"))],priority:1,foodtype:"veggie",health:40,hunger:75,perish:u,sanity:5,cooktime:2},kabobs:{name:"Kabobs",test:function(a,b,c){return c.meat&&b.twigs&&
(!c.monster||1>=c.monster)&&c.inedible&&1>=c.inedible},requirements:[e("meat"),y("twigs"),ya(k(e("monster")),e("monster",t("<=",1))),e("inedible"),e("inedible",t("<=",1))],priority:5,foodtype:"meat",health:3,hunger:37.5,perish:u,sanity:5,cooktime:2},mandrakesoup:{name:"Mandrake Soup",test:function(a,b){return b.mandrake},requirements:[y("mandrake")],priority:10,foodtype:"veggie",health:100,hunger:150,perish:n,sanity:5,cooktime:3},baconeggs:{name:"Bacon and Eggs",test:function(a,b,c){return c.egg&&
1<c.egg&&c.meat&&1<c.meat&&!c.veggie},requirements:[e("egg",t(">",1)),e("meat",t(">",1)),k(e("veggie"))],priority:10,foodtype:"meat",health:20,hunger:75,perish:A,sanity:5,cooktime:2},meatballs:{name:"Meatballs",test:function(a,b,c){return c.meat&&!c.inedible},requirements:[e("meat"),k(e("inedible"))],priority:-1,foodtype:"meat",health:3,hunger:62.5,perish:p,sanity:5,cooktime:0.75},bonestew:{name:"Meaty Stew",test:function(a,b,c){return c.meat&&3<=c.meat&&!c.inedible},requirements:[e("meat",t(">=",
3)),k(e("inedible"))],priority:0,foodtype:"meat",health:12,hunger:150,perish:p,sanity:5,cooktime:0.75},perogies:{name:"Pierogi",test:function(a,b,c){return c.egg&&c.meat&&c.veggie&&!c.inedible},requirements:[e("egg"),e("meat"),e("veggie"),k(e("inedible"))],priority:5,foodtype:"meat",health:40,hunger:37.5,perish:A,sanity:5,cooktime:1},turkeydinner:{name:"Turkey Dinner",test:function(a,b,c){return b.drumstick&&1<b.drumstick&&c.meat&&1<c.meat&&(c.veggie||c.fruit)},requirements:[y("drumstick",t(">",1)),
e("meat",t(">",1)),ya(e("veggie"),e("fruit"))],priority:10,foodtype:"meat",health:20,hunger:75,perish:n,sanity:5,cooktime:3},ratatouille:{name:"Ratatouille",test:function(a,b,c){return!c.meat&&c.veggie&&!c.inedible},requirements:[k(e("meat")),e("veggie"),k(e("inedible"))],priority:0,foodtype:"veggie",health:3,hunger:25,perish:u,sanity:5,cooktime:1},jammypreserves:{name:"Fist Full of Jam",test:function(a,b,c){return c.fruit&&!c.meat&&!c.veggie&&!c.inedible},requirements:[e("fruit"),k(e("meat")),k(e("veggie")),
k(e("inedible"))],priority:0,foodtype:"veggie",health:3,hunger:37.5,perish:u,sanity:5,cooktime:0.5},fruitmedley:{name:"Fruit Medley",test:function(a,b,c){return c.fruit&&3<=c.fruit&&!c.meat&&!c.veggie},requirements:[e("fruit",t(">=",3)),k(e("meat")),k(e("veggie"))],priority:0,foodtype:"veggie",health:20,hunger:25,perish:n,sanity:5,cooktime:0.5},fishtacos:{name:"Fish Tacos",test:function(a,b,c){return c.fish&&(b.corn||b.corn_cooked)},requirements:[e("fish"),G("corn")],priority:10,foodtype:"meat",health:20,
hunger:37.5,perish:n,sanity:5,cooktime:0.5},waffles:{name:"Waffles",test:function(a,b,c){return b.butter&&(b.berries||b.berries_cooked)&&c.egg},requirements:[y("butter"),G("berries"),e("egg")],priority:10,foodtype:"veggie",health:60,hunger:37.5,perish:n,sanity:5,cooktime:0.5},monsterlasagna:{name:"Monster Lasagna",test:function(a,b,c){return c.monster&&2<=c.monster&&!c.inedible},requirements:[e("monster",t(">=",2)),k(e("inedible"))],priority:10,foodtype:"meat",health:-20,hunger:37.5,perish:n,sanity:-20,
cooktime:0.5},wetgoop:{name:"Wet Goop",test:function(){return!0},requirements:[],trash:!0,priority:-2,health:0,hunger:0,perish:n,sanity:0,cooktime:0.25}},L,m,za,eb=/^tag[: ]/,fb=/^tag:? */,J,gb=/^recipe[: ]/,hb=/^recipe:? */,oa,ib=/^ingredient[: ]/,jb=/^ingredient:? */,Aa,Ba,Ca=!1,kb=function(a){a.match=!Ca&&a.uncookable?0:0===a.lowerName.indexOf(m)||a.raw&&0===a.raw.lowerName.indexOf(m)?3:0===Ba.test(a.lowerName)?2:Aa.test(a.lowerName)?1:0;return a.match},lb=function(a){return a.match=a[za]+0||0},
mb=function(a){for(var b=0,c,r=!0;b<J.length;){c=J[b].test(null,a.nameObject,a);if(J[b].cancel){if(!c){r=!0;break}}else c&&(r=!1);b++}return a.match=r?0:1},nb=function(a){for(var b=0,c,r=!0;b<a.requirements.length;){c=a.requirements[b].test(null,oa.nameObject,oa);if(a.requirements[b].cancel){if(!c){r=!0;break}}else c&&(r=!1);b++}return a.match=r?0:1},ob=function(a){return a.match=a.lowerName===m?1:0},pb=function(a){return a.match=a.lowerName===m||a.raw&&a.raw.lowerName===m||a.cook&&a.cook.lowerName===
m?1:0},H=function(a,b){var c,r;return a.match===b.match?(c=a.raw?a.raw.name:a.name,r=b.raw?b.raw.name:b.name,c!==r?c>r?1:c<r?-1:0:a.name===b.name?0:a.raw===b?1:-1):b.match-a.match};L=function(a,b,c){Ca=!!c;m=b.toLowerCase();if(eb.test(m))return za=m.split(fb)[1],a.filter(lb).sort(H);if(gb.test(m))return(J=j.byName(m.split(hb)[1].toLowerCase()))?(J=J.requirements,a.filter(mb).sort(H)):[];if(ib.test(m))return(oa=g.byName(m.split(jb)[1].toLowerCase()))?a.filter(nb).sort(H):[];if(0===m.indexOf("*"))return m=
m.substring(1),a.filter(ob).sort(H);if(0===m.indexOf("~"))return m=m.substring(1),a.filter(pb).sort(H);Ba=RegExp("\\b"+m+".*");Aa=RegExp("\\b"+m.split("").join(".*")+".*");return a.filter(kb).sort(H)};var pa=function(a,b,c){var r,d,e;for(r=0;r<a.length;r++)if(e=a[r],null!==e)for(d in b[e.id]=1+(b[e.id]||0),e)e.hasOwnProperty(d)&&"perish"!==d?c[d]=e[d]+(c[d]||0):"perish"===d&&(c[d]=Math.min(c[d]||A,e[d]))},qa,ra,V;qa=function(a,b,c,r){var d,e;a.length=0;ra={};V={};pa(b,ra,V);for(b=0;b<j.length;b++){e=
!1;for(d=0;d<j[b].requirements.length;d++)if(j[b].requirements[d].test(null,ra,V))j[b].requirements[d].cancel||(e=!0);else if(!r&&j[b].requirements[d].cancel){e=!1;break}else if(r&&!j[b].requirements[d].cancel){e=!1;break}e&&(!c||-1===c.indexOf(j[b]))&&a.push(j[b])}V.img="";V.name="Combined";return a};var Da,W=[],sa,M;Da=function(a){W.length=0;sa={};M={};pa(a,sa,M);for(a=0;a<j.length;a++)j[a].test(null,sa,M)&&W.push(j[a]);W.sort(function(a,c){return c.priority-a.priority});M.img="";M.name="Combined";
W.unshift(M);return W};var N=document.createElement("canvas"),ta=N.getContext&&N.toDataURL&&N.getContext("2d"),X=document.createElement("canvas"),Ea=X.getContext&&X.getContext("2d"),R={},ua={},Fa=!!ta,ca=[],qb=function(a){return function(b){b=b.target;ta.clearRect(0,0,64,64);ta.drawImage(b,0,0,64,64);Ea.clearRect(0,0,32,32);Ea.drawImage(b,0,0,32,32);try{R[a]=N.toDataURL(),ua[a]=X.toDataURL()}catch(c){Fa=!1}ca.filter(function(b){return b.url===a}).forEach(function(b){b.url===a&&(delete b.img.dataset.pending,
da&&b.img.removeAttribute("data-pending"),b.img.src=32===b.d?ua[a]||a:R[a]||a)});ca=ca.filter(function(b){return b.url!==a})}},Ga=function(a,b,c){a.dataset.pending=b;da&&a.setAttribute("data-pending",b);ca.push({url:b,img:a,d:c})},O=function(a,b){var c=new Image,d;Fa?R[a]?c.src=32===b?ua[a]:R[a]:(null!==R[a]&&(R[a]=null,d=new Image,d.addEventListener("load",qb(a),!1),d.src=a),Ga(c,a,b)):c.src=a;return c};N.width=64;N.height=64;X.width=32;X.height=32;O.queue=Ga;var ea,rb=/\[([^\|]*)\|([^\|]*)\]/;ea=
function(a){var b=a&&a.split(rb),c,d;if(!b||1===b.length)return a;a=document.createDocumentFragment();a.appendChild(document.createTextNode(b[0]));for(c=1;c<b.length;c+=3)""===b[c]&&""===b[c+1]?a.appendChild(document.createElement("br")):(d=document.createElement("span"),d.className="link",d.dataset.link=b[c],da&&d.setAttribute("data-link",b[c]),b[c+1]&&0===b[c+1].indexOf("img/")?(d.appendChild(document.createTextNode(b[c+1].split(" ").slice(1).join(" "))),d.appendChild(O(b[c+1].split(" ")[0],32))):
d.appendChild(document.createTextNode(b[c+1]?b[c+1]:b[c])),a.appendChild(d)),a.appendChild(document.createTextNode(b[c+2]));return a};var h,Y=0,Ha=document.getElementById("main"),sb=document.getElementById("food"),tb=document.getElementById("recipes"),ub=document.getElementById("navbar"),da=!1;document.documentElement.dataset||(da=!0,Object.defineProperty(Element.prototype,"dataset",{get:function(){this.ds||(this.ds={},Array.prototype.forEach.call(this.attributes,function(a){0===a.name.indexOf("data-")&&
(this.ds[a.name.substring(5)]=a.value)},this));return this.ds}}));document.getElementById("stalehealth").appendChild(document.createTextNode(Math.round(333)/10+"%"));document.getElementById("stalehunger").appendChild(document.createTextNode(Math.round(667)/10+"%"));document.getElementById("spoiledhunger").appendChild(document.createTextNode(Math.round(500)/10+"%"));document.getElementById("spoiledsanity").appendChild(document.createTextNode(10));document.getElementById("perishground").appendChild(document.createTextNode(Math.round(1500)/
10+"%"));document.getElementById("perishwinter").appendChild(document.createTextNode(Math.round(750)/10+"%"));document.getElementById("perishfridge").appendChild(document.createTextNode(Math.round(500)/10+"%"));var l,v=function(a,b){return"[tag:"+a+"|"+(b||a)+"]"};for(h in g)if(g.hasOwnProperty(h)){var d=g[h];d.match=0;d.lowerName=d.name.toLowerCase();d.id=h;d.nameObject={};d.nameObject[h]=1;d.img="img/"+d.name.replace(/ /g,"_").toLowerCase()+".png";-1!==h.indexOf("_cooked")&&(d.cooked=!0);g[h+"_cooked"]&&
(d.cook=g[h+"_cooked"],g[h+"_cooked"].raw=d);d.info=[];l=d.info;d.fruit&&l.push(v("fruit")+(1===d.fruit?"":"\u00d7"+d.fruit));d.veggie&&l.push(v("veggie","vegetable")+(1===d.veggie?"":"\u00d7"+d.veggie));d.meat&&l.push(v("meat")+(1===d.meat?"":"\u00d7"+d.meat));d.egg&&l.push(v("egg")+(1===d.egg?"":"\u00d7"+d.egg));d.fish&&l.push(v("fish"));d.magic&&l.push(v("magic"));d.decoration&&l.push(v("decoration"));d.inedible&&l.push(v("inedible"));d.monster&&l.push(v("monster","monster food"));d.sweetener&&
l.push(v("sweetener"));d.fat&&l.push(v("fat"));d.dairy&&l.push(v("dairy"));d.comment&&l.push(d.comment);g[Y++]=d}g.length=Y;Y=0;for(h in j)j.hasOwnProperty(h)&&(j[h].match=0,j[h].name=j[h].name||h,j[h].id=h,j[h].lowerName=j[h].name.toLowerCase(),j[h].weight=j[h].weight||1,j[h].priority=j[h].priority||0,j[h].img="img/"+j[h].name.replace(/ /g,"_").toLowerCase()+".png",j[h].requirements&&(j[h].requires=ea(j[h].requirements.join("; "))),j[Y++]=j[h]);j.length=Y;j.forEach=Array.prototype.forEach;j.filter=
Array.prototype.filter;j.sort=Array.prototype.sort;j.byName=function(a){for(var b=this.length;b--;)if(this[b].lowerName===a)return this[b]};var vb=function(a,b){return a+"[recipe:"+b.name+"|"+b.img+"]"};for(h in g)g.hasOwnProperty(h)&&(isNaN(h)&&isNaN(g[h]))&&(d=g[h],l=d.info,d.cooked&&l.push("from [*"+d.raw.name+"|"+d.raw.img+"]"),d.cook&&l.push("cook: [*"+d.cook.name+"|"+d.cook.img+"]"),d.dry&&(d.dry instanceof Object||(d.dry=g[d.dry]),l.push("dry: [*"+d.dry.name+"|"+d.dry.img+"]")),d.info=l.join("; "),
d.uncookable?d.info+="[|]cannot be added to crock pot":(d.recipes=[],j.forEach(function(a){for(var b=!1,c=a.requirements,e=c.length;e--;)if(c[e].test(null,d.nameObject,d))!c[e].cancel&&!b&&(b=!0);else if(c[e].cancel){b=!1;break}b&&d.recipes.push(a)}),0<d.recipes.length&&(d.ingredient=!0,d.info+=d.recipes.reduce(vb,"[|][ingredient:"+d.name+"|Recipes] "))),d.info=ea(d.info));g.forEach=Array.prototype.forEach;g.filter=Array.prototype.filter;g.sort=Array.prototype.forEach;g.byName=function(a){for(var b=
this.length;b--;)if(this[b].lowerName===a)return this[b]};var fa="id health hunger fruit veggie meat egg fish magic decoration inedible monster sweetener fat dairy".split(" ");aa=I=void 0;g.filter(function(a){return!a.uncookable&&!a.skip&&(a.ideal||!a.cook&&(!a.raw||!a.raw.ideal))}).map(function(a){for(var b={},c=fa.length;c--;)a.hasOwnProperty(fa[c])&&(b[fa[c]]=a[fa[c]]);return b});I=j.filter(function(a){return!a.trash}).sort(function(a,b){return b.priority-a.priority});aa=I.map(function(a){return a.test});
I.map(function(a){return a.test.toString()});I.map(function(a){return a.priority});var ga,Ia=ub.getElementsByTagName("li"),Z={},$={},B,S,z,wb=function(a){ga(a.target.dataset.tab)},C;ga=function(a){z.className="";z=Z[a];S.style.display="none";S=$[a];z.className="selected";S.style.display="block"};for(h=0;h<Ia.length;h++)C=Ia[h],C.dataset.tab&&(Z[C.dataset.tab]=C,$[C.dataset.tab]=document.getElementById(C.dataset.tab),$[C.dataset.tab].style.display="none",C.addEventListener("selectstart",function(a){a.preventDefault()},
!1),C.addEventListener("click",wb,!1));z=Z.simulator;S=$.simulator;window.localStorage&&localStorage.foodGuideState&&("["===localStorage.foodGuideState[0]?(B={},B.pickers=JSON.parse(localStorage.foodGuideState),localStorage.foodGuideState=JSON.stringify(B)):B=JSON.parse(localStorage.foodGuideState),B.activeTab&&Z[B.activeTab]&&(z=Z[B.activeTab],S=$[B.activeTab]));z.className="selected";S.style.display="block";window.addEventListener("beforeunload",function(){var a;window.localStorage&&(localStorage.foodGuideState||
(localStorage.foodGuideState="{}"),a=JSON.parse(localStorage.foodGuideState),a.activeTab=z.dataset.tab,localStorage.foodGuideState=JSON.stringify(a))});var xb=function(a){a.dataset.pending&&O.queue(a,a.dataset.pending,32)},va=function(a){var b,c,d,e=document.createElement("tr"),g;for(b=1;b<arguments.length;b++)c=document.createElement(a),g=(d=arguments[b])&&d.indexOf?d:d.toString(),d instanceof DocumentFragment?(c.appendChild(d.cloneNode(!0)),Array.prototype.forEach.call(c.getElementsByTagName("img"),
xb)):0===g.indexOf("img/")?(d=O(g),c.appendChild(d)):c.appendChild(document.createTextNode(g)),e.appendChild(c);return e},Q=function(a,b,c,d,e,g,j,h,n,m){var w,D,p,l=!1,f,s,k,t=function(a){var b;if((!m||k<m)&&(!h||h(a)))b=c(a),j&&j(a)&&(b.className="highlighted",f||(f=b),s=b),w.appendChild(b),k++},q=function(c,d,j){var r,h;if(d||c&&""!==c.target.dataset.sort||p){r=d||c&&c.target.dataset.sort||p;e&&(h=b.shift());"name"===r?b.sort(function(a,b){var c=a.raw?a.raw.name:a.name,d=b.raw?b.raw.name:b.name;
return c!==d?c>d?1:c<d?-1:0:a.name===b.name?0:a.raw===b?1:-1}):b.sort(function(a,b){var c=a[r],d=b[r];return!isNaN(c)&&!isNaN(d)?d-c:isNaN(c)&&isNaN(d)?0:isNaN(c)?1:-1});if(d||c)p===r?l=!l:(p=r,l=!1);l&&b.reverse();e&&b.unshift(h)}c=document.createElement("tr");for(D in a)d=document.createElement("th"),d.appendChild(document.createTextNode(D)),a[D]&&(a[D]===p&&(d.style.background=l?"#555":"#ccc",d.style.color=l?"#ccc":"#555",d.style.borderRadius="4px"),d.style.cursor="pointer",d.dataset.sort=a[D],
d.addEventListener("click",q,!1)),c.appendChild(d);d=w;w=document.createElement("table");w.appendChild(c);s=f=null;k=0;b.forEach(t);g&&(w.className="links",Array.prototype.forEach.call(w.getElementsByClassName("link"),function(a){a.addEventListener("click",g,!1)}));d&&d.parentNode.replaceChild(w,d);j&&(f&&f.offsetTop+w.offsetTop+Ha.offsetTop+f.offsetHeight>window.scrollY+window.innerHeight?f.scrollIntoView(!0):s&&s.offsetTop+w.offsetTop+Ha.offsetTop<window.scrollY&&s.scrollIntoView(!1))};d?q(null,
d):q();w.update=function(a){q(null,null,a)};w.setMaxRows=function(a){m=a;this.update()};return w},x=function(a){return isNaN(a)?"":0<a?"+"+a:a},Ja=function(a,b){return a<b?(b-a)/Math.abs(a):a>b?-(a-b)/Math.abs(a):0},Ka=function(a,b){return!isNaN(a)&&a!==b?" ("+x((100*(a<b?(b-a)/Math.abs(a):a>b?-(a-b)/Math.abs(a):0)).toFixed(0))+"%)":""},La=function(a){return va("td",a.img?a.img:"",a.name,x(a.health),x(a.hunger),isNaN(a.sanity)?"":x(a.sanity),isNaN(a.perish)?"Never":a.perish/q+" days",a.info||"")},
ha=function(a,b,c){return va("td",a.img?a.img:"",a.name,x(a.health)+Ka(b,a.health),x(a.hunger)+Ka(c,a.hunger),isNaN(a.sanity)?"":x(a.sanity),isNaN(a.perish)?"Never":a.perish/q+" days",(a.cooktime*Sa+0.5|0)+" secs",a.priority||"0",a.requires||"")},ia,ja=[],Ma=[],wa=Q({"":"",Name:"name",Health:"health",Hunger:"hunger",Sanity:"sanity",Perish:"perish",Info:""},Array.prototype.slice.call(g),La,"name",!1,function(a){a=!a.target?a:"IMG"===a.target.tagName?a.target.parentNode.dataset.link:a.target.dataset.link;
"recipe:"===a.substring(0,7)||"ingredient:"===a.substring(0,11)?(ga("crockpot"),"recipe:"===a.substring(0,7)&&(a="*"+a.substring(7)),Ma=L(j,a),Na.update(!0)):(ia!==a?(ia=a,ja=L(g,a)):(ia="",ja.length=0),wa.update(!0))},function(a){return-1!==ja.indexOf(a)}),Na=Q({"":"",Name:"name",Health:"health",Hunger:"hunger",Sanity:"sanity",Perish:"perish","Cook Time":"cooktime",Priority:"priority",Requires:""},Array.prototype.slice.call(j),ha,"name",!1,function(a){a=!a.target?a:"IMG"===a.target.tagName?a.target.parentNode.dataset.link:
a.target.dataset.link;ga("foodlist");ia=a;ja=L(g,a);wa.update(!0)},function(a){return-1!==Ma.indexOf(a)});sb.appendChild(wa);tb.appendChild(Na);var yb=function(a,b){return a+"[ingredient:"+g[b.id].name+"|"+g[b.id].img+"]"},Qa=function(a){var b=document.createElement("button");b.appendChild(document.createTextNode("Calculate efficient recipes (may take some time)"));b.className="makablebutton";b.addEventListener("click",function(){var c=[],d=a?a.length:null,e,h,n=[],l,p,m,w,D=[],k=[],q,f,s,t=function(a){return-1!==
k.indexOf(a.id)},u=function(a){return-1!==this.indexOf(g[a])},v=function(a){-1!==k.indexOf(a.target.dataset.id)&&k.splice(k.indexOf(a.target.dataset.id),1);-1!==D.indexOf(a.target.dataset.id)?(D.splice(D.indexOf(a.target.dataset.id),1),a.target.className=""):(D.push(a.target.dataset.id),a.target.className="selected");s.update()},C=function(a){-1!==D.indexOf(a.target.dataset.id)&&D.splice(D.indexOf(a.target.dataset.id),1);-1!==k.indexOf(a.target.dataset.id)?(k.splice(k.indexOf(a.target.dataset.id),
1),a.target.className=""):(k.push(a.target.dataset.id),a.target.className="excluded");s.update();a.preventDefault()},L=function(a){h&&(h.className="");e===a.target.dataset.recipe?e=h=null:(e=a.target.dataset.recipe,h=a.target,a.target.className="selected");s.update()};null===d&&(d=g.length,a=g);for(;d--;)a[d].cook&&(-1===c.indexOf(a[d].cook)&&!a[d].cook.uncookable)&&c.push(a[d].cook),!a[d].uncookable&&((a[d].ideal||!a[d].cook||a[d].cook.uncookable)&&-1===c.indexOf(a[d]))&&c.push(a[d]);q=[];s=Q({"":"",
Name:"name",Health:"health","Health+":"healthpls",Hunger:"hunger","Hunger+":"hungerpls",Ingredients:""},q,function(a){var b=a.recipe;return va("td",b.img?b.img:"",b.name,x(b.health),x(a.healthpls)+" ("+x(100*a.healthpct|0)+"%)",x(b.hunger),x(a.hungerpls)+" ("+x(100*a.hungerpct|0)+"%)",ea(a.ingredients.reduce(yb,"")))},"hungerpls",!1,null,null,function(a){return(!e||a.recipe.name===e)&&(!k.length||!a.ingredients.some(t))&&(!D.length||D.every(u,a.ingredients))},0,15);f=document.createElement("div");
p=document.createElement("div");p.appendChild(document.createTextNode("Computing combinations.."));f.appendChild(p);l=document.createElement("div");l.className="recipeFilter";f.appendChild(l);m=document.createElement("div");m.className="foodFilter";c.forEach(function(a){var b=O(a.img,32);b.dataset.id=a.id;b.addEventListener("click",v,!1);b.addEventListener("contextmenu",C,!1);m.appendChild(b)});f.appendChild(m);d=document.createElement("div");w=document.createElement("input");w.type="text";w.placeholder=
"use custom filter";w.className="customFilterInput";d.appendChild(w);f.appendChild(s);b.parentNode.replaceChild(f,b);var B=function(){p.firstChild.textContent="Found "+q.length+" valid recipes.."},K=function(){s.setMaxRows(30);p.firstChild.textContent="Found "+q.length+" valid recipes. Showing top 30 for selected recipe using all selected ingredients. Right-click to exclude ingredients."},G=aa.length,y=[],z=0,A,P=3,J=function(a){return c[a]},H,E=c.length,F=[0,0,0,0],T,ka=0,Oa=0;H=function(a){for(var b;a--&&
1<E&&2E5>Oa;){b=F.map(J);var c=void 0,d=null,e={},f={};pa(b,e,f);for(c=0;c<G&&(null===d||I[c].priority>=d);c++)aa[c](null,e,f)&&(y.push({recipe:I[c],ingredients:b,tags:{health:f.health,hunger:f.hunger}}),d=I[c].priority);F[0]++;for(b=0;F[b]>=E;)b++,F[b]++;T=4;for(ka=0;T--;)F[T]>=E?F[T]=ka:F[T]>ka&&(ka=F[T]);if(4===b)return!1;Oa++}return!0};var Pa=function(){var a=!1,b=Date.now();for(H(P)?setTimeout(Pa,3):a=!0;z<y.length&&y[z];z++){var c=y[z],d=void 0,F=void 0;if(-1===n.indexOf(c.recipe.name)){for(d=
0;d<n.length&&!(c.recipe.name<n[d]);d++);n.splice(d,0,c.recipe.name);F=O(j.byName(n[d].toLowerCase()).img);F.dataset.recipe=n[d];F.addEventListener("click",L,!1);d<l.childNodes.length?l.insertBefore(F,l.childNodes[d]):l.appendChild(F)}c.name||(c.name=c.recipe.name,c.health=c.recipe.health,c.ihealth=c.tags.health,c.healthpls=c.recipe.health-c.tags.health,c.hunger=c.recipe.hunger,c.ihunger=c.tags.hunger,c.hungerpls=c.recipe.hunger-c.tags.hunger,c.healthpct=Ja(c.tags.health,c.recipe.health),c.hungerpct=
Ja(c.tags.hunger,c.recipe.hunger),c.sanity=c.recipe.sanity,c.perish=c.recipe.perish);q.push(c)}A!==Date.now()-b&&(A=Date.now()-b+1,P=38/A*P+1|0);B&&B();a&&K&&K()};Pa()},!1);return b};document.getElementById("statistics").appendChild(Qa());window.food=g;window.recipes=j;window.matchingNames=L;for(var U=function(a,b){var c=!1;null!==b?a.dataset.id=b.id:a.nextSibling&&null!==K(a.nextSibling)?(U(a,K(a.nextSibling)),U(a.nextSibling,null),c=!0):a.dataset.id=null;c||(null!==b?a.firstChild?a.replaceChild(O(b.img),
a.firstChild):a.appendChild(O(b.img)):a.firstChild&&a.removeChild(a.firstChild),a.title=b?b.name:"")},K=function(a){return g[a.dataset.id]||j[a.dataset.id]||null},Ra=document.getElementsByClassName("ingredientpicker"),xa=Ra.length;xa--;)(function(){var a=document.createElement("div"),b=document.createElement("ul"),c=Ra[xa],d=xa,e,h="recipes"===c.dataset.type?j:g,n=!c.dataset.cookable,l=c.nextSibling,k=l.getElementsByClassName("ingredient"),p,m=[],q,t=[],u=[],f=null,s=document.getElementById("results"),
v=document.getElementById("discoverfood"),x=document.getElementById("discover"),y=document.getElementById("makable"),z=document.createElement("span"),B=function(a,b){for(var c=a;c.previousSibling;)if(c=c.previousSibling,b(c))return c;return null},C=function(a,b){for(var c=a;c.nextSibling;)if(c=c.nextSibling,b(c))return c;return null},A=!1,G=function(a){var b=g[a]||j[a]||null;if(p){for(a=0;a<k.length;a++)if(null===K(k[a]))return U(k[a],b),q(),a;return-1}-1===k.indexOf(a)&&(k.push(a),a=document.createElement("span"),
a.className="ingredient",U(a,b),a.addEventListener("click",P,!1),l.appendChild(a),q());return 1},H=function(a){-1!==G(("IMG"===a.target.tagName?a.target.parentNode:a.target).dataset.id)&&a&&a.preventDefault&&a.preventDefault()},I=function(a){var b=O(a.img,32),c=document.createElement("span");c.appendChild(b);c.appendChild(document.createTextNode(a.name));c.dataset.id=a.id;-1!==m.indexOf(a)&&(c.style.opacity=0.5);c.addEventListener("mousedown",H,!1);this.appendChild(c);this.dataset.length++},J=function(a){-1!==
m.indexOf(g[a.dataset.id])?a.style.opacity||(a.style.opacity=0.5):a.style.opacity&&a.style.removeProperty("opacity")},P=function(a){var b="IMG"===a.target.tagName?a.target.parentNode:a.target;if(p){if(null!==K(b))return U(b,null),q(),b.dataset.id}else return a=k.indexOf(b.dataset.id),k.splice(a,1),l.removeChild(b),q(),k[a]||null},M=function(){var d=L(h,c.value,n);a.removeChild(b);b=document.createElement("div");b.dataset.length=0;d.forEach(I,b);a.appendChild(b);f=null},N=function(a){a="IMG"===a.target.tagName?
a.target.parentNode.dataset.link:a.target.dataset.link;var b=L(h,a,n);1===b.length?G(b[0].id):(c.value=a,M())},E;"ingredients"===l.id?q=function(){var a,c,d,e;m=Array.prototype.map.call(k,function(a){return K(a)});a=Da(m);c=a[0].health;d=a[0].hunger;e=Q({"":"",Name:"name",Health:"health",Hunger:"hunger",Sanity:"sanity",Perish:"perish","Cook Time":"cooktime",Priority:"priority",Requires:""},a,function(a){return ha(a,c,d)},"priority",!0,N);s.firstChild&&s.removeChild(s.firstChild);s.firstChild&&(s.removeChild(s.firstChild),
s.removeChild(s.firstChild));s.appendChild(e);null!==m[0]&&(qa(t,m,a),0<t.length&&(s.appendChild(document.createTextNode("Add more ingredients to make:")),e=Q({"":"",Name:"name",Health:"health",Hunger:"hunger",Sanity:"sanity",Perish:"perish","Cook Time":"cooktime",Priority:"priority",Requires:""},t,function(a){return ha(a,c,d)},"priority",!1,N),s.appendChild(e)));b&&b.firstChild&&Array.prototype.forEach.call(b.getElementsByTagName("span"),J)}:"inventory"===l.id&&(q=function(){var a;m=Array.prototype.map.call(l.getElementsByClassName("ingredient"),
function(a){return K(a)});v.firstChild&&v.removeChild(v.firstChild);x.firstChild&&x.removeChild(x.firstChild);y.firstChild&&y.removeChild(y.firstChild);0<m.length&&(a=Q({"":"",Name:"name",Health:"health",Hunger:"hunger",Sanity:"sanity",Perish:"perish",Info:""},m,La,"name"),v.appendChild(a),qa(u,m,null,!0),0<u.length&&(a=Q({"":"",Name:"name",Health:"health",Hunger:"hunger",Sanity:"sanity",Perish:"perish","Cook Time":"cooktime",Priority:"priority",Requires:""},u,ha,"name"),x.appendChild(a),y.appendChild(Qa(m))));
b&&b.firstChild&&Array.prototype.forEach.call(b.getElementsByTagName("span"),J)});0!==k.length?(p=!0,Array.prototype.forEach.call(k,function(a){U(a,null);a.addEventListener("click",P,!1)})):(k=[],p=!1);window.localStorage&&localStorage.foodGuideState&&(e=JSON.parse(localStorage.foodGuideState).pickers)&&e[d]&&e[d].forEach(function(a){g[a]&&G(a)});a.className="ingredientdropdown";a.appendChild(b);a.addEventListener("mousedown",function(a){a.preventDefault()},!1);e=L(h,c.value,n);a.removeChild(b);b=
document.createElement("div");b.dataset.length=0;e.forEach(I,b);a.appendChild(b);z.className="clearingredients";z.appendChild(document.createTextNode("clear"));z.addEventListener("click",function(){if(""===c.value)for(;K(l.firstChild);)P({target:l.firstChild});else c.value="",M()},!1);l.parentNode.insertBefore(z,l);l.parentNode.insertBefore(a,l);c.addEventListener("keydown",function(a){var c;-1!==[16,17,37,38,39,40,13].indexOf(a.keyCode)&&(c=f,13===a.keyCode?(null===f&&(f=b.firstChild||null),null!==
f&&H({target:f})):null===f?40===a.keyCode&&(f=b.childNodes[1]||b.firstChild||null,null!==f&&(E=f.offsetLeft+f.offsetWidth/2,a.preventDefault())):(a.preventDefault(),37===a.keyCode?(f=f.previousSibling&&f.previousSibling.offsetTop===f.offsetTop?f.previousSibling:(a=C(f,function(a){return a.offsetTop!==f.offsetTop}))?a.previousSibling:b.lastChild,null!==f&&(E=f.offsetLeft+f.offsetWidth/2)):39===a.keyCode?(f=f.nextSibling&&f.nextSibling.offsetTop===f.offsetTop?f.nextSibling:(a=B(f,function(a){return a.offsetTop!==
f.offsetTop}))?a.nextSibling:b.firstChild,null!==f&&(E=f.offsetLeft+f.offsetWidth/2)):38===a.keyCode?((a=B(f,function(a){return E>=a.offsetLeft-1&&E<=a.offsetLeft+a.offsetWidth+1}))||(a=B(b.lastChild,function(a){return E>=a.offsetLeft-1&&E<=a.offsetLeft+a.offsetWidth+1})),f=a?a:b.firstChild):40===a.keyCode&&((a=C(f,function(a){return E>=a.offsetLeft-1&&E<=a.offsetLeft+a.offsetWidth+1}))||(a=C(b.firstChild,function(a){return E>=a.offsetLeft-1&&E<=a.offsetLeft+a.offsetWidth+1})),f=a?a:b.lastChild)),
f!==c&&(null!==c&&(c.className=""),null!==f&&(f.className="selected")))},!1);c.addEventListener("keyup",function(a){-1===[16,17,37,38,39,40,13].indexOf(a.keyCode)?M():null!==f&&a.preventDefault()},!1);c.addEventListener("focus",function(){A||(A=!0)},!1);c.addEventListener("blur",function(){A&&(A=!1)},!1);q();window.addEventListener("beforeunload",function(){var a,b;window.localStorage&&(localStorage.foodGuideState||(localStorage.foodGuideState="{}"),a=JSON.parse(localStorage.foodGuideState),a.pickers||
(a.pickers=[]),p?(b=[],b=Array.prototype.map.call(k,function(a){return(a=K(a))?a.id:null}),a.pickers[d]=b):a.pickers[d]=k,localStorage.foodGuideState=JSON.stringify(a))})})()})();