from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient

class ChartAPITestCase(TestCase):
    def setUp(self):
        self.client = APIClient()

    def test_candlestick_data_api(self):
        url = reverse('candlestick_data')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('data', response.data)
        self.assertTrue(len(response.data['data']) > 0)
        self.assertIn('x', response.data['data'][0])
        self.assertIn('open', response.data['data'][0])
        self.assertIn('high', response.data['data'][0])
        self.assertIn('low', response.data['data'][0])
        self.assertIn('close', response.data['data'][0])

    def test_line_chart_data_api(self):
        url = reverse('line_chart_data')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('labels', response.data)
        self.assertIn('data', response.data)
        self.assertTrue(len(response.data['labels']) > 0)
        self.assertTrue(len(response.data['data']) > 0)

    def test_bar_chart_data_api(self):
        url = reverse('bar_chart_data')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('labels', response.data)
        self.assertIn('data', response.data)
        self.assertTrue(len(response.data['labels']) > 0)
        self.assertTrue(len(response.data['data']) > 0)

    def test_pie_chart_data_api(self):
        url = reverse('pie_chart_data')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('labels', response.data)
        self.assertIn('data', response.data)
        self.assertTrue(len(response.data['labels']) > 0)
        self.assertTrue(len(response.data['data']) > 0)

    def test_date_range_filtering(self):
        url = reverse('candlestick_data')
        response = self.client.get(url, {'start': '2023-01-01', 'end': '2023-01-31'})
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('data', response.data)