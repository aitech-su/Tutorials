# hello/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.say_hello, name='say_hello'),
    path('france/', views.say_france, name='say_france'),
]
