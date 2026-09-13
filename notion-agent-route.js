(()=>{'use strict';
const previousFetch=window.fetch.bind(window);
window.fetch=(input,init={})=>{
  let url=typeof input==='string'?input:input?.url||String(input);
  let action='';
  try{if(init.body)action=JSON.parse(init.body).action||''}catch{}
  if(action==='chat'&&url.includes('/functions/v1/chat-runtime')){
    url=url.replace('/functions/v1/chat-runtime','/functions/v1/notion-agent-chat');
    input=url;
  }
  return previousFetch(input,init);
};
})();
