revoke all on function public.handle_new_user() from public;
revoke all on function public.handle_new_user() from anon;
revoke all on function public.handle_new_user() from authenticated;

create policy own_usage_insert on public.usage_events
for insert with check(owner_id=(select auth.uid()));

create index assistants_owner_idx on public.assistants(owner_id);
create index flows_assistant_idx on public.flows(assistant_id);
create index flow_nodes_flow_idx on public.flow_nodes(flow_id);
create index flow_edges_flow_idx on public.flow_edges(flow_id);
create index flow_edges_source_idx on public.flow_edges(source_id);
create index flow_edges_target_idx on public.flow_edges(target_id);
create index conversations_owner_idx on public.conversations(owner_id);
create index conversations_assistant_idx on public.conversations(assistant_id);
