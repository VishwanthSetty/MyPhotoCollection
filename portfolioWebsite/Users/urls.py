from django.urls import path
from .views import *

app_name = 'Users'

urlpatterns = [
    path('', landing_page, name='landingPage'),
]
