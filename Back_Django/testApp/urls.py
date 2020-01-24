from django.http import HttpResponse
from django.urls import path


def func(request, postId):
    print(request)
    return HttpResponse('{"message":"Hello From The Django Server"}')


urlpatterns = [
    path('post/<int:postId>', func),
]
