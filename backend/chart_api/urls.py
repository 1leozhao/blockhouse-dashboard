from django.urls import path
from . import views

urlpatterns = [
    path('', views.dashboard, name='dashboard'),
    path('candlestick-chart-data/', views.candlestick_data, name='candlestick_data'),
    path('line-chart-data/', views.line_chart_data, name='line_chart_data'),
    path('bar-chart-data/', views.bar_chart_data, name='bar_chart_data'),
    path('pie-chart-data/', views.pie_chart_data, name='pie_chart_data'),
]