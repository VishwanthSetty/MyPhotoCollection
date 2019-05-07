from django.urls import path
from .views import *

app_name = 'admin'

urlpatterns = [
    path('login/admin', admin_login, name='adminLogin'),
]
