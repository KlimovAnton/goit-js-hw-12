import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const o={startBtn:document.querySelector("button[data-action-start]"),stopBtn:document.querySelector("button[data-action-stop]"),rebootBtn:document.querySelector("button[data-action-reboot"),clockface:document.querySelector(".js-clockface")};class l{constructor({onTick:t}){this.intervalId=null,this.isActive=!1,this.onTick=t,this.init()}init(){const{hours:t,mins:e,secs:s}=this.getTimeComponents(0);this.onTick({hours:t,mins:e,secs:s})}start(){if(this.isActive)return;const t=Date.now();this.isActive=!0,this.intervalId=setInterval(()=>{const s=Date.now()-t,{hours:i,mins:r,secs:a}=this.getTimeComponents(s);this.onTick({hours:i,mins:r,secs:a})},1e3)}stop(){this.isActive=!1,clearInterval(this.intervalId)}reboot(){this.isActive=!1,clearInterval(this.intervalId);const{hours:t,mins:e,secs:s}=this.getTimeComponents(0);this.onTick({hours:t,mins:e,secs:s})}getTimeComponents(t){const e=this.pad(Math.floor(t%864e5/36e5)),s=this.pad(Math.floor(t%(1e3*60*60)/(1e3*60))),i=this.pad(Math.floor(t%(1e3*60)/1e3));return{hours:e,mins:s,secs:i}}pad(t){return String(t).padStart(2,"0")}}const n=new l({onTick:d});function d({hours:c,mins:t,secs:e}){o.clockface.textContent=`${c}:${t}:${e}`}o.startBtn.addEventListener("click",n.start.bind(n));o.stopBtn.addEventListener("click",n.stop.bind(n));o.rebootBtn.addEventListener("click",n.reboot.bind(n));
//# sourceMappingURL=commonHelpers.js.map