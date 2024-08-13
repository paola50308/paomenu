import pygame
import random

# Inicialización de Pygame
pygame.init()

# Dimensiones de la pantalla
ancho_pantalla = 800
alto_pantalla = 600

# Creación de la pantalla
pantalla = pygame.display.set_mode((ancho_pantalla, alto_pantalla))
pygame.display.set_caption("Pac-Man")

# Colores
BLANCO = (255, 255, 255)
NEGRO = (0, 0, 0)
AMARILLO = (255, 255, 0)

# Tamaño de las celdas del laberinto
tamaño_celda = 40

# Definición del laberinto
laberinto = [
    "*******",
    "..................*",
    "..*..*.*..*",
    "................*",
    "..*.**...",
    "................*",
    "**..*..**",
    "...............",
    "..**..*..",
    "...............",
    "..*.**..*",
    "...............",
    ".**..*.**",
    "..................*",
    "*******"
]

# Variables de posición
pacman_x = 1
pacman_y = 1

# Función para dibujar el laberinto
def dibujar_laberinto():
    pantalla.fill(NEGRO)
    for fila in range(len(laberinto)):
        for columna in range(len(laberinto[fila])):
            if laberinto[fila][columna] == "*":
                pygame.draw.rect(pantalla, AZUL, (columna * tamaño_celda, fila * tamaño_celda, tamaño_celda, tamaño_celda))
            elif laberinto[fila][columna] == ".":
                pygame.draw.circle(pantalla, AMARILLO, (columna * tamaño_celda + tamaño_celda // 2, fila * tamaño_celda + tamaño_celda // 2), tamaño_celda // 10)
    pygame.draw.circle(pantalla, AMARILLO, (pacman_x * tamaño_celda + tamaño_celda // 2, pacman_y * tamaño_celda + tamaño_celda // 2), tamaño_celda // 2)
    pygame.display.update()

# Bucle principal del juego
ejecutando = True
while ejecutando:
    # Manejo de eventos
    for evento in pygame.event.get():
        if evento.type == pygame.QUIT:
            ejecutando = False
        elif evento.type == pygame.KEYDOWN:
            if evento.key == pygame.K_UP and laberinto[pacman_y - 1][pacman_x] != "*":
                pacman_y -= 1
            elif evento.key == pygame.K_DOWN and laberinto[pacman_y + 1][pacman_x] != "*":
                pacman_y += 1
            elif evento.key == pygame.K_LEFT and laberinto[pacman_y][pacman_x - 1] != "*":
                pacman_x -= 1
            elif evento.key == pygame.K_RIGHT and laberinto[pacman_y][pacman_x + 1] != "*":
                pacman_x += 1

    dibujar_laberinto()

# Finalización de Pygame
pygame.quit()