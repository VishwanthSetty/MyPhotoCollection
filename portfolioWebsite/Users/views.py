# from django.shortcuts import render
from django.http import HttpResponse


def landing_page():
    return HttpResponse('This will be the landing Page...')
