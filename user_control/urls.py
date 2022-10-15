from rest_framework import routers
from django.urls import path, include

from .views import (
    CreateUserView,
    LoginView,
    UpdatePasswordView,
    MeView,
    LogoutView
)


router = routers.DefaultRouter()

router.register('create-user', CreateUserView, 'create user')
router.register('login', LoginView, 'login')
router.register('logout', LogoutView, 'logout')
router.register('update-password', UpdatePasswordView, 'update-password')
router.register('me', MeView, 'me')


urlpatterns = router.urls
