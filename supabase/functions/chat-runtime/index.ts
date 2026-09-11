import 'jsr:@supabase/functions-js/edge-runtime.d.ts';
const split=name=>(Deno.env.get(name)||'').split(',').map(x=>x.trim()).filter(Boolean);
const notion=[1,2,3,4,5].map(index=>({index,key:(Deno.env.get(`NOTION_API_KEY_${index}`)||'').trim()})).filter(x=>x.key);
// Runtime implementation is deployed from this repository. Notion diagnostics preserve explicit secret numbering and are ordered before model providers.
