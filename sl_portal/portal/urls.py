from django.urls import include, path
from rest_framework import routers, serializers, viewsets
from rest_framework.authtoken import views

from .models import Volunteer


class VolunteerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Volunteer
        fields = [
            'id',
            'name',
            'course',
            'yr_level',
            'email',
            'status',
            'created_at',
        ]


class VolunteerViewSet(viewsets.ModelViewSet):
    queryset = Volunteer.objects.all()
    serializer_class = VolunteerSerializer


router = routers.DefaultRouter()
router.register(r'volunteers', VolunteerViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('api-token-auth/', views.obtain_auth_token),
]
