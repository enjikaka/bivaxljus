FROM hayd/deno:alpine-1.8.0

WORKDIR /app
EXPOSE 4507

# These steps will be re-run upon each file change in your working directory:
ADD . /app

CMD ["deno", "run", "--allow-net", "--allow-read", "https://deno.land/std@0.89.0/http/file_server.ts"]
