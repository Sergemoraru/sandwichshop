let a=[],v=(e,l)=>{let t=[],i={get(){return i.lc||i.listen(()=>{})(),i.value},l:l||0,lc:0,listen(u,f){return i.lc=t.push(u,f||i.l)/2,()=>{let n=t.indexOf(u);~n&&(t.splice(n,2),--i.lc||i.off())}},notify(u){let f=!a.length;for(let n=0;n<t.length;n+=2)a.push(t[n],t[n+1],i.value,u);if(f){for(let n=0;n<a.length;n+=4){let s;for(let d=n+1;!s&&(d+=4)<a.length;)a[d]<a[n+1]&&(s=a.push(a[n],a[n+1],a[n+2],a[n+3]));s||a[n](a[n+2],a[n+3])}a.length=0}},off(){},set(u){i.value!==u&&(i.value=u,i.notify())},subscribe(u,f){let n=i.listen(u,f);return u(i.value),n},value:e};return i};let T=(e,l,t,i)=>(e.events=e.events||{},e.events[t+10]||(e.events[t+10]=i(u=>{e.events[t].reduceRight((f,n)=>(n(f),f),{shared:{},...u})})),e.events[t]=e.events[t]||[],e.events[t].push(l),()=>{let u=e.events[t],f=u.indexOf(l);u.splice(f,1),u.length||(delete e.events[t],e.events[t+10](),delete e.events[t+10])}),c=1e3,N=(e,l)=>T(e,i=>{let u=l(i);u&&e.events[6].push(u)},5,i=>{let u=e.listen;e.listen=(...n)=>(!e.lc&&!e.active&&(e.active=!0,i()),u(...n));let f=e.off;return e.events[6]=[],e.off=()=>{f(),setTimeout(()=>{if(e.active&&!e.lc){e.active=!1;for(let n of e.events[6])n();e.events[6]=[]}},c)},()=>{e.listen=u,e.off=f}}),U=(e,l)=>{Array.isArray(e)||(e=[e]);let t,i=()=>{let f=e.map(n=>n.get());(t===void 0||f.some((n,s)=>n!==t[s]))&&(t=f,u.set(l(...f)))},u=v(void 0,Math.max(...e.map(f=>f.l))+1);return N(u,()=>{let f=e.map(n=>n.listen(i,u.l));return i(),()=>{for(let n of f)n()}}),u},p=(e={})=>{let l=v(e);return l.setKey=function(t,i){typeof i>"u"?t in l.value&&(l.value={...l.value},delete l.value[t],l.notify(t)):l.value[t]!==i&&(l.value={...l.value,[t]:i},l.notify(t))},l};const r=p({});function O(e){const l=r.get()[e.id],t=l?l.quantity:0;r.setKey(e.id,{item:e,quantity:t+1})}function m(e){r.setKey(e,void 0)}const o=U(r,e=>{let l=0;return Object.values(e).forEach(t=>{if(!t)return l;l+=t.quantity*t.item.price}),l});export{O as a,r as c,m as r,o as s};