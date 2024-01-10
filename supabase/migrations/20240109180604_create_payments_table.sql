create table
  payments (
    id bigint primary key generated always as identity,
    user_id uuid references auth.users (id) not null,
    customer_email text not null,
    amount integer not null,
    currency text not null,
    payment_status text not null,
    stripe_payment_intent_id text not null,
    expiration_date timestamp with time zone not null,
    expired boolean default false,
    created_at timestamp with time zone default timezone ('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone ('utc'::text, now()) not null,
    constraint fk_user foreign key (user_id) references auth.users (id) on delete cascade
  );