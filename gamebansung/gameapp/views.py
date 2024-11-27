from django.shortcuts import render
from django.http import JsonResponse
import threading
from .pygame_code.main import run_game


# Create your views here.
def get_home(request):
    return render(request, 'home.html')
def start_game(request):
    # Chạy Pygame trên một thread riêng để không chặn server Django
    thread = threading.Thread(target=run_game)
    thread.start()
    return JsonResponse({"message": "Game started successfully!"})
