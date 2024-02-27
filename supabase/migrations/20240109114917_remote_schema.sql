
SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '"public", "extensions"', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

CREATE EXTENSION IF NOT EXISTS "pgsodium" WITH SCHEMA "pgsodium";

CREATE EXTENSION IF NOT EXISTS "pg_graphql" WITH SCHEMA "graphql";

CREATE EXTENSION IF NOT EXISTS "pg_stat_statements" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "pgcrypto" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "pgjwt" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "supabase_vault" WITH SCHEMA "vault";

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA "extensions";

SET default_tablespace = '';

SET default_table_access_method = "heap";

CREATE TABLE IF NOT EXISTS "public"."referrals" (
    "id" bigint NOT NULL,
    "owner_user_id" uuid NOT NULL,
    "referral_code" text NOT NULL,
    "created_at" timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE "public"."referrals" OWNER TO "postgres";

ALTER TABLE "public"."referrals" ALTER COLUMN "id" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME "public"."referrals_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);

CREATE TABLE IF NOT EXISTS "public"."used_referrals" (
    "id" bigint NOT NULL,
    "referral_id" bigint NOT NULL,
    "used_by_user_id" uuid NOT NULL,
    "used_at" timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE "public"."used_referrals" OWNER TO "postgres";

ALTER TABLE "public"."used_referrals" ALTER COLUMN "id" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME "public"."used_referrals_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);

ALTER TABLE ONLY "public"."referrals"
    ADD CONSTRAINT "referrals_owner_user_id_key" UNIQUE ("owner_user_id");

ALTER TABLE ONLY "public"."referrals"
    ADD CONSTRAINT "referrals_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."referrals"
    ADD CONSTRAINT "referrals_referral_code_key" UNIQUE ("referral_code");

ALTER TABLE ONLY "public"."used_referrals"
    ADD CONSTRAINT "used_referrals_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."referrals"
    ADD CONSTRAINT "fk_owner_user" FOREIGN KEY (owner_user_id) REFERENCES auth.users(id) ON DELETE CASCADE;

ALTER TABLE ONLY "public"."used_referrals"
    ADD CONSTRAINT "fk_referral" FOREIGN KEY (referral_id) REFERENCES referrals(id) ON DELETE CASCADE;

ALTER TABLE ONLY "public"."used_referrals"
    ADD CONSTRAINT "fk_used_by_user" FOREIGN KEY (used_by_user_id) REFERENCES auth.users(id) ON DELETE CASCADE;

ALTER TABLE ONLY "public"."referrals"
    ADD CONSTRAINT "referrals_owner_user_id_fkey" FOREIGN KEY (owner_user_id) REFERENCES auth.users(id);

ALTER TABLE ONLY "public"."used_referrals"
    ADD CONSTRAINT "used_referrals_referral_id_fkey" FOREIGN KEY (referral_id) REFERENCES referrals(id);

ALTER TABLE ONLY "public"."used_referrals"
    ADD CONSTRAINT "used_referrals_used_by_user_id_fkey" FOREIGN KEY (used_by_user_id) REFERENCES auth.users(id);

GRANT USAGE ON SCHEMA "public" TO "postgres";
GRANT USAGE ON SCHEMA "public" TO "anon";
GRANT USAGE ON SCHEMA "public" TO "authenticated";
GRANT USAGE ON SCHEMA "public" TO "service_role";

GRANT ALL ON TABLE "public"."referrals" TO "anon";
GRANT ALL ON TABLE "public"."referrals" TO "authenticated";
GRANT ALL ON TABLE "public"."referrals" TO "service_role";

GRANT ALL ON SEQUENCE "public"."referrals_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."referrals_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."referrals_id_seq" TO "service_role";

GRANT ALL ON TABLE "public"."used_referrals" TO "anon";
GRANT ALL ON TABLE "public"."used_referrals" TO "authenticated";
GRANT ALL ON TABLE "public"."used_referrals" TO "service_role";

GRANT ALL ON SEQUENCE "public"."used_referrals_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."used_referrals_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."used_referrals_id_seq" TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "service_role";

RESET ALL;
