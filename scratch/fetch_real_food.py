import urllib.request
import re
import json

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

def fetch_images(url):
    try:
        req = urllib.request.Request(url, headers=headers)
        html = urllib.request.urlopen(req, timeout=10).read().decode('utf-8', errors='ignore')
        imgs = re.findall(r'<img[^>]+src=["\']([^"\']+)["\']', html, re.I)
        og = re.findall(r'<meta[^>]+property=["\']og:image["\'][^>]+content=["\']([^"\']+)["\']', html, re.I)
        bg = re.findall(r'url\([\'"]?([^"\'\)]+)[\'"]?\)', html, re.I)
        return {'og': og, 'imgs': imgs[:20], 'bg': bg[:15]}
    except Exception as e:
        return {'error': str(e)}

print('--- BLACK SHEEP ---')
print(json.dumps(fetch_images('https://www.blacksheepcafe.com/'), indent=2))
print('--- COMMUNAL ---')
print(json.dumps(fetch_images('https://www.communalrestaurant.com/'), indent=2))
print('--- BOMBAY HOUSE ---')
print(json.dumps(fetch_images('https://bombayhouse.com/'), indent=2))
