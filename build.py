# Builds page.html (artifact fragment) and index.html (full document for Vercel) from src/ + data/
import json
t=open('src/template.html').read()
j=lambda f:json.dumps(json.load(open(f)),ensure_ascii=False).replace('</','<\\/')
page=t.replace('/*THEORY*/',j('data/theory.json')).replace('/*CASES*/',j('data/cases.json')).replace('/*APP*/',open('src/app.js').read())
open('page.html','w').write(page)
head,body=page.split('<header>',1)
open('index.html','w').write('<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n'+head+'</head>\n<body>\n<header>'+body+'</body>\n</html>\n')
