# * -> Easy <- *
# Given a text file file.txt, print just the 10th line of the file.

# EL COMANDO Select-Object PERMITE SELECCIONAR UNA CANTIDAD DE LINEAS DE UN ARCHIVO DE TEXTO
Get-Content -Path "file.txt" | Select-Object -Skip 9 -First 1