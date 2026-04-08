import urllib.request
import re

req = urllib.request.Request(
    'https://inteligenciadigitalpro.com.br/fotos-profissionais-express/', 
    headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'}
)
html = urllib.request.urlopen(req).read().decode('utf-8')
images = set(re.findall(r'<img[^>]+src=\"([^\"]+)\"', html))
print('\n'.join(images))
