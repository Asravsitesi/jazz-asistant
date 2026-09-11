(()=>{'use strict';
const SETTINGS='jazz_settings_v3';
const $=s=>document.querySelector(s);
function saveHandsFreeOff(){try{const v=JSON.parse(localStorage.getItem(SETTINGS)||'{}');v.handsFree=false;v.autoListen=false;localStorage.setItem(SETTINGS,JSON.stringify(v))}catch{}}
function stopMedia(){try{window.speechSynthesis?.cancel?.()}catch{}document.querySelectorAll('audio,video').forEach(x=>{try{x.pause();x.currentTime=0}catch{}})}
function closeConversation(){
  saveHandsFreeOff();
  const stop=$('#stopBtn'),mic=$('#micBtn'),hands=$('#handsFreeBtn');
  if(stop&&!stop.classList.contains('hidden'))stop.click();
  if(mic?.classList.contains('listening'))mic.click();
  if(hands?.classList.contains('active'))hands.click();
  stopMedia();
  if(document.querySelector('.message'))$('#newChatBtn')?.click();
  $('#voiceStage')?.classList.remove('active');
  if($('#liveTranscript'))$('#liveTranscript').textContent='';
  document.body.classList.add('conversation-closed');
  setTimeout(()=>document.body.classList.remove('conversation-closed'),900);
  const toast=$('#toast');if(toast){toast.textContent='Konuşma kapatıldı. Mikrofon ve ses durduruldu.';toast.className='toast show';setTimeout(()=>toast.className='toast',3200)}
  $('#prompt')?.focus();
}
function bind(){
  $('#closeConversationBtn')?.addEventListener('click',closeConversation);
  $('#closeConversationMobile')?.addEventListener('click',closeConversation);
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!$('#settingsDialog')?.open)closeConversation()});
  addEventListener('pagehide',()=>{saveHandsFreeOff();stopMedia()});
}
document.readyState==='loading'?document.addEventListener('DOMContentLoaded',bind):bind();
})();
