from django.urls import path
from .views import *

app_name = 'admin'

url_patterns = [
    path('admin/login/', admin_login, name='adminLogin'),
]
