# ejercicio 1: 

**true || true || false && true || false && true && true || false**
# Resultado:
## por partes:

true || true = true

false && true = false

false && true && true = false

### resultado final:
true || false || false = True

# ejercicio 2: 

**true && (false || false && (true && (true || false && true))) || false && (true || false)**

# Resultado:
## por partes:




false && (true && (true || false && true))

false && (true && (true || false))

false && (true && (true))

false && (true) = False


false && (true || false) = false

### resultado final:

true && ( false) || false = false


# ejercicio 3: 

**!(!true && (false || false && !!!true || (true && !false))) || false && true** 

# Resultado:
## por partes:

(false || false && !!!true 

(false || false && false

(false || true) = true


||

(true && !false))) = true

||

false && true = false


### resultado final:

true || true || false = true
