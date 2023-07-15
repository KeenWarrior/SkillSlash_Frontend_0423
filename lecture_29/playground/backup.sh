# sql dump
pg_dump --dbname=skillslash --file=backup.sql

# sql restore
psql skillslash --file=backup.sql 

# custom binary dump
pg_dump -F c --dbname=skillslash --file=backup.dump

# custom binary restore
pg_restore --dbname=skillslash backup.dump

