docker build . -t deisi_website/deisi_frontend
docker run -p 8081:8081 -d --name deisi_website_frontend deisi_website/deisi_frontend
docker start deisi_website_frontend
docker ps
