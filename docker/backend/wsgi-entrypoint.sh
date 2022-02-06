# add execute rights
run chmod +x docker/backend/wsgi-entrypoint.sh

#!/bin/sh

until cd /luckerdogs/backend/server
do
    echo "Waiting for server volume..."
done

until ./manage.py migrate
do
    echo "Waiting for db to be ready..."
    sleep 2
done

./manage.py collectstatic --noinput

DEBUG=True ./manage.py runserver 0.0.0.0:8000

#####################################################################################
# original:
# gunicorn server.wsgi --bind 0.0.0.0:8000 --workers 4 --threads 4

# Options to DEBUG Django server
# Optional commands to replace abouve gunicorn command

# Option 1:
# run gunicorn with debug log level
# gunicorn server.wsgi --bind 0.0.0.0:8000 --workers 1 --threads 1 --log-level debug

# Option 2:
# run development server
# DEBUG=True ./manage.py runserver 0.0.0.0:8000