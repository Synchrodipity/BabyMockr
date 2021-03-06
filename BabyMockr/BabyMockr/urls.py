from django.conf.urls import patterns, include, url
from django.contrib import admin

from Mockr.api.views import ListMockrUsers, ListMocks, ListBabyNames, ListMockRatings, ListFavorites, BabyNameDetail


urlpatterns = patterns('',
    # Examples:
    url(r'^$', 'Mockr.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^babyname/(?P<pk>\d+)/$', BabyNameDetail.as_view()),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^mockrusers/', ListMockrUsers.as_view()),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^mocks/', ListMocks().as_view()),
    url(r'^babynames/', ListBabyNames.as_view()),
    url(r'^mockratings/', ListMockRatings.as_view()),
    url(r'^favorites/',ListFavorites.as_view())
   # url(r'^nestedbabyname', ListNestedBabyNames.as_view())
)
