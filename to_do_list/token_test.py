import requests
response = requests.post('http://127.0.0.1:8000/api-auth-token/', data={'username': 'admin', 'password': '123'})
print(response.status_code)
print(response.json())

# python3 token_test.py
# 200
# {'token': '51965aa7731fbef1ec0a6c27cb4b5105c2443641'}
