import pygame
import sys

def run_game():
    # Khởi tạo Pygame
    pygame.init()

    # Tạo cửa sổ game
    screen = pygame.display.set_mode((800, 600))
    pygame.display.set_caption("Pygame + Django Integration")

    # Màu nền
    bg_color = (0, 0, 0)  # Đen
    clock = pygame.time.Clock()

    running = True
    while running:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False

        # Làm mới màn hình
        screen.fill(bg_color)
        pygame.display.flip()

        # Giới hạn FPS
        clock.tick(30)

    pygame.quit()
    sys.exit()
