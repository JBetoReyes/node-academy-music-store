# Ejercicio: Mini RPG
 
## Objetivo
Reforzar de de manera creativa y divertida las técnicas de programación funcional y orientada a objetos con ES6 en js/ts en el alumno que tome el workshop.
 
### Reglas
1) Utilizar Node.js con Typescript como lenguajes de programacion, en específico programación funcional con ES+
2) El resultado final deberá ser un juego de consola
3) Nomenclatura, documentación y logs en ingles
4) El juego deberá ser entregado en un máximo de 14 días durante los cuales tendrá acceso a soporte con el staff del workshop
 
### Criterios de aceptación del juego
1) Deberá tener capacidad de almenos tener 1 jugador
2) Deberá tener una librería de criaturas (al menos 3 distintas)
3) Tanto el jugador como criaturas tendrán:
   - LVL -> Nivel del jugador: default
   - EXP -> puntos de experiencia que se ganan matando mounstros para subir niveles
   - STR -> Fuerza
   - DEF -> Defenza
   - HP -> puntos de vida
   - MP -> puntos de magia *opcional
   - Acciones -> minimo 1: ej: attack, cure
4) Las acciones tendrán:
   - MP *opcional
   - ATK -> daño base
5) El juego sera por rondas (1 o más jugadores contra 1-5 criaturas) que a la vez se dividen en turnos
6) Tanto criaturas como jugadores morirán al acabarseles el HP y ya no podrán participar en el juego
7) El juego en cualquier turno del jugador deberá poder interpretar los comandos (que no consumen el turno):
   - stats -> que le darán en consola sus stats [LVL,HP,MP,STR,DEF]
   - list:players -> que le darán en consola cada jugador activo con sus stats a un lado por renglón
   - list:creatures -> que le darán en consola cada criatura activa con sus stats a un lado por renglón
 
#### Inicio del Juego
- La consola dara un mensaje de bienvenida al juego
- Preguntará el/los nombre(s) de(l) judagor(es) *opcional
- Iniciará una ronda
 
#### Rondas
- Al iniciar una ronda el juego 
  - crea al azar entre 1 y 3 criaturas (deben ser generadas con stats un poco menores a las de el/los jugador(es) que las vaya(n) a enfrentar)
  - asignará el órden de los turnos de los miembros del juego al azar, pero dicho órden prevalecerá mientras la ronda siga activa
  - reestablece el HP/MP de todos los miembros
  - mostrar en consola la lista de criaturas que creó junto con sus stats a un lado y el numero de criatura 
  -> ej: (1) Crazy Creature [LVL: 1, HP: 20, MP: 10, STR: 2, DEF: 1]
 
#### Turnos
- Los turnos de las criaturas son de 1 segundo c/u y en dicho turno, la criatura elige un ataque al azar hacia el/los jugador(es)
- Cuando es el turno del jugador, el juego le pregunta al jugador que hará y éste solo puede responderle con 
  - attack {numeroDeCriatura} o attack {nombreDeCriatura} (en caso de tener varios ataques, se elegirá uno al azar)
  - {nombreDeLaMagia} *opcional
  - {nombreDeItem} *opcional
- Cuando el juego ejecute la acción deberá informar en consola quien le bajo a quien, cuanto HP y si lo mató 
-> ej: Player1 attacked with "Tackle" to "Crazy Creature" and inflicted 20 damage points
- Cuando algun miembro activo del juego muere deberán aparecer también logs (en caso de muerte del jugador: "Game Over") 
-> ej: Player1 killed "Crazy Creature"
-> ej; Player1 die... "Game Over"
 
#### Criaturas
- Si una criatura muere deberá darle al jugador que la mato puntos de experiencia
- Puede entregar además items elegidos al azar de los posibles items que pueda tener esa criatura *opcional
 
#### Jugadores
- El turno del jugador no tiene tiempo de expiración
- Si el jugador consigue una cantidad de puntos de experiencia suficientes podrá subir de nivel y al hacerlo:
  - sus stats deberán subir exponencialmente a su nivel
  - se re-establece su HP/MP
  (deberás crear un(a) tabla/mapa de puntos para subir de nivel, ej: 2 -> 100, 3 -> 300, etc...)
 
#### Acciones
1) Ataques (consumen 1 turno)
    - DMG -> para calcular el daño usa tu cratividad para crear una fórmula que debe considerar el nivel y ataque del que lo use y como contrapeso la defensa de quien lo recibe + un factor al azar en el que cualquiera puede fallar por completo el ataque o apuntar un golpe con el 110% del máximo posible)
2) Magias *opcional (si son de ataque consumen un turno)
    - Consumo de MP
    - Daño o Regeneración -> su fórmula debe considerar el nivel del que la usa y el daño o regeneración deberá también ser al azar pero nunca menor al 80% o mayor al 150% del máximo posible
    - Características especiales *opcional
    -> ej: ataca a todas las criaturas
3) Uso de items (si son de ataque consumen un turno) *opcional
-> ej: pociones, manzanas, elixires, etc.
 
#### Como ganar el juego
- Venciendo a todas las criaturas de la ronda sin morir
- Si el jugador gana el juego puede iniciar una nueva ronda contra nuevas criaturas y deberá mantener su nivel/experiencia/stats *opcional
- Podrá guardar su partida al ganar un juego *opcional
 
#### Como perder el juego
- Si al jugador se le acaba el HP, muere y se acaba el juego
- Puede continuar e iniciar una nueva ronda *opcional
 
-------------
#### Criterios de calificación
- Creatividad en formulas de daño/stats/mensajes
- Buenas prácticas en arquitectura e implementación
- Nomenclatura clara en funciones, variables, clases, etc
- Uso de ES6
- Uso de OOP
- Lo que probaremos en tu juego:
  - Poder ganar al menos 1 ronda de 3
  - Poder subir de nivel al menos en 3 rondas
  - Poder morir en al menos 1 ronda de 10
  - Logs de daño
  - Logs de muerte de criatura
  - Logs de ganaste ronda
  - Logs de game over
  - Logs de recuperación de daño *opcional
 
#### Puntos Extras
- Implementación de los puntos *opcionales
- Sistema de login
- Sistema para guardar/cargar partidas en un archivo
- Multi-jugador
  
#### Tips
- Las stats del jugador deberán ser mejores a las de una criatura de su mismo nivel, ya que éste siempre se enfrentará a 1-3 al mismo tiempo, deberá tener por lo menos 3 veces mas HP que las criaturas y por lo menos el doble de fuerza y defensa, pero puedes jugar con los números y balancear tu juego como se te haga más divertido
- Creale a los usuarios la capacidad de usar magia y en especial la magia "cure"