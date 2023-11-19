openssl genrsa -out key.pem
<br>
openssl req -new -key key.pem -out csr.pem
<br>
openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
<br>
rm csr.pem
